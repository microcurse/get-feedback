<?php
/**
 *  Plugin Name:    Modal Popup Plugin
 *  Plugin URI:     https://harloff.com
 *  Description:    This is a plugin for controlling a Modal Popup. I created this plugin as a way to request for feedback from our users.
 *  Version:        1.0
 *  Author:         Marc Reyes-Maninang
 *  License:        GPL2
 *  License URI:    https://www.gnu.org/licenses/gpl-2.0.html
 */
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

add_action( 'wp_enqueue_scripts', 'feedback_popup' );

function feedback_popup() {
    wp_register_script( 'feedback_popup', plugins_url( '/popup/js/feedback_popup.js'), array( 'jquery' ) );
    wp_register_script( 'fancybox', 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js' );
    
    wp_enqueue_script( 'fancybox', 'feedback_popup' );
}
    
?>