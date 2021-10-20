export const required = value => {
  let result;
  if (!value) {
     result = 'Field is required';
  }
  return result;
}

export const maxLength = max => value => {
  let result;
  if (value && value.length > max) {
    result = `Max length is ${max} symbols`
  }
  return result;
}