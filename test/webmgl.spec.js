/* eslint-env jasmine */

if (typeof WebMGL === 'undefined') {
  var WebMGL = require('../webmgl')
}

describe('WebMGL', function () {
  it('Encode empty video', function () {
    var video = new WebMGL.Video()
    expect(video.compile()).toBe('doing something')
  })
})