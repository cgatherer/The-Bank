<?php
/**
 * Description: Default Index template to display loop of blog posts
 *
 * @package WordPress
 * @subpackage BootstrapWP
 */
get_header(); ?>
<div class="noOverflow">
    <div class="banner noOverflow">
        <img style="width:100%;visibility:hidden;" alt="Peapack-Gladstone Bank | Private Banking Since 1921" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/frontbanner.jpg">
        <div style="position:absolute;top:0;bottom:0;left:0;right:0;" class="royalSlider rsDefault">
            <img style="width:100%;" alt="Peapack-Gladstone Bank | Private Banking Since 1921" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/frontbanner.jpg">
            <img style="width:100%;" alt="Peapack-Gladstone Bank | Private Banking Since 1921" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/frontbanner.jpg">
        </div>
        <div class="bannerText" >
            <div class="container">
                <h1>Title</h1>
                <h4>Subhead would go here</h4>
            </div>
        </div>
    </div>
</div>
<div class="bottomYellow"></div>
<div id="Content">
    <div class="row" style="padding-top:5px;">
        <div class="span12">
            <?php if (function_exists('bootstrapwp_breadcrumbs')) {
                bootstrapwp_breadcrumbs();
            } ?>
        </div><!--/.span12 -->
    </div><!--/.row -->

    <div>
        <div class="col-lg-8 col-md-8 col-sm-8">
            <h3>Peapack-Gladstone Bank</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam ultrices augue, euismod aliquet mi commodo ut. Aenean porta sem quis lectus tincidunt, non vestibulum dolor vehicula. Aliquam sit amet consequat augue. Duis iaculis mi vitae elit feugiat, non sagittis sapien elementum. Morbi orci ante, ultricies id venenatis sodales, lobortis vitae tellus. Suspendisse euismod efficitur vehicula. Ut lorem urna, volutpat in magna laoreet, maximus pellentesque dolor. Phasellus pulvinar quam eu lorem varius pretium. Ut loreet, maximus pellentesque dolor. Phasellus pulvinar quam eu lorem varius pretium. 
            </p>
            <p>
                Morbi orci ante, ultricies id venenatis sodales, lobortis vitae tellus. Suspendisse euismod efficitur vehicula. Ut lorem urna, volutpat in magna laoreet, maximus pellentesque dolor lorem urna, volutpat in magna. Phasellus pulvinar quam eu lorem varius pretium pellentesque dolor lorem urna, volutpat in magna. Ut lorem urna, volutpat in magna laoreet, maximus pellentesque dolor lorem urna, volutpat in magna. Phasellus pulvinar quatium. Ut lorem urna, volutpat in magna laoreet, maximus pellentesque dolor. Phasellus pulvinar quam eu lorem varius pretium. Utaximus pellentesque dolor. Phasellus pulvinar quam eu.
            </p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4" style="background:#fbf7eb;overflow:hidden;">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <div <?php post_class(); ?>>
                    <a href="<?php the_permalink(); ?>" title="<?php the_title();?>">
                        <h3><?php the_title();?></h3>
                    </a>
                    <p class="meta">
                        <?php echo bootstrapwp_posted_on();?>
                    </p>

                    <div class="row">
                        <?php // Post thumbnail conditional display.
                        if ( bootstrapwp_autoset_featured_img() !== false ) : ?>
                            <div class="span2">
                                <a href="<?php the_permalink(); ?>" title="<?php  the_title_attribute( 'echo=0' ); ?>">
                                    <?php echo bootstrapwp_autoset_featured_img(); ?>
                                </a>
                            </div>
                            <div class="span6">
                        <?php else : ?>
                            <div class="span8">
                        <?php endif; ?>
                                <?php the_excerpt(); ?>
                            </div>
                    </div><!-- /.row -->

                    <hr/>
                </div><!-- /.post_class -->
            <?php endwhile; endif; ?>

            <?php //bootstrapwp_content_nav('nav-below');?>
        </div>
    </div>
</div>
<div class="container"></div>

<script type="text/javascript">

    window.onload = function(){

        $(".royalSlider").royalSlider({
            keyboardNavEnabled: true,
            imageScaleMode:"fill",
            controlNavigation:'tabs',
            transitionType:'fade',
            autoPlay: { enabled: true, pauseOnHover: true, delay: 9000 },
            autoScaleSlider: true,
            arrowsNav:true,
            loop:true
        });

        // var sliders = jQuery(".rsOverflow");
        // for (var i = sliders.length - 1; i >= 0; i--) {
        //     sliders[i].style.height = sliders[i].style.width;
        // };
    };
    
    </script>

    <?php //get_sidebar('blog'); ?>
    <?php get_footer(); ?>