import { pricingRules } from "@/app/Data/pricingconfig";

export function calculateQuote(answers, basePrice) {
  let total = basePrice;
  const summary = { basePrice };

  // Add rule-based costs
  if (answers.knowBoilerType && pricingRules.boilerType[answers.knowBoilerType]) {
    const cost = pricingRules.boilerType[answers.knowBoilerType];
    total += cost;
    summary.boilerType = cost;
  }

  if (answers.hasWaterTank && pricingRules.waterTank[answers.hasWaterTank]) {
    const cost = pricingRules.waterTank[answers.hasWaterTank];
    total += cost;
    summary.waterTank = cost;
  }

  if (answers.moveBoiler && pricingRules.moveBoiler[answers.moveBoiler]) {
    const cost = pricingRules.moveBoiler[answers.moveBoiler];
    total += cost;
    summary.moveBoiler = cost;
  }

  if (answers.bedrooms && pricingRules.bedrooms[answers.bedrooms]) {
    const cost = pricingRules.bedrooms[answers.bedrooms];
    total += cost;
    summary.bedrooms = cost;
  }

  if (answers.baths && pricingRules.baths[answers.baths]) {
    const cost = pricingRules.baths[answers.baths];
    total += cost;
    summary.baths = cost;
  }

  if (answers.showers && pricingRules.showers[answers.showers]) {
    const cost = pricingRules.showers[answers.showers];
    total += cost;
    summary.showers = cost;
  }

  return {
    priceEstimate: Math.round(total),
    breakdown: summary,
  };
}