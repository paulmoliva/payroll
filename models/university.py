from database import db
from . import base_model


class University(db.Model, base_model.BaseModel):
    __tablename__ = 'university'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    first_name = db.Column(db.String(255))
    last_name = db.Column(db.String(255))
    barg_unit = db.Column(db.String(255))
    location = db.Column(db.String(255))
    title = db.Column(db.String(255))
    gross = db.Column(db.Float)
    benefits = db.Column(db.Float)
    total = db.Column(db.Float)
