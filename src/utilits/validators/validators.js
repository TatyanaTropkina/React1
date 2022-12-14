export const required = value => (value ? undefined : 'Required')
export const maxLength = max => value => value && value.length >= max ? `Max length is ${max} symbols` : undefined;
export const hasEmail = value => (value && value.includes("@")  ? undefined : "Uncorrected email");
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)