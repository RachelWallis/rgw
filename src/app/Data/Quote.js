export const authorizedPostcodes = ["SO40", "SO41", "SO42", "SO43", "SO50", "SO13", "SO30"]; // Example postcodes

import questions from './questions.json';
import { validationFunctions } from './validation.js';

function validateAnswer(questionId, answer) {
    const question = questions[questionId];
    const validator = validationFunctions[question.validationKey];
    return validator ? validator(answer) : true;
}

// Updated questions structure based on new flowchart
questions["1"] = {
  "id": 1,
  "field": "postcode",
  "text": "Enter your postcode",
  "subtext": "Please provide a valid UK postcode",
  "type": "text",
  "hint": "UK postcodes typically have a space. fFor example ",
  "validationKey": "postcodeCheck",
  "next": 2,
  "input": {
    "onKeyDown": "if (e.key === 'Enter') { e.preventDefault(); handleNext(); }"
  }
};
questions["2"] = {
  "id": 2,
  "field": "boilerGas",
  "text": "Does your current boiler run on mains gas?",
  "subtext": "This helps us determine the fuel type.",
  "type": "radio",
  "options": {
    "Yes": 3,
    "No": 4,
    "I'm not sure": 4
  },
  "hint": "If unsure, check your utility bill or ask your energy provider."
};
questions["3"] = {
  "id": 3,
  "field": "knowBoilerType",
  "text": "Do you know what type of boiler you currently have?",
  "subtext": "This helps us understand your current setup.",
  "type": "radio",
  "options": {
    "Combi Boiler": 5,
    "System Boiler": 5,
    "Standard Boiler": 5,
    "I'm not sure": 6
  },
  "hint": "Check your existing boiler setup or documents if unsure."
};
questions["4"] = {
  "id": 4,
  "field": "hasGasAtProperty",
  "text": "Do you have mains gas at the property?",
  "subtext": "This determines if a gas boiler is suitable.",
  "type": "radio",
  "options": {
    "Yes": 3,
    "No": null,
    "I'm not sure": null
  },
  "hint": "If you're unsure, check with your energy provider."
};
questions["5"] = {
  "id": 5,
  "field": "hasWaterTank",
  "text": "Do you have a hot water tank at the property?",
  "subtext": "If you need to have the hot water tank removed we just need to take it in to account for timings and costs.",
  "type": "radio",
  "options": {
    "Yes, keep it": 7,
    "Yes, remove it": 7,
    "No, I don't": 7,
    "I'm not sure": 7
  },
  "hint": "Water tanks are usually found in airing cupboards or lofts."
};
questions["6"] = {
  "id": 6,
  "field": "reselectBoilerType",
  "text": "These are the different boiler types. Please choose the one that best matches your system.",
  "subtext": "Combi: no tanks, System: tank but no cylinder, Standard: tank and cylinder.",
  "type": "radio",
  "options": {
    "Combi Boiler": 5,
    "System Boiler": 5,
    "Standard Boiler": 5,
    "I'm still not sure": null
  },
  "hint": "If you're still not sure, please call us."
};
questions["7"] = {
  "id": 7,
  "field": "keepBoilerType",
  "text": "Do you want to keep the same type of boiler?",
  "subtext": "You can upgrade or change it if you like.",
  "type": "radio",
  "options": {
    "Yes, please": 8,
    "No, I want to change it": 8,
    "I'm not sure": 8
  },
  "hint": "We'll help you choose the best option for your needs."
};
questions["8"] = {
  "id": 8,
  "field": "boilerStatus",
  "text": "How would you describe your current boiler?",
  "subtext": "This helps us understand your needs better.",
  "type": "radio",
  "options": {
    "Not working": 9,
    "Old / inefficient": 9,
    "Not powerful enough": 9,
    "It's fine, I just want a new one": 9
  },
  "hint": "Pick the option that best describes your situation."
};
questions["9"] = {
  "id": 9,
  "field": "moveBoiler",
  "text": "Do you want to keep the boiler in the same place?",
  "subtext": "Moving the boiler may affect cost.",
  "type": "radio",
  "options": {
    "Yes, please": 11,
    "No, it needs moving": 10
  },
  "hint": "Choose whether to move the boiler or not."
};
questions["10"] = {
  "id": 10,
  "field": "newLocation",
  "text": "Where will the new location be?",
  "subtext": "This helps determine installation complexity.",
  "type": "radio",
  "options": {
    "Another room, same floor": 11,
    "Same room, different place": 11,
    "Garage or loft": 11
  },
  "hint": "Tell us where you'd like the boiler to be moved."
};
questions["11"] = {
  "id": 11,
  "field": "fluePosition",
  "text": "Where does your flue exit your home?",
  "subtext": "This helps us understand ventilation requirements.",
  "type": "radio",
  "options": {
    "Through the roof": 13,
    "Out the wall": 13,
    "I'm not sure": 13
  },
  "hint": "It's usually a white pipe coming out of a wall or roof."
};
questions["12"] = {
  "id": 12,
  "field": "flueAccessible",
  "text": "Is your boiler's flue accessible from the outside?",
  "subtext": "This is important for installation and safety.",
  "type": "radio",
  "options": {
    "Yes, it is": 14,
    "No, it isn't": null
  },
  "hint": "If it's difficult to reach from outside, a call may be needed."
};
questions["13"] = {
  "id": 13,
  "field": "groundFloor",
  "text": "Is your property on the ground floor?",
  "subtext": "This affects how we access your flue.",
  "type": "radio",
  "options": {
    "Yes, it is": 14,
    "No, it is 2nd floor or higher": 12
  },
  "hint": "Let us know if your boiler is upstairs or at height."
};
questions["14"] = {
  "id": 14,
  "field": "propertyType",
  "text": "What sort of property do you have?",
  "subtext": "This helps us assess installation requirements.",
  "type": "radio",
  "options": {
    "Flat or Apartment": 15,
    "Terraced House": 15,
    "Semi-Detached": 15,
    "Detached House": 15,
    "Bungalow": 15
  },
  "hint": "Choose the option that best describes your property."
};
questions["15"] = {
  "id": 15,
  "field": "bedrooms",
  "text": "How many bedrooms do you have?",
  "subtext": "This helps us size the boiler correctly.",
  "type": "radio",
  "options": {
    "1 bedroom": 16,
    "2 bedrooms": 16,
    "3 bedrooms": 16,
    "4 bedrooms": 16,
    "5 bedrooms": 16,
    "6+ bedrooms": 16
  },
  "hint": "Include any loft conversions or annexes."
};
questions["16"] = {
  "id": 16,
  "field": "baths",
  "text": "How many bath tubs do you have?",
  "subtext": "This helps us understand hot water demand.",
  "type": "radio",
  "options": {
    "0 baths": 17,
    "1 bath": 17,
    "2 baths": 17,
    "3+ baths": 17
  },
  "hint": "Include only full-sized baths."
};
questions["17"] = {
  "id": 17,
  "field": "showers",
  "text": "How many separate showers do you have?",
  "subtext": "Showers have a big impact on boiler choice.",
  "type": "radio",
  "options": {
    "0 showers": null,
    "1 shower": null,
    "2 showers": null,
    "3+ showers": null
  },
  "hint": "Don't count baths with shower attachments."
};