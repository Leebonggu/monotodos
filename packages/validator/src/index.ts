const isGteMinLength = (minLength: number) => (value: string) => value.length >= minLength;

export {
  isGteMinLength
}