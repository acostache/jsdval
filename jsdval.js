/**
 * @license
 * (c) 2014
 * andreicostache1986{at}gmail{dot}com
 * http://github.com/acostache/jsdval
 *
 * jsdval v1.0
 *
 */

//make sure required modules are loaded
if (typeof jQuery === "undefined") {
	throw "JSDVal requires jquery module to be loaded.";
}

(function($) {

	$.extend(true, window, {
		JSDVal : Validator
	});

	/**
	 * The validator constructor function
	 * 
	 */
	function Validator() {

		//////////////////////////////////////////////////////////////////////////////////////////////
		// Private (section)
		var defaults = {};

		function startInitailization() {

		}

		function finishInitailization() {

		}
		
		function destroy() {
			
		}

		//////////////////////////////////////////////////////////////////////////////////////////////
		// Debug
		// a debug helper to be able to access private members
		this.eval = function(expr) {
			return eval(expr);
		};

		
		//////////////////////////////////////////////////////////////////////////////////////////////
		// Public API
		$.extend(this, {
			"jsdvalVersion" : "1.0",

			"init" : finishInitialization,
			"destroy" : destroy

		});

		startInitailization();
	}
}(jQuery));