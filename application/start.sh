celery -A app.celery worker -l INFO & 
gunicorn -w 2 --timeout 120 --bind 0.0.0.0:5001 wsgi:app
