const $colorBox = $('#color-box');
const $myColorBox = $('#my-color-box');
const $colorChanger = $('#color-changer');

const createColorBoxes = (numOfBoxes) => {
  for (let i = 0; i < numOfBoxes; i++) {
    const $box = $('<div>');
    $box.addClass('box');

    const randomColor = () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      return "rgb("+ red +", "+ green +", "+ blue +")";
    };

    $colorBox.append($box);
  };
};

$(() => {

  createColorBoxes(200);

});
