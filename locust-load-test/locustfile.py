from locust import HttpUser, task, between
import random
import json

class APIUser(HttpUser):
    wait_time = between(1, 3)  # Users wait between 1 to 3 seconds between tasks

    @task(3)
    def get_data(self):
        """ Load test the GET API """
        self.client.get("/api/data")

    @task(2)
    def post_data(self):
        """ Load test the POST API """
        test_data = {
            "name": f"User{random.randint(1, 1000)}",
            "email": f"user{random.randint(1, 1000)}@example.com"
        }
        headers = {'Content-Type': 'application/json'}
        self.client.post("/api/submit", data=json.dumps(test_data), headers=headers)
