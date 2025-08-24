# Todo API

## Description
A simple Todo API built with Node.js, Express, and MongoDB. This API allows users to create, read, update, and delete todo entries.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Todo-backend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   DATABASE_URL=mongodb://username:password@host:port/database
   ```

## Usage
To start the server, run:
```bash
npm start
```
or for development with auto-reload:
```bash
npm run dev
```

## API Endpoints
- **Create Todo**
  - `POST /api/v1/createtodo`
  - Request Body: `{ "title": "Todo Title", "description": "Todo Description" }`
  
- **Get All Todos**
  - `GET /api/v1/todos`
  
- **Get Todo by ID**
  - `GET /api/v1/todos/:id`
  
- **Update Todo**
  - `PUT /api/v1/todos/:id`
  - Request Body: `{ "title": "Updated Title", "description": "Updated Description" }`
  
- **Delete Todo**
  - `DELETE /api/v1/todos/:id`

## License
This project is licensed under the ISC License.
