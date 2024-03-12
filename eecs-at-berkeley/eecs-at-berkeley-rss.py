from bs4 import BeautifulSoup, SoupStrainer
import feedparser
import csv
import ssl

if hasattr(ssl, '_create_unverified_context'):
    ssl._create_default_https_context = ssl._create_unverified_context
# using feedparser to get data!
eecs_feed = feedparser.parse('https://eecs.berkeley.edu/news/feed/')

# opens csv file (or creates it if it doesn't exist) to be read or written to
# 'w' means the prev data will be overwritten, see file stuff for more info
eecs_csv = open('berkeley_eecs_feed.csv', 'w')

# creates object to write to our csv
csvwriter = csv.writer(eecs_csv)

# writes data to csv accordingly
for item in eecs_feed.entries:
    headline = item.title
    author = item.author
    pub_date = item.published
    csvwriter.writerow([headline, author, pub_date])