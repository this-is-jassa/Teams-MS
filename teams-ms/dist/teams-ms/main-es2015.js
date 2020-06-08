(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display:flex; background-color: black;\" >\n\n    <app-navbar></app-navbar>\n \n    <div style=\"width:100%; flex-grow: 2; margin: 30px 2px; background-color: #F8F9FA; border-top-left-radius: 30px; border-bottom-left-radius: 30px ;padding: 20px;\" >\n        <router-outlet></router-outlet>\n    </div>\n\n</div>\n\n<app-loading></app-loading>\n\n<div>\n    <app-footer></app-footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/auth/signin/signin.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/auth/signin/signin.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"limiter\">\n    <div class=\"container-login100\">\n        <div class=\"wrap-login100\">\n            <div class=\"login100-pic js-tilt\" data-tilt>\n                <img src=\"../../../../assets/images/img-01.png\" alt=\"IMG\">\n            </div>\n\n            <form class=\"login100-form validate-form\">\n\n\n                <span class=\"login100-form-title\">\n                    <strong>Member Login</strong>\n                </span>\n\n                <div class=\"wrap-input100 validate-input\" data-validate=\"Valid email is required: ex@abc.xyz\">\n                    <input class=\"input100\" [(ngModel)]=\"userName\" type=\"text\" name=\"email\" placeholder=\"User Name\"\n                        required>\n                    <span class=\"focus-input100\"></span>\n                    <span class=\"symbol-input100\">\n                        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n\n                <div class=\"wrap-input100 validate-input\" data-validate=\"Password is required\">\n                    <input class=\"input100\" [(ngModel)]=\"password\" type=\"password\" name=\"pass\" placeholder=\"Password\"\n                        minlength=\"8\">\n                    <span class=\"focus-input100\"></span>\n                    <span class=\"symbol-input100\">\n                        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n\n                <div class=\"container-login100-form-btn\">\n                    <button (click)=\"signIn()\" class=\"login100-form-btn\">\n                        Login\n                    </button>\n                </div>\n                <div class=\"text-center p-t-136\">\n                    <a class=\"txt2\" style=\"color: rgb(179, 179, 179); font-size: 12px; text-decoration: underline;\"\n                        [routerLink]='[\"/auth/signup\"]'>\n                        Create your Account\n                        <i class=\"fa fa-long-arrow-right m-l-5\" aria-hidden=\"true\"></i>\n                    </a>\n                </div>\n                <div class=\"text-center p-t-136\">\n                    <a class=\"txt2 btn btn-primary\" style=\"color: white; margin: 18px 0 10px 0; cursor: pointer;\" (click)=\"signInAsDemo()\">\n                        Explore a demo user\n                        <i class=\"fa fa-long-arrow-right m-l-5\" aria-hidden=\"true\"></i>\n                    </a>\n                </div>\n\n\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/auth/signup/signup.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/auth/signup/signup.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"main\">\n    <p class=\"sign\" align=\"center\">Sign up</p>\n    <form class=\"form1\">\n        <input class=\"un\" name=\"userName\" [(ngModel)]=\"userName\" required minlength=\"1\" maxlength=\"16\" type=\"text\" align=\"center\" placeholder=\"Username\">\n        <input class=\"pass\" name=\"password\" [(ngModel)]=\"password\" required minlength=\"8\" maxlength=\"16\" type=\"password\" align=\"center\" placeholder=\"Password\">\n        <input class=\"pass\" name=\"cpassword\" [(ngModel)]=\"cPassword\" required minlength=\"8\" maxlength=\"16\" type=\"password\" align=\"center\" placeholder=\"Confirm Password\">\n        <a class=\"submit\" (click)=\"signUp()\" align=\"center\">Sign up</a>\n        <p class=\"create\" align=\"center\"><a routerLink ='/auth/signin' routerLinkActive=\"active\">Sign in</a> </p>\n    </form>\n</div> -->\n\n\n<div class=\"limiter\">\n    <div class=\"container-login100\">\n        <div class=\"wrap-login100\">\n            <div class=\"login100-pic js-tilt\" data-tilt>\n                <img src=\"../../../../assets/images/img-01.png\" alt=\"IMG\">\n            </div>\n\n            <form class=\"login100-form validate-form\">\n                <span class=\"login100-form-title\">\n                    <strong>Member Login</strong>\n                </span>\n\n                <div class=\"wrap-input100 validate-input\" data-validate=\"Valid email is required: ex@abc.xyz\">\n                    <input class=\"input100\" [(ngModel)]=\"userName\" type=\"text\" name=\"email\" placeholder=\"User Name\"\n                        required>\n                    <span class=\"focus-input100\"></span>\n                    <span class=\"symbol-input100\">\n                        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n\n                <div class=\"wrap-input100 validate-input\" data-validate=\"Password is required\">\n                    <input class=\"input100\" [(ngModel)]=\"password\" type=\"password\" name=\"pass\" placeholder=\"Password\"\n                        minlength=\"8\">\n                    <span class=\"focus-input100\"></span>\n                    <span class=\"symbol-input100\">\n                        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n                <div class=\"wrap-input100 validate-input\" data-validate=\"Password is required\">\n                    <input class=\"input100\" [(ngModel)]=\"cPassword\" type=\"password\" name=\"cpass\" placeholder=\"Confirm Password\"\n                        minlength=\"8\">\n                    <span class=\"focus-input100\"></span>\n                    <span class=\"symbol-input100\">\n                        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n\n                <div class=\"container-login100-form-btn\">\n                    <button (click)=\"signUp()\" class=\"login100-form-btn\">\n                        Sign Up\n                    </button>\n                </div>\n\n                <div class=\"text-center p-t-12\">\n                    <span class=\"txt1\">\n                        Forgot\n                    </span>\n                    <a class=\"txt2\" href=\"#\">\n                        Username / Password?\n                    </a>\n                </div>\n\n                <div class=\"text-center p-t-136\">\n                    <a class=\"txt2\" [routerLink] ='[\"/auth/signin\"]' >\n                        Sign In\n                        <i class=\"fa fa-long-arrow-right m-l-5\" aria-hidden=\"true\"></i>\n                    </a>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"mt-5 pt-5 pb-5 footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-5 col-xs-12 about-company\">\n          <h2>Heading</h2>\n          <p class=\"pr-5 text-white-50\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>\n          <p><a href=\"#\"><i class=\"fa fa-facebook-square mr-1\"></i></a><a href=\"#\"><i class=\"fa fa-linkedin-square\"></i></a></p>\n        </div>\n        <div class=\"col-lg-3 col-xs-12 links\">\n          <h4 class=\"mt-lg-0 mt-sm-3\">Links</h4>\n            <ul class=\"m-0 p-0\">\n              <li>- <a href=\"#\">Lorem ipsum</a></li>\n              <li>- <a href=\"#\">Nam mauris velit</a></li>\n              <li>- <a href=\"#\">Etiam vitae mauris</a></li>\n              <li>- <a href=\"#\">Fusce scelerisque</a></li>\n              <li>- <a href=\"#\">Sed faucibus</a></li>\n              <li>- <a href=\"#\">Mauris efficitur nulla</a></li>\n            </ul>\n        </div>\n        <div class=\"col-lg-4 col-xs-12 location\">\n          <h4 class=\"mt-lg-0 mt-sm-4\">Location</h4>\n          <p>22, Lorem ipsum dolor, consectetur adipiscing</p>\n          <p class=\"mb-0\"><i class=\"fa fa-phone mr-3\"></i>(541) 754-3010</p>\n          <p><i class=\"fa fa-envelope-o mr-3\"></i>info@hsdf.com</p>\n        </div>\n      </div>\n      <div class=\"row mt-5\">\n        <div class=\"col copyright\">\n          <p class=\"\"><small class=\"text-white-50\">© 2019. All Rights Reserved.</small></p>\n        </div>\n      </div>\n    </div>\n    </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/header/header.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/header/header.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"header\" class=\"jumbotron jumbotron-fluid \">\n    \n    <div style=\"padding: 40px 0px 55px 30px;\">\n        <h1 style=\"font-weight: 500;font-size: 2.2rem ;letter-spacing: 1px;\" class=\"display-6 \">\n            <svg style=\"margin:0px 5px 5px 0px \" class=\"bi bi-display \" width=\"0.8em\" height=\"0.8em\" viewBox=\"0 0 16 16\"\n                fill=\"#9BC0F6\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\"\n                    d=\"M.102 2.223A3.004 3.004 0 003.78 5.897l6.341 6.252A3.003 3.003 0 0013 16a3 3 0 10-.851-5.878L5.897 3.781A3.004 3.004 0 002.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019L13 11l-.471.242-.529.026-.287.445-.445.287-.026.529L11 13l.242.471.026.529.445.287.287.445.529.026L13 15l.471-.242.529-.026.287-.445.445-.287.026-.529L15 13l-.242-.471-.026-.529-.445-.287-.287-.445-.529-.026z\"\n                    clip-rule=\"evenodd\" />\n            </svg>\n            Dashboard\n        </h1>\n        <p style=\"color: #9BC0F6; font-size: 18px; letter-spacing: 0.5px; \" class=\"font-weight-light\">Example dashboard\n            overview and content summary</p>\n    \n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-header></app-header> -->\n\n\n\n<div class=\"main-container\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-12 col-xl-12\">\n\n                <div class=\"page-header\">\n                    <h2 style=\"font-family: 'Bai Jamjuree', sans-serif;\" >DASHBOARD</h2>\n                    <p class=\"lead\">{{'Welcome! ' + userData.userName + ' lets make this day a bit more productive.'}}\n                    </p>\n\n                    <div class=\"container\">\n                        <div class=\"row\" style=\"background-color: black; border-radius: 5px;\" >\n                            <div class=\"col-4 infoCard\">\n                                <p>PROJECTS</p>\n                                <h1>{{userData?.projects?.length }}</h1>\n                            </div>\n                            <div class=\"col-4 infoCard\">\n                                <p>PERSONAL NOTES</p>\n                                <h1>{{personalNotesData?.length}} </h1>\n                            </div>\n                            <div class=\"col-4 infoCard\">\n                                <p>PENDING NOTES</p>\n                                <h1>{{pendingNotes}}</h1>\n                            </div>\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <hr>\n\n                <ul class=\"nav nav-tabs nav-fill\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#projects\" role=\"tab\"\n                            aria-controls=\"projects\" aria-selected=\"true\">Projects</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Productivity\" role=\"tab\" aria-controls=\"members\"\n                            aria-selected=\"false\">Productivity</a>\n                    </li>\n                </ul>\n\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane fade show active\" id=\"projects\" role=\"tabpanel\"\n                        data-filter-list=\"content-list-body\">\n\n\n                        <div class=\"content-list\">\n                            <app-project-table  [tableData]='userData?.projects'\n                                [userName]=\"userData?.userName\">\n                            </app-project-table>\n                        </div>\n\n                    </div>\n                    <!--end of tab-->\n\n\n                    <div class=\"tab-pane fade\" id=\"Productivity\" role=\"tabpanel\" data-filter-list=\"content-list-body\">\n                        <div class=\"content-list\">\n                            <h1>Coming soon</h1>\n                            <!-- <app-users-list-big [usersData]='[1,2,3,4,5]'></app-users-list-big> -->\n                        </div>\n\n                    </div>\n                </div>\n\n\n\n                <app-new-project-model [userInformation]=\"userData\"></app-new-project-model>\n\n            </div>\n        </div>\n    </div>\n\n\n    <app-chat></app-chat>\n\n</div>\n\n<app-personal-notes [userImage]=\"userImage\" [notesData]=\"personalNotesData\"></app-personal-notes>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/projects-table/project-table-row/projectRow.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/projects-table/project-table-row/projectRow.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-project\">\n\n    <div class=\"progress\">\n        <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\"\n            aria-valuemax=\"100\"></div>\n    </div>\n\n    <div class=\"card-body\">\n        <div class=\"card-options\">\n            <span style=\"font-size: 12px;\" class=\"badge badge-pill badge-primary ml-1\"\n                [ngClass]=\"badgeStyleClass[userInProjectData.permission]\">\n                {{userInProjectData.permission}}\n            </span>\n        </div>\n        <div class=\"card-title\">\n            <a [routerLink]=\"'/project/'+projectData.name\" >\n                <h5 data-filter-by=\"text\">\n                    {{projectData.name}}\n                </h5>\n            </a>\n        </div>\n        <hr>\n        <app-avatar-list (click)=\"loadMembersmodel()\" [images]='userImages' data-toggle=\"modal\" data-target= '#projectMembers'>\n        </app-avatar-list>\n\n        <!-- Modal -->\n\n\n\n        <div class=\"card-meta d-flex justify-content-between\">\n            <div class=\"d-flex align-items-center\">\n                <div class=\"input-group mb-3\">\n\n                    <select [(ngModel)]=\"userInProjectData.status.value\" (ngModelChange)=\"OnstatusChanged()\"\n                        class=\"custom-select\" id=\"inputGroupSelect02\">\n\n                        <option *ngFor=\"let status of [ 'Break', 'Working','Do Not Disturb']\">{{status}}\n                        </option>\n                    </select>\n\n                </div>\n            </div>\n            <span class=\"text-small\" data-filter-by=\"text\"> <span>Due: </span>  {{ projectData?.endingDate | date}}</span>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/projects-table/projectTable.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/projects-table/projectTable.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row content-list-head\">\n    <div class=\"col-auto\">\n        <h3>Projects</h3>\n        <button class=\"btn btn-round\" data-toggle=\"modal\" data-target=\"#project-add-modal\">\n            <i class=\"material-icons\">add</i>\n        </button>\n    </div>\n\n    <form class=\"col-md-auto\">\n        <div class=\"input-group input-group-round\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                    <i class=\"material-icons\">filter_list</i>\n                </span>\n            </div>\n            <input type=\"search\" class=\"form-control filter-list-input\" placeholder=\"Filter projects\"\n                aria-label=\"Filter Projects\">\n        </div>\n    </form>\n\n</div>\n\n<div class=\" content-list-body row\">\n    <div class=\"col-lg-6\" *ngFor=\"let item of tableData; let i = index;\">\n        <app-project-table-row [index]=\"i\" [members]=\"item.members\" [projectData]=\"item\" [userName]=\"userName\"\n            (OnshowMembers)=\"setMembersModelData($event)\">\n        </app-project-table-row>\n    </div>\n    \n    \n</div>\n<div *ngIf=\"tableData?.length === 0\" class=\"col-12\" style=\"text-align: center; margin-top: 20px \" >\n    <img style=\"width: 30%; height: 30%; \" src=\"../../../../assets/images/noProject.svg\" alt=\"..\">\n    <div class=\"mt-4\">\n        <button class=\"btn btn-primary\" style=\"width: 50%;\" data-toggle=\"modal\" data-target=\"#project-add-modal\" > + Create Project</button>\n    </div>\n</div>\n\n<div class=\"modal fade \" id=\"projectMembers\" tabindex=\"-1\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-body\">\n                <app-users-list-big [members]='membersModelData'></app-users-list-big>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav *ngIf=\"!['/auth/signin', '/auth/signup', '/'].includes(currentUrl)\">\n    <div id=\"wrapper\">\n\n        <h6>\n            <img alt=\"...\" class=\"avatar mr-1\" src=\"../../../assets/images/logo.png\" />\n            Teams MS\n        </h6>\n\n        <div id=\"userInfo\">\n            <img alt=\"...\" class=\"avatar avatar-lg mr-1\" [src]=\"avatars[userData.avatar]\" />\n\n            <div style=\"color: white;\">\n                {{userData?.userName}}\n            </div>\n\n        </div>\n        <hr style=\"width: 40%; margin-bottom: 10px;\">\n\n        <ul>\n            <a [ngClass]=\"{'active': currentUrl==='/home'}\" [routerLink]=\"['home']\">\n                <i class=\"material-icons\">\n                    bar_chart\n                </i>\n                <span style=\"text-align: center;\">\n                    Dashboard\n                </span>\n            </a>\n\n            <li data-toggle=\"modal\" data-target=\"#findUsers\">\n                <i class=\"material-icons\">\n                    search\n                </i>\n                <span style=\"text-align: center;\">\n                    Find User\n                </span>\n            </li>\n\n            <li data-toggle=\"modal\" data-target=\"#notificationModel\">\n                <i class=\"material-icons\">\n                    notifications_none\n                </i>\n                <span style=\"text-align: center;\">\n                    Notifications\n                    <span class=\"badge badge-pill badge-danger ml-1\"\n                        style=\"padding: 5px;\">{{userData.notify?.length}}</span>\n                </span>\n            </li>\n\n\n            <a [ngClass]=\"{'active': currentUrl=== ('/profile/'+userData.userName) }\" [routerLink]=\"['profile/'+userData.userName]\"\n               >\n                <i class=\"material-icons\">\n                    account_circle\n                </i>\n                <span style=\"text-align: center; \">\n                    Profile\n                </span>\n            </a>\n            <li id=\"settings\">\n                <i class=\"material-icons\">\n                    settings\n                </i>\n                <span style=\"text-align: center;\">\n                    Settings\n                </span>\n            </li>\n\n            <hr style=\"background-color: white; width: 40%; margin-left: 0px;\">\n\n            <div id=\"contactInfo\">\n                <p>\n                    Need Help ? <br />\n                    <a href=\"mailto:jassa.developer@gmail.com\">jassa.developer@gmail.com</a>\n                </p>\n            </div>\n\n            <div (click)=\"logOut()\" id=\"logOut\">LOG OUT</div>\n\n        </ul>\n\n    </div>\n</nav>\n\n\n\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"findUsers\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content container m-2 pt-3\">\n\n            <app-search-users [buttonText]=\"'View Profile'\"></app-search-users>\n            <div class=\"mt-3 mb-2 mx-2\">\n                <div data-dismiss=\"modal\"\n                    style=\"color: white; background-color: red; padding: 4px; border-radius: 7px; cursor: pointer; text-align: center;font-family: 'Nunito', sans-serif;\">\n                    Close</div>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"notificationModel\" data-backdrop=\"static\" data-keyboard=\"false\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n\n            <div *ngIf=\"userData.notify?.length > 0\" style=\"text-align: right;\" class=\"mr-1 p-1\">\n                <span (click)=\"deleteNotify()\" class=\"badge badge-pill badge-primary\" style=\"cursor: pointer;\">\n                    <i style=\"font-size: 11px;\" class=\"material-icons\">\n                        check\n                    </i>\n                    <span style=\"font-size: 12px;\">\n                        Seen All\n                    </span>\n                </span>\n            </div>\n            <ol class=\"list-group list-group-activity\">\n                <li *ngFor=\"let notif of userData?.notify \" class=\"list-group-item\">\n                    <div class=\"media align-items-center\">\n                        <ul class=\"avatars\">\n                            <li>\n                                <div class=\"avatar bg-primary\">\n                                    <i class=\"material-icons\">{{ materialIcons[notif?.type] }}</i>\n                                </div>\n                            </li>\n                            <!-- <li>\n                                <img alt=\"...\" src=\"...\" class=\"avatar\" />\n                            </li> -->\n                        </ul>\n                        <div class=\"media-body\">\n                            <div>\n                                <span>{{notif.message}}</span>\n                            </div>\n                            <span class=\"text-small\">{{notif?.timeStamp | timeAgo}}</span>\n                        </div>\n                    </div>\n                </li>\n            </ol>\n\n            <div *ngIf=\"userData.notify?.length === 0\" style=\"text-align: center;padding: 30px;\">\n                <h3>No Notifications</h3>\n                <img style=\"width: 200px; height: 200px;\" src=\"../../../assets/images/noNotification.svg\" alt=\"...\">\n                <!-- <div data-dismiss=\"modal\" style=\"color: white; background-color: red; padding: 5px; border-radius: 7px; cursor: pointer; font-family: 'Nunito', sans-serif;\" >Close</div> -->\n            </div>\n\n            <div style=\"text-align: center;padding: 30px;\">\n                <div data-dismiss=\"modal\"\n                    style=\"color: white; background-color: red; padding: 5px; border-radius: 7px; cursor: pointer; font-family: 'Nunito', sans-serif;\">\n                    Close</div>\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/personalNotes/personalNotes.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/personalNotes/personalNotes.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n\n        <div class=\"col-lg-12 pb-2\">\n            <div style=\"display: flex;\">\n                <h3> Personal Notes </h3>\n                <button class=\"btn btn-round\" data-toggle=\"modal\" data-target=\"#newNote\">\n                    <i class=\"material-icons\">add</i>\n                </button>\n            </div>\n        </div>\n\n        <div (dblclick)=\"popModel()\" *ngFor=\"let note of notesData; let index = index\" class=\"col-lg-6\"  >\n            <div class=\"card card-note\">\n                <div class=\"card-header\">\n                    <div class=\"media align-items-center\">\n                        <img alt=\"..\" [src]=\"userImage\" class=\"avatar\" />\n                        <div class=\"media-body\" >\n                            <h6 class=\"mb-0\" [ngClass]=\"note.crossOff && 'crossOff' \" style=\"word-wrap:break-word\"> {{note.name}} </h6>\n                        </div>\n                    </div>\n                    <div class=\"d-flex align-items-center\">\n                        <!-- <span>\n                            {{note.timeStamp | date}}\n                        </span> -->\n                        <div class=\"ml-1 dropdown card-options\">\n                            <button class=\"btn-options\" type=\"button\" id=\"...\" data-toggle=\"dropdown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"material-icons\">more_vert</i>\n                            </button>\n                            <div class=\"dropdown-menu dropdown-menu-right\">\n\n                                <button class=\"dropdown-item\" (click)=\"crossOff(note, index)\" >{{ note.crossOff? 'Restore': 'Mark as done' }}  </button>\n                                    \n                                <button class=\"dropdown-item\" (click)=\"preEdit(note, index)\" data-toggle=\"modal\"\n                                    data-target=\"#editNote\">Edit</button>\n                                <button class=\"dropdown-item text-danger\" data-toggle=\"modal\"\n                                    data-target=\"#deleteNote\" (click)=\"preEdit(note,index)\" >Delete</button>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <pre class=\"card-body mb-0 pb-1\" [ngClass]=\"note.crossOff && 'crossOff' \" >{{note.message}}</pre>\n                <span class=\"mx-2 mb-2\" style=\"text-align: right; font-size: 14px;\" >\n                    {{note.timeStamp | date }}\n                </span>\n            </div>\n        </div>\n\n        \n    </div>\n    <div *ngIf=\"notesData?.length === 0\" class=\"col-12 my-2\" style=\"text-align: center; margin-top: 20px;\" >\n        <img style=\"width: 30%; height: 30%; \" src=\"../../../assets/images/stickey.svg\" alt=\"..\">\n        <div class=\"mt-4\">\n            <button class=\"btn btn-primary \" style=\"width: 50%;\" data-toggle=\"modal\" data-target=\"#newNote\" > + Create Personal Note</button>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- Model 1 -->\n\n\n<div class=\"modal fade\" id=\"editNote\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <form>\n                <div class=\"p-2 form-group\">\n                    <h5 class=\"my-3\">- Edit Notes -</h5>\n\n                    <input [(ngModel)]=\"formModuleData.editNoteForm.name\" name=\"editname\" type=\"text\" class=\"form-control\"\n                        placeholder=\"Title\" maxlength=\"50\">\n                    <hr>\n                    <textarea [(ngModel)]=\"formModuleData.editNoteForm.message\" name=\"editmessage\" class=\"form-control\"\n                        placeholder=\"Message\"  minlength=\"1\" maxlength=\"400\" rows=\"5\"></textarea>\n                    <br>\n                    <hr>\n                    \n                    <div class=\"float-right p-2\" >\n                        <button type=\"button\" (click)=\"edit() \"\n                            class=\"btn btn-outline-primary btn-sm mx-2\" data-dismiss=\"modal\">Save Changes</button>\n                        <button type=\"button\" \n                            class=\"btn btn-outline-danger btn-sm\" data-dismiss=\"modal\">Close</button>\n                    </div>\n\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!-- Model 2 -->\n\n\n<div class=\"modal fade\" id=\"newNote\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <form>\n                <div class=\"p-2 form-group\">\n                    <h5 class=\"my-3\">- New Notes -</h5>\n\n                    <input [(ngModel)]=\"formModuleData.newNoteForm.name\" name=\"newname\" type=\"text\" class=\"form-control\"\n                        placeholder=\"Title\" maxlength=\"50\">\n                    <hr>\n                    <textarea [(ngModel)]=\"formModuleData.newNoteForm.message\" name=\"newmessage\" class=\"form-control\"\n                        placeholder=\"Message\" maxlength=\"400\" rows=\"5\"></textarea>\n                    <br>\n                    \n                    <div class=\"float-right p-2\" >\n                        <button data-dismiss=\"modal\" type=\"button\" (click)=\"new() \"\n                            class=\"btn btn-outline-primary btn-sm mx-2\">Save</button>\n                        <button data-dismiss=\"modal\" type=\"button\" \n                            class=\"btn btn-outline-danger btn-sm\">Close</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- Model 2 -->\n\n\n<div class=\"modal fade\" id=\"deleteNote\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"staticBackdropLabel\">Delete Note</h5>\n                \n            </div>\n            <div class=\"modal-body\">\n                Are you sure you want to delete this note?\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" >Close</button>\n                <button (click)=\"delete()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" >Yes</button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile/profile.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile/profile.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-12 col-xl-12\">\n                <div class=\"page-header\">\n\n\n                    <h2 style=\"font-family: 'Bai Jamjuree', sans-serif;\">\n\n                        {{userName}}\n                        <button *ngIf=\"userName === userData?.userName\" class=\"btn btn-round float-right\"\n                            (click)=\"settings()\">\n                            <i class=\"material-icons\">settings</i>\n                        </button>\n                        <button (click)=\"friendAction()\" *ngIf=\"userName !== userData?.userName\"\n                            class=\"btn btn-outline-primary btn-sm float-right\">\n                            {{isFollowing? 'Unfollow': '+ Follow'}}\n                        </button>\n                    </h2>\n                    <p class=\"lead\">{{friendData?.bio}}</p>\n\n\n                    <ul class=\"nav nav-tabs nav-fill\" role=\"tablist\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#Overview\" role=\"tab\"\n                                aria-controls=\"projects\" aria-selected=\"true\">Overview</a>\n                        </li>\n\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Followers\" role=\"tab\" aria-controls=\"members\"\n                                aria-selected=\"false\">\n                                Followers\n                                <span class=\"badge badge-secondary ml-1\"\n                                    style=\"background-color: #F1F1F1; color: #575F69; font-weight: bold;\">\n                                    {{followers.length}}\n                                </span>\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Following\" role=\"tab\" aria-controls=\"members\"\n                                aria-selected=\"false\">\n                                Following\n                                <span class=\"badge badge-secondary ml-1\"\n                                    style=\"background-color: #F1F1F1; color: #575F69; font-weight: bold;\">\n                                    {{following.length}}\n                                </span>\n                            </a>\n                        </li>\n                    </ul>\n\n                    <div class=\"tab-content\">\n\n                        <div class=\"tab-pane fade show active\" id=\"Overview\" role=\"tabpanel\"\n                            data-filter-list=\"content-list-body\">\n\n                            <div class=\"row\">\n                                <div *ngFor=\"let project of projects\" class=\"col-sm-12 col-lg-6\">\n                                    <div class=\"card card-project\">\n\n                                        <div class=\"card-body\">\n\n                                            <div class=\"card-title\">\n                                                <a  [routerLink]=\"'/project/'+project.name\" >\n                                                    <h5>{{project.name}}</h5>\n                                                </a>\n                                            </div>\n                                            <hr>\n                                            <app-avatar-list (click)=\"showMembers(project.members)\" [images]='avatars' data-toggle=\"modal\"\n                                                data-target='#projectMembers'>\n                                            </app-avatar-list>\n\n                                            <p>{{project.discription}}</p>\n                                            <div class=\"card-meta d-flex justify-content-between\">\n                                                <div class=\"d-flex align-items-center\">\n                                                    <i class=\"material-icons mr-1\">playlist_add_check</i>\n                                                    <span class=\"text-small\">-/-</span>\n                                                </div>\n                                                <span class=\"text-small\">{{project.timeStamp | date}}</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div *ngIf=\"projects.length === 0\" style=\"text-align: center; margin-top: 50px;\">\n                                    <img style=\"width: 60%\" src=\"../../../assets/images/noProject.svg\" alt=\"..\">\n                                </div>\n                            </div>\n\n\n                            <!--end of task-->\n\n                        </div>\n                        <!--end of tab-->\n\n\n                        <div class=\"tab-pane fade\" id=\"Followers\" role=\"tabpanel\" data-filter-list=\"content-list-body\">\n                            <div class=\"content-list \">\n                                <app-users-list-big [title]='\"Followers\"' [members]=\"followers.list\">\n                                </app-users-list-big>\n                                <div *ngIf=\"followers.length === 0\" style=\"text-align: center; margin-top: 80px;\">\n                                    <img style=\"width: 400px\" src=\"../../../assets/images/adduser.svg\" alt=\"...\">\n                                </div>\n                            </div>\n\n                        </div>\n\n\n                        <div class=\"tab-pane fade\" id=\"Following\" role=\"tabpanel\" data-filter-list=\"content-list-body\">\n                            <div class=\"content-list \">\n                                <app-users-list-big [title]='\"Following\"' [members]=\"following.list\">\n                                </app-users-list-big>\n                                <div *ngIf=\"following.length === 0\" style=\"text-align: center; margin-top: 80px;\">\n                                    <img style=\"width: 400px;\" src=\"../../../assets/images/adduser.svg\" alt=\"...\">\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade \" id=\"projectMembers\" tabindex=\"-1\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-body\">\n                <app-users-list-big [members]='modelMembers'></app-users-list-big>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/directory/dir.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/directory/dir.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-2 \">\n\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li *ngFor=\"let dir of dirStructure; let index = index\" class=\"breadcrumb-item \" (click)=\"dirJump(index)\">\n                <span\n                    style=\"font-weight: light; font-size: 13px; cursor: pointer; color: rgb(100, 100, 230) ;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\">\n                    {{(dir.fileType === 'dir')? dir.name: (dir.name + dir.fileType)}}\n                </span>\n            </li>\n        </ol>\n    </nav>\n\n    <hr class=\"p-0 my-2\">\n\n    <div class=\"pb-2\">\n        <button *ngIf=\"this.dirStructure.length >1 || !freeze\" (click)=\"backDir()\" class=\"btn btn-outline-light btn-sm mx-2\">\n            <svg style=\"margin-bottom: 4px;\" class=\"bi bi-arrow-left-short\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\"\n                fill=\"black\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\"\n                    d=\"M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z\"\n                    clip-rule=\"evenodd\" />\n                <path fill-rule=\"evenodd\" d=\"M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z\"\n                    clip-rule=\"evenodd\" />\n            </svg>\n        </button>\n        <span *ngIf=\"openedDir?.fileType === 'dir'\">\n\n            <button [disabled]=\"freeze\" style=\"font-size: 13px; color: black;\" type=\"button\" class=\"btn btn-outline-light btn-sm \" \n                data-toggle=\"modal\" data-target=\"#createFile\">\n                <svg style=\"margin-bottom: 3px; margin-right: 4px;\" class=\"bi bi-file-code \" width=\"1.3em\"\n                    height=\"1.3em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\"\n                        d=\"M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z\"\n                        clip-rule=\"evenodd\" />\n                    <path fill-rule=\"evenodd\"\n                        d=\"M8.646 5.646a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L10.293 8 8.646 6.354a.5.5 0 010-.708zm-1.292 0a.5.5 0 00-.708 0l-2 2a.5.5 0 000 .708l2 2a.5.5 0 00.708-.708L5.707 8l1.647-1.646a.5.5 0 000-.708z\"\n                        clip-rule=\"evenodd\" />\n                </svg>\n                New File\n            </button>\n            <button [disabled]=\"freeze\" data-toggle=\"modal\" data-target=\"#newDir\" style=\"font-size: 13px; color: black;\" type=\"button\"\n                class=\"btn btn-outline-light btn-sm mx-2 \" >\n                <svg style=\"margin-bottom: 3px; margin-right: 4px;\" class=\"bi bi-folder-plus\" width=\"1.3em\"\n                    height=\"1.3em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\"\n                        d=\"M9.828 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91H9v1H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3h3.982a2 2 0 011.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0013.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 011-.98h3.672a1 1 0 01.707.293z\"\n                        clip-rule=\"evenodd\" />\n                    <path fill-rule=\"evenodd\"\n                        d=\"M13.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13v-1.5a.5.5 0 01.5-.5z\"\n                        clip-rule=\"evenodd\" />\n                    <path fill-rule=\"evenodd\" d=\"M13 12.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z\"\n                        clip-rule=\"evenodd\" />\n                </svg>\n                New directory\n            </button>\n            <button style=\"font-size: 12.5px; color: black;\" type=\"button\"\n                class=\"btn btn-outline-light btn-sm float-lg-right d-none d-lg-block \" [disabled]=\"freeze\"  >+ README</button>\n            <button style=\"font-size: 12.5px; color: black;\" type=\"button\"\n                class=\"btn btn-outline-light btn-sm mx-2 float-lg-right d-none d-lg-block\" data-toggle=\"modal\"\n                data-target=\"#findFile\">\n                <svg class=\"bi bi-search\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\"\n                    xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\"\n                        d=\"M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z\"\n                        clip-rule=\"evenodd\" />\n                    <path fill-rule=\"evenodd\"\n                        d=\"M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z\"\n                        clip-rule=\"evenodd\" />\n                </svg>\n                Search File\n            </button>\n\n\n        </span>\n\n\n    </div>\n\n    <ul *ngIf=\"!openedDir?.code\" class=\"list-group my-2  dir-list\" style=\"width: 100%\">\n\n        <li class=\"list-group-item headd\">\n\n            <b>Name</b>\n            <b class=\"float-right\">Last Update</b>\n\n        </li>\n\n\n        <img class=\"p-3\" *ngIf=\"openedDir?.child.length === 0 \" height=\"300px\"\n            src=\"../../../../assets/images/directoryEmpty.svg\" alt=\"\">\n\n        <li (click)=\"dirClick(i)\" *ngFor=\"let file of openedDir?.child; let i = index\" class=\"list-group-item \"\n            style=\"cursor: pointer;\">\n\n            <svg *ngIf=\"file.fileType !== 'dir'\" style=\"margin-bottom: 3px; margin-right: 3px;\" class=\"bi bi-file-code \"\n                width=\"1.3em\" height=\"1.3em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\"\n                    d=\"M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z\"\n                    clip-rule=\"evenodd\" />\n                <path fill-rule=\"evenodd\"\n                    d=\"M8.646 5.646a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L10.293 8 8.646 6.354a.5.5 0 010-.708zm-1.292 0a.5.5 0 00-.708 0l-2 2a.5.5 0 000 .708l2 2a.5.5 0 00.708-.708L5.707 8l1.647-1.646a.5.5 0 000-.708z\"\n                    clip-rule=\"evenodd\" />\n            </svg>\n\n            <svg *ngIf=\"file.fileType === 'dir'\" style=\"margin-bottom: 3px; margin-right: 3px;\" class=\"bi bi-folder\"\n                width=\"1.3em\" height=\"1.3em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M9.828 4a3 3 0 01-2.12-.879l-.83-.828A1 1 0 006.173 2H2.5a1 1 0 00-1 .981L1.546 4h-1L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3v1z\" />\n                <path fill-rule=\"evenodd\"\n                    d=\"M13.81 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0013.81 4zM2.19 3A2 2 0 00.198 5.181l.637 7A2 2 0 002.826 14h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0013.81 3H2.19z\"\n                    clip-rule=\"evenodd\" />\n            </svg>\n\n            <span class=\"file-name\">\n                {{ (file.fileType !== 'dir')? file.name + file.fileType : file.name+''}}\n            </span>\n\n        </li>\n    </ul>\n\n    <button *ngIf=\"openedDir?.fileType !== 'dir'\" (click)=\"copyCode($event)\" style=\"font-size: 12.5px;  position:sticky; top: 10px;\"\n        type=\"button\" class=\"btn btn-outline-dark btn-sm mx-2 float-lg-right \">\n        Copy Code\n    </button>\n    <pre id=\"foo\" *ngIf=\"openedDir?.fileType !== 'dir'\" class=\"code p-1 py-3\" >\n    <span *ngFor=\"let line of openedDir?.code\" class=\"tr first-row\"><span class=\"th p-0\"></span><code>{{line}}</code></span>\n    </pre>\n\n    <div *ngIf=\"dirStructure.length === 1\" class=\"alert alert-primary card\" role=\"alert\">\n        <span class=\"py-2\">\n            Help people interested in this repository understand your project by adding a README.\n        </span>\n\n        <span>\n            <button type=\"button\" class=\"btn btn-primary btn-sm\" [disabled]=\"freeze\">+ READ ME</button>\n        </span>\n    </div>\n\n    <app-create-file-model (createFile)=\"createDir($event)\">\n    </app-create-file-model>\n\n\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"newDir\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalScrollableTitle\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n            <div class=\"modal-content\">\n\n                <div class=\"modal-body\">\n                    <input class=\"form-control\" [(ngModel)]=\"newDirName\" name=\"dirName\" type=\"text\" maxlength=\"20\"\n                        minlength=\"1\" placeholder=\"Folder Name\">\n                </div>\n\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                    <button (click)=\"createDir({fileName: newDirName, fileType: 'dir', codeText: ''})\" type=\"button\"\n                        class=\"btn btn-primary\" data-dismiss=\"modal\">Create Folder</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<!-- /get/find/:name/:searchText -->\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"findFile\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content container m-2\">\n\n            <div class=\"input-group input-group-round mt-1\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                        <i class=\"material-icons\">filter_list</i>\n                    </span>\n                </div>\n                <input name=\"search3\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\"\n                    (ngModelChange)=\"searchUsers($event)\" autocomplete=\"off\" placeholder=\"Search \">\n            </div>\n\n\n            <div class=\"container\">\n                <div style=\"margin: 15px 0 0 5px; font-size: 13px;\">Search</div>\n                <div class=\"form-group-users\">\n\n                    <ul class=\"list-group my-2  dir-list\" style=\"width: 100%\">\n\n                        <li class=\"list-group-item headd\">\n\n                            <b>Name</b>\n\n                        </li>\n\n\n                        <img class=\"p-3\" *ngIf=\"searchDirStructure.length === 0 \" height=\"300px\"\n                            src=\"../../../../assets/images/directoryEmpty.svg\" alt=\"\">\n\n                        <li (click)=\"dirClick(i, true)\" *ngFor=\"let file of searchDirStructure; let i = index\"\n                            class=\"list-group-item \" style=\"cursor: pointer;\" data-dismiss=\"modal\">\n\n                            <svg *ngIf=\"file.fileType !== 'dir'\" style=\"margin-bottom: 3px; margin-right: 3px;\"\n                                class=\"bi bi-file-code \" width=\"1.3em\" height=\"1.3em\" viewBox=\"0 0 16 16\"\n                                fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path fill-rule=\"evenodd\"\n                                    d=\"M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z\"\n                                    clip-rule=\"evenodd\" />\n                                <path fill-rule=\"evenodd\"\n                                    d=\"M8.646 5.646a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L10.293 8 8.646 6.354a.5.5 0 010-.708zm-1.292 0a.5.5 0 00-.708 0l-2 2a.5.5 0 000 .708l2 2a.5.5 0 00.708-.708L5.707 8l1.647-1.646a.5.5 0 000-.708z\"\n                                    clip-rule=\"evenodd\" />\n                            </svg>\n\n                            <svg *ngIf=\"file.fileType === 'dir'\" style=\"margin-bottom: 3px; margin-right: 3px;\"\n                                class=\"bi bi-folder\" width=\"1.3em\" height=\"1.3em\" viewBox=\"0 0 16 16\"\n                                fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path\n                                    d=\"M9.828 4a3 3 0 01-2.12-.879l-.83-.828A1 1 0 006.173 2H2.5a1 1 0 00-1 .981L1.546 4h-1L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3v1z\" />\n                                <path fill-rule=\"evenodd\"\n                                    d=\"M13.81 4H2.19a1 1 0 00-.996 1.09l.637 7a1 1 0 00.995.91h10.348a1 1 0 00.995-.91l.637-7A1 1 0 0013.81 4zM2.19 3A2 2 0 00.198 5.181l.637 7A2 2 0 002.826 14h10.348a2 2 0 001.991-1.819l.637-7A2 2 0 0013.81 3H2.19z\"\n                                    clip-rule=\"evenodd\" />\n                            </svg>\n\n                            <span class=\"file-name\">\n                                {{ (file.fileType !== 'dir')? file.name + file.fileType : file.name+''}}\n                            </span>\n\n                        </li>\n                    </ul>\n\n                </div>\n            </div>\n\n            <div class=\"my-2\">\n                <button type=\"button\" style=\"width: 90px; font-size: 11.5px; padding: 2px;\"\n                    class=\"btn btn-outline-danger float-right\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/logs/logs.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/logs/logs.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol style=\"max-height: 40vh; overflow: scroll;\"  class=\"list-group list-group-activity\">\n    <li class=\"list-group-item\" *ngFor=\"let log of logs\">\n        <div class=\"media align-items-center\">\n            <ul class=\"avatars\">\n                <li>\n                    <div class=\"avatar bg-primary\">\n                        <i class=\"material-icons\">\n                            {{ materialIcons[log.type] }}\n                        </i>\n                    </div>\n                </li>\n                <!-- <li>\n                    <img alt=\"...\" src=\"...\" class=\"avatar\" />\n                </li> -->\n            </ul>\n            <div class=\"media-body\">\n                <div>\n                    {{log?.message}}\n                </div>\n                <span class=\"text-small\">{{log?.timeStamp | timeAgo}}</span>\n            </div>\n        </div>\n    </li>\n</ol>\n<div style=\"text-align: center;\" *ngIf=\"logs.length === 0\" >\n    <img style=\"width: 80%; height: 80%;\" src=\"../../../../assets/images/noNotification.svg\" alt=\"\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/models/createFile/createFile.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/models/createFile/createFile.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\n<div class=\"modal fade\" id=\"createFile\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">New File</h5>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"form-group\">\n\n          <label for=\"dirName\">File Name</label>\n          <input [(ngModel)]=\"formData.fileName\" name=\"dirNma\" type=\"text\" class=\"form-control\" id=\"dirName\"\n            placeholder=\"File\" required maxlength=\"20\" minlength=\"1\">\n\n\n\n          <label for=\"fileExt\">Example select</label>\n          <select [(ngModel)]=\"formData.fileType\" name=\"FileExtt\" class=\"form-control\" id=\"fileExt\">\n            <option *ngFor=\"let ext of fileExt\" [value]=\"ext\">{{ext}}</option>\n          </select>\n\n\n\n\n          <label for=\"fileContent\">File Content</label>\n          <textarea [(ngModel)]=\"formData.codeText\" name=\"codeText\" class=\"form-control\" id=\"fileContent\"\n            rows=\"5\" maxlength=\"200000\"></textarea>\n\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"newFile()\" data-dismiss=\"modal\">Create File</button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/models/notesAction/notesAction.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/models/notesAction/notesAction.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"editNoteModel\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <form>\n                <div class=\"p-2 form-group\">\n                    <h5 class=\"my-3\">- Edit Notes -</h5>\n                    <br>\n\n                    <h6>Group Name:</h6>\n                    <input [(ngModel)]=\"group\" name=\"editgroup\" type=\"text\" class=\"form-control\"\n                        placeholder=\"Group Name\" required minlength=\"1\" maxlength=\"30\">\n\n                    <div style=\"overflow: scroll; margin-top: 7px;\">\n                        <span class=\"inline m-1\" style=\"font-size: 12px;\"> Recommended: </span>\n                        <span *ngFor=\"let groupName of groups\" (click)=\"groupTagClick(groupName)\"\n                            class=\"badge badge-light inline p-1 m-1\" [ngClass]=\"{'badge-dark': groupName === group}\"\n                            style=\"cursor: pointer; font-size: 11.5px;\">{{'+  ' +groupName }}</span>\n                    </div>\n\n                    <br>\n                    <h6>Title:</h6>\n                    <input [(ngModel)]=\"name\" name=\"editname\" type=\"text\" class=\"form-control\" placeholder=\"Title\"\n                        required minlength=\"1\" maxlength=\"30\">\n                    <hr>\n\n                    <h6>Message:</h6>\n                    <textarea [(ngModel)]=\"message\" name=\"editmessage\" class=\"form-control\" placeholder=\"Message\"\n                        required minlength=\"1\" maxlength=\"100\" rows=\"3\"></textarea>\n                    <br>\n                    <div>\n                        <span>\n                            Mark as done:\n                            <input [(ngModel)]=\"crossOff\" name=\"isCrossOff\" type=\"checkbox\">\n                        </span>\n                    </div>\n                    <hr>\n\n\n                    <div class=\"float-right p-2\">\n                        <button type=\"button\" (click)=\"edit() \" class=\"btn btn-outline-primary btn-sm mx-2\"\n                            data-dismiss=\"modal\">Save Changes</button>\n                        <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" data-dismiss=\"modal\">Close</button>\n                    </div>\n\n\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"deleteNote\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            \n            <div class=\"modal-header\" style=\"background-color: red;\" >\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete Note</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n                Are you sure you want to delete this note?\n            </div>\n            <div class=\"modal-footer\">\n                <button (click)=\"delete()\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"deleteMemberJobDone\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            \n            <div class=\"modal-header\" style=\"background-color: red;\" >\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete Job done claim</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n\n            <div class=\"modal-body\">\n                Are you sure you want to delete this job done claim\n            </div>\n            <div class=\"modal-footer\">\n                <button (click)=\"deleteJobDone()\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" aria-label=\"Close\">Delete</button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/project.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/project.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container \" >\n    <div class=\"row justify-content-center\">\n        \n        <div *ngIf=\"!!userInProject\" class=\"col-12\" style=\"text-align: end;\" >\n            <select  style=\"max-width: 150px;\" [(ngModel)]=\"userInProject?.status.value\" (ngModelChange)=\"OnstatusChanged()\" class=\"custom-select\" id=\"inputGroupSelect02\">\n                <option *ngFor=\"let status of [ 'Break', 'Working','Do Not Disturb']\">{{status}}</option>\n            </select>\n        </div>\n\n        <div class=\"col-lg-12 col-xl-12\">\n\n            <div class=\"page-header\">\n                <h2 style=\"font-family: 'Bai Jamjuree', sans-serif;\">\n\n                    {{projectName}}\n                    <button *ngIf=\"!!userInProject\" class=\"btn btn-round float-right\" (click)=\"settings()\">\n                        <i class=\"material-icons\">settings</i>\n                    </button>\n                </h2>\n                <p class=\"lead\">{{projectData?.discription}}</p>\n\n            </div>\n            <div class=\"container\">\n                <div class=\"row\" style=\"background-color: black; border-radius: 5px; \">\n                    <div class=\"col-4 infoCard\">\n                        <p>PROJECTS</p>\n                        <h1>13</h1>\n                    </div>\n                    <div class=\"col-4 infoCard\">\n                        <p>PERSONAL NOTES</p>\n                        <h1>10</h1>\n                    </div>\n                    <div class=\"col-4 infoCard\">\n                        <p>PENDING NOTES</p>\n                        <h1>07</h1>\n                    </div>\n                </div>\n\n            </div>\n\n            <hr>\n\n            <ul class=\"nav nav-tabs nav-fill\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\"  data-toggle=\"tab\" href=\"#tasks\" role=\"tab\" aria-controls=\"projects\"\n                        aria-selected=\"true\">Project</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [ngClass]=\"{'disabled': !!!userInProject}\" data-toggle=\"tab\" href=\"#directory\" role=\"tab\" aria-controls=\"members\"\n                        aria-selected=\"false\">Tasks</a>\n                </li>\n                <li [ngClass]=\"{'disabled': !!!userInProject}\" class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#Logs\" role=\"tab\" aria-controls=\"members\"\n                        aria-selected=\"false\">Logs</a>\n                </li>\n            </ul>\n\n\n            <div class=\"tab-content \">\n                <div class=\"tab-pane fade show active card\" id=\"tasks\" role=\"tabpanel\">\n\n                    <app-project-dir [freeze]=\"!!!userInProject \" [projectData]=\"projectData\"></app-project-dir>\n\n                </div>\n                <!--end of tab-->\n\n\n                <div *ngIf=\"!!userInProject\" class=\"tab-pane fade\" id=\"directory\" role=\"tabpanel\">\n\n                    <app-tasks [projectData]=\"projectData\" [userName]=\"userData.userName\" [role]=\"userInProject?.permission\"></app-tasks>\n\n                </div>\n\n                <div *ngIf=\"!!userInProject\" class=\"tab-pane fade\" id=\"Logs\" role=\"tabpanel\">\n\n                    <app-logs *ngIf=\"projectName !== ''\" [projectName]='projectName'></app-logs>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/settings/settings.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/settings/settings.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!!userInProject\" class=\"container\" style=\"margin-top: 30px;\">\n    <h1 style=\"padding: 40px 0;\">\n        {{projectName}} Settings\n\n        <img style=\"float: right; cursor: pointer;\" class=\"avatar avatar-lg \" [src]=\"userImages[userInProject.avatar]\" alt=\"\"\n            id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\n        <div  class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <img *ngFor=\"let img of userImages; let index = index\" class=\"avatar\" style=\"cursor: pointer; \" (click)=\"changeAvatar(index)\" onMouseOver=\"this.style.transform='scale(1.2)'\" onMouseOut = \"this.style.transform='scale(1)'\" [src]=\"img\" alt=\"..\">\n           \n        </div>\n    </h1>\n\n    <div class=\"card p-3\">\n\n        <h3 class=\"pt-2\">Edit</h3>\n\n        <div class=\"form-group row\">\n            <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Project Name</label>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"{{projectName}}\" disabled>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"inputEmail33\" class=\"col-sm-2 col-form-label\">Discription</label>\n            <div class=\"col-sm-10\">\n                <textarea [(ngModel)]=\"formsData.discription\" type=\"text\" class=\"form-control\" name=\"disc\"\n                    id=\"inputEmail33\" placeholder=\"Discription\" rows=\"3\" [disabled]=\"role === 'Developer'\"> </textarea>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <label for=\"duedate\" class=\"col-sm-2 col-form-label\">Due Date</label>\n            <div class=\"col-sm-10\">\n                <span>\n                    {{project?.endingDate | date}}\n                </span>\n                <input [(ngModel)]=\"formsData.endingDate\" class=\"form-control\" id=\"duedate\" type=\"date\" name=\"dueDate\"\n                    [disabled]=\"role === 'Developer'\">\n            </div>\n        </div>\n    </div>\n\n    <div class=\"card p-3\">\n        <h3>Danger Zone</h3>\n        <br>\n        <fieldset class=\"form-group\">\n            <div class=\"row\">\n                <legend class=\"col-form-label col-sm-2 pt-0\"><strong>Private</strong></legend>\n                <div class=\"col-sm-10\">\n                    <div class=\"form-check\">\n                        <input [(ngModel)]=\"formsData.private\" class=\"form-check-input\" type=\"checkbox\"\n                            name=\"gridRadios\" id=\"gridRadios1\" [disabled]=\"role === 'Developer'\">\n                        <label class=\"form-check-label\" for=\"gridRadios1\">\n                            Hide this repository from the public.\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </fieldset>\n\n        <br>\n\n        <div class=\"form-group row\">\n            <div class=\"col-sm-2\"><strong>Freeze</strong></div>\n            <div class=\"col-sm-10\">\n                <div class=\"form-check\">\n                    <input [(ngModel)]=\"formsData.isFreeze\" name=\"isFreeze\" class=\"form-check-input\" type=\"checkbox\"\n                        id=\"gridCheck1\" [disabled]=\"['Developer','Admin'].includes(role)\">\n                    <label class=\"form-check-label\" for=\"gridCheck1\">\n                        This option will not allow any operations on your project until it is unfreezed.\n                    </label>\n                </div>\n            </div>\n        </div>\n\n        <br>\n\n        <div class=\"form-group row\">\n            <div class=\"col-sm-2\"><strong>Quit Project</strong></div>\n            <div class=\"col-sm-10\">\n                <button (click)=\"quit()\" type=\"submit\" class=\"btn btn-sm btn-danger mt-2\" [disabled]=\"role === 'Owner'\">Quit This\n                    project</button>\n            </div>\n        </div>\n\n    </div>\n\n\n    <div class=\"form-group row\">\n        <div class=\"col-sm-10\" style=\"text-align: center;\">\n            <button class=\"btn btn-danger px-4\" (click)=\"reset()\">Reset</button>\n            <button (click)=\"save()\" class=\"btn btn-primary m-3 px-4\" [disabled]=\"role === 'Developer'\">Save</button>\n        </div>\n    </div>\n\n\n    <hr>\n\n    <div class=\"card p-3\">\n        <h3>Members</h3>\n        <div class=\"form-group row\">\n\n            <div class=\"col-sm-10 \">\n\n                <div class=\"form-group-users\" style=\"overflow: visible; max-height: 300px; overflow: scroll;\">\n\n                    <button type=\"button\" class=\"btn btn-primary btn-sm mb-3\" data-toggle=\"modal\"\n                        data-target=\"#addmembers\" [disabled]=\"role === 'Developer'\">\n                        + Add Member\n                    </button>\n\n\n                    <div class=\"my-3\" *ngFor=\"let item of project?.members; let index = index\">\n\n                        <span class=\"p-2 mr-3\">{{index+1}}</span>\n                        <img alt=\"Claire Connors\" [src]=\"userImages[item.avatar]\" class=\"avatar mr-2 ml-1\"\n                            style=\"transform: scale(1.2); \" />\n                        <span class=\"h6 mb-0 mx-1\"> {{item.name}} </span>\n\n                        <span class=\"badge badge-pill \"\n                            [ngClass]=\"{'badge-dark': item.permission ==='Owner', 'badge-warning': item.permission ==='Admin', 'badge-secondary': item.permission ==='Developer'}\">{{item.permission}}</span>\n\n                        <div class=\"btn-group mx-5\">\n                            <button type=\"button\" class=\"btn btn-sm btn-primary btn-sm dropdown-toggle px-3\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                [disabled]=\"item.permission=== 'Owner' || ['Developer', 'Admin'].includes(role)\"\n                                style=\"width: 150px;\">\n                                {{item.permission}}\n                            </button>\n                            <div class=\"dropdown-menu\">\n                                <a class=\"dropdown-item\" (click)=\"changePermission('Admin', index)\">Admin</a>\n                                <a class=\"dropdown-item\" (click)=\"changePermission('Developer' ,index) \">Developer</a>\n                            </div>\n                        </div>\n\n                        <button (click)=\"deleteUser(item)\" type=\"button\" class=\"btn btn-danger btn-sm my-auto\"\n                            [disabled]=\" role === 'Developer' || item.permission=== 'Owner'\">\n                            Delete\n                        </button>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <button class=\"btn btn-danger\" [disabled]=\"['Admin', 'Developer'].includes(role)\" (click)=\"delete()\">Delete\n        Project</button>\n\n\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"addmembers\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Members</h5>\n            </div>\n            <div class=\"modal-body\">\n                <app-select-users [blockedMembers]=\"membersName\" (onMemberAdded)=\"onMemberAdded($event)\">\n                </app-select-users>\n\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger btn-sm\" data-dismiss=\"modal\">Close</button>\n                <button (click)=\"addNewMembers()\" type=\"button\" class=\"btn  btn-primary\" data-dismiss=\"modal\">Save\n                    changes</button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/tasks/tasks.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/tasks/tasks.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"my-2\">\n    <h3 style=\"display: inline;\">New Task</h3>\n    <button *ngIf=\"['Owner', 'Admin'].includes(role)\" class=\"btn btn-round mb-1\" style=\"display: inline;\"\n        (click)=\"addClick()\" data-toggle=\"modal\" data-target=\"#editNoteModel\">\n        <i class=\"material-icons\">add</i>\n    </button>\n</div>\n\n\n\n<div *ngFor=\"let group of groups; let index = index\" class=\"card-list\" style=\"background-color: rgb(198, 164, 247);\">\n    <div class=\"card-list-head\">\n        <h6 style=\"color: white;\">{{group}}</h6>\n    </div>\n\n    <div class=\"row\">\n        <div *ngFor=\"let note of notes[index]; let index2 = index\" class=\"col-lg-6 my-2 \">\n            <div class=\"card card-note bg-light\">\n                <div class=\"card-header\">\n\n                    <div class=\"media align-items-center\">\n                        <img alt=\"..\" src=\"https://pipeline.mediumra.re/assets/img/avatar-female-2.jpg\"\n                            class=\"avatar\" />\n                        <div class=\"media-body\" [ngClass]=\"note.crossOff && 'crossOff'\">\n                            <h6 class=\"mb-0\"> {{note.name}} </h6>\n                        </div>\n                    </div>\n\n                    <div class=\"d-flex align-items-center\">\n\n                        <div class=\"ml-1 dropdown card-options\">\n                            <button class=\"btn-options\" type=\"button\" id=\"...\" data-toggle=\"dropdown\"\n                                aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <i class=\"material-icons\">more_vert</i>\n                            </button>\n                            <div class=\"dropdown-menu dropdown-menu-right\">\n\n                                <button *ngIf=\"role === 'Developer'\" class=\"dropdown-item\"\n                                    (click)=\"requestDonetask(index, index2)\">\n                                    {{ (note.request.indexOf(userName) >= 0)? 'Remove Job done': 'Job Done' }} </button>\n\n                                <div *ngIf=\"['Owner', 'Admin'].includes(role)\">\n\n                                    <button class=\"dropdown-item\"\n                                        (click)=\"crossOff(index, index2)\">{{ (note.crossOff)?'Recover': 'Mark as done'}}</button>\n\n                                    <button class=\"dropdown-item\" (click)=\"setFocus(index, index2)\" data-toggle=\"modal\"\n                                        data-target=\"#editNoteModel\">Edit</button>\n                                    <button class=\"dropdown-item text-danger\" data-toggle=\"modal\"\n                                        data-target=\"#deleteNote\" (click)=\"setFocus(index,index2)\">Delete</button>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <pre class=\"card-body mb-0 pb-1\" [ngClass]=\"note.crossOff && 'crossOff'\">{{note.message}}</pre>\n\n\n                <span class=\"mx-2 mb-2\" style=\"text-align: right; font-size: 14px;\">\n                    {{note.timeStamp | timeAgo}}\n                </span>\n\n            </div>\n\n            <div class=\"card py-2 px-1 \" style=\"background-color: black;\" *ngIf=\"note.request.length > 0\">\n                <div class=\"container \" style=\"overflow: scroll; \">\n                    <span style=\"font-size: 12.7px; font-weight: bold; color: white;\">Job done - </span>\n                    <a *ngFor=\"let user of note.request; let index3 = index\" class=\"badge badge-pill ml-1 px-2\"\n                        style=\"font-size: 14px; color: white; background-color: red;\">\n                        <p>\n                            <span (click)=\"setFocus(index, index2, index3)\" *ngIf=\"['Owner','Admin'].includes(role)\"\n                                class=\"mr-1\" style=\"font-size: 12px; cursor: pointer;\" data-toggle=\"modal\"\n                                data-target=\"#deleteMemberJobDone\">&#10005;</span>\n\n                            {{user}}\n                        </p>\n                    </a>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n\n<app-notes-action-model [name]='(groupIndexOnFocus > -1)? notes[groupIndexOnFocus][noteIndexOnFocus]?.name: \"\" '\n    [message]='(groupIndexOnFocus > -1)? notes[groupIndexOnFocus][noteIndexOnFocus]?.message: \"\"'\n    [group]='(groupIndexOnFocus > -1)? notes[groupIndexOnFocus][noteIndexOnFocus]?.group: \"\"'\n    [crossOff]='(groupIndexOnFocus > -1)? notes[groupIndexOnFocus][noteIndexOnFocus]?.crossOff: false' [groups]='groups'\n    (onEdit)=\"onEdit($event)\" (onDelete)=\"onDelete($event)\" (onDeleteJob)=\"onDeleteJob($event)\">\n</app-notes-action-model>\n\n<div *ngIf=\"groups.size === 0\" style=\"text-align: center;\">\n    <img style=\"width: 40%; height: 40%;\" src=\"../../../../assets/images/stickey.svg\" alt=\"\">\n    <div class=\"mt-4\">\n        <button class=\"btn btn-primary\" style=\"width: 50%;\" data-toggle=\"modal\" data-target=\"#editNoteModel\"> + Create\n            Task</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/avatarList/avatar.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/avatarList/avatar.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"avatars\">\n    \n    <li *ngFor=\"let item of images\" >\n        <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Claire Connors\">\n            <img alt=\"Claire Connors\" class=\"avatar\"\n                [src]=\"item\" />\n        </a>\n    </li>\n\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/chat/chat.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/chat/chat.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-primary btn-round btn-floating btn-lg\" type=\"button\" data-toggle=\"collapse\"\n    data-target=\"#floating-chat\" aria-expanded=\"false\">\n    <i class=\"material-icons\">chat_bubble</i>\n    <i class=\"material-icons\">close</i>\n</button>\n<div class=\"collapse sidebar-floating\" id=\"floating-chat\">\n    <div class=\"sidebar-content\">\n        <div class=\"chat-module\" data-filter-list=\"chat-module-body\">\n            <div class=\"chat-module-top\">\n                <form>\n                    <div class=\"input-group input-group-round\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                                <i class=\"material-icons\">search</i>\n                            </span>\n                        </div>\n                        <input type=\"search\" class=\"form-control filter-list-input\" placeholder=\"Search chat\"\n                            aria-label=\"Search Chat\">\n                    </div>\n                </form>\n                <div class=\"chat-module-body\">\n\n                    <div class=\"media chat-item\">\n                        <img alt=\"Claire\" src=\"https://pipeline.mediumra.re/assets/img/avatar-female-1.jpg\"\n                            class=\"avatar\" />\n                        <div class=\"media-body\">\n                            <div class=\"chat-item-title\">\n                                <span class=\"chat-item-author\" data-filter-by=\"text\">Claire</span>\n                                <span data-filter-by=\"text\">4 days ago</span>\n                            </div>\n                            <div class=\"chat-item-body\" data-filter-by=\"text\">\n                                <p>Hey guys, just kicking things off here in the chat window. Hope\n                                    you&#39;re all ready to tackle this great project. Let&#39;s smash some\n                                    Brand Concept &amp; Design!</p>\n\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"media chat-item\">\n                        <img alt=\"Peggy\" src=\"https://pipeline.mediumra.re/assets/img/avatar-female-2.jpg\"\n                            class=\"avatar\" />\n                        <div class=\"media-body\">\n                            <div class=\"chat-item-title\">\n                                <span class=\"chat-item-author\" data-filter-by=\"text\">Peggy</span>\n                                <span data-filter-by=\"text\">4 days ago</span>\n                            </div>\n                            <div class=\"chat-item-body\" data-filter-by=\"text\">\n                                <p>Nice one <a href=\"#\">@Claire</a>, we&#39;ve got some killer ideas kicking\n                                    about already.\n                                    <img src=\"https://media.giphy.com/media/aTeHNLRLrwwwM/giphy.gif\" alt=\"alt text\"\n                                        title=\"Thinking\">\n                                </p>\n\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"media chat-item\">\n                        <img alt=\"Marcus\" src=\"https://pipeline.mediumra.re/assets/img/avatar-male-1.jpg\"\n                            class=\"avatar\" />\n                        <div class=\"media-body\">\n                            <div class=\"chat-item-title\">\n                                <span class=\"chat-item-author\" data-filter-by=\"text\">Marcus</span>\n                                <span data-filter-by=\"text\">3 days ago</span>\n                            </div>\n                            <div class=\"chat-item-body\" data-filter-by=\"text\">\n                                <p>Roger that boss! <a href=\"\">@Ravi</a> and I have already started\n                                    gathering some stuff for the mood boards, excited to start! &#x1f525;\n                                </p>\n\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"media chat-item\">\n                        <img alt=\"Ravi\" src=\"https://pipeline.mediumra.re/assets/img/avatar-male-3.jpg\"\n                            class=\"avatar\" />\n                        <div class=\"media-body\">\n                            <div class=\"chat-item-title\">\n                                <span class=\"chat-item-author\" data-filter-by=\"text\">Ravi</span>\n                                <span data-filter-by=\"text\">3 days ago</span>\n                            </div>\n                            <div class=\"chat-item-body\" data-filter-by=\"text\">\n                                <h1>&#x1f609;</h1>\n\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"media chat-item\">\n                        <img alt=\"Claire\" src=\"https://pipeline.mediumra.re/assets/img/avatar-female-1.jpg\"\n                            class=\"avatar\" />\n                        <div class=\"media-body\">\n                            <div class=\"chat-item-title\">\n                                <span class=\"chat-item-author\" data-filter-by=\"text\">Claire</span>\n                                <span data-filter-by=\"text\">2 days ago</span>\n                            </div>\n                            <div class=\"chat-item-body\" data-filter-by=\"text\">\n                                <p>Can&#39;t wait! <a href=\"#\">@David</a> how are we coming along with the\n                                    <a href=\"#\">Client Objective Meeting</a>?</p>\n\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"media chat-item\">\n                        <img alt=\"David\" src=\"https://pipeline.mediumra.re/assets/img/avatar-male-4.jpg\"\n                            class=\"avatar\" />\n                        <div class=\"media-body\">\n                            <div class=\"chat-item-title\">\n                                <span class=\"chat-item-author\" data-filter-by=\"text\">David</span>\n                                <span data-filter-by=\"text\">Yesterday</span>\n                            </div>\n                            <div class=\"chat-item-body\" data-filter-by=\"text\">\n                                <p>Coming along nicely, we&#39;ve got a draft for the client questionnaire\n                                    completed, take a look! &#x1f913;</p>\n\n                            </div>\n\n                            <div class=\"media media-attachment\">\n                                <div class=\"avatar bg-primary\">\n                                    <i class=\"material-icons\">insert_drive_file</i>\n                                </div>\n                                <div class=\"media-body\">\n                                    <a href=\"#\" data-filter-by=\"text\">questionnaire-draft.doc</a>\n                                    <span data-filter-by=\"text\">24kb Document</span>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"media chat-item\">\n                        <img alt=\"Sally\" src=\"https://pipeline.mediumra.re/assets/img/avatar-female-3.jpg\"\n                            class=\"avatar\" />\n                        <div class=\"media-body\">\n                            <div class=\"chat-item-title\">\n                                <span class=\"chat-item-author\" data-filter-by=\"text\">Sally</span>\n                                <span data-filter-by=\"text\">2 hours ago</span>\n                            </div>\n                            <div class=\"chat-item-body\" data-filter-by=\"text\">\n                                <p>Great start guys, I&#39;ve added some notes to the task. We may need to\n                                    make some adjustments to the last couple of items - but no biggie!</p>\n\n                            </div>\n\n                        </div>\n                    </div>\n\n                    <div class=\"media chat-item\">\n                        <img alt=\"Peggy\" src=\"https://pipeline.mediumra.re/assets/img/avatar-female-2.jpg\"\n                            class=\"avatar\" />\n                        <div class=\"media-body\">\n                            <div class=\"chat-item-title\">\n                                <span class=\"chat-item-author\" data-filter-by=\"text\">Peggy</span>\n                                <span data-filter-by=\"text\">Just now</span>\n                            </div>\n                            <div class=\"chat-item-body\" data-filter-by=\"text\">\n                                <p>Well done <a href=\"#\">@all</a>. See you all at 2 for the kick-off\n                                    meeting. &#x1f91C;</p>\n\n                            </div>\n\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"chat-module-bottom\">\n                <form class=\"chat-form\">\n                    <textarea class=\"form-control\" placeholder=\"Type message\" rows=\"1\"></textarea>\n                    <div class=\"chat-form-buttons\">\n                        <button type=\"button\" class=\"btn btn-link\">\n                            <i class=\"material-icons\">tag_faces</i>\n                        </button>\n                        <div class=\"custom-file custom-file-naked\">\n                            <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">\n                            <label class=\"custom-file-label\" for=\"customFile\">\n                                <i class=\"material-icons\">attach_file</i>\n                            </label>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/checklist/checklist.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/checklist/checklist.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"checklist\">\n    <input id=\"01\" type=\"checkbox\" name=\"r\" value=\"1\" checked>\n    <label for=\"01\">Bread</label>\n    <input id=\"02\" type=\"checkbox\" name=\"r\" value=\"2\">\n    <label for=\"02\">Cheese</label>\n    <input id=\"03\" type=\"checkbox\" name=\"r\" value=\"3\">\n    <label for=\"03\">Coffee</label>\n  </div>\n  \n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/loading/loading.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/loading/loading.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"isVisible\" id=\"blur\" class=\"bapp\" ></div>\n<div *ngIf=\"isVisible\" class=\"bapp\">\n    <div style=\"border-radius: 10px;\" class=\"container\">\n        <div class=\"subcontainer\">\n          <div class=\"half\">\n            <div class=\"droplet\"></div>\n            <div class=\"splash\">\n              <div class=\"splash-container\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"half\">\n            <div class=\"droplet\"></div>\n            <div class=\"splash\">\n              <div class=\"splash-container\">\n                <div class=\"circle\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/model/newProject/newProject.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/model/newProject/newProject.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"modal fade\" id=\"project-add-modal\" tabindex=\"-1\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">New Project</h5>\n                <button type=\"button\" class=\"close btn btn-round\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                </button>\n            </div>\n            <!--end of modal head-->\n            <ul class=\"nav nav-tabs nav-fill\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" id=\"project-add-details-tab\" data-toggle=\"tab\"\n                        href=\"#project-add-details\" role=\"tab\" aria-controls=\"project-add-details\"\n                        aria-selected=\"true\">Details</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" id=\"project-add-members-tab\" data-toggle=\"tab\" href=\"#project-add-members\"\n                        role=\"tab\" aria-controls=\"project-add-members\" aria-selected=\"false\">Members</a>\n                </li>\n            </ul>\n            <div class=\"modal-body\">\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane fade show active\" id=\"project-add-details\" role=\"tabpanel\">\n\n                        <h6>General Details</h6>\n                        <div class=\"form-group row align-items-center\">\n                            <label class=\"col-3\">Name</label>\n                            <input [(ngModel)]=\"formData.name\" class=\"form-control col\" type=\"text\"\n                                placeholder=\"Project name\" name=\"project-name\" required />\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-3\">Description</label>\n                            <textarea [(ngModel)]=\"formData.description\" class=\"form-control col\" rows=\"3\"\n                                placeholder=\"Project description\" name=\"project-description\"></textarea>\n                        </div>\n\n                        <hr>\n                        <h6>Timeline</h6>\n                        \n                        <div class=\"form-group row align-items-center\">\n                            <label class=\"col-3\">Due Date</label>\n                            <input [(ngModel)]=\"formData.endingDate\" class=\"form-control col\" type=\"date\"\n                            name=\"project-start\" placeholder=\"Select a date\" required />\n                        </div>\n                        <div class=\"alert alert-warning text-small\" role=\"alert\">\n                            <span>You can change due dates at any time.</span>\n                        </div>\n                        <hr>\n                        <h5>Public\n                            <input [(ngModel)]=\"!formData.isPrivate\" type=\"checkbox\" name=\"isPrivate\" required/>\n                        </h5>\n                        <h5>Freeze\n                            <input [(ngModel)]=\"formData.isFreee\" type=\"checkbox\" name=\"isPrivate\" required/>\n                        </h5>\n\n                    </div>\n\n                    <!-- Members -->\n\n                    <div class=\"tab-pane fade\" id=\"project-add-members\" role=\"tabpanel\">\n                        <div class=\"users-manage\">\n\n                            <app-select-users (onMemberAdded)=\"onMemberAdded($event)\" ></app-select-users>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--end of modal body-->\n            <div class=\"modal-footer\">\n                <button (click)=\"createProject()\" role=\"button\" class=\"btn btn-primary\" type=\"submit\" data-dismiss=\"modal\">\n                    Create Project\n                </button>\n            </div>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/searchUsers/searchUsers.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/searchUsers/searchUsers.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-group input-group-round mt-1\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\">\n            <i class=\"material-icons\">filter_list</i>\n        </span>\n    </div>\n    <input name=\"search2\" type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\"\n        (ngModelChange)=\"searchUsers($event)\" autocomplete=\"off\" placeholder=\"Search \">\n</div>\n\n\n<div *ngIf=\"searchData?.length !==0\" class=\"container\">\n    <div style=\"margin: 15px 0 0 5px; font-size: 13px;\">Search</div>\n    <div class=\"form-group-users\">\n\n        <div class=\"my-2\" *ngFor=\"let item of searchData\">\n            <img alt=\"Claire Connors\" [src]=\"avatars[item.avatar]\" class=\"avatar mr-2\" />\n            <span class=\"h6 mb-0\"> {{item.userName}} </span>\n\n            <a (click)=\"buttonClicked(item)\" style=\"width: 90px; font-size: 11.5px; padding: 2px;\" role=\"button\"\n                class=\"btn btn-outline-primary float-right\" [routerLink]=\"['profile/'+item.userName]\" >{{buttonText}}</a>\n\n        </div>\n\n    </div>\n</div>\n\n<hr>\n\n<div style=\"margin: 15px 0 0 5px; font-size: 13px;\">People you might know</div>\n<div class=\"form-group-users\">\n\n    <div class=\"my-2\" *ngFor=\"let item of following\">\n        <img alt=\"Claire Connors\" [src]=\"avatars[item.avatar]\" class=\"avatar mr-2\" />\n        <span class=\"h6 mb-0\"> {{item?.userName}} </span>\n\n        <a style=\"width: 90px; font-size: 11.5px; padding: 2px;\" role=\"button\" [href]=\"'profile/'+item.userName\"\n            class=\"btn btn-outline-primary float-right\" >{{buttonText}}</a>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/selectUsers/selectUsers.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/selectUsers/selectUsers.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"users-manage\">\n\n    <div class=\"mb-3 dropright\">\n        <!-- Avatar List -->\n        <ul class=\"avatars text-center dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            <li>\n                <img *ngFor=\"let member of membersAdded\" alt=\"Claire Connors\" [src]=\"avatars[member.avatar]\"\n                    class=\"avatar\" data-toggle=\"tooltip\" data-title=\"Claire Connors\" />\n            </li>\n        </ul>\n        <div style=\"width: 250px\" class=\"dropdown-menu\">\n            <div class=\"my-2\" *ngFor=\"let item of membersAdded\">\n                <img alt=\"Claire Connors\" [src]=\"avatars[item.avatar]\" class=\"avatar mr-2\" />\n                <span class=\"h6 mb-0\"> {{item.userName}} </span>\n\n                <button (click)=\"toggleUser(item)\"\n                    style=\"width: 90px; font-size: 11.5px; padding: 2px; margin-top: 5px;\" role=\"button\"\n                    class=\"btn btn-outline-danger float-right\">Remove</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"input-group input-group-round\">\n        <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">\n                <i class=\"material-icons\">filter_list</i>\n            </span>\n        </div>\n        <input [(ngModel)]=\"searchText\" name=\"search\" type=\"text\" class=\"form-control\" autocomplete=\"off\"\n            placeholder=\"Search \" (ngModelChange)=\"searchUsers($event)\">\n\n    </div>\n\n\n    <div style=\"margin: 15px 0 0 5px; font-size: 13px;\">Search</div>\n    <div class=\"form-group-users\">\n\n        <div class=\"my-2\" *ngFor=\"let item of searchData\">\n            <img alt=\"Claire Connors\" [src]=\"avatars[item.avatar]\" class=\"avatar mr-2\" />\n            <span class=\"h6 mb-0\"> {{item.userName}} </span>\n\n            <button (click)=\"toggleUser(item)\"\n                [ngClass]=\" (membersName.has(item.userName))? 'btn btn-outline-danger float-right': 'btn btn-outline-primary float-right '  \"\n                [disabled]='blockedMembers?.has(item.userName)' style=\"width: 90px; font-size: 11.5px; padding: 2px;\"\n                role=\"button\">\n                {{ membersName.has(item.userName)? 'Remove': 'Add' }}\n            </button>\n\n        </div>\n\n    </div>\n\n    <hr>\n\n    <div style=\"margin: 15px 0 0 5px; font-size: 13px;\">People you might know</div>\n    <div class=\"form-group-users\">\n\n        <div class=\"my-2\" *ngFor=\"let item of following\">\n            <img alt=\"Claire Connors\" [src]=\"avatars[item.avatar]\" class=\"avatar mr-2\" />\n            <span class=\"h6 mb-0\"> {{item.userName}} </span>\n\n\n            <button (click)=\"toggleUser(item)\"\n                [ngClass]=\" (membersName.has(item.userName))? 'btn btn-outline-danger float-right': 'btn btn-outline-primary float-right'  \"\n                style=\"width: 90px; font-size: 11.5px; padding: 2px;\" role=\"button\"\n                [disabled]='blockedMembers?.has(item.userName)'>\n                {{ membersName.has(item.userName)? 'Remove': 'Add' }}\n            </button>\n        </div>\n\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/usersBigList/usersBigList.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/usersBigList/usersBigList.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row content-list-head\">\n    <div class=\"col-auto\">\n        <h3>{{title}}</h3>\n    </div>\n    <form class=\"col-md-auto\">\n        <div class=\"input-group input-group-round\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                    <i class=\"material-icons\">filter_list</i>\n                </span>\n            </div>\n            <input type=\"search\" class=\"form-control filter-list-input\" placeholder=\"Filter members\"\n                aria-label=\"Filter Members\">\n        </div>\n    </form>\n</div>\n<!--end of content list head-->\n\n<div class=\"content-list-body row\">\n\n    <div class=\"col-6\" *ngFor=\"let item of members\">\n        <a class=\"media media-member\" [routerLink]=\"['/profile/' + (item.name || item.userName)]\" data-dismiss=\"modal\">\n            <img alt=\"Claire Connors\" [src]=\"avatars[item.avatar]\"\n                class=\"avatar avatar-lg\" />\n            <div class=\"media-body\">\n                <h6 class=\"mb-0\" data-filter-by=\"text\">{{item.name || item.userName}} <strong *ngIf=\"item.status\" style=\"font-size: 10px; color: rgb(197, 197, 197);\">{{' - ' + item.status.value}}</strong> </h6>\n                \n                <span *ngIf=\"item.permission\" data-filter-by=\"text\" class=\"badge badge-pill badge-primary my-1\" [ngClass]=\"badgeStyleClass[item.permission]\">\n                    {{item.permission}}\n                </span>\n                <span *ngIf=\"!item.permission\" data-filter-by=\"text\" class=\"badge badge-pill badge-secondary my-1\" >\n                    Active\n                    {{item.lastActive | timeAgo}}\n                </span>\n                \n            </div>\n        </a>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _services_authGuard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authGuard.service */ "./src/app/services/authGuard.service.ts");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/profile/profile.component */ "./src/app/component/profile/profile.component.ts");






const routes = [
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_services_authGuard_service__WEBPACK_IMPORTED_MODULE_4__["CanActivateGuard"]] },
    { path: 'profile', children: [
            { path: ':userName', component: _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] }
        ],
        canActivate: [_services_authGuard_service__WEBPACK_IMPORTED_MODULE_4__["CanActivateGuard"]]
    },
    { path: '', redirectTo: 'auth/signin', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'teams-ms';
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _module_static_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/static.module */ "./src/app/module/static.module.ts");
/* harmony import */ var _module_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/auth.module */ "./src/app/module/auth.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_authGuard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/authGuard.service */ "./src/app/services/authGuard.service.ts");
/* harmony import */ var _module_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/home.module */ "./src/app/module/home.module.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_http_interseptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/http.interseptor */ "./src/app/services/http.interseptor.ts");
/* harmony import */ var _services_view_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/view.service */ "./src/app/services/view.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _module_project_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./module/project.module */ "./src/app/module/project.module.ts");


















let AppModule = class AppModule {
    constructor() {
        firebase__WEBPACK_IMPORTED_MODULE_15__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebaseConfig);
    }
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _module_static_module__WEBPACK_IMPORTED_MODULE_5__["StaticModule"],
            _module_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthFeatureModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _module_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeFeatureModule"],
            _module_project_module__WEBPACK_IMPORTED_MODULE_17__["ProjectFeatureModule"]
        ],
        providers: [
            _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"],
            _services_authGuard_service__WEBPACK_IMPORTED_MODULE_8__["CanActivateGuard"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: _services_http_interseptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
                multi: true
            },
            _services_view_service__WEBPACK_IMPORTED_MODULE_13__["ViewService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/auth/signin/signin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/auth/signin/signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_view_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/view.service */ "./src/app/services/view.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







// import 'firebase/auth';
let SignInComponent = class SignInComponent {
    constructor(_http, _auth, _router, _view) {
        this._http = _http;
        this._auth = _auth;
        this._router = _router;
        this._view = _view;
    }
    signIn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._view.setObs('loader', 'isVisible', true);
            const logreq = yield this._http.POST('/auth/login', { userName: this.userName, password: this.password })
                .toPromise()
                .then((data) => {
                if (data.token) {
                    firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().signInWithCustomToken(data.token)
                        .then(() => {
                        this._auth.setToken()
                            .then(success => {
                            if (success) {
                                this._http.REDIRECT('/home');
                            }
                            else {
                                alert("Error Redirecting");
                            }
                            this._view.setObs('loader', 'isVisible', false);
                            this._view.setObs('navbar', 'isVisible', true);
                        });
                    })
                        .catch((err) => {
                        console.log(err);
                        alert("Error, check the console");
                    });
                }
                else {
                    this._view.setObs('loader', 'isVisible', false);
                    alert('User Information is wrong');
                }
            });
        });
    }
    signInAsDemo() {
        this.userName = 'jassa';
        this.password = 'jassa66223';
        this.signIn();
    }
};
SignInComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_view_service__WEBPACK_IMPORTED_MODULE_5__["ViewService"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/auth/signin/signin.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.scss */ "./src/app/component/auth/signin/signin.scss")).default]
    })
], SignInComponent);



/***/ }),

/***/ "./src/app/component/auth/signin/signin.scss":
/*!***************************************************!*\
  !*** ./src/app/component/auth/signin/signin.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n:root {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n/*---------------------------------------------*/\na {\n  font-family: sans-serif;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n}\na:focus {\n  outline: none !important;\n}\na:hover {\n  text-decoration: none;\n  color: #57b846;\n}\n/*---------------------------------------------*/\nh1, h2, h3, h4, h5, h6 {\n  margin: 0px;\n}\np {\n  font-family: sans-serif;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n}\nul, li {\n  margin: 0px;\n  list-style-type: none;\n}\n/*---------------------------------------------*/\ninput {\n  outline: none;\n  border: none;\n}\ntextarea {\n  outline: none;\n  border: none;\n}\ntextarea:focus, input:focus {\n  border-color: transparent !important;\n}\ninput:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ninput:focus:-moz-placeholder {\n  color: transparent;\n}\ninput:focus::-moz-placeholder {\n  color: transparent;\n}\ninput:focus:-ms-input-placeholder {\n  color: transparent;\n}\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ntextarea:focus:-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\ntextarea:focus:-ms-input-placeholder {\n  color: transparent;\n}\ninput::-webkit-input-placeholder {\n  color: #999999;\n}\ninput:-moz-placeholder {\n  color: #999999;\n}\ninput::-moz-placeholder {\n  color: #999999;\n}\ninput:-ms-input-placeholder {\n  color: #999999;\n}\ntextarea::-webkit-input-placeholder {\n  color: #999999;\n}\ntextarea:-moz-placeholder {\n  color: #999999;\n}\ntextarea::-moz-placeholder {\n  color: #999999;\n}\ntextarea:-ms-input-placeholder {\n  color: #999999;\n}\n/*---------------------------------------------*/\nbutton {\n  outline: none !important;\n  border: none;\n  background: transparent;\n}\nbutton:hover {\n  cursor: pointer;\n}\niframe {\n  border: none !important;\n}\n/*//////////////////////////////////////////////////////////////////\n[ Utility ]*/\n.txt1 {\n  font-family: sans-serif;\n  font-size: 13px;\n  line-height: 1.5;\n  color: #999999;\n}\n.txt2 {\n  font-family: sans-serif;\n  font-size: 13px;\n  line-height: 1.5;\n  color: white;\n}\n/*//////////////////////////////////////////////////////////////////\n[ login ]*/\n.limiter {\n  width: 100%;\n  margin: 0 auto;\n}\n.container-login100 {\n  width: 100%;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 15px;\n}\n.wrap-login100 {\n  width: 960px;\n  background: #fff;\n  border-radius: 10px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 50px 130px 50px 95px;\n}\n/*------------------------------------------------------------------\n[  ]*/\n.login100-pic {\n  width: 316px;\n}\n.login100-pic img {\n  max-width: 100%;\n}\n/*------------------------------------------------------------------\n[  ]*/\n.login100-form {\n  width: 290px;\n}\n.login100-form-title {\n  font-family: sans-serif;\n  font-size: 24px;\n  color: #333333;\n  line-height: 1.2;\n  text-align: center;\n  width: 100%;\n  display: block;\n  padding-bottom: 54px;\n}\n/*---------------------------------------------*/\n.wrap-input100 {\n  position: relative;\n  width: 100%;\n  z-index: 1;\n  margin-bottom: 10px;\n}\n.input100 {\n  font-family: sans-serif;\n  font-size: 15px;\n  line-height: 1.5;\n  color: #666666;\n  display: block;\n  width: 100%;\n  background: #e6e6e6;\n  height: 50px;\n  border-radius: 25px;\n  padding: 0 30px 0 68px;\n}\n/*------------------------------------------------------------------\n[ Focus ]*/\n.focus-input100 {\n  display: block;\n  position: absolute;\n  border-radius: 25px;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 0px 0px 0px;\n  color: rgba(87, 184, 70, 0.8);\n}\n.input100:focus + .focus-input100 {\n  -webkit-animation: anim-shadow 0.5s ease-in-out forwards;\n  animation: anim-shadow 0.5s ease-in-out forwards;\n}\n@-webkit-keyframes anim-shadow {\n  to {\n    box-shadow: 0px 0px 70px 25px;\n    opacity: 0;\n  }\n}\n@keyframes anim-shadow {\n  to {\n    box-shadow: 0px 0px 70px 25px;\n    opacity: 0;\n  }\n}\n.symbol-input100 {\n  font-size: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  border-radius: 25px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding-left: 35px;\n  pointer-events: none;\n  color: #666666;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.input100:focus + .focus-input100 + .symbol-input100 {\n  color: #57b846;\n  padding-left: 28px;\n}\n/*------------------------------------------------------------------\n[ Button ]*/\n.container-login100-form-btn {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 20px;\n}\n.login100-form-btn {\n  font-family: sans-serif;\n  font-size: 15px;\n  line-height: 1.5;\n  color: #fff;\n  text-transform: uppercase;\n  width: 100%;\n  height: 50px;\n  border-radius: 25px;\n  background: #57b846;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 25px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.login100-form-btn:hover {\n  background: #333333;\n}\n/*------------------------------------------------------------------\n[ Responsive ]*/\n@media (max-width: 992px) {\n  .wrap-login100 {\n    padding: 177px 90px 33px 85px;\n  }\n\n  .login100-pic {\n    width: 35%;\n  }\n\n  .login100-form {\n    width: 50%;\n  }\n}\n@media (max-width: 768px) {\n  .wrap-login100 {\n    padding: 100px 80px 33px 80px;\n  }\n\n  .login100-pic {\n    display: none;\n  }\n\n  .login100-form {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .wrap-login100 {\n    padding: 100px 15px 33px 15px;\n  }\n}\n/*------------------------------------------------------------------\n[ Alert validate ]*/\n.validate-input {\n  position: relative;\n}\n.alert-validate::before {\n  content: attr(data-validate);\n  position: absolute;\n  max-width: 70%;\n  background-color: white;\n  border: 1px solid #c80000;\n  border-radius: 13px;\n  padding: 4px 25px 4px 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 8px;\n  pointer-events: none;\n  font-family: sans-serif;\n  color: #c80000;\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: opacity 0.4s;\n  transition: opacity 0.4s;\n}\n.alert-validate::after {\n  content: \"\";\n  font-family: sans-serif;\n  display: block;\n  position: absolute;\n  color: #c80000;\n  font-size: 15px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 13px;\n}\n.alert-validate:hover:before {\n  visibility: visible;\n  opacity: 1;\n}\n@media (max-width: 992px) {\n  .alert-validate::before {\n    visibility: visible;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2F1dGgvc2lnbmluL3NpZ25pbi5zY3NzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9UZWFtcy1NUy90ZWFtcy1tcy9zcmMvYXBwL2NvbXBvbmVudC9hdXRoL3NpZ25pbi9zaWduaW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNpSmQ7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUQvSU47QUNtSkUsZ0RBQUE7QUFDQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0YsdUJBQUE7RUFDQSx5QkFBQTtBRGhKSjtBQ21KRTtFQUNJLHdCQUFBO0FEaEpOO0FDbUpFO0VBQ0kscUJBQUE7RUFDRixjQUFBO0FEaEpKO0FDbUpFLGdEQUFBO0FBQ0E7RUFDSSxXQUFBO0FEaEpOO0FDbUpFO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRGhKTjtBQ21KRTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBRGhKTjtBQ29KRSxnREFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QURqSk47QUNvSkU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBRGpKSjtBQ29KRTtFQUNFLG9DQUFBO0FEakpKO0FDb0pFO0VBQXlDLGtCQUFBO0FEaEozQztBQ2lKRTtFQUErQixrQkFBQTtBRDdJakM7QUM4SUU7RUFBZ0Msa0JBQUE7QUQxSWxDO0FDMklFO0VBQW9DLGtCQUFBO0FEdkl0QztBQ3lJRTtFQUE0QyxrQkFBQTtBRHJJOUM7QUNzSUU7RUFBa0Msa0JBQUE7QURsSXBDO0FDbUlFO0VBQW1DLGtCQUFBO0FEL0hyQztBQ2dJRTtFQUF1QyxrQkFBQTtBRDVIekM7QUM4SEU7RUFBbUMsY0FBQTtBRDFIckM7QUMySEU7RUFBeUIsY0FBQTtBRHZIM0I7QUN3SEU7RUFBMEIsY0FBQTtBRHBINUI7QUNxSEU7RUFBOEIsY0FBQTtBRGpIaEM7QUNtSEU7RUFBc0MsY0FBQTtBRC9HeEM7QUNnSEU7RUFBNEIsY0FBQTtBRDVHOUI7QUM2R0U7RUFBNkIsY0FBQTtBRHpHL0I7QUMwR0U7RUFBaUMsY0FBQTtBRHRHbkM7QUN3R0UsZ0RBQUE7QUFDQTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FEckdOO0FDd0dFO0VBQ0ksZUFBQTtBRHJHTjtBQ3dHRTtFQUNJLHVCQUFBO0FEckdOO0FDeUdFO1lBQUE7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRHRHSjtBQ3lHRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRHRHSjtBQzBHRTtVQUFBO0FBR0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBRHhHSjtBQzJHRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBSUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7QUR4R0o7QUM0R0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFJQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSw2QkFBQTtBRDFHSjtBQzZHRTtLQUFBO0FBRUE7RUFDRSxZQUFBO0FEMUdKO0FDNkdFO0VBQ0UsZUFBQTtBRDFHSjtBQzhHRTtLQUFBO0FBRUE7RUFDRSxZQUFBO0FEM0dKO0FDOEdFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FENUdKO0FDZ0hFLGdEQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUQ3R0o7QUNnSEU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUQ5R0o7QUNrSEU7VUFBQTtBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUQvR0o7QUNrSEU7RUFDRSx3REFBQTtFQUNBLGdEQUFBO0FEL0dKO0FDa0hFO0VBQ0U7SUFDRSw2QkFBQTtJQUNBLFVBQUE7RUQvR0o7QUFDRjtBQ2tIRTtFQUNFO0lBQ0UsNkJBQUE7SUFDQSxVQUFBO0VEaEhKO0FBQ0Y7QUNtSEU7RUFDRSxlQUFBO0VBRUEsb0JBQUE7RUFJQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFFQSw0QkFBQTtFQUdBLG9CQUFBO0FEbkhKO0FDc0hFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FEbkhKO0FDc0hFO1dBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUlBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0FEbkhKO0FDc0hFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUlBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSw0QkFBQTtFQUdBLG9CQUFBO0FEckhKO0FDd0hFO0VBQ0UsbUJBQUE7QURySEo7QUMwSEU7ZUFBQTtBQUtBO0VBQ0U7SUFDRSw2QkFBQTtFRDFISjs7RUM2SEU7SUFDRSxVQUFBO0VEMUhKOztFQzZIRTtJQUNFLFVBQUE7RUQxSEo7QUFDRjtBQzZIRTtFQUNFO0lBQ0UsNkJBQUE7RUQzSEo7O0VDOEhFO0lBQ0UsYUFBQTtFRDNISjs7RUM4SEU7SUFDRSxXQUFBO0VEM0hKO0FBQ0Y7QUM4SEU7RUFDRTtJQUNFLDZCQUFBO0VENUhKO0FBQ0Y7QUNnSUU7bUJBQUE7QUFHQTtFQUNFLGtCQUFBO0FEL0hKO0FDa0lFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtFQUlBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBRUEsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxnQ0FBQTtFQUdBLHdCQUFBO0FEbElKO0FDcUlFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7RUFJQSwyQkFBQTtFQUNBLFdBQUE7QURsSUo7QUNxSUU7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QURsSUo7QUNxSUU7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFRGxJSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2F1dGgvc2lnbmluL3NpZ25pbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOnJvb3Qge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBtYXJnaW46IDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzU3Yjg0Njtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgY29sb3I6ICM2NjY2NjY7XG4gIG1hcmdpbjogMHB4O1xufVxuXG51bCwgbGkge1xuICBtYXJnaW46IDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG50ZXh0YXJlYTpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG50ZXh0YXJlYTpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxudGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG5pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG50ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG50ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbnRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbnRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5idXR0b24ge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaWZyYW1lIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5bIFV0aWxpdHkgXSovXG4udHh0MSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4udHh0MiB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblsgbG9naW4gXSovXG4ubGltaXRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRhaW5lci1sb2dpbjEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ud3JhcC1sb2dpbjEwMCB7XG4gIHdpZHRoOiA5NjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNTBweCAxMzBweCA1MHB4IDk1cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5bICBdKi9cbi5sb2dpbjEwMC1waWMge1xuICB3aWR0aDogMzE2cHg7XG59XG5cbi5sb2dpbjEwMC1waWMgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuWyAgXSovXG4ubG9naW4xMDAtZm9ybSB7XG4gIHdpZHRoOiAyOTBweDtcbn1cblxuLmxvZ2luMTAwLWZvcm0tdGl0bGUge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiA1NHB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ud3JhcC1pbnB1dDEwMCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnB1dDEwMCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZzogMCAzMHB4IDAgNjhweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblsgRm9jdXMgXSovXG4uZm9jdXMtaW5wdXQxMDAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHg7XG4gIGNvbG9yOiByZ2JhKDg3LCAxODQsIDcwLCAwLjgpO1xufVxuXG4uaW5wdXQxMDA6Zm9jdXMgKyAuZm9jdXMtaW5wdXQxMDAge1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbS1zaGFkb3cgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgYW5pbWF0aW9uOiBhbmltLXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbS1zaGFkb3cge1xuICB0byB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3MHB4IDI1cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBhbmltLXNoYWRvdyB7XG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDcwcHggMjVweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uc3ltYm9sLWlucHV0MTAwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4uaW5wdXQxMDA6Zm9jdXMgKyAuZm9jdXMtaW5wdXQxMDAgKyAuc3ltYm9sLWlucHV0MTAwIHtcbiAgY29sb3I6ICM1N2I4NDY7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblsgQnV0dG9uIF0qL1xuLmNvbnRhaW5lci1sb2dpbjEwMC1mb3JtLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ubG9naW4xMDAtZm9ybS1idG4ge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZDogIzU3Yjg0NjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbi5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5bIFJlc3BvbnNpdmUgXSovXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLndyYXAtbG9naW4xMDAge1xuICAgIHBhZGRpbmc6IDE3N3B4IDkwcHggMzNweCA4NXB4O1xuICB9XG5cbiAgLmxvZ2luMTAwLXBpYyB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxuXG4gIC5sb2dpbjEwMC1mb3JtIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndyYXAtbG9naW4xMDAge1xuICAgIHBhZGRpbmc6IDEwMHB4IDgwcHggMzNweCA4MHB4O1xuICB9XG5cbiAgLmxvZ2luMTAwLXBpYyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5sb2dpbjEwMC1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC53cmFwLWxvZ2luMTAwIHtcbiAgICBwYWRkaW5nOiAxMDBweCAxNXB4IDMzcHggMTVweDtcbiAgfVxufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblsgQWxlcnQgdmFsaWRhdGUgXSovXG4udmFsaWRhdGUtaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXZhbGlkYXRlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjODAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAyNXB4IDRweCAxMHB4O1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcmlnaHQ6IDhweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2M4MDAwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG59XG5cbi5hbGVydC12YWxpZGF0ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIu+BqlwiO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNjODAwMDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OiAxM3B4O1xufVxuXG4uYWxlcnQtdmFsaWRhdGU6aG92ZXI6YmVmb3JlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iLCIvLyAubWFpbiB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbi8vICAgICB3aWR0aDogNDAwcHg7XG4vLyAgICAgaGVpZ2h0OiA0MDBweDtcbi8vICAgICBtYXJnaW46IDdlbSBhdXRvO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xuLy8gICAgIGJveC1zaGFkb3c6IDBweCAxMXB4IDM1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4vLyB9XG5cbi8vIC5zaWduIHtcbi8vICAgICBwYWRkaW5nLXRvcDogNDBweDtcbi8vICAgICBjb2xvcjogIzhjNTVhYTtcbi8vICAgICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBmb250LXNpemU6IDIzcHg7XG4vLyB9XG5cbi8vIGlucHV0IHtcbi8vICAgICB3aWR0aDogNzYlO1xuLy8gICAgIGNvbG9yOiByZ2IoMzgsIDUwLCA1Nik7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbi8vICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNiwgMTI2LCAxMjYsIDAuMDQpO1xuLy8gICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbi8vICAgICBib3JkZXI6IG5vbmU7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbi8vICAgICBvdXRsaW5lOiBub25lO1xuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjAyKTtcbi8vICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuLy8gICAgIG1hcmdpbi1sZWZ0OiA0NnB4O1xuLy8gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjdweDtcbi8vICAgICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgc2Fucy1zZXJpZjtcbi8vIH1cblxuLy8gZm9ybS5mb3JtMSB7XG4vLyAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4vLyB9XG5cbi8vIC5zdWJtaXQge1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1ZW07XG4vLyAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOWMyN2IwLCAjZTA0MGZiKTtcbi8vICAgICBib3JkZXI6IDA7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4vLyAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4vLyAgICAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIHNhbnMtc2VyaWY7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDM1JTtcbi8vICAgICBmb250LXNpemU6IDEzcHg7XG4vLyAgICAgYm94LXNoYWRvdzogMCAwIDIwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4vLyB9XG5cbi8vIC5jcmVhdGUge1xuLy8gICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDExNywgMTE3LCAxMTcsIDAuMTIpO1xuLy8gICAgIGNvbG9yOiAjZTFiZWU3O1xuLy8gICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuLy8gfVxuXG4vLyBhIHtcbi8vICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSgxMTcsIDExNywgMTE3LCAwLjEyKTtcbi8vICAgICBjb2xvcjogI2UxYmVlNztcbi8vIH1cblxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4vLyAgICAgLm1haW4ge1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyA6cm9vdCB7XG4vLyAgICAgLS1pbnB1dC1wYWRkaW5nLXg6IDEuNXJlbTtcbi8vICAgICAtLWlucHV0LXBhZGRpbmcteTogMC43NXJlbTtcbi8vIH1cblxuLy8gLmNhcmQtc2lnbmluIHtcbi8vICAgICBib3JkZXI6IDA7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbi8vICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuLy8gfVxuXG4vLyAuY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4vLyAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbi8vICAgICBmb250LXNpemU6IDEuNXJlbTtcbi8vIH1cblxuLy8gLmNhcmQtc2lnbmluIC5jYXJkLWJvZHkge1xuLy8gICAgIHBhZGRpbmc6IDJyZW07XG4vLyB9XG5cbi8vIC5mb3JtLXNpZ25pbiB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyB9XG5cbi8vIC5mb3JtLXNpZ25pbiAuYnRuIHtcbi8vICAgICBmb250LXNpemU6IDgwJTtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuLy8gICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgcGFkZGluZzogMXJlbTtcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbi8vIH1cblxuLy8gLmZvcm0tbGFiZWwtZ3JvdXAge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuLy8gfVxuXG4vLyAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dCB7XG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4vLyB9XG5cbi8vIC5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXG4vLyAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbi8vICAgICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIHZhcigtLWlucHV0LXBhZGRpbmcteCk7XG4vLyB9XG5cbi8vIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAwO1xuLy8gICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4vLyAgICAgY29sb3I6ICM0OTUwNTc7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbi8vIH1cblxuXG5cblxuXG5cblxuICBcbiAgOnJvb3Qge1xuICAgICAgbWFyZ2luOiAwcHg7IFxuICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgYSB7XG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIH1cbiAgXG4gIGE6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBhOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzU3Yjg0NjtcbiAgfVxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBoMSxoMixoMyxoNCxoNSxoNiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgfVxuICBcbiAgcCB7XG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIFxuICB1bCwgbGkge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbiAgXG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIGlucHV0IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIHRleHRhcmVhIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgdGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cbiAgaW5wdXQ6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XG4gIGlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cbiAgaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cbiAgXG4gIHRleHRhcmVhOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cbiAgdGV4dGFyZWE6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XG4gIHRleHRhcmVhOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cbiAgdGV4dGFyZWE6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cbiAgXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5OyB9XG4gIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgXG4gIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgdGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5OyB9XG4gIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgYnV0dG9uIHtcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICBidXR0b246aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICBpZnJhbWUge1xuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIFxuICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICBbIFV0aWxpdHkgXSovXG4gIC50eHQxIHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgfVxuICBcbiAgLnR4dDIge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFsgbG9naW4gXSovXG4gIFxuICAubGltaXRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gIC5jb250YWluZXItbG9naW4xMDAge1xuICAgIHdpZHRoOiAxMDAlOyAgXG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgIFxuICB9XG4gIFxuICAud3JhcC1sb2dpbjEwMCB7XG4gICAgd2lkdGg6IDk2MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDUwcHggMTMwcHggNTBweCA5NXB4O1xuICB9XG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbICBdKi9cbiAgLmxvZ2luMTAwLXBpYyB7XG4gICAgd2lkdGg6IDMxNnB4O1xuICB9XG4gIFxuICAubG9naW4xMDAtcGljIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgWyAgXSovXG4gIC5sb2dpbjEwMC1mb3JtIHtcbiAgICB3aWR0aDogMjkwcHg7XG4gIH1cbiAgXG4gIC5sb2dpbjEwMC1mb3JtLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctYm90dG9tOiA1NHB4O1xuICB9XG4gIFxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAud3JhcC1pbnB1dDEwMCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgLmlucHV0MTAwIHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nOiAwIDMwcHggMCA2OHB4O1xuICB9XG4gIFxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgWyBGb2N1cyBdKi9cbiAgLmZvY3VzLWlucHV0MTAwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4O1xuICAgIGNvbG9yOiByZ2JhKDg3LDE4NCw3MCwgMC44KTtcbiAgfVxuICBcbiAgLmlucHV0MTAwOmZvY3VzICsgLmZvY3VzLWlucHV0MTAwIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbS1zaGFkb3cgMC41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IGFuaW0tc2hhZG93IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBhbmltLXNoYWRvdyB7XG4gICAgdG8ge1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3MHB4IDI1cHg7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBhbmltLXNoYWRvdyB7XG4gICAgdG8ge1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3MHB4IDI1cHg7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLnN5bWJvbC1pbnB1dDEwMCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICBcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gIFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgfVxuICBcbiAgLmlucHV0MTAwOmZvY3VzICsgLmZvY3VzLWlucHV0MTAwICsgLnN5bWJvbC1pbnB1dDEwMCB7XG4gICAgY29sb3I6ICM1N2I4NDY7XG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICB9XG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbIEJ1dHRvbiBdKi9cbiAgLmNvbnRhaW5lci1sb2dpbjEwMC1mb3JtLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG4gIFxuICAubG9naW4xMDAtZm9ybS1idG4ge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICM1N2I4NDY7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG4gIFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgfVxuICBcbiAgLmxvZ2luMTAwLWZvcm0tYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICB9XG4gIFxuICBcbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFsgUmVzcG9uc2l2ZSBdKi9cbiAgXG4gIFxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLndyYXAtbG9naW4xMDAge1xuICAgICAgcGFkZGluZzogMTc3cHggOTBweCAzM3B4IDg1cHg7XG4gICAgfVxuICBcbiAgICAubG9naW4xMDAtcGljIHtcbiAgICAgIHdpZHRoOiAzNSU7XG4gICAgfVxuICBcbiAgICAubG9naW4xMDAtZm9ybSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLndyYXAtbG9naW4xMDAge1xuICAgICAgcGFkZGluZzogMTAwcHggODBweCAzM3B4IDgwcHg7XG4gICAgfVxuICBcbiAgICAubG9naW4xMDAtcGljIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBcbiAgICAubG9naW4xMDAtZm9ybSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIC53cmFwLWxvZ2luMTAwIHtcbiAgICAgIHBhZGRpbmc6IDEwMHB4IDE1cHggMzNweCAxNXB4O1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFsgQWxlcnQgdmFsaWRhdGUgXSovXG4gIFxuICAudmFsaWRhdGUtaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmFsZXJ0LXZhbGlkYXRlOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWxpZGF0ZSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjODAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICBwYWRkaW5nOiA0cHggMjVweCA0cHggMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgcmlnaHQ6IDhweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNjODAwMDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gIFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gIH1cbiAgXG4gIC5hbGVydC12YWxpZGF0ZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDZhXCI7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjYzgwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgcmlnaHQ6IDEzcHg7XG4gIH1cbiAgXG4gIC5hbGVydC12YWxpZGF0ZTpob3ZlcjpiZWZvcmUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLmFsZXJ0LXZhbGlkYXRlOjpiZWZvcmUge1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/component/auth/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/auth/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_view_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/view.service */ "./src/app/services/view.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);







let SignUpComponent = class SignUpComponent {
    constructor(_http, _auth, _router, _view) {
        this._http = _http;
        this._auth = _auth;
        this._router = _router;
        this._view = _view;
    }
    ngOnInit() { }
    signUp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._view.setObs('loader', 'isVisible', true);
            const logreq = yield this._http.POST('/auth/register', { userName: this.userName, password: this.password })
                .toPromise()
                .then(data => {
                if (data.token) {
                    firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().signInWithCustomToken(data.token)
                        .then(() => {
                        this._auth.setToken()
                            .then(success => {
                            if (success) {
                                this._http.REDIRECT('/home');
                            }
                            else {
                                alert("Error Redirecting");
                            }
                            // this._view.setObs('loader','isVisible', false);
                        });
                    })
                        .catch((err) => {
                        console.log(err);
                        alert("Error, check the console");
                    });
                }
                else {
                    alert('User Information is wrong');
                }
                this._view.setObs('loader', 'isVisible', false);
            });
        });
    }
};
SignUpComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_view_service__WEBPACK_IMPORTED_MODULE_5__["ViewService"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/auth/signup/signup.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../signin/signin.scss */ "./src/app/component/auth/signin/signin.scss")).default]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.scss */ "./src/app/component/footer/footer.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/component/footer/footer.scss":
/*!**********************************************!*\
  !*** ./src/app/component/footer/footer.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  background: #152F4F;\n  color: white;\n}\n.footer .links ul {\n  list-style-type: none;\n}\n.footer .links li a {\n  color: white;\n  -webkit-transition: color 0.2s;\n  transition: color 0.2s;\n}\n.footer .links li a:hover {\n  text-decoration: none;\n  color: #4180CB;\n}\n.footer .about-company i {\n  font-size: 25px;\n}\n.footer .about-company a {\n  color: white;\n  -webkit-transition: color 0.2s;\n  transition: color 0.2s;\n}\n.footer .about-company a:hover {\n  color: #4180CB;\n}\n.footer .location i {\n  font-size: 18px;\n}\n.footer .copyright p {\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvVGVhbXMtTVMvdGVhbXMtbXMvc3JjL2FwcC9jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDQ0o7QURFTTtFQUFJLHFCQUFBO0FDQ1Y7QURBTTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtFQUFBLHNCQUFBO0FDRVI7QUREUTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0dWO0FERU07RUFBRSxlQUFBO0FDQ1I7QURBTTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtFQUFBLHNCQUFBO0FDRVI7QUREUTtFQUFRLGNBQUE7QUNJaEI7QURBTTtFQUFFLGVBQUE7QUNHUjtBRERJO0VBQWEsOENBQUE7QUNJakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZm9vdGVyL2Zvb3Rlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kOiAjMTUyRjRGO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIFxuICAgIC5saW5rc3tcbiAgICAgIHVsIHtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7fVxuICAgICAgbGkgYXtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMnM7XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgY29sb3I6IzQxODBDQjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfSAgXG4gICAgLmFib3V0LWNvbXBhbnl7XG4gICAgICBpe2ZvbnQtc2l6ZTogMjVweDt9XG4gICAgICBhe1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xuICAgICAgICAmOmhvdmVye2NvbG9yOiM0MTgwQ0J9XG4gICAgICB9XG4gICAgfSBcbiAgICAubG9jYXRpb257XG4gICAgICBpe2ZvbnQtc2l6ZTogMThweDt9XG4gICAgfVxuICAgIC5jb3B5cmlnaHQgcHtib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC4xKTt9IFxuICB9IiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxNTJGNEY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mb290ZXIgLmxpbmtzIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmZvb3RlciAubGlua3MgbGkgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cbi5mb290ZXIgLmxpbmtzIGxpIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNDE4MENCO1xufVxuLmZvb3RlciAuYWJvdXQtY29tcGFueSBpIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLmZvb3RlciAuYWJvdXQtY29tcGFueSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xufVxuLmZvb3RlciAuYWJvdXQtY29tcGFueSBhOmhvdmVyIHtcbiAgY29sb3I6ICM0MTgwQ0I7XG59XG4uZm9vdGVyIC5sb2NhdGlvbiBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmZvb3RlciAuY29weXJpZ2h0IHAge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/home/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/home/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/header/header.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.scss */ "./src/app/component/home/header/header.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/component/home/header/header.scss":
/*!***************************************************!*\
  !*** ./src/app/component/home/header/header.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#header {\n  background: #045dec;\n  background: -webkit-gradient(linear, left top, right top, from(#045dec), color-stop(50%, #243fe3), to(#4520ca));\n  background: linear-gradient(90deg, #045dec 0%, #243fe3 50%, #4520ca 100%);\n}\n#header h1 {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvVGVhbXMtTVMvdGVhbXMtbXMvc3JjL2FwcC9jb21wb25lbnQvaG9tZS9oZWFkZXIvaGVhZGVyLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hlYWRlci9oZWFkZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsK0dBQUE7RUFBQSx5RUFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG9tZS9oZWFkZXIvaGVhZGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVye1xuICAgIGJhY2tncm91bmQ6IHJnYig0LDkzLDIzNik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDQsOTMsMjM2LDEpIDAlLCByZ2JhKDM2LDYzLDIyNywxKSA1MCUsIHJnYmEoNjksMzIsMjAyLDEpIDEwMCUpO1xuICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cbiIsIiNoZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMDQ1ZGVjO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNDVkZWMgMCUsICMyNDNmZTMgNTAlLCAjNDUyMGNhIDEwMCUpO1xufVxuI2hlYWRlciBoMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





let HomeComponent = class HomeComponent {
    constructor(_http, _data) {
        this._http = _http;
        this._data = _data;
        this.personalNotes = [];
        this.pendingNotes = 0;
        this.userImage = '';
    }
    get personalNotesData() {
        return this.personalNotes;
    }
    set personalNotesData(data) {
        this.personalNotes = [...data];
        for (const note of data) {
            if (note.crossOff)
                continue;
            this.pendingNotes++;
        }
    }
    ngOnInit() {
        this._data.refresh();
        this.fetchData();
    }
    ngOnDestroy() {
        this.$userObs.unsubscribe();
    }
    fetchData() {
        this.$userObs = this._data.getUser()
            .subscribe(user => {
            this.userData = user;
            this.userImage = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userImages[user.avatar];
        });
        this._http.GET('/personalnotes/get')
            .toPromise()
            .then(res => {
            if (res.success) {
                this.personalNotesData = res.data.personalNotes;
            }
            else {
                alert("error");
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.scss */ "./src/app/component/home/home.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/component/home/home.scss":
/*!******************************************!*\
  !*** ./src/app/component/home/home.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#section1 {\n  margin-top: -100px;\n}\n\n.notes {\n  font-family: \"Nunito\", sans-serif;\n}\n\n.notes .card {\n  padding: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvVGVhbXMtTVMvdGVhbXMtbXMvc3JjL2FwcC9jb21wb25lbnQvaG9tZS9ob21lLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0FDREo7O0FES0E7RUFDSSxpQ0FBQTtBQ0ZKOztBRElJO0VBQ0ksYUFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuI3NlY3Rpb24xe1xuICAgIG1hcmdpbi10b3A6IC0xMDBweDtcbn0gXG5cblxuLm5vdGVze1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcblxuICAgIC5jYXJke1xuICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgIH1cbn1cblxuXG4iLCIjc2VjdGlvbjEge1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG59XG5cbi5ub3RlcyB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuLm5vdGVzIC5jYXJkIHtcbiAgcGFkZGluZzogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/home/projects-table/project-table-row/projectRow.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/component/home/projects-table/project-table-row/projectRow.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL3Byb2plY3RzLXRhYmxlL3Byb2plY3QtdGFibGUtcm93L3Byb2plY3RSb3cuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/home/projects-table/project-table-row/tableRow.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/component/home/projects-table/project-table-row/tableRow.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProjectTableRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTableRowComponent", function() { return ProjectTableRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");




let ProjectTableRowComponent = class ProjectTableRowComponent {
    constructor(_http) {
        this._http = _http;
        this.projectData = [];
        this.OnshowMembers = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userImages = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userImages;
        this.badgeStyleClass = {
            'Owner': 'badge-dark',
            'Admin': 'badge-warning',
            'Developer': 'badge-info'
        };
        this.isChanged = false;
    }
    ngOnInit() {
        for (const item of this.members) {
            if (item.name === this.userName) {
                this.userInProjectData = item;
                break;
            }
        }
    }
    loadMembersmodel() {
        this.OnshowMembers.emit(this.members);
    }
    OnstatusChanged() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = yield this._http.POST('/projects/update/member/details', {
                value: this.userInProjectData.status.value,
                name: this.projectData.name
            })
                .toPromise();
        });
    }
};
ProjectTableRowComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectTableRowComponent.prototype, "projectData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectTableRowComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectTableRowComponent.prototype, "members", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectTableRowComponent.prototype, "userName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProjectTableRowComponent.prototype, "OnshowMembers", void 0);
ProjectTableRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-table-row',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projectRow.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/projects-table/project-table-row/projectRow.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projectRow.scss */ "./src/app/component/home/projects-table/project-table-row/projectRow.scss")).default]
    })
], ProjectTableRowComponent);



/***/ }),

/***/ "./src/app/component/home/projects-table/projectTable.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/component/home/projects-table/projectTable.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTableComponent", function() { return ProjectTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectTableComponent = class ProjectTableComponent {
    constructor() { }
    ngOnInit() {
    }
    setMembersModelData(member) {
        this.membersModelData = member;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectTableComponent.prototype, "tableData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectTableComponent.prototype, "userName", void 0);
ProjectTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projectTable.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/projects-table/projectTable.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projectTable.scss */ "./src/app/component/home/projects-table/projectTable.scss")).default]
    })
], ProjectTableComponent);



/***/ }),

/***/ "./src/app/component/home/projects-table/projectTable.scss":
/*!*****************************************************************!*\
  !*** ./src/app/component/home/projects-table/projectTable.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-custom-scrollbar {\n  position: relative;\n  max-height: 300px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvVGVhbXMtTVMvdGVhbXMtbXMvc3JjL2FwcC9jb21wb25lbnQvaG9tZS9wcm9qZWN0cy10YWJsZS9wcm9qZWN0VGFibGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2hvbWUvcHJvamVjdHMtdGFibGUvcHJvamVjdFRhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hvbWUvcHJvamVjdHMtdGFibGUvcHJvamVjdFRhYmxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cblxuIiwiLm15LWN1c3RvbS1zY3JvbGxiYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let NavBarComponent = class NavBarComponent {
    constructor(_auth, _data, _http, _router) {
        this._auth = _auth;
        this._data = _data;
        this._http = _http;
        this._router = _router;
        this.currentUrl = '';
        this.avatars = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].userImages;
        this.materialIcons = {
            Project: 'domain',
            Follow: 'person_add',
            Job: 'work_outline'
        };
        _router
            .events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]))
            .subscribe((val) => {
            console.log(val.url);
            this.currentUrl = val.url;
        });
    }
    ngOnInit() {
        this.$userData = this._data.getUser()
            .subscribe(data => {
            try {
                data.notify.reverse();
            }
            catch (err) {
            }
            finally {
                this.userData = data;
            }
        });
    }
    ngOnDestroy() {
        this.$userData.unsubscribe();
    }
    logOut() {
        if (confirm('Are you sure you want to log out?')) {
            this._auth.LogOut();
        }
    }
    deleteNotify() {
        this._http.POST('/users/update/notifySeen', {})
            .toPromise()
            .then(res => {
            if (res.success) {
                this._data.setUser('notify', []);
            }
        });
    }
};
NavBarComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.style.scss */ "./src/app/component/navbar/navbar.style.scss")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/component/navbar/navbar.style.scss":
/*!****************************************************!*\
  !*** ./src/app/component/navbar/navbar.style.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n  height: 100%;\n  background-color: black;\n  width: 230px;\n}\n\n#wrapper {\n  color: wheat;\n  position: -webkit-sticky;\n  position: sticky;\n  top: -100px;\n  padding-top: 30px;\n  overflow: scroll;\n}\n\n#wrapper h6 {\n  color: white;\n  text-align: center;\n  font-family: \"Nunito\", sans-serif;\n  background: #f2709c;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#ff9472), to(#f2709c));\n  background: linear-gradient(to right, #ff9472, #f2709c);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding: 5px 20px 5px 5px;\n  margin: 0 20px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n#wrapper #userInfo {\n  font-family: \"Nunito\", sans-serif;\n  text-align: center;\n  margin-top: 40px;\n}\n\n#wrapper #userInfo img {\n  cursor: pointer;\n}\n\n#wrapper #userInfo div {\n  font-size: 15px;\n  margin-top: 7px;\n  letter-spacing: 2px;\n  color: white;\n  text-transform: capitalize;\n}\n\n#wrapper ul {\n  padding: 30px 10px;\n}\n\n#wrapper ul li,\n#wrapper ul a {\n  list-style: none;\n  padding: 8px 25px;\n  margin: 15px 5px;\n  position: relative;\n  font-family: \"Nunito\", sans-serif;\n  font-size: 12px;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  letter-spacing: 1px;\n  display: -webkit-box;\n  display: flex;\n}\n\n#wrapper ul li i,\n#wrapper ul a i {\n  padding: 5px 10px 2px 2px;\n  font-size: 20px;\n}\n\n#wrapper ul li span,\n#wrapper ul a span {\n  padding: 5px 0;\n}\n\n#wrapper ul li:hover,\n#wrapper ul a:hover {\n  color: black;\n  background-color: white;\n}\n\n#wrapper ul #contactInfo p {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 12px;\n  color: white;\n}\n\n#wrapper ul #contactInfo p a {\n  text-decoration: none;\n  color: #a0a0a0;\n  font-size: 11px;\n  padding-top: 5px;\n}\n\n#wrapper ul #logOut {\n  text-align: center;\n  color: white;\n  font-family: \"Nunito\", sans-serif;\n  margin-top: 30px;\n  cursor: pointer;\n}\n\n#wrapper ul .active {\n  color: black;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvVGVhbXMtTVMvdGVhbXMtbXMvc3JjL2FwcC9jb21wb25lbnQvbmF2YmFyL25hdmJhci5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvbmF2YmFyL25hdmJhci5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUFxQiw4QkFBQTtFQUM0QywrQkFBQTtFQUNqRSxxRkFBQTtFQUFBLHVEQUFBO0VBSUcscUVBQUE7RUFFSCx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHRTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREdJO0VBQ0UsZUFBQTtBQ0ROOztBRElJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ0ZOOztBRE1FO0VBQ0Usa0JBQUE7QUNKSjs7QURNSTs7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0pOOztBRE1NOztFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0hSOztBREtNOztFQUNFLGNBQUE7QUNGUjs7QURLTTs7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUNGUjs7QURPTTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNMUjs7QURPUTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xWOztBRFVJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNSTjs7QURXSTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L25hdmJhci9uYXZiYXIuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAyMzBweDtcbn1cbiN3cmFwcGVyIHtcbiAgY29sb3I6IHdoZWF0O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IC0xMDBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgaDYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZDogI2YyNzA5YzsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY5NDcyLCAjZjI3MDljKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgICNmZjk0NzIsXG4gICAgICAjZjI3MDljXG4gICAgKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuXG4gICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDVweDtcbiAgICBtYXJnaW46IDAgMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gICN1c2VySW5mbyB7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgICBpbWcge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGRpdiB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuICB9XG5cbiAgdWwge1xuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcblxuICAgIGxpLFxuICAgIGEge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDhweCAyNXB4O1xuICAgICAgbWFyZ2luOiAxNXB4IDVweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIGkge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAycHggMnB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgICBzcGFuIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgICNjb250YWN0SW5mbyB7XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgI2xvZ091dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cbiIsIm5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAyMzBweDtcbn1cblxuI3dyYXBwZXIge1xuICBjb2xvcjogd2hlYXQ7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogLTEwMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbiN3cmFwcGVyIGg2IHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjZjI3MDljO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY5NDcyLCAjZjI3MDljKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY5NDcyLCAjZjI3MDljKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICBwYWRkaW5nOiA1cHggMjBweCA1cHggNXB4O1xuICBtYXJnaW46IDAgMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3dyYXBwZXIgI3VzZXJJbmZvIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbiN3cmFwcGVyICN1c2VySW5mbyBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jd3JhcHBlciAjdXNlckluZm8gZGl2IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4jd3JhcHBlciB1bCB7XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbn1cbiN3cmFwcGVyIHVsIGxpLFxuI3dyYXBwZXIgdWwgYSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAyNXB4O1xuICBtYXJnaW46IDE1cHggNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4jd3JhcHBlciB1bCBsaSBpLFxuI3dyYXBwZXIgdWwgYSBpIHtcbiAgcGFkZGluZzogNXB4IDEwcHggMnB4IDJweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuI3dyYXBwZXIgdWwgbGkgc3BhbixcbiN3cmFwcGVyIHVsIGEgc3BhbiB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuI3dyYXBwZXIgdWwgbGk6aG92ZXIsXG4jd3JhcHBlciB1bCBhOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiN3cmFwcGVyIHVsICNjb250YWN0SW5mbyBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI3dyYXBwZXIgdWwgI2NvbnRhY3RJbmZvIHAgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNhMGEwYTA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbiN3cmFwcGVyIHVsICNsb2dPdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN3cmFwcGVyIHVsIC5hY3RpdmUge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/personalNotes/personalNotes.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/personalNotes/personalNotes.component.ts ***!
  \********************************************************************/
/*! exports provided: PersonalNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalNotes", function() { return PersonalNotes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");



let PersonalNotes = class PersonalNotes {
    constructor(_http) {
        this._http = _http;
        this.userImage = '';
        this.indexFocus = 0;
        this.formModuleData = {
            editNoteForm: {
                name: '',
                message: '',
                crossOff: false,
                id: ''
            },
            newNoteForm: {
                name: '',
                message: ''
            }
        };
    }
    ngOnInit() {
    }
    crossOff(note, index) {
        note.crossOff = !note.crossOff;
        this.preEdit(note, index);
        this.edit();
    }
    preEdit(note, index) {
        this.formModuleData.editNoteForm.name = note.name;
        this.formModuleData.editNoteForm.message = note.message;
        this.formModuleData.editNoteForm.crossOff = note.crossOff;
        this.formModuleData.editNoteForm.id = note._id;
        this.indexFocus = index;
    }
    edit() {
        this._http
            .POST('/personalnotes/update', this.formModuleData.editNoteForm)
            .toPromise()
            .then(res => {
            if (res.success) {
                this.notesData[this.indexFocus].name = this.formModuleData.editNoteForm.name;
                this.notesData[this.indexFocus].message = this.formModuleData.editNoteForm.message;
                this.notesData[this.indexFocus].crossOff = this.formModuleData.editNoteForm.crossOff;
            }
            else {
                alert("oops");
            }
        });
    }
    new() {
        this._http.POST('/personalnotes/post', { name: this.formModuleData.newNoteForm.name, message: this.formModuleData.newNoteForm.message })
            .toPromise()
            .then(res => {
            if (res.success) {
                this.notesData.push(res.data);
                // Reset Form
                this.formModuleData.newNoteForm = {
                    name: '',
                    message: '',
                };
            }
            else {
                throw 'Server err';
            }
        })
            .catch(error => {
            alert("oops");
        });
    }
    delete() {
        this._http.POST('/personalnotes/delete', { id: this.formModuleData.editNoteForm.id })
            .toPromise()
            .then(res => {
            if (res.success) {
                this.notesData = this.notesData.filter((note, index) => { return index !== this.indexFocus; });
            }
            else {
                alert(" oops ");
            }
        });
    }
    popModel() {
        console.log('clicked');
        // document.getElementById("#editNote").modal({show: true});
    }
};
PersonalNotes.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PersonalNotes.prototype, "notesData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PersonalNotes.prototype, "userImage", void 0);
PersonalNotes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-notes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personalNotes.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/personalNotes/personalNotes.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personalNotes.scss */ "./src/app/component/personalNotes/personalNotes.scss")).default]
    })
], PersonalNotes);



/***/ }),

/***/ "./src/app/component/personalNotes/personalNotes.scss":
/*!************************************************************!*\
  !*** ./src/app/component/personalNotes/personalNotes.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".crossOff {\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvVGVhbXMtTVMvdGVhbXMtbXMvc3JjL2FwcC9jb21wb25lbnQvcGVyc29uYWxOb3Rlcy9wZXJzb25hbE5vdGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9wZXJzb25hbE5vdGVzL3BlcnNvbmFsTm90ZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wZXJzb25hbE5vdGVzL3BlcnNvbmFsTm90ZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNyb3NzT2ZmIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59XG4iLCIuY3Jvc3NPZmYge1xuICBvcGFjaXR5OiAwLjQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let ProfileComponent = class ProfileComponent {
    constructor(_http, _router, _data) {
        this._http = _http;
        this._router = _router;
        this._data = _data;
        this.userName = '';
        this.isFollowing = false;
        this.userData = {};
        this.friendData = {};
        this.following = {
            length: 0,
            list: []
        };
        this.followers = {
            length: 0,
            list: []
        };
        this.projects = [];
        this.avatars = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].userImages;
    }
    ngOnInit() {
        this._router.params.subscribe(params => {
            this.userName = params['userName'];
            this._data.refresh();
            this.fetch();
        });
        this.$userData = this._data.getUser().subscribe(user => {
            this.userData = user;
        });
    }
    ngOnDestroy() {
        this.$userData.unsubscribe();
    }
    fetch() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = yield Promise.all([
                this._http.GET(`/users/get/${this.userName}`).toPromise(),
                this._http.GET(`/users/following/${this.userName}`).toPromise(),
                this._http.GET(`/users/followers/${this.userName}`).toPromise(),
                this._http.GET(`/projects/${this.userName}`).toPromise()
            ]);
            this.friendData = result[0].data;
            this.followers = {
                list: [...result[2].data.followers],
                length: result[2].length
            };
            this.following = {
                list: [...result[1].data.following],
                length: result[1].length
            };
            this.projects.push(...result[3]);
            const isFollowingReq = yield this._http.GET(`/users/isFollowing/${this.friendData._id}`).toPromise();
            this.isFollowing = isFollowingReq.data;
        });
    }
    // Follow or Unfollow
    friendAction() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let url;
            if (this.isFollowing) {
                url = '/users/unfollow';
                this.followers.length -= 1;
            }
            else {
                url = '/users/follow';
                this.followers.length += 1;
                this.followers.list.push(this.userData);
            }
            this.isFollowing = !this.isFollowing;
            yield this._http.POST(url, { _id: this.friendData._id }).toPromise();
        });
    }
    showMembers(members) {
        this.modelMembers = members;
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile/profile.html")).default,
        styles: [""]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/component/project/directory/dir.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/project/directory/dir.component.ts ***!
  \**************************************************************/
/*! exports provided: DirectoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryComponent", function() { return DirectoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/view.service */ "./src/app/services/view.service.ts");





let DirectoryComponent = class DirectoryComponent {
    constructor(_http, _view) {
        this._http = _http;
        this._view = _view;
        this.$projectData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.dirStructure = [];
        this.searchDirStructure = [];
        // NG MODULE
        this.newDirName = '';
        this.searchText = '';
        this.clipboard = '';
    }
    set projectData(data) {
        this.$projectData.next(data);
    }
    ;
    get projectData() {
        return this.$projectData.getValue();
    }
    get openedDir() {
        return this.dirStructure[this.dirStructure.length - 1];
    }
    ngOnInit() {
        this.$projectSubscription = this.$projectData.subscribe(project => {
            if (typeof project !== 'undefined') {
                this.getDir([project.dir])
                    .then(responseArr => {
                    this.dirStructure.push(responseArr[0]);
                    this.getDir(responseArr[0].child)
                        .then(resArr => {
                        this.dirStructure[0].child = resArr;
                        this._view.setObs('loader', 'isVisible', false);
                        console.log(this.dirStructure);
                    });
                });
            }
        });
    }
    ngOnDestroy() {
        this.$projectSubscription.unsubscribe();
    }
    getDir(dirArr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._view.setObs('loader', 'isVisible', true);
            let tasks = [];
            for (const id of dirArr) {
                tasks.push(this._http.GET('/dir/get/' + this.projectData.name + '/' + id)
                    .toPromise());
            }
            return Promise.all(tasks);
        });
    }
    getFile(fileId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._view.setObs('loader', 'isVisible', true);
            return this._http.GET('/dir/get/file/' + this.projectData.name + '/' + fileId).toPromise();
        });
    }
    dirClick(index, searched = false) {
        this._view.setObs('loader', 'isVisible', true);
        let dirInstance = this.openedDir.child[index];
        if (searched) {
            dirInstance = this.searchDirStructure[index];
        }
        if (dirInstance.fileType === 'dir') {
            this.getDir(dirInstance.child)
                .then(dir => {
                this.dirStructure.push({ child: dir, _id: dirInstance._id, fileType: 'dir', name: dirInstance.name });
                this._view.setObs('loader', 'isVisible', false);
            });
        }
        else {
            this.getFile(dirInstance.text)
                .then(file => {
                this.clipboard = file.data.code;
                file.data.code = file.data.code.split(/\r?\n/);
                this.dirStructure.push(Object.assign({}, file.data, { name: dirInstance.name, fileType: dirInstance.fileType, child: [] }));
                this._view.setObs('loader', 'isVisible', false);
            });
        }
    }
    createDir(data) {
        this._view.setObs('loader', 'isVisible', true);
        this._http.POST('/dir/post', Object.assign({}, data, { parentDirId: this.openedDir._id, name: this.projectData.name }))
            .toPromise()
            .then(response => {
            if (!response.success) {
                alert("Error Occured");
            }
            else {
                this.dirStructure.push({ code: data.codeText.split(/\r?\n/), name: data.fileName, fileType: data.fileType, child: [], _id: response.data._id });
            }
            this._view.setObs('loader', 'isVisible', false);
        });
    }
    backDir() {
        this.dirStructure.pop();
    }
    dirJump(to) {
        this.dirStructure = this.dirStructure.slice(0, to + 1);
    }
    copyCode(event) {
        console.log(event.target.innerHTML);
        const element = document.createElement('textarea');
        element.value = this.clipboard;
        document.body.appendChild(element);
        element.select();
        document.execCommand('copy');
        document.body.removeChild(element);
        event.target.innerHTML = "Copied";
        let time = setInterval(function () {
            event.target.innerHTML = "Copy Code";
            clearInterval(time);
        }, 1300);
    }
    // /get/find/:name/:searchText
    searchUsers(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!!text) {
                const dir = yield this._http.GET('/dir/get/find/' + this.projectData.name + '/' + text).toPromise();
                this.searchDirStructure = dir.data;
            }
        });
    }
};
DirectoryComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: src_app_services_view_service__WEBPACK_IMPORTED_MODULE_4__["ViewService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DirectoryComponent.prototype, "freeze", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DirectoryComponent.prototype, "projectData", null);
DirectoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-dir',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dir.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/directory/dir.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dir.scss */ "./src/app/component/project/directory/dir.scss")).default]
    })
], DirectoryComponent);



/***/ }),

/***/ "./src/app/component/project/directory/dir.scss":
/*!******************************************************!*\
  !*** ./src/app/component/project/directory/dir.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border-btn {\n  border: 2px solid #E5E5E5;\n  overflow: hidden;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  width: 50px;\n}\n\n.border-btn:hover {\n  background-color: #eeeeee;\n}\n\n.dir-list {\n  font-size: 13px;\n  color: #414141;\n}\n\n.dir-list .headd {\n  background-color: #FAFAFA;\n}\n\n.dir-list .list-group-item {\n  padding: 11px 16x;\n}\n\n.dir-list :hover {\n  background-color: #FAFAFA;\n}\n\n.dir-list :hover .file-name {\n  text-decoration: underline;\n}\n\n/* Bare bones style for the desired effect */\n\npre.code {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n  /* anything but auto, otherwise fixed layout not guaranteed */\n  white-space: pre-wrap;\n}\n\npre.code::before {\n  counter-reset: linenum;\n}\n\npre.code span.tr {\n  display: table-row;\n  counter-increment: linenum;\n}\n\npre.code span.th {\n  /* used for line numbers */\n  display: table-cell;\n  -ms-user-select: none;\n      user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\npre.code span.th::before {\n  content: counter(linenum);\n  text-align: left;\n  display: block;\n}\n\npre.code span.th {\n  width: 2em;\n  /* or whatever the desired width of the numbers column is */\n}\n\npre.code code {\n  display: table-cell;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvVGVhbXMtTVMvdGVhbXMtbXMvc3JjL2FwcC9jb21wb25lbnQvcHJvamVjdC9kaXJlY3RvcnkvZGlyLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9wcm9qZWN0L2RpcmVjdG9yeS9kaXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSx5QkFBQTtBQ0NSOztBREVJO0VBQ0ksaUJBQUE7QUNBUjs7QURHSTtFQUNJLHlCQUFBO0FDRFI7O0FERVE7RUFDSSwwQkFBQTtBQ0FaOztBRFFBLDRDQUFBOztBQUNBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUFhLDZEQUFBO0VBQ2IscUJBQUE7QUNKSjs7QURNQTtFQUNJLHNCQUFBO0FDSEo7O0FES0E7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FDRko7O0FESUE7RUFBbUIsMEJBQUE7RUFDZixtQkFBQTtFQUNBLHFCQUFBO01BQUEsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUFZLDJEQUFBO0FDR2hCOztBRERBO0VBQ0ksbUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9qZWN0L2RpcmVjdG9yeS9kaXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXItYnRuIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTVFNUU1O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5ib3JkZXItYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XG59XG5cbi5kaXItbGlzdHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM0MTQxNDE7XG4gICAgXG4gICAgLmhlYWRkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcblxuICAgIH1cbiAgICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMTFweCAxNng7XG4gICAgfVxuXG4gICAgOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgICAgICAgLmZpbGUtbmFtZSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cblxuLyogQmFyZSBib25lcyBzdHlsZSBmb3IgdGhlIGRlc2lyZWQgZWZmZWN0ICovXG5wcmUuY29kZSB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTsgLyogYW55dGhpbmcgYnV0IGF1dG8sIG90aGVyd2lzZSBmaXhlZCBsYXlvdXQgbm90IGd1YXJhbnRlZWQgKi9cbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5wcmUuY29kZTo6YmVmb3JlIHtcbiAgICBjb3VudGVyLXJlc2V0OiBsaW5lbnVtO1xufVxucHJlLmNvZGUgc3Bhbi50ciB7XG4gICAgZGlzcGxheTogdGFibGUtcm93O1xuICAgIGNvdW50ZXItaW5jcmVtZW50OiBsaW5lbnVtO1xufVxucHJlLmNvZGUgc3Bhbi50aCB7IC8qIHVzZWQgZm9yIGxpbmUgbnVtYmVycyAqL1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxucHJlLmNvZGUgc3Bhbi50aDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBjb3VudGVyKGxpbmVudW0pO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5wcmUuY29kZSBzcGFuLnRoIHtcbiAgICB3aWR0aDogMmVtOyAvKiBvciB3aGF0ZXZlciB0aGUgZGVzaXJlZCB3aWR0aCBvZiB0aGUgbnVtYmVycyBjb2x1bW4gaXMgKi9cbn1cbnByZS5jb2RlIGNvZGUge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cblxuXG5cblxuIiwiLmJvcmRlci1idG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjRTVFNUU1O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uYm9yZGVyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG59XG5cbi5kaXItbGlzdCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM0MTQxNDE7XG59XG4uZGlyLWxpc3QgLmhlYWRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cbi5kaXItbGlzdCAubGlzdC1ncm91cC1pdGVtIHtcbiAgcGFkZGluZzogMTFweCAxNng7XG59XG4uZGlyLWxpc3QgOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cbi5kaXItbGlzdCA6aG92ZXIgLmZpbGUtbmFtZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBCYXJlIGJvbmVzIHN0eWxlIGZvciB0aGUgZGVzaXJlZCBlZmZlY3QgKi9cbnByZS5jb2RlIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBhbnl0aGluZyBidXQgYXV0bywgb3RoZXJ3aXNlIGZpeGVkIGxheW91dCBub3QgZ3VhcmFudGVlZCAqL1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbnByZS5jb2RlOjpiZWZvcmUge1xuICBjb3VudGVyLXJlc2V0OiBsaW5lbnVtO1xufVxuXG5wcmUuY29kZSBzcGFuLnRyIHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xuICBjb3VudGVyLWluY3JlbWVudDogbGluZW51bTtcbn1cblxucHJlLmNvZGUgc3Bhbi50aCB7XG4gIC8qIHVzZWQgZm9yIGxpbmUgbnVtYmVycyAqL1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxucHJlLmNvZGUgc3Bhbi50aDo6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaW5lbnVtKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnByZS5jb2RlIHNwYW4udGgge1xuICB3aWR0aDogMmVtO1xuICAvKiBvciB3aGF0ZXZlciB0aGUgZGVzaXJlZCB3aWR0aCBvZiB0aGUgbnVtYmVycyBjb2x1bW4gaXMgKi9cbn1cblxucHJlLmNvZGUgY29kZSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59Il19 */");

/***/ }),

/***/ "./src/app/component/project/logs/logs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/project/logs/logs.component.ts ***!
  \**********************************************************/
/*! exports provided: LogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsComponent", function() { return LogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");




let LogsComponent = class LogsComponent {
    constructor(_http) {
        this._http = _http;
        this.$projectNameChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.logs = [];
        this.materialIcons = {
            NewFile: 'insert_drive_file',
            NewMember: 'person_add',
            NewNote: 'post_add',
            Delete: 'delete',
            DeleteMember: 'person_add_disabled',
            EditFile: 'code',
            EditNote: 'notes',
            Dir: 'folder',
            Job: 'work_outline',
            Project: 'domain'
        };
    }
    set projectName(data) {
        this.$projectNameChange.next(data);
    }
    ngOnInit() {
        this.$s1 = this.$projectNameChange.subscribe(projectName => {
            this.fetchLogData(projectName);
        });
    }
    ngOnDestroy() {
        this.$s1.unsubscribe();
    }
    fetchLogData(projectName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const logsData = yield this._http.GET('/projects/' + projectName + '/logs').toPromise();
            this.logs = logsData.data;
        });
    }
};
LogsComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LogsComponent.prototype, "projectName", null);
LogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logs.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/logs/logs.html")).default
    })
], LogsComponent);



/***/ }),

/***/ "./src/app/component/project/models/createFile/createFile.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/component/project/models/createFile/createFile.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateFileModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFileModelComponent", function() { return CreateFileModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreateFileModelComponent = class CreateFileModelComponent {
    constructor() {
        this.createFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formData = {
            fileName: '',
            fileType: '.js',
            codeText: ''
        };
        this.fileExt = ['.js', '.php', '.java', '.txt', '.html', '.scss', '.sass', '.css', '.ts', '.c', '.cpp', '.json', '.py'];
    }
    ngOnInit() { }
    newFile() {
        this.createFile.emit(this.formData);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CreateFileModelComponent.prototype, "createFile", void 0);
CreateFileModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-file-model',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createFile.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/models/createFile/createFile.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createFile.scss */ "./src/app/component/project/models/createFile/createFile.scss")).default]
    })
], CreateFileModelComponent);



/***/ }),

/***/ "./src/app/component/project/models/createFile/createFile.scss":
/*!*********************************************************************!*\
  !*** ./src/app/component/project/models/createFile/createFile.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9qZWN0L21vZGVscy9jcmVhdGVGaWxlL2NyZWF0ZUZpbGUuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/project/models/notesAction/notesAction.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/component/project/models/notesAction/notesAction.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotesActionModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesActionModelComponent", function() { return NotesActionModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotesActionModelComponent = class NotesActionModelComponent {
    constructor() {
        this.name = '';
        this.message = '';
        this.group = '';
        this.crossOff = false;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeleteJob = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    groupTagClick(groupName) {
        this.group = groupName;
    }
    edit() {
        this.onEdit.emit({
            group: this.group,
            stickeyName: this.name,
            message: this.message,
            crossOff: this.crossOff
        });
    }
    delete() {
        this.onDelete.emit(true);
    }
    deleteJobDone() {
        this.onDeleteJob.emit(true);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotesActionModelComponent.prototype, "groups", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotesActionModelComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotesActionModelComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotesActionModelComponent.prototype, "group", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NotesActionModelComponent.prototype, "crossOff", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NotesActionModelComponent.prototype, "onEdit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NotesActionModelComponent.prototype, "onDelete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NotesActionModelComponent.prototype, "onDeleteJob", void 0);
NotesActionModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notes-action-model',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notesAction.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/models/notesAction/notesAction.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notesAction.scss */ "./src/app/component/project/models/notesAction/notesAction.scss")).default]
    })
], NotesActionModelComponent);



/***/ }),

/***/ "./src/app/component/project/models/notesAction/notesAction.scss":
/*!***********************************************************************!*\
  !*** ./src/app/component/project/models/notesAction/notesAction.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9qZWN0L21vZGVscy9ub3Rlc0FjdGlvbi9ub3Rlc0FjdGlvbi5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/project/project.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/project/project.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/view.service */ "./src/app/services/view.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");







let ProjectComponent = class ProjectComponent {
    constructor(activatedRoute, _data, _view, _http) {
        this.activatedRoute = activatedRoute;
        this._data = _data;
        this._view = _view;
        this._http = _http;
        this.projectName = '';
        this.userImages = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].userImages;
    }
    ngOnInit() {
        this.projectName = this.activatedRoute.snapshot.paramMap.get("name");
        this._data.refresh();
        this._view.setObs('navbar', 'isVisible', true);
        this.$userData = this._data.getUser()
            .subscribe(me => {
            this.userData = me;
        });
        this._http.GET('/projects/get/' + this.projectName)
            .toPromise()
            .then(project => {
            this.projectData = project.data;
            this.userInProject = project.userInProject;
            console.log(!!this.userInProject);
        });
    }
    settings() {
        this._http.REDIRECT('project/' + this.projectName + '/settings');
    }
    ngOnDestroy() {
        this.$userData.unsubscribe();
    }
    OnstatusChanged() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this._http.POST('/projects/update/member/details', {
                value: this.userInProject.status.value,
                name: this.projectName
            })
                .toPromise();
        });
    }
};
ProjectComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: src_app_services_view_service__WEBPACK_IMPORTED_MODULE_4__["ViewService"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] }
];
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/project.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.scss */ "./src/app/component/project/project.scss")).default]
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/component/project/project.scss":
/*!************************************************!*\
  !*** ./src/app/component/project/project.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9qZWN0L3Byb2plY3Quc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/project/settings/settings.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/project/settings/settings.component.ts ***!
  \******************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/view.service */ "./src/app/services/view.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");







let SettingsComponent = class SettingsComponent {
    constructor(_http, _view, activatedRoute, _data) {
        this._http = _http;
        this._view = _view;
        this.activatedRoute = activatedRoute;
        this._data = _data;
        this.projectName = '';
        this.role = 'Developer';
        this.membersAdded = [];
        this.membersName = new Set();
        this.userImages = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].userImages;
        this.formsData = {
            private: true,
            discription: '',
            endingDate: Date.now(),
            isFreeze: true,
        };
    }
    set project(projectData) {
        const { members } = projectData;
        for (const member of members) {
            this.membersName.add(member.name);
        }
        this.projectData = projectData;
        this.formsData = {
            private: projectData.private,
            discription: projectData.discription,
            endingDate: projectData.endingDate,
            isFreeze: projectData.freeze.isFreeze,
        };
        this.resetState = Object.assign({}, projectData);
    }
    get project() { return this.projectData; }
    ngOnInit() {
        this._data.refresh();
        this.projectName = this.activatedRoute.snapshot.paramMap.get("name");
        this.fetchProject();
    }
    onMemberAdded(membersAdded) {
        this.membersAdded = [...membersAdded];
    }
    reset() {
        this.project = this.resetState;
    }
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const payload = Object.assign({ name: this.projectName }, this.formsData);
                yield this._http.POST('/projects/update', payload).toPromise();
            }
            catch (err) {
                console.log(err);
                alert("Error Occured Saving");
            }
        });
    }
    // Will be using behaviour Subject in it.
    fetchProject() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._view.setObs('loader', 'isVisible', true);
            const response = yield this._http.GET('/projects/get/' + this.projectName).toPromise();
            this.project = response.data;
            this.userInProject = response.userInProject;
            this.role = response.userInProject.permission;
            this._view.setObs('loader', 'isVisible', false);
        });
    }
    addNewMembers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this._view.setObs('loader', 'isVisible', true);
                let promisArr = [];
                for (const member of this.membersAdded) {
                    promisArr.push(this._http.POST('/projects/post/member', { member: { name: member.userName, permission: 'Developer' }, name: this.projectName }).toPromise());
                }
                yield Promise.all(promisArr);
                for (const member of this.membersAdded) {
                    this.membersName.add(member.userName);
                    member.name = member.userName;
                    member.permission = "Developer";
                    this.projectData.members.push(member);
                }
                this._view.setObs('loader', 'isVisible', false);
            }
            catch (err) {
                console.log(err);
                alert("error occured");
                this._view.setObs('loader', 'isVisible', false);
            }
        });
    }
    deleteUser(member) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!confirm('Are you sure you want to remove this user?'))
                return;
            yield this._http.POST('/projects/delete/member', { memberName: member.name, name: this.projectName }).toPromise();
            this.fetchProject();
            this.membersName.delete(member.name);
        });
    }
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!confirm("Are you sure you want to delete this project"))
                return;
            yield this._http.POST('/projects/delete', { name: this.projectName }).toPromise();
            this._http.REDIRECT('/home');
        });
    }
    changePermission(value, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!confirm('Are you sure you want to change permissions of this user?'))
                return;
            const member = this.projectData.members[index];
            console.log(value);
            const payload = {
                member: {
                    name: member.name,
                    permission: value
                },
                name: this.projectName
            };
            yield this._http.POST('/projects/update/member', payload).toPromise();
            member.permission = value;
        });
    }
    changeAvatar(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this._http.POST('/projects/update/member/details', {
                avatar: index,
                name: this.projectName
            })
                .toPromise();
            this.userInProject.avatar = index;
        });
    }
    quit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!confirm('Are you sure you want to leave this project ?'))
                return;
            const res = yield this._http.POST('/projects/quit', { name: this.projectName }).toPromise();
            this._http.REDIRECT('home');
        });
    }
};
SettingsComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: src_app_services_view_service__WEBPACK_IMPORTED_MODULE_3__["ViewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/settings/settings.html")).default,
        styles: [""]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/component/project/tasks/tasks.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/project/tasks/tasks.component.ts ***!
  \************************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let TasksComponent = class TasksComponent {
    constructor(_http) {
        this._http = _http;
        this.$projectData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.notes = [[]];
        this.groups = new Set();
        this.role = 'Developer';
        this.groupIndexOnFocus = 0;
        this.noteIndexOnFocus = 0;
        this.jobClaimIndex = 0;
    }
    set projectData(data) {
        this.$projectData.next(data);
    }
    get projectData() {
        return this.$projectData.getValue();
    }
    ngOnInit() {
        this.$projectSubscription = this.$projectData.subscribe(data => {
            if (data !== undefined) {
                this.fetchNotes();
            }
        });
    }
    ngOnDestroy() {
        this.$projectSubscription.unsubscribe();
    }
    fetchNotes() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const response = yield this._http.GET('/projects/' + this.projectData.name + '/stickey').toPromise();
            const rawNotes = response.data.stickey;
            console.log(rawNotes);
            for (const note of rawNotes) {
                this.groups.add(note.group);
                const index = [...this.groups].indexOf(note.group);
                if (this.notes[index] === undefined) {
                    this.notes.push([note]);
                }
                else {
                    this.notes[index].push(note);
                }
            }
        });
    }
    onEdit(payload) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.groupIndexOnFocus > -1) {
                let noteOnFocus = this.notes[this.groupIndexOnFocus][this.noteIndexOnFocus];
                const response = yield this._http.POST('/projects/stickey/update', Object.assign({}, payload, { stickeyId: noteOnFocus._id, name: this.projectData.name })).toPromise();
                if (response.success) {
                    const domChange = Object.assign({}, payload, { _id: noteOnFocus._id, name: payload.stickeyName, timeStamp: noteOnFocus.timeStamp, request: noteOnFocus.request });
                    if (noteOnFocus.group === payload.group) {
                        this.notes[this.groupIndexOnFocus][this.noteIndexOnFocus] = domChange;
                    }
                    else {
                        // Change the group (Now move it to sorted position)
                        this.notes[this.groupIndexOnFocus].splice(this.noteIndexOnFocus, 1);
                        if (this.groups.has(domChange.group)) {
                            const groupIndex = [...this.groups].indexOf(domChange.group);
                            this.notes[groupIndex].push(domChange);
                        }
                        else {
                            this.groups.add(payload.group);
                            this.notes.push([domChange]);
                        }
                    }
                }
            }
            else {
                const newNote = yield this._http.POST('/projects/stickey/post', Object.assign({}, payload, { name: this.projectData.name })).toPromise();
                if (newNote.success) {
                    const domChange = Object.assign({}, newNote.data);
                    if (this.groups.has(domChange.group)) {
                        const groupIndex = [...this.groups].indexOf(domChange.group);
                        this.notes[groupIndex].push(domChange);
                    }
                    else {
                        this.groups.add(domChange.group);
                        this.notes.push([domChange]);
                    }
                }
            }
        });
    }
    crossOff(x, y) {
        this.setFocus(x, y);
        let payload = Object.assign({}, this.notes[this.groupIndexOnFocus][this.noteIndexOnFocus]);
        payload.crossOff = !payload.crossOff;
        this.onEdit(Object.assign({}, payload, { stickeyName: payload.name }));
    }
    requestDonetask(x, y) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let focusNote = this.notes[x][y];
            // console.log(focusNote.request.indexOf(this.userName))
            console.log((focusNote.request.indexOf([this.userName])));
            let payload = {
                name: this.projectData.name,
                stickeyId: focusNote._id
            };
            if (focusNote.request.includes(this.userName)) {
                const response = yield this._http.POST('/projects/stickey/delete/request', Object.assign({}, payload, { userName: this.userName })).toPromise();
                if (response.success) {
                    console.log(this.userName);
                    focusNote.request.splice(focusNote.request.indexOf(this.userName), 1);
                }
            }
            else {
                const response = yield this._http.POST('/projects/stickey/update/request', payload).toPromise();
                if (response.success) {
                    focusNote.request.push(this.userName);
                }
            }
        });
    }
    onDelete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const noteOnFocus = this.notes[this.groupIndexOnFocus][this.noteIndexOnFocus];
            const deleted = yield this._http.POST('/projects/stickey/delete', { stickeyId: noteOnFocus, name: this.projectData.name }).toPromise();
            if (deleted.success) {
                this.notes[this.groupIndexOnFocus].splice(this.noteIndexOnFocus, 1);
            }
        });
    }
    onDeleteJob() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const noteOnFocus = this.notes[this.groupIndexOnFocus][this.noteIndexOnFocus];
            const paylaod = {
                stickeyId: noteOnFocus._id,
                userName: noteOnFocus.request[this.jobClaimIndex],
                name: this.projectData.name
            };
            const deleteReq = yield this._http.POST('/projects/stickey/delete/request', paylaod).toPromise();
            noteOnFocus.request.splice(this.jobClaimIndex, 1);
        });
    }
    addClick() {
        this.groupIndexOnFocus = -1;
        this.noteIndexOnFocus = -1;
    }
    setFocus(x, y, z = 0) {
        this.groupIndexOnFocus = x;
        this.noteIndexOnFocus = y;
        this.jobClaimIndex = z;
    }
};
TasksComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TasksComponent.prototype, "userName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TasksComponent.prototype, "projectData", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TasksComponent.prototype, "role", void 0);
TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasks.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/tasks/tasks.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasks.scss */ "./src/app/component/project/tasks/tasks.scss")).default]
    })
], TasksComponent);



/***/ }),

/***/ "./src/app/component/project/tasks/tasks.scss":
/*!****************************************************!*\
  !*** ./src/app/component/project/tasks/tasks.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".crossOff {\n  opacity: 0.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvVGVhbXMtTVMvdGVhbXMtbXMvc3JjL2FwcC9jb21wb25lbnQvcHJvamVjdC90YXNrcy90YXNrcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvcHJvamVjdC90YXNrcy90YXNrcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3Byb2plY3QvdGFza3MvdGFza3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcm9zc09mZiB7XG4gICAgb3BhY2l0eTogMC4yO1xufSIsIi5jcm9zc09mZiB7XG4gIG9wYWNpdHk6IDAuMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/shared/avatarList/avatar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/shared/avatarList/avatar.component.ts ***!
  \*****************************************************************/
/*! exports provided: AvatarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarListComponent", function() { return AvatarListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AvatarListComponent = class AvatarListComponent {
    constructor() {
        this.images = [];
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AvatarListComponent.prototype, "images", void 0);
AvatarListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-avatar-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./avatar.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/avatarList/avatar.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./avatar.scss */ "./src/app/component/shared/avatarList/avatar.scss")).default]
    })
], AvatarListComponent);



/***/ }),

/***/ "./src/app/component/shared/avatarList/avatar.scss":
/*!*********************************************************!*\
  !*** ./src/app/component/shared/avatarList/avatar.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaGFyZWQvYXZhdGFyTGlzdC9hdmF0YXIuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/shared/chat/chat.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/shared/chat/chat.component.ts ***!
  \*********************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatComponent = class ChatComponent {
    constructor() { }
    ngOnInit() { }
};
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/chat/chat.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.scss */ "./src/app/component/shared/chat/chat.scss")).default]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/component/shared/chat/chat.scss":
/*!*************************************************!*\
  !*** ./src/app/component/shared/chat/chat.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaGFyZWQvY2hhdC9jaGF0LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/shared/checklist/checklist.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/component/shared/checklist/checklist.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChecklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistComponent", function() { return ChecklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChecklistComponent = class ChecklistComponent {
    constructor() { }
    ngOnInit() { }
};
ChecklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checklist-custom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checklist.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/checklist/checklist.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checklist.scss */ "./src/app/component/shared/checklist/checklist.scss")).default]
    })
], ChecklistComponent);



/***/ }),

/***/ "./src/app/component/shared/checklist/checklist.scss":
/*!***********************************************************!*\
  !*** ./src/app/component/shared/checklist/checklist.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#checklist {\n  --background: #ffffff;\n  --text: #414856;\n  --check: #4F29F0;\n  --disabled: #C3C8DE;\n  --width: 100px;\n  --height: 140px;\n  --border-radius: 10px;\n  background: var(--background);\n  width: var(--width);\n  height: var(--height);\n  border-radius: var(--border-radius);\n  position: relative;\n  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);\n  padding: 30px 45px;\n  display: grid;\n  grid-template-columns: 30px auto;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#checklist label {\n  color: var(--text);\n  position: relative;\n  cursor: pointer;\n  display: grid;\n  -webkit-box-align: center;\n          align-items: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  -webkit-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n#checklist label::before, #checklist label::after {\n  content: \"\";\n  position: absolute;\n}\n#checklist label::before {\n  height: 2px;\n  width: 8px;\n  left: -27px;\n  background: var(--check);\n  border-radius: 2px;\n  -webkit-transition: background 0.3s ease;\n  transition: background 0.3s ease;\n}\n#checklist label:after {\n  height: 4px;\n  width: 4px;\n  top: 8px;\n  left: -25px;\n  border-radius: 50%;\n}\n#checklist input[type=checkbox] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  position: relative;\n  height: 15px;\n  width: 15px;\n  outline: none;\n  border: 0;\n  margin: 0 15px 0 0;\n  cursor: pointer;\n  background: var(--background);\n  display: grid;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#checklist input[type=checkbox]::before, #checklist input[type=checkbox]::after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  top: auto;\n  background: var(--check);\n  border-radius: 2px;\n}\n#checklist input[type=checkbox]::before {\n  width: 0px;\n  right: 60%;\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n}\n#checklist input[type=checkbox]::after {\n  width: 0px;\n  left: 40%;\n  -webkit-transform-origin: left bottom;\n          transform-origin: left bottom;\n}\n#checklist input[type=checkbox]:checked::before {\n  -webkit-animation: check-01 0.4s ease forwards;\n          animation: check-01 0.4s ease forwards;\n}\n#checklist input[type=checkbox]:checked::after {\n  -webkit-animation: check-02 0.4s ease forwards;\n          animation: check-02 0.4s ease forwards;\n}\n#checklist input[type=checkbox]:checked + label {\n  color: var(--disabled);\n  -webkit-animation: move 0.3s ease 0.1s forwards;\n          animation: move 0.3s ease 0.1s forwards;\n}\n#checklist input[type=checkbox]:checked + label::before {\n  background: var(--disabled);\n  -webkit-animation: slice 0.4s ease forwards;\n          animation: slice 0.4s ease forwards;\n}\n#checklist input[type=checkbox]:checked + label::after {\n  -webkit-animation: firework 0.5s ease forwards 0.1s;\n          animation: firework 0.5s ease forwards 0.1s;\n}\n@-webkit-keyframes move {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n  100% {\n    padding-right: 4px;\n  }\n}\n@keyframes move {\n  50% {\n    padding-left: 8px;\n    padding-right: 0px;\n  }\n  100% {\n    padding-right: 4px;\n  }\n}\n@-webkit-keyframes slice {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n@keyframes slice {\n  60% {\n    width: 100%;\n    left: 4px;\n  }\n  100% {\n    width: 100%;\n    left: -2px;\n    padding-left: 0;\n  }\n}\n@-webkit-keyframes check-01 {\n  0% {\n    width: 4px;\n    top: auto;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  100% {\n    width: 5px;\n    top: 8px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n}\n@keyframes check-01 {\n  0% {\n    width: 4px;\n    top: auto;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  100% {\n    width: 5px;\n    top: 8px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n}\n@-webkit-keyframes check-02 {\n  0% {\n    width: 4px;\n    top: auto;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n  100% {\n    width: 10px;\n    top: 8px;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n}\n@keyframes check-02 {\n  0% {\n    width: 4px;\n    top: auto;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  50% {\n    width: 0px;\n    top: auto;\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  51% {\n    width: 0px;\n    top: 8px;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n  100% {\n    width: 10px;\n    top: 8px;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n}\n@-webkit-keyframes firework {\n  0% {\n    opacity: 1;\n    box-shadow: 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    box-shadow: 0 -15px 0 0px #4F29F0, 14px -8px 0 0px #4F29F0, 14px 8px 0 0px #4F29F0, 0 15px 0 0px #4F29F0, -14px 8px 0 0px #4F29F0, -14px -8px 0 0px #4F29F0;\n  }\n}\n@keyframes firework {\n  0% {\n    opacity: 1;\n    box-shadow: 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0, 0 0 0 -2px #4F29F0;\n  }\n  30% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    box-shadow: 0 -15px 0 0px #4F29F0, 14px -8px 0 0px #4F29F0, 14px 8px 0 0px #4F29F0, 0 15px 0 0px #4F29F0, -14px 8px 0 0px #4F29F0, -14px -8px 0 0px #4F29F0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvVGVhbXMtTVMvdGVhbXMtbXMvc3JjL2FwcC9jb21wb25lbnQvc2hhcmVkL2NoZWNrbGlzdC9jaGVja2xpc3Quc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L3NoYXJlZC9jaGVja2xpc3QvY2hlY2tsaXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKO0FEQUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBQ0VOO0FERE07RUFFRSxXQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREFNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUNFUjtBREFNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRVI7QURDSTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ047QURBTTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQ007RUFDRSxVQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7QUNDUjtBRENNO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FDQ1I7QURFUTtFQUNFLDhDQUFBO1VBQUEsc0NBQUE7QUNBVjtBREVRO0VBQ0UsOENBQUE7VUFBQSxzQ0FBQTtBQ0FWO0FERVE7RUFDRSxzQkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUNBVjtBRENVO0VBQ0UsMkJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDQ1o7QURDVTtFQUNFLG1EQUFBO1VBQUEsMkNBQUE7QUNDWjtBRE1FO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VDSEo7RURLRTtJQUNFLGtCQUFBO0VDSEo7QUFDRjtBREpFO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VDSEo7RURLRTtJQUNFLGtCQUFBO0VDSEo7QUFDRjtBREtFO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsU0FBQTtFQ0hKO0VES0U7SUFDRSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RUNISjtBQUNGO0FETkU7RUFDRTtJQUNFLFdBQUE7SUFDQSxTQUFBO0VDSEo7RURLRTtJQUNFLFdBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtFQ0hKO0FBQ0Y7QURLRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFNBQUE7SUFDQSw0QkFBQTtZQUFBLG9CQUFBO0VDSEo7RURLRTtJQUNFLFVBQUE7SUFDQSxTQUFBO0lBQ0EsNEJBQUE7WUFBQSxvQkFBQTtFQ0hKO0VES0U7SUFDRSxVQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNISjtFREtFO0lBQ0UsVUFBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0VDSEo7QUFDRjtBRGpCRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFNBQUE7SUFDQSw0QkFBQTtZQUFBLG9CQUFBO0VDSEo7RURLRTtJQUNFLFVBQUE7SUFDQSxTQUFBO0lBQ0EsNEJBQUE7WUFBQSxvQkFBQTtFQ0hKO0VES0U7SUFDRSxVQUFBO0lBQ0EsUUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNISjtFREtFO0lBQ0UsVUFBQTtJQUNBLFFBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0VDSEo7QUFDRjtBREtFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsU0FBQTtJQUNBLDRCQUFBO1lBQUEsb0JBQUE7RUNISjtFREtFO0lBQ0UsVUFBQTtJQUNBLFNBQUE7SUFDQSw0QkFBQTtZQUFBLG9CQUFBO0VDSEo7RURLRTtJQUNFLFVBQUE7SUFDQSxRQUFBO0lBQ0EsaUNBQUE7WUFBQSx5QkFBQTtFQ0hKO0VES0U7SUFDRSxXQUFBO0lBQ0EsUUFBQTtJQUNBLGlDQUFBO1lBQUEseUJBQUE7RUNISjtBQUNGO0FEakJFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsU0FBQTtJQUNBLDRCQUFBO1lBQUEsb0JBQUE7RUNISjtFREtFO0lBQ0UsVUFBQTtJQUNBLFNBQUE7SUFDQSw0QkFBQTtZQUFBLG9CQUFBO0VDSEo7RURLRTtJQUNFLFVBQUE7SUFDQSxRQUFBO0lBQ0EsaUNBQUE7WUFBQSx5QkFBQTtFQ0hKO0VES0U7SUFDRSxXQUFBO0lBQ0EsUUFBQTtJQUNBLGlDQUFBO1lBQUEseUJBQUE7RUNISjtBQUNGO0FES0U7RUFDRTtJQUNFLFVBQUE7SUFDQSxrSUFBQTtFQ0hKO0VES0U7SUFDRSxVQUFBO0VDSEo7RURLRTtJQUNFLFVBQUE7SUFDQSwySkFBQTtFQ0hKO0FBQ0Y7QURSRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGtJQUFBO0VDSEo7RURLRTtJQUNFLFVBQUE7RUNISjtFREtFO0lBQ0UsVUFBQTtJQUNBLDJKQUFBO0VDSEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaGFyZWQvY2hlY2tsaXN0L2NoZWNrbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoZWNrbGlzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tdGV4dDogIzQxNDg1NjtcbiAgICAtLWNoZWNrOiAjNEYyOUYwO1xuICAgIC0tZGlzYWJsZWQ6ICNDM0M4REU7XG4gICAgLS13aWR0aDogMTAwcHg7XG4gICAgLS1oZWlnaHQ6IDE0MHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICB3aWR0aDogdmFyKC0td2lkdGgpO1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgjNDE0ODU2LCAwLjA1KTtcbiAgICBwYWRkaW5nOiAzMHB4IDQ1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxhYmVsIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2U7XG4gICAgICAmOjpiZWZvcmUsXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6XCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIGxlZnQ6IC0yN3B4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTsgXG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgIHRvcDogOHB4O1xuICAgICAgICBsZWZ0OiAtMjVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIH1cbiAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICY6OmJlZm9yZSxcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDpcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgfVxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgcmlnaHQ6IDYwJTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICAgICAgfVxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICBsZWZ0OiA0MCU7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgICAgfVxuICAgICAgJjpjaGVja2VkIHtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBhbmltYXRpb246IGNoZWNrLTAxIC40cyBlYXNlIGZvcndhcmRzO1xuICAgICAgICB9XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBhbmltYXRpb246IGNoZWNrLTAyIC40cyBlYXNlIGZvcndhcmRzO1xuICAgICAgICB9XG4gICAgICAgICsgbGFiZWwge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kaXNhYmxlZCk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBtb3ZlIC4zcyBlYXNlIC4xcyBmb3J3YXJkcztcbiAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGlzYWJsZWQpO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGljZSAuNHMgZWFzZSBmb3J3YXJkcztcbiAgICAgICAgICB9XG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmaXJld29yayAuNXMgZWFzZSBmb3J3YXJkcyAuMXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIG1vdmUge1xuICAgIDUwJSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc2xpY2Uge1xuICAgIDYwJSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxlZnQ6IDRweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgY2hlY2stMDEge1xuICAgIDAlIHtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHdpZHRoOiAwcHg7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG4gICAgNTElIHtcbiAgICAgIHdpZHRoOiAwcHg7XG4gICAgICB0b3A6IDhweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB3aWR0aDogNXB4O1xuICAgICAgdG9wOiA4cHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgY2hlY2stMDIge1xuICAgIDAlIHtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHdpZHRoOiAwcHg7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG4gICAgNTElIHtcbiAgICAgIHdpZHRoOiAwcHg7XG4gICAgICB0b3A6IDhweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICB0b3A6IDhweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZmlyZXdvcmsge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAtMnB4ICM0RjI5RjAsIDAgMCAwIC0ycHggIzRGMjlGMCwgMCAwIDAgLTJweCAjNEYyOUYwLCAwIDAgMCAtMnB4ICM0RjI5RjAsIDAgMCAwIC0ycHggIzRGMjlGMCwgMCAwIDAgLTJweCAjNEYyOUYwO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgYm94LXNoYWRvdzogMCAtMTVweCAwIDBweCAjNEYyOUYwLCAxNHB4IC04cHggMCAwcHggIzRGMjlGMCwgMTRweCA4cHggMCAwcHggIzRGMjlGMCwgMCAxNXB4IDAgMHB4ICM0RjI5RjAsIC0xNHB4IDhweCAwIDBweCAjNEYyOUYwLCAtMTRweCAtOHB4IDAgMHB4ICM0RjI5RjA7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgIiwiI2NoZWNrbGlzdCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS10ZXh0OiAjNDE0ODU2O1xuICAtLWNoZWNrOiAjNEYyOUYwO1xuICAtLWRpc2FibGVkOiAjQzNDOERFO1xuICAtLXdpZHRoOiAxMDBweDtcbiAgLS1oZWlnaHQ6IDE0MHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICB3aWR0aDogdmFyKC0td2lkdGgpO1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoNjUsIDcyLCA4NiwgMC4wNSk7XG4gIHBhZGRpbmc6IDMwcHggNDVweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jY2hlY2tsaXN0IGxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG59XG4jY2hlY2tsaXN0IGxhYmVsOjpiZWZvcmUsICNjaGVja2xpc3QgbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuI2NoZWNrbGlzdCBsYWJlbDo6YmVmb3JlIHtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiA4cHg7XG4gIGxlZnQ6IC0yN3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGVjayk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG4jY2hlY2tsaXN0IGxhYmVsOmFmdGVyIHtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiA0cHg7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAtMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuI2NoZWNrbGlzdCBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2NoZWNrbGlzdCBpbnB1dFt0eXBlPWNoZWNrYm94XTo6YmVmb3JlLCAjY2hlY2tsaXN0IGlucHV0W3R5cGU9Y2hlY2tib3hdOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAycHg7XG4gIHRvcDogYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hlY2spO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4jY2hlY2tsaXN0IGlucHV0W3R5cGU9Y2hlY2tib3hdOjpiZWZvcmUge1xuICB3aWR0aDogMHB4O1xuICByaWdodDogNjAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG59XG4jY2hlY2tsaXN0IGlucHV0W3R5cGU9Y2hlY2tib3hdOjphZnRlciB7XG4gIHdpZHRoOiAwcHg7XG4gIGxlZnQ6IDQwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG59XG4jY2hlY2tsaXN0IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6OmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogY2hlY2stMDEgMC40cyBlYXNlIGZvcndhcmRzO1xufVxuI2NoZWNrbGlzdCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkOjphZnRlciB7XG4gIGFuaW1hdGlvbjogY2hlY2stMDIgMC40cyBlYXNlIGZvcndhcmRzO1xufVxuI2NoZWNrbGlzdCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwge1xuICBjb2xvcjogdmFyKC0tZGlzYWJsZWQpO1xuICBhbmltYXRpb246IG1vdmUgMC4zcyBlYXNlIDAuMXMgZm9yd2FyZHM7XG59XG4jY2hlY2tsaXN0IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGlzYWJsZWQpO1xuICBhbmltYXRpb246IHNsaWNlIDAuNHMgZWFzZSBmb3J3YXJkcztcbn1cbiNjaGVja2xpc3QgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XG4gIGFuaW1hdGlvbjogZmlyZXdvcmsgMC41cyBlYXNlIGZvcndhcmRzIDAuMXM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZSB7XG4gIDUwJSB7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGljZSB7XG4gIDYwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogNHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IC0ycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNoZWNrLTAxIHtcbiAgMCUge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgdG9wOiBhdXRvO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICB0b3A6IGF1dG87XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgNTElIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIHRvcDogOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogNXB4O1xuICAgIHRvcDogOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBjaGVjay0wMiB7XG4gIDAlIHtcbiAgICB3aWR0aDogNHB4O1xuICAgIHRvcDogYXV0bztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgdG9wOiBhdXRvO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUxJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICB0b3A6IDhweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIHRvcDogOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmlyZXdvcmsge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAtMnB4ICM0RjI5RjAsIDAgMCAwIC0ycHggIzRGMjlGMCwgMCAwIDAgLTJweCAjNEYyOUYwLCAwIDAgMCAtMnB4ICM0RjI5RjAsIDAgMCAwIC0ycHggIzRGMjlGMCwgMCAwIDAgLTJweCAjNEYyOUYwO1xuICB9XG4gIDMwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJveC1zaGFkb3c6IDAgLTE1cHggMCAwcHggIzRGMjlGMCwgMTRweCAtOHB4IDAgMHB4ICM0RjI5RjAsIDE0cHggOHB4IDAgMHB4ICM0RjI5RjAsIDAgMTVweCAwIDBweCAjNEYyOUYwLCAtMTRweCA4cHggMCAwcHggIzRGMjlGMCwgLTE0cHggLThweCAwIDBweCAjNEYyOUYwO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/component/shared/loading/loading.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/shared/loading/loading.component.ts ***!
  \***************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/view.service */ "./src/app/services/view.service.ts");



let LoadingComponent = class LoadingComponent {
    constructor(_view) {
        this._view = _view;
        this.isVisible = false;
    }
    ngOnInit() {
        this._view.getObs()
            .subscribe(data => {
            this.isVisible = data.loader.isVisible;
        });
    }
};
LoadingComponent.ctorParameters = () => [
    { type: src_app_services_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoadingComponent.prototype, "isVisible", void 0);
LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/loading/loading.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading.scss */ "./src/app/component/shared/loading/loading.scss")).default]
    })
], LoadingComponent);



/***/ }),

/***/ "./src/app/component/shared/loading/loading.scss":
/*!*******************************************************!*\
  !*** ./src/app/component/shared/loading/loading.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes up {\n  0% {\n    top: -112.5px;\n  }\n  100% {\n    top: 112.5px;\n  }\n}\n@keyframes up {\n  0% {\n    top: -112.5px;\n  }\n  100% {\n    top: 112.5px;\n  }\n}\n@-webkit-keyframes down {\n  0% {\n    bottom: 112.5px;\n  }\n  100% {\n    bottom: -112.5px;\n  }\n}\n@keyframes down {\n  0% {\n    bottom: 112.5px;\n  }\n  100% {\n    bottom: -112.5px;\n  }\n}\n@-webkit-keyframes rotate {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  from {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes jump {\n  0% {\n    bottom: -25px;\n  }\n  50% {\n    bottom: -25px;\n  }\n  100% {\n    bottom: 112.5px;\n  }\n}\n@keyframes jump {\n  0% {\n    bottom: -25px;\n  }\n  50% {\n    bottom: -25px;\n  }\n  100% {\n    bottom: 112.5px;\n  }\n}\n@-webkit-keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  51% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  51% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes spin1 {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  75% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin1 {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  75% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes spin2 {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  75% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n@keyframes spin2 {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  75% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n@-webkit-keyframes dolphin {\n  0% {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  75% {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  100% {\n    -webkit-transform: rotate(-70deg);\n            transform: rotate(-70deg);\n  }\n}\n@keyframes dolphin {\n  0% {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  75% {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  100% {\n    -webkit-transform: rotate(-70deg);\n            transform: rotate(-70deg);\n  }\n}\n@-webkit-keyframes splash {\n  0% {\n    -webkit-transform: scale(1, 0);\n            transform: scale(1, 0);\n  }\n  75% {\n    -webkit-transform: scale(1, 0);\n            transform: scale(1, 0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@keyframes splash {\n  0% {\n    -webkit-transform: scale(1, 0);\n            transform: scale(1, 0);\n  }\n  75% {\n    -webkit-transform: scale(1, 0);\n            transform: scale(1, 0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n@-webkit-keyframes slide1 {\n  0% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n  52% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n  100% {\n    -webkit-transform: translate(-62.5px);\n            transform: translate(-62.5px);\n  }\n}\n@keyframes slide1 {\n  0% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n  52% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n  100% {\n    -webkit-transform: translate(-62.5px);\n            transform: translate(-62.5px);\n  }\n}\n@-webkit-keyframes slide2 {\n  0% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n  52% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n  100% {\n    -webkit-transform: translate(62.5px);\n            transform: translate(62.5px);\n  }\n}\n@keyframes slide2 {\n  0% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n  52% {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n  100% {\n    -webkit-transform: translate(62.5px);\n            transform: translate(62.5px);\n  }\n}\n#blur {\n  opacity: 0.8;\n  background-color: black;\n}\n.bapp {\n  width: 100%;\n  position: fixed;\n  height: 100%;\n  padding: 0;\n  top: 0;\n  z-index: 1;\n}\n.container {\n  overflow: hidden;\n  position: relative;\n  width: 500px;\n  height: 250px;\n  top: 50%;\n  left: 50%;\n  margin-left: -250px;\n  margin-top: -125px;\n  z-index: 2;\n}\n.container .subcontainer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: rotate 4s linear infinite;\n          animation: rotate 4s linear infinite;\n}\n.container .subcontainer *, .container .subcontainer *:before, .container .subcontainer *:after {\n  position: absolute;\n  content: \"\";\n  display: block;\n}\n.container .subcontainer .half {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.container .subcontainer .half .splash {\n  height: 50px;\n  width: 125px;\n  bottom: 0;\n  margin-bottom: -3px;\n  left: 50%;\n  margin-left: -62.5px;\n  overflow: hidden;\n}\n.container .subcontainer .half .splash .splash-container {\n  height: 100%;\n  width: 100%;\n  -webkit-transform-origin: bottom center;\n          transform-origin: bottom center;\n}\n.container .subcontainer .half .splash .splash-container .circle {\n  left: 50%;\n  top: 30%;\n  width: 22.7272727273px;\n  height: 22.7272727273px;\n  margin-top: -11.3636363636px;\n  margin-left: -11.3636363636px;\n  border-radius: 50%;\n}\n.container .subcontainer .half .splash .splash-container:before, .container .subcontainer .half .splash .splash-container:after {\n  height: 70%;\n  width: 50%;\n}\n.container .subcontainer .half .splash .splash-container:before {\n  left: 0;\n  bottom: 0;\n  border-bottom-right-radius: 100%;\n  margin-left: -11.3636363636px;\n}\n.container .subcontainer .half .splash .splash-container:after {\n  right: 0;\n  bottom: 0;\n  border-bottom-left-radius: 100%;\n  margin-right: -11.3636363636px;\n}\n.container .subcontainer .half .droplet {\n  width: 25px;\n  height: 25px;\n  left: 50%;\n  margin-left: -12.5px;\n}\n.container .subcontainer .half .droplet:before, .container .subcontainer .half .droplet:after {\n  background-size: 100% 100%;\n}\n.container .subcontainer .half:nth-child(1) {\n  box-shadow: 0 -125px 0 125px #141414;\n  background-color: #141414;\n  margin-top: -25%;\n  -webkit-animation: up 1s infinite alternate ease-in-out;\n          animation: up 1s infinite alternate ease-in-out;\n}\n.container .subcontainer .half:nth-child(1) .splash {\n  -webkit-animation: slide1 1s infinite linear;\n          animation: slide1 1s infinite linear;\n}\n.container .subcontainer .half:nth-child(1) .splash .splash-container {\n  -webkit-animation: splash 1s infinite -0.25s alternate;\n          animation: splash 1s infinite -0.25s alternate;\n}\n.container .subcontainer .half:nth-child(1) .splash .splash-container .circle {\n  background-color: #2092ED;\n}\n.container .subcontainer .half:nth-child(1) .splash .splash-container:before, .container .subcontainer .half:nth-child(1) .splash .splash-container:after {\n  box-shadow: 0 24.7272727273px 0 22.7272727273px #2092ED;\n}\n.container .subcontainer .half:nth-child(1) .droplet {\n  -webkit-animation: jump 1s infinite alternate;\n          animation: jump 1s infinite alternate;\n}\n.container .subcontainer .half:nth-child(1) .droplet:before, .container .subcontainer .half:nth-child(1) .droplet:after {\n  height: 100%;\n  width: 100%;\n}\n.container .subcontainer .half:nth-child(1) .droplet:before {\n  border-radius: 50%;\n  background-color: #2092ED;\n  -webkit-animation: fade 4s infinite;\n          animation: fade 4s infinite;\n}\n.container .subcontainer .half:nth-child(1) .droplet:after {\n  background-image: url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'><path fill='%232092ED' d='M0,10L5,0L10,10Z'/></svg>\");\n  -webkit-animation: fade 4s infinite -2s, spin1 4s infinite -2.5s linear;\n          animation: fade 4s infinite -2s, spin1 4s infinite -2.5s linear;\n}\n.container .subcontainer .half:nth-child(2) {\n  box-shadow: 0 -125px 0 125px #2092ED;\n  bottom: 0;\n  margin-bottom: -25%;\n  background-color: #2092ED;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  -webkit-animation: down 1s infinite alternate ease-in-out;\n          animation: down 1s infinite alternate ease-in-out;\n}\n.container .subcontainer .half:nth-child(2) .splash {\n  -webkit-animation: slide2 1s infinite -1s linear;\n          animation: slide2 1s infinite -1s linear;\n}\n.container .subcontainer .half:nth-child(2) .splash .splash-container {\n  -webkit-animation: splash 1s infinite -1.25s alternate;\n          animation: splash 1s infinite -1.25s alternate;\n}\n.container .subcontainer .half:nth-child(2) .splash .splash-container .circle {\n  background-color: #141414;\n}\n.container .subcontainer .half:nth-child(2) .splash .splash-container:before, .container .subcontainer .half:nth-child(2) .splash .splash-container:after {\n  box-shadow: 0 24.7272727273px 0 22.7272727273px #141414;\n}\n.container .subcontainer .half:nth-child(2) .droplet {\n  -webkit-animation: jump 1s infinite -1s alternate;\n          animation: jump 1s infinite -1s alternate;\n}\n.container .subcontainer .half:nth-child(2) .droplet:before {\n  height: 200%;\n  width: 200%;\n  left: -50%;\n  background-image: url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 419 281' xmlns='http://www.w3.org/2000/svg'><path fill='%23141414' d='m212.0052,5.32781c-7.8024,2.96131 -14.9229,6.90809 -22.0992,10.425c-2.4471,1.19639 -5.22542,3.1008 -7.49191,3.68309c-5.77739,1.47781 -14.81609,-1.10729 -22.179,-1.37699c-18.40649,-0.66899 -30.32219,0.7197 -45.45239,3.05969c-7.08029,1.09351 -14.4105,2.1165 -20.62619,3.9858c-5.3085,1.5984 -11.3964,5.1678 -17.33671,8.16899c-9.3879,4.74719 -15.7815,9.21451 -23.1009,14.93549c-12.2334,9.55801 -19.9362,21.58951 -28.88922,34.80841c-3.90819,5.7702 -9.54024,14.36819 -9.81912,21.1968c-5.175,8.04479 -13.03829,12.9561 -15.01056,24.7347c2.75742,6.88829 9.90351,0.76289 14.20899,-1.5303c3.56133,-1.902 7.39218,-4.1754 10.5492,-5.08739c16.40151,-4.74239 39.25791,2.03699 55.22571,-2.3085c5.6613,-1.5399 10.5633,-4.64761 16.1871,-5.96371c5.3403,-1.25369 9.4242,0.96451 13.2318,2.65201c2.02261,0.89999 4.1541,2.1153 5.9907,3.08309c11.898,6.30601 23.7888,12.9927 39.76289,15.51c12.82021,2.019 23.95889,-1.8318 34.38031,-3.9117c2.646,-0.52859 6.06209,-0.33751 8.06848,-2.6532c-8.31808,-1.9278 -15.22049,-5.2149 -23.90639,-8.7222c-11.4093,-4.6044 -20.2722,-7.7193 -24.5847,-16.96291c5.1069,-1.37251 11.02139,-0.35519 16.3383,0.6c5.80531,1.04041 11.5665,2.01541 17.13629,2.95651c23.5218,3.9714 41.23351,10.63949 59.1387,19.29149c8.69879,4.1988 16.71451,10.0452 24.08551,14.9553c15.0972,10.0665 27.98669,22.56691 40.14209,36.183c5.505,6.16621 10.41599,13.8855 16.38599,21.246c2.60703,3.21811 5.22903,6.8064 8.01901,10.77661c2.66098,3.77579 6.72601,8.4012 7.29001,11.7036c0.633,3.64319 -1.25403,7.64159 -2.202,11.62379c-1.64401,6.9234 -2.853,14.34599 -2.30402,21.45111c0.71701,9.19218 2.72104,18.14415 6.92102,25.1086c1.82098,-1.6629 2.56497,-4.58673 3.50098,-7.26801c4.60199,-6.03394 10.72501,-12.05856 10.87802,-22.10036c12.57001,6.66328 36.98401,6.10312 51.64499,5.9332c4.40698,-0.05275 8.89801,0.4254 12.54898,-1.33243c-7.69797,-4.57968 -13.34998,-10.37592 -20.04297,-16.28682c-10.125,-8.9355 -18.49802,-16.4637 -33.42603,-21.24359c-4.83899,-1.54921 -10.37698,-2.38831 -13.02896,-5.25931c-2.03702,-2.19749 -2.65805,-7.06529 -3.69003,-11.75159c-2.78101,-12.675 -6.39899,-26.1201 -9.621,-36.78511c-9.68097,-32.06039 -24.45297,-60.5544 -44.1084,-82.6842c-9.9585,-11.2218 -21.85529,-20.35889 -34.67789,-30.5202c-2.1915,-3.52379 -6.2955,-8.27941 -7.1451,-13.6548c-0.86821,-5.5335 0.69719,-10.39079 4.03139,-14.10809c7.29239,-5.4585 18.74762,-6.06211 23.7045,-14.23471c-6.47791,-4.78261 -14.51581,-6.1842   -22.4025,-6.96691c-17.04269,-1.6899 -33.0072,-0.37859 -46.2258,4.64072'/></svg>\");\n  -webkit-animation: fade 4s infinite -1s, dolphin 4s infinite -1.5s ease-in-out;\n          animation: fade 4s infinite -1s, dolphin 4s infinite -1.5s ease-in-out;\n}\n.container .subcontainer .half:nth-child(2) .droplet:after {\n  height: 100%;\n  width: 100%;\n  background-color: #141414;\n  -webkit-animation: fade 4s infinite -3s, spin2 4s infinite -3.5s linear;\n          animation: fade 4s infinite -3s, spin2 4s infinite -3.5s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvVGVhbXMtTVMvdGVhbXMtbXMvc3JjL2FwcC9jb21wb25lbnQvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0U7SUFBSyxhQUFBO0VDUEw7RURRQTtJQUFPLFlBQUE7RUNMUDtBQUNGO0FERUE7RUFDRTtJQUFLLGFBQUE7RUNQTDtFRFFBO0lBQU8sWUFBQTtFQ0xQO0FBQ0Y7QURNQTtFQUNFO0lBQUssZUFBQTtFQ0hMO0VESUE7SUFBTyxnQkFBQTtFQ0RQO0FBQ0Y7QURGQTtFQUNFO0lBQUssZUFBQTtFQ0hMO0VESUE7SUFBTyxnQkFBQTtFQ0RQO0FBQ0Y7QURFQTtFQUNFO0lBQU8sNEJBQUE7WUFBQSxvQkFBQTtFQ0NQO0VEQUE7SUFBSyxpQ0FBQTtZQUFBLHlCQUFBO0VDR0w7QUFDRjtBRE5BO0VBQ0U7SUFBTyw0QkFBQTtZQUFBLG9CQUFBO0VDQ1A7RURBQTtJQUFLLGlDQUFBO1lBQUEseUJBQUE7RUNHTDtBQUNGO0FERkE7RUFDRTtJQUFLLGFBQUE7RUNLTDtFREpBO0lBQU0sYUFBQTtFQ09OO0VETkE7SUFBTyxlQUFBO0VDU1A7QUFDRjtBRGJBO0VBQ0U7SUFBSyxhQUFBO0VDS0w7RURKQTtJQUFNLGFBQUE7RUNPTjtFRE5BO0lBQU8sZUFBQTtFQ1NQO0FBQ0Y7QURSQTtFQUNFO0lBQUssVUFBQTtFQ1dMO0VEVkE7SUFBTSxVQUFBO0VDYU47RURaQTtJQUFNLFVBQUE7RUNlTjtFRGRBO0lBQU8sVUFBQTtFQ2lCUDtBQUNGO0FEdEJBO0VBQ0U7SUFBSyxVQUFBO0VDV0w7RURWQTtJQUFNLFVBQUE7RUNhTjtFRFpBO0lBQU0sVUFBQTtFQ2VOO0VEZEE7SUFBTyxVQUFBO0VDaUJQO0FBQ0Y7QURoQkE7RUFDRTtJQUFLLDRCQUFBO1lBQUEsb0JBQUE7RUNtQkw7RURsQkE7SUFBTSw0QkFBQTtZQUFBLG9CQUFBO0VDcUJOO0VEcEJBO0lBQU8saUNBQUE7WUFBQSx5QkFBQTtFQ3VCUDtBQUNGO0FEM0JBO0VBQ0U7SUFBSyw0QkFBQTtZQUFBLG9CQUFBO0VDbUJMO0VEbEJBO0lBQU0sNEJBQUE7WUFBQSxvQkFBQTtFQ3FCTjtFRHBCQTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUN1QlA7QUFDRjtBRHRCQTtFQUNFO0lBQUssNEJBQUE7WUFBQSxvQkFBQTtFQ3lCTDtFRHhCQTtJQUFNLDRCQUFBO1lBQUEsb0JBQUE7RUMyQk47RUQxQkE7SUFBTyxrQ0FBQTtZQUFBLDBCQUFBO0VDNkJQO0FBQ0Y7QURqQ0E7RUFDRTtJQUFLLDRCQUFBO1lBQUEsb0JBQUE7RUN5Qkw7RUR4QkE7SUFBTSw0QkFBQTtZQUFBLG9CQUFBO0VDMkJOO0VEMUJBO0lBQU8sa0NBQUE7WUFBQSwwQkFBQTtFQzZCUDtBQUNGO0FENUJBO0VBQ0U7SUFBSyxnQ0FBQTtZQUFBLHdCQUFBO0VDK0JMO0VEOUJBO0lBQU0sZ0NBQUE7WUFBQSx3QkFBQTtFQ2lDTjtFRGhDQTtJQUFPLGlDQUFBO1lBQUEseUJBQUE7RUNtQ1A7QUFDRjtBRHZDQTtFQUNFO0lBQUssZ0NBQUE7WUFBQSx3QkFBQTtFQytCTDtFRDlCQTtJQUFNLGdDQUFBO1lBQUEsd0JBQUE7RUNpQ047RURoQ0E7SUFBTyxpQ0FBQTtZQUFBLHlCQUFBO0VDbUNQO0FBQ0Y7QURsQ0E7RUFDRTtJQUFLLDhCQUFBO1lBQUEsc0JBQUE7RUNxQ0w7RURwQ0E7SUFBTSw4QkFBQTtZQUFBLHNCQUFBO0VDdUNOO0VEdENBO0lBQU8sOEJBQUE7WUFBQSxzQkFBQTtFQ3lDUDtBQUNGO0FEN0NBO0VBQ0U7SUFBSyw4QkFBQTtZQUFBLHNCQUFBO0VDcUNMO0VEcENBO0lBQU0sOEJBQUE7WUFBQSxzQkFBQTtFQ3VDTjtFRHRDQTtJQUFPLDhCQUFBO1lBQUEsc0JBQUE7RUN5Q1A7QUFDRjtBRHhDQTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQzJDTDtFRDFDQTtJQUFNLCtCQUFBO1lBQUEsdUJBQUE7RUM2Q047RUQ1Q0E7SUFBTyxxQ0FBQTtZQUFBLDZCQUFBO0VDK0NQO0FBQ0Y7QURuREE7RUFDRTtJQUFLLCtCQUFBO1lBQUEsdUJBQUE7RUMyQ0w7RUQxQ0E7SUFBTSwrQkFBQTtZQUFBLHVCQUFBO0VDNkNOO0VENUNBO0lBQU8scUNBQUE7WUFBQSw2QkFBQTtFQytDUDtBQUNGO0FEOUNBO0VBQ0U7SUFBSywrQkFBQTtZQUFBLHVCQUFBO0VDaURMO0VEaERBO0lBQU0sK0JBQUE7WUFBQSx1QkFBQTtFQ21ETjtFRGxEQTtJQUFPLG9DQUFBO1lBQUEsNEJBQUE7RUNxRFA7QUFDRjtBRHpEQTtFQUNFO0lBQUssK0JBQUE7WUFBQSx1QkFBQTtFQ2lETDtFRGhEQTtJQUFNLCtCQUFBO1lBQUEsdUJBQUE7RUNtRE47RURsREE7SUFBTyxvQ0FBQTtZQUFBLDRCQUFBO0VDcURQO0FBQ0Y7QURuREE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUNxREo7QURsREE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNxREo7QURsREE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUF6RU07RUEwRU4sYUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNxREY7QURuREU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7VUFBQSxvQ0FBQTtBQ3FESjtBRG5ESTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNxRE47QURsREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDb0ROO0FEbERNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ29EUjtBRGxEUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQ29EVjtBRGxEVTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQ29EWjtBRGpEVTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDbURaO0FEakRVO0VBQ0UsT0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDbURaO0FEakRVO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FDbURaO0FEOUNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUNnRFI7QUQ5Q1E7RUFDSSwwQkFBQTtBQ2dEWjtBRDVDTTtFQUNFLG9DQUFBO0VBQ0EseUJBNUpDO0VBNkpELGdCQUFBO0VBQ0EsdURBQUE7VUFBQSwrQ0FBQTtBQzhDUjtBRDVDUTtFQUNFLDRDQUFBO1VBQUEsb0NBQUE7QUM4Q1Y7QUQ1Q1U7RUFDRSxzREFBQTtVQUFBLDhDQUFBO0FDOENaO0FENUNZO0VBQ0UseUJBdEtMO0FDb05UO0FEM0NZO0VBQ0UsdURBQUE7QUM2Q2Q7QUR4Q1E7RUFDRSw2Q0FBQTtVQUFBLHFDQUFBO0FDMENWO0FEeENVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUMwQ1o7QUR4Q1U7RUFDRSxrQkFBQTtFQUNBLHlCQXhMSDtFQXlMRyxtQ0FBQTtVQUFBLDJCQUFBO0FDMENaO0FEeENVO0VBQ0UsZ0tBQUE7RUFDQSx1RUFBQTtVQUFBLCtEQUFBO0FDMENaO0FEdENNO0VBQ0Usb0NBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFyTUM7RUFzTUQsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLHlEQUFBO1VBQUEsaURBQUE7QUN3Q1I7QUR0Q1E7RUFDRSxnREFBQTtVQUFBLHdDQUFBO0FDd0NWO0FEdENVO0VBQ0Usc0RBQUE7VUFBQSw4Q0FBQTtBQ3dDWjtBRHRDWTtFQUNFLHlCQWpOTDtBQ3lQVDtBRHJDWTtFQUNFLHVEQUFBO0FDdUNkO0FEbENRO0VBQ0UsaURBQUE7VUFBQSx5Q0FBQTtBQ29DVjtBRGxDVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDJpRkFBQTtFQUNBLDhFQUFBO1VBQUEsc0VBQUE7QUNvQ1o7QURsQ1U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQXZPSDtFQXdPRyx1RUFBQTtVQUFBLCtEQUFBO0FDb0NaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3NoYXJlZC9sb2FkaW5nL2xvYWRpbmcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGZ1bmN0aW9uIHVybC1mcmllbmRseS1jb2xvcigkY29sb3IpIHtcbiAgICBAcmV0dXJuICclMjMnICsgc3RyLXNsaWNlKCcjeyRjb2xvcn0nLCAyLCAtMSlcbn1cblxuJGNvbG9yMTogIzE0MTQxNDtcbiRjb2xvcjI6ICMyMDkyRUQ7XG4kd2lkdGg6IDUwMHB4O1xuXG5Aa2V5ZnJhbWVzIHVwIHtcbiAgMCUgeyB0b3A6IC0kd2lkdGgvNCskd2lkdGgvNDA7IH1cbiAgMTAwJSB7IHRvcDogJHdpZHRoLzQtJHdpZHRoLzQwOyB9XG59XG5Aa2V5ZnJhbWVzIGRvd24ge1xuICAwJSB7IGJvdHRvbTogJHdpZHRoLzQtJHdpZHRoLzQwOyB9XG4gIDEwMCUgeyBib3R0b206IC0kd2lkdGgvNCskd2lkdGgvNDA7IH1cbn1cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSAgXG59XG5Aa2V5ZnJhbWVzIGp1bXAge1xuICAwJSB7IGJvdHRvbTogLSR3aWR0aC8yMDsgfVxuICA1MCUgeyBib3R0b206IC0kd2lkdGgvMjA7IH1cbiAgMTAwJSB7IGJvdHRvbTogJHdpZHRoLzQtJHdpZHRoLzQwOyB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUge1xuICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNTAlIHsgb3BhY2l0eTogMDsgfVxuICA1MSUgeyBvcGFjaXR5OiAxOyB9XG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4xIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICA3NSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuQGtleWZyYW1lcyBzcGluMiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cbiAgNzUlIHsgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpOyB9XG59XG5Aa2V5ZnJhbWVzIGRvbHBoaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxuICA3NSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKC03MGRlZyk7IH1cbn1cbkBrZXlmcmFtZXMgc3BsYXNoIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEsIDApOyB9XG4gIDc1JSB7IHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7IH1cbn1cbkBrZXlmcmFtZXMgc2xpZGUxIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTsgfVxuICA1MiUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLSR3aWR0aC84KTsgfVxufVxuQGtleWZyYW1lcyBzbGlkZTIge1xuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDApOyB9XG4gIDUyJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDApOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgkd2lkdGgvOCk7IH1cbn1cblxuI2JsdXJ7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uYmFwcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJHdpZHRoLzI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMSokd2lkdGgvMjtcbiAgbWFyZ2luLXRvcDogLTEqJHdpZHRoLzQ7XG4gIHotaW5kZXg6IDI7XG4gIFxuICAuc3ViY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFuaW1hdGlvbjogcm90YXRlIDRzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBcbiAgICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBcbiAgICB9XG4gICAgLmhhbGYge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgXG4gICAgICAuc3BsYXNoIHtcbiAgICAgICAgaGVpZ2h0OiAkd2lkdGgvNDAqNDtcbiAgICAgICAgd2lkdGg6ICR3aWR0aC8yMCo1O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0oJHdpZHRoLzIwKjUpLzI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAgICAgICAuc3BsYXNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG4gICAgICAgICAgXG4gICAgICAgICAgLmNpcmNsZSB7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDMwJTtcbiAgICAgICAgICAgIHdpZHRoOiAkd2lkdGgvMjI7XG4gICAgICAgICAgICBoZWlnaHQ6ICR3aWR0aC8yMjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0kd2lkdGgvNDQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLSR3aWR0aC80NDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLSR3aWR0aC80NDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0kd2lkdGgvNDQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5kcm9wbGV0IHtcbiAgICAgICAgd2lkdGg6ICR3aWR0aC8yMDtcbiAgICAgICAgaGVpZ2h0OiAkd2lkdGgvMjA7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0kd2lkdGgvNDA7XG4gICAgICAgIFxuICAgICAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAjey0kd2lkdGgvNH0gMCAkd2lkdGgvNCAkY29sb3IxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjUlO1xuICAgICAgICBhbmltYXRpb246IHVwIDFzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgXG4gICAgICAgIC5zcGxhc2gge1xuICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUxIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgXG4gICAgICAgICAgLnNwbGFzaC1jb250YWluZXIge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGxhc2ggMXMgaW5maW5pdGUgLS4yNXMgYWx0ZXJuYXRlO1xuICAgICAgICAgIFxuICAgICAgICAgICAgLmNpcmNsZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAmOmJlZm9yZSwgJjphZnRlciB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgJHdpZHRoLzIyKzIgMCAkd2lkdGgvMjIgJGNvbG9yMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kcm9wbGV0IHtcbiAgICAgICAgICBhbmltYXRpb246IGp1bXAgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgICAgICAgIFxuICAgICAgICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IyO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlIDRzIGluZmluaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB2aWV3Qm94PScwIDAgMTAgMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbD0nI3t1cmwtZnJpZW5kbHktY29sb3IoJGNvbG9yMil9JyBkPSdNMCwxMEw1LDBMMTAsMTBaJy8+PC9zdmc+XCIpO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlIDRzIGluZmluaXRlIC0ycywgc3BpbjEgNHMgaW5maW5pdGUgLTIuNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICBib3gtc2hhZG93OiAwICN7LSR3aWR0aC80fSAwICR3aWR0aC80ICRjb2xvcjI7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTI1JTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgYW5pbWF0aW9uOiBkb3duIDFzIGluZmluaXRlIGFsdGVybmF0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgXG4gICAgICAgIC5zcGxhc2gge1xuICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGUyIDFzIGluZmluaXRlIC0xcyBsaW5lYXI7XG4gICAgICAgIFxuICAgICAgICAgIC5zcGxhc2gtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc3BsYXNoIDFzIGluZmluaXRlIC0xLjI1cyBhbHRlcm5hdGU7XG4gICAgICAgICAgXG4gICAgICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAkd2lkdGgvMjIrMiAwICR3aWR0aC8yMiAkY29sb3IxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmRyb3BsZXQge1xuICAgICAgICAgIGFuaW1hdGlvbjoganVtcCAxcyBpbmZpbml0ZSAtMXMgYWx0ZXJuYXRlO1xuICAgICAgICAgIFxuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGhlaWdodDogMjAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAyMDAlO1xuICAgICAgICAgICAgbGVmdDogLTUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgdmlld0JveD0nMCAwIDQxOSAyODEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbD0nI3t1cmwtZnJpZW5kbHktY29sb3IoJGNvbG9yMSl9JyBkPSdtMjEyLjAwNTIsNS4zMjc4MWMtNy44MDI0LDIuOTYxMzEgLTE0LjkyMjksNi45MDgwOSAtMjIuMDk5MiwxMC40MjVjLTIuNDQ3MSwxLjE5NjM5IC01LjIyNTQyLDMuMTAwOCAtNy40OTE5MSwzLjY4MzA5Yy01Ljc3NzM5LDEuNDc3ODEgLTE0LjgxNjA5LC0xLjEwNzI5IC0yMi4xNzksLTEuMzc2OTljLTE4LjQwNjQ5LC0wLjY2ODk5IC0zMC4zMjIxOSwwLjcxOTcgLTQ1LjQ1MjM5LDMuMDU5NjljLTcuMDgwMjksMS4wOTM1MSAtMTQuNDEwNSwyLjExNjUgLTIwLjYyNjE5LDMuOTg1OGMtNS4zMDg1LDEuNTk4NCAtMTEuMzk2NCw1LjE2NzggLTE3LjMzNjcxLDguMTY4OTljLTkuMzg3OSw0Ljc0NzE5IC0xNS43ODE1LDkuMjE0NTEgLTIzLjEwMDksMTQuOTM1NDljLTEyLjIzMzQsOS41NTgwMSAtMTkuOTM2MiwyMS41ODk1MSAtMjguODg5MjIsMzQuODA4NDFjLTMuOTA4MTksNS43NzAyIC05LjU0MDI0LDE0LjM2ODE5IC05LjgxOTEyLDIxLjE5NjhjLTUuMTc1LDguMDQ0NzkgLTEzLjAzODI5LDEyLjk1NjEgLTE1LjAxMDU2LDI0LjczNDdjMi43NTc0Miw2Ljg4ODI5IDkuOTAzNTEsMC43NjI4OSAxNC4yMDg5OSwtMS41MzAzYzMuNTYxMzMsLTEuOTAyIDcuMzkyMTgsLTQuMTc1NCAxMC41NDkyLC01LjA4NzM5YzE2LjQwMTUxLC00Ljc0MjM5IDM5LjI1NzkxLDIuMDM2OTkgNTUuMjI1NzEsLTIuMzA4NWM1LjY2MTMsLTEuNTM5OSAxMC41NjMzLC00LjY0NzYxIDE2LjE4NzEsLTUuOTYzNzFjNS4zNDAzLC0xLjI1MzY5IDkuNDI0MiwwLjk2NDUxIDEzLjIzMTgsMi42NTIwMWMyLjAyMjYxLDAuODk5OTkgNC4xNTQxLDIuMTE1MyA1Ljk5MDcsMy4wODMwOWMxMS44OTgsNi4zMDYwMSAyMy43ODg4LDEyLjk5MjcgMzkuNzYyODksMTUuNTFjMTIuODIwMjEsMi4wMTkgMjMuOTU4ODksLTEuODMxOCAzNC4zODAzMSwtMy45MTE3YzIuNjQ2LC0wLjUyODU5IDYuMDYyMDksLTAuMzM3NTEgOC4wNjg0OCwtMi42NTMyYy04LjMxODA4LC0xLjkyNzggLTE1LjIyMDQ5LC01LjIxNDkgLTIzLjkwNjM5LC04LjcyMjJjLTExLjQwOTMsLTQuNjA0NCAtMjAuMjcyMiwtNy43MTkzIC0yNC41ODQ3LC0xNi45NjI5MWM1LjEwNjksLTEuMzcyNTEgMTEuMDIxMzksLTAuMzU1MTkgMTYuMzM4MywwLjZjNS44MDUzMSwxLjA0MDQxIDExLjU2NjUsMi4wMTU0MSAxNy4xMzYyOSwyLjk1NjUxYzIzLjUyMTgsMy45NzE0IDQxLjIzMzUxLDEwLjYzOTQ5IDU5LjEzODcsMTkuMjkxNDljOC42OTg3OSw0LjE5ODggMTYuNzE0NTEsMTAuMDQ1MiAyNC4wODU1MSwxNC45NTUzYzE1LjA5NzIsMTAuMDY2NSAyNy45ODY2OSwyMi41NjY5MSA0MC4xNDIwOSwzNi4xODNjNS41MDUsNi4xNjYyMSAxMC40MTU5OSwxMy44ODU1IDE2LjM4NTk5LDIxLjI0NmMyLjYwNzAzLDMuMjE4MTEgNS4yMjkwMyw2LjgwNjQgOC4wMTkwMSwxMC43NzY2MWMyLjY2MDk4LDMuNzc1NzkgNi43MjYwMSw4LjQwMTIgNy4yOTAwMSwxMS43MDM2YzAuNjMzLDMuNjQzMTkgLTEuMjU0MDMsNy42NDE1OSAtMi4yMDIsMTEuNjIzNzljLTEuNjQ0MDEsNi45MjM0IC0yLjg1MywxNC4zNDU5OSAtMi4zMDQwMiwyMS40NTExMWMwLjcxNzAxLDkuMTkyMTggMi43MjEwNCwxOC4xNDQxNSA2LjkyMTAyLDI1LjEwODZjMS44MjA5OCwtMS42NjI5IDIuNTY0OTcsLTQuNTg2NzMgMy41MDA5OCwtNy4yNjgwMWM0LjYwMTk5LC02LjAzMzk0IDEwLjcyNTAxLC0xMi4wNTg1NiAxMC44NzgwMiwtMjIuMTAwMzZjMTIuNTcwMDEsNi42NjMyOCAzNi45ODQwMSw2LjEwMzEyIDUxLjY0NDk5LDUuOTMzMmM0LjQwNjk4LC0wLjA1Mjc1IDguODk4MDEsMC40MjU0IDEyLjU0ODk4LC0xLjMzMjQzYy03LjY5Nzk3LC00LjU3OTY4IC0xMy4zNDk5OCwtMTAuMzc1OTIgLTIwLjA0Mjk3LC0xNi4yODY4MmMtMTAuMTI1LC04LjkzNTUgLTE4LjQ5ODAyLC0xNi40NjM3IC0zMy40MjYwMywtMjEuMjQzNTljLTQuODM4OTksLTEuNTQ5MjEgLTEwLjM3Njk4LC0yLjM4ODMxIC0xMy4wMjg5NiwtNS4yNTkzMWMtMi4wMzcwMiwtMi4xOTc0OSAtMi42NTgwNSwtNy4wNjUyOSAtMy42OTAwMywtMTEuNzUxNTljLTIuNzgxMDEsLTEyLjY3NSAtNi4zOTg5OSwtMjYuMTIwMSAtOS42MjEsLTM2Ljc4NTExYy05LjY4MDk3LC0zMi4wNjAzOSAtMjQuNDUyOTcsLTYwLjU1NDQgLTQ0LjEwODQsLTgyLjY4NDJjLTkuOTU4NSwtMTEuMjIxOCAtMjEuODU1MjksLTIwLjM1ODg5IC0zNC42Nzc4OSwtMzAuNTIwMmMtMi4xOTE1LC0zLjUyMzc5IC02LjI5NTUsLTguMjc5NDEgLTcuMTQ1MSwtMTMuNjU0OGMtMC44NjgyMSwtNS41MzM1IDAuNjk3MTksLTEwLjM5MDc5IDQuMDMxMzksLTE0LjEwODA5YzcuMjkyMzksLTUuNDU4NSAxOC43NDc2MiwtNi4wNjIxMSAyMy43MDQ1LC0xNC4yMzQ3MWMtNi40Nzc5MSwtNC43ODI2MSAtMTQuNTE1ODEsLTYuMTg0MiAgIC0yMi40MDI1LC02Ljk2NjkxYy0xNy4wNDI2OSwtMS42ODk5IC0zMy4wMDcyLC0wLjM3ODU5IC00Ni4yMjU4LDQuNjQwNzInLz48L3N2Zz5cIik7IFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlIDRzIGluZmluaXRlIC0xcywgZG9scGhpbiA0cyBpbmZpbml0ZSAtMS41cyBlYXNlLWluLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGUgNHMgaW5maW5pdGUgLTNzLCBzcGluMiA0cyBpbmZpbml0ZSAtMy41cyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiQGtleWZyYW1lcyB1cCB7XG4gIDAlIHtcbiAgICB0b3A6IC0xMTIuNXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMTEyLjVweDtcbiAgfVxufVxuQGtleWZyYW1lcyBkb3duIHtcbiAgMCUge1xuICAgIGJvdHRvbTogMTEyLjVweDtcbiAgfVxuICAxMDAlIHtcbiAgICBib3R0b206IC0xMTIuNXB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGp1bXAge1xuICAwJSB7XG4gICAgYm90dG9tOiAtMjVweDtcbiAgfVxuICA1MCUge1xuICAgIGJvdHRvbTogLTI1cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm90dG9tOiAxMTIuNXB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTElIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbjEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNwaW4yIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZG9scGhpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTcwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGxhc2gge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZTEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbiAgNTIlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjIuNXB4KTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZTIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbiAgNTIlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2Mi41cHgpO1xuICB9XG59XG4jYmx1ciB7XG4gIG9wYWNpdHk6IDAuODtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5iYXBwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcbiAgbWFyZ2luLXRvcDogLTEyNXB4O1xuICB6LWluZGV4OiAyO1xufVxuLmNvbnRhaW5lciAuc3ViY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbmltYXRpb246IHJvdGF0ZSA0cyBsaW5lYXIgaW5maW5pdGU7XG59XG4uY29udGFpbmVyIC5zdWJjb250YWluZXIgKiwgLmNvbnRhaW5lciAuc3ViY29udGFpbmVyICo6YmVmb3JlLCAuY29udGFpbmVyIC5zdWJjb250YWluZXIgKjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhaW5lciAuc3ViY29udGFpbmVyIC5oYWxmIC5zcGxhc2gge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMjVweDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNjIuNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNvbnRhaW5lciAuc3ViY29udGFpbmVyIC5oYWxmIC5zcGxhc2ggLnNwbGFzaC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xufVxuLmNvbnRhaW5lciAuc3ViY29udGFpbmVyIC5oYWxmIC5zcGxhc2ggLnNwbGFzaC1jb250YWluZXIgLmNpcmNsZSB7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAzMCU7XG4gIHdpZHRoOiAyMi43MjcyNzI3MjczcHg7XG4gIGhlaWdodDogMjIuNzI3MjcyNzI3M3B4O1xuICBtYXJnaW4tdG9wOiAtMTEuMzYzNjM2MzYzNnB4O1xuICBtYXJnaW4tbGVmdDogLTExLjM2MzYzNjM2MzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmNvbnRhaW5lciAuc3ViY29udGFpbmVyIC5oYWxmIC5zcGxhc2ggLnNwbGFzaC1jb250YWluZXI6YmVmb3JlLCAuY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGYgLnNwbGFzaCAuc3BsYXNoLWNvbnRhaW5lcjphZnRlciB7XG4gIGhlaWdodDogNzAlO1xuICB3aWR0aDogNTAlO1xufVxuLmNvbnRhaW5lciAuc3ViY29udGFpbmVyIC5oYWxmIC5zcGxhc2ggLnNwbGFzaC1jb250YWluZXI6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMS4zNjM2MzYzNjM2cHg7XG59XG4uY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGYgLnNwbGFzaCAuc3BsYXNoLWNvbnRhaW5lcjphZnRlciB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogLTExLjM2MzYzNjM2MzZweDtcbn1cbi5jb250YWluZXIgLnN1YmNvbnRhaW5lciAuaGFsZiAuZHJvcGxldCB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMi41cHg7XG59XG4uY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGYgLmRyb3BsZXQ6YmVmb3JlLCAuY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGYgLmRyb3BsZXQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi5jb250YWluZXIgLnN1YmNvbnRhaW5lciAuaGFsZjpudGgtY2hpbGQoMSkge1xuICBib3gtc2hhZG93OiAwIC0xMjVweCAwIDEyNXB4ICMxNDE0MTQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XG4gIG1hcmdpbi10b3A6IC0yNSU7XG4gIGFuaW1hdGlvbjogdXAgMXMgaW5maW5pdGUgYWx0ZXJuYXRlIGVhc2UtaW4tb3V0O1xufVxuLmNvbnRhaW5lciAuc3ViY29udGFpbmVyIC5oYWxmOm50aC1jaGlsZCgxKSAuc3BsYXNoIHtcbiAgYW5pbWF0aW9uOiBzbGlkZTEgMXMgaW5maW5pdGUgbGluZWFyO1xufVxuLmNvbnRhaW5lciAuc3ViY29udGFpbmVyIC5oYWxmOm50aC1jaGlsZCgxKSAuc3BsYXNoIC5zcGxhc2gtY29udGFpbmVyIHtcbiAgYW5pbWF0aW9uOiBzcGxhc2ggMXMgaW5maW5pdGUgLTAuMjVzIGFsdGVybmF0ZTtcbn1cbi5jb250YWluZXIgLnN1YmNvbnRhaW5lciAuaGFsZjpudGgtY2hpbGQoMSkgLnNwbGFzaCAuc3BsYXNoLWNvbnRhaW5lciAuY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwOTJFRDtcbn1cbi5jb250YWluZXIgLnN1YmNvbnRhaW5lciAuaGFsZjpudGgtY2hpbGQoMSkgLnNwbGFzaCAuc3BsYXNoLWNvbnRhaW5lcjpiZWZvcmUsIC5jb250YWluZXIgLnN1YmNvbnRhaW5lciAuaGFsZjpudGgtY2hpbGQoMSkgLnNwbGFzaCAuc3BsYXNoLWNvbnRhaW5lcjphZnRlciB7XG4gIGJveC1zaGFkb3c6IDAgMjQuNzI3MjcyNzI3M3B4IDAgMjIuNzI3MjcyNzI3M3B4ICMyMDkyRUQ7XG59XG4uY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGY6bnRoLWNoaWxkKDEpIC5kcm9wbGV0IHtcbiAgYW5pbWF0aW9uOiBqdW1wIDFzIGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi5jb250YWluZXIgLnN1YmNvbnRhaW5lciAuaGFsZjpudGgtY2hpbGQoMSkgLmRyb3BsZXQ6YmVmb3JlLCAuY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGY6bnRoLWNoaWxkKDEpIC5kcm9wbGV0OmFmdGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnN1YmNvbnRhaW5lciAuaGFsZjpudGgtY2hpbGQoMSkgLmRyb3BsZXQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5MkVEO1xuICBhbmltYXRpb246IGZhZGUgNHMgaW5maW5pdGU7XG59XG4uY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGY6bnRoLWNoaWxkKDEpIC5kcm9wbGV0OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB2aWV3Qm94PScwIDAgMTAgMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbD0nJTIzMjA5MkVEJyBkPSdNMCwxMEw1LDBMMTAsMTBaJy8+PC9zdmc+XCIpO1xuICBhbmltYXRpb246IGZhZGUgNHMgaW5maW5pdGUgLTJzLCBzcGluMSA0cyBpbmZpbml0ZSAtMi41cyBsaW5lYXI7XG59XG4uY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGY6bnRoLWNoaWxkKDIpIHtcbiAgYm94LXNoYWRvdzogMCAtMTI1cHggMCAxMjVweCAjMjA5MkVEO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IC0yNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDkyRUQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGFuaW1hdGlvbjogZG93biAxcyBpbmZpbml0ZSBhbHRlcm5hdGUgZWFzZS1pbi1vdXQ7XG59XG4uY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGY6bnRoLWNoaWxkKDIpIC5zcGxhc2gge1xuICBhbmltYXRpb246IHNsaWRlMiAxcyBpbmZpbml0ZSAtMXMgbGluZWFyO1xufVxuLmNvbnRhaW5lciAuc3ViY29udGFpbmVyIC5oYWxmOm50aC1jaGlsZCgyKSAuc3BsYXNoIC5zcGxhc2gtY29udGFpbmVyIHtcbiAgYW5pbWF0aW9uOiBzcGxhc2ggMXMgaW5maW5pdGUgLTEuMjVzIGFsdGVybmF0ZTtcbn1cbi5jb250YWluZXIgLnN1YmNvbnRhaW5lciAuaGFsZjpudGgtY2hpbGQoMikgLnNwbGFzaCAuc3BsYXNoLWNvbnRhaW5lciAuY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbn1cbi5jb250YWluZXIgLnN1YmNvbnRhaW5lciAuaGFsZjpudGgtY2hpbGQoMikgLnNwbGFzaCAuc3BsYXNoLWNvbnRhaW5lcjpiZWZvcmUsIC5jb250YWluZXIgLnN1YmNvbnRhaW5lciAuaGFsZjpudGgtY2hpbGQoMikgLnNwbGFzaCAuc3BsYXNoLWNvbnRhaW5lcjphZnRlciB7XG4gIGJveC1zaGFkb3c6IDAgMjQuNzI3MjcyNzI3M3B4IDAgMjIuNzI3MjcyNzI3M3B4ICMxNDE0MTQ7XG59XG4uY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGY6bnRoLWNoaWxkKDIpIC5kcm9wbGV0IHtcbiAgYW5pbWF0aW9uOiBqdW1wIDFzIGluZmluaXRlIC0xcyBhbHRlcm5hdGU7XG59XG4uY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGY6bnRoLWNoaWxkKDIpIC5kcm9wbGV0OmJlZm9yZSB7XG4gIGhlaWdodDogMjAwJTtcbiAgd2lkdGg6IDIwMCU7XG4gIGxlZnQ6IC01MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgdmlld0JveD0nMCAwIDQxOSAyODEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZmlsbD0nJTIzMTQxNDE0JyBkPSdtMjEyLjAwNTIsNS4zMjc4MWMtNy44MDI0LDIuOTYxMzEgLTE0LjkyMjksNi45MDgwOSAtMjIuMDk5MiwxMC40MjVjLTIuNDQ3MSwxLjE5NjM5IC01LjIyNTQyLDMuMTAwOCAtNy40OTE5MSwzLjY4MzA5Yy01Ljc3NzM5LDEuNDc3ODEgLTE0LjgxNjA5LC0xLjEwNzI5IC0yMi4xNzksLTEuMzc2OTljLTE4LjQwNjQ5LC0wLjY2ODk5IC0zMC4zMjIxOSwwLjcxOTcgLTQ1LjQ1MjM5LDMuMDU5NjljLTcuMDgwMjksMS4wOTM1MSAtMTQuNDEwNSwyLjExNjUgLTIwLjYyNjE5LDMuOTg1OGMtNS4zMDg1LDEuNTk4NCAtMTEuMzk2NCw1LjE2NzggLTE3LjMzNjcxLDguMTY4OTljLTkuMzg3OSw0Ljc0NzE5IC0xNS43ODE1LDkuMjE0NTEgLTIzLjEwMDksMTQuOTM1NDljLTEyLjIzMzQsOS41NTgwMSAtMTkuOTM2MiwyMS41ODk1MSAtMjguODg5MjIsMzQuODA4NDFjLTMuOTA4MTksNS43NzAyIC05LjU0MDI0LDE0LjM2ODE5IC05LjgxOTEyLDIxLjE5NjhjLTUuMTc1LDguMDQ0NzkgLTEzLjAzODI5LDEyLjk1NjEgLTE1LjAxMDU2LDI0LjczNDdjMi43NTc0Miw2Ljg4ODI5IDkuOTAzNTEsMC43NjI4OSAxNC4yMDg5OSwtMS41MzAzYzMuNTYxMzMsLTEuOTAyIDcuMzkyMTgsLTQuMTc1NCAxMC41NDkyLC01LjA4NzM5YzE2LjQwMTUxLC00Ljc0MjM5IDM5LjI1NzkxLDIuMDM2OTkgNTUuMjI1NzEsLTIuMzA4NWM1LjY2MTMsLTEuNTM5OSAxMC41NjMzLC00LjY0NzYxIDE2LjE4NzEsLTUuOTYzNzFjNS4zNDAzLC0xLjI1MzY5IDkuNDI0MiwwLjk2NDUxIDEzLjIzMTgsMi42NTIwMWMyLjAyMjYxLDAuODk5OTkgNC4xNTQxLDIuMTE1MyA1Ljk5MDcsMy4wODMwOWMxMS44OTgsNi4zMDYwMSAyMy43ODg4LDEyLjk5MjcgMzkuNzYyODksMTUuNTFjMTIuODIwMjEsMi4wMTkgMjMuOTU4ODksLTEuODMxOCAzNC4zODAzMSwtMy45MTE3YzIuNjQ2LC0wLjUyODU5IDYuMDYyMDksLTAuMzM3NTEgOC4wNjg0OCwtMi42NTMyYy04LjMxODA4LC0xLjkyNzggLTE1LjIyMDQ5LC01LjIxNDkgLTIzLjkwNjM5LC04LjcyMjJjLTExLjQwOTMsLTQuNjA0NCAtMjAuMjcyMiwtNy43MTkzIC0yNC41ODQ3LC0xNi45NjI5MWM1LjEwNjksLTEuMzcyNTEgMTEuMDIxMzksLTAuMzU1MTkgMTYuMzM4MywwLjZjNS44MDUzMSwxLjA0MDQxIDExLjU2NjUsMi4wMTU0MSAxNy4xMzYyOSwyLjk1NjUxYzIzLjUyMTgsMy45NzE0IDQxLjIzMzUxLDEwLjYzOTQ5IDU5LjEzODcsMTkuMjkxNDljOC42OTg3OSw0LjE5ODggMTYuNzE0NTEsMTAuMDQ1MiAyNC4wODU1MSwxNC45NTUzYzE1LjA5NzIsMTAuMDY2NSAyNy45ODY2OSwyMi41NjY5MSA0MC4xNDIwOSwzNi4xODNjNS41MDUsNi4xNjYyMSAxMC40MTU5OSwxMy44ODU1IDE2LjM4NTk5LDIxLjI0NmMyLjYwNzAzLDMuMjE4MTEgNS4yMjkwMyw2LjgwNjQgOC4wMTkwMSwxMC43NzY2MWMyLjY2MDk4LDMuNzc1NzkgNi43MjYwMSw4LjQwMTIgNy4yOTAwMSwxMS43MDM2YzAuNjMzLDMuNjQzMTkgLTEuMjU0MDMsNy42NDE1OSAtMi4yMDIsMTEuNjIzNzljLTEuNjQ0MDEsNi45MjM0IC0yLjg1MywxNC4zNDU5OSAtMi4zMDQwMiwyMS40NTExMWMwLjcxNzAxLDkuMTkyMTggMi43MjEwNCwxOC4xNDQxNSA2LjkyMTAyLDI1LjEwODZjMS44MjA5OCwtMS42NjI5IDIuNTY0OTcsLTQuNTg2NzMgMy41MDA5OCwtNy4yNjgwMWM0LjYwMTk5LC02LjAzMzk0IDEwLjcyNTAxLC0xMi4wNTg1NiAxMC44NzgwMiwtMjIuMTAwMzZjMTIuNTcwMDEsNi42NjMyOCAzNi45ODQwMSw2LjEwMzEyIDUxLjY0NDk5LDUuOTMzMmM0LjQwNjk4LC0wLjA1Mjc1IDguODk4MDEsMC40MjU0IDEyLjU0ODk4LC0xLjMzMjQzYy03LjY5Nzk3LC00LjU3OTY4IC0xMy4zNDk5OCwtMTAuMzc1OTIgLTIwLjA0Mjk3LC0xNi4yODY4MmMtMTAuMTI1LC04LjkzNTUgLTE4LjQ5ODAyLC0xNi40NjM3IC0zMy40MjYwMywtMjEuMjQzNTljLTQuODM4OTksLTEuNTQ5MjEgLTEwLjM3Njk4LC0yLjM4ODMxIC0xMy4wMjg5NiwtNS4yNTkzMWMtMi4wMzcwMiwtMi4xOTc0OSAtMi42NTgwNSwtNy4wNjUyOSAtMy42OTAwMywtMTEuNzUxNTljLTIuNzgxMDEsLTEyLjY3NSAtNi4zOTg5OSwtMjYuMTIwMSAtOS42MjEsLTM2Ljc4NTExYy05LjY4MDk3LC0zMi4wNjAzOSAtMjQuNDUyOTcsLTYwLjU1NDQgLTQ0LjEwODQsLTgyLjY4NDJjLTkuOTU4NSwtMTEuMjIxOCAtMjEuODU1MjksLTIwLjM1ODg5IC0zNC42Nzc4OSwtMzAuNTIwMmMtMi4xOTE1LC0zLjUyMzc5IC02LjI5NTUsLTguMjc5NDEgLTcuMTQ1MSwtMTMuNjU0OGMtMC44NjgyMSwtNS41MzM1IDAuNjk3MTksLTEwLjM5MDc5IDQuMDMxMzksLTE0LjEwODA5YzcuMjkyMzksLTUuNDU4NSAxOC43NDc2MiwtNi4wNjIxMSAyMy43MDQ1LC0xNC4yMzQ3MWMtNi40Nzc5MSwtNC43ODI2MSAtMTQuNTE1ODEsLTYuMTg0MiAgIC0yMi40MDI1LC02Ljk2NjkxYy0xNy4wNDI2OSwtMS42ODk5IC0zMy4wMDcyLC0wLjM3ODU5IC00Ni4yMjU4LDQuNjQwNzInLz48L3N2Zz5cIik7XG4gIGFuaW1hdGlvbjogZmFkZSA0cyBpbmZpbml0ZSAtMXMsIGRvbHBoaW4gNHMgaW5maW5pdGUgLTEuNXMgZWFzZS1pbi1vdXQ7XG59XG4uY29udGFpbmVyIC5zdWJjb250YWluZXIgLmhhbGY6bnRoLWNoaWxkKDIpIC5kcm9wbGV0OmFmdGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbiAgYW5pbWF0aW9uOiBmYWRlIDRzIGluZmluaXRlIC0zcywgc3BpbjIgNHMgaW5maW5pdGUgLTMuNXMgbGluZWFyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/shared/model/newProject/newProject.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/component/shared/model/newProject/newProject.component.ts ***!
  \***************************************************************************/
/*! exports provided: NewProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectComponent", function() { return NewProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");




let NewProjectComponent = class NewProjectComponent {
    constructor(_http, _data) {
        this._http = _http;
        this._data = _data;
        this.searchData = [];
        this.membersAdded = [];
        this.formData = {
            name: '',
            description: '',
            isPrivate: true,
            members: [],
            sugessions: [],
            isFreeze: false,
            endingdate: Date.now()
        };
    }
    ngOnInit() { }
    onMemberAdded(membersAdded) {
        this.membersAdded = membersAdded;
    }
    createProject() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let payload = {
                name: this.formData.name,
                discription: this.formData.description,
                private: !this.formData.isPrivate,
                isFreeze: this.formData.isFreeze,
                startingDate: this.formData.startingDate,
                endingDate: this.formData.endingDate
            };
            const project = yield this._http.POST('/projects/post', payload).toPromise();
            let promisArr = [];
            this.membersAdded.forEach((item) => {
                promisArr.push(this._http.POST('/projects/post/member', { name: project.data, member: { name: item.userName, permission: 'Developer', avatar: item.avatar } })
                    .toPromise());
            });
            yield Promise.all(promisArr);
            this._data.fetchUser();
        });
    }
};
NewProjectComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewProjectComponent.prototype, "userInformation", void 0);
NewProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-project-model',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./newProject.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/model/newProject/newProject.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./newProject.scss */ "./src/app/component/shared/model/newProject/newProject.scss")).default]
    })
], NewProjectComponent);



/***/ }),

/***/ "./src/app/component/shared/model/newProject/newProject.scss":
/*!*******************************************************************!*\
  !*** ./src/app/component/shared/model/newProject/newProject.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaGFyZWQvbW9kZWwvbmV3UHJvamVjdC9uZXdQcm9qZWN0LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/component/shared/searchUsers/searchUsers.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/shared/searchUsers/searchUsers.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUsersComponent", function() { return SearchUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let SearchUsersComponent = class SearchUsersComponent {
    constructor(_http, _data) {
        this._http = _http;
        this._data = _data;
        this.buttonText = '';
        this.onUserSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchData = [];
        this.searchText = '';
        this.avatars = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userImages;
    }
    ngOnInit() {
        this.$following = this._data.getFollowing().subscribe(following => {
            this.following = following;
        });
    }
    searchUsers(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (text === "")
                    return;
                const response = yield this._http.GET('/users/search/' + text).toPromise();
                console.time();
                this.searchData = [...response];
                console.timeEnd();
            }
            catch (err) {
                alert('Error Occured');
                console.log(err);
            }
        });
    }
    buttonClicked(user) {
        this.onUserSelected.emit(user);
    }
    ngOnDestroy() {
        this.$following.unsubscribe();
    }
};
SearchUsersComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchUsersComponent.prototype, "buttonText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchUsersComponent.prototype, "onUserSelected", void 0);
SearchUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./searchUsers.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/searchUsers/searchUsers.html")).default,
        styles: [""]
    })
], SearchUsersComponent);



/***/ }),

/***/ "./src/app/component/shared/selectUsers/selectUsers.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/shared/selectUsers/selectUsers.component.ts ***!
  \***********************************************************************/
/*! exports provided: SelectUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectUsersComponent", function() { return SelectUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let SelectUsersComponent = class SelectUsersComponent {
    constructor(_data, _http) {
        this._data = _data;
        this._http = _http;
        this.blockedMembers = new Set();
        this.onMemberAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchText = '';
        this.following = [];
        this.searchData = [];
        this.membersAdded = [];
        this.avatars = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].userImages;
        this.membersName = new Set();
    }
    ngOnInit() {
        this.fetchFollowing();
    }
    toggleUser(user) {
        const { userName } = user;
        if (this.membersName.has(userName)) {
            const index = [...this.membersName].indexOf(user.userName);
            this.membersName.delete(userName);
            this.membersAdded.splice(index, 1);
        }
        else {
            this.membersAdded.push(user);
            this.membersName.add(userName);
        }
        this.onMemberAdded.emit(this.membersAdded);
    }
    fetchFollowing() {
        this.$following = this._data.getFollowing().subscribe(following => {
            this.following = following;
        });
    }
    searchUsers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.searchText === '')
                return;
            try {
                this.searchData = [...yield this._http.GET('/users/search/' + this.searchText).toPromise()];
            }
            catch (err) {
                alert("Opprs");
                console.log(err);
            }
        });
    }
    ngOnDestroy() {
        this.$following.unsubscribe();
    }
};
SelectUsersComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectUsersComponent.prototype, "blockedMembers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectUsersComponent.prototype, "onMemberAdded", void 0);
SelectUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./selectUsers.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/selectUsers/selectUsers.html")).default,
        styles: [""]
    })
], SelectUsersComponent);



/***/ }),

/***/ "./src/app/component/shared/usersBigList/usersBigList.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/component/shared/usersBigList/usersBigList.component.ts ***!
  \*************************************************************************/
/*! exports provided: UsersBigListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersBigListComponent", function() { return UsersBigListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



let UsersBigListComponent = class UsersBigListComponent {
    constructor() {
        this.title = 'Members';
        this.badgeStyleClass = {
            'Owner': 'badge-dark',
            'Admin': 'badge-warning',
            'Developer': 'badge-info'
        };
        this.avatars = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userImages;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UsersBigListComponent.prototype, "members", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UsersBigListComponent.prototype, "title", void 0);
UsersBigListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-list-big',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usersBigList.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/shared/usersBigList/usersBigList.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usersbigList.scss */ "./src/app/component/shared/usersBigList/usersbigList.scss")).default]
    })
], UsersBigListComponent);



/***/ }),

/***/ "./src/app/component/shared/usersBigList/usersbigList.scss":
/*!*****************************************************************!*\
  !*** ./src/app/component/shared/usersBigList/usersbigList.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zaGFyZWQvdXNlcnNCaWdMaXN0L3VzZXJzYmlnTGlzdC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/module/auth.module.ts":
/*!***************************************!*\
  !*** ./src/app/module/auth.module.ts ***!
  \***************************************/
/*! exports provided: AuthFeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFeatureModule", function() { return AuthFeatureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/auth/signin/signin.component */ "./src/app/component/auth/signin/signin.component.ts");
/* harmony import */ var _component_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/auth/signup/signup.component */ "./src/app/component/auth/signup/signup.component.ts");
/* harmony import */ var _routes_auth_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes/auth.route */ "./src/app/routes/auth.route.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.module */ "./src/app/module/shared.module.ts");







let AuthFeatureModule = class AuthFeatureModule {
};
AuthFeatureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], _component_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _routes_auth_route__WEBPACK_IMPORTED_MODULE_5__["AuthFeatureRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        exports: [_component_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], _component_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]],
        providers: [],
    })
], AuthFeatureModule);



/***/ }),

/***/ "./src/app/module/home.module.ts":
/*!***************************************!*\
  !*** ./src/app/module/home.module.ts ***!
  \***************************************/
/*! exports provided: HomeFeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFeatureModule", function() { return HomeFeatureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_home_projects_table_projectTable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/home/projects-table/projectTable.component */ "./src/app/component/home/projects-table/projectTable.component.ts");
/* harmony import */ var _component_home_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/home/header/header.component */ "./src/app/component/home/header/header.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.module */ "./src/app/module/shared.module.ts");
/* harmony import */ var _component_home_projects_table_project_table_row_tableRow_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/home/projects-table/project-table-row/tableRow.component */ "./src/app/component/home/projects-table/project-table-row/tableRow.component.ts");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/profile/profile.component */ "./src/app/component/profile/profile.component.ts");









let HomeFeatureModule = class HomeFeatureModule {
};
HomeFeatureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _component_home_projects_table_projectTable_component__WEBPACK_IMPORTED_MODULE_4__["ProjectTableComponent"], _component_home_projects_table_project_table_row_tableRow_component__WEBPACK_IMPORTED_MODULE_7__["ProjectTableRowComponent"], _component_home_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        exports: [_component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _component_home_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]],
        providers: [],
    })
], HomeFeatureModule);



/***/ }),

/***/ "./src/app/module/pipes.module.ts":
/*!****************************************!*\
  !*** ./src/app/module/pipes.module.ts ***!
  \****************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");




let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__["TimeAgoPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [time_ago_pipe__WEBPACK_IMPORTED_MODULE_3__["TimeAgoPipe"]],
        providers: [],
    })
], PipesModule);



/***/ }),

/***/ "./src/app/module/project.module.ts":
/*!******************************************!*\
  !*** ./src/app/module/project.module.ts ***!
  \******************************************/
/*! exports provided: ProjectFeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFeatureModule", function() { return ProjectFeatureModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/project/project.component */ "./src/app/component/project/project.component.ts");
/* harmony import */ var src_app_routes_project_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/routes/project.route */ "./src/app/routes/project.route.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.module */ "./src/app/module/shared.module.ts");
/* harmony import */ var _component_project_directory_dir_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/project/directory/dir.component */ "./src/app/component/project/directory/dir.component.ts");
/* harmony import */ var _component_project_models_createFile_createFile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/project/models/createFile/createFile.component */ "./src/app/component/project/models/createFile/createFile.component.ts");
/* harmony import */ var _component_project_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/project/tasks/tasks.component */ "./src/app/component/project/tasks/tasks.component.ts");
/* harmony import */ var _component_project_models_notesAction_notesAction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/project/models/notesAction/notesAction.component */ "./src/app/component/project/models/notesAction/notesAction.component.ts");
/* harmony import */ var _component_project_logs_logs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/project/logs/logs.component */ "./src/app/component/project/logs/logs.component.ts");
/* harmony import */ var _component_project_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/project/settings/settings.component */ "./src/app/component/project/settings/settings.component.ts");
/* harmony import */ var _pipes_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes.module */ "./src/app/module/pipes.module.ts");













let ProjectFeatureModule = class ProjectFeatureModule {
};
ProjectFeatureModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"], _component_project_directory_dir_component__WEBPACK_IMPORTED_MODULE_6__["DirectoryComponent"], _component_project_models_createFile_createFile_component__WEBPACK_IMPORTED_MODULE_7__["CreateFileModelComponent"], _component_project_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"], _component_project_models_notesAction_notesAction_component__WEBPACK_IMPORTED_MODULE_9__["NotesActionModelComponent"], _component_project_logs_logs_component__WEBPACK_IMPORTED_MODULE_10__["LogsComponent"], _component_project_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_routes_project_route__WEBPACK_IMPORTED_MODULE_4__["ProjectRoutingModule"], _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _pipes_module__WEBPACK_IMPORTED_MODULE_12__["PipesModule"]],
        exports: [],
        providers: [],
    })
], ProjectFeatureModule);



/***/ }),

/***/ "./src/app/module/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/module/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_shared_checklist_checklist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/shared/checklist/checklist.component */ "./src/app/component/shared/checklist/checklist.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _component_shared_avatarList_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/shared/avatarList/avatar.component */ "./src/app/component/shared/avatarList/avatar.component.ts");
/* harmony import */ var _component_shared_usersBigList_usersBigList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/shared/usersBigList/usersBigList.component */ "./src/app/component/shared/usersBigList/usersBigList.component.ts");
/* harmony import */ var _component_shared_model_newProject_newProject_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/shared/model/newProject/newProject.component */ "./src/app/component/shared/model/newProject/newProject.component.ts");
/* harmony import */ var _component_shared_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/shared/chat/chat.component */ "./src/app/component/shared/chat/chat.component.ts");
/* harmony import */ var _component_personalNotes_personalNotes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/personalNotes/personalNotes.component */ "./src/app/component/personalNotes/personalNotes.component.ts");
/* harmony import */ var _component_shared_selectUsers_selectUsers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/shared/selectUsers/selectUsers.component */ "./src/app/component/shared/selectUsers/selectUsers.component.ts");
/* harmony import */ var _pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes.module */ "./src/app/module/pipes.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");













let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component_shared_checklist_checklist_component__WEBPACK_IMPORTED_MODULE_3__["ChecklistComponent"], _component_shared_avatarList_avatar_component__WEBPACK_IMPORTED_MODULE_5__["AvatarListComponent"], _component_shared_usersBigList_usersBigList_component__WEBPACK_IMPORTED_MODULE_6__["UsersBigListComponent"], _component_shared_model_newProject_newProject_component__WEBPACK_IMPORTED_MODULE_7__["NewProjectComponent"], _component_shared_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"], _component_personalNotes_personalNotes_component__WEBPACK_IMPORTED_MODULE_9__["PersonalNotes"], _component_shared_selectUsers_selectUsers_component__WEBPACK_IMPORTED_MODULE_10__["SelectUsersComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]],
        exports: [_component_shared_checklist_checklist_component__WEBPACK_IMPORTED_MODULE_3__["ChecklistComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _component_shared_avatarList_avatar_component__WEBPACK_IMPORTED_MODULE_5__["AvatarListComponent"], _component_shared_usersBigList_usersBigList_component__WEBPACK_IMPORTED_MODULE_6__["UsersBigListComponent"], _component_shared_model_newProject_newProject_component__WEBPACK_IMPORTED_MODULE_7__["NewProjectComponent"], _component_shared_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"], _component_personalNotes_personalNotes_component__WEBPACK_IMPORTED_MODULE_9__["PersonalNotes"], _component_shared_selectUsers_selectUsers_component__WEBPACK_IMPORTED_MODULE_10__["SelectUsersComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]],
        providers: [],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/module/static.module.ts":
/*!*****************************************!*\
  !*** ./src/app/module/static.module.ts ***!
  \*****************************************/
/*! exports provided: StaticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticModule", function() { return StaticModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _component_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/shared/loading/loading.component */ "./src/app/component/shared/loading/loading.component.ts");
/* harmony import */ var _component_shared_searchUsers_searchUsers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/shared/searchUsers/searchUsers.component */ "./src/app/component/shared/searchUsers/searchUsers.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared.module */ "./src/app/module/shared.module.ts");
/* harmony import */ var _pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes.module */ "./src/app/module/pipes.module.ts");









let StaticModule = class StaticModule {
};
StaticModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
            _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
            _component_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"],
            _component_shared_searchUsers_searchUsers_component__WEBPACK_IMPORTED_MODULE_6__["SearchUsersComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        exports: [_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _component_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]],
        providers: [],
    })
], StaticModule);



/***/ }),

/***/ "./src/app/routes/auth.route.ts":
/*!**************************************!*\
  !*** ./src/app/routes/auth.route.ts ***!
  \**************************************/
/*! exports provided: AuthFeatureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFeatureRoutingModule", function() { return AuthFeatureRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _component_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/auth/signin/signin.component */ "./src/app/component/auth/signin/signin.component.ts");
/* harmony import */ var _component_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/auth/signup/signup.component */ "./src/app/component/auth/signup/signup.component.ts");





const routes = [
    { path: 'auth', children: [
            { path: 'signin', component: _component_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] },
            { path: 'signup', component: _component_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
            { path: '', redirectTo: 'signin', pathMatch: 'full' }
        ] },
];
let AuthFeatureRoutingModule = class AuthFeatureRoutingModule {
};
AuthFeatureRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AuthFeatureRoutingModule);



/***/ }),

/***/ "./src/app/routes/project.route.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/project.route.ts ***!
  \*****************************************/
/*! exports provided: ProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function() { return ProjectRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _component_project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/project/project.component */ "./src/app/component/project/project.component.ts");
/* harmony import */ var _services_authGuard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authGuard.service */ "./src/app/services/authGuard.service.ts");
/* harmony import */ var _component_project_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/project/settings/settings.component */ "./src/app/component/project/settings/settings.component.ts");






const routes = [
    {
        path: 'project', children: [
            { path: ':name', children: [
                    { path: '', component: _component_project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"] },
                    { path: 'settings', component: _component_project_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"] },
                ] },
        ],
        canActivate: [_services_authGuard_service__WEBPACK_IMPORTED_MODULE_4__["CanActivateGuard"]]
    },
];
let ProjectRoutingModule = class ProjectRoutingModule {
};
ProjectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], ProjectRoutingModule);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");




// Add the Firebase services that you want to use



let AuthService = class AuthService {
    constructor(_http, _data) {
        this._http = _http;
        this._data = _data;
    }
    localToken() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.getIdToken(/* forceRefresh */ true);
    }
    getToken() {
        return localStorage.getItem("token");
    }
    setToken() {
        return this.localToken()
            .then(token => {
            localStorage.setItem("token", token);
            return true;
        })
            .catch(err => {
            alert("Error");
            console.error(err);
            return false;
        });
    }
    removeToken() {
        localStorage.removeItem("token");
    }
    LogOut() {
        firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signOut()
            .then(() => {
            this.removeToken();
            this._data.reset();
            this._http.REDIRECT('/auth/signin');
        })
            .catch((error) => {
            alert("Error Occured");
            console.log(error);
        });
    }
    // authentication
    routeGuard(isRetried) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const token = this.getToken();
            if (!!token) {
                return this._http.POST('/auth/activateroute', {}).toPromise()
                    .then(data => {
                    return new Promise((res, rej) => { res(data); });
                });
            }
            else {
                if (!isRetried) {
                    console.log("YEs");
                    this.setToken().then(data => { this.routeGuard(true); });
                }
                else {
                    return new Promise((res, rej) => {
                        res(false);
                    });
                }
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/services/authGuard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authGuard.service.ts ***!
  \***********************************************/
/*! exports provided: CanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateGuard", function() { return CanActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");




let CanActivateGuard = class CanActivateGuard {
    constructor(_auth, _http) {
        this._auth = _auth;
        this._http = _http;
    }
    canActivate(route, state) {
        const rout = this._auth.routeGuard(false);
        rout.then(data => {
            if (!data) {
                this._http.REDIRECT('/auth/signin');
            }
        });
        return rout;
    }
};
CanActivateGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
CanActivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CanActivateGuard);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let DataService = class DataService {
    constructor(_http) {
        this._http = _http;
        this.$userdata = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.$followingData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.currentUserName = '';
    }
    refresh() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.fetchUser();
            this.fetchfollowing();
        });
    }
    reset() {
        this.$userdata.next({});
        this.$followingData.next([]);
    }
    getUser() {
        return this.$userdata;
    }
    setUser(key, value) {
        let userData = this.$userdata.value;
        userData[key] = value;
        this.$userdata.next(userData);
    }
    getFollowing() {
        return this.$followingData;
    }
    setFollowing(following) {
        this.$followingData.next([...following]);
    }
    fetchUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.currentUserName === undefined) {
                    return;
                }
                const userReq = yield this._http.GET('/users/get').toPromise();
                this.currentUserName = userReq.data.userName;
                this.$userdata.next(userReq.data);
            }
            catch (err) {
                console.log("Error loading User");
            }
        });
    }
    fetchfollowing() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const followingReq = yield this._http.GET(`/users/following/${this.currentUserName}`).toPromise();
                this.$followingData.next([...followingReq.data.following]);
            }
            catch (err) {
                console.log("error loading following");
            }
        });
    }
};
DataService.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataService);



/***/ }),

/***/ "./src/app/services/http.interseptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/http.interseptor.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



let TokenInterceptor = class TokenInterceptor {
    constructor(_auth) {
        this._auth = _auth;
    }
    intercept(req, next) {
        let tokenisedReq = req.clone({
            setHeaders: {
                xauthtoken: this._auth.getToken() || ''
            }
        });
        return next.handle(tokenisedReq);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



// import {environment} from '../../environments/environment'

let HttpService = class HttpService {
    constructor(_http, router) {
        this._http = _http;
        this.router = router;
    }
    GET(route) {
        return this._http.get('/api' + route);
    }
    POST(route, data) {
        return this._http.post('/api' + route, data);
    }
    REDIRECT(route) {
        return this.router.navigate([route]);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HttpService);



/***/ }),

/***/ "./src/app/services/view.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/view.service.ts ***!
  \******************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return ViewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ViewService = class ViewService {
    constructor() {
        this.data = {
            navbar: {
                isVisible: false
            },
            loader: {
                isVisible: false
            }
        };
        this.obs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.data);
    }
    getObs() {
        return this.obs.asObservable();
    }
    setObs(key, subkey, value) {
        this.data[key][subkey] = value;
        this.obs.next(this.data);
    }
};
ViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ViewService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: true,
    firebaseConfig: {
        apiKey: "AIzaSyDD5kKr9o7fQ1fZj-sWPDQDaSd7bKqmCZ4",
        authDomain: "drops-70b54.firebaseapp.com",
        databaseURL: "https://drops-70b54.firebaseio.com",
        projectId: "drops-70b54",
        storageBucket: "drops-70b54.appspot.com",
        messagingSenderId: "953153429406",
        appId: "1:953153429406:web:814629d7008eac0313c08f",
        measurementId: "G-368KYHLPBB"
    },
    userImages: [
        'https://pipeline.mediumra.re/assets/img/avatar-female-1.jpg',
        'https://pipeline.mediumra.re/assets/img/avatar-male-1.jpg',
        'https://pipeline.mediumra.re/assets/img/avatar-female-2.jpg',
        'https://pipeline.mediumra.re/assets/img/avatar-male-2.jpg',
        'https://pipeline.mediumra.re/assets/img/avatar-female-3.jpg',
        'https://pipeline.mediumra.re/assets/img/avatar-male-3.jpg',
        'https://pipeline.mediumra.re/assets/img/avatar-female-4.jpg',
    ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Documents/Teams-MS/teams-ms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map