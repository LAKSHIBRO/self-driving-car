# Self-Driving Car Simulation Project

This project simulates a self-driving car that learns to navigate a road, avoid obstacles, and improve its driving capabilities using a neural network. The car is trained over time through reinforcement learning and can be visualized in real-time. The project demonstrates how deep learning can be applied to autonomous driving systems.

## Features

- **AI Driving**: The car is controlled by a neural network that improves its performance as it learns from its environment.
- **Traffic Simulation**: Other cars on the road create obstacles that the self-driving car must avoid.
- **Neural Network Visualization**: The neural network of the best-performing car is visualized on a separate canvas.
- **Best Neural Network Saving**: The best-performing car's neural network is saved in the browser's `localStorage` and reused in future sessions.

## Demo

You can interact with the simulation by opening the `index.html` file in your browser. The simulation will start automatically, showing a car navigating a road with obstacles (other traffic).

## Getting Started

To run the simulation locally:

1. Clone this repository to your machine.
2. Open the `index.html` file in your preferred web browser (e.g., Google Chrome, Mozilla Firefox).
3. The self-driving car will automatically start navigating the road.

```bash
git clone https://github.com/LAKSHIBRO/self-driving-car.git
cd self-driving-car-simulation
open index.html
