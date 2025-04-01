export const validationFunctions = {
  postcodeCheck: (answer) => {
    const formattedPostcode = answer.toUpperCase().trim();
    const ukPostcodeRegex = /^[A-PR-UWYZ][A-HK-Y]?[0-9][0-9ABEHMNPRVWXY]?\s[0-9][ABD-HJLNP-UW-Z]{2}$/i;
    const authorizedPostcodes = ["SO40", "SO41", "SO42", "SO43", "SO50", "SO13", "SO30"];
    if (!ukPostcodeRegex.test(formattedPostcode)) {
      return "Please enter a valid UK postcode with a space.";
    }
    if (!authorizedPostcodes.includes(formattedPostcode.slice(0, 4))) {
      return "Unfortunately, we do not currently work in your area.";
    }
    return true;
  },
  contactCheck: (answer) => {
    const trimmed = answer.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
    if (!emailRegex.test(trimmed) && !phoneRegex.test(trimmed)) {
      return "Please enter a valid UK phone number or email address.";
    }
    return true;
  }
};