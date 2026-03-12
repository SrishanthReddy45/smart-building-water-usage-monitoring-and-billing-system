from flask import Flask, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="water_monitor"
)

@app.route("/data")
def get_data():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM water_usage ORDER BY timestamp DESC LIMIT 20")
    data = cursor.fetchall()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)