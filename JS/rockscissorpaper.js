var 바디 = document.body;
var 놀이 = document.createElement('div');
바디.appendChild(놀이);
var 사진 = document.createElement('img')
놀이.appendChild(사진);
사진.src = 'https://static.vecteezy.com/system/resources/thumbnails/000/691/489/original/retro-offset-rock-paper-scissors-icons.jpg';
사진.style.width = '700px'
사진.style.height = '600px'
사진.style.position = 'relative';

놀이.style.height = '500px'
놀이.style.width = '250px'
놀이.style.overflow = 'hidden'

사진.style.left = '-36px'

var count = 0;
var left = ["-36px", "-230px", "-437px"]
var 타이머 = setInterval(() => {
    사진.style.left = left[count % 3]
    count += 1
}, 100);

var 비동기콜백 = function (이벤트) {
    clearInterval(타이머);
    setTimeout(function () {
        타이머 = setInterval(function () {
            사진.style.left = left[count % 3]
            count += 1
        }, 100);
        결과창.textContent = '';
    }, 1000);
    var 레프트 = left.indexOf(사진.style.left)
    var 텍스트 = 옵션.indexOf(이벤트.target.textContent)
    if (레프트 === 텍스트) {
        결과창.textContent = '비겼습니다'
    } else if (레프트 === 0 && 텍스트 === 1 ||
        레프트 === 1 && 텍스트 === 2 ||
        레프트 === 2 && 텍스트 === 0
    ) {
        결과창.textContent = '이겼습니다'
    } else {
        결과창.textContent = '졌습니다'
    }
}
var 옵션 = ['바위', '보', '가위']
// var 옵션 = { 0: '바위', 1: '보', 2: '가위' }
for (i = 0; i <= 2; i++) {
    var 버튼 = document.createElement('button')
    버튼.addEventListener('click', 비동기콜백);
    바디.appendChild(버튼)
    버튼.textContent = 옵션[i]
    버튼.style.width = '60px'
    버튼.style.height = "30px"
    버튼.style.marginLeft = '10px'
}
var 결과창 = document.createElement('div')
바디.appendChild(결과창)
결과창.textContent = ''
결과창.style.marginTop = '20px'
결과창.style.marginLeft = '70px'