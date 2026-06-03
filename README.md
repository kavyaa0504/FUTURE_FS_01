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
   <img width="837" height="776" alt="Screenshot 2026-06-03 120840" src="https://github.com/user-attachments/assets/71aebdf7-00da-4aab-bbb5-a216ab035e33" />
<img width="1893" height="828" alt="Screenshot 2026-06-03 121848" src="https://github.com/user-attachments/assets/ffdf18b0-6d1a-469d-aa5c-520eede2b530" />
<img width="1864" height="847" alt="Screenshot 2026-06-03 121907" src="https://github.com/user-attachments/assets/00e7ad58-4e0c-42fa-9cf9-9fc62926a7fb" />
<img width="1826" height="849" alt="Screenshot 2026-06-03 121922" src="https://github.com/user-attachments/assets/c929f008-291d-4e0e-93d3-c42b10fe469f" />
