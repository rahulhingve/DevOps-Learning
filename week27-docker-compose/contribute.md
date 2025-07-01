## Manual Installation

1. Install Node.js locally.
2. Clone the repository.
3. Install dependencies using `npm install`.
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
8. Build the project using `npm run build`.
9. Start the application using `npm run start`.

## Docker Installation
