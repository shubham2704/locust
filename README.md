# locust

locust -f locustfile.py --host=http://localhost:3000 --headless -u 10 -r 2 -t 1m --csv=load_test_result