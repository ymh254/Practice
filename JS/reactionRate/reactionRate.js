var 글자 = document.querySelector('#word');
var 네모 = document.querySelector('#sqr');
var 결과 = document.querySelector('#result');
글자.textContent = 'Click to start';
결과.textContent = 'Your reaction rate is ___'
var 시작시간;
var 끝시간;
var 타임아웃;
네모.addEventListener('click', function () {
    if (네모.classList.contains('waiting')) {
        네모.classList.remove('waiting');
        네모.classList.add('ready')
        글자.textContent = 'Click once it turns green';
        타임아웃 = setTimeout(function () {
            시작시간 = new Date()
            네모.click()
        }, Math.floor(Math.random() * 1000 + Math.floor(Math.random() * 1000)));
    } else if (네모.classList.contains('ready')) {
        if (!시작시간) {
            clearTimeout(타임아웃);
            네모.classList.remove('ready');
            네모.classList.add('waiting');
            글자.textContent = 'Try again';
        } else {
            네모.classList.remove('ready');
            네모.classList.add('now');
            글자.textContent = 'Click!!!!!';
        }
    } else if (네모.classList.contains('now')) {
        네모.classList.remove('now');
        네모.classList.add('waiting');
        글자.textContent = 'Click to start';
        끝시간 = new Date();
        console.log((끝시간 - 시작시간) / 1000);
        결과.textContent = `Your reaction rate is ${(끝시간 - 시작시간) / 1000}`
        시작시간 = null;
        끝시간 = null;
    }
})