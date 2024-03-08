import requests
import csv
from bs4 import BeautifulSoup, SoupStrainer

# using requests to get data
# get method returns response object
bside_response = requests.get('https://www.berkeleyside.org/')

# check response from url
# in this case success code 200
print(bside_response)

# gets source code from response
bside_html = bside_response.text

# opens or creates html file to be read or written to
bside_file = open('berkeleyside.html','r+')
bside_file.write(bside_html)

# creates BS object for parsing
bside_bs = BeautifulSoup(bside_html, "html.parser")

#print(bside_bs.prettify())
#print(bside_file.read())

# collects all the stuff within the h2 html tag
headlines = bside_bs.find_all('h2')
# will still include the tags, so you will have to
# clean the text accordingly however you want
# write a method, etc

print(bside_bs.h2)

# and then insert the data into the csv
bside_csv = open('bside_webscrape.csv', 'w')
csvwriter = csv.writer(bside_csv)
csvwriter.writerow(['headline'])

for h in headlines:
    csvwriter.writerow([h])


