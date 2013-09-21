import random, string, operator

def RandomHtml():
    yield '<html><body>'
    yield '<body>'
    yield RandomBody()
    yield '</body></html>'

def RandomBody():
    yield RandomSection()
    if random.randrange(2) == 0:
        yield RandomBody()

def RandomSection():
    yield '<h1>'
    yield RandomSentence()
    yield '</h1>'
    sentences = random.randrange(5, 20)
    for _ in xrange(sentences):
         yield RandomSentence()

def RandomSentence():
    words = random.randrange(5, 15)
    yield (' '.join(RandomWord() for _ in xrange(words)) + '.').capitalize()

def RandomWord():
    chars = random.randrange(2, 10)
    return ''.join(random.choice(string.ascii_lowercase) for _ in xrange(chars))

def getString(generator):
    if isinstance(generator, str):
        return generator
    else:
        return reduce(operator.add, [getString(item) for item in generator], "")

def generate():
  return getString(RandomHtml())
