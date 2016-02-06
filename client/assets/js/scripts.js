console.log('script is loaded');

// function loadMoreScroll(){
//   var nearToBottom = 300;
//   if ($('.bordio-section').scrollTop() >=
//     $('.bordio-section').height() - nearToBottom && $(window).scrollTop() === $(window).height()) {
//       $('.load').trigger("click");
//     console.log('clicked');
//   }
// }

function linkTo(){
  $('body').on('click', '.clickable', function(){
    var link = $(this).attr('id');
    window.location=link;
  });
}

// function addColor(){
//   $(".bordio-card").each(function(){
//     // Red Yellow Green Blue
//     var colors = ['#ea6b61', '#f8c451', '#b3ca1d', '#62c1e6'];
//     var randomColor = colors[Math.floor(Math.random() * colors.length)];
//     $(this).css('border-bottom', '15px solid' + randomColor);
//   });
// }

// function smallerTiles(){
//   $('body').on('click', 'img.tile', function(){
//     var height = $('.bordio-card').height();
//     var width = $('.bordio-card').width();
//   });
// }

$(function(){

  linkTo();

});
