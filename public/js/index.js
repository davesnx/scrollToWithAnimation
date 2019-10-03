'use strict'

window.onload = function () {
  var elemHighlighted = document.getElementById('highlight')
  var header = document.getElementById('header')
  var counterFPS = document.getElementById('fpsMeter')
  var counterButton = document.getElementById('fps-button')
  var triggerButton = document.getElementById('trigger-scroll-btn')

  var meter = new window.FPSMeter(counterFPS, {
    interval: 10,
    smoothing: 10,
    show: 'fps',
    toggleOn: 'EventNonSense',
    decimals: 0,
    maxFps: 60,
    threshold: 100,
    position: 'fixed',
    left: '15px',
    top: 'auto',
    right: 'auto',
    bottom: '15px'
  })

  function easeInOutCircWithFPS (t, b, c, d) {
    meter.tick()
    t /= d / 2
    if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b
    t -= 2
    return c / 2 * (Math.sqrt(1 - t * t) + 1) + b
  }

  function enableFPS (event) {
    event.preventDefault()
    counterFPS.style.opacity = (counterFPS.style.opacity === '0') ? '1' : '0'
  }

  function scroll (event) {
    event.preventDefault()
    var direction = 'scrollTop'

    var position = elemHighlighted.getBoundingClientRect().top - header.getBoundingClientRect().height

    window.scrollToWithAnimation(
      document.documentElement,
      direction,
      position,
      2000,
      easeInOutCircWithFPS,
      function () {
        console.log('Done!')
      }
    )
  }

  counterButton.addEventListener('click', enableFPS)
  triggerButton.addEventListener('click', scroll)
}
