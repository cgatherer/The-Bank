<?php
$link = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
?>
<div id="<?php echo $post->ID; ?>" class="col-lg-6 col-md-6 col-sm-6 col-xs-4 biotile">
		<?php
			if ($post->ID != 135) { ?>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 tilepic" style="background-image:url('<?php echo $link; ?>');">
			<?php
			} else { ?>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 tilepic" style="background-image:url('<?php echo $link; ?>');background-position:0px -30px;">
			<?php
			} ?>
		<div class="tiletitle">
			<span><?php echo the_title(); ?></span>
		</div>
	</div>
</div>

