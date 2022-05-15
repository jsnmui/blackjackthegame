 
      window.onload = (event) => {
        // disable HIT and STAY buttons before cards are dealt 
        document.getElementById("play-game").disabled = false
        document.getElementById('hit').style.display="none"
         document.getElementById('stay').style.display="none"
        let message = document.getElementById('textupdates')
        message.innerHTML = "Place your bet.<br>Press Deal to start playing."
        let moneyLeft = document.getElementById('money')
        money=500
        moneyLeft.textContent = "Bank: $" +money

         
      };
      //Card variables available to functionss 
      let DECK =  []
      // the numerical value of each card
      let numberValue = ''
      //All the dealers cards
      let dealerHand =[]
      //All the player's cards
      let playerHand =[]
      // the dealer score for each round     
      let dealerScore=''
      // the player score for each round  
      let playerScore=''
      //The amount of money to ber
      let betAmount =''
      //temporary variable to hold the image link of hidden card
      let tempPic =''      
      //Initial amount of money for betting
      let money = 500
      //Total Number of wins for dealer
      let dealWins = 0
      ///Total Number of wins for player
      let playerWins =0
      //Initialize array of cards to hold image links 
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
             
                 //Loop though the deck and swap each card with another random card
                for (let idx = 0; idx < DECK.length ; idx++)
                {
                   let idx2 = Math.floor(Math.random() * DECK.length  )
                   
                   let temp = DECK[idx];
                   DECK[idx] = DECK[idx2];
                   DECK[idx2] = temp;
                }
            
               
           }
      //  Player receives a card from the dealer

      function hitMe () {
      
        playerHand.push(getCard('player'))
        displayScore()
        checkStatus()

      }    
     
      // Player  deosn't want another card ends his turn

      function stay() {

       if(playerHand.length  > 2  ){
         let dealr = document.querySelector('#dealer :nth-child(2)')
         dealr.src=tempPic       //put back the original card image to reveal the card
       }   
    
       dealerScore =getScore(dealerHand)
       while(dealerScore < 17) {  
         dealerHand.push(getCard('dealer'));
         dealerScore =getScore(dealerHand)
       }
      
       
       displayScore()
       checkStatus('stay')
      }

      let stayBut = document.getElementById('stay')
      stayBut.addEventListener('click',stay)
      
      let hit= document.getElementById('hit')        
      hit.addEventListener('click', hitMe)
 
     //get the score for the player  
    function getScore(cardArray) {
          
          let total = 0;
          let NumberofAces =0;
       for  (let i =0 ; i<cardArray.length; i++){
              if (cardArray[i].value === "ACE") {
                 NumberofAces += 1;
              }   
                total += cardArray[i].NumberValue;
          }      
          //count aces as value 1 if it busts dealer
        
          while (NumberofAces > 0 && total > 21) {
              total -= 10;
              NumberofAces -= 1;
          }
        
          return total;
      }
      //show the current score for each player
     function displayScore () {
          
           dealerScore= getScore(dealerHand)
           let dealerDiv = document.getElementById('dealerscore')
           if (dealerHand.length == 2 ){
            dealerDiv.innerHTML = 'Dealer\'s Cards:&nbsp' + dealerHand[0].NumberValue + ' + ?'
           } else {
           dealerDiv.innerHTML = 'Dealer\'s Cards:&nbsp'+dealerScore
           }
           
           playerScore= getScore(playerHand)
           let playerDiv = document.getElementById('playerscore')
           playerDiv.textContent = 'Player\'s Score: '  + playerScore
    
      }
          
    
     
     //start game round by dealing two cards to player then dealer with the second card for the dealer placed faced down
     function deal () {
        
        resetGame()
        shuffleDeck(DECK)
        playerHand =[getCard("player"),getCard("player")]
        dealerHand =[getCard("dealer"),getCard("dealer")]
        
        // save the image of the hidden card
        tempPic = dealerHand[1].image
        const dealr = document.querySelector('#dealer :nth-child(2)')
        //replace the image with the back of a card
        dealr.src='./images/cardback.jpg'      
        let moneyLeft = document.getElementById('money')
        moneyLeft.textContent = "Money Left: $" +money
        document.getElementById("play-game").style.display = 'none'
        document.getElementById('hit').style.display="block"
        document.getElementById('stay').style.display="block"  
        document.getElementById("bet").disabled = true;
        displayScore()
        checkStatus()
  
      }

     //get a card  from the deck
      function getCard(person) {
       
         let card= DECK.pop();
         
         if (person === 'player'){            
          let div = document.getElementById('player')
          let pic = document.createElement('img')
          pic.src= card.image
          div.appendChild(pic)
          pic.style.margin = "10px 10px 10px 10px"
        } else if(person === 'dealer'){
          let div = document.getElementById('dealer')
          let pic = document.createElement('img')
          pic.src= card.image
          pic.style.margin = "10px 10px 10px 10px"
          div.appendChild(pic)
        }
     
          return card

        
      } 

       // clear the card objects from the screen and reinitialize the deck of cards
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
            
             
          }
       
        // Provide a a 1 second delay  
       
       function dealTime () {   
        let betInput = document.getElementById('bet')
        let betMoney = Number(betInput.value)
      
        if ( betMoney='' || betMoney <=0) {
           alert('Please enter a valid bet amount.')
         } else {
            let message = document.getElementById('textupdates')
            message.textContent = "Dealing cards..."
            setTimeout(deal,1000)
         }   
       }
         
       const play= document.getElementById('play-game')
       play.addEventListener('click', dealTime)
    
      
       
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

       // check to see if there is a winner and if the player has enought money to continue
     function checkStatus (stand) {
        let message = document.getElementById('textupdates')
        let deal = " Enter another bet and Press Deal to continue playing"
        let reset = false

       
        // Check for all possible conditions for 21
        //a Black Jack occurs if the initial hand is an Ace or a 10 point card
         // dealer must stand if the total of hand is 17 or more
         if (dealerScore ===21 && playerScore ===21){
            message.textContent='You are tied with the Dealer!' + deal
            reset=true
         } else if (dealerScore === 21 && dealerHand.length ===2) {
            message.textContent='Dealer wins with BLACK JACK!' + deal
            wager('lost')
            reset = true
            dealWins++ 
         } else if(dealerScore > 21){
            message.textContent='Dealer BUSTED. You won!' + deal
            wager('won')
            reset=true 
            playerWins++
        } else if (playerScore === 21 && playerHand.length === 2) {
            message.textContent='You got BLACK JACK!' + deal
            wager('won')
            reset=true
            playerWins++
        } else if (playerScore === 21 ) {
            message.textContent='You win with 21 !' + deal
            wager('won')
            reset=true
            playerWins++    
        } else if (playerScore > 21) {
            message.textContent='Sorry, You BUSTED!' + deal
            wager('lost')
            reset=true 
        }  else if (dealerScore>= 17 && playerScore === dealerScore && dealerScore <= 21 && stand === 'stay') {
            message.textContent='You tied the Dealer!' + deal
            reset = true
        }  else if (dealerScore >= 17 && playerScore > dealerScore && playerScore <= 21 && stand ==='stay') {
            message.textContent='You beat the dealer! You won!' + deal
            wager('won')
            reset = true
            playerWins++
        }  else if (dealerScore >= 17 && playerScore < dealerScore && dealerScore <= 21 && stand ==='stay'){
            message.textContent='Sorry! The dealer had a higher score. You lost.' + deal
            wager('lost')
            reset = true
            dealWins++
        }

          let dealerWins =document.getElementById('winsd')
           dealerWins.innerHTML= 'Total Wins:&nbsp'  + dealWins

           
          let playWins =document.getElementById('winsp')
          playWins.innerHTML= 'Total Wins:&nbsp'  +  playerWins

        if (reset){
          //reveal the dealer's hidden card and score
          let dealerDiv = document.getElementById('dealerscore')
          dealerDiv.textContent = 'Dealer Score: '+dealerScore
          let dealr = document.querySelector('#dealer :nth-child(2)')
          dealr.src=tempPic 
          document.getElementById("play-game").style.display =""
          document.getElementById("hit").style.display='none' 
          document.getElementById("stay").style.display='none'
          document.getElementById("bet").disabled = false;
          document.getElementById("bet").value = 0; 
        }
        
        // if player runs out of money, they can start a new game
        if (money <= 0) {
         money=0
         message.textContent='Sorry! You lost AND you are out of money. Press Restart to start another game'
         document.getElementById('hit').style.display="none"
         document.getElementById('stay').style.display="none"
         document.getElementById('play-game').style.display="none"
        } 
 
        let moneyLeft = document.getElementById('money')
        moneyLeft.textContent = "Bank: $" +money

        
    } 
      //put the value of betships into the betting input box
      function setbetChips( chipvalue ){
          let betInput = document.getElementById('bet')
          let total = Number (betInput.value) + Number(chipvalue); 
          
         if ( total > money) {
            alert('You cannot bet more money than you have. Please enter a valid amount.') 
         } else {
            betInput.value  = total
         } 
      } 
      

      let betChips = document.getElementById('betting')
      //add event listener to the parent to listen to the children
      betChips.addEventListener('click', function (e) {
          
          if (e.target.id==="10chp") {
            setbetChips(10);
          }else if (e.target.id==="25chp"){
            setbetChips(25);
          } else if (e.target.id==="50chp"){
            setbetChips(50);
          } else if (e.target.id==="100chp"){
            setbetChips(100);
          }
        });



      // Get the modal
      let modal = document.getElementById("myModal");

      // Get the element that opens the modal
      let instruct = document.getElementById("instructions");

       // When the user clicks on the the Instructions, open the modal
      instruct.addEventListener('mouseover',function(e){
            modal.style.display = "block";
      })
      

      // Get the <span> element that closes the modal
      let span = document.getElementsByClassName("close")[0];

      
      
      // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }