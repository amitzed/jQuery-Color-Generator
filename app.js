const $colorBox = $('#color-box');
const $myColorBox = $('#my-color-box');
const $colorChanger = $('#color-changer');

const createColorBoxes = (numOfBoxes) => {
  $colorBox.empty();
  for (let i = 0; i < numOfBoxes; i++) {
    const $box = $('<div>');
    $box.addClass('box');

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    $colorBox.append($box);
  };
};

$(() => {

  createColorBoxes(200);

});
