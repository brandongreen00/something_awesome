const BACKEND_PORT = 5000

var attack_defend = {
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

const ad_position_ref = ['North', 'East', 'South', 'West']
const box_position_ref = ['top', 'right', 'bottom', 'left']

function updateProgress() {
    progressBars = document.getElementsByClassName('main-content-progress')
    fetch("http://localhost:" + BACKEND_PORT + "/getdata")
        .then(response => response.json())
        .then(jsonResponse => {
            num = 0;
            for (var i = 0; i < progressBars.length; i++) {
                element = progressBars[i]
                data = jsonResponse['info'][i]
                element.value = data['pageNum']
                element.max = data['pageEnd']
                if (element.value == element.max) {
                    num++;
                }
            }
            totalProg = document.getElementById('total-progress')
            totalProg.max = 3;
            totalProg.value = num;
        })
    
}

function openMod1() {
    window.location = "http://localhost:" + BACKEND_PORT + "/mod1"; 
}

function openMod2() {
    window.location = "http://localhost:" + BACKEND_PORT + "/mod2"
}

function openMod3() {
    window.location = "http://localhost:" + BACKEND_PORT + "/mod3"
    
}

function prepMod() {
    url = window.location.toString()
    mod = ""
    for (i = url.length - 4; i < url.length; i++) {
        mod += url.charAt(i);
    }
    modRef = document.getElementsByClassName(mod + "-page")
    for (i = 1; i < modRef.length; i++) {
        modRef[i].style.display = "none";
    }
    sidebarContentElement = document.getElementById("1");
    sidebarContentElement.style.color = "lime";
    sidebarContentElement.style['font-weight'] = "bold";
}

function nextPage() {
    url = window.location.toString()
    mod = ""
    for (i = url.length - 4; i < url.length; i++) {
        mod += url.charAt(i);
    }
    modRef = document.getElementsByClassName(mod + "-page")
    for (i = 0; i < modRef.length; i++) {
        if (modRef[i].style.display != "none") {
            modRef[i].style.display = "none";
            modRef[i+1].style.display = "block";
            if (modRef[i+1].classList.contains('game-info')) {
                modRef[i+1].style.display = "grid";
            }
            before = document.getElementById((i+1).toString());
            before.style.color = "white";
            before.style['font-weight'] = "normal";
            after = document.getElementById((i+2).toString());
            after.style.color = "lime";
            after.style['font-weight'] = "bold";
            fetch("http://localhost:" + BACKEND_PORT + "/changepage?mod=" + mod.charAt(3) + "&pageNum=" + (i + 1), {
                method: 'GET'
            }) 
            break
        }

    }
    
}

// GAME FOR MODULE 1 //

// ATTACK 
function start_attack() {
    attack_defend.timeToEnter = 0;
    for (i = 2; i >= 0; i--) {
        walls = attack_defend['walls'][i];
        wallStatus = document.getElementsByClassName("wall-status")
        box = document.getElementById("Box" + i)
        brickBank = 50;
        j = 0;
        for (element in walls) {
            result = Math.floor(Math.random() * Math.floor(brickBank)) + 1
            walls[element] = result;
            box.style['border-' + box_position_ref[j] + '-width'] = result + "px"
            if (i == 2) {
                wallStatus[j].innerHTML = ad_position_ref[j] + ": " + result
            }
            j++;
        }
        attack_defend['walls'][i] = walls
    }
    buttonList = document.getElementsByClassName('ad-attack-button')
    for (i = 0; i < buttonList.length; i++) {
        buttonList[i].style.display = 'flex'
    }
}
function attack_north() {
    for (i = 2; i >= 0; i--) {
        foundZero = false
        for (element in attack_defend['walls'][i]) {
            if (attack_defend['walls'][i][element] == 0) {
                foundZero = true
                break
            }
        }
        if (foundZero == true) {
            continue
        }
        result = attack_defend['walls'][i]['north'];
        attack_defend['walls'][i]['north'] = 0;
        attack_defend['timeToEnter'] += result;
        box = document.getElementById("Box" + i)
        box.style['border-top-width'] = "0px"
        document.getElementById('time-taken').innerHTML = "Time Taken: " + attack_defend.timeToEnter + " s"

        break       
    }
    end_attack(i)
}
function attack_east() {
    for (i = 2; i >= 0; i--) {
        foundZero = false
        for (element in attack_defend['walls'][i]) {
            if (attack_defend['walls'][i][element] == 0) {
                foundZero = true
                break
            }
        }
        if (foundZero == true) {
            continue
        }
        result = attack_defend['walls'][i]['east'];
        attack_defend['walls'][i]['east'] = 0;
        attack_defend['timeToEnter'] += result;
        box = document.getElementById("Box" + i)
        box.style['border-right-width'] = "0px"
        document.getElementById('time-taken').innerHTML = "Time Taken: " + attack_defend.timeToEnter + " s"
        break       
    }
    end_attack(i)
}
function attack_south() {
    for (i = 2; i >= 0; i--) {
        foundZero = false
        for (element in attack_defend['walls'][i]) {
            if (attack_defend['walls'][i][element] == 0) {
                foundZero = true
                break
            }
        }
        if (foundZero == true) {
            continue
        }
        result = attack_defend['walls'][i]['south'];
        attack_defend['walls'][i]['south'] = 0;
        attack_defend['timeToEnter'] += result;
        box = document.getElementById("Box" + i)
        box.style['border-bottom-width'] = "0px"
        document.getElementById('time-taken').innerHTML = "Time Taken: " + attack_defend.timeToEnter + " s"
        break       
    }
    end_attack(i)
}
function attack_west() {
    for (i = 2; i >= 0; i--) {
        foundZero = false
        for (element in attack_defend['walls'][i]) {
            if (attack_defend['walls'][i][element] == 0) {
                foundZero = true
                break
            }
        }
        if (foundZero == true) {
            continue
        }
        result = attack_defend['walls'][i]['west'];
        attack_defend['walls'][i]['west'] = 0;
        attack_defend['timeToEnter'] += result;
        document.getElementById("Box" + i).style['border-left-width'] = "0px"
        document.getElementById('time-taken').innerHTML = "Time Taken: " + attack_defend.timeToEnter + " s"
        break       
    }
    end_attack(i)
}
function end_attack(wallCount) {
    wallStatus = document.getElementsByClassName("wall-status")
    editMessage = true
    message = ""
    nextWall = null
    if (wallCount == 0) {
        message = 'Invaded!'
        editMessage = false
        attack_buttons = document.getElementsByClassName('ad-attack-button')
        for (i = 0; i < attack_buttons.length; i++) {
            attack_buttons[i].style.display = "none"
        }
    } else {
        nextWall = attack_defend['walls'][i - 1]
    }
    for (j = 0; j < wallStatus.length; j++) {
        if (editMessage == true) {
            wallStatus[j].innerHTML = ad_position_ref[j] + ": " + nextWall[ad_position_ref[j].toLowerCase()]
        } else {
            wallStatus[j].innerHTML = message
        }
    }
}

// DEFEND 


// END GAME MODULE 1 //
function back_to_main() {
    url = window.location.toString()
    mod = ""
    for (i = url.length - 4; i < url.length; i++) {
        mod += url.charAt(i);
    }
    fetch("http://localhost:" + BACKEND_PORT + "/changepage?mod=" + mod.charAt(3) + "&pageNum=7&completed=True", {
                method: 'GET'
            }) 
    window.location = "http://localhost:" + BACKEND_PORT
}