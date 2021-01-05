// while (true) {
//     var number1 = Math.floor(Math.random() * 9) + 1     //floor 대신 ceil 사용가능!
//     var number2 = Math.floor(Math.random() * 9) + 1
//     var result = number1 * number2
//     var a = true;
//     while (a) {
//         var answer = prompt(String(number1)+'x'+String(number2)+'=?')
//         //prompt에서 취소를 누르면 null이 값으로 들어감.
//         //Number(null) = 0 이므로 false로 처리됨.
//         if (result === Number(answer)) {
//             alert('Correct!')
//             a=false;
//         }else{
//             alert('Incorrect!')
//         }
//     }
// }

var 바디 = document.body;
var 제목 = document.createElement('div');
제목.textContent = '구구단';
document.body.append(제목);
var 문제 = document.createElement('div');
document.body.append(문제);
var number1 = Math.floor(Math.random() * 9) + 1
var number2 = Math.floor(Math.random() * 9) + 1
문제.textContent = `${number1}x${number2}`;
var 폼 = document.createElement('form');
document.body.append(폼);
var 입력창 = document.createElement('input');
폼.append(입력창);
var 제출 = document.createElement('button');
폼.append(제출);
제출.textContent = '제출';
// var 결과창 = document.createElement('div');
// document.body.append(결과창);

폼.addEventListener("submit", function (이벤트) {
    var result = number1 * number2
    // var answer = prompt(String(number1) + 'x' + String(number2) + '=?')
    문제.textContent = `${number1} x ${number2}`
    answer = 입력창.value;
    입력창.value = '';
    if (result === Number(answer)) {
        alert('Correct!')
        number1 = Math.floor(Math.random() * 9) + 1
        number2 = Math.floor(Math.random() * 9) + 1
    } else {
        alert('Incorrect!');
    }
})