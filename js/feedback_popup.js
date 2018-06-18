// This is for delaying and displaying the pop up after a few minutes.
function openFancyBox() {
    setTimeout( function() {
        $('#feedback-box').trigger('click'); 
    }, 20000);
}

jQuery(document).ready(function($) {
    $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');
    // var visited = $.cookie('visited');
    // if (visited == 'yes') {
    //     return false;
    // } else {
    //     openFancyBox();
    // }
    // $.cookie('visited', 'yes', {expires: 7});
    // $('#feedback-box').fancybox();
});