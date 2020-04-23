let deck = [
    { face: '2', suit: 'C' }, { face: '2', suit: 'S' }, { face: '2', suit: 'H' }, { face: '2', suit: 'D' },
    { face: '3', suit: 'C' }, { face: '3', suit: 'S' }, { face: '3', suit: 'H' }, { face: '3', suit: 'D' },
    { face: '4', suit: 'C' }, { face: '4', suit: 'S' }, { face: '4', suit: 'H' }, { face: '4', suit: 'D' },
    { face: '5', suit: 'C' }, { face: '5', suit: 'S' }, { face: '5', suit: 'H' }, { face: '5', suit: 'D' },
    { face: '6', suit: 'C' }, { face: '6', suit: 'S' }, { face: '6', suit: 'H' }, { face: '6', suit: 'D' },
    { face: '7', suit: 'C' }, { face: '7', suit: 'S' }, { face: '7', suit: 'H' }, { face: '7', suit: 'D' },
    { face: '8', suit: 'C' }, { face: '8', suit: 'S' }, { face: '8', suit: 'H' }, { face: '8', suit: 'D' },
    { face: '9', suit: 'C' }, { face: '9', suit: 'S' }, { face: '9', suit: 'H' }, { face: '9', suit: 'D' },
    { face: '10', suit: 'C' }, { face: '10', suit: 'S' }, { face: '10', suit: 'H' }, { face: '10', suit: 'D' },
    { face: 'J', suit: 'C' }, { face: 'J', suit: 'S' }, { face: 'J', suit: 'H' }, { face: 'J', suit: 'D' },
    { face: 'Q', suit: 'C' }, { face: 'Q', suit: 'S' }, { face: 'Q', suit: 'H' }, { face: 'Q', suit: 'D' },
    { face: 'K', suit: 'C' }, { face: 'K', suit: 'S' }, { face: 'K', suit: 'H' }, { face: 'K', suit: 'D' },
    { face: 'A', suit: 'C' }, { face: 'A', suit: 'S' }, { face: 'A', suit: 'H' }, { face: 'A', suit: 'D' }
];

let dealerArr = [];
let playerArr = [];

const dealerHand = document.getElementById('dealer-hand');
const playerHand = document.getElementById('player-hand');

const dealButton = document.getElementById('deal-button');
dealButton.addEventListener('click', deal);

const hitButton = document.getElementById('hit-button');
hitButton.addEventListener('click', hit);

function deal() {
    getCard(dealerHand);
    getCard(dealerHand);
    getCard(playerHand);
    getCard(playerHand);
}

function hit() {
    const card = getCard();
    playerHand.appendChild(card);
    playerArr.push(card);
}

// grab random card and remove it from deck
function getCard(playerOrDealerHand) {
    const cardObj = deck[getRandomIndex(deck.length)];
    console.log(`${cardObj.face} of ${cardObj.suit}`);
    let updatedDeck = deck.filter(otherCardsObj => otherCardsObj != cardObj);
    deck = updatedDeck;
    const cardElement = document.createElement('img');
    cardElement.setAttribute('class', 'card');
    cardElement.setAttribute('src', `images/${cardObj.face}${cardObj.suit}.jpg`);
    playerOrDealerHand.appendChild(cardElement);
    console.log(`DECK LENGTH: ${deck.length}`);
    // return cardElement;
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
