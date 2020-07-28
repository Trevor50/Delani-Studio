$(document).ready(function () {
  $("#des-p").toggle();
  $("#des-fig").click(function () {
    $("#des-img").toggle(10, function () {
      $("#des-p").toggle(10);
    });
  })
});
$(document).ready(function () {
 $("#dev-p").toggle();
 $("#dev-fig").click(function () {
    $("#dev-img").toggle(10, function () {
      $("#dev-p").toggle(10);
    });
  })
});
$(document).ready(function () {
  $("#pro-p").toggle();
  $("#pro-fig").click(function () {
     $("#pro-img").toggle(10, function () {
       $("#pro-p").toggle(10);
     });
   })
 });
 