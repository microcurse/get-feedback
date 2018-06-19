// This is for delaying and displaying the pop up after a few seconds.
function openFancyBox() {
    setTimeout( function() {
        // Load fancybox html
        jQuery.fancybox.open({
            src     : document.URL + 'wp-content/plugins/get-feedback/fancybox.html',
            type    : 'ajax',
            opts    : {
                // This sends a 'done!' message to console when ajax is done loading 
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