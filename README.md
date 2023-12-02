# dashboard

Welcome to my React web application! This project harnesses the power of React.js for frontend development and incorporates a variety of components showcasing different functionalities. Here's a breakdown of the main components and features:

## Components

### 1. Home
- The landing page features a warm welcome message.
- Navigation links seamlessly guide users to other pages.

### 2. Transaction
- This section includes a form for inputting wallet addresses and amounts.
- Robust input validation ensures accuracy for wallet addresses and amounts.
- Bonus: Submits data to the Google Firestore database.

### 3. Header
- The responsive navigation bar provides easy access to Home, Transaction, and Data pages.

### 4. Data
- Utilizing the 'https://jsonplaceholder.typicode.com/posts' API, this component fetches data.
- It filters and displays posts with a user ID of 1.
- The data is presented in a table format.
- A pie chart visually represents the percentage of posts by user ID 1.


## Technologies Used
- React.js
- React Router
- Tailwind CSS
- Fetch API
- Recharts for data visualization

## Getting Started
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start`
