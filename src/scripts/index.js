
/* sand massages */

var $messegeIn = $('.wordin__ms-txt').eq(0);
var $messegeOut = $('.ms-field').eq(1);

function sendOnEnter(event) {
    if (event.which === 13) {
        event.preventDefault();
        $messegeOut.html('<pre>' + $messegeIn.val() + '</pre>');
        $messegeIn.val('');
    }
}    

function sandOnButton() {
    $messegeOut.html('<pre>' + $messegeIn.val() + '</pre>');
    $messegeIn.val('');
}

$('.wordin__ms-key').eq(0).on('click', sandOnButton);
$messegeIn.on('keydown', sendOnEnter);

/* sand massages */


/* peoples search */

var $input = $('input');

$input.on('input', function() {
    var $inputValue = $input.val();

    $usersNames.each(function (index, element) {
        var $element = $(element);
        var $elementName = $element.text();
        var $show = $element.closest('.sidebar__peoples-scroll');
        if ($elementName.includes($inputValue)) {
            $show.show();
        } else {
            // $show.show('Have no user with this name');
            $show.hide();
        }
    });
});

/* peoples search */