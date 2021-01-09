// validate form entries

const inputs = document.querySelectorAll('input'); //all input elements
const patterns = {
  telephone: /^\d{11}$/,    //  \d is the same as [0-9]
  username: /^[a-z\d]{5,12}$/i,     // /^(\d|\w){5,12}$/ same thing
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i
}

// validation function
function validate(field, regex) {
  // console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value])

  })
})