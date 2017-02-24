<?php
if($post->ID == 1430){?>
	<div class="biopic <?php echo $post->ID; ?>b first">
<?php }else{ ?>
	<div class="biopic <?php echo $post->ID; ?>b">
<?php } ?>
	<?php echo the_post_thumbnail(); ?>
</div>

