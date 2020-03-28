function carregar() {

    var msg = document.querySelector('div#msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    //var hora = 22

    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos!`

    if (hora >= 0 && hora < 12) {
        
        img.src = 'img/manha.jpg'
        document.body.style.background = '#fe8301'
        
    } else if (hora >= 12 && hora < 18) {
        
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#fcce6e'

    } else {
        
        img.src = 'img/noite.jpg'
        document.body.style.background = '#192a33'

    }
}