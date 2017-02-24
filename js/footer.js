$(function(){
					$('body').hide();
					$('body').fadeIn('slow');
						// body style=display:none | fade this in for a good transition

						// Instead of finding the sidebar, applied this fix to remove the # link for the static image.
					$('#five-core').removeAttr("href").css('cursor','default').on('click', false);

					var leaveText = "By accessing the noted link you will be leaving our website and entering a partner site which is hosted by another party. Please be advised that you will no longer be subject to, or under the protection of, the privacy and security policies of our website. We encourage you to read and evaluate the privacy and security policies of the site which you are entering, which may be different than those of ours.";
					/* $('footer img').on('click', function(){
						console.log('footer image clicked');
					}); */
					$('#goToBanking').on('click', function(){
						 // alert(leaveText);
						window.location.href = 'https://www.netteller.com/pgbank';
			// https://www.netteller.com/login2008/Authentication/Views/Login.aspx?returnUrl=%2fpgbank
					});
					$('#goToWealth').on('click', function(){
						// alert(leaveText);
						window.location.href = 'https://www.account3000.com/mfalogin/TSULogin.jsp?APPNAME=2&CLIENT=0&SAMUser=Y&TYPE=33554433&REALMOID=06-000e2bfd-a8a3-1263-a88a-0a3fac12902c&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=zJHq58lqPjf0BKoJX0w61BXvXBLCcR9tuX9XjbuTZIhHMGjYANxxSXrmTozblmwF&TARGET=$SM$https%3a%2f%2fwww%2eaccount3000%2ecom%2fpgbank%2f';
					});

          $('.thirdParty').on('click', function(){
            alert(leaveText);
            //window.location.href = 'https://www.netteller.com/pgbank';
          });
				});
        	// addOutLink(document);
  			<?php if ( $_SERVER['REMOTE_ADDR'] != '23.24.87.99') { ?>
  				//alert("You are now entering a website that is under construction. Please be advised that all content is in draft form and certain links may not be enabled. Thank you.");
          	           	addOutLink(document);
  			<?php } ?>
                   var iframes = document.getElementsByTagName('iframe');
                   for (var i = iframes.length - 1; i >= 0; i--) {
                        //alert(iframes[i]);
                        // addOutLink(iframes[i].document);
                   };

                   function addOutLink(page){
                         var links = page.querySelectorAll("a");
                        for (var i = links.length - 1; i >= 0; i--) {
                            links[i].addEventListener("click", function(event){
                              var link = this.href;
                              var text = "";
                              if(link.search("mailto") > -1){
                                    text = "This is NOT a secured e-mail transmission. Please do not send personal/financial information via this method.";
                                    if (!confirm(text)) {
                                         event.preventDefault();
                                     }
                              } else if(link.search("KJECalc") > -1 || link.search("IRWebLinkX") > -1 || link.search("netteller") > -1 || link.search("yourbankcard") > -1){
                                    text = "By accessing the noted link you will be leaving our website and entering a partner site which is hosted by another party. Please be advised that you will no longer be subject to, or under the protection of, the privacy and security policies of our website. We encourage you to read and evaluate the privacy and security policies of the site which you are entering, which may be different than those of ours.";
                                    if (!confirm(text)) {
                                         event.preventDefault();
                                     }
                              } else if (link.search("pgbank.com") < 0 && link.search("javascript:window.print()") < 0 || link.search("pgbank.com") > 20 && link.search("javascript:window.print()") < 0){
                                    text = "By accessing the noted link you will be leaving Peapack-Gladstone Bank's website and entering a website hosted by another party. Peapack-Gladstone Bank has not approved this as a reliable partner site. Please be advised that you will no longer be subject to, or under the protection of, the privacy and security policies of Peapack-Gladstone Bank's website. We encourage you to read and evaluate the privacy and security policies of the site you are entering, which may be different than those of Peapack-Gladstone Bank.";
                                    if (!confirm(text)) {
                                         event.preventDefault();
                                     }
                              }
                            });
                       };
                  }