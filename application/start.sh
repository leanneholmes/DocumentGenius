python -m celery -A app.celery worker -l INFO &
python -m gunicorn -w 2 --timeout 120 --log-level=debug --bind 0.0.0.0:5001 wsgi:app
