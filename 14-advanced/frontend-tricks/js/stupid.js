$(document).ready(() => {
  // Parallax //////////////////////////////////////////////////////////////////
  const $bill = $('.bill-js'); // Cacheing
  const $body = $('body');
  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    $bill.css('background-position-y', -scrollTop / 5);
    $body.css('background-position-y', -scrollTop / 3);
  });

  // Bubbles ///////////////////////////////////////////////////////////////////
  $(window).on('mousemove', (e) => {
    const { pageX:x, pageY:y } = e; // Destructuring with renaming.

    const size = Math.random() * 10;

    const $bubble = $('<div class="bubble" />').css({
      left: x,
      top: y,
      width: size + 'em',
      height: size + 'em'
    });

    $bubble.appendTo('body');

    $bubble.animate({top: -200}, 2500, () => {
      $bubble.remove();
    });
  })
});
