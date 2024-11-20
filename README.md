
# Movie Ticket Booking Application 🎥🎫

This is a personal project for a simple movie ticket booking application. The app integrates with the OMDB API to fetch and display movie details, allows users to calculate ticket costs, and manages a shopping cart using local storage.

## Features ✨

1. **Movie Listing**:
   - Fetches movie data from the [OMDB API](http://www.omdbapi.com/).
   - Dynamically displays movies for each day of the week with their corresponding showtimes.

2. **Movie Details**:
   - Displays detailed information about a selected movie, including title, year, genre, actors, and synopsis.

3. **Ticket Booking**:
   - Calculates ticket costs based on ticket type (`Normal`, `Enfant`, `Groupe`).
   - Stores user information (name, email, ticket details) in local storage.

4. **Shopping Cart**:
   - Displays ticket details and total cost.
   - Option to clear the cart.

5. **Responsive and User-Friendly Design**:
   - User input validation for forms (e.g., email validation).
   - Dynamic updates of ticket costs based on user input.

## Project Structure 📁

- **`assets/`**: Contains images, stylesheets, and other static resources.
- **`footerAndHeader/`**: Shared components like headers and footers.
- **`node_modules/`**: Contains project dependencies managed by `npm`.
- **HTML Files**:
  - `index.html`: Home page displaying movie listings.
  - `movie.html`: Page displaying detailed movie information.
  - `panier.html`: Shopping cart for ticket details.
  - `tarifs.html`: Page showing ticket pricing.
  - `newsletter.html`: Subscription form for newsletters.
- **JavaScript Files**:
  - `movie.js`: Handles movie listing and detail fetching.
  - `tarifs.js`: Calculates ticket costs dynamically.
  - `panier.js`: Manages the shopping cart.
  - `date.js`, `regex.js`, `temperature.js`: Utility scripts for additional functionality.

## Installation 🛠️

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-ticket-booking.git
   cd movie-ticket-booking
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start a local server to view the project:
   ```bash
   npm start
   ```

## Usage 🚀

1. Open `index.html` to browse the movie listings for the week.
2. Click on a movie to view its detailed information on `movie.html`.
3. Navigate to the ticket booking form, fill out the details, and add tickets to the cart.
4. View ticket details and costs on `panier.html`.


## Technologies Used 💻

- **HTML5**: For structuring the web pages.
- **CSS3**: For styling and layout.
- **JavaScript (ES6)**: For dynamic functionality.
- **OMDB API**: For fetching movie details.

