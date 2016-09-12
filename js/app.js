function showDefine() {
  $('.main-content .content-wrap').children().hide();
  $('.define').fadeIn();
  $('.content-wrap').css({"display":"table"});
  $('#0').css({'font-size':'1.4em'});
  $('.main-content').css({"padding-left":"5%"});
  $('.main-content').css({"width":"60%"});
}

function showProjects() {
  $('.main-content .content-wrap').children().hide();
  $('.content-wrap').css({"display":"block"});
  $('.main-content').css({"padding-left":"0"});
  $('.main-content').css({"width":"50%"});
  $('.carousel').fadeIn();
  $('.slides').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      fade: true,
      infinite: true
    });
}

function createNav() {
  var content = ["Keith Underwood",
                "Projects"];
  content.forEach(function(i) {
    var liItem = $("<li><a id='"+content.indexOf(i) +
                    "' class='nav-link'>"+i+"</a></li>");
    $('.nav-list').append(liItem);
    liItem.click(function() {
      navRouter(liItem);
  });
  });
}

function navRouter(i) {
  if (i.text() === "Keith Underwood") {
    $('.nav-link').animate({'font-size':'1.2em'}, 50);
    $('#0').animate({'font-size':'1.4em'}, 100);
    showDefine();
} else {
    $('.nav-link').animate({'font-size':'1.2em'}, 50);
    $('#1').animate({'font-size':'1.4em'}, 100);
    showProjects();
  }
}

$(function() {

  createNav();
  showDefine();
});
