from database import db
from . import base_model


class Peaks(db.Model, base_model.BaseModel):
    __tablename__ = 'peaks'
    District_Name = db.Column(db.String(255))
    school_name = db.Column(db.String(255))
    Subject = db.Column(db.String(255))
    grade = db.Column(db.String(255))
    ProficientCount = db.Column(db.String(255))
    ProficientPercent = db.Column(db.String(255))
    NotProficientCount = db.Column(db.String(255))
    NotProficientPercent = db.Column(db.String(255))
    TotalTested = db.Column(db.Integer)
    AllStudents = db.Column(db.Integer)
    year = db.Column(db.Integer)
    PercentTested = db.Column(db.String(255))
    id = db.Column(db.Integer, primary_key=True)
