define( function() {
	'use strict';
	
	return {
		enabledTools: [ 'phpcs', 'phpcpd', 'phpl' ],
		phpcsStandards: [ 'MySource', 'PEAR', 'PHPCS', 'PSR1', 'PSR2', 'Squiz', 'Zend' ],
		phpmdRulesets: [ 'cleancode', 'codesize', 'controversial', 'design', 'naming', 'unusedcode' ]
	};
} );