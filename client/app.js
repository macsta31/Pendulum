pauseButton = document.getElementById('pauseButton')
startButton = document.getElementById('startButton')
loadButton = document.getElementById('loadButton')
resetButton = document.getElementById('resetButton')
info = document.getElementById('info')
infoText = document.getElementById('text_info')

startButton.addEventListener('click', startAnimate)

resetButton.addEventListener('click', () => {
    pause()
    document.getElementById('sub').click()
    document.getElementById('sub1').click()
    document.getElementById('sub2').click()
    document.getElementById('sub3').click()
    document.getElementById('sub4').click()

    loadButton.click()

})

loadButton.addEventListener('click', load)

info.addEventListener('mouseover', () => {
    infoText.style.display = 'block'
})

info.addEventListener('mouseout', () => {
    infoText.style.display = 'none'
})

var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
let data, data1, data2, data3, data4


// Method to load pendulums onto canvas
/* Calls get method on all the ports and draws the data onto HTML canvas element */
async function load(e){
    e.preventDefault()

    startButton.disabled = false


    const response = await fetch('http://localhost:5001')
    data = await response.json()

    const response1 = await fetch('http://localhost:5002')
    data1 = await response1.json()

    const response2 = await fetch('http://localhost:5003')
    data2 = await response2.json()

    const response3 = await fetch('http://localhost:5004')
    data3 = await response3.json()

    const response4 = await fetch('http://localhost:5005')
    data4 = await response4.json()


    let x = data.x
    let y = data.y
    let initAng = data.ang
    let len = data.len
    const startPos = data.startPos
    const ballRad = data.weight

    let x1 = data1.x
    let y1 = data1.y
    let initAng1 = data1.ang
    let len1 = data1.len
    const startPos1 = data1.startPos
    const ballRad1 = data1.weight

    let x2 = data2.x
    let y2 = data2.y
    let initAng2 = data2.ang
    let len2 = data2.len
    const startPos2 = data2.startPos
    const ballRad2 = data2.weight

    let x3 = data3.x
    let y3 = data3.y
    let initAng3 = data3.ang
    let len3 = data3.len
    const startPos3 = data3.startPos
    const ballRad3 = data3.weight

    let x4 = data4.x
    let y4 = data4.y
    let initAng4 = data4.ang
    let len4 = data4.len
    const startPos4 = data4.startPos
    const ballRad4 = data4.weight

    ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath();
        ctx.moveTo(startPos, 0)
        ctx.lineTo(x+startPos, y)
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x+startPos, y, ballRad, 0, 2*Math.PI)
        ctx.closePath();
        ctx.fillStyle = 'green'
        ctx.fill()
        ctx.stroke()

        // ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath();
        ctx.moveTo(startPos1, 0)
        ctx.lineTo(x1+startPos1, y1)
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x1+startPos1, y1, ballRad1, 0, 2*Math.PI)
        ctx.closePath();
        ctx.fillStyle = 'red'
        ctx.fill()
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(startPos2, 0)
        ctx.lineTo(x2+startPos2, y2)
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x2+startPos2, y2, ballRad2, 0, 2*Math.PI)
        ctx.closePath();
        ctx.fillStyle = 'blue'
        ctx.fill()
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(startPos3, 0)
        ctx.lineTo(x3+startPos3, y3)
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x3+startPos3, y3, ballRad3, 0, 2*Math.PI)
        ctx.closePath();
        ctx.fillStyle = 'purple'
        ctx.fill()
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(startPos4, 0)
        ctx.lineTo(x4+startPos4, y4)
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x4+startPos4, y4, ballRad4, 0, 2*Math.PI)
        ctx.closePath();
        ctx.fillStyle = 'turquoise'
        ctx.fill()
        ctx.stroke()
}

ports = [5001, 5002, 5003, 5004, 5005]


// Method to start animation
/*Calls start route on all ports which begins the animation loop in the backend */
async function startAnimate(e){
    e.preventDefault()
    pauseButton.disabled = false
    resetButton.disabled = true
    startButton.disabled = true
    fetch(`http://localhost:5001/start`, {
        method: 'POST'
    })
    fetch(`http://localhost:5002/start`, {
        method: 'POST'
    })

    fetch(`http://localhost:5003/start`, {
        method: 'POST'
    })
    fetch(`http://localhost:5004/start`, {
        method: 'POST'
    })
    fetch(`http://localhost:5005/start`, {
        method: 'POST'
    })


    const response = await fetch('http://localhost:5001')
    data = await response.json()

    const response1 = await fetch('http://localhost:5002')
    data1 = await response1.json()

    const response2 = await fetch('http://localhost:5003')
    data2 = await response2.json()

    const response3 = await fetch('http://localhost:5004')
    data3 = await response3.json()

    const response4 = await fetch('http://localhost:5005')
    data4 = await response4.json()

    let x = data.x
    let y = data.y
    let initAng = data.ang
    let len = data.len
    const startPos = data.startPos
    const ballRad = data.weight

    let x1 = data1.x
    let y1 = data1.y
    let initAng1 = data1.ang
    let len1 = data1.len
    const startPos1 = data1.startPos
    const ballRad1 = data1.weight

    let x2 = data2.x
    let y2 = data2.y
    let initAng2 = data2.ang
    let len2 = data2.len
    const startPos2 = data2.startPos
    const ballRad2 = data2.weight

    let x3 = data3.x
    let y3 = data3.y
    let initAng3 = data3.ang
    let len3 = data3.len
    const startPos3 = data3.startPos
    const ballRad3 = data3.weight

    let x4 = data4.x
    let y4 = data4.y
    let initAng4 = data4.ang
    let len4 = data4.len
    const startPos4 = data4.startPos
    const ballRad4 = data4.weight

    let t = performance.now()



    

    

    async function gameLoop(fps){

        update();
        draw();
        setTimeout(() => {
            animationId = window.requestAnimationFrame(gameLoop)
        }, 1000/fps)
        
        
    }

    async function update(){

        const response = await fetch('http://localhost:5001')
        data = await response.json()

        const response1 = await fetch('http://localhost:5002')
        data1 = await response1.json()

        const response2 = await fetch('http://localhost:5003')
        data2 = await response2.json()

        const response3 = await fetch('http://localhost:5004')
        data3 = await response3.json()

        const response4 = await fetch('http://localhost:5005')
        data4 = await response4.json()


        ang = data.ang
        x = len * Math.sin(ang);
        y = len * Math.cos(ang);

        ang1 = data1.ang
        x1 = len1 * Math.sin(ang1);
        y1 = len1 * Math.cos(ang1);

        ang2 = data2.ang
        x2 = len2 * Math.sin(ang2);
        y2 = len2 * Math.cos(ang2);

        ang3 = data3.ang
        x3 = len3 * Math.sin(ang3);
        y3 = len3 * Math.cos(ang3);

        ang4 = data4.ang
        x4 = len4 * Math.sin(ang4);
        y4 = len4 * Math.cos(ang4);

        

    }

    function draw(){    



        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath();
        ctx.moveTo(startPos, 0)
        ctx.lineTo(x+startPos, y)
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x+startPos, y, ballRad, 0, 2*Math.PI)
        ctx.closePath();
        ctx.fillStyle = 'green'
        ctx.fill()
        ctx.stroke()

        // ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath();
        ctx.moveTo(startPos1, 0)
        ctx.lineTo(x1+startPos1, y1)
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x1+startPos1, y1, ballRad1, 0, 2*Math.PI)
        ctx.closePath();
        ctx.fillStyle = 'red'
        ctx.fill()
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(startPos2, 0)
        ctx.lineTo(x2+startPos2, y2)
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x2+startPos2, y2, ballRad2, 0, 2*Math.PI)
        ctx.closePath();
        ctx.fillStyle = 'blue'
        ctx.fill()
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(startPos3, 0)
        ctx.lineTo(x3+startPos3, y3)
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x3+startPos3, y3, ballRad3, 0, 2*Math.PI)
        ctx.closePath();
        ctx.fillStyle = 'purple'
        ctx.fill()
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(startPos4, 0)
        ctx.lineTo(x4+startPos4, y4)
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(x4+startPos4, y4, ballRad4, 0, 2*Math.PI)
        ctx.closePath();
        ctx.fillStyle = 'turquoise'
        ctx.fill()
        ctx.stroke()

    }

    gameLoop(30);
}

function pause(){
    pauseButton.disabled = true;
    resetButton.disabled = false;
    startButton.disabled = false;
    ports.forEach(async (port) => {
        await fetch(`http://localhost:${port}/stop`, {
            method: 'POST'
        })
    })
    
    window.cancelAnimationFrame(animationId)
}

submit = document.getElementById('sub')
submit1 = document.getElementById('sub1')
submit2 = document.getElementById('sub2')
submit3 = document.getElementById('sub3')
submit4 = document.getElementById('sub4')

submit.addEventListener('click', handleSubmit)
submit1.addEventListener('click', handleSubmit)
submit2.addEventListener('click', handleSubmit)
submit3.addEventListener('click', handleSubmit)
submit4.addEventListener('click', handleSubmit)

async function handleSubmit(e){
    e.preventDefault();

    

    const form = e.path[1]
    let ang = +form[0].value*(Math.PI/180)
    let len = +form[1].value
    let weight = +form[2].value
    let startPos = +form[3].value
    if(!ang || !len || !weight || !startPos){
        let alertmsg = ""
        if(!ang){
            alertmsg = alertmsg+"angle, "
            form[0].style.border = "1px solid red"

        }
        if(!len){
            alertmsg = alertmsg+"length, "
            form[1].style.border = "1px solid red"

        }
        if(!weight){
            alertmsg = alertmsg+"weight, "
            form[2].style.border = "1px solid red"

        }
        if(!startPos){
            alertmsg = alertmsg+"start position"
            form[3].style.border = "1px solid red"

        }
        window.alert(`Missing inputs: [${alertmsg}]`)
        return
    }
    else{
        form[0].style.border = "1px solid black"
        form[1].style.border = "1px solid black"
        form[2].style.border = "1px solid black"
        form[3].style.border = "1px solid black"
    }

    json = {
        "ang": ang,
        "len": len,
        "weight": weight,
        "x": (len) * Math.sin(ang),
        "y": (len) * Math.cos(ang),
        "startPos": startPos
    }
    const port = e.path[1].classList[0] 


    const response  = await fetch(`http://localhost:${port}`, {
        method: 'POST',
        body: JSON.stringify(json)
    })

}


