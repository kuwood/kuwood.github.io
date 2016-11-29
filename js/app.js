function showDefine() {
  $('.main-content .content-wrap').children().hide();
  $('.define').fadeIn();
  // $('.content-wrap').css({
  //   "display": "flex"
  // });
  $('.main-content').css({
    'padding': '0 5% 0 5%'
  })
}

function showProjects() {
  $('.main-content .content-wrap').children().hide();
  // $('.content-wrap').css({
  //   "display": "flex"
  // });
  $('.projects-wrap').fadeIn();
  $('.main-content').css({
    'padding': '0'
  })
}

// creates li for each nav item
function createNav() {
  var content = ["Keith Underwood", "Projects"];
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
    navAnimation('#0')
    showDefine();
  } else {
    navAnimation('#1')
    showProjects();
  }
}

function navAnimation(selection) {
  if (selection === '#0') {
    $('#0').animate({
      'font-size': '1.4em'
    }, 100)
    $('#1').animate({
      'font-size': '1.2em'
    }, 100)
  } else {
    $('#1').animate({
      'font-size': '1.4em'
    }, 100)
    $('#0').animate({
      'font-size': '1.2em'
    }, 100)
  }
}

$(function() {
  $('.tooltip').tooltipster({
    theme: 'tooltipster-light'
  });
  createNav();
  navAnimation('#0')
  showDefine();
  $('body').fadeIn().css({
    'display': 'block'
  })
});
