# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How I did it](#how-i-did-it)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./design/active-states.jpg)

### Links

- Solution URL: [GitHub repository](https://github.com/AyulaBoyilo/FMdarkThemeLandingPageFylo/)
- Live Site URL: [GitHub Pages](https://ayulaboyilo.github.io/FMdarkThemeLandingPageFylo/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS and CSS3
- CSS Flexbox
- JavaScript

### How I did it

Avoided html email type validation so the default alerts are not triggered. Used a simple email validation using onsubmit in the form to display an alert specified in the design. If statement within validation checks whether the alert is already displayed to avoid duplication.

The sign-up form overlapping the footer is positioned relatively. To avoid a too big margin above it, the negative margin value is used to compensate for the gap left in the page flow by the relative positioning.

```html
<form onsubmit="return validateMyForm();">
  <input type="text" id="email" placeholder="email@example.com" />
  <button class="btn">Get Started For Free</button>
</form>
```

```js
function validateMyForm() {
  let emailString = document.querySelector("#email").value;

  if (emailString.includes("@")) {
    return true;
  } else {
    if (document.querySelector(".alert")) {
      document.querySelector(".alert").remove();
    }

    document
      .querySelector("#email")
      .insertAdjacentHTML(
        "afterend",
        '<span class="alert">Please enter a valid email address</span>'
      );
    return false;
  }
}
```

```scss
.sign-up {
  position: relative;
  bottom: -125px;
  margin-bottom: -50px;
}
```

### Useful resources

- [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - MDN Client-side form validation

## Author

- Ayula Boyilo
