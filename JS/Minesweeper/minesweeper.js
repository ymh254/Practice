var tbody = document.querySelector('#table tbody')
var dataset = [];
document.querySelector('#exec').addEventListener('click', function () {
    tbody.innerHTML = ''
    dataset = []
    var hor = parseInt(document.querySelector('#hor').value);
    var ver = parseInt(document.querySelector('#ver').value);
    var mine = parseInt(document.querySelector('#mine').value);

    //지뢰찾기 테이블 만들기
    for (var i = 0; i < ver; i += 1) {
        var arr = [];
        var tr = document.createElement('tr');
        dataset.push(arr);
        for (var j = 0; j < hor; j += 1) {
            arr.push(1)
            var td = document.createElement('td');
            td.addEventListener('contextmenu', function (e) {
                e.preventDefault()
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                if (e.currentTarget.textContent === '' || e.currentTarget.textContent === 'x') {
                    e.currentTarget.textContent = '!'
                } else if (e.currentTarget.textContent === '!') {
                    e.currentTarget.textContent = '?'
                } else if (e.currentTarget.textContent === '?') {
                    if (dataset[줄][칸] === 1) {
                        e.currentTarget.textContent = ''
                    } else if (dataset[줄][칸] === "x") {
                        e.currentTarget.textContent = 'x'
                    }
                }
                console.log(부모tr, 부모tbody, e.target, 칸, 줄)
            })
            td.addEventListener('click', function (e) {
                e.preventDefault()
                var 부모tr = e.currentTarget.parentNode;
                var 부모tbody = e.currentTarget.parentNode.parentNode;
                var 칸 = Array.prototype.indexOf.call(부모tr.children, e.currentTarget);
                var 줄 = Array.prototype.indexOf.call(부모tbody.children, 부모tr);
                e.currentTarget.classList.add('opened')
                if (dataset[줄][칸] === "x") {
                    e.currentTarget.textContent = '펑';
                } else {
                    var 주변 = [
                        dataset[줄][칸 - 1], dataset[줄][칸 + 1],
                    ]
                    if (dataset[줄 - 1]) {
                        주변.push(dataset[줄 - 1][칸 - 1], dataset[줄 - 1][칸], dataset[줄 - 1][칸 + 1])
                        // 주변.push(dataset[줄 - 1][칸])
                        // 주변.push(dataset[줄 - 1][칸 + 1])
                        // 주변 = 주변.concat(dataset[줄 - 1][칸 - 1], dataset[줄 - 1][칸], dataset[줄 - 1][칸 + 1])
                    }
                    if (dataset[줄 + 1]) {
                        주변.push(dataset[줄 + 1][칸 - 1], dataset[줄 + 1][칸], dataset[줄 + 1][칸 + 1])
                        // 주변.push(dataset[줄 + 1][칸])
                        // 주변.push(dataset[줄 + 1][칸 + 1])
                        // 주변 = 주변.concat(dataset[줄 + 1][칸 - 1], dataset[줄 + 1][칸], dataset[줄 + 1][칸 + 1])
                    }
                    var 지뢰갯수 = 주변.filter(function (v) {
                        return v === 'x';
                    }).length;
                    e.currentTarget.textContent = 지뢰갯수;
                    if (지뢰갯수 === 0) {
                        var 주변칸 = [];
                        if (tbody.children[줄 - 1]) {
                            주변칸 = 주변칸.concat([
                                tbody.children[줄 - 1].children[칸 - 1],
                                tbody.children[줄 - 1].children[칸],
                                tbody.children[줄 - 1].children[칸 + 1],
                            ])
                        }
                        주변칸 = 주변칸.concat([
                            tbody.children[줄].children[칸 - 1],
                            tbody.children[줄].children[칸 + 1],
                        ])
                        if (tbody.children[줄 + 1]) {
                            주변칸 = 주변칸.concat([
                                tbody.children[줄 + 1].children[칸 - 1],
                                tbody.children[줄 + 1].children[칸],
                                tbody.children[줄 + 1].children[칸 + 1],
                            ])
                        }
                        // 주변칸.filter(function (v) {
                        //     return !!v;
                        // }).forEach(function (옆칸) {
                        //     옆칸.click();
                        // });
                    }
                }
            })
            tr.appendChild(td);
        }
        tbody.appendChild(tr)
    }
    //지뢰 위치 뽑기
    var 후보군 = Array(hor * ver)
        .fill()
        .map(function (요소, 인덱스) {
            return 인덱스
        });
    var 셔플 = [];
    while (후보군.length > hor * ver - mine) {
        var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
        셔플.push(이동값)
    }

    //뽑은 위치에 지뢰 심기
    for (var k = 0; k < 셔플.length; k++) {
        var 세로 = Math.floor(셔플[k] / 10);
        var 가로 = 셔플[k] % 10;
        tbody.children[세로].children[가로].textContent = 'x';
        dataset[세로][가로] = 'x';
        // tbody.children[Math.floor(셔플[k] / 10 + 1)].children[셔플[k] % 10].textContent = 'x';
        // dataset[Math.floor(셔플[k] / 10 + 1)][셔플[k] % 10] = 'x';
    }
    tbody.querySelectorAll('td').forEach(function (td) {
        td.addEventListener('contextmenu', function () {
            console.log(dataset)

        })
    })
})