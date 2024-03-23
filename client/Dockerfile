## the node version i'm using as a parent image

FROM node:20-alpine
## add the path of the project

WORKDIR /app
## copy of package.json

COPY package.json ./
COPY package-lock.json ./
## install the app depandencies

RUN npm install

## Copy the rest of the application code to the container

COPY . .
## the port

EXPOSE 5173
## the command for running the app

CMD ["npm", "run", "dev"]