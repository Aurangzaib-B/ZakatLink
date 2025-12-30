# ZakatLink Static Prototype

This is a fully functional static prototype of ZakatLink built with pure HTML, CSS, and Vanilla JavaScript.

## Purpose

This prototype demonstrates the user flow of the ZakatLink platform to showcase how students, donors, and administrators interact with the system. It's hosted on GitHub Pages for easy demonstration.

## Pages

1. **index.html** - Landing page with hero section and "How it works"
2. **login.html** - Simulation login with 3 quick-access buttons
3. **dashboard-student.html** - Student dashboard with profile status and request form
4. **dashboard-donor.html** - Donor dashboard with student cards and connect functionality
5. **dashboard-admin.html** - Admin dashboard with user management table

## Tech Stack

- Pure HTML5
- CSS3 (styles.css)
- Vanilla JavaScript (script.js)
- LocalStorage for simulated data persistence

## Features

- **Emerald Green & White Theme** - Professional, modern design matching ZakatLink brand
- **Interactive Elements** - Buttons change state, forms submit, notifications appear
- **Responsive Design** - Works on mobile and desktop devices
- **LocalStorage Simulation** - Maintains state across page navigations
- **Role-Based Dashboards** - Different views for students, donors, and admins

## How to Use

1. Open `index.html` in a browser or visit the GitHub Pages URL
2. Click "Get Started" or "Login" to access the login page
3. Choose a role:
   - **Login as Student** - See verification status and submit Zakat requests
   - **Login as Donor** - Browse verified students and send connection requests
   - **Login as Admin** - Verify user accounts and manage the platform

## GitHub Pages Setup

To host this on GitHub Pages:

1. Go to repository Settings
2. Navigate to Pages section
3. Select "Deploy from a branch"
4. Choose the branch and `/docs` folder
5. Save and wait for deployment

The site will be available at: `https://[username].github.io/[repository-name]/`

## Demo Flow

### Student Flow
1. Login as Student → See "Verification Pending" status
2. Fill out "Request Zakat" form
3. Submit request → See success message

### Donor Flow
1. Login as Donor → View verified student profiles
2. Click "Connect & Donate" on a student card
3. Button changes to "✓ Connection Request Sent"
4. See success notification

### Admin Flow
1. Login as Admin → View user management table
2. Click "Verify" on a pending user
3. Row highlights in green and status changes to "✓ Verified"
4. See success notification

## Files

- `index.html` (4.5KB) - Landing page
- `login.html` (2.1KB) - Login page
- `dashboard-student.html` (5.2KB) - Student dashboard
- `dashboard-donor.html` (3.6KB) - Donor dashboard
- `dashboard-admin.html` (5.8KB) - Admin dashboard
- `styles.css` (9.5KB) - All styles
- `script.js` (12KB) - All JavaScript functionality

## Notes

- This is a **demonstration prototype** only, not a production application
- All data is simulated using JavaScript and LocalStorage
- No backend or database is connected
- Perfect for showcasing user flow to stakeholders and instructors
