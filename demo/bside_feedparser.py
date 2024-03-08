from bs4 import BeautifulSoup, SoupStrainer
import feedparser
import csv


# using feedparser to get data!
bside_feed = feedparser.parse('https://www.berkeleyside.org/feed')

# opens csv file (or creates it if it doesn't exist) to be read or written to
# 'w' means the prev data will be overwritten, see file stuff for more info
bside_csv = open('bside_feed.csv', 'w')

# creates object to write to our csv
csvwriter = csv.writer(bside_csv)

# writes data to csv accordingly
for item in bside_feed.entries:
    headline = item.title
    author = item.author
    pub_date = item.published
    csvwriter.writerow([headline, author, pub_date])

