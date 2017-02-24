


  KJE.parameters.set("AGE_OF_RETIREMENT",65);
  KJE.parameters.set("ANNUAL_CONTRIBUTION",2000);
  KJE.parameters.set("CURRENT_AGE",45);
  KJE.parameters.set("CURRENT_TAX_RATE",KJE.Default.TaxRate);
  KJE.parameters.set("INCREASE_ANNUAL_CONTRIBUTION",false);
  KJE.parameters.set("INFLATION_RATE",KJE.Default.InflationRate);
  KJE.parameters.set("RATE_OF_RETURN",KJE.Default.RORMarket);
  KJE.parameters.set("RETIREMENT_ROR",KJE.Default.RORRetire);
  KJE.parameters.set("RETIREMENT_TAX_RATE",KJE.Default.TaxRateRetire);
  KJE.parameters.set("STARTING_BALANCE",250000);
  KJE.parameters.set("TAX_DEFERRED",true);
  KJE.parameters.set("YEARS_OF_RETIREMENT",30);



/**V3_CUSTOM_CODE**/
/* <!--
  Financial Calculators, ©1998-2016 KJE Computer Solutions, LLC.
  For more information please see:
  <A HREF="http://www.dinkytown.net">http://www.dinkytown.net</A>
 -->
 */
if (KJE.IE7and8) KJE.init();

