'use strict';

describe('Service: GameTemplates', function () {

  // load the service's module
  beforeEach(module('mayjongApp'));

  // instantiate service
  var GameTemplates;
  beforeEach(inject(function (_GameTemplates_) {
    GameTemplates = _GameTemplates_;
  }));

  it('should do something', function () {
    expect(!!GameTemplates).toBe(true);
  });

});
