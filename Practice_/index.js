// function checkInput (e) {
//     const addInput = document.getElementById(e).value;
//     console.log(addInput)
//     const makeArray = addInput.split(',');
//     console.log(makeArray)
// }

function addText () {
    const addInput = function (a) {
        const a = document.text1.value;
        const makeArray = a.split(',')
        console.log(makeArray)
        let c = document.createTextNode(makeArray)
        let node = document.getElementById('target')
        node.appendChild(c)
    }
}