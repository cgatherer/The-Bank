<?php
/**
 * Template Name: Page - News Page
 * Description: Displays all news posts.
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
           <li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="" href="http://www.facebook.com/sharer.php?u=<?php echo get_permalink(); ?>" target="_blank">Facebook</a></li>
           <li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" target="_blank">Twitter</a></li>
           <li class="menu-item menu-item-type-post_type menu-item-object-page"><a class="" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo get_permalink(); ?>&title=Peapack%20gladstone%20Bank&summary=&source=" target="_blank">LinkedIn</a></li>
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

        <?php get_sidebar('news'); ?>

        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div class="paragraph">
                    <h2><?php the_title();?></h2>
					<?php echo $post->post_content; ?>
        			<?php //edit_post_link(__('Edit', 'bootstrapwp'), '<span class="edit-link">', '</span>'); ?>
                    <?php
                        $paged = ( $_GET['news'] ) ? $_GET['news'] : 1;
                        $loop = new WP_Query(  array( 'posts_per_page' => 5, 'category__in' => 5, 'paged' => $paged) );
                        while ( $loop->have_posts() ) : $loop->the_post();
                            $url = get_permalink();
                            echo "<span style='font-family: \"Francois One\",sans-serif;font-size: 20px;'>";
                                echo the_title();
                            echo "</span>";
                            echo "<br />";
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
                                echo "<b>";
                                    $content = get_the_content();
                                    if(strlen($content) > 200){
                                          $content = substr($content, 0, 200);
                                          $content .= "...";
                                    }
                                    echo $content;
                                echo "</b>";
                            echo "</div>";
                            if(get_the_post_thumbnail( $post_id, 'medium' )){
                                  if($content){
                                        echo '<br />';
                                  }
                                  echo "<div>".get_the_post_thumbnail( $post_id, 'thumbnail' )."</div>";
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
                        endwhile;
                        wp_reset_postdata();
                    ?>
                </div>

                <div style="overflow:hidden;margin-bottom:50px;">
                      <?php
                            $nextpage = 2;
                            if($_GET['news'] && $_GET['news'] > 1){
                                  $nextpage = intval($_GET['news']) + 1;
                                  $lesspage = intval($_GET['news']) - 1;
                                  echo "<a href='https://www.pgbank.com/home/who-we-are/news/?news=".$lesspage."' style='float:left;'><button class='pdfButton'>Previous</button></a>";
                            }
                            if(count($loop->posts) == 5){
                                  echo "<a href='https://www.pgbank.com/home/who-we-are/news/?news=".$nextpage."' style='float:right;'><button class='pdfButton'>Next</button></a>";
                            }
                      ?>
                </div>

            </div>
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