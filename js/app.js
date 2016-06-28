function showDefine() {
  $('.main-content .content-wrap').children().hide();
  $('.define').fadeIn();
  $('#0').css({'font-size':'1.4em'})
  $('.main-content').css({"margin-left":"5%"})
}

function showProjects() {
  $('.main-content .content-wrap').children().hide();
  $('.project').fadeIn();
  $('.main-content').css({"margin-left":"5%"})
}

function showContact() {
  $('.main-content .content-wrap').children().hide();
  $('.contact').fadeIn();
  $('.main-content').css({"margin-left":"0"})
}

function createNav() {
  var content = ["Keith Underwood",
                "What I've done",
                "Contact me"];
  content.forEach(function(i) {
    var liItem = $("<li><a id='"+content.indexOf(i)
                 +"' class='nav-link'>"+i+"</a></li>");
    $('#nav-list').append(liItem);
    liItem.click(function() {
      navRouter(liItem);
    });
  });
};

function navRouter(i) {
  if(i.text() === "Keith Underwood") {
    $('.nav-link').animate({'font-size':'1.2em'}, 50);
    $('#0').animate({'font-size':'1.4em'}, 100)
    showDefine();
  } else if (i.text() === "What I've done") {
    $('.nav-link').animate({'font-size':'1.2em'}, 50);
    $('#1').animate({'font-size':'1.4em'}, 100)
    showProjects();
  } else {
    $('.nav-link').animate({'font-size':'1.2em'}, 50);
    $('#2').animate({'font-size':'1.4em'}, 100)
    showContact();
  };
};

function sendMail() {
  var link = "mailto:keithunderwood510@gmail.com"
               + "&subject=" + $('#name-text').val()
               + $('#subject-text').val()
               + "&body=" + $('#body-text').val();
  window.location.href = link;
}

$(function() {
  createNav();
  showDefine();
});
