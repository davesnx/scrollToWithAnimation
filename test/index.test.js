import scrollto, { rAF } from './../src/index'

const D = document.documentElement
const TO = 0
const DURATION = 100
const DIRECTION = 'scrollTop'
const TRANSITION_OK = 'easeInOutQuad'
const TRANSITION_KO = 'flowInOutFly'
const TRANSITION_EQ_OK = (a, b, c, d) => a + b + c + d
const TRANSITION_EQ_KO = () => {}

describe(`#findAnimation when you pass`, () => {
  it(`an incorrect transition should throw an exception`, () => {
    const func = () => scrollto(D, DIRECTION, TO, DURATION, TRANSITION_KO)
    expect(func).toThrow()
  })

  it(`a correct transition shouldn't throw an exception`, () => {
    const func = () => scrollto(D, DIRECTION, TO, DURATION, TRANSITION_OK)
    expect(func).not.toThrow()
  })
})

describe(`#defineAnimation when you pass an easing function`, () => {
  it(`that isn't correct should throw an exception`, () => {
    const func = () => scrollto(D, DIRECTION, TO, DURATION, TRANSITION_EQ_KO)
    expect(func).toThrow()
  })

  it(`that is correct shouldn't throw an exception`, () => {
    const func = () => scrollto(D, DIRECTION, TO, DURATION, TRANSITION_EQ_OK)
    expect(func).not.toThrow()
  })
})

describe(`#do the scrollto with animation`, () => {
  it(`should call animationFrame.request`, () => {
    rAF.request = jasmine.createSpy('animationFrameSpy')
    scrollto(D, DIRECTION, TO, DURATION, TRANSITION_EQ_OK)
    expect(rAF.request).toHaveBeenCalled()
  })
})
