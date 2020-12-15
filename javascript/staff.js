let space = document.querySelector('.space')
const fixed_btns = document.querySelector('#up_buttons')
const spaceRemake = function () {
    let head = document.querySelector('header')
    space.style.height = getComputedStyle(head).height
}

window.addEventListener('scroll', function () {
    if (pageYOffset+200 < document.documentElement.clientHeight)
        fixed_btns.classList.add('hidden')
    else
        fixed_btns.classList.remove('hidden')
})

document.addEventListener('onended', function () {
    spaceRemake()
})
spaceRemake()