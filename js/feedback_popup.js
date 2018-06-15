function openFancyBox() {
    setTimeout( function() {$('#feedback-box').trigger('click'); }, 20000);
}

function popUpHtml() {
    document.write('<div class="pop-container">');
    document.write('<div class="pop-content">');
    document.write('This is a test of the content');
    document.write('</div>');
    document.write('</div>');
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