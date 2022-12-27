import { v1 } from "uuid";
import { cloneDeep } from "lodash";

export const changeFileName = file => {
  const extension = file.name.split(".")[file.name.split(".").length - 1];
  var blob = file.slice(0, file.size, file.type);
  return new File([blob], v1() + `.${extension}`, { type: file.type });
}

export const fixPricingLabels = (uneditedPricing) => {
  let editedPricing = cloneDeep(uneditedPricing);
  Object.keys(uneditedPricing).forEach(key => {
    const currentTier = uneditedPricing[key];
    if (currentTier.label.length === 0) {
      editedPricing[key].label = currentTier.quantity + (currentTier.quantity === "1" ? " unit" : " units")
    }
  })
  return editedPricing;
}