from bs4 import BeautifulSoup, SoupStrainer
import feedparser
import csv
import ssl

if hasattr(ssl, '_create_unverified_context'):
    ssl._create_default_https_context = ssl._create_unverified_context
# using feedparser to get data!
nbc_feed = feedparser.parse('https://www.nbcbayarea.com/?rss=y')

# opens csv file (or creates it if it doesn't exist) to be read or written to
# 'w' means the prev data will be overwritten, see file stuff for more info
nbc_csv = open('nbc_bay_area_feed.csv', 'w')

# creates object to write to our csv
csvwriter = csv.writer(nbc_csv)

# writes data to csv accordingly
for item in nbc_feed.entries:
    headline = item.title
    author = item.author
    pub_date = item.published
    csvwriter.writerow([headline, author, pub_date])