import sqlite3
import os.path
import csv

#connects to specified file or creates it
conn = sqlite3.connect('flask-demo/areeya_friends.db')

# a database object: temporary storage containing
# data of one row at a time
# iterative--allows us to traverse over rows
# used to make SQL statements
cur = conn.cursor()

try:
    with open("friends.csv") as plain_friends:
        #content = plain_friends.read()
        csv_reader = csv.reader(plain_friends, delimiter=',')
        for row in csv_reader:
            cur.execute('INSERT INTO friends(name,age,gender) VALUES(?,?,?)', (row[0], row[1], row[2]))
    cur.execute("SELECT * FROM friends")

    data_list = cur.fetchall()
    print('name' + '\t|\tage' + '\t|\tgender')
    print('----------------------------' )
    for item in data_list:
        print(item[0] + '\t|\t' + item[1] + '\t|\t' + item[2])

except sqlite3.OperationalError:
    #cur.execute('CREATE TABLE friends(name TEXT, age TEXT, gender TEXT)')
    cur.execute('INSERT INTO friends(name, age, gender) VALUES ("nikhil", "24", "male")')
    print("New table created.")

conn.commit()
conn.close()