# -*- coding: utf-8 -*-
#http://stackoverflow.com/questions/2795134/how-to-generate-random-html-document

import random, string, operator, codecs, sys, glob
sys.setrecursionlimit(10000)


def RandomHtml(term):
    #link to javascript and css files
    return '''<html> <head> 
               <link href="../static/css/main.css" rel="stylesheet">
               <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" ></script>
               <script src="../static/js/main.js"></script>
               </head>''' + \
               '<body>' + '<body>' + RandomBody(term) + '</body></html>'

def RandomBody(term):
    b =  RandomSection(term)
    for _ in xrange(random.choice([10, 20, 30])):
        b += RandomSection(term)
    return b

def RandomSection(term):
    starttag, endtag = getTag()
    b = ""
    b += starttag
    b += RandomElement(term)
    b += endtag
    sentences = random.randrange(5, 20)
    for _ in xrange(sentences):
         b += RandomElement(term)
    return b

def getTag():
  tags = [("<h1>","</h1>"),
          ("<h1>","</h1>"),
          ("<h1>","</h1>"),
          ("<h2>","</h2>"),
          ("<h2>","</h2>"),
          ("<h2>","</h2>"),
          ("<h3>","</h3>"),
          ("<h3>","</h3>"),
          ("<h3>","</h3>"),
          ("<h4>","</h4>"),
          ("<div>","</div>"),
          ("<div id=\"results\">","</div>"), #for flickr images
          ("<li>","</li>"),
          ("<ul>","</ul>"),
          ("<p>","</p>"),
          ("<strong>","</strong>"),
          ("<blink>","</blink>"), #YES
          ("<menu>","</menu>"),
          ("<container>","</container>"),
          ("<span>","</span>"),
          ("<i>","</i>"),
          ]

  return random.choice(tags)


def RandomElement(term):
    if (random.randint(0,6) == 0):
        return RandomImage(term)
    else:
        return RandomSentence(term)
    #later - randomimage
    #randomfact
    #etc

def RandomImage(term):
    #eventually- get specific images from the web

    #currently- get images from out retro-set
    dirs = ["static/scraped/images/*.*", 
           "static/scraped/images/banners/*.*", 
           "static/scraped/images/donate/*.*", 
           "static/scraped/images/gif/*.gif", 
           "static/scraped/images/under_construction/*.*"]
    d = random.choice(dirs)
    file = random.choice(glob.glob(d));

    return "<img src="+file+">"



def RandomSentence(term):
    sent = SampleSentence()
    sent = sent.replace(u"[BLANK]", term)
    print "** sentence: " + sent
    return sent


CRAZY_FILE = "sampletext/crazy.txt"
TIMECUBE_FILE = "sampletext/timecube.txt"
def choose_file():
  sample_files = {CRAZY_FILE: 5, TIMECUBE_FILE: 1}
  return random.choice([x for x in sample_files for y in range(sample_files[x])])

#get a sample crazy sentence
def SampleSentence():
  lines = codecs.open(choose_file(), "r", "utf-8").read().splitlines()
  line = random.choice(lines)
  return line + " "



def getString(generator):
    print "getting str of "
    print generator
    if isinstance(generator, str):
        return generator
    else:
        return reduce(operator.add, [getString(item) for item in generator], "")

def generate(term):
  return RandomHtml(term)
