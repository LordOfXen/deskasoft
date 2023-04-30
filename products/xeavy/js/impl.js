$( "body" ).mousemove(function( event ) {
  var x = event.pageX;
  var y = event.pageY;

  var ownercontaineroffset = $('#xeavygear-eyeball1').parent().parent().parent().parent().parent().parent().parent().parent().offset();
  var eyeball1pos = $('#xeavygear-eyeball1').offset();
  var eyeball2pos = $('#xeavygear-eyeball2').offset();

  var eye1_localx = (x - eyeball1pos.left) / 300 + ($('#xeavygear-eyeball1').parent().width() / 2); 
  var eye1_localy = ((y - eyeball1pos.top) / 100 + ($('#xeavygear-eyeball1').parent().height() / 2)) - 13;

  var eye2_localx = (x - eyeball2pos.left) / 300 + ($('#xeavygear-eyeball2').parent().width() / 2); 
  var eye2_localy = ((y - eyeball2pos.top) / 100 + ($('#xeavygear-eyeball2').parent().height() / 2)) - 13;

  $('#xeavygear-eyeball1').css({'top' : eye1_localy + 'px', 'left' : eye1_localx + 'px'});
  $('#xeavygear-eyeball2').css({'top' : eye2_localy + 'px', 'left' : eye2_localx + 'px'});
});