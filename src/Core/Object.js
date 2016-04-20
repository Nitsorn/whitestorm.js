/**
 * © Alexander Buzin, 2014-2015
 * Site: http://alexbuzin.me/
 * Email: alexbuzin88@gmail.com
*/

/* Global WhitestormJS (WHS) object class */
WHS.Object = class {
	/**
	 * Constructing WHS.Shape object.
	 * 
	 * @param {Boolean} structurable - true if object has parents and children.
	 * @param {String} type - Shape type.
	 * @return {WHS.Object}
	 */
	constructor( defaults = {}, structurable = true ) {

		var scope = structurable 
		? Object.assign( this,
		{
			__whsobject: true,
			__releaseTime: new Date().getTime(),
			__params: {},
			__defaults: defaults,

			parent: null,
			children: []
		},
		new Events())
		: Object.assign( this,
		{
			__whsobject: true,
			__releaseTime: new Date().getTime(),
			__params: {}
		},
		new Events());

		return scope;
	}

	setParams( params = {} ) {

		this.__params = WHS.API.extend( params, this.__defaults );

	}

	updateParams( params = {} ) {

		this.__params = WHS.API.extend( params, this.__params );

	}

}
