/**
 * Created by tim on 9/24/15.
 * Insane test
 */
var should = require('should');

(5).should.be.exactly(5).and.be.a.Number();

var should = require('should/as-function');

should(10).be.exactly(5).and.be.a.Number();