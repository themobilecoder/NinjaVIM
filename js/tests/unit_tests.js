/**
 *
 * Created by Rafael on 27/11/2015.
 */

//var GLOBAL_OBJECT = GLOBAL_OBJECT || {};
var MY_NAMESPACE = MY_NAMESPACE || {};

MY_NAMESPACE.something = 'hello'


QUnit.test("Object Testing", function(assert){
   assert.ok(MY_NAMESPACE, "object exists");

   assert.equal(MY_NAMESPACE.something, "hello", "equal");

});


