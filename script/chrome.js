let urlEl = document.querySelectorAll('.url')
for(i=0;i<urlEl.length;i++){
    urlEl[i].style.width=`${urlEl[i].parentElement.offsetWidth-200}px`
}

let windowEl = document.querySelectorAll('.windowpage')
for(v=0;v<windowEl.length;v++){
    windowEl[v].style.height=`${windowEl[v].parentElement.offsetHeight-75}px`
}
let over01 = document.getElementById('over1')
console.log(over01.offsetWidth)
window.addEventListener('resize',function(){
    if(over01.offsetWidth<=470){
        over01.style.opacity='0'
    }else{
        over01.style.opacity='1'
    }

    for(i=0;i<urlEl.length;i++){
        urlEl[i].style.width=`${urlEl[i].parentElement.offsetWidth-200}px`
    }

})