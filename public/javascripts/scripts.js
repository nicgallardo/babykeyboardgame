var attrs = {
  A: {
    item: [
      {
        value: 'Apple',
        img: '/images/apple.gif'
      },
    ]
  },
  B: {
    item: [
      {
        value: 'Banana',
        img: '/images/banana.gif'
      },
    ]
  },
  C: {
    item: [
      {
        value: 'Car',
        img: '/images/car.gif'
      },
    ]
  },
  D: {
    item: [
      {
        value: 'Dog',
        img: '/images/dog.gif',
        audio: '/audio/dog.mp3',
      },
    ]
  },
  E: {
    item: [
      {
        value: 'Egg',
        img: '/images/egg.gif'
      },
    ]
  },
};

function getValues(val) {
  var attr = attrs[val].item[attrs[val].item.length -1];
  return {value: val, attr: attr};
};

function emptyDom(){
  var elements = [
    "#input",
    "#output-text",
    "#output-attr-text",
    "#output-img"
  ];
  for (var i = 0; i < elements.length; i++) {
    $(elements[i]).empty();
  };
}
function appendAttrs(attrObj){
  $("#output-text").append('<h2>'+attrObj.value + " is for...</h2>");
  $("#output-attr-text").append('<h2>' + attrObj.attr.value + '</ h2>');
  $("#output-img").append('<img src="'+attrObj.attr.img+'" width="200px">');
};

function playAudio(attrObj){
  var audio = new Audio(attrObj.attr.audio);
  audio.play();

};

$(document).ready(function(){
  var test = [];
  $("#input").keyup(function(){
    emptyDom();
    var attrs = getValues($("#input").val().toUpperCase())
    appendAttrs(attrs);
    playAudio(attrs);
    document.getElementById("input").blur();
  });

  $("#input").click(function(){
    $("#input").val("")
  })
});
