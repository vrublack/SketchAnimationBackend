import json
import os

from flask import Flask, redirect
from flask import request
from flask import send_from_directory
from flask import url_for
from os.path import join
import base64

from werkzeug.utils import secure_filename

from detect import car_detect

app = Flask(__name__)


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/')
def hello_world():
    return redirect(url_for('static', filename='car.html'))


@app.route('/upload', methods=['POST'])
def upload():
    doodle = request.form['doodle']
    if doodle:
        b64 = doodle[22:]  # only take base64 encoding
        # save in project root
        output_path = os.path.join(app.root_path, 'doodle.png')
        with open(output_path, "wb") as f:
            f.write(base64.decodestring(b64))

        properties = car_detect.detect(output_path)

        if properties is None:
            return 'Detection failed'
        else:
            return json.dumps(properties)

    return 'Bad request'


if __name__ == '__main__':
    app.run()
