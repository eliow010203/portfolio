// 기본 객체 설정

const canvas = document.getElementById("canvas");
canvas.width= window.innerWidth
canvas.height= window.innerHeight
const ctx = canvas.getContext("2d");

const canvas2 = document.getElementById("canvas2");
canvas2.width= window.innerWidth
canvas2.height= window.innerHeight
const ctx2 = canvas2.getContext("2d");

// 색상설정
const linecolor01 = '#6EFFE5'
const lightcolor01 = '#ffffff'

// 선 굵기
let linesize = 12

// 전역변수 설정
let mx
let my


// 어래이 생성
let mhx = new Array(1)
let mhy = new Array(1)

// 어래이 기본값을 0으로 설정
mhx.fill(0)
mhy.fill(0)

// 화면크기 조정하면 캔버스사이즈도 조정
window.addEventListener('resize',function(){
    canvas.width= window.innerWidth
    canvas.height= window.innerHeight
    canvas2.width= window.innerWidth
    canvas2.height= window.innerHeight
})

// 마우스 이동감지해서 좌표를 변수로 저장
window.addEventListener('mousemove',function(e){
    mx = e.clientX
    my = e.clientY
})



// mousepos함수를 항상 사용
window.addEventListener('onload',function(){
    animate=requestAnimationFrame(mousePos)
})


let animate
mousePos()
function mousePos() {

    // 이벤트에서 생성한 변수를 어레이에 추가
    mhx.push(mx)
    mhy.push(my)


    // 어레이 값을 읽어서 캔버스에 그리기
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    ctx.beginPath();
    ctx.moveTo(mhx.at(-1), mhy.at(-1))
    ctx.lineTo(mhx.at(-2), mhy.at(-2))
    ctx.lineTo(mhx.at(-3), mhy.at(-3))
    ctx.lineTo(mhx.at(-4), mhy.at(-4))
    ctx.lineTo(mhx.at(-5), mhy.at(-5))
    ctx.lineTo(mhx.at(-6), mhy.at(-6))
    ctx.lineTo(mhx.at(-7), mhy.at(-7))
    ctx.lineTo(mhx.at(-8), mhy.at(-8))
    ctx.lineWidth = linesize;
    ctx.strokeStyle = linecolor01;
    ctx.stroke();

    ctx2.clearRect(0, 0, window.innerWidth, window.innerHeight)
    ctx2.beginPath();
    ctx2.moveTo(mhx.at(-1), mhy.at(-1))
    ctx2.lineTo(mhx.at(-2), mhy.at(-2))
    ctx2.lineTo(mhx.at(-3), mhy.at(-3))
    ctx2.lineTo(mhx.at(-4), mhy.at(-4))
    ctx2.lineTo(mhx.at(-5), mhy.at(-5))
    ctx2.lineTo(mhx.at(-6), mhy.at(-6))
    ctx2.lineTo(mhx.at(-7), mhy.at(-7))
    ctx2.lineTo(mhx.at(-8), mhy.at(-8))
    ctx2.lineWidth = (linesize/2);
    ctx2.strokeStyle = lightcolor01;
    ctx2.stroke();

    animate=requestAnimationFrame(mousePos)
    
}