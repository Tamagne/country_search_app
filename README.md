# Country Search Web Application

This is a simple web application that allows users to search for and view information about different countries. The project is built using **Node.js**, **Express.js**, and the **REST Countries API**. It features both backend and frontend components to handle user inputs and display country details dynamically.

## Features
- **User Interface**: A clean and interactive UI with a text input field, a search button, and a display area for country details.
- **Backend Integration**: The backend fetches data from the [REST Countries API](https://restcountries.com/) based on user input.
- **Validation**: Ensures the user input is valid and displays appropriate messages for invalid inputs.
- **Dynamic Formatting**: Displays country details (name, flag, capital, population, and languages) in a visually appealing card or table format.
- **Git Integration**: Version control using Git, with the repository hosted on GitHub.
- **Shell Automation**: Shell scripts for automating tasks such as starting the server and deployment.

## Prerequisites
- **Node.js** (v22.11.0 or higher)
- **npm** (comes with Node.js)
- A code editor like **Visual Studio Code**
- A terminal or command prompt

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd country-search-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```

## File Structure
- `server.js`: Handles the backend logic, including API requests and response handling.
- `public/`: Contains static files (HTML, CSS, and JavaScript) for the frontend.
- `views/`: Holds dynamic templates for rendering UI components.
- `routes/`: Defines API routes for handling search requests.
- `scripts/`: Contains shell scripts for automation.

## Usage
1. Start the server using `node server.js`.
2. Open your browser and navigate to `http://localhost:3000` (or the port specified in the `server.js` file).
3. Enter a country name in the search field and click "Search".
4. View the country details displayed on the screen.

## Troubleshooting
- **Port Already in Use**: If you encounter an `EADDRINUSE` error, change the port in `server.js` or free up the current port.
- **API Errors**: Check if the REST Countries API is accessible.

## Future Enhancements
- Add more search filters (e.g., region, population range).
- Implement a favorites feature to save frequently searched countries.
- Deploy the application online using a hosting platform like Heroku or Vercel.

## Contribution
Feel free to fork this repository, create a new branch, and submit a pull request with your improvements.

## License
This project is licensed under the MIT License.

---

For questions or feedback, contact **Tamagne Gedefaye** at tamagne13@gmail.com.

