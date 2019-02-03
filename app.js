const $colorBox = $('#color-box');
const $myColorBox = $('#my-color-box');
const $colorChanger = $('#color-changer');

const createColorBoxes = () => {
  for (let i = 0; i < 200; i++) {
    const $box = $('<div>');
    $box.addClass('box');

    $colorBox.append($box);
  };
};


$(() => {

  createColorBoxes();

});
