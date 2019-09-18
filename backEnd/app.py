import os
from flask import Flask, render_template, send_from_directory
from waitress import serve

# app = Flask(__name__)

# @app.route('/')
# def index():
# 	# return send_from_directory("./", "app.py")
# 	return send_from_directory("./static/react/", "index.html")
#     # return render_template('index.html')


# if __name__ == '__main__':
#     serve(app, host='0.0.0.0', port=3000)

app = Flask(__name__, static_folder='build/')

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)