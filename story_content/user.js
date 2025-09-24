window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  let fullscreen;
const slide = document.querySelector('.slide-transition-container');
const container = slide.querySelector('.slide');
let fsBtn = document.createElement('button');
fsBtn.innerHTML = 'Go Fullscreen';

// STYLES:
const css = `
    .fs-button {
        position: absolute; 
        top: 20px; 
        right: 20px; 
        z-index: 11; 
        border: 1px solid #fff; 
        border-radius: 5px; 
        font-size: 1.5rem; 
        padding: 0.5rem 0.7em; 
        background-color: rgba(0,0,0,0.2); 
        color: #fff; 
        font-family: Verdana, Geneva, Tahoma, sans-serif; 
        -webkit-font-smoothing: antialiased; 
        cursor: pointer; 
        transition: all .3s;
        width: max-content;
    }

    .fs-button:hover {
        background-color: rgba(255,255,255,0.2);
        color: #000;
    }

.wrapper {
position: relative;
z-index: 0;
}

    .slide-transition-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slide-transition-container .slide {
        position: relative;
        left: unset;
        top: unset;
    }

    .slide-layer {
        position: absolute;
        top: 0;
        left: unset;
        margin: auto;
    }

`;
const style = document.createElement('style');
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
document.querySelector('head').appendChild(style);
fsBtn.classList.add('fs-button');

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // if we are in Fullscreen mode, the text should say Exit Fullscreen
        fsBtn.innerHTML = 'Exit Fullscreen';
        slide.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        // if we are not in Fullscreen mode, the text should say Go Fullscreen
fsBtn.innerHTML = 'Go Fullscreen'; 
          document.exitFullscreen();
      }
    }
  }

// this class lets us know the button has been added so that if we revisit this slide we don't get a bunch of buttons
fsBtn.classList.add('added'); 

// if we don't already have a button on the page, go ahead and add it:
if (!document.body.querySelector('.added')) { 
	slide.appendChild(fsBtn); 
    fsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        toggleFullScreen();
    });
}

const player = GetPlayer();

player.SetVar("slideBg", "#B5E6F8");

const bgColor = player.GetVar("slideBg");

console.log(bgColor);

document.body.style.backgroundColor = bgColor;

}

window.Script2 = function()
{
  let fullscreen;
const slide = document.querySelector('.slide-transition-container');
const container = slide.querySelector('.slide');
let fsBtn = document.createElement('button');
fsBtn.innerHTML = 'Go Fullscreen';

// STYLES:
const css = `
    .fs-button {
        position: absolute; 
        top: 20px; 
        right: 20px; 
        z-index: 11; 
        border: 1px solid #fff; 
        border-radius: 5px; 
        font-size: 1.5rem; 
        padding: 0.5rem 0.7em; 
        background-color: rgba(0,0,0,0.2); 
        color: #fff; 
        font-family: Verdana, Geneva, Tahoma, sans-serif; 
        -webkit-font-smoothing: antialiased; 
        cursor: pointer; 
        transition: all .3s;
        width: max-content;
    }

    .fs-button:hover {
        background-color: rgba(255,255,255,0.2);
        color: #000;
    }

.wrapper {
position: relative;
z-index: 0;
}

    .slide-transition-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slide-transition-container .slide {
        position: relative;
        left: unset;
        top: unset;
    }

    .slide-layer {
        position: absolute;
        top: 0;
        left: unset;
        margin: auto;
    }

`;
const style = document.createElement('style');
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
document.querySelector('head').appendChild(style);
fsBtn.classList.add('fs-button');

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // if we are in Fullscreen mode, the text should say Exit Fullscreen
        fsBtn.innerHTML = 'Exit Fullscreen';
        slide.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        // if we are not in Fullscreen mode, the text should say Go Fullscreen
fsBtn.innerHTML = 'Go Fullscreen'; 
          document.exitFullscreen();
      }
    }
  }

// this class lets us know the button has been added so that if we revisit this slide we don't get a bunch of buttons
fsBtn.classList.add('added'); 

// if we don't already have a button on the page, go ahead and add it:
if (!document.body.querySelector('.added')) { 
	slide.appendChild(fsBtn); 
    fsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        toggleFullScreen();
    });
}
const player = GetPlayer();

player.SetVar("slideBg", "#FAC7D2");

const bgColor = player.GetVar("slideBg");

console.log(bgColor);

document.body.style.backgroundColor = bgColor;
}

window.Script3 = function()
{
  let fullscreen;
const slide = document.querySelector('.slide-transition-container');
const container = slide.querySelector('.slide');
let fsBtn = document.createElement('button');
fsBtn.innerHTML = 'Go Fullscreen';

// STYLES:
const css = `
    .fs-button {
        position: absolute; 
        top: 20px; 
        right: 20px; 
        z-index: 11; 
        border: 1px solid #fff; 
        border-radius: 5px; 
        font-size: 1.5rem; 
        padding: 0.5rem 0.7em; 
        background-color: rgba(0,0,0,0.2); 
        color: #fff; 
        font-family: Verdana, Geneva, Tahoma, sans-serif; 
        -webkit-font-smoothing: antialiased; 
        cursor: pointer; 
        transition: all .3s;
        width: max-content;
    }

    .fs-button:hover {
        background-color: rgba(255,255,255,0.2);
        color: #000;
    }

.wrapper {
position: relative;
z-index: 0;
}

    .slide-transition-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .slide-transition-container .slide {
        position: relative;
        left: unset;
        top: unset;
    }

    .slide-layer {
        position: absolute;
        top: 0;
        left: unset;
        margin: auto;
    }

`;
const style = document.createElement('style');
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
document.querySelector('head').appendChild(style);
fsBtn.classList.add('fs-button');

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // if we are in Fullscreen mode, the text should say Exit Fullscreen
        fsBtn.innerHTML = 'Exit Fullscreen';
        slide.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        // if we are not in Fullscreen mode, the text should say Go Fullscreen
fsBtn.innerHTML = 'Go Fullscreen'; 
          document.exitFullscreen();
      }
    }
  }

// this class lets us know the button has been added so that if we revisit this slide we don't get a bunch of buttons
fsBtn.classList.add('added'); 

// if we don't already have a button on the page, go ahead and add it:
if (!document.body.querySelector('.added')) { 
	slide.appendChild(fsBtn); 
    fsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        toggleFullScreen();
    });
}

const player = GetPlayer();

player.SetVar("slideBg", "#FDFEB3");

const bgColor = player.GetVar("slideBg");

console.log(bgColor);

document.body.style.backgroundColor = bgColor;
}

};
