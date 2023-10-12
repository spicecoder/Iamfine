from sentence_transformers import SentenceTransformer, util
import torch

# Load the model
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

# Define your sentences
sentences = ['This is an example sentence', 'This is another one']

# Compute the embeddings
embeddings = model.encode(sentences)

# Convert to PyTorch tensor (if needed)
embeddings = torch.Tensor(embeddings)

# Compute cosine similarities
cosine_similarities = util.pytorch_cos_sim(embeddings, embeddings)

print(cosine_similarities)
