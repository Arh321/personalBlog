document.getElementById('next1')
.addEventListener('click',() => {
    document.getElementById('home1').style.display = 'flex'
    document.getElementById('home1').style.animation = 'move'
    document.getElementById('home1').style.animationDuration = '1.3s'
    document.getElementById('home2').style.display = 'none'
    document.getElementById('next1').style.color = 'white'
    document.getElementById('next2').style.color = 'var(--header-meno)'
})
document.getElementById('next2')
.addEventListener('click',() => {
    document.getElementById('home2').style.display = 'flex'
    document.getElementById('home2').style.animationDuration = '1.3s'
    document.getElementById('home1').style.display = 'none'
    document.getElementById('next2').style.color = 'white'
    document.getElementById('next1').style.color = 'var(--header-meno)'
})
let change = -1;
setInterval(() => {
    if(change > 0){
        document.getElementById('home1').style.display = 'flex'
        document.getElementById('home1').style.animation = 'move'
        document.getElementById('home1').style.animationDuration = '1.3s'
        document.getElementById('home2').style.display = 'none'
        document.getElementById('next1').style.color = 'white'
        document.getElementById('next2').style.color = 'var(--header-meno)'
    }
    if(change < 0){
        document.getElementById('home2').style.display = 'flex'
        document.getElementById('home2').style.animation = 'move'
        document.getElementById('home2').style.animationDuration = '1.3s'
        document.getElementById('home1').style.display = 'none'
        document.getElementById('next2').style.color = 'white'
        document.getElementById('next1').style.color = 'var(--header-meno)'
    }
    change = change * -1
},9000)