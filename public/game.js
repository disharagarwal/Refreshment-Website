const cards =  document.querySelectorAll('.memory-card');
const result=document.querySelector('#result')
let firstCard,secondCard;
let hasFlippedCard=false;
let lockBoard=false;
const cardsWon=[];
function flipCard()
{
    if(lockBoard){
     return;
    };
    if(this===firstCard){
        return;
    };
    this.classList.add('flip');
    if(!hasFlippedCard){
        //first time
        hasFlippedCard=true;
        firstCard=this;
    }
    else
    {
        hasFlippedCard=false;
        secondCard=this;
        checkForMatch();
    }
}
function checkForMatch()
{
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        disableCards(); 
        result.textContent=cardsWon.length;
        if(cardsWon.length === 12)
        {
            result.textContent="you win the game!!!";
        }
    }
    else{
        unFlipCards();
    }
}

function disableCards(){
    firstCard.removeEventListener('click',flipCard);
    cardsWon.push(firstCard);
    secondCard.removeEventListener('click',flipCard);  
    cardsWon.push(secondCard);
    resetBoard();
}

function unFlipCards(){
    lockBoard=true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    lockBoard=false;
    },750);
}

function resetBoard(){
    [hasFlippedCard,lockBoard]=[false,false];
    [firstCard,secondCard]=[null,null];

}
(function shuffle(){
    cards.forEach(card=>{
        let randomPos=Math.floor(Math.random()*12);
        card.style.order=randomPos;
    });
})();
cards.forEach(card =>card.addEventListener('click',flipCard));