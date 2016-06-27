function showDefine() {
  var define = "<p class='define'>I am <strong>Web Developer</strong> who is interested in technology, music, sports, games, outdoors, beer and discovering new things. I pride myself in <strong>self discipline</strong> and my thirst for <strong>efficiency</strong>. I also love <strong>sharing experiences</strong>, laughs, and smiles.</p>"
  $('.main-content .content-wrap').hide().html(define).fadeIn()
  $('#0').css({'font-size':'1.4em'})
  $('.main-content').css({"margin-left":"5%"})
}

function showProjects() {
  var projects = '<div class="project"><img src="img/flowers.jpg"></div><div class="project"><img src="img/flowers.jpg"></div><div class="project"><img src="img/flowers.jpg"></div><div class="project"><img src="img/flowers.jpg"></div>';
  $('.main-content .content-wrap').hide().html(projects).fadeIn()
  $('.main-content').css({"margin-left":"5%"})
}

function showContact() {
  var contact = '<form class="contact"><input id="name-text" type="text" name="name" value="" placeholder="Full name">    <input id="subject-text" type="text" name="name" value="" placeholder="Subject"><textarea id="body-text" name="name" rows="8" cols="40" placeholder="Your message"></textarea><input class="btn" onclick="sendMail(); return false" type="button" name="name" value="Send"></form>';
  $('.main-content .content-wrap').hide().html(contact).fadeIn()
  $('.main-content').css({"margin-left":"0"})
}

function createNav() {
  var content = ["Keith Underwood", "What I've done", "Contact me"];
  content.forEach(function(i) {
    var liItem = $("<li><a id='"+content.indexOf(i)+"' class='nav-link'>"+i+"</a></li>");
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
               + "&subject=" + $('#name-text').val() + $('#subject-text').val()
               + "&body=" + $('#body-text').val();
  window.location.href = link;
}

$(function() {
  createNav();
  showDefine();
});
