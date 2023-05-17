//1
$('#btn29').on('click', () => {
$('h2.head').css('background-color', 'green');
$('h2.head .inner').css('font-size', '35px');
});
//2

$('a[href^="https://"]').attr('target', '_blank');

//3

$('#btn30').on('click', () => {
    $('h3').each(function()  {
        let div = $(this).next('div');
        $(this).before(div);
    });
});

//4

const checkboxes = $("input[type='checkbox']");

checkboxes.change(function() {
    let selectedboxes = checkboxes.filter(":checked");
    console.log(selectedboxes)
    if (selectedboxes.length >= 3) {
      checkboxes.not(":checked").attr("disabled", true);
    } else {
      checkboxes.attr("disabled", false);
    }
  });
