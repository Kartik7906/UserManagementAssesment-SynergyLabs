# UserManagementAssesment-SynergyLabs

This project is an assessment for SynergyLabs, focusing on creating a simple CRUD (Create, Read, Update, Delete) application using React. The application manages users by interacting with the JSONPlaceholder API.

## Objective

The main objective of this project is to build a user management system where you can fetch, create, update, and delete user data. The application utilizes the JSONPlaceholder API for handling user data.

## Features

### 1. Fetch Users:
- Fetches a list of users from the JSONPlaceholder API.
- Displays the users in a list or table format.
- Each user is presented with basic information such as name, email, etc.

### 2. Create User:
- Implements a form to create a new user with proper validations.
- Displays the form inside a drawer or modal.
- Simulates creating a new user by performing a `POST` request to the JSONPlaceholder API.
- The UI updates dynamically with the new user data returned from the API.

### 3. Update User:
- Each user has an "Edit" button.
- Clicking "Edit" opens a drawer or modal with the user's current data pre-filled.
- Allows users to update fields, with the data reflected after saving.
- Simulates updating the user by performing a `PUT` request to the JSONPlaceholder API.
- The updated user data is displayed in the UI.

### 4. Delete User:
- Each user has a "Delete" button.
- Clicking "Delete" triggers a confirmation modal.
- Simulates deleting a user by performing a `DELETE` request to the JSONPlaceholder API.
- The UI reflects the removal of the user after a successful delete operation.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **JSONPlaceholder API**: A fake online REST API used for testing and prototyping.
- **Axios or Fetch API**: To handle API requests.
- **React Hooks**: For state and effect management.
- **React Router (Optional)**: For navigation and handling routes.
- **CSS/Tailwind/Styled Components**: For styling the application (optional based on your choice).

## How to Run the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/UserManagementAssesment-SynergyLabs.git

2. Live Link: https://user-management-assesment-synergy-labs-5pegxk62l.vercel.app/
