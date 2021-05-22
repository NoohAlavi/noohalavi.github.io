import os

md_path = "blog_generator/posts/"
html_path = "posts/"

print(md_path, os.path.exists(md_path))
print(html_path, os.path.exists(html_path))