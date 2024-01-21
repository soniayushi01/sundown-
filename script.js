var elem1 = document.querySelector('#elem1 img')
var box = document.querySelector('#elem1')

box.addEventListener('mouseenter', function () {
   elem1.style.display = 'initial'
})
box.addEventListener('mouseleave', function () {
   elem1.style.display = 'none'
})
var elem2 = document.querySelector('#elem2 img')
var box = document.querySelector('#elem2')

box.addEventListener('mouseenter', function () {
   elem2.style.display = 'initial'
})
box.addEventListener('mouseleave', function () {
   elem2.style.display = 'none'
})
var elem3 = document.querySelector('#elem3 img')
var box = document.querySelector('#elem3')

box.addEventListener('mouseenter', function () {
   elem3.style.display = 'initial'
})
box.addEventListener('mouseleave', function () {
   elem3.style.display = 'none'
})
var elem4 = document.querySelector('#elem4 img')
var box = document.querySelector('#elem4')

box.addEventListener('mouseenter', function () {
   elem4.style.display = 'initial'
})
box.addEventListener('mouseleave', function () {
   elem4.style.display = 'none'
})
var elem5 = document.querySelector('#elem5 img')
var box = document.querySelector('#elem5')

box.addEventListener('mouseenter', function () {
   elem5.style.display = 'initial'
})
box.addEventListener('mouseleave', function () {
   elem5.style.display = 'none'
})
var elem6 = document.querySelector('#elem6 img')
var box = document.querySelector('#elem6')

box.addEventListener('mouseenter', function () {
   elem6.style.display = 'initial'
})
box.addEventListener('mouseleave', function () {
   elem6.style.display = 'none'
})
var elem7 = document.querySelector('#elem7 img')
var box = document.querySelector('#elem7')

box.addEventListener('mouseenter', function () {
   elem7.style.display = 'initial'
})
box.addEventListener('mouseleave', function () {
   elem7.style.display = 'none'
})

var cursor = document.querySelector('.cursor')
var page1 = document.querySelector('.page1')

document.addEventListener('mousemove', function (dets) {
   cursor.style.top = dets.y + 'px'
   cursor.style.left = dets.x + 'px'
})


