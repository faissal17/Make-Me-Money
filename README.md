# Make-Me-Money

## Overview

***Make Me Money*** is a powerful web application designed to assist individuals in sharing their freelancing experiences and providing valuable advice on leading freelancing websites. Whether you are a seasoned freelancer or a newcomer to the gig economy, Make-Me-Money aims to be your go-to platform for insights, tips, and recommendations.

## Key Features

1. ***Experience Sharing***: Users can share their freelancing journeys, highlighting successes, challenges, and lessons learned. This allows for a rich exchange of experiences, fostering a supportive community atmosphere.

2. ***Advice Hub***: Access a comprehensive advice hub that covers various aspects of freelancing, including negotiating rates, building a strong portfolio, and managing client relationships. Benefit from the collective wisdom of experienced freelancers.

3. ***Platform Reviews***: Get detailed reviews and assessments of popular freelancing platforms such as Upwork, Fiverr, and Freelancer. Make informed decisions about where to invest your time and skills.

4. ***Community Interaction***: Engage with a vibrant community of freelancers, ask questions, and participate in discussions. Networking opportunities abound, providing a chance to connect with like-minded individuals.

5. ***Resource Center***: Explore a curated collection of resources, tools, and guides to enhance your freelancing journey. From productivity apps to contract templates, Make-Me-Money has you covered.

# Getting started

1. Follow these simple steps to get a local copy up and running.

```bash
git clone https://github.com/faissal17/Make-Me-Money.git
```

2. navigate the project

```bash
cd Make-Me-Money
```

3.  Install backend dependencies using npm

```bash
cd Server
```

```bash
npm install
```

3.  Install Frontend dependencies using npm

```bash
cd client
```

```bash
npm install
```

# Configration

You may need to configure some environment variables.

1. Extract the .env file from the .env.example file

```bash
cp .env.example .env
```

I already mentioned in env. an example that you will need to add a secret key you can write whatever you want but in case you want more security you can run the following command in your terminal

```bash
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"

```

run the following command and get the generated secret key

you will also need some requirements in your .env file


# Docker Setup Guide <img src="https://bunnyacademy.b-cdn.net/what-is-docker.png" width="50" align="right">

![Docker Image](https://miro.medium.com/v2/resize:fit:1079/1*3ds-PdxGGMN-ZzJH95_lsA.png)

## Overview

This guide provides a comprehensive overview of setting up Docker and Docker Compose for the `AlloMedia` project. The setup includes creating a Dockerfile, configuring Docker Compose, and validating the environment.

## Prerequisites

Ensure that Docker is installed on your system. If not, download and install it from [Docker's official website](https://www.docker.com/products/docker-desktop).

- [Docker](https://docs.docker.com/get-docker/) installed on your development machine.
- [Docker Compose](https://docs.docker.com/compose/install/) installed on your development machine.
- Node.js : [Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): Comes with Node.js installation.

## Setting Up Docker

1. **Install Docker:**

    Follow the official Docker installation guide for your operating system: [Install Docker](https://docs.docker.com/get-docker/)

2. **Verify Docker Installation:**

    Open a terminal and run the following command to verify that Docker is installed and running:

    ```bash
    docker --version
    ```

3. **Install Docker Compose:**

    Docker Compose is a tool for defining and running multi-container Docker applications. Install it using the following command:

    ```bash
    docker-compose --version
    ```

## Step-by-Step Setup

### 1. Dockerfile

- Refer to [docker-file.md](./docker-file.md) for the Dockerfile setup. This file contains instructions for building a Docker image for the AlloMedia application.

### 2. Docker Compose Configuration

- Refer to [docker-compose.md](./docker-compose.md) for configuring Docker Compose. This file defines services for the AlloMedia application and PostgreSQL database.

### 3. Building Docker Image

- Build the Docker image by running the following command :

    ```bash
    # Command for building the Docker image

    docker build -t your-image-name.
    ```

Replace `your-image-name` with the desired name for your Docker image.

### 4. Running with Docker Compose

- Start the services using Docker Compose :

    ```bash
    # Command for running services with Docker Compose

    docker-compose up
    ```

### 5. Access the Application

- Open a web browser and navigate to http://localhost:your-port (replace `your-port` with the specified port in `.env`) to access the running application.

### 6. Validation

- Access the `AlloMedia` application in your web browser at http://localhost:3000. Ensure that the application functions correctly within the Docker environment.

## Additional Configuration and Customization

- **Environment Variables:**

    Adjust environment variables in the `.env` file or directly in the Dockerfile for configuration customization.

- **Docker Compose:**

    If your project involves multiple containers, consider using Docker Compose to manage the entire application stack. Refer to the `docker-compose.md` file for docker-compose configuration details.
ker-compose.md` file for Docker Compose configuration details.

## Docker CLI Guide

This guide covers essential Docker command-line interface (CLI) commands for managing containers, images, and other Docker-related tasks.

### Docker CLI Commands

- **[docker run](https://docs.docker.com/engine/reference/commandline/run/):** Run a command in a new container.
- **[docker build](https://docs.docker.com/engine/reference/commandline/build/):** Build an image from a Dockerfile.
- **[docker ps](https://docs.docker.com/engine/reference/commandline/ps/):** List running containers.
- **[docker images](https://docs.docker.com/engine/reference/commandline/images/):** List images on your system.
- **[docker exec](https://docs.docker.com/engine/reference/commandline/exec/):** Run a command in a running container.
- **[docker-compose](https://docs.docker.com/compose/reference/):** Manage multi-container Docker applications.

## Resources and Further Information

For detailed information on Docker CLI commands and their usage, refer to the official Docker documentation:

- [Docker CLI Reference](https://docs.docker.com/engine/reference/commandline/)
- [Docker Compose Reference](https://docs.docker.com/compose/reference/)

<!-- Click [here](./docker-cli.md) for the full Docker CLI guide. -->

## Support

For assistance or questions related to the Docker setup, contact our support team at [yhammani.dev@gmail.com](mailto:yhammani.dev@gmail.com).

Happy coding!

