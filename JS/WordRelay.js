//끝말잇기
var word = '제시어';
while(true){
    var answer = prompt(word);
    if(word[word.length-1]===answer[0]){
        alert('딩동댕');
        word=answer;
    }else{
        alert('땡');
    }
}

//HTML태그 만들기!!
var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '제시어';
document.body.append(단어);
var 입력창 = document.createElement('input');
document.body.append(입력창);
var 버튼 = document.createElement('button');
버튼.textContent = '입력';
document.body.append('버튼');
var 결과창 = document.createElement('div');
document.body.append(결과창);

버튼.addEventListener('click', function 콜백함수 () {
    if (단어.textContent[단어.textContent.length -1]===입력창.value[0]) {
        결과창.textContent='딩동댕';
        단어.textContent = 입력창.value;
        입력창.value = '';
        입력창.focus();
    } else {
        결과창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }
});
//input과 button 태그를 폼태그로 감싸주고 click을 submit으로 바꿔주면 enter키 사용가능.
//이 때, 항상 새로고침이 되는데 콜백함수 인자(e)를 주고 e.preventDefault()를 사용해 새로고침 방지.