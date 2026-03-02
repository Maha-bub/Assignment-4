function checkName(name) {

  // note : check for string or not.
  if (typeof name !== "string") {
    return "Please type a string name";
  }

  // Last charecter
  const lastCharOfName = name[name.length - 1]

  // vowel check
  if (
    lastCharOfName === 'A' ||
    lastCharOfName === 'e' ||
    lastCharOfName === 'i' ||
    lastCharOfName === 'o' ||
    lastCharOfName === 'u' ||
    lastCharOfName === 'y' ||
    lastCharOfName === 'w'
  ) {
    return "This is a pretty name.";
  } else {
    return "This name is not fit for your son.";
  }
}

const name = 'abony';
const finalName = checkName(name);
console.log(finalName);