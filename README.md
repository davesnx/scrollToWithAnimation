![](docs/Logo.png)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![npm](https://img.shields.io/npm/dm/localeval.svg)](https://www.npmjs.com/package/scrollto-with-animation)

- Only **one dependency** *(for the [polyfill](https://www.npmjs.com/package/animation-frame))*
- **Cross-browser**
- **60 FPS** Animation
- If user scrolls while animation is running, scroll animation would be immediately canceled
- Available adding **script or browserify**

#### [Live demo](https://davesnx.github.io/scrollto-with-animation/docs/demo/index.html)

## Install

```bash
npm install scrollto-with-animation --save
```

## Usage

### Available with browserify

```javascript
var scrollToWithAnimation = require('scrollto-with-animation')
// or ES2015
import scrollToWithAnimation from 'scrollto-with-animation'
```

### or available as a script

```html
<script src="scrollToWithAnimation.min.js"></script>
```

### Example

```javascript
scrollToWithAnimation(
    document.body, // element to scroll
    'scrollTop' // direction to scroll
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
