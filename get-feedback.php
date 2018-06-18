<?php
/**
 *  Plugin Name:    Get Feedback (Fancybox) 
 *  Plugin URI:     https://github.com/microcurse/get-feedback
 *  Description:    This plugin displays a lightbox to get user feedback on your site. It uses jQuery and Fancybox to display the lightbox and JavaSCript Cookie to track if a user has already seen it.
 *  Version:        0.1
 *  Author:         Marc Reyes-Maninang
 *  License:        GPL2
 *  License URI:    https://www.gnu.org/licenses/gpl-2.0.html
 */
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function feedback_popup() {
    wp_enqueue_script( 'fancybox', 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js', array( 'jquery' ), '3.3.5', true);
    wp_enqueue_script( 'feedback_popup', plugins_url( '/popup/js/feedback_popup.js'), array( 'fancybox', 'jquery' ), '1', true);
    wp_enqueue_script( 'js_cookie', 'https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js', true );
    wp_enqueue_style( 'fancybox', 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css', '3.3.5');
}

add_action( 'wp_enqueue_scripts', 'feedback_popup' );

?>