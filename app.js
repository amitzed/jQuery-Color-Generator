const $colorBox = $('#color-box');
const $myColorBox = $('#my-color-box');
const $colorChanger = $('#color-changerBtn');

const createColorBoxes = () => {
  $colorBox.empty();
  for (let i = 0; i < 112; i++) {
    const $box = $('<div>');
    $box.addClass('box');

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $box.css('background-color', randomColor);
    // $box.on('click', addColors);
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



$(() => {

  createColorBoxes();

});
