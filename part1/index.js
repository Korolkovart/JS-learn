const DomElement = function(selector, height, width, bg, fontSize, txt){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.txt = txt;
};

DomElement.prototype.create = function(){

  if(this.selector.slice(0,1) === '.' ){
    const elemDiv =  document.createElement('div');
    this.selector = this.selector.replace('.','');
    elemDiv.classList.add(this.selector);
    document.body.append(elemDiv);
    elemDiv.style.cssText = `height: ${this.height};
      width: ${this.width};
      background: ${this.bg};
      font-size: ${this.fontSize}`
      elemDiv.innerHTML = this.txt;
  } else if (this.selector.slice(0,1) === '#'){
    const elemParagraph = document.createElement('p');
    this.selector = this.selector.replace('#','');
    elemParagraph.id = this.selector;
    document.body.append(elemParagraph)
    elemParagraph.style.cssText = `height: ${this.height};
      width: ${this.width};
      background: ${this.bg};
      font-size: ${this.fontSize}`
      elemParagraph.innerHTML = this.txt;

  }
}

const exp = new DomElement('.hook', 70+'px', 200+'px', 'tomato', 'medium', 'Тут div с классом')
const exp1 = new DomElement('#hook', 50+'px', 200+'px', 'aqua', 'larger', 'А тут параграф с id')

exp.create()
exp1.create()

console.log(exp);
console.log(exp1);

