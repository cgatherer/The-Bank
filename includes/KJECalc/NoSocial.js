KJE.SocialSecurityCalc=function(){this.iDecimal=0;this.ADJUST_ONLY=false;this.SOCIAL_SECURITY_CURRENT_MAX=118500;this.SOCIAL_SECURITY_AP_MAX=31668;this.SOCIAL_SECURITY_MAX_RATIO=0.26724;this.SOCIAL_EARLIEST_RETIRE_AGE=62;this.SOCIAL_NORMAL_RETIRE_AGE=67;this.SOCIAL_LATEST_RETIRE_AGE=70;this.EARLY_DISCOUNTS=[0.7,0.75,0.8,0.86666,0.93333,1];this.EARLY_AGE_CUTOFFS=[75,61,0];this.AGE_FULL_BENEFITS=[65,66,67];this.LATE_AGE_CUTOFFS=[71,0];this.LATE_AGE_INCREASES=[0.075,0.08];this.SOCIAL_SPOUSE_BENEFIT=0.5;this.SOCIAL_FULL_BENEFIT_AMT=0;this.cats=null;this.DS_SOCIAL_PAYMENTS=null;this.DR_SOCIAL_PAYMENTS=null;this.MSG_SUMMARY_TEXT=KJE.parameters.get("MSG_SUMMARY_TEXT","Social Security may provide KJE1");this.MSG_GRAPH3=KJE.parameters.get("MSG_GRAPH3","Estimated Monthly Benefits");this.MSG_SUMMARY_TEXT2=KJE.parameters.get("MSG_SUMMARY_TEXT2","If you start collecting your benefits at age KJE2 you could receive approximately KJE3 per year or KJE4 per month. This is KJE5 of your final year's income of KJE6. This is only an estimate. Actual benefits depend on work history and the complete compensation rules used by Social Security.");this.SUMMARY_TEXT="";this.SUMMARY_TEXT2="";this.WAGE_CUTOFFS=[10000,20000,30000,40000,50000,60000,70000,80000,90000,this.SOCIAL_SECURITY_CURRENT_MAX];this.SOCIAL_FULL_BENEFIT=[0.6096,0.4878,0.3972,0.3525,0.3252,0.3072,0.2943,0.2847,0.2684,this.SOCIAL_SECURITY_MAX_RATIO];this.sSchedule=new KJE.Repeating()};KJE.SocialSecurityCalc.prototype.clear=function(){this.CURRENT_AGE=0;this.HOUSEHOLD_INCOME=0;this.SALARY_PERCENT=0;this.SOCIAL_SECURITY_INCREASE_RATE=0;this.MARRIED=0;this.AGE_OF_RETIREMENT=0};KJE.SocialSecurityCalc.prototype.calculate=function(G){var g=KJE;var k=this.CURRENT_AGE;var s=this.HOUSEHOLD_INCOME;var c=this.SALARY_PERCENT;var q=this.SOCIAL_SECURITY_INCREASE_RATE;var m=this.MARRIED;var H=this.AGE_OF_RETIREMENT;var J=0;var d=0;var o=0;var C=0;var z=0;var a=0;var r=65;var B=0;var b=0;var F=0;var A=0;var D=q/100;if(H<this.SOCIAL_EARLIEST_RETIRE_AGE){C=this.SOCIAL_EARLIEST_RETIRE_AGE}else{C=H}for(var v=0;v<this.EARLY_AGE_CUTOFFS.length;v++){if(this.EARLY_AGE_CUTOFFS[v]<k){r=this.AGE_FULL_BENEFITS[v];break}}for(v=0;v<this.LATE_AGE_CUTOFFS.length;v++){if(k>=this.LATE_AGE_CUTOFFS[v]){F=this.LATE_AGE_INCREASES[v];break}}if(!this.ADJUST_ONLY){this.SOCIAL_FULL_BENEFIT_AMT=0;b=r-k;var f=b-1;f=(f<0?0:f);d=g.round(KJE.FV_AMT(D,f,this.SOCIAL_SECURITY_CURRENT_MAX),2);this.WAGE_CUTOFFS[this.WAGE_CUTOFFS.length-1]=this.SOCIAL_SECURITY_CURRENT_MAX;J=KJE.FV_AMT(c/100,f,s);var t=J;this.SOCIAL_FULL_BENEFIT_PERCENT=(this.SOCIAL_FULL_BENEFIT[this.SOCIAL_FULL_BENEFIT.length-1]*d)/t;for(var u=0;u<this.WAGE_CUTOFFS.length;u++){if(t<KJE.FV_AMT(D,f,this.WAGE_CUTOFFS[u])){if(u==0){this.SOCIAL_FULL_BENEFIT_PERCENT=this.SOCIAL_FULL_BENEFIT[u]}else{var e=KJE.FV_AMT(D,f,this.WAGE_CUTOFFS[u]);var j=KJE.FV_AMT(D,f,this.WAGE_CUTOFFS[u-1]);var E=e-j;var I=e-t;var w=I/E;this.SOCIAL_FULL_BENEFIT_PERCENT=this.SOCIAL_FULL_BENEFIT[u]+(this.SOCIAL_FULL_BENEFIT[u-1]-this.SOCIAL_FULL_BENEFIT[u])*w}break}}if(m>0){this.SOCIAL_FULL_BENEFIT_PERCENT=this.SOCIAL_FULL_BENEFIT_PERCENT*(1+this.SOCIAL_SPOUSE_BENEFIT)}this.SOCIAL_FULL_BENEFIT_AMT=g.round(this.SOCIAL_FULL_BENEFIT_PERCENT*t,0);if(m>0){this.SOCIAL_FULL_BENEFIT_PERCENT=this.SOCIAL_FULL_BENEFIT_AMT/J}}var l=this.SOCIAL_LATEST_RETIRE_AGE-this.SOCIAL_EARLIEST_RETIRE_AGE+1;this.cats=new Array(l);this.DS_SOCIAL_PAYMENTS=new Array(l);this.DR_SOCIAL_PAYMENTS=new Array(l);for(v=0;v<l;v++){this.cats[v]=g.number(this.SOCIAL_EARLIEST_RETIRE_AGE+v);if(this.SOCIAL_EARLIEST_RETIRE_AGE+v<=r){this.DR_SOCIAL_PAYMENTS[v]=g.round(this.SOCIAL_FULL_BENEFIT_AMT*this.EARLY_DISCOUNTS[v+this.SOCIAL_NORMAL_RETIRE_AGE-r],0)}else{this.DR_SOCIAL_PAYMENTS[v]=g.round(this.SOCIAL_FULL_BENEFIT_AMT*(1+F*(this.SOCIAL_EARLIEST_RETIRE_AGE-r+v)),0)}if(C==(this.SOCIAL_EARLIEST_RETIRE_AGE+v)){var y=(C-k-1);A=KJE.FV_AMT(c/100,y<0?0:y,s);a=this.DR_SOCIAL_PAYMENTS[v]/A;o=this.DR_SOCIAL_PAYMENTS[v];z=this.DR_SOCIAL_PAYMENTS[v]/12}}if(G){var h=this.sSchedule;h.clearRepeat();h.addHeader(h.sReportCol("Age<br />Benefits Begin",1),h.sReportCol("Amount<br />per Month",2),h.sReportCol("Amount<br />per Year",3))}var x=0;for(v=1;v<=l;v++){x=v-1;this.DS_SOCIAL_PAYMENTS[x]=this.DR_SOCIAL_PAYMENTS[x]/12;if(G){h.addRepeat(g.number(x+this.SOCIAL_EARLIEST_RETIRE_AGE,0),g.dollars(this.DR_SOCIAL_PAYMENTS[x]/12),g.dollars(this.DR_SOCIAL_PAYMENTS[x]))}}this.FUTURE_HOUSEHOLD_INCOME=J;this.SOCIAL_SECURITY_MAX=d;this.SOCIAL_AT_RETIRE_AMT=o;this.SOCIAL_AT_RETIRE_AGE=C;this.SOCIAL_AT_RETIRE_AMT_MONTHLY=z;this.SOCIAL_AT_RETIRE_PERCENT=a;this.SOCIAL_FULL_BENEFIT_AGE=r;this.SOCIAL_FULL_BENEFIT_PERCENT=B;this.YEARS_UNTIL_SOCIAL_FULL_BENEFITS=b;this.SOCIAL_DELAYED_RETIRE_PERCENT=F;this.HOUSEHOLD_INCOME_AT_RETIRE=A};KJE.SocialSecurityCalc.prototype.formatReport=function(b){var c=KJE;var a=this.iDecimal;var d=b;d=KJE.replace("FUTURE_HOUSEHOLD_INCOME",c.dollars(this.FUTURE_HOUSEHOLD_INCOME),d);d=KJE.replace("HOUSEHOLD_INCOME_AT_RETIRE",c.dollars(this.HOUSEHOLD_INCOME_AT_RETIRE),d);d=KJE.replace("SOCIAL_SECURITY_MAX",c.dollars(this.SOCIAL_SECURITY_MAX),d);d=KJE.replace("SOCIAL_AT_RETIRE_AGE",c.number(this.SOCIAL_AT_RETIRE_AGE),d);d=KJE.replace("SOCIAL_AT_RETIRE_AMT_MONTHLY",c.dollars(this.SOCIAL_AT_RETIRE_AMT_MONTHLY),d);d=KJE.replace("SOCIAL_AT_RETIRE_AMT",c.dollars(this.SOCIAL_AT_RETIRE_AMT),d);d=KJE.replace("SOCIAL_AT_RETIRE_PERCENT",c.percent(this.SOCIAL_AT_RETIRE_PERCENT,2),d);d=KJE.replace("SOCIAL_FULL_BENEFIT_AMT",c.dollars(this.SOCIAL_FULL_BENEFIT_AMT),d);d=KJE.replace("SOCIAL_FULL_BENEFIT_AGE",c.number(this.SOCIAL_FULL_BENEFIT_AGE),d);d=KJE.replace("SOCIAL_FULL_BENEFIT_PERCENT",c.percent(this.SOCIAL_FULL_BENEFIT_PERCENT,2),d);d=KJE.replace("YEARS_UNTIL_SOCIAL_FULL_BENEFITS",c.number(this.YEARS_UNTIL_SOCIAL_FULL_BENEFITS),d);d=KJE.replace("CURRENT_AGE",c.number(this.CURRENT_AGE),d);d=KJE.replace("HOUSEHOLD_INCOME",c.dollars(this.HOUSEHOLD_INCOME),d);d=KJE.replace("SALARY_PERCENT",c.percent(this.SALARY_PERCENT/100,2),d);d=KJE.replace("MARRIED",c.yesno(this.MARRIED),d);d=KJE.replace("AGE_OF_RETIREMENT",c.number(this.AGE_OF_RETIREMENT),d);d=KJE.replace("SOCIAL_SECURITY_CURRENT_MAX",c.dollars(this.SOCIAL_SECURITY_CURRENT_MAX),d);d=KJE.replace("SOCIAL_SECURITY_INCREASE_RATE",c.percent(this.SOCIAL_SECURITY_INCREASE_RATE/100,2),d);d=KJE.replace("INFLATION_RATE",c.percent(this.SOCIAL_SECURITY_INCREASE_RATE/100,2),d);d=KJE.replace("SOCIAL_EARLIEST_RETIRE_AGE",c.number(this.SOCIAL_EARLIEST_RETIRE_AGE),d);d=KJE.replace("SOCIAL_LATEST_RETIRE_AGE",c.number(this.SOCIAL_LATEST_RETIRE_AGE),d);d=KJE.replace("SOCIAL_DELAYED_RETIRE_PERCENT",c.percent(this.SOCIAL_DELAYED_RETIRE_PERCENT,2),d);d=d.replace("**REPEATING GROUP**",this.sSchedule.getRepeat());this.sSchedule.clearRepeat();return d};KJE.SocialSecurityCalc.prototype.formatGraph=function(a,b){b[0].setTitle(this.MSG_GRAPH3);b[0].setTitleGraph(this.MSG_GRAPH3);b[0].show(true);b[0].paint()};KJE.NoSocialCalc=function(){this.MSG_RESULTS1="Your retirement plan requires INCOME_REQUIRED_AT_RETIRE per year. This is based on retirement expenditures of INCOME_PERCENT of your last years income of INCOME_AT_RETIRE.";this.MSG_RESULTS2="Social security provides SOCIALSECURITY_AT_RETIRE per year starting at age SOCIALSECURITY_START_AGE.";this.MSG_RESULTS=new Array(2);this.SHORT_RESULTS=KJE.parameters.get("SHORT_RESULTS",true);this.DR_SALARY=null;this.DR_BEGINING_BALANCE=null;this.DR_BEGINING_BALANCE_NOSS=null;this.DR_ENDING_BALANCE=null;this.DR_ENDING_BALANCE_NOSS=null;this.DR_NOSS_INTEREST=null;this.DR_NOSS_WITHDRAWAL=null;this.DR_INTEREST=null;this.DR_SAVINGS=null;this.DR_RETIREMENT_INCOME=null;this.DR_SOCIAL_SECURITY_INCOME=null;this.DR_RETIREMENT_WITHDRAWAL=null;this.cats=null;this.CS_WITHDRAW=null;this.MSG_WITHOUT1="Without Social Security your retirement savings may run out at age CALC_AGE.";this.MSG_WITHOUT2="Without Social Security you could end your retirement with CALC_AMT.";this.MSG_WITH1="With Social Security your retirement savings may run out at age CALC_AGE.";this.MSG_WITH2="With Social Security you could end your retirement with CALC_AMT.";this.MSG_GRAPH_REPORT_TITLE=KJE.parameters.get("MSG_GRAPH_REPORT_TITLE","Retirement Savings by Year");this.MSG_SUMMARY_TEXT="Social Security may provide KJE1 per year";this.sSchedule=new KJE.Repeating()};KJE.NoSocialCalc.prototype.clear=function(){this.CURRENT_AGE=0;this.HOUSEHOLD_INCOME=0;this.PRE_RATE_OF_RETURN=0;this.AGE_OF_RETIREMENT=0;this.POST_RATE_OF_RETURN=0;this.SALARY_PERCENT=0;this.YEARS_OF_RETIREMENT=0;this.INCOME_PERCENT=0;this.CURRENT_SAVINGS=0;this.INFLATION_RATE=0;this.MARRIED=0;this.SAVINGS_PERCENT=0};KJE.NoSocialCalc.prototype.calculate=function(I){var l=KJE;var s=this.CURRENT_AGE;var x=this.HOUSEHOLD_INCOME;var E=this.PRE_RATE_OF_RETURN;var J=this.AGE_OF_RETIREMENT;var b=this.POST_RATE_OF_RETURN;var d=this.SALARY_PERCENT;var u=this.YEARS_OF_RETIREMENT;var H=this.INCOME_PERCENT;var y=this.CURRENT_SAVINGS;var e=this.INFLATION_RATE;var w=this.MARRIED;var B=this.SAVINGS_PERCENT;var j=0;var c=0;var p="";var C="";var r=new KJE.SocialSecurityCalc();r.clear();r.CURRENT_AGE=(s>69?69:s);r.HOUSEHOLD_INCOME=x;r.AGE_OF_RETIREMENT=(J>70?70:J);r.SALARY_PERCENT=d;r.SOCIAL_SECURITY_INCREASE_RATE=e;r.MARRIED=w;r.calculate();var q=r.SOCIAL_AT_RETIRE_AMT;var h=r.SOCIAL_AT_RETIRE_AGE;var k=J-s;var v=x*(B/100);var o=v/12;var t=Math.round(k+u);var D=0;var F=0;var G=0;this.DR_SALARY=KJE.FloatArray(t);this.DR_BEGINING_BALANCE=KJE.FloatArray(t);this.DR_BEGINING_BALANCE_NOSS=KJE.FloatArray(t);this.DR_ENDING_BALANCE=KJE.FloatArray(t);this.DR_ENDING_BALANCE_NOSS=KJE.FloatArray(t);this.DR_INTEREST=KJE.FloatArray(t);this.DR_SAVINGS=KJE.FloatArray(t);this.DR_RETIREMENT_INCOME=KJE.FloatArray(t);this.DR_SOCIAL_SECURITY_INCOME=KJE.FloatArray(t);this.DR_RETIREMENT_WITHDRAWAL=KJE.FloatArray(t);this.DR_NOSS_INTEREST=KJE.FloatArray(t);this.DR_NOSS_WITHDRAWAL=KJE.FloatArray(t);var g=u;if(u>20){g=20}this.cats=new Array(t);var A=x;var a=x*(H/100);for(var z=1;z<=t;z++){D=z-1;if(D==0){this.DR_BEGINING_BALANCE[D]=y}else{this.DR_BEGINING_BALANCE[D]=this.DR_ENDING_BALANCE[D-1]}if(D==0){this.DR_BEGINING_BALANCE_NOSS[D]=y}else{this.DR_BEGINING_BALANCE_NOSS[D]=this.DR_ENDING_BALANCE_NOSS[D-1]}if(D==0){this.DR_SALARY[D]=x;this.DR_INTEREST[D]=0;this.DR_NOSS_INTEREST[D]=0;this.DR_SAVINGS[D]=0;this.DR_RETIREMENT_INCOME[D]=0;this.DR_SOCIAL_SECURITY_INCOME[D]=0;this.DR_RETIREMENT_WITHDRAWAL[D]=0;this.DR_NOSS_WITHDRAWAL[D]=0}else{if((k-D)>0){this.DR_SALARY[D]=KJE.FV_AMT(d/100,D,x);this.DR_INTEREST[D]=this.DR_BEGINING_BALANCE[D]*(E/100);this.DR_NOSS_INTEREST[D]=this.DR_BEGINING_BALANCE_NOSS[D]*(E/100);this.DR_SAVINGS[D]=this.DR_SALARY[D]*(B/100);this.DR_RETIREMENT_INCOME[D]=0;this.DR_SOCIAL_SECURITY_INCOME[D]=0;this.DR_RETIREMENT_WITHDRAWAL[D]=0;this.DR_NOSS_WITHDRAWAL[D]=0;A=this.DR_SALARY[D];a=this.DR_SALARY[D]*(H/100)}else{this.DR_SALARY[D]=KJE.FV_AMT(e/100,(z-k-1),A);this.DR_INTEREST[D]=this.DR_BEGINING_BALANCE[D]*(b/100);this.DR_NOSS_INTEREST[D]=this.DR_BEGINING_BALANCE_NOSS[D]*(b/100);this.DR_SAVINGS[D]=0;this.DR_RETIREMENT_INCOME[D]=this.DR_SALARY[D]*(H/100);if((s+D)>=h){this.DR_SOCIAL_SECURITY_INCOME[D]=KJE.FV_AMT(e/100,((s+D)-h),q)}else{this.DR_SOCIAL_SECURITY_INCOME[D]=0}if((this.DR_BEGINING_BALANCE[D]+this.DR_INTEREST[D])<(this.DR_RETIREMENT_INCOME[D]-this.DR_SOCIAL_SECURITY_INCOME[D])){this.DR_RETIREMENT_WITHDRAWAL[D]=this.DR_BEGINING_BALANCE[D]+this.DR_INTEREST[D]}else{if((this.DR_BEGINING_BALANCE[D]+this.DR_INTEREST[D])<=0){this.DR_RETIREMENT_WITHDRAWAL[D]=0}else{this.DR_RETIREMENT_WITHDRAWAL[D]=this.DR_RETIREMENT_INCOME[D]-this.DR_SOCIAL_SECURITY_INCOME[D]}}if((this.DR_BEGINING_BALANCE_NOSS[D]+this.DR_NOSS_INTEREST[D])<this.DR_RETIREMENT_INCOME[D]){this.DR_NOSS_WITHDRAWAL[D]=this.DR_BEGINING_BALANCE_NOSS[D]+this.DR_NOSS_INTEREST[D]}else{if((this.DR_BEGINING_BALANCE_NOSS[D]+this.DR_NOSS_INTEREST[D])<=0){this.DR_NOSS_WITHDRAWAL[D]=0}else{this.DR_NOSS_WITHDRAWAL[D]=this.DR_RETIREMENT_INCOME[D]}}}}this.DR_ENDING_BALANCE[D]=this.DR_BEGINING_BALANCE[D]+this.DR_INTEREST[D]+this.DR_SAVINGS[D]-this.DR_RETIREMENT_WITHDRAWAL[D];this.DR_ENDING_BALANCE_NOSS[D]=this.DR_BEGINING_BALANCE_NOSS[D]+this.DR_NOSS_INTEREST[D]+this.DR_SAVINGS[D]-this.DR_NOSS_WITHDRAWAL[D];if(this.DR_ENDING_BALANCE[D]<=0){if(c==0){c=D+s}this.DR_ENDING_BALANCE[D]=0}if(this.DR_ENDING_BALANCE_NOSS[D]<=0){if(j==0){j=D+s}this.DR_ENDING_BALANCE_NOSS[D]=0}if(this.DR_ENDING_BALANCE[D]>F){F=this.DR_ENDING_BALANCE[D]}if(this.DR_RETIREMENT_INCOME[D]>G){G=this.DR_RETIREMENT_INCOME[D]}}this.ENDING_BALANCE=this.DR_ENDING_BALANCE[t-1];this.ENDING_NOSS_BALANCE=this.DR_ENDING_BALANCE_NOSS[t-1];if(j>0){p=KJE.replace("CALC_AMT",l.dollars(this.ENDING_NOSS_BALANCE),(KJE.replace("CALC_AGE",l.number(j),this.MSG_WITHOUT1)))}else{p=KJE.replace("CALC_AMT",l.dollars(this.ENDING_NOSS_BALANCE),(KJE.replace("CALC_AGE",l.number(j),this.MSG_WITHOUT2)))}if(c>0){C=KJE.replace("CALC_AMT",l.dollars(this.ENDING_BALANCE),(KJE.replace("CALC_AGE",l.number(c),this.MSG_WITH1)))}else{C=KJE.replace("CALC_AMT",l.dollars(this.ENDING_BALANCE),(KJE.replace("CALC_AGE",l.number(c),this.MSG_WITH2)))}this.MSG_RESULTS[0]=KJE.replace("INCOME_REQUIRED_AT_RETIRE",l.dollars(a),(KJE.replace("INCOME_PERCENT",l.percent(H/100),(KJE.replace("INCOME_AT_RETIRE",l.dollars(A),this.MSG_RESULTS1)))));this.MSG_RESULTS[1]=KJE.replace("SOCIALSECURITY_START_AGE",l.number(h),(KJE.replace("SOCIALSECURITY_AT_RETIRE",l.dollars(q),this.MSG_RESULTS2)));if(I){var m=this.sSchedule;m.clearRepeat();if(this.SHORT_RESULTS){m.addHeader(m.sReportCol("Age",1),m.sReportCol("Savings Balance<br />With Social Security",2),m.sReportCol("Savings Balance<br />Without Social Securit",3))}else{m.addHeader(m.sReportCol("Age",1),m.sReportCol("Beginning<br />Retirement<br />Balance",4),m.sReportCol(" <br />Interest<br />earned",5),KJE.replace("CALC_RESULT",l.percent(B/100,2),m.sReportCol("Savings<br />at CALC_RESULT<br />of Income",6)),KJE.replace("CALC_RESULT",l.percent(H/100,0),m.sReportCol("Retire<br />with <br />of Income",7)),m.sReportCol("Social<br />Security<br />Income",8),m.sReportCol("Retirement<br />Account<br />Withdrawals",9),m.sReportCol("Ending<br />Retirement<br />Balance",10))}}var f=1;for(var z=1;z<=t;z++){D=z-1;this.cats[D]=l.number(D+s);if(I){if(this.SHORT_RESULTS){m.addRepeat(l.number(D+s,0),l.dollars(this.DR_ENDING_BALANCE[D]),l.dollars(this.DR_ENDING_BALANCE_NOSS[D]))}else{m.addRepeat(l.number(D+s,0),l.dollars(this.DR_BEGINING_BALANCE[D]),l.dollars(this.DR_INTEREST[D]),l.dollars(this.DR_SAVINGS[D]),l.dollars(this.DR_RETIREMENT_INCOME[D]),l.dollars(this.DR_SOCIAL_SECURITY_INCOME[D]),l.dollars(this.DR_RETIREMENT_WITHDRAWAL[D]),l.dollars(this.DR_ENDING_BALANCE[D]))}}}this.YEARS_UNTIL_RETIREMENT=k;this.ANNUAL_SAVINGS=v;this.MONTHLY_SAVINGS=o;this.INCOME_AT_RETIRE=A;this.INCOME_REQUIRED_AT_RETIRE=a;this.AGE_NOSS_RUN_OUT=j;this.AGE_RUN_OUT=c;this.SOCIALSECURITY_AT_RETIRE=q;this.SOCIALSECURITY_START_AGE=h;this.END_NOSS_RETIREMENT_MESSAGE=p;this.END_OF_RETIREMENT_MESSAGE=C};KJE.NoSocialCalc.prototype.formatReport=function(b){var c=KJE;var a=this.iDecimal;var d=b;d=KJE.replace("CURRENT_AGE",c.number(this.CURRENT_AGE),d);d=KJE.replace("HOUSEHOLD_INCOME",c.dollars(this.HOUSEHOLD_INCOME),d);d=KJE.replace("PRE_RATE_OF_RETURN",c.percent(this.PRE_RATE_OF_RETURN/100,2),d);d=KJE.replace("AGE_OF_RETIREMENT",c.number(this.AGE_OF_RETIREMENT),d);d=KJE.replace("POST_RATE_OF_RETURN",c.percent(this.POST_RATE_OF_RETURN/100,2),d);d=KJE.replace("SALARY_PERCENT",c.percent(this.SALARY_PERCENT/100,2),d);d=KJE.replace("YEARS_UNTIL_RETIREMENT",c.number(this.YEARS_UNTIL_RETIREMENT),d);d=KJE.replace("YEARS_OF_RETIREMENT",c.number(this.YEARS_OF_RETIREMENT),d);d=KJE.replace("INCOME_PERCENT",c.percent(this.INCOME_PERCENT/100,2),d);d=KJE.replace("CURRENT_SAVINGS",c.dollars(this.CURRENT_SAVINGS),d);d=KJE.replace("INFLATION_RATE",c.percent(this.INFLATION_RATE/100,1),d);d=KJE.replace("MARRIED",c.yesno(this.MARRIED),d);d=KJE.replace("END_NOSS_RETIREMENT_MESSAGE",this.END_NOSS_RETIREMENT_MESSAGE,d);d=KJE.replace("SOCIALSECURITY_START_AGE",c.number(this.SOCIALSECURITY_START_AGE),d);d=KJE.replace("ENDING_BALANCE",c.dollars(this.ENDING_BALANCE),d);d=KJE.replace("SAVINGS_PERCENT",c.percent(this.SAVINGS_PERCENT/100,2),d);d=KJE.replace("ANNUAL_SAVINGS",c.dollars(this.ANNUAL_SAVINGS),d);d=KJE.replace("MONTHLY_SAVINGS",c.dollars(this.MONTHLY_SAVINGS),d);d=KJE.replace("END_OF_RETIREMENT_MESSAGE",this.END_OF_RETIREMENT_MESSAGE,d);d=KJE.replace("INCOME_AT_RETIRE",c.dollars(this.INCOME_AT_RETIRE),d);d=KJE.replace("SOCIALSECURITY_AT_RETIRE",c.dollars(this.SOCIALSECURITY_AT_RETIRE),d);d=KJE.replace("INCOME_REQUIRED_AT_RETIRE",c.dollars(this.INCOME_REQUIRED_AT_RETIRE),d);d=KJE.replace("AGE_NOSS_RUN_OUT",c.number(this.AGE_NOSS_RUN_OUT),d);d=KJE.replace("ENDING_NOSS_BALANCE",c.dollars(this.ENDING_NOSS_BALANCE),d);d=d.replace("**REPEATING GROUP**",this.sSchedule.getRepeat());this.sSchedule.clearRepeat();return d};KJE.NoSocialCalc.prototype.formatGraph=function(a,b){b[0].setTitle(this.MSG_GRAPH_REPORT_TITLE);b[0].setTitleGraph(this.MSG_GRAPH_REPORT_TITLE);b[0].show(true);b[0].paint()};KJE.NoSocialCalc.prototype.getGraphTitle=function(d){var c=(d?this.MSG_RESULTS[0]:this.MSG_RESULTS1);var b=(d?this.MSG_RESULTS[1]:this.MSG_RESULTS2);var a=KJE.getKJEReplaced(this.MSG_SUMMARY_TEXT,KJE.dollars(this.SOCIALSECURITY_AT_RETIRE))+"<div class='KJESubTitle KJELeft'>"+c+" "+this.END_NOSS_RETIREMENT_MESSAGE+" "+this.END_OF_RETIREMENT_MESSAGE+" "+b+"</div>";return a};KJE.CalcName="How Important is Social Security?";KJE.CalcType="NoSocial";KJE.CalculatorTitleTemplate="KJE1";KJE.parseInputs=function(a){return a};KJE.initialize=function(){KJE.CalcControl=new KJE.NoSocialCalc();KJE.GuiControl=new KJE.NoSocial(KJE.CalcControl)};KJE.NoSocial=function(k){var g=KJE;var i=KJE.inputs.items;var b=KJE.gLegend;this.MSG_GRAPH1=KJE.parameters.get("MSG_GRAPH1","With Social Security");this.MSG_GRAPH2=KJE.parameters.get("MSG_GRAPH2","Without Social Security");this.MSG_GRAPH3=KJE.parameters.get("MSG_GRAPH2","Age");KJE.NumberSlider("CURRENT_AGE","Current age",20,90,0);KJE.DollarSlider("HOUSEHOLD_INCOME","Annual household income",1,10000000);KJE.InvestRateSlider("PRE_RATE_OF_RETURN","Rate of return before retirement");KJE.NumberSlider("AGE_OF_RETIREMENT","Age of retirement",20,90,0,1);KJE.InvestRateSlider("POST_RATE_OF_RETURN","Rate of return during retirement");KJE.PercentSlider("SALARY_PERCENT","Expected income increase",0,KJE.parameters.get("MAX_SALARY_PERCENT",20),2,1);KJE.NumberSlider("YEARS_OF_RETIREMENT","Years of retirement income",1,100,0,1);KJE.PercentSlider("INCOME_PERCENT","Income required at retirement",40,160,0,5);KJE.DollarSlider("CURRENT_SAVINGS","Current retirement savings",0,10000000);KJE.PercentSlider("SAVINGS_PERCENT","Annual retirement savings",0,100,2,1);KJE.InflationRateSlider("INFLATION_RATE","Expected rate of inflation");KJE.Checkbox("MARRIED","Married",true,"Check here");var j=KJE.gNewGraph(KJE.gLINE,"GRAPH1",true,false,KJE.colorList[1],k.getGraphTitle());j._legend._iOrientation=(b.TOP_RIGHT);j._titleXAxis.setText(this.MSG_GRAPH3);j._legend.setVisible(true);j._titleYAxis.setText(k.sCurrency);var a=KJE.parameters.get("MSG_DROPPER_TITLE","Retirement plan inputs:");var e=KJE.parameters.get("MSG_DROPPER_CLOSETITLE"," Retire at age KJE1 with KJE2 of current income");var n=function(){return a+KJE.subText(KJE.getKJEReplaced(e,i.CURRENT_AGE.getFormatted(),i.INCOME_PERCENT.getFormatted()),"KJECenter")};var d=new KJE.Dropper("INPUTS",true,a,n);d.setBackground(KJE.colorList[0]);var c=KJE.parameters.get("MSG_DROPPER2_TITLE","Investment returns and inflation:");var f=KJE.parameters.get("MSG_DROPPER2_CLOSETITLE"," KJE1 pre-retirement, KJE2 in retirement, KJE3 inflation");var h=function(){return c+KJE.subText(KJE.getKJEReplaced(f,i.PRE_RATE_OF_RETURN.getFormatted(),i.POST_RATE_OF_RETURN.getFormatted(),i.INFLATION_RATE.getFormatted()),"KJECenter")};var m=new KJE.Dropper("INPUTS2",false,c,h);m.setBackground(KJE.colorList[0])};KJE.NoSocial.prototype.setValues=function(b){var a=KJE.inputs.items;b.CURRENT_AGE=a.CURRENT_AGE.getValue();b.HOUSEHOLD_INCOME=a.HOUSEHOLD_INCOME.getValue();b.PRE_RATE_OF_RETURN=a.PRE_RATE_OF_RETURN.getValue();b.AGE_OF_RETIREMENT=a.AGE_OF_RETIREMENT.getValue();b.POST_RATE_OF_RETURN=a.POST_RATE_OF_RETURN.getValue();b.SALARY_PERCENT=a.SALARY_PERCENT.getValue();b.YEARS_OF_RETIREMENT=a.YEARS_OF_RETIREMENT.getValue();b.INCOME_PERCENT=a.INCOME_PERCENT.getValue();b.CURRENT_SAVINGS=a.CURRENT_SAVINGS.getValue();b.INFLATION_RATE=a.INFLATION_RATE.getValue();b.SAVINGS_PERCENT=a.SAVINGS_PERCENT.getValue();b.MARRIED=a.MARRIED.getValue()};KJE.NoSocial.prototype.refresh=function(e){var d=KJE;var c=KJE.gLegend;var b=KJE.inputs.items;var a=KJE.gGraphs[0];KJE.setTitleTemplate(e.END_NOSS_RETIREMENT_MESSAGE);a.removeAll();a.setGraphCategories(e.cats);a.add(new KJE.gGraphDataSeries(e.DR_ENDING_BALANCE,this.MSG_GRAPH1,a.getColor(1)));a.add(new KJE.gGraphDataSeries(e.DR_ENDING_BALANCE_NOSS,this.MSG_GRAPH2,a.getColor(2)));a.setTitle(e.getGraphTitle(true));a.paint()};KJE.InputScreenText=" <div id=KJE-D-INPUTS><div id=KJE-P-INPUTS>Input information:</div></div> <div id=KJE-E-INPUTS > <div id='KJE-C-CURRENT_AGE'><input id='KJE-CURRENT_AGE' /></div> <div id='KJE-C-AGE_OF_RETIREMENT'><input id='KJE-AGE_OF_RETIREMENT' /></div> <div id='KJE-C-HOUSEHOLD_INCOME'><input id='KJE-HOUSEHOLD_INCOME' /></div> <div id='KJE-C-CURRENT_SAVINGS'><input id='KJE-CURRENT_SAVINGS' /></div> <div id='KJE-C-SAVINGS_PERCENT'><input id='KJE-SAVINGS_PERCENT' /></div> <div id='KJE-C-SALARY_PERCENT'><input id='KJE-SALARY_PERCENT' /></div> <div id='KJE-C-INCOME_PERCENT'><input id='KJE-INCOME_PERCENT' /></div> <div id='KJE-C-YEARS_OF_RETIREMENT'><input id='KJE-YEARS_OF_RETIREMENT' /></div> <div style=\"height:10px\"></div> </div> <div id=KJE-D-INPUTS2><div id=KJE-P-INPUTS2>Input information:</div></div> <div id=KJE-E-INPUTS2 > <div id='KJE-C-PRE_RATE_OF_RETURN'><input id='KJE-PRE_RATE_OF_RETURN' /></div> <div id='KJE-C-POST_RATE_OF_RETURN'><input id='KJE-POST_RATE_OF_RETURN' /></div> <div id='KJE-C-INFLATION_RATE'><input id='KJE-INFLATION_RATE' /></div> <div id='KJE-C-MARRIED'><input id='KJE-MARRIED' type=checkbox /></div> <div style=\"height:10px\"></div> </div> **GRAPH1** ";KJE.DefinitionText=" <div id='KJE-D-' ><dt>Social Security income</dt><dd><p>Social Security is based on a sliding scale depending on your income, how long you work and at what age you retire. Social Security benefits automatically increase each year based on increases in the Consumer Price Index. Including a spouse increases your Social Security benefits by 1.5 times your individual estimated benefit. Please note that this calculator assumes that only one of the spouses work. Benefits could be different if your spouse worked and earned a benefit higher than one half of your benefit. If you are a married couple, and both spouses work, you may need to run the calculation twice &ndash; once for each spouse and their respective income. This calculator provides only an estimate of your benefits. <p>The calculations use the 2016 FICA income limit of $118,500 with an annual maximum Social Security benefit of $31,668 per year ($2,639 per month) for a single person and 1.5 times this amount for a married couple. To receive the maximum benefit would require earning the maximum FICA salary for nearly your entire career. You would also need to begin receiving benefits at your full retirement age of 66 or 67 (depending on your birthdate). This calculator rounds your age of full Social Security benefits to the next highest full year. If your birthdate is between 1955 and 1959 your actual full retirement age for Social Security is 66 plus two months for each year after 1954. Your actual benefit may be lower or higher depending on your work history and the complete compensation rules used by Social Security.</dd></div> <div id='KJE-D-CURRENT_AGE' ><dt>Current age</dt><dd>Your current age.</dd></div> <div id='KJE-D-AGE_OF_RETIREMENT' ><dt>Age of retirement</dt><dd>Age you desire to retire.</dd></div> <div id='KJE-D-HOUSEHOLD_INCOME' ><dt>Household income</dt><dd>Your total household income. If you are married, this should include your spouse's income.</dd></div> <div id='KJE-D-CURRENT_SAVINGS' ><dt>Current retirement savings</dt><dd>Total amount that you currently have saved toward your retirement. Include all sources of retirement savings such as 401(k)s, IRAs and Annuities.</dd></div> <div id='KJE-D-SAVINGS_PERCENT' ><dt>Percent of income to save</dt><dd>The percentage of your annual income you will save for your retirement goals.</dd></div> <div id='KJE-D-INCOME_PERCENT' ><dt>Percent of income at retirement</dt><dd>The percent of your household income you will need to have in retirement income.</dd></div> <div id='KJE-D-SALARY_PERCENT' ><dt>Expected salary increase</dt><dd>Annual percent increase you expect in your household income.</dd></div> <div id='KJE-D-YEARS_OF_RETIREMENT' ><dt>Years of retirement income</dt><dd>Total number of years you expect to use your retirement income.</dd></div> <div id='KJE-D-PRE_RATE_OF_RETURN' ><dt>Rate of return before retirement</dt><dd>This is the annual rate of return you expect from your retirement savings and investments.before taxes. **ROR_DEFINITION**</dd></div> <div id='KJE-D-POST_RATE_OF_RETURN' ><dt>Rate of return during retirement</dt><dd>This is the annual rate of return you expect from your investments during retirement. It is often lower than the return earned before retirement due to more conservative investment choices to help insure a steady flow of income. **ROR_DEFINITION**</dd></div> <div id='KJE-D-INFLATION_RATE' ><dt>Expected rate of inflation</dt><dd>**INFLATION_DEFINITION** This is used to calculate increases in your retirement expenses and increases in Social Security.</dd></div> <div id='KJE-D-MARRIED' ><dt>If you are married checkbox</dt><dd>Check this box if you are married. Married couples have a higher maximum Social Security benefit than single wage earners.</dd></div> ";KJE.ReportText=' <!--HEADING "How Important is Social Security?" HEADING--> <h2 class=KJEReportHeader>END_NOSS_RETIREMENT_MESSAGE</h2>**GRAPH**<p>Your retirement plan requires INCOME_REQUIRED_AT_RETIRE per year. This is based on retirement expenditures of INCOME_PERCENT of your last year\'s income of INCOME_AT_RETIRE. END_NOSS_RETIREMENT_MESSAGE END_OF_RETIREMENT_MESSAGE Social Security is estimated to provide SOCIALSECURITY_AT_RETIRE per year starting at age SOCIALSECURITY_START_AGE. <p> <div class=KJEReportTableDiv><table class=KJEReportTable><caption class=\'KJEHeaderRow KJEHeading\'>Results Summary</caption> <tr class=KJEOddRow><td class="KJELabel KJECellBorder KJECell30">Current age</td><td class="KJECell KJECellBorder KJECell20">CURRENT_AGE</td><td class="KJELabel KJECellBorder KJECell30">Age of retirement</td><td class="KJECell KJECell20">AGE_OF_RETIREMENT</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder">Years until retirement</td><td class="KJECell KJECellBorder">YEARS_UNTIL_RETIREMENT</td><td class="KJELabel KJECellBorder">Years of retirement income</td><td class="KJECell">YEARS_OF_RETIREMENT</td></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder">Household income</td><td class="KJECell KJECellBorder">HOUSEHOLD_INCOME</td><td class="KJELabel KJECellBorder">Income at retirement</td><td class="KJECell">INCOME_AT_RETIRE</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder">Rate of return before retirement</td><td class="KJECell KJECellBorder">PRE_RATE_OF_RETURN</td><td class="KJELabel KJECellBorder">Rate of return during retirement</td><td class="KJECell">POST_RATE_OF_RETURN</td></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder">Expected salary increase</td><td class="KJECell KJECellBorder">SALARY_PERCENT</td><td class="KJELabel KJECellBorder">Percentage income desired</td><td class="KJECell">INCOME_PERCENT</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder">Current retirement savings</td><td class="KJECell KJECellBorder">CURRENT_SAVINGS</td><td class="KJELabel KJECellBorder">Percent of income to save</td><td class="KJECell">SAVINGS_PERCENT</td></tr> <tr class=KJEOddRow><td class="KJELabel KJECellBorder">Inflation rate</td><td class="KJECell KJECellBorder">INFLATION_RATE</td><td class="KJELabel KJECellBorder">Are you married?</td><td class="KJECell">MARRIED</td></tr> <tr class=KJEEvenRow><td class="KJELabel KJECellBorder">Retirement expenditures</td><td class="KJECell KJECellBorder">INCOME_REQUIRED_AT_RETIRE</td><td class="KJELabel KJECellBorder">Social security provides</td><td class="KJECell">SOCIALSECURITY_AT_RETIRE per year <br>starting at age SOCIALSECURITY_START_AGE</td></tr> <tr class=KJEHeaderRow><th class="KJEHeading" colspan=4>END_NOSS_RETIREMENT_MESSAGE</th></tr> <tr class=KJEHeaderRow><th class="KJEHeading" colspan=4>END_OF_RETIREMENT_MESSAGE</th></tr></table> </div> <h2 class=KJEScheduleHeader>Your retirement savings balances</h2> **REPEATING GROUP** ';