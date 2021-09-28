class Coin {
  
  constructor(num, x, y, w) {
    this.num = num;
    this.x = x;
    this.y = y;
    this.w = w;
    this.highlighted = false;
    this.showCost = false;
    this.cost = 0;
  }
  
  update() {
    //rect(this.x-40, this.y-40, this.w, this.w);
    
    if (this.highlighted) {
      strokeWeight(10);
      stroke('red');
      ellipse(this.x, this.y, this.w+5, this.w+5);
      strokeWeight(1);
      stroke('black');
    }
    
    if (this.showCost) {
      textAlign(CENTER,CENTER);
      strokeWeight(0);
      text('$'+this.cost, this.x-this.w/2+3, this.y+this.w/2+2, this.w, this.w);
      strokeWeight(1);
    }
    
    ellipse(this.x, this.y, this.w, this.w);
    textAlign(CENTER, CENTER);
    text(this.num, this.x-this.w/2+3, this.y-this.w/2+2, this.w, this.w);
    
  }
  
  setNum(num) {
    this.num = num;
  }
  
  highlight() {
    this.highlighted = true;
  }
  
  noHighlight() {
    this.highlighted = false;
  }
  
  setCost(cost) {
    this.cost = cost;
    this.showCost = true;
  }
  
  clearCost() {
    this.showCost = false;
  }
  
  isMouseClose() {
    let mouse = new p5.Vector(mouseX-this.x,mouseY-this.y);
    return mouse.mag() < this.w/2;
  }
  
  
  
}
