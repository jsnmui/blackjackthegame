      let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
      let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
      let numberValue = ''
      let deck = []
      let dealerHand =[]
      let playerHand =[]
        
      function buildDeck(){
         
             for (let s = 0 ; s < suits.length; s++)
              {
                  for(let v = 0; v < values.length; v++)
                  {
                       
                      if (values[v] == "J" || values[v] == "K" || values[v] == "Q" ){
                          numberValue = 10;
                     }else if (values[v] == "A"){
                          numberValue = 11;
                     } else {
                          numberValue =Number(values[v])   
                     }    
                      let card = { Suit: suits[s],  Value: values[v],  NumberValue: numberValue };
                      deck.push(card);
                  }
              }
                
       }
        
        
        
        
       function shuffleDeck () {
             
                 //for 1000 iterations, swap two random cards in the deck
                for (let idx = 0; idx < deck.length ; idx++)
                {
                   let idx2 = Math.floor(Math.random() * deck.length  )
                   
                   let temp = deck[idx];
                   deck[idx] = deck[idx2];
                   deck[idx2] = temp;
                }
            
               
           }
         
       function hitMe () {
         const div =document.getElementById('player')
         const pic = document.createElement('img')
         pic.src="king-clubs.png"
         pic.height='250'
         pic.width='150'

         div.appendChild(pic)

       }    
        
       hit.addEventListener('click', function() {
                 hitMe()
       })

         
       const displayScore = (game) => {
                  
                 const parentDiv = document.querySelector('body')
                 const newDiv= document.createElement("div");
                 newDiv.className = 'game'
                 newDiv.innerHTML= `&nbspComputer Score: ${game[0]} Player Score: ${game[1]}  Winner: ${game[2]}`
                 parentDiv.appendChild(newDiv)
    
          }
          
    
          
    
       const playGame = () =>{
    
         buildDeck()
         shuffleDeck(deck)  
         console.log(deck)

 
       }
       
          const resetGame= () => { 
          const div = document.querySelector('#player')
          const divs = div.querySelectorAll('img')
          divs.forEach(child => child.remove() )
          
          }
    
         
          const play= document.getElementById('play-game')
          play.addEventListener('click',playGame)
    
    
          const rest= document.getElementById('reset')
          rest.addEventListener('click',resetGame)
          
          