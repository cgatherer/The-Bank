KJE.MortgageLoanCalculation=function(){this.bTERMINMONTHS=KJE.parameters.get("TERM_IN_MONTHS",false);this.MSG_YEAR_NUMBER=KJE.parameters.get("MSG_YEAR_NUMBER","Year Number");this.MSG_POP_PRINCIPAL=KJE.parameters.get("MSG_POP_PRINCIPAL","Total Principal for");this.MSG_POP_INTEREST=KJE.parameters.get("MSG_POP_INTEREST","Total Interest for");this.MSG_PRINCIPAL=KJE.parameters.get("MSG_PRINCIPAL","Principal");this.MSG_INTEREST=KJE.parameters.get("MSG_INTEREST","Interest");this.MSG_PRINCIPAL_BALANCE=KJE.parameters.get("MSG_PRINCIPAL_BALANCE","Principal Balance");this.MSG_POP_PRINCIPAL_NORMAL=KJE.parameters.get("MSG_POP_PRINCIPAL_NORMAL","Principal Balance for Normal Payments Year");this.MSG_POP_PRINCIPAL_PREPAY=KJE.parameters.get("MSG_POP_PRINCIPAL_PREPAY","Principal Balance for Prepayments Year");this.MSG_PREPAYMENTS=KJE.parameters.get("MSG_PREPAYMENTS","Prepayments");this.MSG_NORMAL_PAYMENTS=KJE.parameters.get("MSG_NORMAL_PAYMENTS","Normal");this.MSG_PREPAY_MESSAGE=KJE.parameters.get("MSG_PREPAY_MESSAGE","Your planned prepayment(s) will shorten your mortgage by PREPAY_SHORTEN_TERM.");this.MSG_RETURN_AMOUNT=KJE.parameters.get("MSG_RETURN_AMOUNT","A monthly payment of MONTHLY_PI at INTEREST_RATE for TERM years will give you a mortgage amount of LOAN_AMOUNT.");this.MSG_RETURN_PAYMENT=KJE.parameters.get("MSG_RETURN_PAYMENT","A loan amount of LOAN_AMOUNT at INTEREST_RATE for TERM years will give you a monthly payment (PI) of MONTHLY_PI.");this.MSG_ERROR_BALLOON=KJE.parameters.get("MSG_ERROR_BALLOON","Loan term must be less than the amortization term.");this.PITI_PERCENT=KJE.parameters.get("PITI_PERCENT",false);this.SHOW_PITI=KJE.parameters.get("SHOW_PITI",false);this.USE_OTHER_FEES_AMOUNT=KJE.parameters.get("USE_OTHER_FEES_AMOUNT",true);this.ADJUSTABLE_RATE=false;this.sSchedule=new KJE.Repeating();this.sAdjSchedule=null};KJE.MortgageLoanCalculation.prototype.clear=function(){this.ADJUSTABLE_RATE_CAP=0;this.ADJUSTABLE_RATE_FEQ=12;this.ADJUSTABLE_RATE_FIXED=0;this.ADJUSTABLE_RATE_INCR=0;this.BALLOON_PAYMENT=0;this.DISCOUNT_POINTS_PERCENT=0;this.FEDERAL_TAX_RATE=0;this.INFLATION_RATE=3;this.INTEREST_ONLY=false;this.INTEREST_RATE=0;this.LOAN_AMOUNT=0;this.MARGINAL_TAX_RATE=0;this.MSG_TERM="";this.ORIGINATION_FEES_PERCENT=0;this.OTHER_FEES=0;this.OTHER_FEES_RATE=0;this.PAYMENT_CALC=1;this.PREPAY_AMOUNT=0;this.PREPAY_BALLOON_PAYMENT=0;this.PREPAY_STARTS_WITH=1;this.PREPAY_TYPE=KJE.Default.PREPAY_NONE;this.PURCHASE_PRICE=0;this.RATE_INDEX=0;this.RATE_INDEX_MARGIN=0;this.RECAST_TO_AMORTIZE=1000000;this.SAVINGS_RATE=0;this.STATE_TAX_RATE=0;this.TERM=0;this.TERM_BALLOON=0;this.YEARS_IN_HOME=0;this.YEARLY_HOME_INSURANCE=0;this.YEARLY_PROPERTY_TAXES=0;this.BY_YEAR=true};KJE.MortgageLoanCalculation.prototype.calculate=function(h){var aH=KJE;if(this.PITI_PERCENT&&this.SHOW_PITI){this.YEARLY_PROPERTY_TAXES=aH.round((this.YEARLY_PROPERTY_TAXES/100)*this.LOAN_AMOUNT);this.YEARLY_HOME_INSURANCE=aH.round((this.YEARLY_HOME_INSURANCE/100)*this.LOAN_AMOUNT)}var U=this.ADJUSTABLE_RATE_CAP;var aP=this.ADJUSTABLE_RATE_FEQ;var m=this.ADJUSTABLE_RATE_FIXED;var L=this.ADJUSTABLE_RATE_INCR;var b=this.ADJUSTABLE_RATE;var aK=this.BALLOON_PAYMENT;var bk=this.bTERMINMONTHS;var W=this.DISCOUNT_POINTS_PERCENT;var aW=this.FEDERAL_TAX_RATE;var C=this.INFLATION_RATE;var ac=this.INTEREST_ONLY;var a2=this.INTEREST_RATE;var a5=this.LOAN_AMOUNT;var O=this.MARGINAL_TAX_RATE;var at=this.ORIGINATION_FEES_PERCENT;var N=this.OTHER_FEES_RATE;var X=this.OTHER_FEES;var aL=this.PAYMENT_CALC;var P=this.PREPAY_AMOUNT;var d=this.PREPAY_BALLOON_PAYMENT;var a9=this.PREPAY_STARTS_WITH;var w=this.PREPAY_TYPE;var ae=this.PURCHASE_PRICE;var aC=this.RATE_INDEX_MARGIN;var t=this.RATE_INDEX;var aM=this.RECAST_TO_AMORTIZE;var k=this.SAVINGS_RATE;var Y=this.STATE_TAX_RATE;var ax=this.TERM_BALLOON;var V=this.TERM;var H=this.YEARLY_HOME_INSURANCE;var aF=this.YEARLY_PROPERTY_TAXES;var aj=this.YEARS_IN_HOME;var al=this.BY_YEAR;var M="";var R=0;var j="";var a7=0;var bh=0;var D=0;var p=0;var ah=0;var aB=0;var bc=0;var aQ=0;var ak=0;var aT=0;var a8=0;var l=0;var o=0;var T=0;var f=0;var aI=0;var be;var e=0;var Q=0;var a1=0;var bn="";var ag=0;var aU=0;var bg=0;var av=0;var a6=0;var ba=0;var bf=0;var bt=0;var ay=0;var bi=0;var bd=0;var c=0;var bb=0;var S=0;var af=0;var g=0;if(bk){this.MONTHS=af=V%12;this.TERM=V=Math.floor(V/12)}var y=this.TOTAL_MONTHS=af+V*12;if(O==0){O=((Y/100)*(1-aW/100))*100+aW}if(aL==0){if(ac){a5=aH.round(l/(a2/1200),2)}else{a5=aH.round(KJE.PV(a2/1200,V*12+af,l),2)}M=this.MSG_RETURN_AMOUNT}else{if(ac){l=aH.round((a2/1200*a5),2)}else{l=aH.round(KJE.PMT(a2/1200,V*12+af,a5),2)}M=this.MSG_RETURN_PAYMENT}if(aj==0){aj=V+(af/12)}else{if(aj>V){aj=V+(af/12)}}var I=aj*12;var ad=true;if(ae==0){ae=a5;ad=false}if(!this.USE_OTHER_FEES_AMOUNT){X=aH.round((N/100)*a5,2)}D=aH.round((W/100)*a5,2);aI=aH.round((at/100)*a5,2);bt=D+aI+X;aT=(a5/ae);a8=aH.round(H/12,2);f=aH.round(aF/12,2);o=a8+f+l;ah=aH.round((a2/1200)*a5,2);aB=(ac?0:l-ah);var v=a2/1200;var aS=O/100;var B=k/1200;g=(t+aC)/100;if(b&&g!=a2/100&&g!=0){bi=KJE.MortgageLoanCalculation.APRAdjustable(V*12+af,a5,bt,a2/100,m,aP,g,L/100,U)}else{bi=KJE.APR(V*12+af,l,v,a5,bt)*12}bd=aH.round(KJE.PMT(v,V*12+af,a5+bt),2);c=a5+bt;bf=(a2/100)*(1-(aS*(a5>1000000?1000000/a5:1)));bb=(bi)*(1-(aS*(a5>1000000?1000000/a5:1)));ay=0;ak=0;var aA=false;if(ax>0){if(ax>V){throw this.MSG_ERROR_BALLOON}aA=true}if(ac&&aM<ax){ax=V;aA=true}var aE=Math.round(aA?ax:V)+1;var az=0;var aJ=this.DS_PRINCIPAL_BAL=KJE.FloatArray(aE);var aD=this.DS_PREPAY_PRINCIPAL_BAL=KJE.FloatArray(aE);var aY=this.DS_INTEREST_PAID=KJE.FloatArray(aE);var a4=this.DS_PAYMENTS=KJE.FloatArray(aE);var z=new Array(aE);var x=true;var a0=aF;av=(w==KJE.Default.PREPAY_ONETIME&&a9==0?P:0);var bm=a5-av;var aX=0;var aG=0;var br=0;var E=0;var ar=0;var aZ=(ac?ah:l);var bj=0;var J=0;var aR=a5;var aw=0;var aq=0;var A=0;var bs=0;var K=0;var Z=l;var a3=0;var bp=0;var bl=0;var u=0;var aa=0;var bq=0;if(w==KJE.Default.PREPAY_NONE){x=false}if(a9==0&&w!=KJE.Default.PREPAY_ONETIME){a9=1}var ap=0;z[ap]="0";aD[ap]=bm;aJ[ap]=a5;aY[ap]=0;a4[ap]=0;ap+=1;if(h){var am=this.sSchedule;am.clearRepeat();if(x){am.addHeader("&nbsp;",{sCell:KJE._sHeadingUnderline,sContent:am.sReportCol("Regular Payment Schedule",10),sFormat:"COLSPAN=3"},{sCell:KJE._sHeadingUnderline,sContent:am.sReportCol("Prepayment Payment Schedule",11),sFormat:"COLSPAN=3"})}if(!al&&x){am.addHeader(am.sReportCol("<BR><BR>Nbr",1),am.sReportCol("<BR><BR>Payment",2),am.sReportCol("<BR><BR>Interest",4),am.sReportCol("Ending<BR>Principal<BR>Balance",5),am.sReportCol("<BR><BR>Payment",2),am.sReportCol("<BR><BR>Interest",4),am.sReportCol("Ending<BR>Principal<BR>Balance",5))}else{if(!al&&!x){am.addHeader(am.sReportCol("<BR><BR>Nbr",1),am.sReportCol("<BR><BR>Payment",2),am.sReportCol("<BR><BR>Principal",3),am.sReportCol("<BR><BR>Interest",4),am.sReportCol("Ending<BR>Principal<BR>Balance",5))}else{if(al&&x){am.addHeader(am.sReportCol("<BR><BR>Yr ",6),am.sReportCol("<BR>Total<BR>Payments",7),am.sReportCol("<BR>Interest<BR>Paid",8),am.sReportCol("Ending<BR>Principal<BR>Balance",5),am.sReportCol("<BR>Total<BR>Payments",7),am.sReportCol("<BR>Interest<BR>Paid",8),am.sReportCol("Ending<BR>Principal<BR>Balance",5))}else{am.addHeader(am.sReportCol("<BR><BR>Year",6),am.sReportCol("<BR>Total<BR>Payments",7),am.sReportCol("<BR>Principal<BR>Paid",9),am.sReportCol("<BR>Interest<BR>Paid",8),am.sReportCol("Ending<BR>Principal<BR>Balance",5))}}}if(x){am.addRepeat("&nbsp;","&nbsp;","&nbsp;",aH.dollars(aR,2),(w==KJE.Default.PREPAY_ONETIME&&a9==0?aH.dollars(P,2):""),"&nbsp;","&nbsp;",aH.dollars(bm,2))}else{am.addRepeat("&nbsp;","&nbsp;","&nbsp;","&nbsp;",aH.dollars(aR,2))}}a7=l;var aO=l;var ab=l;var bo=a2/100;var ao=a2/100;var aV=0;if(b&&L!=0){if(this.sAdjSchedule==null){this.sAdjSchedule=new KJE.Repeating()}var G=this.sAdjSchedule;G.clearRepeat();G.addHeader(G.sReportCol("Payment Number",12),G.sReportCol("Interest Rate",13),G.sReportCol("Monthly Payment",14));G.addRepeat("1",aH.percent(ao,2),aH.dollars(l,2))}var F=(aA?ax*12:V*12+af);for(var au=1;au<=F;au++){az=au-1;aZ=aO;Z=ab;bj=0;a3=0;if(x&&(a9<=au)){if(w==KJE.Default.PREPAY_ONETIME&&a9==au){bj=P}else{if(w==KJE.Default.PREPAY_YEARLY){if(((au-a9)%12)==0){bj=P}}else{if(w==KJE.Default.PREPAY_MONTHLY){bj=P}}}}aw=aH.round(v*aR,2);if(ac&&au<=aM){Z=aw}bl=aH.round(v*(aR>1000000?1000000:aR),2);aq=(ac&&au<aM?0:Z-aw);aR-=aq;if(aR==0){Z=0;aq=0;aw=0}else{if(aR<0||(aR>0.005&&F==au&&!aA)){aq+=aR;aR=0;Z=aq+aw}else{if(F==au&&!aA){aR=0}}}aX=aH.round(v*bm,2);if(ac&&au<=aM){aZ=aX}u=aH.round(v*(bm>1000000?1000000:bm),2);if(ac&&au<aM){if(bm==0){aZ=0;aG=0;aX=0;bj=0}else{aG=aZ-aX;bm-=aG+bj;if(bm<0){bj+=bm;bm=0}}}else{aG=aZ-aX;bm-=aG+bj;if(bm==0){aZ=0;aG=0;aX=0;bj=0}else{if(bm<0){bj+=bm;if(bj<0){aG+=bj;bj=0}bm=0;aZ=aG+aX}else{if(bm>0.005&&F==au&&!aA){aG+=bm;bm=0;aZ=aG+aX}else{if(F==au&&!aA){bm=0}}}}}if(aZ<0){aZ=0}if(bm==0&&aU==0){ag=au;aU=V*12+af-au}br+=aX;aa+=u;E+=aG;ar+=aZ;J+=bj;av+=aZ+bj;Q+=aX;A+=aw;bq+=bl;bs+=aq;K+=Z;ay+=Z;ak+=aw;if((au%12)==0){if(au==12){bc=A;e=br;aQ=(O/100*(D+bq+a0));a3=aQ}else{a0*=1+C;a3=((O/100)*(bq+a0))}bp+=a3;bq=0;aa=0;a3=0}if(aA&&F==au){aK=aR+Z;aR=0;d=bm+aZ+bj;bm=0;ay-=Z;av-=bj+aZ}if(!al&&h){if(x){am.addRepeat(aH.number(au),aH.dollars((aA&&F==au?aK:Z),2),aH.dollars(aw,2),aH.dollars(aR,2),aH.dollars((aA&&F==au?d:bj+aZ),2),aH.dollars(aX,2),aH.dollars(bm,2))}else{am.addRepeat(aH.number(au),aH.dollars((aA&&F==au?aK:Z),2),aH.dollars((aA&&F==au?aK-aw:aq),2),aH.dollars(aw,2),aH.dollars(aR,2))}}if((au%12)==0){z[ap]=""+ap;if(aA&&F==au){aD[ap]=d;aJ[ap]=aK}else{aD[ap]=bm;aJ[ap]=aR}aY[ap]=A;a4[ap]=(aA&&F==au?aK-Z+K:K);ap+=1;if(al&&h){if(x){am.addRepeat(aH.number(au/12),aH.dollars((aA&&F==au?aK-Z+K:K),2),aH.dollars(A,2),aH.dollars(aR,2),aH.dollars((aA&&F==au?d-bj-aZ+ar+J:ar+J),2),aH.dollars(br,2),aH.dollars(bm,2))}else{am.addRepeat(aH.number((au/12)),aH.dollars((aA&&F==au?aK-Z+K:K),2),aH.dollars((aA&&F==au?aK+bs-aw-aq:bs),2),aH.dollars(A,2),aH.dollars(aR,2))}}A=0;bq=0;bs=0;K=0;br=0;aa=0;E=0;ar=0;J=0}if((au==aM)||((au<m?1:(au-m)%aP)==0&&au!=1&&b&&au!=V*12+af&&L!=0&&au>=m)){ao+=L/100;if(ao>U/100){ao=U/100}if(ao<0.02){ao=0.02}if(ao!=bo||(au==aM)){bo=ao;v=ao/12;aO=aH.round(KJE.PMT(v,V*12+af-au,bm),2);ab=aH.round(KJE.PMT(v,V*12+af-au,aR),2);if(R==0){R=ab}S=ab;if(a7<ab){a7=ab}if(b&&L!=0){G.addRepeat(au,aH.percent(ao,2),aH.dollars(ab,2))}}}}if(b&&L!=0){j=G.getRepeat();G.clearRepeat()}this.PREPAY_SHORTEN_TOTAL_MONTHS=aU;bg=(aU/12);aU=(aU%12);bn=this.MSG_PREPAY_MESSAGE;bh=(bp/(V+af/12));p=aR;be=bm;av=Q+a5-be;ay=ak+a5-p;var an=1;if(x){an=2}var aN=this.DS_INTEREST=new Array(an);var a=this.DS_PRINCIPAL=new Array(an);var ai=this.totalpaid_cats=new Array(an);aN[0]=ak;a[0]=a5-p;ai[0]=this.MSG_NORMAL_PAYMENTS;if(x){aN[1]=Q;a[1]=a5-be;ai[1]=this.MSG_PREPAYMENTS;a1=ak-Q}this.cats=z;this.sReturnMessage=M;this.MARGINAL_TAX_RATE=O;this.ADJUSTABLE_AFTER_FIRST_ADJ=R;this.ADJUSTABLE_PAYMENT_AMTS=j;this.ADJUSTABLE_RATE_HIGHEST=a7;this.AVG_TAX_SAVINGS=bh;this.DISCOUNT_POINTS_AMT=D;this.ENDING_BALANCE=p;this.FIRST_MONTH_INTEREST=ah;this.FIRST_MONTH_PRINCIPAL=aB;this.FIRST_YEAR_INTEREST=bc;this.FIRST_YEAR_TAX_SAVINGS=aQ;this.FULLY_INDEX_RATE=g;this.FULLY_INDEXED_PAYMENT=S;this.INTEREST_PAID=ak;this.LOAN_APR=bi;this.LOAN_APR_AFT=bb;this.LOAN_APR_AMOUNT=c;this.LOAN_APR_PAYMENT=bd;this.LOAN_TO_VALUE=aT;this.MONTHLY_HOME_INSURANCE=a8;this.MONTHLY_PI=l;this.MONTHLY_PITI=o;this.MONTHLY_PROPERTY_TAXES=f;this.MONTHS=af;this.ORIGINATION_FEES_AMT=aI;this.PREPAY_ENDING_BALANCE=be;this.PREPAY_FIRST_YEAR_INTEREST=e;this.PREPAY_INTEREST_PAID=Q;this.PREPAY_INTEREST_SAVINGS=a1;this.PREPAY_MESSAGE=bn;this.PREPAY_PAYOFF_MONTHS=ag;this.PREPAY_SHORTEN_MONTHS=aU;this.PREPAY_SHORTEN_YEARS=bg;this.PREPAY_TOTAL_OF_PAYMENTS=av;this.PREPAY_TOTAL_VALUE=a6;this.PREPAY_TOTAL_VALUE_AFTX=ba;this.TAX_ADJ_RATE=bf;this.TOTAL_CLOSING_COSTS=bt;this.TOTAL_OF_PAYMENTS=ay;this.OTHER_FEES=X;this.BALLOON_PAYMENT=aK;this.PREPAY_BALLOON_PAYMENT=d;this.REGULAR_PAYMENTS=aH.input(this.TERM_BALLOON*12-1)};KJE.MortgageLoanCalculation.prototype.formatReport=function(a){var b=KJE;var c=a;c=KJE.replace("FIXED_YEARS",b.number(this.ADJUSTABLE_RATE_FIXED/12),c);c=KJE.replace("ADJUSTABLE_YEARS",b.number(this.TERM+this.MONTHS/12-this.ADJUSTABLE_RATE_FIXED/12),c);c=KJE.replace("RECAST_TO_AMORTIZE_YEARS",b.number(this.RECAST_TO_AMORTIZE/12),c);c=KJE.replace("RECAST_TO_AMORTIZE",b.number(this.RECAST_TO_AMORTIZE),c);c=KJE.replace("REMAIN_AFTER_AMORTIZE",b.number(this.TERM*12+this.MONTHS-this.RECAST_TO_AMORTIZE),c);c=KJE.replace("MSG_TERM",this.MSG_TERM,c);c=KJE.replace("RESULT_MESSAGE",this.sReturnMessage,c);c=KJE.replace("YEARS_IN_HOME",b.number(this.YEARS_IN_HOME),c);c=KJE.replace("YEARLY_PROPERTY_TAXES",b.dollars(this.YEARLY_PROPERTY_TAXES,2),c);c=KJE.replace("YEARLY_HOME_INSURANCE",b.dollars(this.YEARLY_HOME_INSURANCE,2),c);c=KJE.replace("TOTAL_CLOSING_COSTS",b.dollars(this.TOTAL_CLOSING_COSTS,2),c);c=KJE.replace("TERM_BALLOON",b.number(this.TERM_BALLOON),c);if(this.MONTHS>0){c=KJE.replace("TERM",b.number(this.TERM*12+this.MONTHS),c);c=KJE.replace("years","months",c)}else{c=KJE.replace("TERM",b.number(this.TERM),c)}c=KJE.replace("TAX_ADJ_RATE",b.percent(this.TAX_ADJ_RATE,3),c);c=KJE.replace("SAVINGS_RATE",b.percent(this.SAVINGS_RATE/100,3),c);c=KJE.replace("PURCHASE_PRICE",b.dollars(this.PURCHASE_PRICE,2),c);c=KJE.replace("ADJUSTABLE_RATE_FEQ",b.number(this.ADJUSTABLE_RATE_FEQ),c);c=KJE.replace("ADJUSTABLE_RATE_INCR",b.percent(this.ADJUSTABLE_RATE_INCR/100,2),c);c=KJE.replace("ADJUSTABLE_RATE_CAP",b.percent(this.ADJUSTABLE_RATE_CAP/100,3),c);c=KJE.replace("ADJUSTABLE_PAYMENT_AMTS",this.ADJUSTABLE_PAYMENT_AMTS,c);c=KJE.replace("ADJUSTABLE_RATE_HIGHEST",b.dollars(this.ADJUSTABLE_RATE_HIGHEST,2),c);c=KJE.replace("ADJUSTABLE_AFTER_FIRST_ADJ",b.dollars(this.ADJUSTABLE_AFTER_FIRST_ADJ,2),c);c=KJE.replace("ADJUSTABLE_RATE_FIXED",b.number(this.ADJUSTABLE_RATE_FIXED),c);c=KJE.replace("RATE_INDEX_MARGIN",b.percent(this.RATE_INDEX_MARGIN/100,3),c);c=KJE.replace("RATE_INDEX",b.percent(this.RATE_INDEX/100,3),c);c=KJE.replace("ADJUSTABLE_RATE",b.yesno(this.ADJUSTABLE_RATE),c);c=KJE.replace("REGULAR_PAYMENTS",this.REGULAR_PAYMENTS,c);if(this.PREPAY_TYPE==KJE.Default.PREPAY_NONE){c=KJE.replace("PREPAY_MESSAGE","",c);c=KJE.replace("PREPAY_TYPE",this.PREPAY_TYPE,c);c=KJE.replace("PREPAY_TOTAL_VALUE_AFTX","",c);c=KJE.replace("PREPAY_TOTAL_VALUE","",c);c=KJE.replace("PREPAY_TOTAL_OF_PAYMENTS","",c);c=KJE.replace("PREPAY_SHORTEN_TERM","",c);c=KJE.replace("PREPAY_STARTS_WITH","",c);c=KJE.replace("PREPAY_SHORTEN_YEARS","",c);c=KJE.replace("PREPAY_SHORTEN_MONTHS","",c);c=KJE.replace("PREPAY_INTEREST_SAVINGS","",c);c=KJE.replace("PREPAY_INTEREST_PAID","",c);c=KJE.replace("PREPAY_FIRST_YEAR_INTEREST","",c);c=KJE.replace("PREPAY_AMOUNT","",c);c=KJE.replace("PREPAY_ENDING_BALANCE","",c);c=KJE.replace("PREPAY_BALLOON_PAYMENT","",c);c=KJE.replace("PREPAY_PAYOFF_PERIODS","",c)}else{c=KJE.replace("PREPAY_MESSAGE",this.PREPAY_MESSAGE,c);c=KJE.replace("PREPAY_TYPE",KJE.Default.PREPAY_PERIODS[this.PREPAY_TYPE],c);c=KJE.replace("PREPAY_TOTAL_VALUE_AFTX",b.dollars(this.PREPAY_TOTAL_VALUE_AFTX,2),c);c=KJE.replace("PREPAY_TOTAL_VALUE",b.dollars(this.PREPAY_TOTAL_VALUE,2),c);c=KJE.replace("PREPAY_TOTAL_OF_PAYMENTS",b.dollars(this.PREPAY_TOTAL_OF_PAYMENTS,2),c);c=KJE.replace("PREPAY_STARTS_WITH",b.number(this.PREPAY_STARTS_WITH),c);c=KJE.replace("PREPAY_SHORTEN_TERM",KJE.getTermLabel(this.PREPAY_SHORTEN_TOTAL_MONTHS),c);c=KJE.replace("PREPAY_SHORTEN_YEARS",b.number(this.PREPAY_SHORTEN_YEARS),c);c=KJE.replace("PREPAY_SHORTEN_MONTHS",b.number(this.PREPAY_SHORTEN_MONTHS),c);c=KJE.replace("PREPAY_INTEREST_SAVINGS",b.dollars(this.PREPAY_INTEREST_SAVINGS,2),c);c=KJE.replace("PREPAY_INTEREST_PAID",b.dollars(this.PREPAY_INTEREST_PAID,2),c);c=KJE.replace("PREPAY_FIRST_YEAR_INTEREST",b.dollars(this.PREPAY_FIRST_YEAR_INTEREST,2),c);c=KJE.replace("PREPAY_AMOUNT",b.dollars(this.PREPAY_AMOUNT,2),c);c=KJE.replace("PREPAY_ENDING_BALANCE",b.dollars(this.PREPAY_ENDING_BALANCE,2),c);c=KJE.replace("PREPAY_BALLOON_PAYMENT",b.dollars(this.PREPAY_BALLOON_PAYMENT,2),c);c=KJE.replace("PREPAY_PAYOFF_PERIODS",KJE.getTermLabel(this.PREPAY_PAYOFF_MONTHS),c)}c=KJE.replace("OTHER_FEES",b.dollars(this.OTHER_FEES,2),c);c=KJE.replace("ORIGINATION_FEES_PERCENT",b.percent(this.ORIGINATION_FEES_PERCENT/100,2),c);c=KJE.replace("ORIGINATION_FEES_AMT",b.dollars(this.ORIGINATION_FEES_AMT,2),c);c=KJE.replace("MONTHLY_PROPERTY_TAXES",b.dollars(this.MONTHLY_PROPERTY_TAXES,2),c);c=KJE.replace("MONTHLY_PITI",b.dollars(this.MONTHLY_PITI,2),c);c=KJE.replace("MONTHLY_PI",b.dollars(this.MONTHLY_PI,2),c);c=KJE.replace("MONTHLY_HOME_INSURANCE",b.dollars(this.MONTHLY_HOME_INSURANCE,2),c);c=KJE.replace("MARGINAL_TAX_RATE",b.percent(this.MARGINAL_TAX_RATE/100,2),c);c=KJE.replace("FEDERAL_TAX_RATE",b.percent(this.FEDERAL_TAX_RATE/100,2),c);c=KJE.replace("STATE_TAX_RATE",b.percent(this.STATE_TAX_RATE/100,2),c);c=KJE.replace("LOAN_TO_VALUE",b.percent(this.LOAN_TO_VALUE,2),c);c=KJE.replace("LOAN_APR_AFT",b.percent(this.LOAN_APR_AFT,3),c);c=KJE.replace("LOAN_APR_PAYMENT",b.dollars(this.LOAN_APR_PAYMENT,2),c);c=KJE.replace("LOAN_APR_AMOUNT",b.dollars(this.LOAN_APR_AMOUNT,2),c);c=KJE.replace("LOAN_APR",b.percent(this.LOAN_APR,3),c);c=KJE.replace("LOAN_AMOUNT",b.dollars(this.LOAN_AMOUNT,2),c);c=KJE.replace("INTEREST_RATE",b.percent(this.INTEREST_RATE/100,3),c);c=KJE.replace("INTEREST_PAID",b.dollars(this.INTEREST_PAID,2),c);c=KJE.replace("INFLATION_RATE",b.percent(this.INFLATION_RATE/100,2),c);c=KJE.replace("FIRST_YEAR_TAX_SAVINGS",b.dollars(this.FIRST_YEAR_TAX_SAVINGS,2),c);c=KJE.replace("FIRST_YEAR_INTEREST",b.dollars(this.FIRST_YEAR_INTEREST,2),c);c=KJE.replace("FIRST_MONTH_PRINCIPAL",b.dollars(this.FIRST_MONTH_PRINCIPAL,2),c);c=KJE.replace("FIRST_MONTH_INTEREST",b.dollars(this.FIRST_MONTH_INTEREST,2),c);c=KJE.replace("DISCOUNT_POINTS_PERCENT",b.number(this.DISCOUNT_POINTS_PERCENT,2),c);c=KJE.replace("DISCOUNT_POINTS_AMT",b.dollars(this.DISCOUNT_POINTS_AMT,2),c);c=KJE.replace("AVG_TAX_SAVINGS",b.dollars(this.AVG_TAX_SAVINGS,2),c);c=KJE.replace("TOTAL_OF_PAYMENTS",b.dollars(this.TOTAL_OF_PAYMENTS,2),c);c=KJE.replace("ENDING_BALANCE",b.dollars(this.ENDING_BALANCE,2),c);c=KJE.replace("BALLOON_PAYMENT",b.dollars(this.BALLOON_PAYMENT,2),c);c=KJE.replace("FULLY_INDEXED_PAYMENT",b.dollars(this.FULLY_INDEXED_PAYMENT,2),c);c=KJE.replace("INTEREST_ONLY",b.yesno(this.INTEREST_ONLY?1:0),c);c=KJE.replace("CHECKBOX_BY_MONTH",(this.BY_YEAR?"":"CHECKED"),c);c=KJE.replace("CHECKBOX_BY_YEAR",(this.BY_YEAR?"CHECKED":""),c);c=c.replace("**REPEATING GROUP**",this.sSchedule.getRepeat());this.sSchedule.clearRepeat();return c};KJE.MortgageLoanCalculation.prototype.getCategories=function(){return this.cats};KJE.MortgageLoanCalculation.prototype.getAmountPaidCategories=function(){return this.totalpaid_cats};KJE.MortgageLoanCalculation.APRAdjustable=function(t,q,d,k,s,j,c,f,l){var b=q;var p=k/12;var r=p;var h=KJE.PMT(p,t,b);var g=0;var e=new Array();e[0]=Math.round(100*(-q+d));for(var o=1;o<=t;o++){b-=h-(p*b);g+=h;e[o]=Math.round(100*h);if((o<s?1:(o-s)%j)==0&&o!=1&&o!=t){var m=c/12;if(m>(r+f)){m=r+f}if(m>l/12){m=l/12}if(m!=r){r=m;p=m;h=KJE.PMT(p,t-o,b)}}}var a=(c>k?c:k);return(KJE.MortgageLoanCalculation.IRR(e,a/12)*12)};KJE.MortgageLoanCalculation.IRR=function(f,e){var c=e/2;var b;var d=f.length;while(true){b=0;for(var a=0;a<d;a++){b+=f[a]/Math.pow((1+e),a)}if(b>-1&&b<1){break}e+=(b>0?c:-c);c=c/2}return e};KJE.Default.PREPAY_NONE=0;KJE.Default.PREPAY_WEEKLY=1;KJE.Default.PREPAY_BIWEEKLY=2;KJE.Default.PREPAY_2XMONTHLY=3;KJE.Default.PREPAY_MONTHLY=4;KJE.Default.PREPAY_YEARLY=5;KJE.Default.PREPAY_ONETIME=6;KJE.Default.PREPAY_FREQUENCY=[0,52,26,24,12,1,0];KJE.Default.getPrepayDrop=function(c,b,g){KJE.Default.PREPAY_PERIOD_IDs=KJE.parameters.get("ARRAY_PREPAY_PERIOD_ID",[KJE.Default.PREPAY_NONE,KJE.Default.PREPAY_MONTHLY,KJE.Default.PREPAY_YEARLY,KJE.Default.PREPAY_ONETIME]);KJE.Default.PREPAY_PERIODS=KJE.parameters.get("ARRAY_PREPAY_PERIODS",[KJE.parameters.get("MSG_PREPAY_NONE","none"),"Weekly","bi-weekly","semi-monthly",KJE.parameters.get("MSG_PREPAY_MONTHLY","monthly"),KJE.parameters.set("MSG_PREPAY_YEARLY","yearly"),KJE.parameters.get("MSG_PREPAY_ONETIME","one-time")]);var a=KJE.Default.PREPAY_PERIOD_IDs;var f=a.length;var e=KJE.Default.PREPAY_PERIODS;var d=new Array(f);for(i=0;i<f;i++){d[i]=e[a[i]]}return KJE.getDropBox(c,KJE.parameters.get(c,(!b?KJE.Default.PAY_LOAN_IDs:b)),a,d,g)};KJE.CalcName="Mortgage Loan Calculator (PITI)";KJE.CalcType="MortgageLoan2";KJE.CalculatorTitleTemplate="Monthly payment is KJE1";KJE.parseInputs=function(a){a=KJE.replace("**TERM**",KJE.getMortgageTermDrop("TERM",30),a);if(KJE.Default.getPrepayDrop){a=KJE.replace("**PREPAY_TYPE**",KJE.Default.getPrepayDrop("PREPAY_TYPE",KJE.Default.PREPAY_NONE),a)}return a};KJE.initialize=function(){KJE.CalcControl=new KJE.MortgageLoanCalculation();KJE.GuiControl=new KJE.MortgageLoan(KJE.CalcControl)};KJE.MortgageLoan=function(k){var e=KJE;var h=KJE.inputs.items;this.MSG_GRAPHTOTAL_SUBTITLE1=KJE.parameters.get("MSG_GRAPHTOTAL_SUBTITLE1","Total Interest KJE1");this.MSG_GRAPHTOTAL_SUBTITLE2=KJE.parameters.get("MSG_GRAPHTOTAL_SUBTITLE2","Prepayment Interest Savings KJE1");this.MSG_GRAPHPAYMENTS_SUBTITLE1=KJE.parameters.get("MSG_GRAPHPAYMENTS_SUBTITLE1","Principal Balances by Year");this.MSG_GRAPHPAYMENTS_SUBTITLE2=KJE.parameters.get("MSG_GRAPHPAYMENTS_SUBTITLE2","Prepayment Term KJE1");KJE.MortgageAmtSlider("LOAN_AMOUNT","Mortgage amount");KJE.MortgageTermDropBoxSlider("TERM","Term in years");KJE.NumberSlider("TERM_MONTHS","Term in months",KJE.parameters.get("TERM_MONTHS_MIN",0),KJE.parameters.get("TERM_MONTHS_MAX",480));if(k.bTERMINMONTHS){h.TERM.hide()}else{h.TERM_MONTHS.hide()}KJE.MortgageRateSlider("INTEREST_RATE","Interest rate");KJE.DropBox("PREPAY_TYPE","Prepayment type");KJE.Label("MONTHLY_PAYMENT",k.SHOW_PITI?"Monthly payment (PI)":"Monthly payment",null,null,"KJEBold");KJE.NumberSlider("PREPAY_STARTS_WITH","Start with payment",0,KJE.Default.MortgageTermMax*12);KJE.Slider("PREPAY_AMOUNT","Prepayment amount",0,10000000,2,e.FMT_DOLLARS,0,KJE.s_label[0],KJE.useScale(0));KJE.Radioboxes("BY_YEAR","Report amortization",true,"Annually","Monthly");if(k.SHOW_PITI){KJE.Slider("YEARLY_PROPERTY_TAXES","Annual property taxes",0,10000000,0,e.FMT_DOLLARS,0,KJE.s_label[1],KJE.useScale(1));KJE.Slider("YEARLY_HOME_INSURANCE","Annual home insurance",0,10000000,0,e.FMT_DOLLARS,0,KJE.s_label[1],KJE.useScale(1));KJE.Label("MONTHLY_PITI","Monthly payment (PITI)",null,null,"KJEBold")}var a=KJE.parameters.get("MSG_DROPPER_TITLE","Loan information: ");var c=KJE.parameters.get("MSG_DROPPER_CLOSETITLE","KJE1 loan for KJE2 years at KJE3");var m=KJE.parameters.get("MSG_PREPAY_IMMEDIATE","starting immediately");var f=KJE.parameters.get("MSG_DROPPER_PREPAYMENTS","Prepayments:");var b=KJE.parameters.get("MSG_DROPPER_PREPAYMENTSCLOSE","KJE1");var d=function(){return a+KJE.subText(KJE.getKJEReplaced(c,e.dollars(k.LOAN_AMOUNT),e.number(k.TERM),e.percent(k.INTEREST_RATE/100,3)),"KJECenter")};KJE.addDropper(new KJE.Dropper("INPUTS",true,a,d),KJE.colorList[0]);var n=function(){if(h.PREPAY_TYPE.getValue()==KJE.Default.PREPAY_NONE){return f+KJE.subText(KJE.Default.PREPAY_PERIODS[KJE.Default.PREPAY_NONE],"KJECenter")}else{var l=h.PREPAY_STARTS_WITH.getFormatted();return f+KJE.subText(h.PREPAY_AMOUNT.getFormatted()+" "+h.PREPAY_TYPE.getFormatted().toLowerCase()+" "+(h.PREPAY_STARTS_WITH.getValue()<1?m:h.PREPAY_STARTS_WITH.getName().toLowerCase()+" "+h.PREPAY_STARTS_WITH.getFormatted()),"KJECenter")}};KJE.addDropper(new KJE.Dropper("PREPAY",false,f,n),KJE.colorList[0]);var g=KJE.gNewGraph(KJE.gSTACKED,"GRAPH1",true,false,KJE.colorList[1],KJE.parameters.get("MSG_GRAPH_TITLE1","Total Payments KJE1<div class=KJESubTitle>KJE2</div>"));g._legend._iOrientation=(KJE.gLegend.TOP_RIGHT);g._titleYAxis.setText(KJE.sCurrency);g._showItemLabel=false;var j=KJE.gNewGraph(KJE.gCOLUMN,"GRAPH2",true,true,KJE.colorList[1],KJE.parameters.get("MSG_GRAPH_TITLE2","Mortgage Term KJE1<div class=KJESubTitle>KJE2</div>"));j._legend._iOrientation=KJE.gLegend.GRID_TOP_RIGHT;j._iArea=KJE.gGraphLine.AREA_ALL};KJE.MortgageLoan.prototype.setValues=function(b){var a=KJE.inputs.items;b.LOAN_AMOUNT=a.LOAN_AMOUNT.getValue();if(b.bTERMINMONTHS){b.TERM=a.TERM_MONTHS.getValue()}else{b.TERM=a.TERM.getValue()}b.INTEREST_RATE=a.INTEREST_RATE.getValue();b.PREPAY_TYPE=a.PREPAY_TYPE.getValue();b.PREPAY_AMOUNT=a.PREPAY_AMOUNT.getValue();b.PREPAY_STARTS_WITH=a.PREPAY_STARTS_WITH.getValue();b.BY_YEAR=a.BY_YEAR.getValue();if(b.SHOW_PITI){b.YEARLY_PROPERTY_TAXES=a.YEARLY_PROPERTY_TAXES.getValue();b.YEARLY_HOME_INSURANCE=a.YEARLY_HOME_INSURANCE.getValue()}if(b.PREPAY_TYPE==KJE.Default.PREPAY_NONE){a.PREPAY_AMOUNT.disable();a.PREPAY_STARTS_WITH.disable()}else{a.PREPAY_AMOUNT.enable();a.PREPAY_STARTS_WITH.enable()}};KJE.MortgageLoan.prototype.refresh=function(e){var b=KJE.inputs.items;var d=KJE;var a=KJE.gGraphs[0];var c=KJE.gGraphs[1];KJE.setTitleTemplate(d.dollars(e.SHOW_PITI?e.MONTHLY_PITI:e.MONTHLY_PI,2));a.removeAll();a.setGraphCategories(e.getAmountPaidCategories());if(e.PREPAY_TYPE==KJE.Default.PREPAY_NONE){a.setTitleTemplate(d.dollars(e.TOTAL_OF_PAYMENTS),KJE.getKJEReplaced(this.MSG_GRAPHTOTAL_SUBTITLE1,d.dollars(e.INTEREST_PAID)));a._axisX.setVisible(false)}else{a.setTitleTemplate(d.dollars(e.TOTAL_OF_PAYMENTS),KJE.getKJEReplaced(this.MSG_GRAPHTOTAL_SUBTITLE2,d.dollars(e.PREPAY_INTEREST_SAVINGS)));a._axisX.setVisible(true)}a.add(new KJE.gGraphDataSeries(e.DS_INTEREST,e.MSG_INTEREST,a.getColor(1),"",e.MSG_POP_INTEREST));a.add(new KJE.gGraphDataSeries(e.DS_PRINCIPAL,e.MSG_PRINCIPAL,a.getColor(2),"",e.MSG_POP_PRINCIPAL));a.paint();c.removeAll();c._titleXAxis.setText(e.MSG_YEAR_NUMBER);c.setGraphCategories(e.getCategories());if(e.PREPAY_TYPE==KJE.Default.PREPAY_NONE){c.add(new KJE.gGraphDataSeries(e.DS_PRINCIPAL_BAL,e.MSG_NORMAL_PAYMENTS,c.getColor(1),"",e.MSG_POP_PRINCIPAL_NORMAL+" "));c.setTitleTemplate(KJE.getTermLabel(e.TOTAL_MONTHS),this.MSG_GRAPHPAYMENTS_SUBTITLE1);c._legend.setVisible(false)}else{c.add(new KJE.gGraphDataSeries(e.DS_PRINCIPAL_BAL,e.MSG_NORMAL_PAYMENTS,c.getColor(1),"",e.MSG_POP_PRINCIPAL_NORMAL+" "));c.add(new KJE.gGraphDataSeries(e.DS_PREPAY_PRINCIPAL_BAL,e.MSG_PREPAYMENTS,c.getColor(2),"",e.MSG_POP_PRINCIPAL_PREPAY+" "));c.setTitleTemplate(KJE.getTermLabel(e.TOTAL_MONTHS),KJE.getKJEReplaced(this.MSG_GRAPHPAYMENTS_SUBTITLE2,KJE.getTermLabel(e.PREPAY_PAYOFF_MONTHS)));c._legend.setVisible(true)}c.paint();b.MONTHLY_PAYMENT.setText(d.dollars(e.MONTHLY_PI,2));if(e.SHOW_PITI){b.MONTHLY_PITI.setText(d.dollars(e.MONTHLY_PITI,2))}};KJE.InputScreenText=' <div id=KJE-D-INPUTS><div id=KJE-P-INPUTS>Mortgage information:</div></div> <div id=KJE-E-INPUTS > <div id="KJE-C-LOAN_AMOUNT"><input id="KJE-LOAN_AMOUNT" /></div> <div id="KJE-C-TERM">**TERM**</div> <div id="KJE-C-TERM_MONTHS"><input id=\'KJE-TERM_MONTHS\' /></div> <div id="KJE-C-INTEREST_RATE"><input id="KJE-INTEREST_RATE" /></div> <div id="KJE-C-YEARLY_PROPERTY_TAXES"><input id="KJE-YEARLY_PROPERTY_TAXES" /></div> <div id="KJE-C-YEARLY_HOME_INSURANCE"><input id="KJE-YEARLY_HOME_INSURANCE" /></div> <div id="KJE-C-MONTHLY_PAYMENT"><div id="KJE-MONTHLY_PAYMENT"></div></div> <div id="KJE-C-MONTHLY_PITI"><div id="KJE-MONTHLY_PITI"></div></div> <div id="KJE-C-BY_YEAR"><input id="KJE-BY_YEAR1" type=radio name=BY_YEAR /><input id="KJE-BY_YEAR2" type=radio name=BY_YEAR /></div> <div style="height:10px"></div> </div> <div id=KJE-D-PREPAY><div id=KJE-P-PREPAY>Prepayment information</div></div> <div id=KJE-E-PREPAY > <div id="KJE-C-PREPAY_TYPE">**PREPAY_TYPE**</div> <div id="KJE-C-PREPAY_AMOUNT"><input id="KJE-PREPAY_AMOUNT" /></div> <div id="KJE-C-PREPAY_STARTS_WITH"><input id="KJE-PREPAY_STARTS_WITH" /></div> <div style="height:10px"></div> </div> **GRAPH1** **GRAPH2** ';KJE.DefinitionText=' <div id="KJE-D-LOAN_AMOUNT" ><dt>Mortgage amount</dt><dd>Original or expected balance for your mortgage.</div> <div id="KJE-D-TERM" ><dt>Term in years</dt><dd>The number of years over which you will repay this loan. The most common mortgage terms are 15 years and 30 years.</div> <div id="KJE-D-INTEREST_RATE" ><dt>Interest rate</dt><dd>Annual fixed interest rate for this mortgage.</div> <div id="KJE-D-MONTHLY_PAYMENT" ><dt>Monthly payment (PI)</dt><dd>Monthly principal and interest payment (PI).</div> <div id="KJE-D-MONTHLY_PITI" ><dt>Monthly payment (PITI)</dt><dd>Monthly payment including principal, interest, homeowners insurance and property taxes.</div> <div id="KJE-D-YEARLY_PROPERTY_TAXES" ><dt>Annual property taxes</dt><dd>The annual amount you expect to pay in property taxes. This amount is divided by 12 to determine the monthly property tax included in PITI.</div> <div id="KJE-D-YEARLY_HOME_INSURANCE" ><dt>Annual home insurance</dt><dd>The annual amount you expect to pay in homeowners insurance. This amount is divided by 12 to determine the monthly home owners insurance included in PITI.</div> <div id="KJE-D-" ><dt>Total payments</dt><dd>Total of all monthly payments over the full term of the mortgage. This total payment amount assumes that there are no prepayments of principal.</div> <div id="KJE-D-" ><dt>Total interest</dt><dd>Total of all interest paid over the full term of the mortgage. This total interest amount assumes that there are no prepayments of principal.</div> <div id="KJE-D-PREPAY_TYPE" ><dt>Prepayment type</dt><dd>The frequency of prepayment. The options are none, monthly, yearly and one-time payment.</div> <div id="KJE-D-PREPAY_AMOUNT" ><dt>Prepayment amount</dt><dd>Amount that will be prepaid on your mortgage. This amount will be applied to the mortgage principal balance, based on the prepayment type.</div> <div id="KJE-D-PREPAY_STARTS_WITH" ><dt>Start with payment</dt><dd>This is the payment number that your prepayments will begin with. For a one-time payment, this is the payment number that the single prepayment will be included in. All prepayments of principal are assumed to be received by your lender in time to be included in the following month\'s interest calculation. If you choose to prepay with a one-time payment for payment number zero, the prepayment is assumed to happen before the first payment of the loan.</div> <div id="KJE-D-" ><dt>Savings</dt><dd>Total amount of interest you will save by prepaying your mortgage.</div> <div id="KJE-D-BY_YEAR" ><dt>Report amortization</dt><dd>Choose how the report will display your payment schedule. Annually will summarize payments and balances by year. Monthly will show every payment for the entire term.</div> ';KJE.ReportText=' <h2 class=\'KJEReportHeader KJEFontHeading\'>Based on the information you entered, your payment is MONTHLY_PITI for TERM years with a rate of INTEREST_RATE.</h2> **GRAPH** <div class=KJECenter> <div class=KJEReportTableDiv><table class=KJEReportTable> <tr class=KJEHeaderRow><th COLSPAN=2 class=KJEHeading>Mortgage Summary</th></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder KJECell70" >Loan amount</td><td class=KJECell>LOAN_AMOUNT</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder">Term</td><td class=KJECell>TERM years</td></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder">Interest rate</td><td class=KJECell>INTEREST_RATE</td></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder">Annual home insurance</td><td class=KJECell>YEARLY_HOME_INSURANCE</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder">Annual property taxes</td><td class=KJECell>YEARLY_PROPERTY_TAXES</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder">Monthly payment (PI)</td><td class=KJECell>MONTHLY_PI</td></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder">Monthly payment (PITI)*</td><td class=KJECell>MONTHLY_PITI</td></tr> <tr class=KJEFooterRow><td class="KJELabel KJECellBorder">Total principal and interest payments</td><td class=KJECellStrong>TOTAL_OF_PAYMENTS</td></tr> <tr class=KJEFooterRow><td class="KJELabel KJECellBorder">Total interest</td><td class=KJECellStrong>INTEREST_PAID</td></tr> </table></div> <div class=KJEFooter>*Principal, Interest, Taxes, Insurance</div> </div> <h2 class=\'KJEReportHeader KJEFontHeading\'>Prepayment Results</h2>Principal prepayments on your mortgage can save you a great deal of interest. They can also shorten the time it takes to pay off your mortgage, in many cases, by several years. PREPAY_MESSAGE <div class=KJECenter> <div class=KJEReportTableDiv><table class=KJEReportTable> <tr class=KJEHeaderRow><th COLSPAN=2 class=KJEHeading>Prepayment Summary</th></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder KJECell70">Amount</td><td class=KJECell>PREPAY_AMOUNT PREPAY_TYPE</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder">Start with payment</td><td class=KJECell>PREPAY_STARTS_WITH</td></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder">Total payments</td><td class=KJECell>PREPAY_TOTAL_OF_PAYMENTS</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder">Total interest</td><td class=KJECell>PREPAY_INTEREST_PAID</td></tr> <tr class=KJEFooterRow><td class="KJELabel KJECellBorder">Interest savings</td><td class=KJECellStrong>PREPAY_INTEREST_SAVINGS</td></tr> <tr class=KJEFooterRow><td class="KJELabel KJECellBorder">Mortgage paid off in</td><td class=KJECellStrong>PREPAY_PAYOFF_PERIODS</td></tr> </table></div> </div> <h2 class=\'KJEScheduleHeader KJEFontHeading\'>Payment Schedule</h2> **REPEATING GROUP** ';