/**
 * Global is used to define constants and Enums which are used at globally
 * application level
 *
 * @namespace  appPortalApp
 * @class Global
 * @return  loginUsername
 * @descriprtion Global is used to define constants and Enums which are used at globally
 * application level
 */
'use strict';

/* exported Global */
var Global = (function() {

	/**
	 * loginUsername is used for display username after login
	 *
	 * @property loginUsername
	 * @type json
	 */
	var loginUsername = {
			USERNAME : 'John Doe'
	};
   var userCredentials = {
   		USERID :''
   };
   
    var requiredId = {
   		SUBID :'',
   		CHID : '',
   		TOPICID : '',
   		AUDIOID : ''
   };
  var registerParent = true;

	var RestUrls = {
		DOMAIN : 'http://',
		subjectUrl :'subjects/',
		chapterUrl : 'chapters/',
		topicUrl : 'getAudio/'
		
		
		
	};

	return {
		loginUsername : loginUsername,
		userCredentials : userCredentials,
		requiredId : requiredId,
    registerParent : registerParent,
		RestUrls :RestUrls
	};
})();
