from bs4 import BeautifulSoup

with open("berkeleyside.html", "r") as f:
    doc = BeautifulSoup(f, "html.parser")

tag = doc.find_all("a")
print(tag)
#print(doc.prettify())