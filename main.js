let video = document.getElementById("video")

let btn = document.getElementById("btn-play-pause")
let plus5 = document.getElementById("plus5")
let moins5 = document.getElementById("moins5")

let progresse = document.getElementById("progresse")

let reset = document.getElementById("reset")

let slow = document.getElementById("slow")
let quick = document.getElementById("quick")

let isPlaying = true;
let isSpeed = true;

video.addEventListener('click', () => {
    if (isPlaying) {
        video.pause()
        isPlaying = false
        btn.textContent = '▶'
    }
    else {
        video.play()
        isPlaying = true
        btn.textContent = '||'
    }
})

btn.addEventListener('click', () => {
    if (isPlaying) {
        video.pause()
        isPlaying = false
        btn.textContent = '▶'
    } else {
        video.play()
        isPlaying = true
        btn.textContent = '||'
    }
})

video.addEventListener("timeupdate", () => {
    progresse.max = video.duration;
    progresse.value = video.currentTime;
})

plus5.addEventListener('click', () => {
    video.currentTime += 5
})

moins5.addEventListener('click', () => {
    video.currentTime -= 5
})

quick.addEventListener("click", () => {
    if (isSpeed) {
        document.querySelector('video').playbackRate = 3.0;
        isSpeed = false
    } else {
        document.querySelector('video').playbackRate = 1.0;
        isSpeed = true
    }
})

slow.addEventListener("click", () => {
    if (isSpeed) {
        document.querySelector('video').playbackRate = 0.4, 0;
        isSpeed = false
    } else {
        document.querySelector('video').playbackRate = 1.0;
        isSpeed = true
    }
})

reset.addEventListener('click', () => {
    video.currentTime = 0
    document.querySelector('video').playbackRate = 1.0;
})
    
document.addEventListener('keydown', (ev) => {
    switch (ev.code) {
        case 'Space':
            if (isPlaying) {
                video.pause()
                btn.textContent = '▶'
                isPlaying = false
            } else {
                video.play()
                btn.textContent = '||'
                isPlaying = true
            }
            break;
        case 'ArrowRight':
            video.currentTime += 5;
            break;
        case 'ArrowLeft':
            video.currentTime -= 5;
            break;
    }
})