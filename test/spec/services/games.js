'use strict';

describe('Service: Games', function () {

  // load the service's module
  beforeEach(module('mayjongApp'));

  // instantiate service
  var Games;
  beforeEach(inject(function (_Games_) {
    Games = _Games_;
  }));

  it('should do something', function () {
    expect(!!Games).toBe(true);
  });

});
