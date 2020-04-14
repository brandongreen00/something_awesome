progress = {
    'info': [
        {'completed': False,
        'pageNum': 0,
        'pageEnd': 7},
        {'completed': False,
        'pageNum': 0,
        'pageEnd': 7},
        {'completed': False,
        'pageNum': 0,
        'pageEnd': 7}
    ]    
}

attack_defend = {
    'walls': [
        {'north': 0,
        'east': 0,
        'south': 0,
        'west': 0},
        {'north': 0,
        'east': 0,
        'south': 0,
        'west': 0},
        {'north': 0,
        'east': 0,
        'south': 0,
        'west': 0}
    ],
    'brickBank': 300,
    'timeSurvived': 0,
    'timeToEnter': 0
}

def get():
    global progress
    return progress

def put(data):
    global progress
    progress = data
    return progress

def get_ad():
    global attack_defend
    return attack_defend

def put_ad(element, data):
    global attack_defend
    attack_defend[element] = data
    return attack_defend


