import os
from datetime import datetime as dt

# Defining paths
md_path = "blog_generator/posts/"
html_path = "posts/"
boilerplate_path = "blog_generator/boilerplate.md"


def read_md():
    """Reads all the markdown files in the blog_generator/posts/ folder

    Returns:
        dict: Dictionary of markdown files with format {title: content}
    """
    md_data = {}
    if os.path.exists(md_path):
        files = os.listdir(md_path)
        for md in files:
            file_path = os.path.join(md_path, md)
            with open(file_path, "r") as f:
                file_content = f.read()
            md_data[md] = file_content
        return md_data


def generate_html(md, file_name, title):
    """Formats given markdown and saves it in an html file using the boilerplate file as a template

    Args:
        md (str): Markdown
        file_name (str): Name of markdown file
    """
    if os.path.exists(boilerplate_path):
        with open(boilerplate_path, "r") as f:
            boilerplate = f.read()

            # Format the linebreaks to <br> tags so they can be recognized by the HTML
            md_formatted = []
            for char in md:
                if char == "\n":
                    md_formatted.append("<br>")
                    continue
                md_formatted.append(char)
            md_formatted = ''.join(md_formatted)
            
            # Inserts the content into the page
            content = boilerplate.split("{POST HERE}")
            content.insert(1, md_formatted)
            html = ''.join(content)

            # Inserts the title into the page
            content = html.split("{TITLE}")
            content.insert(1, title)
            html = ''.join(content)

            # Inserts the date into the page
            day = dt.now().day
            mon = dt.now().month
            year = dt.now().year
            date_formatted = f"{day}/{mon}/{year}"
            
            content = html.split("{DATE}")
            content.insert(1, date_formatted)
            html = ''.join(content)

            # Creates the file
            if os.path.exists(html_path):
                new_file_name = file_name
                new_file = os.path.join(html_path, new_file_name)
                if not os.path.exists(new_file):
                    with open(new_file, "w") as f:
                        f.write(html)


# Read all the markdown files and generate html files respectively
md_files = read_md()
for md in md_files:
    # Converts the file extension from .md to .html 
    name = md.split(".")
    name = name[0] + ".html"
    name = ''.join(name)
    
    # Gets the content and title from the md
    content = md_files[md].split("\n")
    title = content[0]

    # Removes title from content, as it will be displayed in the header
    content = content[1:]
    content = '\n'.join(content)

    # Generate the html file
    generate_html(content, name, title)
