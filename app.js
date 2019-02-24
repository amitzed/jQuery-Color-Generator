const $colorBox = $('#color-box');
const $myColorBox = $('#my-color-box');
const $colorChanger = $('#color-changerBtn');

const createColorBoxes = () => {
  $colorBox.empty();
  for (let i = 0; i < 400; i++) {
    const $box = $('<div>');
    $box.addClass('box');

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $box.css('background-color', randomColor);
    $box.on('click', addColors);
    $box.on('mouseover', addColors);

    $colorBox.append($box);
  }
};

const addColors = (event) => {
  const theColor = $(event.currentTarget).css('background-color');

  const $box = $('<div>');
  $box.addClass('box');
  $box.css('background-color', theColor);

  $myColorBox.append($box);
};

$colorChanger.on('click', createColorBoxes);

// This Changes Body background Color
const changeBodyColorRandom = (event) => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return "rgb("+ red +", "+ green +", "+ blue +")";
};
// End


const toggleMyBoardBG = (event) => {
  $('#my-color-box').toggleClass('myBoardBGToggle');
};
// End

// Document Ready Function *******************
$(() => {

  createColorBoxes();

 // This Changes HTML background Color
  $('html').on('click', (event) => {
    $(event.currentTarget).css('background', changeBodyColorRandom);
  });
  //End
  // This Changes BODY background Color
   $('body').on('click', (event) => {
     $(event.currentTarget).css('background', changeBodyColorRandom);
   });
   //End

   // Background Board Color Changer on button Click
  const $bgClicker = $('#bgClicker');
    $bgClicker.on('click', toggleMyBoardBG);
    // End

});
// End Document Ready Function *************
