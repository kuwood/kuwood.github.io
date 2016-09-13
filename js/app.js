function showDefine() {
  $('.main-content .content-wrap').children().hide();
  $('.define').fadeIn();
  $('.content-wrap').css({"display":"flex"});
  $('#0').css({'font-size':'1.4em'});
}

function showProjects() {
  $('.main-content .content-wrap').children().hide();
  $('.content-wrap').css({"display":"flex"});
  $('.projects-wrap').fadeIn();
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
