# -*- coding: utf-8 -*-
#http://stackoverflow.com/questions/2795134/how-to-generate-random-html-document

import random, string, operator, codecs, sys, glob, traceback
sys.setrecursionlimit(10000)


def RandomHtml(term):
    #link to javascript and css files
    return '''<html> <head> 
               <link href="../static/css/main.css" rel="stylesheet">
               <link href="../static/css/webfonts.css" rel="stylesheet">

               <link href='http://fonts.googleapis.com/css?family=Londrina+Outline' rel='stylesheet' type='text/css'>
               <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
               <link href='http://fonts.googleapis.com/css?family=Caesar+Dressing' rel='stylesheet' type='text/css'>

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
          #("<p>","</p>"),
          ("<strong>","</strong>"),
          ("<blink>","</blink>"), #YES
          ("<menu>","</menu>"),
          ("<container>","</container>"),
          ("<span>","</span>"),
          ("<i>","</i>"),
          ]

  return random.choice(tags)

def spanTagWithId():
  tags = [("<span id=\"font1\">","</span>"),
          ("<span id=\"font2\">","</span>"),
          ("<span id=\"font3\">","</span>"),
          ("<span id=\"font4\">","</span>"),
          ("<span id=\"font5\">","</span>"),
          ("<span id=\"font6\">","</span>"),
         ]
  return random.choice(tags)

def RandomElement(term):
    if (random.randint(0,2) == 0):
        return RandomImage(term)
    else:
        return "<p>" + RandomSentences(term, random.randint(0, 7)) + "</p>"
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


def RandomSentences(term, count):
    b = ""
    for _ in xrange(count):
        b += RandomSentence(term)
    return b

def RandomSentence(term):

    try:
        if (random.randint(0,2) == 0):
            term = getSynonym(term)
    except Exception as e:
        "lol don't care"
        print "error getting lemma"
        print e
        #traceback.print_exc()

    sent = SampleSentence()
    sent = sent.replace(u"[BLANK]", term)
    if (random.randint(0, 4) == 0): #special font id
        pstart, pend = spanTagWithId()
        sent = pstart + sent + pend

    return sent


CRAZY_FILE = "sampletext/crazy.txt"
TIMECUBE_FILE = "sampletext/timecube.txt"
def choose_file():
  sample_files = {CRAZY_FILE: 5}
  return random.choice([x for x in sample_files for y in range(sample_files[x])])

#get a sample crazy sentence
def SampleSentence():
  lines = codecs.open(choose_file(), "r", "utf-8").read().splitlines()
  line = random.choice(lines)
  return line + " "

from nltk.corpus import wordnet as wn
from string import capwords
def getSynonym(term):
  if ("the " in term.lower()):
      print "** searching for: " + term
      stopwords, term = term.split(" ", 1)

  print "** searching for: " + term
  synset = random.choice(wn.synsets(term.lower(), pos=wn.NOUN))
  if (random.randint(0, 1) == 0):
      new = random.choice(synset.hypernyms())
  else:
      new = random.choice(synset.hyponyms())
  lemma = random.choice(new.lemma_names)
  lemma = lemma.replace("_", " ")

  if (stopwords):
    lemma = stopwords + " " + lemma

  lemma = capwords(lemma)
  print "lemma " + lemma
  return lemma



def generate(term):
  return RandomHtml(term)
