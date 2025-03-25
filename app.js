const board = document.querySelector('#board')
const colors =['#51e2f5', '#9df9ef','#edf756','#ffa8B6']
const SQUARES_NUMBER = 1073

for (let i = 0; i<SQUARES_NUMBER;i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover',()=>{
        setColor(square)
    })
    square.addEventListener('mouseleave',()=>{
        removeColor(square)
    })
    board.append(square)
}
function setColor(el){
    const color = getRandomColor()
    el.style.backgroundColor = color
    el.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}
function removeColor(el){
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = `0 0 #000`
}
function getRandomColor() {
    const index=Math.floor(Math.random()*colors.length)
    return colors[index]
}