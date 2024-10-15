import webbrowser
import time
import requests

# Extract the URL from the input dictionary that is on my zapier Automation Zap
#Input_Data is a variable from my zapier dictionary 
url = input_data['Webhook']

# Open the URL in the default web browser as the user
webbrowser.open(url, new=2)

# Wait for 7 second, set so the webhook has time to process
time.sleep(7)

# Send a GET request to the URL
response = requests.get(url)

# Return a confirmation message with response status
output = {
    "status": "success", 
    "message": f"Opened URL: {url} as a user for 7 seconds",
    "response_status_code": response.status_code,
    "response_content": response.content.decode("utf-8")  # or use response.text
}
