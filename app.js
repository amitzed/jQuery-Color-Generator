const $colorBox = $('#color-box');
const $myColorBox = $('#my-color-box');
const $colorChanger = $('#color-changer');

const createColorBoxes = () => {
  $boxes = $('<div>').addClass('boxes');
  $colorBox.append($boxes);
};


$(() => {

  createColorBoxes();

});
