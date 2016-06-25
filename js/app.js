$(function() {
  showDefine();
  createNav();
});

function createNav() {
  var content = ["Who I am", "What I've done", "Contact me"];
  content.forEach(function(i) {
    var liItem = $("<li><a>"+i+"</a></li>");
    $('#nav-list').append(liItem);
    liItem.click(function() {
      navRouter(liItem);
    });

  });
};

function showDefine() {
  $('.project').hide();
  $('.define').show();
}

function showProjects() {
  $('.define').hide();
  $('.project').show();
}

function showContact() {
  console.log("contacts placeholder");
}

function navRouter(i) {
  if(i.text() === "Who I am") {
    showDefine();
  } else if (i.text() === "What I've done") {
    showProjects();
  } else {
    showContact();
  };
};
