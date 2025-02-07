# Admin Dashboard

## Objective

The objective of this project is to develop a responsive admin dashboard that integrates with a RESTful API to display user and product data. The dashboard will serve as an admin interface to manage and view user and product information. 

## Features

### 1. Dashboard Overview:
   - Single Page Application (SPA) that serves as an admin dashboard.
   - Sidebar Navigation: 
     - Navigation links to All Users and Products.
     - Main content area displays data according to the selected section.

### 2. Data Display:
   - **Users:**
     - Fetch and display a list of users from the API: [JSONPlaceholder - Users](https://jsonplaceholder.typicode.com/users).
     - Display essential user details such as name, email, and city.
     - Option to view **full details** of each user.
     
   - **Products:**
     - Fetch and display a list of products from the API: [Restful API - Products](https://api.restful-api.dev/objects).
     - Ability to **add a new product** with a POST request to the API: [Add Product](https://api.restful-api.dev/objects).
     - Fetch and display a **single product** using the GET request: [Get Product by ID](https://api.restful-api.dev/objects/:id).
     - Option to **delete a product** via the DELETE request: [Delete Product](https://api.restful-api.dev/objects/:id).

### 3. **Technical Requirements:**
   - **Frontend Framework**: React (you can choose a different framework like Vue.js or Angular if preferred).
   - **Styling**: Use **Tailwind CSS** for responsive and modern design.
   - **Responsive Design**: Ensure the application is usable on various screen sizes (desktop, tablet, mobile).
   - **Version Control**: Use **Git** for version control.
   - **GitHub Repository**: Submit the project through a public GitHub repository.

### 4. **Bonus Features:**
   - Implement **sorting** functionality for users and products.
   - Implement **searching** functionality for users and products.

## Installation Instructions

1. **Clone the Repository:**

   To get started, clone this repository to your local machine:

   git clone https://github.com/mafujur-rahman/admin-panel
Navigate to the Project Folder:

Change into the project directory:
cd repository-name

Install Dependencies:
npm install

Run the Application:
npm start