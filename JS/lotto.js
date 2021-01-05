var 바디 = document.body;
var 제목 = document.createElement('div');
바디.appendChild(제목);
제목.textContent = '🍀로또 당첨 번호';
var 번호 = document.createElement('div');
바디.appendChild(번호);

제목.style.marginLeft = "300px";

번호.style.display = "flex";
번호.style.marginLeft = '150px';

var 색깔 = function (번호들) {
    if (번호들.textContent <= 10) {
        번호들.style.backgroundColor = 'yellow'
    } else if (번호들.textContent <= 20) {
        번호들.style.backgroundColor = 'skyblue'
    } else if (번호들.textContent <= 30) {
        번호들.style.backgroundColor = 'lightgreen'
    } else if (번호들.textContent <= 40) {
        번호들.style.backgroundColor = 'pink'
    } else {
        번호들.style.backgroundColor = 'orange'
    }
}

for (i = 0; i <= 5; i++) {
    setTimeout(() => {
        var 번호들 = document.createElement('p');
        번호.appendChild(번호들);
        번호들.textContent = Math.ceil(Math.random() * 45);
        번호들.style.margin = '20px';
        번호들.style.border = '1px solid black'
        번호들.style.height = '30px'
        번호들.style.width = '30px'
        번호들.style.borderRadius = '20px'
        번호들.style.textAlign = 'center'
        번호들.style.lineHeight = '30px'
        색깔(번호들);
    }, 1000 * i);

}

var 소제목 = document.createElement('div')
바디.appendChild(소제목)
소제목.style.marginLeft = '305px'
소제목.textContent = '⭐️보너스 숫자'
setTimeout(() => {
    var 보너스 = document.createElement('div');
    바디.appendChild(보너스);
    보너스.textContent = Math.ceil(Math.random() * 45)
    보너스.style.marginLeft = '350px'
    보너스.style.marginTop = '10px'
    보너스.style.border = '1px solid black'
    보너스.style.height = '30px'
    보너스.style.width = '30px'
    보너스.style.borderRadius = '20px'
    보너스.style.textAlign = 'center'
    보너스.style.lineHeight = '30px'
    색깔(보너스);
}, 6000);

// var 번호들 = []
// 번호.textContent = 번호들
// 번호.style.textAlign = 'center'

