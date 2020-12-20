# Scroll Progress Bar React Component

## The idea behind the example
Based off of:

https://github.com/thisisadityarao/react-scroll-progress-bar

I used the above class based component as a basis for this functional component.
In addition to making it a functional component for the sake of modernity, instead of
using `fixed` positioning, mine is `static`. I believe this makes it useful in a wider
variety of contexts, particularly in the common under nav-bar style as shown in the
demo. 

I have also required that color, height and delay props include units (px, s, etc.), again
to allow for maximum customizability. 

The component is wrapped in a Next.js app for demonstration purposes.

## How to use

For the full example:

1. Clone the repo
2. Run:
```sh
npm install
npm run dev
```

or:

[![Edit on Repl](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/mui-org/material-ui/tree/master/examples/nextjs)

<!-- To just install the component:
```sh
npm install scroll-progress-bar
``` -->


