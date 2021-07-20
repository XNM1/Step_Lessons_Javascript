import { assert } from "chai";
import { sum } from '../index.js'

describe('Check sum()', function() {
    describe('positive tests:', function() {
        it('sum(2,5)==7', function() {
            assert.equal(sum(2,5), 7);
        });
        it('sum(11,12)==23', function() {
            assert.equal(sum(11,12), 23);
        });
        it('sum(99, 0)==99', function() {
            assert.equal(sum(99,0), 99);
        });
    });
    describe('negative tests:', function() {
        it('sum("3", "4")==7', function() {
            assert.equal(sum("3","4"), 7);
        });
    });
});
