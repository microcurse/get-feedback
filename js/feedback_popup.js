function openFancyBox() {
    setTimeout( function() {$('#feedback-box').trigger('click'); }, 20000);
}

jQuery(document).ready(function($) {
    var visited = $.cookie('visited');
    if (visited == 'yes') {
        return false;
    } else {
        openFancyBox();
    }
    $.cookie('visited', 'yes', {expires: 7});
    $('#feedback-box').fancybox();
});