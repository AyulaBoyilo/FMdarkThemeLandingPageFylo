function validateMyForm() {
  let emailString = document.querySelector('#email').value;

  if (emailString.includes('@')) {
    return true;

  } else {
    
    if (document.querySelector('.alert')) {
      document.querySelector('.alert').remove();
    }

    document.querySelector('#email').insertAdjacentHTML('afterend', '<span class="alert">Please enter a valid email address</span>');
    return false;
  }
}