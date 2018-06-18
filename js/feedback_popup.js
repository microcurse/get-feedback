// This is for delaying and displaying the pop up after a few minutes.
function openFancyBox() {
    setTimeout( function() {
        jQuery('#feedback').trigger('click'); 
    }, 1000);
}

jQuery(document).ready(function($) {

    $('#page').load('https://harloff.staging.wpengine.com/wp-content/plugins/popup/fancybox.html');

    var visited = $.cookie('visited');
    if (visited == 'yes') {
        return false;
    } else {
        openFancyBox();
    }
    $.cookie('visited', 'yes', {expires: 7});
    $('#feedback').fancybox();
});