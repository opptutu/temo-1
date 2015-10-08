/**
 * Created by tim on 9/24/15.
 * Insane test
 */
var should = require('should');
var assert = require('assert');

describe('Test Framework', function () {
    it('Should have mocha installed and running.'
        , function () {
            assert.equal(true, true);
        })
    it('should have the library installed and running for fluent testing.', function () {
        true.should.eql(true);
    })

})