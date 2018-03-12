const $ = window.$;

$(window).on('load scroll', () => {
  const block = $('.js-total');

  if (!block.length) {
    return;
  }

  const parentOffset = block.parent().offset().top;
  const blockHeight = block.outerHeight();
  const parentHeight = block.parent().height();

  if (blockHeight + 10 >= parentHeight) {
    return;
  }

  const topBreakpoint = $(window).scrollTop() - parentOffset >= 0;
  const bottomBreakpoint = $(window).scrollTop() >= (parentOffset + parentHeight) - blockHeight;

  if (bottomBreakpoint) {
    block.removeClass('is-fixed').addClass('is-attached');
  } else if (topBreakpoint) {
    block.removeClass('is-attached').addClass('is-fixed');
  } else {
    block.removeClass('is-fixed is-attached');
  }
});


$(document).on('click', '.js-total-promolink', function (e) {
  e.preventDefault();

  const promoblock = $('.js-total-promoblock');

  if (!promoblock.length) {
    return;
  }

  $(this).parent().hide();
  promoblock.fadeIn(window.globalOptions.animationDuration);
});