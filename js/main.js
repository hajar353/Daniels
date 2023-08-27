const topSpaceFormSec =$('#About').offset().top;
const navHeight=$('nav').outerHeight();

$(window).scroll(function(){
  if(  $(window).scrollTop() > topSpaceFormSec-navHeight){
    // $('nav').css('backgroundColor','white')
    $('nav  a').css('color','white')
    $('nav').css('backgroundColor','black')

  }
  else{
    $('nav  a').css('color','white')
    $('nav').css('backgroundColor','transparent')
  }
})