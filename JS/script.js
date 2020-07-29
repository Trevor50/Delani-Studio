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
 $(document).ready(function () {
  $('#img1').mouseenter(function () {
    $('#job-1-title').filter('#job-1-title').show("slow");
}).mouseleave(function () {
    $('#job-1-title').hide("slow");
});


$('#img2').mouseenter(function () {
    $('#job-2-title').filter('#job-2-title').show("slow");
}).mouseleave(function () {
    $('#job-2-title').hide("slow");
});

$('#img3').mouseenter(function () {
    $('#job-3-title').filter('#job-3-title').show("slow");
}).mouseleave(function () {
    $('#job-3-title').hide("slow");
});


$('#img4').mouseenter(function () {
    $('#job-4-title').filter('#job-4-title').show("slow");
}).mouseleave(function () {
    $('#job-4-title').hide("slow");
});

$('#img5').mouseenter(function () {
    $('#job-5-title').filter('#job-5-title').show("slow");
}).mouseleave(function () {
    $('#job-5-title').hide("slow");
});


$('#img6').mouseenter(function () {
    $('#job-6-title').filter('#job-6-title').show("slow");
}).mouseleave(function () {
    $('#job-6-title').hide("slow");
});

$('#img7').mouseenter(function () {
    $('#job-7-title').filter('#job-7-title').show("slow");
}).mouseleave(function () {
    $('#job-7-title').hide("slow");
});
$('#img8').mouseenter(function () {
    $('#job-8-title').filter('#job-8-title').show("slow");
}).mouseleave(function () {
    $('#job-8-title').hide("slow");
});
});