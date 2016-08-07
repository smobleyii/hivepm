var Browser = require('zombie'),
  assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function(){
  setup(function(){
    browser = new Browser();
  });



  test('visiting the "request group rate" page directly should result ' + 'in an empty referrer field', function(done){
    browser.visit('http://localhost:3000/services/early-signup',
      function(){
        assert(browser.field('referrer').value === '');
        done();
    });
  });
});
