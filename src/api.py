import requests

headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRFTOKEN': 'WQNTl8iOztVfsh0Ay2HD5NKV3twIq2g1ERiW06b3Ihq9B6iL3L9ERyVKXqAzLvEY',
}

json_data = {
    'username': 'Nizomidin',
    'password': '123456789',
}

response = requests.post('http://192.168.1.70:8000/api/v1/account/login/', headers=headers, json=json_data)
print(response.json())