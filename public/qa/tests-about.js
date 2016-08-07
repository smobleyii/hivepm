suite('"About" Page Tests', functional(){
  test('page should contain link to contact page', function()
    assert($('a[href="/contact"]').length);
  });
});
