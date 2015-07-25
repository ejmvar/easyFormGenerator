/**
 *  ------------------------------------------------------
 *  configuration container
 *  ------------------------------------------------------
 *
 *      Syntax (convention) :
 *          "ngwfApp" = application
 *          "ngwfApp.configs" = container configuration module
 * 
 * ——————————————————————————————————————————————
 * MIT (2015) - Erwan Datin (MacKentoch)
 * https://github.com/MacKentoch/easyFormGenerator
 * ——————————————————————————————————————————————
**/
angular
	.module('ngwfApp.configs', [	'ngwfApp.configs.ngwfFormlyConfig',
																'ngwfApp.configs.ngwfDragAndDropConfig',
	function () {

}]);
