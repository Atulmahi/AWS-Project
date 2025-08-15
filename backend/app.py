from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow requests from Express during dev

@app.route("/")
def home():
    return "Hello Atul, welcome!"

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})

@app.route("/api/echo", methods=["GET"])
def echo():
    msg = request.args.get("msg", "hello")
    return jsonify({"message": msg})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
