<?php
if($post->ID == 77){?>
	<div class="biopic <?php echo $post->ID; ?>b first">
<?php }else{ ?>
	<div class="biopic <?php echo $post->ID; ?>b">
<?php } ?>
	<?php echo the_post_thumbnail(); ?>
</div>

