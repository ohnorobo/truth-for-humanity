#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys, flask, os

app = flask.Flask(__name__)


#write a file(s) for this page to the filesystem
#return the location of the page
def generate_page(term):

  #generate html
  #generate css

  return "some/path/to/html"



@app.route("/<term>")
def main(term):
    page = generate_page(term);

    return flask.render_template(page);


if __name__ == "__main__":
    app.debug = True

    host="127.0.0.1"
    port=80    #run on 80 by default

    app.run(host=host, port=int(port))
