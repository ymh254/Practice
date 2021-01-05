var 바디 = document.body;
var 테이블 = document.createElement('table');
var 칸들 = [];
var 줄들 = [];
var 턴 = 'x';

var 다참 = false;

var 비동기콜백 = function (이벤트) {
    var 몇줄 = 줄들.indexOf(이벤트.target.parentNode);
    var 몇칸 = 칸들[몇줄].indexOf(이벤트.target);
    if (칸들[몇줄][몇칸].textContent === "") {
        칸들[몇줄][몇칸].textContent = 턴;
        console.log('빈칸입니다');
        if (
            칸들[몇줄][0].textContent === 턴 &&
            칸들[몇줄][1].textContent === 턴 &&
            칸들[몇줄][2].textContent === 턴
        ) {
            다참 = true
            console.log(다참)
        }
        if (
            칸들[0][몇칸].textContent === 턴 &&
            칸들[1][몇칸].textContent === 턴 &&
            칸들[2][몇칸].textContent === 턴
        ) {
            다참 = true;
        }
        //대각선 검사
        if (몇줄 - 몇칸 === 0 || Math.abs(몇줄 - 몇칸) === 2) {
            if (
                (칸들[0][0].textContent === 턴 &&
                    칸들[1][1].textContent === 턴 &&
                    칸들[2][2].textContent === 턴) ||
                (칸들[0][2].textContent === 턴 &&
                    칸들[1][1].textContent === 턴 &&
                    칸들[2][0].textContent === 턴)
            ) {
                다참 = true;
            }
        }
        if (턴 === 'x') {
            턴 = 'o'
            차례.textContent = 턴 + '차례입니다'
        } else {
            턴 = 'x'
            차례.textContent = 턴 + '차례입니다'
        }
    } else {
        console.log('빈칸이아닙니다');
    }
    console.log(다참)
    if (다참) {
        alert(턴 + '승리!');
        //초기화
        턴 = 'x';
        칸들.forEach(function (줄) {
            줄.forEach(function (칸) {
                칸.textContent = '';
            })
        })
    } else {
        console.log('')
    }
};

for (i = 1; i <= 3; i += 1) {
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for (j = 1; j <= 3; j++) {
        var 칸 = document.createElement('td')
        칸.addEventListener('click', 비동기콜백)
        칸들[i - 1].push(칸)
        줄.appendChild(칸);
    }
    테이블.appendChild(줄);
}
바디.appendChild(테이블)
var 차례 = document.createElement('div')
바디.appendChild(차례)
차례.textContent = ''
차례.style.marginTop = '20px'
차례.style.marginLeft = '120px'