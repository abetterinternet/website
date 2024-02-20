import yaml
import os
from datetime import datetime

def open_yaml(path="./publist.yml"):
    with open(path, "r") as stream:
        try:
            return yaml.safe_load(stream)
        except yaml.YAMLError as e:
            print(e)

def transform_yaml(dat):
    author_list = dat["authors"].split(",")
    dat["title"] = "\"" + dat["title"] + "\""
    author_list = [auth if auth.find("Zhuotao Liu") == -1 else " <strong>Zhuotao Liu</strong>" for auth in author_list]
    dat["authors"] = ",".join(author_list)
    markdown_base = "---\n"
    for key in dat.keys():
        if dat[key] is not None:
            if key != "conference":
                k = key
            else:
                k = "excerpt"
            markdown_base += "%s: %s\n" % (k, dat[key])
    year = dat["conference"][-4:]
    return year, markdown_base

def write_back(transformed, file_name, base_dir):
    final_filename = os.path.join(base_dir, file_name)
    with open(final_filename, "w") as f:
        f.write(transformed)

def transform_pub():
    yaml_data = open_yaml()
    yaml_data.reverse()
    year_stat = dict()
    for dat in yaml_data:
        year, md = transform_yaml(dat)
        file_name = year
        if year_stat.get(year) is None:
            year_stat[year] = 0
        year_stat[year] += 1
        file_name += "-%d.md"%(year_stat[year])
        md += "seq: %s-%d\n"%(year, year_stat[year])
        md += "---\n"
        write_back(md, file_name, "./content/en/publications")

news_template = """---
title: \"%s\"
date: %s
has_more: false
---
"""

def transform_news(base_dir = "./content/en/post"):
    with open("./ori_news.yml", "r") as stream:
        news_list = yaml.safe_load(stream)
        news_list.reverse()
        year_dict = {}
        for news in news_list:
            year = news["date"][-4:]
            if year_dict.get(year) is None:
                year_dict[year] = 0
            year_dict[year] += 1
            new_filename = os.path.join(base_dir, "%s-%d.md"%(year, year_dict[year]))
            try:
                date_t = datetime.strptime(news["date"], "%b %Y").strftime("%Y-%m-01")
            except:
                date_t = datetime.strptime(news["date"], "%B %Y").strftime("%Y-%m-01")
            headline = news["headline"].replace("<b>", "").replace("</b>", "").replace("\"", "\\\"")
            content = news_template%(headline, date_t)
            with open(new_filename, "w") as nf:
                nf.write(content)

def avatar_transform(base_dir = "./content/en/phd_members", img_dir="./static/images/team"):
    avatar_template = """---
seq: %d
image: %s
---

### 

- 
- 

"""
    pics = os.listdir(img_dir)
    names = [os.path.splitext(p)[0] for p in pics]
    full_path_pics = [img_dir[8:]+"/"+p for p in pics]
    for idx, (name, path) in enumerate(zip(names, full_path_pics)):
        content = avatar_template%(idx, path)
        with open(os.path.join(base_dir, name+".md"), "w") as f:
            f.write(content)



if __name__ == "__main__":
    # transform_pub()
    # transform_news()
    avatar_transform()