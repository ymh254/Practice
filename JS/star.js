for (var star = 1; star <= 5; star += 1) {
    console.log('*'.repeat(star))
}

for (var star = 5; star >= 1; star -= 1) {
    console.log('*'. repeat(star))
}

for (var star = 5; star >= 1; star -= 1) {
    console.log(' '.repeat(5-star) + '*'.repeat(star))
}

for (var star = 9; star >= 1; star -= 2) {
    console.log(' '.repeat((9-star)/2) + '*'.repeat(star))
}

//Diamond
var star = '';
for (var i = 0; i < 9; i++) {
    if (i < 5) {
        for (var j = 4; j > i; j--) {
            star += ' ';
        }
        for (var k = 0; k <= i * 2; k++) {
            star += '*';
        }
        star += '\n';
    } else {
        for (var j = 4; j < i; j++) {
            star += ' ';
        }
        for (var k = 17; k > i * 2; k--) {
            star += '*';
        }
        star += '\n';
    }
}
console.log(star);