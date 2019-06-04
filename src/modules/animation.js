import anime from 'animejs'

const sarazanmai = anime.timeline({
    loop: true,
})

/*
|--------------------------------------------------------------------------
|  scene1
|--------------------------------------------------------------------------
*/

sarazanmai.add({
    targets: '.rect1',
    easing: 'easeInSine',
    duration: 2000,
    translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
    rotate: ['45deg', '45deg'],
    scale: [1, 1.3],
})
sarazanmai.add({
    targets: '.rect2',
    easing: 'easeInSine',
    duration: 2000,
    translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
    rotate: ['45deg', '45deg'],
    scale: [1, 0.8],
}, 0)