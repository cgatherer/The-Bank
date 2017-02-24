<?php

$bios = new CPT(array(
    'post_type_name' => 'board members',
    'singular' => __('Board Member', 'bootstrapwp'),
    'plural' => __('Board Members', 'bootstrapwp'),
    'slug' => 'board-members'
),
	array(
	'taxonomies' => array('category'),	
    'supports' => array('title', 'editor', 'thumbnail', 'comments', 'excerpt'),
    'menu_icon' => 'dashicons-businessman'
));