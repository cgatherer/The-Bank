<?php
/**
 * Template Name: Page - Full-width
 * Description: Displays a page title and content without displaying a sidebar.
 *
 * @package WordPress
 * @subpackage BootstrapWP
 */
get_header(); ?>
<?php while (have_posts()) : the_post(); ?>

    <div class="container">
        <div class="row">
            <div class="span12">
                <?php if (function_exists('bootstrapwp_breadcrumbs')) {
                bootstrapwp_breadcrumbs();
                } ?>
            </div><!--/.span12 -->
        </div><!--/.row -->

        <header class="page-title">
            <h1><?php the_title();?></h1>
        </header>

        <div class="row content">
            <?php the_content(); ?>
            <?php endwhile; // end of the loop. ?>

        </div><!-- .row content -->
    </div><!--/.container -->

    <script type="text/javascript">
          window.onload = function(){
                jQuery('.section').on('click','h3', function(){
                      jQuery(this).parent().toggleClass("large");
                });
                jQuery('.shareIcon').on('click', function(){
                      jQuery(this).toggleClass("open");
                      jQuery('.shareToggle').toggleClass("open");
                });
          }
    </script>
    
<?php get_footer(); ?>
