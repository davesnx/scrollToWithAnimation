![](docs/Logo.png)

### [Live demo](http://scrollto-with-animation.surge.sh/)

[![Build Status](https://travis-ci.org/davesnx/scrollto-with-animation.svg?branch=master)](https://travis-ci.org/davesnx/scrollto-with-animation) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/scrollto-with-animation)

- Using [**requestAnimationFrame**](https://dev.opera.com/articles/better-performance-with-requestanimationframe/)
- **3.2k** minified and gzipped
- Runs the animation at **60 FPS**
- Available as a **script or UMD**
- Only **one dependency** to have **requestAnimationFrame cross-browser**
- If user scrolls while animation is running, scroll animation would be immediately canceled

## Install

```bash
npm install scrollto-with-animation --save
```

## Usage

### Available as a [UMD](https://github.com/umdjs/umd)

```javascript
var scrollToWithAnimation = require('scrollto-with-animation')
// or ES6+
import scrollToWithAnimation from 'scrollto-with-animation'
```

### or as a script

```html
<script src="https://unpkg.com/scrollto-with-animation/dist/scrollto-with-animation.min.js"></script>
```

### Example

```javascript
scrollToWithAnimation(
    document.documentElement, // element to scroll
    'scrollTop', // direction to scroll
    0, // target scrollY (0 means top of the page)
    10000, // duration in ms
    'easeInOutCirc', /*
        Can be a name of the list of 'Possible easing equations' or a callback
        that defines the ease. # http://gizma.com/easing/
    */
    function () { // callback function that runs after the animation (optional)
      console.log('done!')
    }
);
```

This will scroll to top of the page and the animation will run for 10 seconds (10000ms).


## Options

## Posible easings equations

- `linearTween`
- `easeInQuad`
- `easeOutQuad`
- `easeInOutQuad`
- `easeInCubic`
- `easeOutCubic`
- `easeInOutCubic`
- `easeInQuart`
- `easeOutQuart`
- `easeInOutQuart`
- `easeInQuint`
- `easeOutQuint`
- `easeInOutQuint`
- `easeInSine`
- `easeOutSine`
- `easeInOutSine`
- `easeInExpo`
- `easeOutExpo`
- `easeInOutExpo`
- `easeInCirc`
- `easeOutCirc`
- `easeInOutCirc`

> Feel free to add more ease functions to [easings.js](https://github.com/davesnx/scrollToWithAnimation/blob/master/src/easings.js) open a Pull request!

## License

MIT
