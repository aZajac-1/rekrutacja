<?php
/**
 * Plugin Name: AKK2Blocks
 * Description: Custom Gutenberg blocks for WordPress
 * Version: 1.0.0
 * Author: AKK2
 * License: GPL-2.0+
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

function akk2blocks_init() {
    // Register block script
    wp_register_script(
        'akk2blocks-blocks',
        plugins_url('blocks/build/blocks.js', __FILE__),
        array(
            'wp-blocks',
            'wp-element',
            'wp-editor',
            'wp-components',
            'wp-i18n',
            'wp-block-editor',
            'wp-hooks',
            'wp-compose'
        ),
        filemtime(plugin_dir_path(__FILE__) . 'blocks/build/blocks.js')
    );

    // Register block styles
    wp_register_style(
        'akk2blocks-blocks-style',
        plugins_url('blocks/build/style-blocks.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'blocks/build/style-blocks.css')
    );

    // Register block
    register_block_type('akk2blocks/responsive-image', array(
        'editor_script' => 'akk2blocks-blocks',
        'editor_style' => 'akk2blocks-blocks-style',
        'render_callback' => 'akk2blocks_render_responsive_image'
    ));
}
add_action('init', 'akk2blocks_init');

// Render callback for responsive image block
function akk2blocks_render_responsive_image($attributes) {
    if (empty($attributes['imageUrl'])) {
        return '';
    }

    $classes = array('akk2-responsive-image');
    if (!empty($attributes['className'])) {
        $classes[] = $attributes['className'];
    }

    $style = '';
    if (!empty($attributes['width'])) {
        $style .= 'width: ' . esc_attr($attributes['width']) . ';';
    }
    if (!empty($attributes['height'])) {
        $style .= 'height: ' . esc_attr($attributes['height']) . ';';
    }

    $output = '<div class="' . esc_attr(implode(' ', $classes)) . '" style="' . esc_attr($style) . '">';
    $output .= '<img src="' . esc_url($attributes['imageUrl']) . '" alt="' . esc_attr($attributes['alt'] ?? '') . '" />';
    $output .= '</div>';

    return $output;
} 