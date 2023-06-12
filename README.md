# TODO LIST MERN Application
This repository contains a MERN (MongoDB, Express, React, Node.js) project that has been configured for deployment using Docker. The project utilizes Docker containers to ensure easy and consistent deployment across different environments.

## Prerequisites
To run this project, you need to have the following tools installed:

- Docker
- Docker Compose: Installation Guide

## Getting Started
To get started with this project, follow the steps below:

Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/your-project.git
Navigate to the project directory:

bash
Copy code
cd your-project
Build and start the Docker containers:

bash
Copy code
docker-compose up --build
This command will build and start the Docker containers defined in the docker-compose.yml file.

Once the containers are up and running, you can access the application by visiting http://localhost:3000 in your web browser.

Project Structure
The project structure is as follows:

client: This directory contains the React client-side code.
server: This directory contains the Express server-side code.
docker-compose.yml: This file defines the Docker services and their configurations.
Dockerfile.client: This file contains the Dockerfile configuration for the client container.
Dockerfile.server: This file contains the Dockerfile configuration for the server container.
