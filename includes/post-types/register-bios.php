<?php

$bios = new CPT(array(
    'post_type_name' => 'bios',
    'singular' => __('Bio', 'bootstrapwp'),
    'plural' => __('Bios', 'bootstrapwp'),
    'slug' => 'bios'
),
	array(
	'taxonomies' => array('category'),	
    'supports' => array('title', 'editor', 'thumbnail', 'comments', 'excerpt'),
    'menu_icon' => 'dashicons-businessman'
));