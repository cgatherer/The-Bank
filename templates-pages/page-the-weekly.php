<?php
/**
 * Template Name: Page - The Weekly Page
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
                   <?php
                        $paged = ( $_GET['weekly'] ) ? $_GET['weekly'] : 1;
                        $loop = new WP_Query(  array( 'posts_per_page' => 5, 'category__in' => 21, 'paged' => $paged) );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $url = get_permalink();
                            echo "<h2>";
                                echo the_title();
                            echo "</h2>";
                            echo "<div style='font-family: \"Merriweather\",serif;'>";
                                echo "<img src='".get_template_directory_uri()."/images/time-24.png' style='vertical-align: -7px;'/>";
                                echo "<span style='margin-right:50px;'>".get_the_date()."</span>";
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
                                    echo "<a href='https://www.linkedin.com/shareArticle?mini=true&url=".get_permalink()."&title=".urlencode(str_replace ( "&#8211;" , "-" , get_the_title()))."&summary=&source='' target='_blank'><img src='".get_template_directory_uri()."/images/linkedin.png' style='height:20px;'/></a>";
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
                      endwhile;
                      wp_reset_postdata();
                    ?>
                </div>
                  <div style="overflow:hidden;margin-bottom:50px;">
                       <?php
                              $nextpage = 2;
                              if($_GET['weekly'] && $_GET['weekly'] > 1){
                                    $nextpage = intval($_GET['weekly']) + 1;
                                    $lesspage = intval($_GET['weekly']) - 1;
                                    echo "<a href='https://www.pgbank.com/home/what-we-think/weekly-economic-market-recap/?weekly=".$lesspage."' style='float:left;'><button class='pdfButton'>Previous</button></a>";
                              }
                              if(count($loop->posts) == 5){
                                    echo "<a href='https://www.pgbank.com/home/what-we-think/weekly-economic-market-recap/?weekly=".$nextpage."' style='float:right;'><button class='pdfButton'>Next</button></a>";
                              }
                       ?>
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
