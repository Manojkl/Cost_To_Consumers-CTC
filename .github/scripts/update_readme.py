# from datetime import datetime

# # Road1
# start_date = datetime(2025, 4, 16)
# today = datetime.utcnow()
# days_elapsed = (today - start_date).days

# readme_path = "./Road/Readme.md"  # Use the correct relative path

# with open(readme_path, "r", encoding="utf-8") as f:
#     content = f.read()

# new_content = content.replace(
#     content[
#         content.find("<!--DAYS_COUNTER-->") + 19 : content.find("<!--/DAYS_COUNTER-->")
#     ],
#     str(days_elapsed),
# )

# with open(readme_path, "w", encoding="utf-8") as f:
#     f.write(new_content)

# # Road2
# start_date = datetime(2025, 5, 15)
# today = datetime.utcnow()
# days_elapsed = (today - start_date).days

# readme_path = "./Road/Bangalore/Mahadevapura/Readme.md"  # Use the correct relative path

# with open(readme_path, "r", encoding="utf-8") as f:
#     content = f.read()

# new_content = content.replace(
#     content[
#         content.find("<!--DAYS_COUNTER-->") + 19 : content.find("<!--/DAYS_COUNTER-->")
#     ],
#     str(days_elapsed),
# )

# with open(readme_path, "w", encoding="utf-8") as f:
#     f.write(new_content)

from datetime import datetime


def update_days_counter(readme_path, start_date):
    today = datetime.utcnow()
    days_elapsed = (today - start_date).days

    with open(readme_path, "r", encoding="utf-8") as f:
        content = f.read()

    start_marker = "<!--DAYS_COUNTER-->"
    end_marker = "<!--/DAYS_COUNTER-->"
    start = content.find(start_marker) + len(start_marker)
    end = content.find(end_marker)

    new_content = content[:start] + str(days_elapsed) + content[end:]

    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(new_content)


# Road1
update_days_counter("./Road/Readme.md", datetime(2025, 4, 16))

# Road2
update_days_counter("./Road/Bangalore/Mahadevapura/Readme.md", datetime(2025, 5, 15))
