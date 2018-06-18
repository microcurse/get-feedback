// This is for delaying and displaying the pop up after a few seconds.
function openFancyBox() {
    setTimeout( function() {
        jQuery('#feedback').trigger('click'); 
    }, 2000);
}

jQuery(document).ready(function($) {
    // Load pop up html
    $('#page').load('https://harloff.staging.wpengine.com/wp-content/plugins/popup/fancybox.html');

    // This checks whether or not the user has seen the pop up
    var visited = $.cookie('visited');
    if (visited == 'yes') {
        return false;
    } else {
        openFancyBox();
    }
    $.cookie('visited', 'yes', {expires: 7});
    $('#feedback').fancybox();
});