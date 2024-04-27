from bs4 import BeautifulSoup

with open("daily-cal.html", "r") as f:
    doc = BeautifulSoup(f, "html.parser")

headlines = []
hyperlinks_elements = doc.select('a[aria-label]')
for i in hyperlinks_elements:
    if i.has_key("href"):
        href = i["href"]
        if len(href) > 0 and href[0] != 'h' and (len(headlines) == 0 or i["aria-label"] != headlines[-1]) and i["aria-label"] != "Home page":
            headlines.append(i["aria-label"])

for i in headlines:
    print(i)
    