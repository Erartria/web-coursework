const mockMessage = function() {
    window.alert('Your message has been sent')
}

const descs = document.querySelectorAll(".item-description")
console.log(descs)

const header = document.querySelector('header')
const banner_btn = document.querySelector('#banner_btn')
let space = document.querySelector('.space')
let banner = document.querySelector('#banner')
const spaceRemake = function () {
    space.style.height = getComputedStyle(header).height
}
document.addEventListener('onended', function () {
    spaceRemake()
})
spaceRemake()