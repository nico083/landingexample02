export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'not valid field'
        : undefined;

export const required = value => {
    return value && value.trim().length > 0
        ? undefined
        : 'mandatory field'
};

export const minLength = min => value =>
    value && value.length < min
        ? `min length is ${min}`
        : undefined;

export default {
    required, minLength, email
}