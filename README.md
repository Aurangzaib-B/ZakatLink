# ZakatLink

ZakatLink is a full-stack TypeScript application connecting students in need with generous donors through Zakat donations.

## Project Structure

```
ZakatLink/
├── server/          # Backend Node.js + Express + Sequelize + MySQL
└── client/          # Frontend React + Vite + TailwindCSS
```

## Tech Stack

### Server
- **Node.js** with **TypeScript**
- **Express.js** - Web framework
- **Sequelize** - ORM for MySQL
- **MySQL2** - Database
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### Client
- **React** with **TypeScript**
- **Vite** - Build tool
- **React Router** - Routing
- **TailwindCSS** - Styling
- **Axios** - HTTP client

## Prerequisites

- Node.js (v16 or higher)
- MySQL (v8 or higher)
- npm or yarn

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ZakatLink
```

### 2. Setup Server

```bash
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update .env with your database credentials
# Edit DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD, JWT_SECRET

# Create database in MySQL
mysql -u root -p
CREATE DATABASE zakatlink;
EXIT;

# Run development server (with auto-sync of database models)
npm run dev

# Or build and run production
npm run build
npm start
```

The server will start on `http://localhost:5000`

### 3. Setup Client

```bash
cd client

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Update VITE_API_URL if needed (defaults to http://localhost:5000/api)

# Run development server
npm run dev

# Or build for production
npm run build
npm run preview
```

The client will start on `http://localhost:5173`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
  - Body: `{ name, email, password, role?, isAnonymous? }`
  - Returns: `{ token, user }`

- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`
  - Returns: `{ token, user }`

- `GET /api/auth/profile` - Get current user profile (requires authentication)
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ user }`

## User Model

The User model includes the following fields:
- `id` (UUID) - Primary key
- `name` (String) - User's full name
- `email` (String) - Unique email address
- `password` (String) - Hashed password
- `role` (Enum) - User role: 'student', 'donor', or 'admin'
- `isVerified` (Boolean) - Account verification status
- `isAnonymous` (Boolean) - Anonymous donation preference

## Pages

- **Home** (`/`) - Landing page with introduction
- **Login** (`/login`) - User login page
- **Register** (`/register`) - User registration page
- **Dashboard** (`/dashboard`) - Protected user dashboard

## Development

### Running Both Server and Client

Open two terminal windows:

**Terminal 1 (Server):**
```bash
cd server
npm run dev
```

**Terminal 2 (Client):**
```bash
cd client
npm run dev
```

## Environment Variables

### Server (.env)
```
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=3306
DB_NAME=zakatlink
DB_USER=root
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
```

### Client (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected routes requiring authentication
- CORS configuration
- Input validation
- SQL injection prevention through Sequelize ORM

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
