describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('contacts holder', function(){
    casper.then(function(){
      expect("body").to.have.text("Contacts Holder");
    });
  });

});
