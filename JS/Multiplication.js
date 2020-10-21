while (true) {
    var number1 = Math.floor(Math.random() * 9) + 1     //floor 대신 ceil 사용가능!
    var number2 = Math.floor(Math.random() * 9) + 1
    var result = number1 * number2
    var a = true;
    while (a) {
        var answer = prompt(String(number1)+'x'+String(number2)+'=?')
        //prompt에서 취소를 누르면 null이 값으로 들어감.
        //Number(null) = 0 이므로 false로 처리됨.
        if (result === Number(answer)) {
            alert('Correct!')
            a=false;
        }else{
            alert('Incorrect!')
        }
    }
}