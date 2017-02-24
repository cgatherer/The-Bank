<?php
/**
 * Template Name: Page - Homepage
 * Description: Displays home page title and content.
 *
 * @package WordPress
 * @subpackage BootstrapWP
 */
get_header(); ?>

<div class="banner"><!-- Banner -->

    <div style="position:absolute;top:0;bottom:0;left:0;right:0;" class="royalSlider rsDefault noOverflow">
                    <?php
                        $loop = new WP_Query( 'category__in=19' );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $url = get_permalink();
							echo get_the_post_thumbnail();
                        endwhile;
                    ?>

                    <?php wp_reset_postdata(); ?>
    </div>

    <img style="width:100%;visibility:hidden;" alt="Peapack-Gladstone Bank | Private Banking Since 1921" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/frontbanner.jpg">
    
    <div class="bannerText" >
        <div class="container">
	    	<h1 class="basic-page-title">Welcome to Peapack-Gladstone Bank</h1>
        </div>
        <div class="bottomYellow">
            <div class="container">
                <!-- <h1>Welcome to Peapack-Gladstone Bank</h1>-->
            </div>
        </div>
    </div>

</div><!-- End Banner -->

<div class="container">
	
    <div id="Content">
	    <div class="row" style="padding-top:5px;">
	        <div class="span12">
	            <?php if (function_exists('bootstrapwp_breadcrumbs')) {
	                bootstrapwp_breadcrumbs();
	            } ?>
	        </div><!--/.span12 -->
	    </div><!--/.row -->

    <div class="row content">

        <div class="col-md-8 col-sm-8 col-xs-push-4">

        	<div class="paragraph">
    			<?php echo the_content(); ?>
                </br>
            </div>
                    
            <!-- The Weekly Loop -->        
            <?php
                $loop = new WP_Query( 'category__in=21' );
                $loop->the_post();
                    $url = get_permalink();
                            echo "<h2>";
                                echo the_title();
                            echo "</h2>";
                            echo "<div style='font-family: \"Merriweather\",serif;'>";
                                echo "<img src='".get_template_directory_uri()."/images/time-24.png' style='vertical-align: -7px;'/>";
                                echo "<span class=\"margin-r\">".get_the_date()."</span>";
                                echo "<img src='".get_template_directory_uri()."/images/bookmark-24.png' style='vertical-align: -7px;'/>";
                                $categories = wp_get_post_categories( $post->ID );
                                //print_r($categories);
                                $i = 0;
                                foreach($categories as $c){
                                    $cat = get_category( $c );
                                    echo $cat->name;
                                    $i++;
                                    if ($i != count($categories)) {
                                        echo ", ";
                                    }
                                }
                                echo "<div style='float:right;'>";
                                    echo "<a href='https://www.linkedin.com/shareArticle?mini=true&url=".get_permalink()."&title=".urlencode(str_replace ( "&#038;" , "and" , get_the_title()))."&summary=&source='' target='_blank'><img src='".get_template_directory_uri()."/images/linkedin.png' style='height:20px;'/></a>";
                                echo "</div>";
                            echo "</div>";
                            echo "<br />";
                            echo "<div style='font-family: \"Merriweather\",serif;'>";
                                    $content = get_the_content();
                                    if(strlen($content) > 2000){
                                          $content = substr($content, 0, 2000);
                                          $content .= "...";
                                    }
                                    echo $content;
                            echo "</div>";
                            if(get_the_post_thumbnail( $post_id, 'full' )){
                                  echo "<br /><div>".get_the_post_thumbnail( $post_id, 'full' )."</div>";
                            }
                            echo "<br />";
                            $pdfslug = "_simple_fields_fieldGroupID_3_fieldID_1_numInSet_0";
                            $pdf = get_post_meta($post->ID, $pdfslug, false);
                            if($pdf[0]){
                                   echo "<a href='".$pdf[0]."'><button class='pdfButton'>Read More</button></a>";
                            }else{
                                  echo "<a href='".get_permalink()."'><button class='pdfButton'>Read More</button></a>";
                            }
                echo "<br />";
                	echo "<hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>";
                echo "<br />";
            ?>
            <!-- The Weekly Loop -->  
        </div>

        <?php get_sidebar('basic'); ?>

    </div>
</div>

<script type="text/javascript">
      var links = document.getElementsByTagName("a");
    window.onload = function(){

	// http://dimsemenov.com/plugins/royal-slider/documentation/

        $(".royalSlider").royalSlider({
            keyboardNavEnabled: true,
            imageScaleMode:"fill",
            controlNavigation:'none',
            transitionType:'fade',
            autoPlay: { enabled: true, pauseOnHover: true, delay: 9000 },
            autoScaleSlider: false,
            arrowsNav:true,
            loop:true
        });
    };

    </script>

    <?php //get_sidebar('blog'); ?>
    <?php get_footer(); ?>
