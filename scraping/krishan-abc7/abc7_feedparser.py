import ssl
import certifi
import urllib.request
from bs4 import BeautifulSoup, SoupStrainer
import feedparser
import csv

# Create an SSL context that uses the certifi certificate bundle
ssl_context = ssl.create_default_context()
ssl_context.load_verify_locations(certifi.where())

# using feedparser to get data!
abc7_feed = feedparser.parse('https://abc7news.com/feed/', handlers=[urllib.request.HTTPSHandler(context=ssl_context)])

# Check if the feed was successfully parsed
if abc7_feed.bozo:
    print("Error parsing feed:", abc7_feed.bozo_exception)

# Read existing data from the CSV file, for any entry that is already in the file
existing_entries = set()
try:
    with open('abc7_feed.csv', 'r') as abc7_csv:
        csvreader = csv.reader(abc7_csv)
        for row in csvreader:
            existing_entries.add(tuple(row))
except FileNotFoundError:
    pass  # It's okay if the file doesn't exist yet

# Append new entries to the CSV file, if they are not already in the file
with open('abc7_feed.csv', 'a') as abc7_csv:
    csvwriter = csv.writer(abc7_csv)
    for item in abc7_feed.entries:
        headline = item.title
        author = item.author
        pub_date = item.published[:-6]
        link = item.link
        description = item.description
        guid = item.guid.split()[0]
        entry = (headline, author, pub_date, guid, link)
        
        if entry not in existing_entries:
            csvwriter.writerow(entry)