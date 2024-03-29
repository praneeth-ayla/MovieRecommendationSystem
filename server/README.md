# Movie Recommendation System - Server

## Getting Started

#### Before starting the server, make sure to create a `.env` file in the server directory with the following configuration:

```
MONGODB_URL= <your-mongodb-url>
JWT_SECRET= <your-jwt-secret>
```

#### If you're using a local MongoDB instance, your `.env` file might look like this:

```
MONGODB_URL="mongodb://localhost:27017/movie_recommendation"
JWT_SECRET="mysecretkey"
```

#### Make sure to replace `"mysecretkey"` with your chosen secret key for JWT authentication.

Copy code

To run the server locally, follow these steps:

1. Clone this repository to your local machine:

    ```
    git clone https://github.com/praneeth-ayla/MovieRecommendationSystem.git
    ```

2. Navigate to the server directory:

    ```
    cd server
    ```

3. Install dependencies:

    ```
    npm install
    ```

    ```
    pip install numpy pandas scikit-learn
    ```

4. Start the server:

    ```
    npm run dev
    ```

5. The server will start at port localhost:3000 by default.

## Recommendation System Algorithm

The movie recommendation system utilizes a Python algorithm to generate movie recommendations based on user input. Here's how it works:

-   **Data Preparation**: The algorithm first loads the movie data from the provided dataset (`movies.csv`) and selects relevant features such as genres, keywords, tagline, cast, and director.

-   **Feature Extraction**: Text data from these features is combined and converted into feature vectors using TF-IDF vectorization.

-   **Similarity Calculation**: Cosine similarity is then calculated between the feature vectors to determine the similarity between movies.

-   **Recommendation Generation**: Given a list of watched movies, the algorithm retrieves the top 50 recommended movies based on similarity scores.

The Python code for the recommendation system algorithm can be found in the `recommendationSystem/` directory within the server.

## Endpoints

### Movie Routes

#### PUT https://localhost:3000/movie

-   Adds movies to the user's watched list.

#### GET https://localhost:3000/movie/watched-list

-   Retrieves the user's watched list.

#### DELETE https://localhost:3000/movie

-   Deletes selected movies from the user's watched list.

#### GET https://localhost:3000/movie

-   Provides movie recommendations based on the user's watched list.

### User Endpoints

#### POST https://localhost:3000/user/signup

-   Registers a new user.

#### POST https://localhost:3000/user/signin

-   Authenticates an existing user.

## Dependencies

This server relies on the following dependencies:

-   **express**: Fast, unopinionated, minimalist web framework for Node.js.
-   **jsonwebtoken**: JSON Web Token implementation for Node.js.
-   **mongoose**: Elegant MongoDB object modeling for Node.js.
-   **nodemon**: Utility that monitors for changes in your server code and automatically restarts the server.
-   **zod**: Schema declaration and validation library.
-   **Python (for ML algorithm)**: Utilized for implementing the machine learning algorithm powering the movie recommendation system, leveraging Python's extensive libraries and frameworks for data analysis and modeling.

Make sure to have these dependencies installed in your server project before running the application.
