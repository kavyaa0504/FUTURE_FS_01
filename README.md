# LeadFlow CRM

LeadFlow CRM is a full-stack client lead management system built with React, Node.js, Express, and MongoDB.

## Features

- Secure admin login with JWT authentication
- Dashboard with lead statistics
- Lead management with create, edit, delete, search, filter, and pagination
- Lead details with notes, status updates, and history tracking
- Responsive modern interface with sidebar navigation and top navbar

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Authentication: JWT + bcrypt
- Styling: Modern CSS

## Installation

1. Clone the project and open the workspace.
2. Install dependencies from the root folder:

```bash
npm install
```

3. Start the backend and frontend together:

```bash
npm start
```

4. Open the application in your browser:

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Admin Login

Use the default admin credentials:

- Username: `admin`
- Password: `admin123`

## Project Structure

- `client/` - React frontend
- `server/` - Express backend
- `.env` - environment variables

## Seed Admin User

The project automatically creates a default admin user on first server start if one does not exist.

If you need to seed the admin user manually, run:

```bash
cd server
node seedAdmin.js
```

## Notes

- Make sure MongoDB is running locally.
- Update the `.env` file if you need a different database URL or secret.
  