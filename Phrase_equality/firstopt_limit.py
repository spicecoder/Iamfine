import numpy as np
from sentence_transformers import SentenceTransformer, util

# Load the model
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

# Define your sentences
sentences = ['This is an example sentence','An second example sentence', 'This is another one', 'A totally different sentence']

# Compute the embeddings
embeddings = model.encode(sentences)

# Compute cosine similarities
cosine_similarities = util.pytorch_cos_sim(embeddings, embeddings).numpy()

# Set a threshold value for considering sentence as similar
threshold = 0.7

# Iterate over the matrix to find sentence pairs that are similar
for i in range(len(sentences)):
    for j in range(i+1, len(sentences)):  # Compare each sentence with each other sentence
        if cosine_similarities[i][j] > threshold:
            print(f"Sentences '{sentences[i]}' and '{sentences[j]}' are similar with cosine similarity of {cosine_similarities[i][j]:.4f}")
