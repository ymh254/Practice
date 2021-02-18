// function a(){
//     console.log('A');
// }
var a = function () {
    console.log('A');
}
//콜백
function slowfunc(callback) {
    callback();
}

slowfunc(a);