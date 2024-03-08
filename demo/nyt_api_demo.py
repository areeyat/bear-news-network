import datetime

from pynytimes import NYTAPI

api_key = "your api key here" # sign up for a developer account!

nyt = NYTAPI(api_key,parse_dates=True)

nyt_sf_articles = nyt.article_search(query="San Francisco", results=20)

start_of_feb = datetime.datetime(2024,2,1)
right_now = datetime.datetime.now()

nyt_berkeley_articles = nyt.article_search(query="Berkeley, CA",
                                           dates={"begin":start_of_feb,"end":right_now},
                                           options={"sort":"newest"},
                                           results=20)
for i in nyt_berkeley_articles:
    del i['multimedia']
    print(i['headline'])
    print(i['pub_date'])

# you can also make this into pandas dataframe and manipulate it
# using pandas so you just have the columns that you want left!
# good for folks who have taken data 100!! :3