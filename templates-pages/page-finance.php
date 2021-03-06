<?php
/**
 * Template Name: Page - Finance Page
 * Description: Displays finance tools page title and content.
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
        <div class="col-md-8 col-sm-8 col-xs-push-4">
                <div class="paragraph">
                    <h2><?php the_title();?></h2>
                    <br>
                    <h3 style="font-size:24px !important;">Mortgage Calculators</h3>
                    <h4>Amortizing Loan Calculator</h4>
                    <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/amortloan.php'; ?>'">Calculator &raquo;</button>
                    <br />
                    <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
                    <h4>Adjustable Rate Mortgage Calculator</h4>
                   <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/adjustratemortcalc.php'; ?>'">Calculator &raquo;</button>
                   <br />
                   <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
                    <h4>Mortgage Loan Calculator (PITI)</h4>
                    <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/mortloancalc.php'; ?>'">Calculator &raquo;</button>
                    <br />
                    <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>

                    <br>
                    <h3 style="font-size:24px !important;">Investment Calculators</h3>
                    <h4>Investment Goal</h4>
                   <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/investmentvariables.php'; ?>'">Calculator &raquo;</button>
                   <br />
                   <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
                    <h4>Investment Property Calculator</h4>
                    <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/investmentproperty.php'; ?>'">Calculator &raquo;</button>
                    <br />
                    <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
                    <h4>Municipal Bond Tax Equivalent Yield</h4>
                    <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/taxequivyield.php'; ?>'">Calculator &raquo;</button>
                    <br />
                    <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
                    <h4>Mutual Fund Expense Calculator</h4>
                    <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/fundexpense.php'; ?>'">Calculator &raquo;</button>
                    <br />
                    <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>

                    <br>
                    <h3 style="font-size:24px !important;">Retirement Calculators</h3>
                    <h4>401(k) Calculator</h4>
                   <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/401k.php'; ?>'">Calculator &raquo;</button>
                   <br />
                   <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
                    <h4>Beneficiary Required Minimum Distributions</h4>
                    <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/retirebeneficiary.php'; ?>'">Calculator &raquo;</button>
                    <br />
                    <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
                    <h4>How Important is Social Security?</h4>
                    <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/nosocial.php'; ?>'">Calculator &raquo;</button>
                    <br />
                    <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
                    <h4>How long will my Retirement savings last?</h4>
                   <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/noretirement.php'; ?>'">Calculator &raquo;</button>
                   <br />
                   <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
                    <h4>Required Minimum Distribution (RMD)</h4>
                    <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/retiredistrib.php'; ?>'">Calculator &raquo;</button>
                    <br />
                    <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
                    <h4>Retirement Income</h4>
                    <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/retireincome.php'; ?>'">Calculator &raquo;</button>
                    <br />
                    <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
                    <h4>Roth IRA Calculator</h4>
                    <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/rothIRA.php'; ?>'">Calculator &raquo;</button>
                    <br />
                    <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
                    <h4>Roth IRA vs. Traditional IRA</h4>
                    <button class='pdfButton' onClick="location.href='<?php echo esc_url( get_template_directory_uri() ).'/includes/KJECalc/rothvsregular.php'; ?>'">Calculator &raquo;</button>
                    <br />
                    <hr style='background:#DEBE58 none repeat scroll 0% 0% !important;height:5px;'/>
					<?php echo $post->post_content; ?>
        			<?php //edit_post_link(__('Edit', 'bootstrapwp'), '<span class="edit-link">', '</span>'); ?>
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
