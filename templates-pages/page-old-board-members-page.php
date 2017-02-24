<?php
/**
 * Template Name: Page - Old Board Members Page
 * Description: Displays biographies of all employees.
 *
 * @package WordPress
 * @subpackage BootstrapWP
 */
get_header();
?>

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

<div class="container">
    <div class="row content">
    
        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-push-4">
            <div class="paragraph">
                <div>
                    <?php
                        $args = array( 'post_type' => 'board members' , 'posts_per_page' => 50 );
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post();
                        if(get_the_ID() != 540){
                            get_template_part( 'content', 'biographies' );
                            echo "<br />";
                            echo "<hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>";
                            echo "<br />";
                      }
                        endwhile;
                    ?>
                </div>
            </div>
        </div>

        <?php get_sidebar('basic'); ?> 

    </div>
</div>

<div class="container"></div>


<script type="text/javascript">

    /*window.onload = function(){
        clearBio();
        $( ".first").css("display","block");
        jQuery("#hideme").css({
            "opacity" : "1.0",
            WebkitTransition : 'all 0.25s ease-out',
            MozTransition    : 'all 0.25s ease-out',
            MsTransition     : 'all 0.25s ease-out',
            OTransition      : 'all 0.25s ease-out',
            transition       : 'all 0.25s ease-out'
        });
    };

    $( ".biotile" ).click(function() {
        clearBio();
        var id = jQuery(this).attr('id');
        jQuery(this).find(".tilepic").css({
            "box-shadow" : "0px 5px 7px 0px rgba(0, 87, 61, 0.7)",
            WebkitTransition : 'all 0.25s ease-out',
            MozTransition    : 'all 0.25s ease-out',
            MsTransition     : 'all 0.25s ease-out',
            OTransition      : 'all 0.25s ease-out',
            transition       : 'all 0.25s ease-out'
        });
        jQuery(this).css({
            "padding" : "0px 10px 20px",
            WebkitTransition : 'all 0.25s ease-out',
            MozTransition    : 'all 0.25s ease-out',
            MsTransition     : 'all 0.25s ease-out',
            OTransition      : 'all 0.25s ease-out',
            transition       : 'all 0.25s ease-out'
        });
        $("div."+id+"b").css("display", " ");
    });

    function clearBio(){
        jQuery(".tilepic").css("box-shadow", "");
        jQuery(".biotile").css("padding", "5px 10px 15px");
        $( ".bio").css("display","none");
        $( ".biopic").css("display","none");
    }*/

</script>

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


    <?php //get_sidebar('blog'); ?>
    <?php get_footer(); ?>
