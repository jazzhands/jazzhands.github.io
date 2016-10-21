QUnit.test( "space test", function( assert ){
  var spaceP = new Space(1);
  var spaceC = new Space(2);
  var spaceE = new Space(3);

  spaceP.setState("PLAYER");
  spaceC.setState("COMPUTER");

  assert.equal(spaceP.state, "PLAYER");
  assert.equal(spaceC.state, "COMPUTER");
  assert.equal(spaceE.state, "");

  spaceP.addScore(10);
  spaceC.addScore(10);
  spaceE.addScore(10);
  spaceE.addScore(2);

  assert.equal(spaceP.getScore(), -1);
  assert.equal(spaceC.getScore(), -1);
  assert.equal(spaceE.getScore(), 12);

  assert.equal(spaceP.getPosition(), 1);
  assert.equal(spaceC.getPosition(), 2);
  assert.equal(spaceE.getPosition(), 3);

  console.log(spaceE);
  console.log(spaceP);
  console.log(spaceC);

});
