import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="cyberhub"
)

cursor = db.cursor(dictionary=True)