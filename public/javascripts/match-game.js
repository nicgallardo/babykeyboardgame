var attrs = [
  {
    value: "cat",
    img: "images/cat.gif"
  },
  {
    value: "bat",
    img: "images/bat.gif"
  },
]

$(document).ready(function(){
  for (var i = 0; i < attrs.length; i++) {
    $( ".drag" ).append( "<div class='draggable' id='" + attrs[i].value + "'>" + attrs[i].value + "</div>" );
    $( ".drops" ).append( "<p class='droppable' id='" + attrs[i].value + "-drop'>" + attrs[i].value + "</p>" );
    var selector =  "#" + attrs[i].value + "-drop";
    console.log(selector);
    $(selector).droppable({
      drop: function( event, ui ) {
        console.log($(this).html());
        console.log($(ui.draggable[0]).attr('id'))
        if($(ui.draggable[0]).attr('id') === $(this).html()){
          $(ui.draggable[0]).remove();
          console.log('hit : ');
          $( this )
            .addClass( "highlight" )
            .find( "p" )
            .html( "Dropped!" );
        }else{
          console.log("not a match");
        }
      }
    });

  };
  $( ".draggable" ).draggable();
});
