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

function feedback_popup() {
    wp_enqueue_script( 'fancybox', 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js', array( 'jquery' ), '3.3.5', true);
    wp_enqueue_script( 'feedback_popup', plugins_url( '/popup/js/feedback_popup.js'), array( 'jquery' ), '1', true);
    wp_enqueue_style( 'fancybox', 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css', '3.3.5');
}

add_action( 'wp_enqueue_scripts', 'feedback_popup' );

?>