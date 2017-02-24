<?php

$testimonials = new CPT(array(
    'post_type_name' => 'testimonials',
    'singular' => __('Testimonial', 'bootstrapwp'),
    'plural' => __('Testimonials', 'bootstrapwp'),
    'slug' => 'testimonials'
),
	array(
	'taxonomies' => array('category'),	
    'supports' => array('title', 'editor', 'thumbnail', 'comments', 'excerpt'),
    'menu_icon' => 'dashicons-book'
));