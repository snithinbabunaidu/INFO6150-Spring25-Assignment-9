# Job Portal React Application

A React-based job portal that allows job seekers to explore job listings and company profiles. This application focuses on front-end development, session management, and dynamic content rendering using Material UI and Axios.

## Project Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd job-portal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. The application will be available at http://localhost:3000

## Folder Structure

```
job-portal/
├── public/                  # Public assets
├── src/                     # Source code
│   ├── components/          # React components
│   │   ├── Auth/            # Authentication components
│   │   │   ├── Login.js     # Login page
│   │   │   └── ProtectedRoute.js # Protected route component
│   │   ├── Layout/          # Layout components
│   │   │   ├── Header.js    # Header component
│   │   │   ├── Footer.js    # Footer component
│   │   │   └── Navbar.js    # Navigation bar
│   │   ├── Home/            # Home page components
│   │   ├── About/           # About page components
│   │   ├── Jobs/            # Job listing components
│   │   ├── Companies/       # Company listing components
│   │   └── Contact/         # Contact page components
│   ├── contexts/            # React contexts
│   │   └── AuthContext.js   # Authentication context
│   ├── data/                # Static data
│   │   ├── jobPosts.js      # Job listing data
│   │   └── companies.js     # Company data
│   ├── services/            # API services
│   │   └── api.js           # Axios API service
│   ├── utils/               # Utility functions
│   │   └── sessionHelper.js # Session management utilities
│   ├── App.js               # Main application component
│   └── index.js             # Application entry point
├── .gitignore               # Git ignore file
├── package.json             # NPM package configuration
└── README.md                # Project documentation
```

## Navigation

The application includes the following pages:

- **Home**: Landing page with featured jobs and companies
- **About**: Information about the job portal
- **Job Listings**: List of available job positions
- **Company Showcase**: Gallery of companies with job openings
- **Contact**: Contact form and information
- **Login**: User authentication page

## Key Functionalities

1. **Authentication System**:
   - Login functionality using stored credentials
   - Protected routes for authenticated users
   - Session management with token storage

2. **Job Listings**:
   - Display of job positions with details
   - Search and filter functionality
   - Pagination for large lists

3. **Company Showcase**:
   - Display of company profiles with images
   - Company information and descriptions

4. **Responsive Design**:
   - Mobile-friendly interface using Material UI
   - Adaptive layout for different screen sizes

## Technologies Used

- React.js
- React Router for navigation
- Material UI for component styling
- Axios for API requests
- Context API for state management

## Backend Connection

This application connects to a Node.js backend from a previous assignment for:
- User authentication (login)
- Fetching company images

## Future Enhancements

In future assignments, this project will be improved with:
- Enhanced API integration
- User-specific content
- More advanced Material UI components