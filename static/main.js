const BACKEND_PORT = 5000

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
            before = document.getElementById((i+1).toString());
            before.style.color = "white";
            before.style['font-weight'] = "normal";
            after = document.getElementById((i+2).toString());
            after.style.color = "lime";
            after.style['font-weight'] = "bold";
            break
        }
    }
    
}