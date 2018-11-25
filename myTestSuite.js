describe('c:helloWorld', function () {
    it('verify component rendering', function (done) {
        $T.createComponent('c:helloWorld', {}, true)
            .then(function(cmp) {
                expect(cmp.find("message").getElement().innerHTML).toBe('Hello World!');
                done();
            }).catch(function (e) {
                done.fail(e);
            });
    });
});


describe('c:componentWithDataBinding', function () {
   it('verify data binding', function (done) {
      $T.createComponent('c:componentWithDataBinding', {message: 'Hello World!'}, true)
         .then(function (component) {
            expect(component.find("message").getElement().innerHTML).toBe('Hello World!');
            expect(component.find("messageInput").get("v.value")).toBe('Hello World!');
            done();
      }).catch(function (e) {
            done.fail(e);
      });
   });
});


describe("c:componentWithMethod", function() {
    it('verify method invocation', function(done) {
        $T.createComponent("c:componentWithMethod", {}, false)
            .then(function (component) {
                expect(component.get("v.counter")).toBe(0);
                component.increment();
                expect(component.get("v.counter")).toBe(1);
                done();
            }).catch(function (e) {
                done.fail(e);
            });
    });
});