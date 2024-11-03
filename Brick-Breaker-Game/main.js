let canvas = document.getElementById('canvas')
let c = canvas.getContext('2d')

// var player
let x = canvas.width/2-45
let y = 350
let w =90
let h=10
let speedP = 10

//var ball
let ballX = 200
let ballY = 300
let ballW = 12
let ballH = 0
let speedX = 10
let speedY = 10

let win = document.getElementById('win')

//buat ngejalaninnya
setInterval(()=>{
    c.beginPath()
    c.clearRect(0,0,canvas.width,canvas.height)

    drawPlayer()
    if(ballX + ballW > x &&
        ballY +20 > y &&
        ballX < x + w
    ){
        speedY=-10
    }

    drawBall()
    ballX+=speedX
    ballY+=speedY
    if(ballX>= 385){
        speedX-=10
    } 
    if(ballY>=385){
        speedY-=10
    }
    if(ballX<= 10){
        speedX+=10
    }
    if(ballY<=10){
        speedY+=10
    }

    drawBlocks()
    drawBlocksSama()
    drawBlocks2()
    drawBlocks3()
    drawBlocks4()
    let visible = 0
    for(let i =0; i<blocks.length;i++){
        let blockX = blocks[i].x
        let blockY = blocks[i].y

        if(ballX + ballW > blockX &&
            ballY + ballH> blockY &&
            ballX < blockX + 50 &&
            ballY < blockY + 20 &&
            blocks[i].show == true
        ){
            blocks[i].show = false
            speedY = 10
        }
        if(blocks[i].show){
            visible++
        }
    }
    if(visible == 0){
       win.style.opacity = 1
       win.style.top = '-2.5rem'
        win.style.zIndex = 10
    }
    
},800/30)

document.addEventListener('keydown',(e)=>{
    if(e.key == 'd') x+= speedP
    if(x>=310) x=310
    if(x<=5) x=5
    if(e.key == 'a')
x-= speedP
})
//


//Buat Buat
function drawPlayer(){
    c.fillStyle ='black'
    c.fillRect(x,y,w,h)
    c.fill()
}

function drawBall(){
c.fillStyle='red'
c.arc(ballX,ballY,ballW,0,Math.PI*2,true)
c.fill()
}

function kotak(x,y){
    c.fillStyle='pink'
    c.fillRect(x,y,40,15)
}

//baris 1
function drawBlocks(){
    for(i=0;i<blocks.length;i++){
        if(blocks[i].show == true)
        kotak(blocks[i].x,blocks[i].y)
    }
}

function group(){
    let BlockW = 40
    let BlockH = 20
    let padding = 10
    let row = 2
    let column = 1

    for(i =0; i<row; i++){
        for(j=0;j<column;j++){
           let x1 = i *(BlockW + padding)
           let y1 = j*(BlockH +padding)

            blocks.push({
                x : x1 +90,
                y : y1 + 50,
                show : true
            })
        }
    }
}


//baris 1 samaa
function drawBlocksSama(){
    for(i=0;i<blocks.length;i++){
        if(blocks[i].show == true)
        kotak(blocks[i].x,blocks[i].y)
    }
}

function groupSama(){
    let BlockW = 40
    let BlockH = 20
    let padding = 10
    let row = 2
    let column = 1

    for(i =0; i<row; i++){
        for(j=0;j<column;j++){
           let x1 = i *(BlockW + padding)
           let y1 = j*(BlockH +padding)

            blocks.push({
                x : x1 +230,
                y : y1 + 50,
                show : true
            })
        }
    }
}


//baris 2 (inti)
function drawBlocks2(){
    for(i=0;i<blocks.length;i++){
        if(blocks[i].show == true)
        kotak(blocks[i].x,blocks[i].y)
    }
}

let blocks = []
function group2(){
    let BlockW = 40
    let BlockH = 20
    let padding = 10
    let row = 6
    let column = 4

    for(i =0; i<row; i++){
        for(j=0;j<column;j++){
           let x1 = i *(BlockW + padding)
           let y1 = j*(BlockH +padding)

            blocks.push({
                x : x1 +60,
                y : y1 + 80,
                show : true
            })
        }
    }
}


//baris 3
function drawBlocks3(){
    for(i=0;i<blocks.length;i++){
        if(blocks[i].show == true)
        kotak(blocks[i].x,blocks[i].y)
    }
}

function group3(){
    let BlockW = 40
    let BlockH = 20
    let padding = 10
    let row = 4
    let column = 1

    for(i =0; i<row; i++){
        for(j=0;j<column;j++){
           let x1 = i *(BlockW + padding)
           let y1 = j*(BlockH +padding)

            blocks.push({
                x : x1 +110,
                y : y1 + 200,
                show : true
            })
        }
    }
}


//baris 4
function drawBlocks4(){
    for(i=0;i<blocks.length;i++){
        if(blocks[i].show == true)
        kotak(blocks[i].x,blocks[i].y)
    }
}

function group4(){
    let BlockW = 40
    let BlockH = 20
    let padding = 10
    let row = 1
    let column = 1

    for(i =0; i<row; i++){
        for(j=0;j<column;j++){
           let x1 = i *(BlockW + padding)
           let y1 = j*(BlockH +padding)

            blocks.push({
                x : x1 +190,
                y : y1 + 230,
                show : true
            })
        }
    }
}

group()
groupSama()
group2()
group3()
group4()
//