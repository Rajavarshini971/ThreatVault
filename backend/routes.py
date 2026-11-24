from app import app
from flask import jsonify
from mysql.connector import Error

from db import get_db_connection


@app.route("/search/<term>", methods=["GET"])
def search_term(term):
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            query = "SELECT * FROM threats WHERE term_name = %s"
            cursor.execute(query, (term,))
            result = cursor.fetchone()
        finally:
            cursor.close()

        if result:
            return jsonify(result)
        return jsonify({"message": "Term not found"}), 404
    except Error as exc:
        return jsonify({"message": "Database error", "details": str(exc)}), 500
    finally:
        if conn is not None and conn.is_connected():
            conn.close()


@app.route("/threats", methods=["GET"])
def get_threats():
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        try:
            query = "SELECT * FROM threats"
            cursor.execute(query)
            result = cursor.fetchall()
        finally:
            cursor.close()
        return jsonify(result)
    except Error as exc:
        return jsonify({"message": "Database error", "details": str(exc)}), 500
    finally:
        if conn is not None and conn.is_connected():
            conn.close()
