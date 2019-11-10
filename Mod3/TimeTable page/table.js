Section00 = { 
  Monday:[[
  {       index: [3,4,6,7,8],
          code: ['151','131','171','171','143'],
          type: ['LECT','TUT','TUT','LECT','LECT']
  }]],
 Tuesday:[[
  { index: [ 1, 2, 3, 8, 9 ],
    code: [ '151', '143', '143', '111', '171' ],
    type: [ 'LECT', 'LAB', 'LAB', 'LECT', 'LECT' ]
  }]],
 Wednesday:[[
  { index: [ 2, 3, 7, 8, 9 ],
    code: [ '151', '100', '100', '100', '100' ],
    type: [ 'LECT', 'LECT', 'LAB', 'LAB', 'LAB' ]
  }]],
 Thursday:[[
  { index: [ 2, 3, 7, 8, 9 ],
    code: [ '100', '100', '111', '171', '143' ],
    type: [ 'LECT', 'STUDIO', 'LECT', 'LECT', 'LECT' ]
  }]],
 Friday:[[
  { index: [ 1, 2, 3, 7, 8, 9 ],
    code: [ '151', '131', '111', '151', '151', '111' ],
    type: [ 'LECT', 'LECT', 'TUT', 'LAB', 'LAB', 'LECT' ]
  }]] 
}

var n=0;
for(var i=0;i<85;i++){
 if(i%17==0 && i!=0){
   console.log("setting n to zero");
   n=0;
 }
 if(i<17 && i==Section00.Monday[0][0].index[n]){
 
     $("#mondayFunday").append("<div class=\"timeSlot lecture\"> APSC " + Section00.Monday[0][0].code[n] + " " + Section00.Monday[0][0].type[n] + " </div>");
     n++;
 }  
 else if(i>=17 && i<34 && (i%17)==Section00.Tuesday[0][0].index[n]){
   $("#tuesdayFunday").append("<div class=\"timeSlot lecture\"> APSC " + Section00.Tuesday[0][0].code[n] + " " + Section00.Tuesday[0][0].type[n] + " </div>");
   n++;
 }
 else if(i>=34&&i<51 && (i%17)==Section00.Wednesday[0][0].index[n]){
 
   $("#wednesdayFunday").append("<div class=\"timeSlot lecture\"> APSC " + Section00.Wednesday[0][0].code[n] + " " + Section00.Wednesday[0][0].type[n] +  " </div>");
   n++;
 }
 else if(i>=51&&i<68 && (i%17)==Section00.Thursday[0][0].index[n]){
   $("#thursdayFunday").append("<div class=\"timeSlot lecture\"> APSC " + Section00.Thursday[0][0].code[n] + " " + Section00.Thursday[0][0].type[n] + " </div>");
   n++;
 }
 else if(i>=68&&i<85 && (i%17)==Section00.Friday[0][0].index[n]){
   $("#fridayFunday").append("<div class=\"timeSlot lecture\"> APSC " + Section00.Friday[0][0].code[n] + " " + Section00.Friday[0][0].type[n] + " </div>");
   n++;
 }
 else if(i<17){
   $("#mondayFunday").append("<div class=\"timeSlot\"></div>");
 }
 else if(i>=17&&i<34){
   $("#tuesdayFunday").append("<div class=\"timeSlot\"></div>");
 }
 else if(i>=34&&i<51){
   $("#wednesdayFunday").append("<div class=\"timeSlot\"></div>");
 }
 else if(i>=51&&i<68){
   $("#thursdayFunday").append("<div class=\"timeSlot\"></div>");
 }
 // else(i>68&&i<85){
 else{
   $("#fridayFunday").append("<div class=\"timeSlot\"></div>");
 }
}
// for(var i=0;i<17;i++){

//   if(i==Section00.Monday.start[n]){
 
//       $("#mondayFunday").append("<div class=\"timeSlot lecture\"> APSC " + Section00.Monday.code[n] + " </div>")
//       n++;
//     }
//   else{
//     $("#mondayFunday").append("<div class=\"timeSlot\"></div>")

//   }
// }

// var divvy = document.createElement("div");
// var node = document.createTextNode("APSC151");
// divvy.appendChild(node);
// $("#timeColumn").append(divvy);



//Give draggable function to all buttons
  $("button").draggable({cancel:false ,cursor: "crosshair", revert: true});


	//Customize events(create new event buttons by typing text in the input box)
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("#list").append("<div class=\"preset\"><button class=\"add custom\">" + todoText + "<span class=\"delete\"><i class=\"fas fa-times\"></i></span></button></div>");
    $("button").draggable({cancel:false ,cursor: "crosshair", revert: true});
  }
});
	
	//Delete button function in the event list
$("#list").on("click", "span", function(event){
$(this).parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});

  //Delete button function in the timetable
$("#timetable").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

  //Hide and show input box 
// $(".fa-plus").click(function(){
// 	$("input[type='text']").fadeToggle();
//   if($(this).attr("title") == "Hide New Events"){
//     $(this).attr("title","Add New Events");
//   }
//   else if($(this).attr("title") == "Add New Events"){
//     $(this).attr("title","Hide New Events");
//   }
// });

	

  //Button Drop function for timetable and event list
  $(".timeSlot").not('.lecture').droppable({ accept: ".add",
  drop: function(event, ui) {
      if ($(ui.draggable).hasClass('copy')){
          $(this).removeClass("border").removeClass("over");
          var dropped = ui.draggable;
          var droppedOn = $(this);
          $(dropped).css({top: 0,left: 0}).appendTo(droppedOn);
      } else {
          $(this).removeClass("border").removeClass("over");
          var dropped = ui.draggable;
          var droppedOn = $(this);
          var newBtn = $(dropped).clone();
          $(dropped).draggable("option", "revertDuration", 0);
          $(newBtn).addClass('copy');
          $(newBtn).css({top: 0,left: 0}).appendTo(droppedOn);
          setTimeout(function(){
              $(dropped).draggable("option", "revertDuration", 500);
          }, 100);
          $("button").draggable({cancel:false ,cursor: "crosshair", revert: true});
      }
  }, 
  over: function(event, elem) {
      $(this).addClass("over");
      console.log("over");
  },
  out: function(event, elem) {
      $(this).removeClass("over");
  }
});

$("document").ready(function(){
  $("#export").hover(function(){
    $("#export i").toggleClass('fas fa-file-download');
})
});

$("#export").click(function(){alert("Windows: Open Snipping Tool\n                 or press PrtScr or Windows + Shift + S\n                 to save the screen capture to your clipboard\n\nMac: Command + Shift + 4 (Saved)\n         Command + Control + Shift + 4 (Copied)")});

//Belows allows user to bring button back to task bar on the side

// $(".origin").droppable({ accept: ".add", drop: function(event, ui) {
//                     console.log("drop2");
//                    $(this).removeClass("border").removeClass("over");
//              var dropped = ui.draggable;
//             var droppedOn = $(this);
//             $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);      
             
// }});