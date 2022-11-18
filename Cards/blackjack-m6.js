//
// Blackjack
// by Mark Zamoyta
//

// Card variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'],
    bokaSuits =["♥","♣","♦","♠"]
    values = ['Ace', 'King', 'Queen', 'Jack', 
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'];
    bokaValues = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"]

// DOM variables
let textArea = document.getElementById('text-area'),
    dealersCards = document.getElementById('dealersCards'),
    playersCards = document.getElementById('playersCards'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');

// Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();
  
newGameButton.addEventListener('click', function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;
  
  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [ getNextCard(), getNextCard() ];
  playerCards = [ getNextCard(), getNextCard() ];
  
  newGameButton.style.display = 'none';
  hitButton.style.display = 'inline';
  stayButton.style.display = 'inline';
  showNewStatus();
});

hitButton.addEventListener('click', function() {
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
});

stayButton.addEventListener('click', function() {
  gameOver = true;
  checkForEndOfGame();
  showStatus();
});


function createDeck() {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push( card );
        }
    }
    return deck;
}

function shuffleDeck(deck) {
  for (let i = 0; i < deck.length; i++) {
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

function getNextCard() {
    return deck.shift();
}

function cardDisplay(card ){
  let theCard = card.value + ' of ' + card.suit;
  //alert("&#127137;");
  //document.write('&#127137');


  switch(theCard) {
    case 'Ace of Spades': 
          return '&#127137;';
          console.log('&#127137' );
          break;
    case 'Two of Spades': 
          return '&#127138;';
          break;
    case 'Three of Spades': 
          return '&#127139;';
          break;
    case 'Four of Spades': 
          return '&#127140;';
          break;
    case 'Five of Spades': 
          return '&#127141;';
          break;
    case 'Six of Spades': 
          return '&#127142;';
          break;
    case 'Seven of Spades': 
          return '&#127143;';
          break;
    case 'Eight of Spades': 
          return '&#127144;';
          break;
    case 'Nine of Spades': 
          return '&#127145;';
          break;
    case 'Ten of Spades': 
          return '&#127146;';
          break;
    case 'Jack of Spades': 
          return '&#127147;';
          break;
    case 'Knight of Spades': 
          return '&#127148;';
          break;
    case 'Queen of Spades': 
          return '&#127149;';
          break;
    case 'King of Spades': 
          return '&#127150;';
          break;
    case 'Ace of Hearts': 
          return '&#127153;';
          break;
    case 'Two of Hearts': 
          return '&#127154;';
          break;
    case 'Three of Hearts': 
          return '&#127155;';
          break;
    case 'Four of Hearts': 
          return '&#127156;';
          break;
    case 'Five of Hearts': 
          return '&#127157;';
          break;
    case 'Six of Hearts': 
          return '&#127158;';
          break;
    case 'Seven of Hearts': 
          return '&#127159;';
          break;
    case 'Eight of Hearts': 
          return '&#127160;';
          break;
    case 'Nine of Hearts': 
          return '&#127161;';
          break;
    case 'Ten of Hearts': 
          return '&#127162;';
          break;
    case 'Jack of Hearts': 
          return '&#127163;';
          break;
    case 'Knight of Hearts': 
          return '&#127164;';
          break;
    case 'Queen of Hearts': 
          return '&#127165;';
          break;
    case 'King of Hearts': 
          return '&#127166;';
          break;
    case 'Red joker': 
          return '&#127167;';
          break;
    case 'Ace of Diamonds': 
          return '&#127169;';
          break;
    case 'Two of Diamonds': 
          return '&#127170;';
          break;
    case 'Three of Diamonds': 
          return '&#127171;';
          break;
    case 'Four of Diamonds': 
          return '&#127172;';
          break;
    case 'Five of Diamonds': 
          return '&#127173;';
          break;
    case 'Six of Diamonds': 
          return '&#127174;';
          break;
    case 'Seven of Diamonds': 
          return '&#127175;';
          break;
    case 'Eight of Diamonds': 
          return '&#127176;';
          break;
    case 'Nine of Diamonds': 
          return '&#127177;';
          break;
    case 'Ten of Diamonds': 
          return '&#127178;';
          break;
    case 'Jack of Diamonds': 
          return '&#127179;';
          break;
    case 'Knight of Diamonds': 
          return '&#127180;';
          break;
    case 'Queen of Diamonds': 
          return '&#127181;';
          break;
    case 'King of Diamonds': 
          return '&#127182;';
          break;
    case 'Black joker': 
          return '&#127183;';
          break;
    case 'Ace of Clubs': 
          return '&#127185;';
          break;
    case 'Two of Clubs': 
          return '&#127186;';
          break;
    case 'Three of Clubs': 
          return '&#127187;';
          break;
    case 'Four of Clubs': 
          return '&#127188;';
          break;
    case 'Five of Clubs': 
          return '&#127189;';
          break;
    case 'Six of Clubs': 
          return '&#127190;';
          break;
    case 'Seven of Clubs': 
          return '&#127191;';
          break;
    case 'Eight of Clubs': 
          return '&#127192;';
          break;
    case 'Nine of Clubs': 
          return '&#127193;';
          break;
    case 'Ten of Clubs': 
          return '&#127194;';
          break;
    case 'Jack of Clubs': 
          return '&#127195;';
          break;
    case 'Knight of Clubs': 
          return '&#127196;';
          break;
    case 'Queen of Clubs': 
          return '&#127197;';
          break;
    case 'King of Clubs': 
          return '&#127198;';
          break;
    case 'White joker': 
          return '&#127199;';
          break;
    default:
      return '&#127197;';
      break;
  }

}

function getCardNumericValue(card) {
  switch(card.value) {
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five': 
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default:
      return 10;
  }
}

function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value === 'Ace') {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    return score + 10;
  }
  return score;
}

function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

function checkForEndOfGame() {
  
  updateScores();
  
  if (gameOver) {
    // let dealer take cards
    while(dealerScore < playerScore 
          && playerScore <= 21 
          && dealerScore <= 21) {
      dealerCards.push(getNextCard());
      updateScores();
    }
  }
  
  if (playerScore > 21) {
    playerWon = false;
    gameOver = true;
  }
  else if (dealerScore > 21) {
    playerWon = true;
    gameOver = true;
  }
  else if (gameOver) {
    
    if (playerScore > dealerScore) {
      playerWon = true;
    }
    else {
      playerWon = false;
    }
  }
}

function showNewStatus(){
  textArea.innerText = 'Welcome to Blackjack!';
  dealersCards.innerText = "Dealers Cards";
  playersCards.innerText = "Players Cards";

  return;
}
function showStatus() {
  if (!gameStarted) {
    textArea.innerText = 'Welcome to Blackjack!';
    dealersCards.innerText = "Dealers Cards";
    playersCards.innerText = "Players Cards";
    //console.log('&#127137');


    return;
  }
  
  let dealerCardString = '';
  var dealerItem = '';

  var dealerItem = document.getElementById('dealersDisplay');
  var dealerItemContent = dealerItem.innerHTML;

  for (let i=0; i < dealerCards.length; i++) {
    dealerCardString += getCardString(dealerCards[i]) + '\n';

    //console.log(dealerItem);
    dealerItem.innerHTML += cardDisplay(dealerCards[i]) + '\n';
  }
  
  let playerCardString = '';

  var playerItem = document.getElementById('playersDisplay');
  var playerItemContent = playerItem.innerHTML;

  for (let i=0; i < playerCards.length; i++) {
    playerCardString += getCardString(playerCards[i]) + '\n';
      var playerShowCard = document.getElementById('playersDisplay').innerHTML;

      //console.log(dealerItem);
      playerItem.innerHTML += cardDisplay(playerCards[i])+ '\n';

  }
  
  updateScores();
  
  textArea.innerText = "";
/*    'Dealer has:\n' +
    dealerCardString + 
    '(score: '+ dealerScore  + ')\n\n' +
    
    'Player has:\n' +
    playerCardString +
    '(score: '+ playerScore  + ')\n\n';
*/

  dealersCards.innerText = 
    'Dealer has:\n' +
    dealerCardString + 
    '(score: '+ dealerScore  + ')\n\n';
    dealersCards.style.backgroundColor = "white";
  

  playersCards.innerText = 
    'Player has:\n' +
    playerCardString +
    '(score: '+ playerScore  + ')\n\n';
    playersCards.style.backgroundColor = "white";

  
  if (gameOver) {
    if (playerWon) {
      textArea.innerText += "\nPLAYER WINS!";
      playersCards.innerText += "YOU WIN!";
      playersCards.style.backgroundColor = "yellow";
    }
    else {
      textArea.innerText += "\nDEALER WINS";
      dealersCards.innerText += "WINNER!!!";
      dealersCards.style.backgroundColor = "yellow";
    }
    newGameButton.style.display = 'inline';
    hitButton.style.display = 'none';
    stayButton.style.display = 'none';
  }

}
