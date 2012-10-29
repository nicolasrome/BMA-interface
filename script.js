//
function InitDebug () {
	$('body').prepend('<div id="debug"></div>');
}
function debug ( val, reset ) {
	if (reset == 0) {
		$('#debug').empty();
	};
	$('#debug').append( val+'<br/>' );
}
// vars to init later
var body;
var container;
var ttop;
var navigation;
var cons;
var map;
var horMargins;
var verMargins;
var consoleWidth;
var navMinWidth;

function InitVars () {
	body = $('body');
	cons = $('#console');
	container = $('#container');	
	map = $('#map');
	navigation = $('#navigation');
	ttop = $('#top');
	horMargins = parseInt( $('body').css('margin-left') ) + parseInt( $('body').css('margin-right') );
	verMargins = parseInt( $('body').css('margin-top') ) + parseInt( $('body').css('margin-bottom') );
	consoleWidth = parseInt( cons.css('width') );
}
///
function wW () {
	return $(window).width();
}
function wH () {
	return $(window).height();
}
function eW ( e ) {
	return e.outerWidth();
}
function eH ( e ) {
	return e.outerHeight();
}
function eT ( e ) {
	return e.position().top;
}
function eL ( e ) {
	return e.position().left;
}
//
function MinimumWidth () {
	navMinWidth = 0;
	$('#navigation>ul>li').each( function(){
		navMinWidth += $(this).outerWidth();
	});
	navigation.css({'min-width':navMinWidth});
}
function InitConsole () {
	
}
function InitInterface (argument) {
	MinimumWidth();
	InitConsole();
	WindowResize();
}
function Init () {
	InitDebug();
	InitVars();
	InitInterface();	
}
function WindowResize () {
	cH = wH()-verMargins;
	bW = wW()-horMargins;
	container.css({'height':cH});
	body.css({'width':bW});
	lastli = bW-navMinWidth+10;
	if (lastli < 10) {
		lastli = 10;
	};
	$('#navigation>ul>li:last()').css('padding-left',lastli);
	if ( cons.is(':visible') ) {
		map.css({'width':bW-consoleWidth});
		cons.css({'height':cH-(ttop.outerHeight())});
	} else {
		map.css({'width':''});
	}
}
$(document).ready( Init );
$(window).resize( WindowResize );