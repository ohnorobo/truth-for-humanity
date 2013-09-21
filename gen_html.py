# -*- coding: utf-8 -*-
#http://stackoverflow.com/questions/2795134/how-to-generate-random-html-document

import random, string, operator, codecs, sys
#sys.setrecursionlimit(100)


def RandomHtml(term):
    return '<html><body>' + '<body>' + RandomBody(term) + '</body></html>'

def RandomBody(term):
    b =  RandomSection(term)
    if random.randrange(10) == 0:
        b += RandomBody(term)
    return b

def RandomSection(term):
    b = ""
    b += '<h1>'
    b += RandomSentence(term)
    b += '</h1>'
    sentences = random.randrange(5, 20)
    for _ in xrange(sentences):
         b += RandomSentence(term)
    return b

def RandomSentence(term):
    sent = SampleSentence()
    sent = sent.replace(u"[BLANK]", term)
    print "** sentence: " + sent
    return sent


CRAZY_FILE = "sampletext/crazy.txt"
#get a sample crazy sentence
def SampleSentence():
  lines = codecs.open(CRAZY_FILE, "r", "utf-8").read().splitlines()
  line = random.choice(lines)
  return line



def getString(generator):
    print "getting str of "
    print generator
    if isinstance(generator, str):
        return generator
    else:
        return reduce(operator.add, [getString(item) for item in generator], "")

def generate(term):
  return RandomHtml(term)
