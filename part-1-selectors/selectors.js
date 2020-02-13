let btn = document.querySelector('button');
btn.addEventListener('click', function(e){
  e.preventDefault();
})

let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function(){
  document.querySelectorAll('input').forEach(input => {
    input.value = "";
  })
});

$(document).ready(function() {
  $("label[for='email']").addClass('blue');
  $('.phone').addClass('yellow');
  $('label').addClass('green');
  if ($('#confirm').prop("checked")) {
    console.log('confirm')
  }
  $('p').find('label').addClass('purple');
  $('#clear-btn').addClass('red');

})

//
