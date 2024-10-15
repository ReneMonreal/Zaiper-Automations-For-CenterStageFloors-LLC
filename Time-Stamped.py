from datetime import datetime

time_created = datetime.now()

formatted_time_created = time_created.strftime("%Y/%m/%d")
print(formatted_time_created)