/* jshint asi:true */

var ECT = require( 'ect' )
var qs = require( 'qs' )
var assign = require('object.assign').getPolyfill()
var debug = require( 'debug' )( 'webpack:loader:ect' )

function generateOptions ( query ) {
    return assign(
        {
            open: '<%',
            close: '%>',
            watch: false,
            cache: false,
            root: this.context
        },
        qs.parse(
            ( query + '' )
            .replace( /^\?/ , '' )
        )
    )
}

module.exports = function ( source, map ) {

    // Process query
    options = generateOptions( this.query )

    // Debug
    debug( "Parsing %s with options: %s", this.resourcePath, JSON.stringify( options ) )

    // Set this module as cacheable
    this.cacheable()

    // Create ect engine instance
    var ect = ECT( options )

    // Allways pass the source to a string
    var template = source + ''

    // Check if source should be minimized
    if( this.minimized ) {
        template = template
            .replace( /\n/, ' ' )
            .replace( /\s+/, ' ' )
    }

    // Parse source into a Function
    var method = ect.compile( template )

    // Return syncronously the javascript function generated
    return 'module.exports = ' + method.toString()
}
