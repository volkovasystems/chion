
const assert = require( "assert" );
const chion = require( "./chion.js" );

assert.equal( chion( Object ), Object, "should be equal Object" );

class Orange {
	constructor( ){
		this.color = "orange";
	}
	getColor( ){
		return "orange";
	}
}

class Apple extends Orange {
	constructor( ){
		super( );

		this.color = "red";
	}
	getColor( ){
		return this.color;
	}
}

let apple = new Apple( );
assert.deepEqual( chion( apple ), apple.constructor, "should be equal to the constructor of the instance of Apple ");

console.log( "ok" );
