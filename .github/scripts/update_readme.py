from datetime import datetime

# Road1
start_date = datetime(2025, 4, 16)
today = datetime.utcnow()
days_elapsed = (today - start_date).days

readme_path = "./Road/Readme.md"  # Use the correct relative path

with open(readme_path, "r", encoding="utf-8") as f:
    content = f.read()

new_content = content.replace(
    content[
        content.find("<!--DAYS_COUNTER-->") + 19 : content.find("<!--/DAYS_COUNTER-->")
    ],
    str(days_elapsed),
)

with open(readme_path, "w", encoding="utf-8") as f:
    f.write(new_content)

# Road2
start_date = datetime(2025, 5, 15)
today = datetime.utcnow()
days_elapsed = (today - start_date).days

readme_path = "./Road/Bangalore/Mahadevapura/Readme.md"  # Use the correct relative path

with open(readme_path, "r", encoding="utf-8") as f:
    content = f.read()

new_content = content.replace(
    content[
        content.find("<!--DAYS_COUNTER-->") + 19 : content.find("<!--/DAYS_COUNTER-->")
    ],
    str(days_elapsed),
)

with open(readme_path, "w", encoding="utf-8") as f:
    f.write(new_content)
