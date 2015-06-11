'use strict';

describe('Service: GamePlayers', function () {

  // load the service's module
  beforeEach(module('mayjongApp'));

  // instantiate service
  var GamePlayers;
  beforeEach(inject(function (_GamePlayers_) {
    GamePlayers = _GamePlayers_;
  }));

  it('should do something', function () {
    expect(!!GamePlayers).toBe(true);
  });

});
