# TODO LIST MERN Application

![image](https://github.com/Faiq-Shahzad/TodoApp_MERN/blob/main/frontend/assets/coverImage.png?raw=true)
This repository contains a MERN (MongoDB, Express, React, Node.js) project that has been configured for deployment using Docker. The project utilizes Docker containers to ensure easy and consistent deployment across different environments.

## Prerequisites
To run this project, you need to have the following tools installed:

- Docker
- Docker Compose

## Steps To Run Project
To run this project, follow the steps below:

1. Clone this git repository:

```
git clone https://github.com/your-username/your-project.git
```
2. Open the project folder from your local machine.
3. Start the Docker Container using the following command:
```
docker-compose up -d
```

## Unit Testing (JEST)
To run the unit testing, run command:
```
npm jext ./test/test.js
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
