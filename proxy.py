from flask import Flask, jsonify
from requests import get
import json

app = Flask(__name__)
SITE_NAME = 'https://google.com/'

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def proxy(path):
  headers = {"content-type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI5NzUsImZpcnN0X25hbWUiOiJVbmtub3duIiwibGFzdF9uYW1lIjoiVW5rbm93biIsImVtYWlsIjoicGF1bEBmb29qaS5jb20iLCJ2aWEiOiJkYXNoYm9hcmQiLCJjbGllbnQiOiJkYXNoYm9hcmQiLCJpZGVudGlmaWVyIjoicGF1bEBmb29qaS5jb20iLCJmb29qaV9kYXRhIjp7fSwiaWF0IjoxNTU3MDA0NTA3LCJleHAiOjE1ODg1NDA1MDd9.buh_x2nZd79yke6RhNG4AK40w8VN6TfhCSbDdrpCf14"}
  res = get(path, headers=headers, params={"organization_id": 1})
  return res.content

if __name__ == '__main__':
  app.run(host='127.0.0.1', port=8080)
