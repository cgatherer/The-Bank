<?php
/**
 * Default Page Header
 *
 * @package WP-Bootstrap
 * @subpackage WP-Bootstrap
 */
 $pgb_url = 'https://pgbank.com';
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>> 

<head>

    <meta charset="<?php bloginfo('charset'); ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>"/>
    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri();?>/assets/ico/favicon.png">
	
    <!-- jQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- Include w/ newer jQ if we want, but the above is ok	<script src="http://code.jquery.com/jquery-migrate-1.1.1.js"></script> -->
	
    <!-- bootstrap -->
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="<?php echo $pgb_url; ?>/xmlrpc.php?rsd" />
    <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="<?php echo $pgb_url; ?>/wp-includes/wlwmanifest.xml" /> 

    <link rel="alternate" type="application/rss+xml" title="Peapack-Gladstone Bank &raquo; Feed" href="<?php echo $pgb_url; ?>/index.php/feed/" />

    <link rel="stylesheet" href="<?php echo esc_url( get_template_directory_uri() ); ?>/royalslider/skins/default/rs-default.css">
    <script type="text/javascript" src="<?php echo esc_url( get_template_directory_uri() ); ?>/royalslider/jquery.royalslider.min.js"></script>
    <?php wp_head(); ?>

    <!--[if lte IE 9]>
	<style>
		.navbar{background-color: #DEBE58;}
	</style>
	
	<script type="text/javascript" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/js/modernizr.js"></script>
	
    <![endif]-->

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

    <script type="text/javascript">
        window._wpemojiSettings = {
            "baseUrl": "http:\/\/s.w.org\/images\/core\/emoji\/72x72\/",
            "ext": ".png",
            "source": {
                "concatemoji": "https:\/\/pgbank.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.2.2"
            }
        };
        ! function(a, b, c) {
            function d(a) {
                var c = b.createElement("canvas"),
                    d = c.getContext && c.getContext("2d");
                return d && d.fillText ? (d.textBaseline = "top", d.font = "600 32px Arial", "flag" === a ? (d.fillText(String.fromCharCode(55356, 56812, 55356, 56807), 0, 0), c.toDataURL().length > 3e3) : (d.fillText(String.fromCharCode(55357, 56835), 0, 0), 0 !== d.getImageData(16, 16, 1, 1).data[0])) : !1
            }

            function e(a) {
                var c = b.createElement("script");
                c.src = a, c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
            }
            var f, g;
            c.supports = {
                simple: d("simple"),
                flag: d("flag")
            }, c.DOMReady = !1, c.readyCallback = function() {
                c.DOMReady = !0
            }, c.supports.simple && c.supports.flag || (g = function() {
                c.readyCallback()
            }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function() {
                "complete" === b.readyState && c.readyCallback()
            })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
        }(window, document, window._wpemojiSettings);
    </script>	
	
</head>

<body style="display:none;" <?php body_class(); ?> >

<div style="background:#fff;">

    <div style="height:105px; background: #00573D none repeat scroll 0% 0%;">
      <div class="container">
            <a class="brand" href="<?php echo home_url('/'); ?>" title="<?php echo esc_attr(get_bloginfo('name', 'display')); ?>" rel="home">
                    <img name="logo" src="<?php echo esc_url( get_template_directory_uri() ); ?>/images/logo.png" alt="logo">
            </a>

        </div>
    </div>

    <div class="navbar navbar-inverse navbar-relative-top" style="width:100%;margin:0 !important;padding:0 !important;z-index:11;">
        <div class="navbar-inner">
            <!-- <div class="container"> -->
                <div class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
              </div>
                <div class="navbar-inner container" style="padding-top:5px; !important; font-family: 'Francois One', sans-serif; font-size:20px; text-align:center; font-weight: bold;">
                    <?php

                        $searchBar = '<div style="display:inline-block;">';
                            $searchBar .= '<form role="search" method="get" action="'.$pgb_url.'/" style="margin:0;">';
                                $searchBar .= '<input type="text" value="" name="s" id="s" placeholder="Search">';
                            $searchBar .= '</form>';
							// NOTE: Links set w/ jQ. Look in footer. Do not change their ID's (goTo).
                            $searchBar .= '<span class="bankersButton" id="goToBanking">Login to Online Banking</span>';
                            // https://www.firstbankcard.com/site/personal/personal.fhtml
							$searchBar .= '<span class="bankersButton" id="goToWealth">Login to Wealth Management</span>';
                        $searchBar .= '</div>';

                        wp_nav_menu(
                            array(
                                'menu' => 'main-menu',
                                'container_class' => 'nav-collapse collapse',
                                'menu_class' => 'nav',
                                'fallback_cb' => '',
                                'menu_id' => 'main-menu',
                                'items_wrap' => '<ul id="%1$s" class="%2$s" style="position:static !important;">%3$s<li id="searchFormStyle">'.$searchBar.'</li></ul>',
                                'walker' => new Bootstrapwp_Walker_Nav_Menu()
                            )
                        );
                    ?>
                </div>
            <!-- </div> -->
        </div>
    </div>