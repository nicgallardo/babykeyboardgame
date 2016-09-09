var colors = [
  {
    color: 'Red',
    classValue: 'bf3c41',
  },
  {
    color: 'Blue',
    classValue: 'blue-3d65a4',
  },
  {
    color: 'Green',
    classValue: 'green-00FF00',
  },
  {
    color: 'Yellow',
    classValue: 'FFFF00',
  },
  {
    color: 'Orange',
    classValue: 'FFA500',
  },
  {
    color: 'Black',
    classValue: 'black-000000',
  },
];

var colorState = colors.slice();

var callTest = function(){
  var random = Math.floor(Math.random() * colorState.length);
  var splicedVal = colorState.splice(random, 1);
  return splicedVal[0];
};

var unbinder = function(){
  var tmpColors = colors;
  for (var i = 0; i < tmpColors.length; i++) {
    var selector = "." + tmpColors[i].classValue;
    $(selector).unbind( "click" );
  };
};

var createQuiz = function(){
  var currentValue = callTest();
  console.log('currentValue : ',currentValue.color);
  $('.game-state').empty();
  $('.game-state').append(
    '<h1>Which block is ' + currentValue.color+ '?</h1>'
  );
  var selector = "." + currentValue.classValue;
  unbinder();
  createAnti();
  $(selector).click(function(){
    $(selector).remove();
    createQuiz();
  });
};

var createAnti = function(){
  var antiClicks = colorState;
  for (var i = 0; i < antiClicks.length; i++) {
    var selector = "." + antiClicks[i].classValue;
    $(selector).click(function(){
      console.log('hit anit');
    });
  }
  // $(selector).click(function(){
  //   $(selector).remove();
  //   createQuiz();
  // });
};

$(document).ready(function(){
  for (var i = 0; i < colors.length; i++) {
    $('.color-block').append(
      '<div class=" col-md-2 blocks ' +colors[i].classValue + '"</div>'
    );
  };
  $('.game-state').append(
    '<button class="initiate-test" type="button">Begin Test</button>'
  );
  $('.initiate-test').click(function(){
    createQuiz();
  });
});
