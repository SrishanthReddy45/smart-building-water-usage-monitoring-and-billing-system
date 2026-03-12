import mysql.connector
import random
import time

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="water_monitor"
)

while True:

    building = random.choice(["Building A","Building B","Building C"])
    usage = round(random.uniform(50,300),2)

    cursor = db.cursor()

    cursor.execute(
        "INSERT INTO water_usage(building_name,usage_liters) VALUES(%s,%s)",
        (building,usage)
    )

    db.commit()

    print("Added:",building,usage,"Liters")

    time.sleep(5)