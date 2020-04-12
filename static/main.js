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
    text = "http://localhost:" + BACKEND_PORT + "/mod1"
    alert(text)
    window.location = text;
}

function openMod2() {
    window.location = "http://localhost:" + BACKEND_PORT + "/mod2"
}

function openMod3() {
    window.location = "http://localhost:" + BACKEND_PORT + "/mod3"
    
}