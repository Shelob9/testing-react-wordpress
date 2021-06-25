<?php

/**
 * Plugin Name: React Testing In WordPress 
 */

/** Register block js */
if (file_exists(__DIR__ . "/build/block.asset.php")) {
    // automatically load dependencies and version
    $assets = include __DIR__ . "/build/block.asset.php";
    wp_register_script(
        'testing-react-wordpress-block',
        plugins_url("/build/block.js", __FILE__),
        $assets['dependencies'],
        $assets['version']
    );
}


/** Register Block */
register_block_type('testing-react-wordpress/block', [
    'editor_script' => 'testing-react-wordpress-block',
]);


