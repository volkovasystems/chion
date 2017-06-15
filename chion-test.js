
const assert = require( "assert" );
const chion = require( "./chion.js" );

assert.equal( chion( { } ), Object, "should be equal" );

assert.equal( chion( Object ), Object, "should be equal" );

assert.equal( chion( new Date( ) ), Date, "should be equal" );

assert.equal( chion( Array ), Array, "should be equal" );

console.log( "ok" );