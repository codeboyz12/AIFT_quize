from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/data', methods=['GET'])
def send_data():
    print("Have request to /data sending a response.", flush=True)
    return jsonify("Hello from Flask Python Service")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
