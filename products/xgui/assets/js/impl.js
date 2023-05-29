const offset = 0;

$('.pricing-title-item1').isInViewport(function (status) {
  if (status === 'entered') {
    $(this).addClass('pricing-title-item1-anim-start')
  }

  if (status === 'leaved') {
    $(this).removeClass('pricing-title-item1-anim-start')
  }
}, offset)

/*$('.pricing-title-item2').isInViewport(function (status) {
  if (status === 'entered') {
    $(this).addClass('pricing-title-item2-anim-start')
  }

  if (status === 'leaved') {
    $(this).removeClass('pricing-title-item2-anim-start')
  }
}, offset)

$('.pricing-title-item3').isInViewport(function (status) {
  if (status === 'entered') {
    $(this).addClass('pricing-title-item3-anim-start')
  }

  if (status === 'leaved') {
    $(this).removeClass('pricing-title-item3-anim-start')
  }
}, offset)*/

$('.pricing-1').isInViewport(function (status) {
  if (status === 'entered') {
    $(this).addClass('pricing-table-anim-start')
  }

  if (status === 'leaved') {
    $(this).removeClass('pricing-table-anim-start')
  }
}, offset)

$('.pricing-2').isInViewport(function (status) {
  if (status === 'entered') {
    $(this).addClass('pricing-table-anim-start')
  }

  if (status === 'leaved') {
    $(this).removeClass('pricing-table-anim-start')
  }
}, offset)