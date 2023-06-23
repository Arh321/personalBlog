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





let i = 1;
document.getElementById('open')
.addEventListener('click',() => {
    const content = document.getElementById('menu')
        content.style.display = 'flex'
        content.style.width = '200px'
        content.style.animationName = 'chang'
        content.style.right = '0'
})

document.getElementById('close')
.addEventListener('click',() => {
    const content = document.getElementById('menu')
        content.style.width = '0'
        content.style.animationName = 'chang2'
        content.style.right = '-40px'
})

const item = document.querySelectorAll('#menu span')
item.forEach((each,index) => {
    const y = each.innerHTML
    each.addEventListener('click' , () => {
        const y = each.innerHTML
        const element = document.getElementById(y)
        window.scrollTo(0,element.offsetTop - 60)
    })
})

const section = document.querySelectorAll('#header-menu span')
section.forEach((each,index) => {
    const y = each.innerHTML
    each.addEventListener('click' , () => {
        const y = each.innerHTML
        const element = document.getElementById(y)
        window.scrollTo(0,element.offsetTop - 60)
    })
})


