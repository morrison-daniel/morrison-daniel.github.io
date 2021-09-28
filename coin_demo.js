const coinArray = [];
let numCoins = 8;
const w = 80;
const gap = 20;
let cost = 0;
let selected = false;
let coinSelected = -1;

let resetButton;
let moreButton;
let lessButton;

function setup() {
    createCanvas(windowWidth, windowHeight);
    const start = width/2-(numCoins-1)*(w + gap)/2;
    
    for(i = 0; i < numCoins; i++) {
      coinArray[i] = new Coin(i+1, start+i*(w+gap), height/2, w);
    }
    
    resetButton = createButton('Reset');
    resetButton.position(30, height-100);
    resetButton.mousePressed(reset);
    
    moreButton = createButton('More Coins');
    moreButton.position(200, height-100);
    moreButton.mousePressed(more);
    
    lessButton = createButton('Fewer Coins');
    lessButton.position(100, height-100);
    lessButton.mousePressed(less);
}

function draw() {
     background('white');
  
    textAlign(LEFT, TOP);
    textSize(64);
    text('Cost: $' + cost, 50, 50);
    
    textSize(32);
    for(i = 0; i < numCoins; i++) {
      coinArray[i].update();
    }
}

function more() {
  numCoins += 1;
  reset();
}

function less() {
  if(numCoins > 1) {
    numCoins -= 1;
  }
  reset();
}

function reset() {
  cost = 0;
  selected = false;
  setup();
}

function clearInfo() {
  selected = false;
          
  for(i = 0; i < numCoins; i++) {
    coinArray[i].clearCost();
    coinArray[i].noHighlight();
  }
}

function mouseClicked() {
  let clickedOnCoin = false;
  for(i = 0; i < numCoins; i++) {
     
      if(coinArray[i].isMouseClose()) {
        clickedOnCoin = true;
        
        if (selected) {
          if(coinArray[i].showCost) {
            selected = false;
            cost += coinArray[i].cost;
            temp = coinArray[coinSelected].num;
            coinArray[coinSelected].setNum(coinArray[i].num);
            coinArray[i].setNum(temp);
            
            for(i = 0; i < numCoins; i++) {
              coinArray[i].clearCost();
              coinArray[i].noHighlight();
            }
          }
          
        } else {
          selected = true;
          coinSelected = i;
          coinArray[i].highlight();
          
          if (i+1 < numCoins) {
            coinArray[i+1].setCost(1);
          }
          if (i-1 >= 0) {
            coinArray[i-1].setCost(1);
          }
          if (i+4 < numCoins) {
            coinArray[i+4].setCost(0);
          }
          if (i-4 >= 0) {
            coinArray[i-4].setCost(0);
          }
        }
      }
    }
    
  if(!clickedOnCoin) {
    clearInfo();
  }
}
