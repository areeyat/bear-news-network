import newspaper
import csv

url = 'https://www.berkeleyside.org/'

bside = newspaper.build(url, memoize_articles=False)

bside_csv = open('bside_n3k.csv', 'w')

csvwriter = csv.writer(bside_csv)

csvwriter.writerow(['headline','author'])

for article in bside.articles:
    article.download()
    article.parse()
    #print(article.title, "-",article.authors)
    headline = article.title
    author = article.authors
    csvwriter.writerow([headline, author])


