import os

md_path = "blog_generator/posts/"
html_path = "posts/"
boilerplate_path = "blog_generator/boilerplate.md"

def read_md():
    md_data = {}
    if os.path.exists(md_path):
        files = os.listdir(md_path)
        for md in files:
            file_path = os.path.join(md_path, md)
            with open(file_path, "r") as f:
                file_content = f.read()
            md_data[md] = file_content
        return md_data

def generate_html(md, file_name):
    if os.path.exists(boilerplate_path):
        with open(boilerplate_path, "r") as f:
            
            md_formatted = []
            for char in md:
                if char == "\n":
                    md_formatted.append("<br>")
                    continue
                md_formatted.append(char)
            md_formatted = ''.join(md_formatted)
            
            content = f.read().split("---POST HERE---")
            content.insert(1, md_formatted)
            html = ''.join(content)

            if os.path.exists(html_path):
                new_file_name = file_name
                new_file = os.path.join(html_path, new_file_name)
                if not os.path.exists(new_file):
                    with open(new_file, "w") as f:
                        f.write(html)

md_files = read_md()
for md in md_files:
    name = md.split(".")
    name = name[0] + ".html"
    name = ''.join(name)
    content = md_files[md]
    generate_html(content, name)
