<?php

$case_studies = new CPT(array(
    'post_type_name' => 'case studies',
    'singular' => __('Case Study', 'bootstrapwp'),
    'plural' => __('Case Studies', 'bootstrapwp'),
    'slug' => 'case-studies'
),
	array(
	'taxonomies' => array('category'),	
    'supports' => array('title', 'editor', 'thumbnail', 'comments', 'excerpt'),
    'menu_icon' => 'dashicons-category'
));