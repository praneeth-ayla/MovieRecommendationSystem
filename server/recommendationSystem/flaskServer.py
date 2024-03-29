from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json

app = Flask(__name__)

# Load movie data
movies_data = pd.read_csv('recommendationSystem/movies.csv')

# Select relevant features
selected_features = ['genres', 'keywords', 'tagline', 'cast', 'director']

# Replace null values with empty string
for feature in selected_features:
    movies_data[feature] = movies_data[feature].fillna('')

# Combine selected features
combined_features = movies_data['genres'] + ' ' + movies_data['keywords'] + ' ' + movies_data['tagline'] + ' ' + movies_data['cast'] + ' ' + movies_data['director']

# Convert text data to feature vectors
vectorizer = TfidfVectorizer()
feature_vectors = vectorizer.fit_transform(combined_features)

# Calculate similarity matrix
similarity = cosine_similarity(feature_vectors)

# Function to retrieve movie index by ID
def get_movie_index(movie_id):
    return movies_data[movies_data['id'] == movie_id].index.values

# Function to create similarity score for given movie index
def similarityScoreCreator(index_of_the_movie):
    similarity_score = list(enumerate(similarity[index_of_the_movie]))
    sorted_similar_movies = sorted(similarity_score, key=lambda x: x[1], reverse=True)
    return [movies_data.iloc[index]['id'] for index, _ in sorted_similar_movies[:20]]

@app.route('/recommendations', methods=['POST'])
def get_recommendations():
    try:
        # Get input data from frontend
        input_data = request.json
        watchedList = input_data["watchedList"]
        
        # Calculate similarity scores for the watched list
        common_movies = []
        for movie_id in watchedList:
            indexes = get_movie_index(movie_id)
            if indexes.size > 0:
                common_movies += similarityScoreCreator(indexes[0])

        # Output the top 50 recommended movie IDs
        outList = list(set(common_movies))[:50]
        outList = [int(x) for x in outList]

        # Send the recommendations back to frontend
        return jsonify(outList)
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
