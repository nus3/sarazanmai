import anime from 'animejs'

const sarazanmai = anime.timeline({
    loop: false,
})

/*
|--------------------------------------------------------------------------
|  scene1
|--------------------------------------------------------------------------
*/

sarazanmai.add({
    targets: '.rect1',
    easing: 'easeInSine',
    duration: 3000,
    translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
    rotate: ['45deg', '45deg'],
    scale: [3, 3.5],
})
sarazanmai.add({
    targets: '.rect2',
    easing: 'easeOutQuad',
    duration: 2000,
    translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
    rotate: ['45deg', '45deg'],
    scale: [3, 1.8],
}, 1000)

sarazanmai.add({
    targets: '.line',
    easing: 'easeOutCubic',
    duration: 500,
    translateY: ['0px', '-190px', '-190px'],
    height: ['5px', '190px', '5px'],
    opacity: [1, 1, 0]
}, 2500)
sarazanmai.add({
    targets: '.child-rect-white',
    easing: 'easeOutCubic',
    duration: 500,
    rotate: ['45deg', '45deg'],
    scale: [1, 20],
    opacity: [0, 1],
}, 3000)
sarazanmai.add({
    targets: '.child-rect-dark',
    easing: 'easeOutCubic',
    duration: 1000,
    rotate: ['45deg', '45deg'],
    scale: [1, 17],
    opacity: {
        value: [0, 1],
        duration: 0,
    }
}, 3000)
sarazanmai.add({
    targets: '.rect',
    easing: 'easeOutCubic',
    duration: 800,
    opacity: [1, 0.2],
}, 2700)