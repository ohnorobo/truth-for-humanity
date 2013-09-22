#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys, flask, os, codecs

app = flask.Flask(__name__)


#write a file(s) for this page to the filesystem
#return the location of the page
def generate_page(term):

  #generate html
  path = generate_html(term)
  #generate css

  return path


import gen_html
def generate_html(term):
  html = gen_html.generate(term);
  filename = "page.html"
  path = filename
  f = codecs.open("templates/"+path, 'w', 'utf-8') 
    #html pages go in templates/
  f.write(html)
  f.close()
  return path

@app.route("/")
def main():
    return flask.render_template("index.html");

@app.route("/favicon.ico")
def favicon():
    return "";

@app.route("/<term>")
def term(term):
    page = generate_page(term);
    return flask.render_template(page);


if __name__ == "__main__":
    app.debug = True

    host="127.0.0.1"
    port=8080    #run on 80 by default

    if sys.argv[1]: #run on port given from heroku
        host = sys.argv[1]
    if sys.argv[2]: #run on host given from heroku
        port = sys.argv[2]

    app.run(host=host, port=int(port))
