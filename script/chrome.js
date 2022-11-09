let urlEl = document.querySelectorAll('.url')
for(i=0;i<urlEl.length;i++){
    urlEl[i].style.width=`${urlEl[i].parentElement.offsetWidth-200}px`
}

let windowEl = document.querySelectorAll('.windowpage')
for(v=0;v<windowEl.length;v++){
    windowEl[v].style.height=`${windowEl[v].parentElement.offsetHeight-75}px`
}
let over01 = document.getElementById('over1')
let over02 = document.getElementById('over2')
let over03 = document.getElementById('over3')
console.log(over01.offsetWidth)
winCheck()
function winCheck() {
    if(over01.offsetWidth<=470){
        over01.style.opacity='0'
    }else{
        over01.style.opacity='1'
    }

    if(over02.offsetWidth<=470){
        over02.style.opacity='0'
    }else{
        over02.style.opacity='1'
    }

    if(over03.offsetWidth<=470){
        over03.style.opacity='0'
    }else{
        over03.style.opacity='1'
    }

    for(i=0;i<urlEl.length;i++){
        urlEl[i].style.width=`${urlEl[i].parentElement.offsetWidth-200}px`
    }
}
window.addEventListener('resize',function(){
    winCheck()
})
over02.addEventListener('click',function(){
    over02.style.zIndex='10'
    over03.style.zIndex='1'
})
over03.addEventListener('click',function(){
    over03.style.zIndex='10'
    over02.style.zIndex='1'
})