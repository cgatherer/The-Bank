<?php
/**
 * Template Name: Page - Contact Page
 * Description: Displays The Contact Form.
 *
 * @package WordPress
 * @subpackage BootstrapWP
 */
get_header(); ?>

<div id="Content">
    <div class="row" style="padding-top:5px;">
        <div class="container">
            <?php if (function_exists('bootstrapwp_breadcrumbs')) {
                bootstrapwp_breadcrumbs();
            } ?>
        </div><!--/.span12 -->
    </div><!--/.row -->
</div>

<div class="container">
	<div class="row content">

        <div class="col-md-8 col-sm-8 col-xs-push-4">
                <div class="paragraph">
                    <h2><?php the_title();?></h2>
                    <p>
					<?php the_content(); ?>
					</p>
               </div>

            </div>
        <?php get_sidebar('basic'); ?>
    </div>
</div>

<?php get_footer(); ?>
