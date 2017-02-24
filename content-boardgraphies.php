<?php
if($post->ID == 1430){?>
	<div class="bio <?php echo $post->ID; ?>b first">
<?php }else{ ?>
	<div class="bio <?php echo $post->ID; ?>b">	
<?php } ?>
	<h1><?php echo the_title(); ?></h1>
	<h4><?php echo the_excerpt(); ?></h4>
	<p><?php echo the_content(); ?></p>
</div>
