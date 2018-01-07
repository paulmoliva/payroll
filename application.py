import flask
import os
import json
from flask_cors import CORS

from database import db
from models import asd


application = flask.Flask(__name__)

CORS(application)

application.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DB_URL') or \
    'mysql+pymysql://cranklogic:cranklogic@127.0.0.1/asd_payroll'
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
application.secret_key = os.getenv('SECRET_KEY') or 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

db.init_app(application)


@application.route('/')
def index():
    return flask.render_template('index.html')


@application.route('/search/asd', methods=['POST'])
def search_asd():
    search = flask.request.json
    results = asd.ASD.query
    if len(search['first_name']):
        results = results.filter(
            asd.ASD.first_name.ilike('%{0}%'.format(search['first_name']))
        )
    if len(search['last_name']):
        results = results.filter(
            asd.ASD.last_name.ilike('%{0}%'.format(search['last_name']))
        )
    # if len(search['title']):
    #     results = results.filter(
    #         asd.ASD.title.ilike('%{0}%'.format(search['title']))
    #     )

    order_by = search['order_by']
    if order_by == 'last_name':
        results = results.order_by(asd.ASD.last_name.asc())
    elif order_by == 'salary_high':
        results = results.order_by(asd.ASD.total.desc())
    elif order_by == 'salary_low':
        results = results.order_by(asd.ASD.total.asc())

    results = results.all()
    returned_json = []
    for each_result in results:
        returned_json.append(each_result.as_dict())
    return json.dumps(returned_json)

if __name__ == '__main__':
    application.run(debug=True)

