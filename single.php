<?php
/**
 * Default Post Template
 * Description: Post template with a content container and right sidebar.
 *
 * @package WordPress
 * @subpackage BootstrapWP
 */
get_header(); ?>

<div class="banner">
    <img src="/wp-content/uploads/2015/08/pgb_banner_sunset.jpg"/>
    <div style="position:absolute;top:0;bottom:0;left:0;right:0;">
        <img src="/wp-content/uploads/2015/08/pgb_banner_sunset.jpg"/>
    </div>
    <img class="shareIcon" alt="Peapack-Gladstone Bank | Private Banking Since 1921" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/share.png">
    <div class="shareToggle">
          <ul class="dropdown-menu">
           <li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="" href="http://www.facebook.com/sharer.php?u=<?php echo get_permalink(); ?>" target="_blank">Facebook</a></li>
           <li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" target="_blank">Twitter</a></li>
           <li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo get_permalink(); ?>&title=Peapack%20gladstone%20Bank&summary=&source=" target="_blank">LinkedIn</a></li>
           <li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="" href="javascript:window.print()">Print</a></li>
      </ul>
   </div>
   <div class="bannerText" >
        <div class="container">
            <!-- <h1 class="basic-page-title"><?php the_title();?></h1> -->
        </div>
        <div class="bottomYellow">
            <div class="container">
                <h4><?php //$field_value = simple_fields_value("subtitle1"); echo "$field_value"; ?></h4>
            </div>
        </div>
    </div>
</div>

<?php while (have_posts()) : the_post(); ?>

<div class="container">

    <div class="row">
        <div class="span12">
            <?php if (function_exists('bootstrapwp_breadcrumbs')) {
            bootstrapwp_breadcrumbs();
        } ?>
        </div><!--/.span12 -->
    </div><!--/.row -->

    <div class="row content">

         <div class="col-lg-4 col-md-4 col-sm-4">
             <?php the_post_thumbnail('full');   ?>
             <div class="subnavigation" style="margin-top:20px;">
                 <div>
                     <?php
                         if (function_exists('dynamic_sidebar')) {
                             dynamic_sidebar("sidebar-page");
                         }
                     ?>
                 </div>
            </div>
        </div>

        <div class="col-lg-8 col-md-8 col-sm-8 ">

            <header class="post-title">
                <h1><?php the_title();?></h1>
            </header>

            <p class="meta"><?php echo bootstrapwp_posted_on();?></p>
            <?php the_content(); ?>
            <?php the_tags('<p>Tags: ', ', ', '</p>'); ?>

            <?php endwhile; // end of the loop. ?>

            <?php
                echo "<br />";
                $pdfslug = "_simple_fields_fieldGroupID_3_fieldID_1_numInSet_0";
                $pdf = get_post_meta($post->ID, $pdfslug, false);
                    if($pdf[0]){
                        echo "<a href='".$pdf[0]."'><button class='pdfButton'>Read More</button></a>";
                    }?>

            <hr/>

            <?php bootstrapwp_content_nav('nav-below'); ?>
        </div>

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
