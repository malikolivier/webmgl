/* eslint-env jasmine */

if (typeof WebMGL === 'undefined') {
  var WebMGL = require('..')
}

describe('WebMGL', function () {
  it('Encode empty video', function () {
    var video = new WebMGL.Video()
    expect(function () {
      video.compile()
    }).toThrowError(/\[WebMGL\]/)
  })
})
