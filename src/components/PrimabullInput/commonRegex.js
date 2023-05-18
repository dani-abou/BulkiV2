export const PASSWORD_REGEX = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;
export const PASSWORD_RULES = "Password must be 8 characters long, have at least one digit, uppercase letter, lowercase letter, and special character"
export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const PHONE_NUMBER = /^\d{10}|\d{3}-\d{3}-\d{4}$/
export const NUMBER = /\d+/
export const LETTERS = /[a-zA-Z]+/
export const ZIPCODE = /^\d{5}$/
export const STREETADDRESS = /^\s*\S+(?:\s+\S+){2}/
