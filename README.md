# Job Application Tracker

Job Application Tracker is a full stack web application that helps users organize and manage their job search in one place. Users can create an account, log in securely, and track every application they submit. The application allows users to add job applications, update their status, search through jobs, and monitor their progress during the hiring process.

This project demonstrates a modern full stack architecture with a deployed frontend, backend API, and cloud database.

Developed by Madhav Mangalagiri

Computer Science student focused on software engineering and full stack web development.

GitHub  
https://github.com/madhavm2906

Live Application  
https://job-tracker-fullstack-xi.vercel.app/

Backend API  
https://job-tracker-backend-ycaz.onrender.com

Linkedin
www.linkedin.com/in/madhav-mangalagiri-ab5676294


## Project Overview

Searching for jobs often involves keeping track of many applications across different companies. It becomes difficult to remember where applications were submitted, which companies responded, and what stage each application has reached.

This application solves that problem by providing a centralized dashboard where users can store and manage their job applications. Each user can create an account and maintain their own list of applications. The dashboard provides tools to search and filter applications, update interview status, and manage the entire process from one place.

The project uses a client server architecture where a React frontend communicates with a Node.js backend API connected to a MongoDB database.


## Features

User authentication with secure login and signup

JWT based authentication system

Create new job applications

Edit existing job applications

Delete job applications

Track application status including Applied, Interview, Rejected, and Offer

Search applications by company or job role

Filter applications based on their status

Dashboard statistics showing application counts

Responsive user interface built with React

Persistent data storage using MongoDB Atlas

Deployed frontend and backend services


## Tech Stack

Frontend  
React  
Vite  
CSS

Backend  
Node.js  
Express.js

Database  
MongoDB Atlas

Authentication  
JSON Web Tokens  
bcrypt password hashing

Deployment  
Vercel for frontend hosting  
Render for backend hosting


## Application Architecture

Frontend

The frontend is built using React and is responsible for rendering the user interface and handling user interactions. It communicates with the backend using REST API requests.

Backend

The backend is an Express server that provides authentication and job management APIs. It handles requests from the frontend and performs database operations.

Database

MongoDB Atlas is used as the cloud database to store user accounts and job application records.

System flow

Browser  
React frontend hosted on Vercel  
Express backend hosted on Render  
MongoDB Atlas database


## API Endpoints

Authentication

POST /api/auth/register  
Create a new user account

POST /api/auth/login  
Authenticate a user and return a JSON Web Token


Jobs

GET /api/jobs  
Retrieve all job applications

POST /api/jobs  
Create a new job application

PUT /api/jobs/:id  
Update an existing job application

DELETE /api/jobs/:id  
Delete a job application


## Local Development Setup

Clone the repository
# Job Application Tracker

Job Application Tracker is a full stack web application that helps users organize and manage their job search in one place. Users can create an account, log in securely, and track every application they submit. The application allows users to add job applications, update their status, search through jobs, and monitor their progress during the hiring process.

This project demonstrates a modern full stack architecture with a deployed frontend, backend API, and cloud database.

Live Application  
https://job-tracker-fullstack-xi.vercel.app/

Backend API  
https://job-tracker-backend-ycaz.onrender.com


## Project Overview

Searching for jobs often involves keeping track of many applications across different companies. It becomes difficult to remember where applications were submitted, which companies responded, and what stage each application has reached.

This application solves that problem by providing a centralized dashboard where users can store and manage their job applications. Each user can create an account and maintain their own list of applications. The dashboard provides tools to search and filter applications, update interview status, and manage the entire process from one place.

The project uses a client server architecture where a React frontend communicates with a Node.js backend API connected to a MongoDB database.


## Features

User authentication with secure login and signup

JWT based authentication system

Create new job applications

Edit existing job applications

Delete job applications

Track application status including Applied, Interview, Rejected, and Offer

Search applications by company or job role

Filter applications based on their status

Dashboard statistics showing application counts

Responsive user interface built with React

Persistent data storage using MongoDB Atlas

Deployed frontend and backend services


## Tech Stack

Frontend  
React  
Vite  
CSS

Backend  
Node.js  
Express.js

Database  
MongoDB Atlas

Authentication  
JSON Web Tokens  
bcrypt password hashing

Deployment  
Vercel for frontend hosting  
Render for backend hosting


## Application Architecture

Frontend

The frontend is built using React and is responsible for rendering the user interface and handling user interactions. It communicates with the backend using REST API requests.

Backend

The backend is an Express server that provides authentication and job management APIs. It handles requests from the frontend and performs database operations.

Database

MongoDB Atlas is used as the cloud database to store user accounts and job application records.

System flow

Browser  
React frontend hosted on Vercel  
Express backend hosted on Render  
MongoDB Atlas database


## API Endpoints

Authentication

POST /api/auth/register  
Create a new user account

POST /api/auth/login  
Authenticate a user and return a JSON Web Token


Jobs

GET /api/jobs  
Retrieve all job applications

POST /api/jobs  
Create a new job application

PUT /api/jobs/:id  
Update an existing job application

DELETE /api/jobs/:id  
Delete a job application


## Local Development Setup

Clone the repository
git clone https://github.com/madhavm2906/job-tracker-fullstack.git


Navigate to the backend folder and install dependencies


cd server
npm install


Create a `.env` file inside the server directory and add


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start the backend server


npm run dev


Open a new terminal and install frontend dependencies


cd client
npm install


Run the frontend application


npm run dev


The application will run at


http://localhost:5173



## Project Structure


job-tracker-fullstack
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
├── server
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md



## Future Improvements

Connect job applications to individual user accounts in the database

Add drag and drop status management

Add analytics and application insights

Improve user interface styling and dashboard visualizations

Add automated testing for backend routes