d<?php
/**
 * Template Name: Page - Thank You Page
 * Description: Displays basic page title and content.
 *
 * @package WordPress
 * @subpackage BootstrapWP
 */
get_header(); ?>

<div class="banner">
    <?php echo get_the_post_thumbnail( $post_id, 'full' );?>
    <div style="position:absolute;top:0;bottom:0;left:0;right:0;">
        <?php echo get_the_post_thumbnail( $post_id, 'full' );?>
    </div>
    <img class="shareIcon" alt="Peapack-Gladstone Bank | Private Banking Since 1921" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/share.png">
    <div class="shareToggle">
        <ul class="dropdown-menu">
           <li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="socialLeave" href="http://www.facebook.com/sharer.php?u=<?php echo get_permalink(); ?>" target="_blank">Facebook</a></li>
           <li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="socialLeave" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" target="_blank">Twitter</a></li>
           <li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="socialLeave" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo get_permalink(); ?>&title=Peapack%20gladstone%20Bank&summary=&source=" target="_blank">LinkedIn</a></li>
           <li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="" href="javascript:window.print()">Print</a></li>
        </ul>
    </div>
    <div class="bannerText" >
        <div class="container">
            <h1 class="basic-page-title"><?php the_title();?></h1>
        </div>
        <div class="bottomYellow">
            <div class="container">
                <h4><?php $field_value = simple_fields_value("subtitle1"); echo "$field_value"; ?></h4>
            </div>
        </div>
    </div>
</div>

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
    					    <!-- <?php echo $post->post_content; ?> -->

                  <?php
                      // Start the loop.
                      while ( have_posts() ) : the_post();
                          echo $post->post_content;
                      // End the loop.
                      endwhile;
                    ?>


                   <?php get_template_part( 'content', 'mortgageConversion' ); ?>

                  </br>
              </div>
        </div>

        <?php get_sidebar('basic'); ?> 
        
    </div>
</div>

<?php get_footer(); ?>

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
