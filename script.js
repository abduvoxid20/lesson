const palette = ['#31c0fb', '#ffa019', '#aae200', '#ff197a']
const colors = document.querySelectorAll('.color')
const right = document.querySelector('.right')
for (let i = 0; i < colors.length; i++) {
    colors[i].style.background = palette[i]
    
    colors[i].addEventListener('click', function() {
        right.style.background = palette[i]
    })
}

const button = document.querySelector('.button')
const box = document.querySelector('.box')

button.addEventListener('click', function() {
    box.style.display = 'none'
})