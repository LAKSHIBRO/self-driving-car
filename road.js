class Road {
    constructor(x, width, laneCount = 3) {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width / 2;
        this.right = x + width / 2;

        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;

        const topLeft = { x: this.left, y: this.top };
        const topRight = { x: this.right, y: this.top };
        const bottomLeft = { x: this.left, y: this.bottom };
        const bottomRight = { x: this.right, y: this.bottom };
        this.borders = [
            [topLeft, bottomLeft],
            [topRight, bottomRight]
        ];

        // Animating the road markings
        this.markingOffset = 0;
    }

    getLaneCenter(laneIndex) {
        const laneWidth = this.width / this.laneCount;
        return this.left + laneWidth / 2 + Math.min(laneIndex, this.laneCount - 1) * laneWidth;
    }

    draw(ctx, time) {
        ctx.lineWidth = 5;
        
        // Alternate between day and night
        const isDay = Math.sin(time / 1000) > 0;

        // Road color changes for day and night effect
        ctx.fillStyle = isDay ? "#2E3B4E" : "#1E2B3C"; // Darker road for night
        ctx.fillRect(this.left, this.top, this.width, this.bottom - this.top);

        // Animated lane dividers (moving upwards as the car moves)
        ctx.setLineDash([20, 20]);
        ctx.lineWidth = 3;
        for (let i = 1; i < this.laneCount; i++) {
            const x = lerp(this.left, this.right, i / this.laneCount);
            ctx.beginPath();
            ctx.moveTo(x, this.top + this.markingOffset);
            ctx.lineTo(x, this.bottom + this.markingOffset);
            ctx.strokeStyle = "#fff";
            ctx.stroke();
        }
        this.markingOffset -= 5; // Speed of moving markings
        if (this.markingOffset < -40) this.markingOffset = 0; // Reset when markings go out of view

        // Road borders with gradient color
        ctx.setLineDash([]);
        this.borders.forEach((border, index) => {
            const gradient = ctx.createLinearGradient(
                border[0].x, border[0].y, 
                border[1].x, border[1].y
            );
            gradient.addColorStop(0, index % 2 === 0 ? '#FF6347' : '#32CD32'); // Alternating red/green borders
            gradient.addColorStop(1, '#000000');

            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.strokeStyle = gradient;
            ctx.stroke();
        });
    }
}

// Helper function to interpolate values
function lerp(start, end, t) {
    return start + (end - start) * t;
}
