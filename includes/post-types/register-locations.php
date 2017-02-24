<?php

$locations = new CPT(array(
    'post_type_name' => 'locations',
    'singular' => __('Location', 'bootstrapwp'),
    'plural' => __('Locations', 'bootstrapwp'),
    'slug' => 'locations'
),
	array(
	'taxonomies' => array('category'),	
    'supports' => array('title', 'editor', 'thumbnail', 'comments', 'excerpt'),
    'menu_icon' => 'dashicons-location-alt'
));