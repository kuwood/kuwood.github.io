function showDefine() {
  $('.main-content .content-wrap').children().hide();
  $('#define').fadeIn();
  $('.main-content').css({
    'padding': '0 5% 0 5%',
    'align-items': 'center'
  })
  $('#projects-button').click(function() {
    navAnimation('#1');
    showProjects();
  })
}

function showProjects() {
  $('.main-content .content-wrap').children().hide();
  $('.projects-wrap').fadeIn();
  $('.main-content').css({
    'padding': '0',
    'align-items': 'center'
  })
}

function showAbout() {
  $('.main-content .content-wrap').children().hide();
  $('#about').fadeIn();
  $('.main-content').css({
    'padding': '0',
  });
}

// creates li for each nav item
function createNav() {
  var content = ["Keith Underwood", "Projects", "About"];
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
  } else if (i.text() === "Projects") {
    navAnimation('#1');
    showProjects();
  } else {
    navAnimation('#2');
    showAbout();
  }
}

function navAnimation(selection) {
  if (selection === '#0') {
    $('#0').addClass('nav-link-open')
    $('#1, #2').removeClass('nav-link-open')
  } else if (selection === '#1') {
    $('#1').addClass('nav-link-open')
    $('#0, #2').removeClass('nav-link-open')
  } else {
    $('#2').addClass('nav-link-open')
    $('#0, #1').removeClass('nav-link-open')
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
