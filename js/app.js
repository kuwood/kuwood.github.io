function showDefine() {
  $('.main-content .content-wrap').children().hide();
  $('#define').fadeIn();
  $('.main-content').addClass("align-center");
  $('.main-content').removeClass("clear-padding");
}

// creates li for each nav item
function createNav() {
  var content = ["Keith Underwood"];
  content.forEach(function(i) {
    var liItem = $("<li><a id='" + content.indexOf(i) +
      "' class='nav-link'>" + i + "</a></li>");
    $('.nav-list').append(liItem);
    liItem.click(function() {
      navRouter(liItem);
    });
  });
}

// animates and handles show/hide of content
function navRouter(i) {
  if (i.text() === "Keith Underwood") {
    navAnimation('#0');
    showDefine();
  }
}

function navAnimation(selection) {
  if (selection === '#0') {
    $('#0').addClass('nav-link-open');
    $('#1, #2').removeClass('nav-link-open');
  }
}

$(function() {
  var year = new Date().getFullYear()
  document.querySelector('footer p').innerHTML = '&copy; Keith Underwood ' + year
  createNav();
  navAnimation('#0');
  showDefine();
  $('body').fadeIn().css({
    'display': 'block'
  });
});
