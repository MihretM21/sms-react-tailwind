# Student Management System (React + Tailwind CSS)

Same app and logic as the plain React version, styled entirely with Tailwind CSS
utility classes (flex, grid, responsive breakpoints, hover and focus states).

## Features
- Dashboard with student and course counts
- Students: add, edit, delete, search, filter by status
- Courses list
- Routing: /dashboard /students /courses /settings
- Login with protected routes
- Responsive layout (mobile, tablet, desktop)

## How to run
1. `npm install`
2. `npm run api`   (starts the json-server API on port 5000)
3. In a second terminal: `npm run dev`
4. Open the link shown (usually http://localhost:5173)

Login: admin@school.com / 1234

## Notes
- Backend is simplified: json-server serves db.json as a REST API.
- Authentication is a simplified frontend check stored in localStorage.

## Folder structure
components/ pages/ services/ hooks/ utils/
