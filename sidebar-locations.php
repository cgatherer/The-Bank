<?php
/**
 * The Page Sidebar displayed on page templates.
 *
 * @package WordPress
 * @subpackage BootstrapWP
 */
?>

<div class="col-lg-4 col-md-4 col-sm-4"> 
    <div class="subnavigation">
        <?php
            if (function_exists('dynamic_sidebar')) {
                dynamic_sidebar("sidebar-page");
            }
        ?>
    </div>
</div><!-- /.col-md-4 -->
