const btn = document.getElementById('ok')


btn.addEventListener('click', () => {

    const num = document.getElementById('num').value
    const a = document.getElementById('multable')

    let s = '<ul>'

    if (num) {

        for (let i = 1; i < 11; i++) {
            s += '<li><pre>' + num + '  ' + 'X' + '  ' + i + '  =  ' + num * i + '</pre></li>'
        }

        s += '</ul>'
        a.innerHTML = s
    }
    else{
        a.innerHTML = ''
    }

});