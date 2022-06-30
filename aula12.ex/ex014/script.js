function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 14
    var min = data.getMinutes()
    
    
    msg.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 0 && hora < 12)  {
        // BOM DIA!!
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#e7cd9f'
    } else if ( hora < 18) {
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else {
       // BOA NOITE  
       img.src = 'fotonoite.png'
       document.body.style.backgroundColor = '#515154'
    }
}

