from math import sqrt
# pip install -U spacy
# python -m spacy download en_core_web_sm
import spacy

nlp = spacy.load("en_core_web_sm")

def squared_sum(x):
  """ return 3 rounded square rooted value """
 
  return round(sqrt(sum([a*a for a in x])),5)
 

def cos_similarity(x,y):
  """ return cosine similarity between two lists """
 
  numerator = sum(a*b for a,b in zip(x,y))
  denominator = squared_sum(x)*squared_sum(y)
  return round(numerator/float(denominator),3)

"""test cases"""

#similar sentences
sentences = ["The bottle is empty", "There is nothing in the bottle"]
sentences1 = ["The cat is on the mat", "A cat sits on the mat"]



#dissimilar sentences
dsentences = ["The sun is a star", "I'm going to the store"]
dsentences1 = ["Birds can fly in the sky", "Fish swim in the ocean"]

#converting sentences to vector with spaCy

embeddings = [nlp(sentence).vector for sentence in sentences]
embeddings1 = [nlp(sentence).vector for sentence in sentences1]

dembeddings = [nlp(sentence).vector for sentence in dsentences]
dembeddings1 = [nlp(sentence).vector for sentence in dsentences1]

for i, embedding in enumerate(embeddings):
    print(f"Sentence {i + 1} embedding:", embedding)


#testing cosine similarty on each embedding

x = cos_similarity(embeddings[0], embeddings[1])
y = cos_similarity(embeddings1[0], embeddings1[1])
z = cos_similarity(dembeddings[0], dembeddings[1])
k = cos_similarity(dembeddings1[0], dembeddings1[1])

print("Similar Sentences 1 Score: ", x)
print("Similar Sentences 2 Score: ", y)
print("Dissimilar Sentences 2 Score: ", z)
print("Dissimilar Sentences 2 Score: ", k)