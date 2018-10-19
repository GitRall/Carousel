/*---Creating variables---*/
var myInterval = setInterval(mySlider, 5000); /*---Starting slider---*/
var slideContainer = document.querySelector('.slide-items');
var slideImgArr = document.querySelectorAll('.slide-img');
var prevButton = document.querySelector('.icon-btn-prev');
var nextButton = document.querySelector('.icon-btn-next');
var controlButtons = document.querySelectorAll('.control-btn');
var count = 0;

/*---Function for original slider---*/
function mySlider(){
  if(count >= slideImgArr.length - 1){
    count = -1;
  }
  count++;
  slideContainer.setAttribute('style', 'left: -' + count + '00%');
  return;
}

/*--Function for control buttons--*/
function controlSlide(e){
  var myTarget = e.target;
  /*---Reseting slider timer---*/
  clearInterval(myInterval);
  myInterval = setInterval(mySlider, 5000);

  /*---If previous button is pressed---*/
  if(myTarget === prevButton){
    if (count <= 0) {
      count = slideImgArr.length - 1;
      slideContainer.setAttribute('style', 'left: -' + count + '00%');
      return;
    }
    count--;
    slideContainer.setAttribute('style', 'left: -' + count + '00%');
  }
  /*---If next button is pressed---*/
  else if(myTarget === nextButton){
    if (count >= slideImgArr.length - 1) {
      count = 0;
      slideContainer.setAttribute('style', 'left: -' + count + '00%');
      return;
    }
    count++;
    slideContainer.setAttribute('style', 'left: -' + count + '00%');
  }
}

/*---Calling function for control buttons---*/
for (var i = 0; i < controlButtons.length; i++){
    controlButtons[i].addEventListener('click', controlSlide);
}
