/**
 * llCoolJ.js v0.1
 * Add some LL Cool J to yr page
 * http://www.likeneveralways.com
 *
 * Commercial use requires one-time license fee
 *
 * Copyright 2012 Jacob Broms Engblom
 */

(function( $ ){

  $.fn.llCoolJ = function( options ) {
		this.append("<div id='overlay'></div>");
		this.append("<div id='llCoolJ'></div>");
		var settings = $.extend( {
	      'inset'       : false,
	      'interactive' : false
	    }, options);
		
		if(settings['inset']){
			$('#llCoolJ').addClass('inset');
			$('#overlay').css('background', 'none');
			if(settings['interactive']){
				$('#llCoolJ').click(function(){
					console.log($(this).css('bottom'));
					if($(this).css('bottom') != "0px"){
							$(this).animate({
						    	bottom: 0
						  	}, 1000);
					}
					else {
							$(this).animate({
						    	bottom: -220
						  	}, 1000);
					}
				
				});
			}
		}
		else {
				if(settings['interactive']){
					$(document).dblclick(function() {
						if($('#llCoolJ').is(":visible")){
						  	$('#llCoolJ').fadeOut('fast', function(){
								$('#overlay').fadeOut('fast');
							});
						}
						else {
							$('#overlay').fadeIn('fast', function(){
								$('#llCoolJ').fadeIn('fast');
							});
						}
					});
				}
				else {
					$(document).dblclick(function() {
						  	$('#llCoolJ').fadeOut('fast', function(){
								$('#overlay').fadeOut('fast');
							});
					});
				}
		}
	
		
		$('#overlay').fadeIn('fast', function(){
			$('#llCoolJ').fadeIn('fast');
		});
  };
})( jQuery );

