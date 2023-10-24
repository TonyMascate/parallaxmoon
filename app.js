const moon = document.getElementById('moon')
const stars = document.getElementById('stars')
const front = document.getElementById('front')
const behind = document.getElementById('behind')
const text = document.getElementById('text')
const btn = document.getElementById('btn')

window.addEventListener('scroll', () => {
    let value = window.scrollY
    moon.style.top = value * 1.05 + 'px'
    stars.style.left = value * 0.25 + 'px'
    behind.style.top = value * 0.5 + 'px'
    front.style.top = value * 0 + 'px'
    text.style.marginRight = value * 4 + 'px'
    text.style.marginTop = value * 1.8 + 'px'
    btn.style.marginTop = value * 1.6 + 'px'
})