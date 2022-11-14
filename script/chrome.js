
// 크롬창의 url바 크기 조정
let urlEl = document.querySelectorAll('.url')
for(i=0;i<urlEl.length;i++){
    urlEl[i].style.width=`${urlEl[i].parentElement.offsetWidth-200}px`
}

// 크롬창 내부 컨텐츠의 크기 자동조정
let windowEl = document.querySelectorAll('.windowpage')
for(v=0;v<windowEl.length;v++){
    windowEl[v].style.height=`${windowEl[v].parentElement.offsetHeight-75}px`
}

// 크롬창 객체 불러오기
let over01 = document.getElementById('over1')
let over02 = document.getElementById('over2')
let over03 = document.getElementById('over3')

// 대체 객체
let extext = document.getElementById('extext')
let introex = document.getElementById('intro_ex')

// 크롬창의 사이즈가 일정 사이즈(470px) 이상 작아지면 사라지게 하는 스크립트
winCheck()
function winCheck() {
    if(window.innerWidth<=650){
        introex.style.opacity='1'
    }else{
        introex.style.opacity='0'
    }

    if(over01.offsetWidth<=470){
        over01.style.opacity='0'
    }else{
        over01.style.opacity='1'
    }

    if(over02.offsetWidth<=470){
        over02.style.opacity='0'
        extext.style.transform=`translate(-40px, -250px)`
    }else{
        over02.style.opacity='1'
        extext.style.transform=`translate(0px, 0px)`
    }

    if(over03.offsetWidth<=470){
        over02.style.zIndex='10'
        over03.style.zIndex='1'
        over03.style.opacity='0'
        extext.style.opacity='1'
    }else{
        over03.style.zIndex='10'
        over02.style.zIndex='1'
        over03.style.opacity='1'
        extext.style.opacity='0'
    }

    for(i=0;i<urlEl.length;i++){
        urlEl[i].style.width=`${urlEl[i].parentElement.offsetWidth-200}px`
    }
}

// 리사이즈 이벤트감지후 사이즈 조정
window.addEventListener('resize',function(){
    winCheck()
})

// 크롬창 클릭하면 그 창을 위로 보내는 스크립트
over02.addEventListener('click',function(){
    over02.style.zIndex='10'
    over03.style.zIndex='1'
})
over03.addEventListener('click',function(){
    over03.style.zIndex='10'
    over02.style.zIndex='1'
})