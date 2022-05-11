 
      window.onload = (event) => {
        // disable HIT and STAY buttons before cards are dealt 
        document.getElementById("play-game").disabled = false
        document.getElementById("hit").disabled = true
        document.getElementById("stay").disabled = true
         
      };
      //Card variables available to functionss 
      let DECK =  []
      
      let numberValue = ''
      let dealerHand =[]
      let playerHand =[]
      let dealerScore=''
      let playerScore=''
      let betAmount =''
      //temporary variable to hold the image link of hidden card
      let tempPic =''      
      //Initial amount of money for betting
      let money = 100
      function initializeDeck(){
         
        DECK =  [
          {
          "code": "5S",
          "image": "https://deckofcardsapi.com/static/img/5S.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/5S.svg",
          "png": "https://deckofcardsapi.com/static/img/5S.png"
          },
          "value": "5",
          "suit": "SPADES"
          },
          {
          "code": "8D",
          "image": "https://deckofcardsapi.com/static/img/8D.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/8D.svg",
          "png": "https://deckofcardsapi.com/static/img/8D.png"
          },
          "value": "8",
          "suit": "DIAMONDS"
          },
          {
          "code": "4S",
          "image": "https://deckofcardsapi.com/static/img/4S.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/4S.svg",
          "png": "https://deckofcardsapi.com/static/img/4S.png"
          },
          "value": "4",
          "suit": "SPADES"
          },
          {
          "code": "8S",
          "image": "https://deckofcardsapi.com/static/img/8S.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/8S.svg",
          "png": "https://deckofcardsapi.com/static/img/8S.png"
          },
          "value": "8",
          "suit": "SPADES"
          },
          {
          "code": "JC",
          "image": "https://deckofcardsapi.com/static/img/JC.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/JC.svg",
          "png": "https://deckofcardsapi.com/static/img/JC.png"
          },
          "value": "JACK",
          "suit": "CLUBS"
          },
          {
          "code": "AS",
          "image": "https://deckofcardsapi.com/static/img/AS.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/AS.svg",
          "png": "https://deckofcardsapi.com/static/img/AS.png"
          },
          "value": "ACE",
          "suit": "SPADES"
          },
          {
          "code": "3D",
          "image": "https://deckofcardsapi.com/static/img/3D.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/3D.svg",
          "png": "https://deckofcardsapi.com/static/img/3D.png"
          },
          "value": "3",
          "suit": "DIAMONDS"
          },
          {
          "code": "AH",
          "image": "https://deckofcardsapi.com/static/img/AH.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/AH.svg",
          "png": "https://deckofcardsapi.com/static/img/AH.png"
          },
          "value": "ACE",
          "suit": "HEARTS"
          },
          {
          "code": "0C",
          "image": "https://deckofcardsapi.com/static/img/0C.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/0C.svg",
          "png": "https://deckofcardsapi.com/static/img/0C.png"
          },
          "value": "10",
          "suit": "CLUBS"
          },
          {
          "code": "7C",
          "image": "https://deckofcardsapi.com/static/img/7C.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/7C.svg",
          "png": "https://deckofcardsapi.com/static/img/7C.png"
          },
          "value": "7",
          "suit": "CLUBS"
          },
          {
          "code": "4D",
          "image": "https://deckofcardsapi.com/static/img/4D.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/4D.svg",
          "png": "https://deckofcardsapi.com/static/img/4D.png"
          },
          "value": "4",
          "suit": "DIAMONDS"
          },
          {
          "code": "8C",
          "image": "https://deckofcardsapi.com/static/img/8C.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/8C.svg",
          "png": "https://deckofcardsapi.com/static/img/8C.png"
          },
          "value": "8",
          "suit": "CLUBS"
          },
          {
          "code": "2S",
          "image": "https://deckofcardsapi.com/static/img/2S.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/2S.svg",
          "png": "https://deckofcardsapi.com/static/img/2S.png"
          },
          "value": "2",
          "suit": "SPADES"
          },
          {
          "code": "9S",
          "image": "https://deckofcardsapi.com/static/img/9S.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/9S.svg",
          "png": "https://deckofcardsapi.com/static/img/9S.png"
          },
          "value": "9",
          "suit": "SPADES"
          },
          {
          "code": "6C",
          "image": "https://deckofcardsapi.com/static/img/6C.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/6C.svg",
          "png": "https://deckofcardsapi.com/static/img/6C.png"
          },
          "value": "6",
          "suit": "CLUBS"
          },
          {
          "code": "QD",
          "image": "https://deckofcardsapi.com/static/img/QD.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/QD.svg",
          "png": "https://deckofcardsapi.com/static/img/QD.png"
          },
          "value": "QUEEN",
          "suit": "DIAMONDS"
          },
          {
          "code": "0D",
          "image": "https://deckofcardsapi.com/static/img/0D.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/0D.svg",
          "png": "https://deckofcardsapi.com/static/img/0D.png"
          },
          "value": "10",
          "suit": "DIAMONDS"
          },
          {
          "code": "5C",
          "image": "https://deckofcardsapi.com/static/img/5C.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/5C.svg",
          "png": "https://deckofcardsapi.com/static/img/5C.png"
          },
          "value": "5",
          "suit": "CLUBS"
          },
          {
          "code": "AD",
          "image": "https://deckofcardsapi.com/static/img/aceDiamonds.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/aceDiamonds.svg",
          "png": "https://deckofcardsapi.com/static/img/aceDiamonds.png"
          },
          "value": "ACE",
          "suit": "DIAMONDS"
          },
          {
          "code": "7H",
          "image": "https://deckofcardsapi.com/static/img/7H.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/7H.svg",
          "png": "https://deckofcardsapi.com/static/img/7H.png"
          },
          "value": "7",
          "suit": "HEARTS"
          },
          {
          "code": "QC",
          "image": "https://deckofcardsapi.com/static/img/QC.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/QC.svg",
          "png": "https://deckofcardsapi.com/static/img/QC.png"
          },
          "value": "QUEEN",
          "suit": "CLUBS"
          },
          {
          "code": "9C",
          "image": "https://deckofcardsapi.com/static/img/9C.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/9C.svg",
          "png": "https://deckofcardsapi.com/static/img/9C.png"
          },
          "value": "9",
          "suit": "CLUBS"
          },
          {
          "code": "5D",
          "image": "https://deckofcardsapi.com/static/img/5D.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/5D.svg",
          "png": "https://deckofcardsapi.com/static/img/5D.png"
          },
          "value": "5",
          "suit": "DIAMONDS"
          },
          {
          "code": "3S",
          "image": "https://deckofcardsapi.com/static/img/3S.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/3S.svg",
          "png": "https://deckofcardsapi.com/static/img/3S.png"
          },
          "value": "3",
          "suit": "SPADES"
          },
          {
          "code": "KC",
          "image": "https://deckofcardsapi.com/static/img/KC.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/KC.svg",
          "png": "https://deckofcardsapi.com/static/img/KC.png"
          },
          "value": "KING",
          "suit": "CLUBS"
          },
          {
          "code": "JH",
          "image": "https://deckofcardsapi.com/static/img/JH.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/JH.svg",
          "png": "https://deckofcardsapi.com/static/img/JH.png"
          },
          "value": "JACK",
          "suit": "HEARTS"
          },
          {
          "code": "6D",
          "image": "https://deckofcardsapi.com/static/img/6D.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/6D.svg",
          "png": "https://deckofcardsapi.com/static/img/6D.png"
          },
          "value": "6",
          "suit": "DIAMONDS"
          },
          {
          "code": "4H",
          "image": "https://deckofcardsapi.com/static/img/4H.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/4H.svg",
          "png": "https://deckofcardsapi.com/static/img/4H.png"
          },
          "value": "4",
          "suit": "HEARTS"
          },
          {
          "code": "7S",
          "image": "https://deckofcardsapi.com/static/img/7S.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/7S.svg",
          "png": "https://deckofcardsapi.com/static/img/7S.png"
          },
          "value": "7",
          "suit": "SPADES"
          },
          {
          "code": "2D",
          "image": "https://deckofcardsapi.com/static/img/2D.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/2D.svg",
          "png": "https://deckofcardsapi.com/static/img/2D.png"
          },
          "value": "2",
          "suit": "DIAMONDS"
          },
          {
          "code": "2C",
          "image": "https://deckofcardsapi.com/static/img/2C.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/2C.svg",
          "png": "https://deckofcardsapi.com/static/img/2C.png"
          },
          "value": "2",
          "suit": "CLUBS"
          },
          {
          "code": "KD",
          "image": "https://deckofcardsapi.com/static/img/KD.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/KD.svg",
          "png": "https://deckofcardsapi.com/static/img/KD.png"
          },
          "value": "KING",
          "suit": "DIAMONDS"
          },
          {
          "code": "JS",
          "image": "https://deckofcardsapi.com/static/img/JS.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/JS.svg",
          "png": "https://deckofcardsapi.com/static/img/JS.png"
          },
          "value": "JACK",
          "suit": "SPADES"
          },
          {
          "code": "5H",
          "image": "https://deckofcardsapi.com/static/img/5H.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/5H.svg",
          "png": "https://deckofcardsapi.com/static/img/5H.png"
          },
          "value": "5",
          "suit": "HEARTS"
          },
          {
          "code": "3H",
          "image": "https://deckofcardsapi.com/static/img/3H.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/3H.svg",
          "png": "https://deckofcardsapi.com/static/img/3H.png"
          },
          "value": "3",
          "suit": "HEARTS"
          },
          {
          "code": "KS",
          "image": "https://deckofcardsapi.com/static/img/KS.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/KS.svg",
          "png": "https://deckofcardsapi.com/static/img/KS.png"
          },
          "value": "KING",
          "suit": "SPADES"
          },
          {
          "code": "8H",
          "image": "https://deckofcardsapi.com/static/img/8H.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/8H.svg",
          "png": "https://deckofcardsapi.com/static/img/8H.png"
          },
          "value": "8",
          "suit": "HEARTS"
          },
          {
          "code": "2H",
          "image": "https://deckofcardsapi.com/static/img/2H.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/2H.svg",
          "png": "https://deckofcardsapi.com/static/img/2H.png"
          },
          "value": "2",
          "suit": "HEARTS"
          },
          {
          "code": "QH",
          "image": "https://deckofcardsapi.com/static/img/QH.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/QH.svg",
          "png": "https://deckofcardsapi.com/static/img/QH.png"
          },
          "value": "QUEEN",
          "suit": "HEARTS"
          },
          {
          "code": "6S",
          "image": "https://deckofcardsapi.com/static/img/6S.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/6S.svg",
          "png": "https://deckofcardsapi.com/static/img/6S.png"
          },
          "value": "6",
          "suit": "SPADES"
          },
          {
          "code": "6H",
          "image": "https://deckofcardsapi.com/static/img/6H.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/6H.svg",
          "png": "https://deckofcardsapi.com/static/img/6H.png"
          },
          "value": "6",
          "suit": "HEARTS"
          },
          {
          "code": "9D",
          "image": "https://deckofcardsapi.com/static/img/9D.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/9D.svg",
          "png": "https://deckofcardsapi.com/static/img/9D.png"
          },
          "value": "9",
          "suit": "DIAMONDS"
          },
          {
          "code": "QS",
          "image": "https://deckofcardsapi.com/static/img/QS.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/QS.svg",
          "png": "https://deckofcardsapi.com/static/img/QS.png"
          },
          "value": "QUEEN",
          "suit": "SPADES"
          },
          {
          "code": "0H",
          "image": "https://deckofcardsapi.com/static/img/0H.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/0H.svg",
          "png": "https://deckofcardsapi.com/static/img/0H.png"
          },
          "value": "10",
          "suit": "HEARTS"
          },
          {
          "code": "7D",
          "image": "https://deckofcardsapi.com/static/img/7D.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/7D.svg",
          "png": "https://deckofcardsapi.com/static/img/7D.png"
          },
          "value": "7",
          "suit": "DIAMONDS"
          },
          {
          "code": "9H",
          "image": "https://deckofcardsapi.com/static/img/9H.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/9H.svg",
          "png": "https://deckofcardsapi.com/static/img/9H.png"
          },
          "value": "9",
          "suit": "HEARTS"
          },
          {
          "code": "0S",
          "image": "https://deckofcardsapi.com/static/img/0S.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/0S.svg",
          "png": "https://deckofcardsapi.com/static/img/0S.png"
          },
          "value": "10",
          "suit": "SPADES"
          },
          {
          "code": "AC",
          "image": "https://deckofcardsapi.com/static/img/AC.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/AC.svg",
          "png": "https://deckofcardsapi.com/static/img/AC.png"
          },
          "value": "ACE",
          "suit": "CLUBS"
          },
          {
          "code": "KH",
          "image": "https://deckofcardsapi.com/static/img/KH.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/KH.svg",
          "png": "https://deckofcardsapi.com/static/img/KH.png"
          },
          "value": "KING",
          "suit": "HEARTS"
          },
          {
          "code": "4C",
          "image": "https://deckofcardsapi.com/static/img/4C.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/4C.svg",
          "png": "https://deckofcardsapi.com/static/img/4C.png"
          },
          "value": "4",
          "suit": "CLUBS"
          },
          {
          "code": "3C",
          "image": "https://deckofcardsapi.com/static/img/3C.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/3C.svg",
          "png": "https://deckofcardsapi.com/static/img/3C.png"
          },
          "value": "3",
          "suit": "CLUBS"
          },
          {
          "code": "JD",
          "image": "https://deckofcardsapi.com/static/img/JD.png",
          "images": {
          "svg": "https://deckofcardsapi.com/static/img/JD.svg",
          "png": "https://deckofcardsapi.com/static/img/JD.png"
          },
          "value": "JACK",
          "suit": "DIAMONDS"
          }
          ]
             // Store the numeric values of the cards for later calculations
               for(let v = 0; v < DECK.length; v++)
                  {
                       
                      if (DECK[v].value == "JACK" || DECK[v].value == "KING" || DECK[v].value == "QUEEN" ){
                          numberValue = 10;
                     }else if (DECK[v].value == "ACE"){
                          numberValue = 11;
                     } else {
                          numberValue =Number(DECK[v].value)   
                     }    
                      DECK[v].NumberValue = numberValue
                      
               }
              
                
       }
        
        
        
        
      function shuffleDeck () {
             
                 //for 1000 iterations, swap two random cards in the deck
                for (let idx = 0; idx < DECK.length ; idx++)
                {
                   let idx2 = Math.floor(Math.random() * DECK.length  )
                   
                   let temp = DECK[idx];
                   DECK[idx] = DECK[idx2];
                   DECK[idx2] = temp;
                }
            
               
           }
         
      function hitMe () {
      
        playerHand.push(getCard('player'))
        displayScore()
        checkStatus()

      }    
     
      function stay() {

       if(playerHand.length  > 2  ){
         let dealr = document.querySelector('#dealer :nth-child(1)')
         dealr.src=tempPic
       }   
       dealerScore =getScore(dealerHand,'d')
       while(dealerScore < 17) {  
         dealerHand.push(getCard('dealer'));
         dealerScore =getScore(dealerHand,'d')
       }
       
       displayScore()
       checkStatus()
      }

      let stayBut = document.getElementById('stay')
      stayBut.addEventListener('click',stay)
      
      let hit= document.getElementById('hit')        
      hit.addEventListener('click', hitMe)
 
      
    function getScore(cardArray,type) {
          
          let total = 0;
          let NumberofAces =0;
       for  (let i =0 ; i<cardArray.length; i++){
              if (cardArray[i].value === "ACE") {
                 NumberofAces += 1;
              }   
                total += cardArray[i].NumberValue;
          }      
          //count aces as value 1 if it busts dealer
        if (type === 'd'){
          while (NumberofAces > 0 && total > 21) {
              total -= 10;
              NumberofAces -= 1;
          }
        } 
          return total;
      }

     function displayScore () {
          
           dealerScore= getScore(dealerHand,'d')
           let dealerDiv = document.getElementById('dealerscore')
           if (dealerHand.length == 2 ){
            dealerDiv.textContent = 'Dealer Score:' + '? +' + dealerHand[1].NumberValue 
           } else {
           dealerDiv.textContent = 'Dealer Score:'+dealerScore
           }
           playerScore= getScore(playerHand,'p')
           let playerDiv = document.getElementById('playerscore')
           playerDiv.textContent = 'Player Score:'+playerScore
    
      }
          
    
     

     function deal () {
       resetGame()
       shuffleDeck(DECK)
       dealerHand =[getCard("dealer"),getCard("dealer")]
       playerHand =[getCard("player"),getCard("player")]
       // save the image of the hidden card
       tempPic = dealerHand[0].image
       const dealr = document.querySelector('#dealer :nth-child(1)')
       //replace the image with the back of a card
       dealr.src='cardback.jpg'      

       document.getElementById("play-game").disabled = true
       document.getElementById("hit").disabled = false 
       document.getElementById("stay").disabled = false
        
       displayScore()
       checkStatus()
       console.log(DECK)
       
 
       }

     //get a card 
     function getCard(person) {
          
         let card= DECK.pop();
         
         if (person === 'player'){            
          let div = document.getElementById('player')
          let pic = document.createElement('img')
          pic.src= card.image
          div.appendChild(pic)
        } else if(person === 'dealer'){
          let div = document.getElementById('dealer')
          let pic = document.createElement('img')
          pic.src= card.image
          div.appendChild(pic)
        }
     
          return card
      } 
       // reinitialize the deck of cards
     function resetGame () {
            initializeDeck()
            dealerHand =[]
            playerHand =[]
            dealerScore=0
            playerScore=0
             
            document.getElementById('money').textContent=''
            const div = document.querySelector('#player')
            const divs = div.querySelectorAll('img')
            divs.forEach(child => child.remove() )
            const div2 = document.querySelector('#dealer')
            const divs2 = div2.querySelectorAll('img')
            divs2.forEach(child => child.remove() )
            const dealer = document.querySelector('#dealerscore')
            dealer.textContent=''
            const player = document.querySelector('#playerscore')
            player.textContent=''
            const message = document.getElementById('textupdates')
            message.textContent=''
            document.getElementById("play-game").disabled = false 
            document.getElementById("hit").disabled = true 
            document.getElementById("stay").disabled = true
          }
    
         
       const play= document.getElementById('play-game')
       play.addEventListener('click',deal)
    
    
       
       const reStart =document.getElementById('newgame')
       reStart.addEventListener('click',function(e) {
             
            location.reload()
       } )
       

       // calculates the amount of money lost or won in a bet
      function wager(result) {
       let bet = document.getElementById("bet").value; 
         bet = Number(bet)
          if (result === "won") {
               money +=  bet
          }else if (result === "lost") {
               money -=  bet
          }
      } 
      // check to see if there is a winner
      function checkStatus () {
        let message = document.getElementById('textupdates')
        let deal = " Press Deal to continue playing"
        let reset = false; 
         if (dealerScore === 21) {
           message.textContent='Dealer wins with BLACK JACK!' + deal
           wager('lost')
          reset = true 
          } else if(dealerScore > 21){
           message.textContent='Dealer went over 21. You won!' + deal
           wager('won')
           reset=true 
         } 
         
         
        if (playerScore === 21) {
             message.textContent='You got BLACK JACK!' + deal
             wager('won')
             reset=true
        } else if (playerScore > 21) {
             message.textContent='Sorry, You lost! You went over 21!' + deal
             wager('lost')
             reset=true 
        }    

       // dealer must hold if the total of hand is 17 or more

      if (dealerScore>= 17 && playerScore === dealerScore && dealerScore < 21) {
           message.textContent='You Tied!' + deal
           reset = true
     }else if (dealerScore >= 17 && playerScore > dealerScore && playerScore < 21) {
           message.textContent='You beat the dealer! You won!' + deal
           wager('won')
           reset = true
     }else if (dealerScore >= 17 && playerScore < dealerScore && dealerScore < 21){
           message.textContent='Sorry! The dealer had a higher score. You lost.' + deal
           wager('lost')
           reset = true
     }

        if (reset){
          //reveal the dealer's hidden card and score
          let dealerDiv = document.getElementById('dealerscore')
          dealerDiv.textContent = 'Dealer Score:'+dealerScore
          let dealr = document.querySelector('#dealer :nth-child(1)')
          dealr.src=tempPic 
          document.getElementById("play-game").disabled = false
          document.getElementById("hit").disabled = true
          document.getElementById("stay").disabled = true
        }
        
        // if player runs out of money, they can start a new game
        if (money <= 0) {
         money=0
         message.textContent='Sorry! You lost AND you are out of money. Press New Game to start another game'
         document.querySelector(".buttons").style.display="none"
         document.getElementById('newgame').style.display="inline"
        } 
 
        let moneyLeft = document.getElementById('money')
        moneyLeft.textContent = "Money Left: $" +money
}