// This is for delaying and displaying the pop up after a few seconds.
function openFancyBox() {
    setTimeout( function() {
        // Load pop up html
        jQuery.fancybox.open({
            src     : 'https://harloff.staging.wpengine.com/wp-content/plugins/popup/fancybox.html',
            type    : 'ajax',
            opts    : {
                afterShow : function( instance, current ) {
                    console.info( 'done!' );
                }
            }
        }); 
    }, 2000);
}

jQuery(document).ready(function($) {

    // This checks whether or not the user has seen the pop up
    var visited = $.cookie('visited');
    if (visited == 'yes') {
        return false;
    } else {
        openFancyBox();
    }
    $.cookie('visited', 'yes', {expires: 7});
});