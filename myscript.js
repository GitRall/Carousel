/*---Creating variables---*/
var myInterval = setInterval(mySlider, 5000); /*---Starting slider---*/
var slideContainer = document.querySelector('.slide-items');
var slideImgArr = document.querySelectorAll('.slide-img');
var prevButton = document.querySelector('.prev-btn');
var nextButton = document.querySelector('.next-btn');
var controlButtons = document.querySelectorAll('.control-btn');
var indicatorItems = document.querySelectorAll('.indicator-item');
var count = 0;

/*---Function for original slider---*/
function mySlider(){
  if(count >= slideImgArr.length - 1){
    count = -1;
  }
  count++;
  indicatorFunction()
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
      indicatorFunction()
      slideContainer.setAttribute('style', 'left: -' + count + '00%');
      return;
    }
    count--;
    indicatorFunction()
    slideContainer.setAttribute('style', 'left: -' + count + '00%');
  }
  /*---If next button is pressed---*/
  else if(myTarget === nextButton){
    if (count >= slideImgArr.length - 1) {
      count = 0;
      indicatorFunction()
      slideContainer.setAttribute('style', 'left: -' + count + '00%');
      return;
    }
    count++;
    indicatorFunction()
    slideContainer.setAttribute('style', 'left: -' + count + '00%');
  }
}

/*---Indicator function---*/
function indicatorFunction(){
  for (var k = 0; k < indicatorItems.length; k++){
    indicatorItems[k].setAttribute('class', 'indicator-item')
    indicatorItems[count].setAttribute('class', 'indicator-item active')
  }
}

/*---Indicator click event---*/
function indicatorClick(e){
  var myTarget = e.target;
  clearInterval(myInterval);
  myInterval = setInterval(mySlider, 5000);
  for (var k = 0; k < indicatorItems.length; k++){
    indicatorItems[k].setAttribute('class', 'indicator-item');
    myTarget.setAttribute('class', 'indicator-item active');
  }
  count = myTarget.dataset.slide;
  slideContainer.setAttribute('style', 'left: -' + count + '00%');
}

/*---Calling function for control buttons---*/
for (var i = 0; i < controlButtons.length; i++){
    controlButtons[i].addEventListener('click', controlSlide);
}
for (var j = 0; j < indicatorItems.length; j++){
  indicatorItems[j].addEventListener('click', indicatorClick);
}
