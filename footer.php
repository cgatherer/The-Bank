<?php
/**
 * Default Footer
 *
 * @package WordPress
 * @subpackage BootstrapWP
 */
?>
</div>

<footer>
    <!-- Site Map-->
    <div class="row bottomnav">
        <div class="container" style="margin-top:1em;">
            <?php if (function_exists('dynamic_sidebar')) {
                    dynamic_sidebar("footer-content");
                }
            ?>
        </div>

        <div class="container">
            <div class="row footer-second">
            <?php
                if (function_exists('dynamic_sidebar')) {
                    dynamic_sidebar("footer-content-2");
                } ?>
            </div>
        </div>
    </div>

    <div class="container">

        <div class="col-xs-6" style="background: #00402A;">
            <p>&copy; <?php bloginfo('name'); ?> <?php echo date('Y'); ?> All rights reserved.</p>
        </div>

        <div class="col-xs-6">
            <img id="MemberFDIC" alt="Member FDIC" class="alignright" src="https://www.pgbank.com/wp-content/uploads/2016/09/member-fdic-EHL.png">
        </div>

    </div><!-- /container -->
</footer>

<?php wp_footer(); ?>


<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63349107-2', 'auto');
  ga('send', 'pageview');

</script>

<!-- Google Code for Remarketing Tag -->
<!--
Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. See more information and instructions on how to setup the tag on: http://google.com/ads/remarketingsetup
-->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 964275017;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/964275017/?value=0&amp;guid=ON&amp;script=0"/>
</div>
</noscript>

<!-- Peapack-Gladstone Bank - Easy Tag
Please place this tag to fire across the entire site. -->

<!--  Quantcast Tag -->
<script>
 var ezt = ezt ||[];

 (function(){
   var elem = document.createElement('script');
   elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://pixel") + ".quantserve.com/aquant.js?a=p-9rgs9K52d6g1y";
   elem.async = true;
   elem.type = "text/javascript";
   var scpt = document.getElementsByTagName('script')[0];
   scpt.parentNode.insertBefore(elem,scpt);
 }());


 ezt.push({qacct: 'p-9rgs9K52d6g1y',
           orderid: '',
           revenue: '' 
           });
</script>

<noscript>
  <img src="//pixel.quantserve.com/pixel/p-9rgs9K52d6g1y.gif?labels=_fp.event.Default" style="display: none;" border="0" height="1" width="1" alt="Quantcast"/>
</noscript>
<!-- End Quantcast Tag -->


<?php getPartnerLinks(); //Refer to functions.php ?>

<script type="text/javascript">

$(function(){
  $('body').hide();
  $('body').fadeIn('slow');
  // body style=display:none | fade this in for a good transition

  // Instead of finding the sidebar, applied this fix to remove the # link for the static image.
  $('#five-core').removeAttr("href").css('cursor','default').on('click', false);
          
    $('#goToBanking').on('click', function(){
      // alert(leaveText);
      window.location.href = 'https://www.netteller.com/pgbank';
      // https://www.netteller.com/login2008/Authentication/Views/Login.aspx?returnUrl=%2fpgbank
    });
          
    $('#goToWealth').on('click', function(){
      // alert(leaveText);
      window.location.href = 'http://pgbank.cconnect.com';
    });
});

  //addOutLink(document);

  <?php if ( $_SERVER['REMOTE_ADDR'] != '23.24.87.99') { ?>
  <?php } ?>
</script>

</body>
</html>