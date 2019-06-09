import anime from 'animejs'

const sarazanmai = anime.timeline({
    loop: true,
})

const start = () => {
    sarazanmai.play()
}
const stop = () => {
    sarazanmai.pause()
}
const restart = () => {
    sarazanmai.restart ()
}

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
    delay: (el, i, l) => {
        return i * 200
    },
    translateY: ['0px', '-190px', '-190px'],
    height: ['5px', '190px', '5px'],
    opacity: [1, 1, 0]
}, 2500)
sarazanmai.add({
    targets: '.child-rect-white',
    easing: 'easeOutCubic',
    duration: 500,
    delay: (el, i, l) => {
        return i * 200
    },
    rotate: ['45deg', '45deg'],
    scale: [1, 20],
    opacity: [0, 1],
}, 3000)
sarazanmai.add({
    targets: '.child-rect-dark',
    easing: 'easeOutCubic',
    duration: 1000,
    delay: (el, i, l) => {
        return i * 200
    },
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
sarazanmai.add({
    targets: '.child-rect-white',
    easing: 'linear',
    duration: 100,
    delay: (el, i, l) => {
        return i * 300
    },
    opacity: [1, 0],
})
sarazanmai.add({
    targets: '.rect-02',
    easing: 'linear',
    duration: 1000,
    delay: (el, i, l) => {
        return i * 100
    },
    opacity: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
})
sarazanmai.add({
    targets: '.rect-02',
    easing: 'linear',
    duration: 200,
    delay: (el, i, l) => {
        return i * 100
    },
    rotate: ['45deg', '45deg'],
    scale: [1, 0.2],
    opacity: [1, 0],
})
sarazanmai.add({
    targets: '.rect',
    easing: 'easeOutCubic',
    duration: 800,
    opacity: [0.2, 0],
}, 6200)
sarazanmai.add({
    targets: '.child-rect-dark',
    easing: 'linear',
    duration: 1,
    opacity: 0,
})
sarazanmai.add({
    targets: '.rect-02-line',
    easing: 'linear',
    duration: 1200,
    width: ['1px', '600px', '1px'],
    translateX: ['0', '-600px', '-600px'],
    opacity: [1, 1, 0],
}, 6200)
sarazanmai.add({
    targets: '.rect-lines',
    easing: 'linear',
    duration: 1200,
    width: ['1px', '600px', '1px'],
    translateX: ['0', '-600px', '-600px'],
    opacity: [1, 1, 0],
}, 6500)





/*
|--------------------------------------------------------------------------
|  export
|--------------------------------------------------------------------------
*/

export {
    start,
    stop,
    restart
}