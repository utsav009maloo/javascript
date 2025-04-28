// alert('ok')
const button = document.getElementById('stop-btn')
const button1 = document.getElementById('start-btn')
function showtime(){
    const currentTime = new Date()
    // console.log(currentTime)
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    // console.log(time)
    document.getElementById('Time').innerText = time
}

let interval = setInterval(showtime,1000)
button.addEventListener('click' , () => {
    clearInterval(interval)
})

button1.addEventListener('click' , () => {
    showtime = setInterval(showtime,1000)
})