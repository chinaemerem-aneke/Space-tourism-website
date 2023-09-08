
# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

Some of my major learnings while working through this project is using the CSS Grid propertty effectly. 

To see how you can add code snippets, see below:

```css
.grid-container--technology {
        grid-template-columns: minmax(1em,1fr) minmax(0, 6rem) repeat(3, minmax(0, 40rem)) minmax(1em,1fr);
        grid-template-areas: 
            '. title title title .'
            '. tabs content image .';
    }

.grid-container--technology .mobile-img {
        display: none;
    }

.grid-container--technology .desktop-img {
        display: block;
    }

```
```js
if (e.keyCode === keydownLeft || e.keyCode === keydownRight || e.keyCode === keydownTop || e.keyCode === keydownBottom) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }

    if (e.keyCode === keydownRight || e.keyCode === keydownBottom) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    }

    if (e.keyCode === keydownLeft || e.keyCode === keydownTop ) {
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I want to continue focusing on JavaScript in future projects.


### Useful resources

- [Scrimba](https://scrimba.com/learn/spacetravel/) - This helped me to understand what the project is all abot and also boost my confidence in writing my JavaScript code.


## Author

- Github - [Chinaemerem](https://github.com/chinaemerem-aneke)
- Frontend Mentor - [@chinaemerem-aneke](https://www.frontendmentor.io/profile/chinaemerem-aneke)
- Twitter - [@a_chinaemerem](https://twitter.com/a_chinaemerem)


## Acknowledgments

I wouldn't forget to give credit to Kevin Powell. He's such an amzing tutor!.

