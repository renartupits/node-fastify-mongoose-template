# Node.js, TypeScript, Fastify, Mongoose, and Pino Template

A template project designed for building fast and efficient RESTful APIs with **Node.js**, **TypeScript**, **Fastify**, **Mongoose**, and **Pino**. This project utilizes modern development tools and practices including **ESLint**, **pnpm** for package management, and **Docker** for running MongoDB locally.

## 🛠️ Technologies Used
- **Node.js** v22.0
- **Typescript** v5.7
- **Fastify** v5
- **Mongoose** v8.8
- **ESLint** v9.15
- **Pino** for logging
- **pnpm** as the package manager
- **MongoDB** (running via Docker)

## 🚀 Features
- High-performance **Fastify** web server for building RESTful APIs
- MongoDB integration using **Mongoose**
- TypeScript for better development experience and code quality
- Fastify plugins for **CORS** and **MongoDB** connection management
- Generic MongoDB repository functions for cleaner code
- **Pino** integrated for fast and structured logging
- Pre-configured Docker setup for MongoDB
- Linting and code quality with **ESLint**
- Scalable and easy-to-understand project structure

## 📦 Project Structure
```bash
/src
    ├── controllers          # API route handlers
    ├── fetcher              # Helper functions for fetching data
    ├── interfaces           # TypeScript interfaces for data models
    ├── middlewares          # Custom middlewares for the Fastify app
    ├── persistence
    │    ├── models          # MongoDB document definitions (Mongoose schemas)
    │    ├── repository      # Custom MongoDB query functions
    │    ├── BaseRepository.ts # Generic base functions for MongoDB communication
    ├── plugins              # Fastify plugins for middleware setup
    │    ├── cors            # CORS setup for Fastify
    │    ├── mongodb         # MongoDB connection plugin
    ├── routes               # API route definitions
    ├── service              # Business logic layer
    ├── app.ts               # Application initialization, plugins, routes, and middlewares
    ├── server.ts            # The starting point for the application
````

## 💿 Installation
### Prerequisites
- Node.js (v22.9 or higher)
- Docker (for MongoDB container)


```bash
git clone https://github.com/renartupits/node-fastify-mongoose-template.git
cd node-fastify-mongoose-template
```

### Install dependencies using pnpm
Make sure you have pnpm installed. If not, you can install it globally using:
```bash
npm install -g pnpm
```
Now, install the project dependencies:
```bash
pnpm install
```

### Setup MongoDB with Docker
This project uses **MongoDB** for data storage. You can use the included docker-compose.yml to start a local MongoDB container:
```bash
docker-compose up -d
```
This will pull the MongoDB image and start the database on the default port 27017.

### Environment Configuration
Create a .env file in the root directory with the following content:
```bash
DATABASE_URL=mongodb://root:example@localhost:27017/template_mongo?authSource=admin
```
Ensure that the MongoDB instance is running before starting the application.

## 🎬 Running the application
### Run the Development Server

To start the Fastify server in development mode, use the following command:
```bash
pnpm dev
```
This will start the server at http://localhost:3000.

### Run Tests
If you have tests set up, you can run them using:
```bash
pnpm test
```

## 📁 Fastify API Structure
- **Controllers:** Define route handlers and API logic.
- **Services:** Contains the business logic for your application.
- **Repositories:** Abstract MongoDB operations with Mongoose for better data handling and scalability.
- **Middlewares:** Custom logic to run before or after requests.
- **Plugins:** Fastify-specific plugins such as CORS and MongoDB connection setup.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
