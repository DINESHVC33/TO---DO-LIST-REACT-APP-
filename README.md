# TO-DO-LIST-REACT-APP
# React app using  Node.js, Express.json, and MongoDB Atlas Project in Visual Studio Code

This README file provides an overview and instructions for setting up the TO DO LIST REACT APP that combines React for the frontend, Node.js with Express for the backend server, and MongoDB Atlas for the database using Visual Studio Code as the development environment.

## Prerequisites

Before proceeding, make sure you have the following installed:

- Visual Studio Code: Download and install Visual Studio Code from [https://code.visualstudio.com](https://code.visualstudio.com).

- Node.js: Ensure that you have Node.js installed on your machine. You can download it from [https://nodejs.org](https://nodejs.org) and follow the installation instructions for your operating system.

- MongoDB Atlas: Set up a MongoDB Atlas cluster by following the documentation on [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).

## Project Setup

1. Open Visual Studio Code and navigate to the location where you want to create your project.

2. Clone the project repository from GitHub:
   ```
   git clone <repository-url>
   ```

3. Open the project folder in Visual Studio Code:
   ```
   cd <project-folder>
   code .
   ```

4. Install the required dependencies:
   - Open the integrated terminal in Visual Studio Code: View -> Terminal.
   - Run the following command to install the dependencies for the backend server:
     ```
     cd server
     npm install
     ```

   - Run the following command to install the dependencies for the React frontend:
     ```
     cd ../client
     npm install
     ```

5. Configure environment variables:
   - Create a `.env` file in the root of the `server` folder.
   - Add the following environment variables to the `.env` file:
     ```
     PORT= 5000
     MONGODB_URI=mongodb+srv://dineshvc33:dineshvc33@cluster0.5facuqt.mongodb.net/CRUD_DB?retryWrites=true&w=majority
     ```

## Running the Application

1. Start the backend server:
   - Open the integrated terminal in Visual Studio Code: View -> Terminal.
   - Run the following command in the terminal:
     ```
     cd backend
     npm run dev
     ```

2. Start the React app:
   - Open a new integrated terminal in Visual Studio Code: View -> Terminal.
   - Run the following command in the terminal:
     ```
     cd frontend
     npm start
     ```

The React app will be accessible at `http://localhost:3000`, and the Node.js backend server will be running at the specified port.

## Project Structure

The project structure is organized as follows:

  - `/frontend`: Contains the React frontend application.
  - `/backend`: Contains the Node.js backend server.
  - `/routes`: Contains the API routes.
  - `/controllers`: Contains the controllers for handling API requests.
  - `/models`: Contains the MongoDB models.
  - `server.js`: Entry point for the server.

Feel free to modify and extend the project structure based on your requirements.

## API Endpoints

The backend server provides API endpoints for interacting with the MongoDB Atlas database. You can define your own routes and controllers to handle specific functionalities.

## Additional Resources

- React documentation: [https://reactjs.org/docs](https://reactjs.org/docs)
- Express documentation: [https://expressjs.com](https://expressjs.com)
- MongoDB Atlas documentation: [https://docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)
- Visual Studio Code documentation: [https://code.visualstudio.com/docs](https://code.visualstudio.com/docs)


