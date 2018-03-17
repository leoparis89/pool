import 'p5';

window.setup = function () {
  console.log('Setup');
};

window.draw = function () {
  console.log('Draw');
  ellipse(50, 50, 80, 80);
};
