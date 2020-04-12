progress = {
    'info': [
        {'completed': False,
        'pageNum': 3,
        'pageEnd': 5},
        {'completed': False,
        'pageNum': 0,
        'pageEnd': 5},
        {'completed': False,
        'pageNum': 0,
        'pageEnd': 5}
    ]    
}

def get():
    global progress
    return progress

def put(element, data):
    global progress
    progress[element] = data
    return progress

