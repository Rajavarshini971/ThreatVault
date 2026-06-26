from app import app
from flask import jsonify
from db import cursor


# Search by term
@app.route('/search/<term>', methods=['GET'])
def search_term(term):
    query = "SELECT * FROM threats WHERE term_name = %s"
    cursor.execute(query, (term,))
    result = cursor.fetchone()

    if result:
        return jsonify(result)
    else:
        return jsonify({"message": "Term not found"})


# Get all threats
@app.route('/threats', methods=['GET'])
def get_threats():
    query = "SELECT * FROM threats"
    cursor.execute(query)
    result = cursor.fetchall()
    return jsonify(result)