# Movie Recommendation System

## Overview

The Movie Recommendation System is a platform designed to provide personalized movie recommendations to users based on their preferences and viewing history. Leveraging a combination of frontend and backend technologies, as well as machine learning algorithms, the system aims to enhance the user experience by offering tailored movie suggestions.

## Client

### Usage

1. **Sign Up / Sign In**: If you're a new user, sign up for an account. If you already have an account, sign in using your credentials.

2. **Search and Add Movies**: Navigate to the search page and enter the title of the movie you want to add. Click on the plus icon on the movie card to add it to your watched favorites list.

3. **Movie Details**: Click on the movie title on the movie card to navigate to movie details page.

4. **View Recommendations**: After adding movies to your watched favorites list, navigate to the home tab to view personalized movie recommendations based on the movies you've added.

5. **Manage Watched Favorites**: You can access all the movies you've added to your watched favorites list in the watched favorites tab. From there, you can delete any movies you no longer want in your list.

## Server

### Recommendation System Algorithm

The movie recommendation system utilizes a Python algorithm to generate movie recommendations based on user input. Here's how it works:

-   **Data Preparation**: The algorithm first loads the movie data from the provided dataset (`movies.csv`) and selects relevant features such as genres, keywords, tagline, cast, and director.

-   **Feature Extraction**: Text data from these features is combined and converted into feature vectors using TF-IDF vectorization.

-   **Similarity Calculation**: Cosine similarity is then calculated between the feature vectors to determine the similarity between movies.

-   **Recommendation Generation**: Given a list of watched movies, the algorithm retrieves the top 50 recommended movies based on similarity scores.

### Endpoints

#### Frontend Routes

-   [http://localhost:5173/signin](http://localhost:5173/signin): Sign-in page
-   [http://localhost:5173/signup](http://localhost:5173/signup): Sign-up page
-   [http://localhost:5173/](http://localhost:5173/): Home page
-   [http://localhost:5173/watch-history](http://localhost:5173/watch-history): Watched Favorites page
-   [http://localhost:5173/search/:movieName](http://localhost:5173/search/:movieName): Search page

#### Backend Routes

-   **PUT** [https://localhost:3000/movie](https://localhost:3000/movie): Adds movies to the user's watched list.
-   **GET** [https://localhost:3000/movie/watched-list](https://localhost:3000/movie/watched-list): Retrieves the user's watched list.
-   **DELETE** [https://localhost:3000/movie](https://localhost:3000/movie): Deletes selected movies from the user's watched list.
-   **GET** [https://localhost:3000/movie](https://localhost:3000/movie): Provides movie recommendations based on the user's watched list.
-   **POST** [https://localhost:3000/user/signup](https://localhost:3000/user/signup): Registers a new user.
-   **POST** [https://localhost:3000/user/signin](https://localhost:3000/user/signin): Authenticates an existing user.

### Dependencies

#### Backend

-   **Express**: Fast, unopinionated, minimalist web framework for Node.js, facilitating robust backend development.
-   **jsonwebtoken**: JSON Web Token implementation for Node.js, ensuring secure authentication mechanisms.
-   **mongoose**: Elegant MongoDB object modeling for Node.js, simplifying interactions with MongoDB databases.
-   **nodemon**: Utility that monitors for changes in your server code and automatically restarts the server, enhancing development workflow efficiency.
-   **zod**: Schema declaration and validation library, ensuring data integrity and consistency.
-   **Python (for ML algorithm)**: Utilized for implementing the machine learning algorithm powering the movie recommendation system, leveraging Python's extensive libraries and frameworks for data analysis and modeling.

#### Frontend

-   **Tailwind CSS**: Used for styling the user interface, offering utility-first CSS framework for rapid UI development.
-   **Axios**: Handles HTTP requests for fetching data from the server, enabling seamless communication between frontend and backend.
-   **Formik and Yup**: Used for form validation, providing a declarative approach to form management and validation.
-   **React Loading Skeleton**: Provides loading skeletons to enhance user experience, offering placeholders for content loading.
-   **React-Toastify**: Displays toast notifications for various actions, enhancing user feedback and interaction.
