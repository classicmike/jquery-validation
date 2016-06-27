/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES (Spanish; Español)
 */
$.extend( $.validator.messages, {
	required: "Hey! you need to fill in this field Yo!",
	remote: "Damn! I ain't getting nothin' from this field bro!",
	email: "Bro, that yo'r email address?",
	url: "Shorty! Give us the right url",
	date: "Damn Grandpa, is that date evn' rite?",
	dateISO: "ISO bro, yo'll need to give me th' I.S.O!",
	number: "Bro, can yo' evn count!?",
	digits: "It's the numbers that'll give me the green!",
	creditcard: "Give us yo'll credit card number.",
	equalTo: "Man, are you high on somethin' cuase the stuff u filled in is different!",
	maxlength: $.validator.format( "Can you count bro!? NO MORE THAN {0} characters." ),
	minlength: $.validator.format( "Can you count bro!? NO MORE THAN. AT LEAST {0} characters." ),
	rangelength: $.validator.format( "Can you count bro!? BETWEEN {0} and {1} characters long!" ),
	range: $.validator.format( "Bro! The BLING BLING should be between {0} and {1}." ),
	max: $.validator.format( "Bro! You gave me too much green! I only need less than or equal to {0}!" ),
	min: $.validator.format( "Bro! I need more green than that! Gimmie more than or equal to {0}!" )
} );
