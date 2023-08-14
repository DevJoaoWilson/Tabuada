function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('tab')
    if(num.value.length == 0){
        alert ('Campo inválido, Preencha o campo corretamente!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value= `tab${c}`
            tab.appendChild(item)
        }
    }
    
}