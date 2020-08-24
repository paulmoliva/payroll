import flask
import os
import json
from flask_cors import CORS

from database import db
from models import asd, cbj, moa, university, peak, fnsb, msb, seward, soa


application = flask.Flask(__name__)

CORS(application)

application.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DB_URL') or \
    'mysql+pymysql://cranklogic:cranklogic@127.0.0.1/asd_payroll'
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
application.secret_key = os.getenv('SECRET_KEY') or 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

db.init_app(application)


@application.route('/peaks', methods=['GET'])
def search_peaks():
    school_name = flask.request.args.get('school_name')
    year = flask.request.args.get('year')
    all_scores = peak.Peaks.query
    if school_name:
        all_scores = all_scores.filter(peak.Peaks.school_name == school_name)
    if year:
        all_scores = all_scores.filter(peak.Peaks.year == year)
    all_scores = all_scores.all()
    result = []
    for score in all_scores:
        result.append(score.as_dict())
    return json.dumps(result)


@application.route('/')
def index():
    return flask.render_template('index.html')


@application.route('/search', methods=['POST'])
def search_asd():
    search = flask.request.json
    agency = search['agency']
    if agency == 'asd':
        model = asd.ASD
    elif agency == 'cbj':
        model = cbj.CBJ
    elif agency == 'university':
        model = university.University
    elif agency == 'moa':
        model = moa.MOA
    elif agency == 'fnsb':
        model = fnsb.FNSB
    elif agency == 'msb':
        model = msb.MSB
    elif agency == 'soa':
        model = soa.SOA
    elif agency == 'seward':
        model = seward.Seward

    results = model.query
    if len(search['first_name']):
        results = results.filter(
            model.first_name.ilike('%{0}%'.format(search['first_name']))
        )
    if len(search['last_name']):
        results = results.filter(
            model.last_name.ilike('%{0}%'.format(search['last_name']))
        )
    if len(search['title']):
        results = results.filter(
            model.title.ilike('%{0}%'.format(search['title']))
        )
    if len(search['department']):
        results = results.filter(
            model.location.ilike('%{0}%'.format(search['department']))
        )
    if len(search['min_salary']):
        results = results.filter(
            model.total >= int(search['min_salary'])
        )
    if len(search['max_salary']):
        results = results.filter(
            model.total <= int(search['max_salary'])
        )
    if search['barg_unit'] and len(search['barg_unit']):
        results = results.filter(
            model.barg_unit.ilike('%{0}%'.format(search['barg_unit']))
        )

    order_by = search['order_by']
    if order_by == 'last_name':
        results = results.order_by(model.last_name.asc())
    elif order_by == 'salary_high':
        results = results.order_by(model.total.desc())
    elif order_by == 'salary_low':
        results = results.order_by(model.total.asc())

    results = results.all()
    returned_json = []
    for each_result in results:
        returned_json.append(each_result.as_dict())
    return json.dumps(returned_json)

if __name__ == '__main__':
    application.run(debug=True)

