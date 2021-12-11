const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

canvas.height = innerHeight
canvas.width = innerWidth

const scoreId=document.getElementById("score")
const start_game_btn=document.getElementById("startGameBtn")
const box=document.getElementById("container")
const final_score=document.getElementById("final_score")
//creating a player class which helps to create an instance of player which interacts 
class Player{
    constructor(radius,x,y,color){
        this.radius=radius
        this.x=x
        this.y=y
        this.color=color
    }
    //function to put it on the canvas
    draw(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        ctx.fillStyle=this.color
        ctx.fill()
    }    

}
//creating a projectile class

class Projectile{
    constructor(x,y,radius,color,velocity){
        this.x=x
        this.y=y
        this.radius=radius
        this.color=color
        this.velocity=velocity
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        ctx.fillStyle=this.color
        ctx.fill()
    
    }
    update(){
        this.draw()//draw and update
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class Enemy{
    constructor(x,y,radius,color,velocity){
        this.x=x
        this.y=y
        this.radius=radius
        this.color=color
        this.velocity=velocity
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
        ctx.fillStyle=this.color
        ctx.fill()
    
    }
    update(){
        this.draw()//draw and update
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}



const x = canvas.width/2;
const y = canvas.height/2;
//creating an instance of type player
let player=new Player(15,x,y,'white');
//we need many projectiles at the same time and so animate them together
let projectiles = []
//enemy inatances
let enemies=[]

//intialising every time the game is restarted
function init(){
    player = new Player(15,x,y,'white')
    projectiles = []
    enemies = []
    score = 0
    scoreId.innerHTML=score
    final_score.innerHTML=score
}


//projecting enemies at intervals
function shootEnemies(){
    setInterval(()=>{
        const radius=Math.random()*(25-6) + 6//gives radius b/w 
        //6 and 25
        let x
        let y
        if(Math.random()<0.5)
        {
            x=Math.random() < 0.5 ?0 -radius : canvas.width + radius
            y=Math.random() * canvas.height
        }
        else{
            x=Math.random() * canvas.width
            y=Math.random() < 0.5 ? 0 - radius :canvas.height +radius 
        }
        const color=`hsl(${Math.random()*360} , 50%, 50%)`//to compute it use tilde
        const angle=Math.atan2(
           canvas.height/2 - y,
           canvas.width/2 - x
        )
        const velocity={
           x: Math.cos(angle),
           y: Math.sin(angle)
        }
        enemies.push(new Enemy(x,y,radius,color,velocity))
           
    },1500)
}

//for animation
let animation_id
var score=0
function animate(){
    animation_id = requestAnimationFrame(animate)//requires call back
    ctx.fillStyle = 'rgba(0,0,0,0.2)' //for opacity0.1 fade effect
    ctx.fillRect(0,0,canvas.width,canvas.height)//clearing the entire screen
    player.draw();//putting the player onto the center each time we clear the screen
    projectiles.forEach((projectile,index)=>{
        projectile.update()
     
    //splice adds or removes the array items and updates the array
    //if projectile is almost out of screen we stop animation
               
     if(projectile.x + projectile.radius < 0 || projectile.x -projectile.radius > canvas.width
        ||projectile.y + projectile.radius < 0 || projectile.y - projectile.radius > canvas.height)
        {    setTimeout(()=>{
                projectiles.splice(index,1)
            },0)
        }
    })
    
       
    enemies.forEach((enemy,index) => {
        enemy.update()

        //if enemy touches the player
        const dist = Math.hypot(player.x - enemy.x,player.y - enemy.y)

        if(dist - enemy.radius - player.radius <1){
            //end game
            cancelAnimationFrame(animation_id);
            box.style.display= 'flex'
            final_score.innerHTML=score
        }

        //collision detection of projectile and enemy
        projectiles.forEach((projectile, projectileIndex)=>{
            const dist=Math.hypot(projectile.x - enemy.x,
                projectile.y - enemy.y)//used to get the dist b/w the projectilea nd enemy
       
       
        //if they touch particle touches the enemy 
        if(dist - enemy.radius - projectile.radius < 1)
            {
                //increase the score
                    score+=10  
                    scoreId.innerHTML = score           
                // to remove the enemy and the projectile
               setTimeout(()=>{ enemies.splice(index,1)
                projectiles.splice(projectileIndex,1)
            
               },0)//to stop redrawing the enemies 
            }
       })
    
   })
}
//on click the projectile is shot
//window.addEventListener 
window.addEventListener('click',(event)=>
{  
    const angle=Math.atan2(
        event.clientY-canvas.height / 2,event.clientX-canvas.width / 2)//starts from center
    
    var vel = {
        x: Math.cos(angle)*4.5,
        y: Math.sin(angle)*4.5
    }//to get the angle based on the x and y coordinates clicked on
    projectiles.push(
        new Projectile(canvas.width/2,canvas.height/2,5,'white',vel)
    )//on click generate a new instance of projectile    
})

start_game_btn.addEventListener('click',()=>{
    init()//to reset every thing eevrytime the button is clicked
    animate()
    shootEnemies()
    box.style.display='none'
})