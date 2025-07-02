## Manual Installation

1. Install Node.js locally.
2. Clone the repository.
3. Install dependencies using:
   ```bash
   npm install
   ```
4. Start the database locally:
   ```bash
   docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
   ```
5. Go to [neon.tech](https://neon.tech) and create a new database.
6. Update the `.env` file with your database credentials.
7. Run the following Prisma commands:
   ```bash
   npx prisma migrate
   npx prisma generate
   ```
8. Build the project using:
   ```bash
   npm run build
   ```
9. Start the application using:
   ```bash
   npm run start
   ```

## Docker Installation

1. Install Docker on your system.
2. Start the Docker service.
3. Create a new Docker network:
   ```bash
   docker network create user_project
   ```

4. Start the PostgreSQL container:
   ```bash
   docker run --name postgres --network user_project -e POSTGRES_PASSWORD=rahul -d -p 5432:5432 postgres
   ```   
5. Build the Docker image:
   ```bash
   docker build --network=host -t user-project .
   ```

6. Run the application container:
   ```bash
   docker run -e DATABASE_URL=postgresql://postgres:rahul@postgres:5432/postgres --network user_project -p 3000:3000 user-project
   ```

## Docker Compose Installation Steps

1. Install Docker and Docker Compose.
2. Run the following command to start the services:
   ```bash
   docker-compose up
   ```