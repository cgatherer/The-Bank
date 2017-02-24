<?php
/**
 * Template Name: Page - Testimonials Page
 * Description: Displays all testimonials.
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
	<div class="content">

        <div class="col-md-8 col-sm-8 col-xs-push-4">
                <div class="paragraph">
                    <h2><?php the_title();?></h2>
					          <?php echo $post->post_content; ?>
                    
                    <?php
                        global $wp_query, $paged;

                        if( get_query_var('paged') ) {
                            $paged = get_query_var('paged');
                        }else if ( get_query_var('page') ) {
                            $paged = get_query_var('page');
                        }else{
                            $paged = 1;
                        }

                        $wp_query = null;
                        $args = array( 'post_type' => 'testimonials', 'posts_per_page' => 5, 'paged' => $paged );
                            $wp_query = new WP_Query();
                            $wp_query->query( $args );

                                while ($wp_query->have_posts()) : $wp_query->the_post();
                                    $url = get_permalink();
                                    echo "<div class='singleTestimony'>";
                                      echo '<div class="col-md-3 col-sm-12 col-xs-12 testimonyElements">';
                                      if ( has_post_thumbnail() ) {
                                       the_post_thumbnail('thumbnail');
                                      }
                                      else {
                                       echo '<img src="http://i2.wp.com/pgbank.com/wp-content/uploads/2015/08/pgb_logo-e1447105584994.png?resize=150%2C150" class="attachment-thumbnail wp-post-image" alt="pgb_logo">';
                                      }

                                      echo '</div>';
                                      echo '<div class="col-md-9 col-sm-12 col-xs-12 testimonyElements">';
                                        echo "<h2>";
                                            echo the_title();
                                        echo "</h2>";
                                        echo the_content();
                                        echo '</div>';
                                    echo "</div>";
                                    echo "<br />";
                                    echo "<hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>";
                                endwhile;

                                // Nex and previos
                                next_posts_link('<button style="float:right;" class="pdfButton">Next</button>');
                                previous_posts_link('<button style="float:left;" class="pdfButton">Previous</button>');
 
                        // Reset query
                        wp_reset_query();
                    ?>

                	</br>
                </div>
            </div>
            
            <?php get_sidebar('basic'); ?> 

    </div>
</div>

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
