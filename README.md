# TODO LIST MERN Application

![coverImage](https://github.com/Faiq-Shahzad/TodoApp_MERN/assets/85623366/fa8eb3c7-ee1d-4c9c-a4c9-09fc11903aa0)

This repository contains a MERN (MongoDB, Express, React, Node.js) project that has been configured for deployment using Docker. The project utilizes Docker containers to ensure easy and consistent deployment across different environments.

## Prerequisites
To run this project, you need to have the following tools installed:

- Docker
- Docker Compose

## Steps To Run Project
To run this project, follow the steps below:

1. Clone this git repository:

```
git clone https://github.com/Faiq-Shahzad/TodoApp_MERN.git
```
2. Open the project folder from your local machine.
3. Start the Docker Container using the following command:
```
docker-compose up -d
```

## Unit Testing (JEST)
To run the unit testing, in terminal, run commands:
```
cd backend
npx jest ./test/test.js
```
## Project Structure
The project structure is as follows:

- /frontend
  - /src
    - /assets (containing background images, etc.)
    - /components (TodoList Components)
    - /utils (API Handler)
    - App.js
  - Dockerfile
  
- /backend
  - /controllers (Controllers and Routes)
  - /models (Todo Schema)
  - /test (test.js using JEST)
  - server.js
  - Dockerfile
