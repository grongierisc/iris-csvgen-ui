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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<app-file-upload></app-file-upload>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/file-upload/file-upload.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/file-upload/file-upload.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Csvgen UI</h1>\n<p></p>\n<div>\n    <div class=\"row\">\n        <div class=\"block\">Local</div>\n        <div class=\"block\">\n            <ui-switch color=\"red\" [(ngModel)]=\"enableUrl\"></ui-switch>\n        </div>\n        <div class=\"block\"> Url </div>\n    </div>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\">\n        <div *ngIf=\"enableUrl == false\">\n            <div *ngIf=\"file == null\" class=\"form-group dropzone\" appDnd (fileDropped)=\"onDrop($event)\">\n                <input class=\"inputFile\" #inputFile type=\"file\" id=\"file\" (change)=\"fromBrowser($event)\">\n                <img src=\"assets/img/upload.svg\" alt=\"\">\n                <h3>Drag and drop file here</h3>\n                <h3>or</h3>\n                <label class=\"inputFileLabel\" for=\"inputFile\">Browse for file</label>\n            </div>\n            <div *ngIf=\"file != null\" class=\"single-file\">\n                <img src=\"assets/img/file.svg\" width=\"45px\" alt=\"file\">\n                <div class=\"info\">\n                    <h4 class=\"name\">\n                        {{ file?.name }}\n                    </h4>\n                    <p class=\"size\">\n                        {{ formatBytes(file?.size) }}\n                    </p>\n                </div>\n                <img src=\"assets/img/delete.svg\" class=\"delete\" width=\"20px\" alt=\"x\" (click)=\"deleteFile()\">\n            </div>\n            <div *ngIf=\"file != null\" class=\"single-file\">\n                <textarea #filePreview rows=5 wrap=\"off\" class=\"form-control\" formControlName=\"filePreview\"\n                    id=\"filePreview\">{{filePreview}}</textarea>\n            </div>\n        </div>\n        <div *ngIf=\"enableUrl\">\n            <input id=\"url\" name=\"url\" class=\"form-control\" placeholder=\"http://exemple.com/my.csv\"\n                formControlName=\"url\" [ngClass]=\"{ 'is-invalid': submitted && f.url.errors }\">\n            <div *ngIf=\"submitted && f.url.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.url.errors.pattern\">This is not an valide url</div>\n            </div>\n        </div>\n        <p></p>\n        <div class=\"form-group input-group-lg\">\n            <label>Separator :</label>\n\n            <input id=\"separator\" name=\"separator\" class=\"form-control\" placeholder=\";\" formControlName=\"separator\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.separator.errors }\">\n            <div *ngIf=\"submitted && f.separator.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.separator.errors.maxlength\">Separator must 1 character</div>\n            </div>\n\n        </div>\n        <div class=\"form-group input-group-lg\">\n            <label>Class Name :</label>\n\n            <input class=\"form-control\" placeholder=\"Class.Name\" formControlName=\"className\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.className.errors }\">\n            <div *ngIf=\"submitted && f.className.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.className.errors.pattern\">Must have at least a \".\", eg : Class.Name</div>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <button class=\"btn btn-danger btn-block btn-lg\">Create</button>\n        </div>\n    </form>\n</div>\n<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\">\n    <p style=\"color: white\">Please Wait. </p>\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
        this.title = 'csvgen-ui';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _file_upload_direcitves_dnd_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./file-upload/direcitves/dnd.directive */ "./src/app/file-upload/direcitves/dnd.directive.ts");
/* harmony import */ var ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toggle-switch */ "./node_modules/ngx-toggle-switch/ui-switch.es2015.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_4__["FileUploadComponent"],
            _file_upload_direcitves_dnd_directive__WEBPACK_IMPORTED_MODULE_10__["DndDirective"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
            ngx_toggle_switch__WEBPACK_IMPORTED_MODULE_11__["UiSwitchModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/csvgen.service.ts":
/*!***********************************!*\
  !*** ./src/app/csvgen.service.ts ***!
  \***********************************/
/*! exports provided: CsvgenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvgenService", function() { return CsvgenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CsvgenService = class CsvgenService {
    constructor(http) {
        this.http = http;
    }
    import(formData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let url = location.toString();
        // point to API
        url = url.replace('csp', 'api');
        // trim index.html
        var re = new RegExp(/^.*\//);
        url = re.exec(url).toString();
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            url = 'http://localhost:52773/api/IRISAPP/csvgen/';
        }
        var result = this.http.post(url + 'import', formData, { headers, responseType: 'text' });
        return result;
    }
};
CsvgenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CsvgenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CsvgenService);



/***/ }),

/***/ "./src/app/file-upload/direcitves/dnd.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/file-upload/direcitves/dnd.directive.ts ***!
  \*********************************************************/
/*! exports provided: DndDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndDirective", function() { return DndDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DndDirective = class DndDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // Dragover listener
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = true;
    }
    // Dragleave listener
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
    }
    // Drop listener
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
        let files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.fileover')
], DndDirective.prototype, "fileOver", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DndDirective.prototype, "fileDropped", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event'])
], DndDirective.prototype, "onDragOver", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event'])
], DndDirective.prototype, "onDragLeave", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event'])
], DndDirective.prototype, "ondrop", null);
DndDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDnd]'
    })
], DndDirective);



/***/ }),

/***/ "./src/app/file-upload/file-upload.component.scss":
/*!********************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropzone {\n  padding: 2rem;\n  text-align: center;\n  border: dashed 1px #979797;\n  position: relative;\n  margin: 0 auto;\n}\n.dropzone input {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.dropzone label {\n  color: white;\n  width: 183px;\n  height: 44px;\n  border-radius: 21.5px;\n  background-color: #db202f;\n  padding: 8px 16px;\n}\n.dropzone h3 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #38424c;\n}\n.fileover {\n  -webkit-animation: shake 1s;\n          animation: shake 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n/* Shake animation */\n@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg);\n  }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg);\n  }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n@keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg);\n  }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg);\n  }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg);\n  }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg);\n  }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg);\n  }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg);\n  }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg);\n  }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg);\n  }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg);\n  }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg);\n  }\n}\n.single-file {\n  display: flex;\n  padding: 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border: dashed 1px #979797;\n  display: flex;\n  flex-grow: 1;\n}\n.single-file .delete {\n  display: flex;\n  margin-left: 0.5rem;\n  cursor: pointer;\n  align-self: flex-end;\n}\n.single-file .name {\n  font-size: 14px;\n  font-weight: 500;\n  color: #353f4a;\n  margin: 0;\n}\n.single-file .size {\n  font-size: 12px;\n  font-weight: 500;\n  color: #a4a4a4;\n  margin: 0;\n  margin-bottom: 0.25rem;\n}\n.single-file .info {\n  width: 100%;\n}\n#filePreview {\n  font-family: \"Courier New\", Courier, monospace;\n  margin-top: 10px;\n}\n.row {\n  display: flex;\n  justify-content: space-evenly;\n  white-space: pre-wrap;\n  margin-bottom: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncm9uZ2llci9naXQvaXJpcy1jc3ZnZW4tdWkvZnJvbnQvc3JjL2FwcC9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBRElFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FETUE7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ0hGO0FET0Esb0JBQUE7QUFDQTtFQUNFO0lBQ0UsbURBQUE7WUFBQSwyQ0FBQTtFQ0pGO0VET0E7SUFDRSxzREFBQTtZQUFBLDhDQUFBO0VDTEY7RURRQTtJQUNFLG9EQUFBO1lBQUEsNENBQUE7RUNORjtFRFNBO0lBQ0UsbURBQUE7WUFBQSwyQ0FBQTtFQ1BGO0VEVUE7SUFDRSxvREFBQTtZQUFBLDRDQUFBO0VDUkY7RURXQTtJQUNFLHFEQUFBO1lBQUEsNkNBQUE7RUNURjtFRFlBO0lBQ0Usb0RBQUE7WUFBQSw0Q0FBQTtFQ1ZGO0VEYUE7SUFDRSxvREFBQTtZQUFBLDRDQUFBO0VDWEY7RURjQTtJQUNFLHFEQUFBO1lBQUEsNkNBQUE7RUNaRjtFRGVBO0lBQ0UsbURBQUE7WUFBQSwyQ0FBQTtFQ2JGO0VEZ0JBO0lBQ0UscURBQUE7WUFBQSw2Q0FBQTtFQ2RGO0FBQ0Y7QUQ3QkE7RUFDRTtJQUNFLG1EQUFBO1lBQUEsMkNBQUE7RUNKRjtFRE9BO0lBQ0Usc0RBQUE7WUFBQSw4Q0FBQTtFQ0xGO0VEUUE7SUFDRSxvREFBQTtZQUFBLDRDQUFBO0VDTkY7RURTQTtJQUNFLG1EQUFBO1lBQUEsMkNBQUE7RUNQRjtFRFVBO0lBQ0Usb0RBQUE7WUFBQSw0Q0FBQTtFQ1JGO0VEV0E7SUFDRSxxREFBQTtZQUFBLDZDQUFBO0VDVEY7RURZQTtJQUNFLG9EQUFBO1lBQUEsNENBQUE7RUNWRjtFRGFBO0lBQ0Usb0RBQUE7WUFBQSw0Q0FBQTtFQ1hGO0VEY0E7SUFDRSxxREFBQTtZQUFBLDZDQUFBO0VDWkY7RURlQTtJQUNFLG1EQUFBO1lBQUEsMkNBQUE7RUNiRjtFRGdCQTtJQUNFLHFEQUFBO1lBQUEsNkNBQUE7RUNkRjtBQUNGO0FEaUJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFVQSxhQUFBO0VBQ0EsWUFBQTtBQ3hCRjtBRGVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDYko7QURvQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ2xCSjtBRHFCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUNuQko7QURzQkU7RUFDRSxXQUFBO0FDcEJKO0FEd0JBO0VBQ0MsOENBQUE7RUFDQSxnQkFBQTtBQ3JCRDtBRHdCQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNyQkYiLCJmaWxlIjoic3JjL2FwcC9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wem9uZSB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBkYXNoZWQgMXB4ICM5Nzk3OTc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG5cbiAgbGFiZWwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTgzcHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIxLjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIyMDJmO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICB9XG5cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzODQyNGM7XG4gIH1cbn1cblxuLmZpbGVvdmVyIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cblxuLyogU2hha2UgYW5pbWF0aW9uICovXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoMGRlZyk7XG4gIH1cblxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XG4gIH1cblxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpO1xuICB9XG5cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDJweCkgcm90YXRlKDBkZWcpO1xuICB9XG5cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpO1xuICB9XG5cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAxcHgpIHJvdGF0ZSgtMWRlZyk7XG4gIH1cblxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcbiAgfVxuXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAycHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxufVxuXG4uc2luZ2xlLWZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiBkYXNoZWQgMXB4ICM5Nzk3OTc7XG5cbiAgLmRlbGV0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuXG4gIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzM1M2Y0YTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuc2l6ZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNhNGE0YTQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIH1cblxuICAuaW5mbyB7XG4gICAgd2lkdGg6IDEwMCVcbiAgfVxufVxuXG4jZmlsZVByZXZpZXcge1xuXHRmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuIiwiLmRyb3B6b25lIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IGRhc2hlZCAxcHggIzk3OTc5NztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5kcm9wem9uZSBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLmRyb3B6b25lIGxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTgzcHg7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogMjEuNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIyMDJmO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cbi5kcm9wem9uZSBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzODQyNGM7XG59XG5cbi5maWxlb3ZlciB7XG4gIGFuaW1hdGlvbjogc2hha2UgMXM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4vKiBTaGFrZSBhbmltYXRpb24gKi9cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpIHJvdGF0ZSgxZGVnKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMnB4KSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDFweCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAxcHgpIHJvdGF0ZSgtMWRlZyk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XG4gIH1cbiAgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDJweCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcbiAgfVxufVxuLnNpbmdsZS1maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4uc2luZ2xlLWZpbGUgLmRlbGV0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4uc2luZ2xlLWZpbGUgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzUzZjRhO1xuICBtYXJnaW46IDA7XG59XG4uc2luZ2xlLWZpbGUgLnNpemUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjYTRhNGE0O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG4uc2luZ2xlLWZpbGUgLmluZm8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2ZpbGVQcmV2aWV3IHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _csvgen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../csvgen.service */ "./src/app/csvgen.service.ts");






let FileUploadComponent = class FileUploadComponent {
    constructor(fb, toastr, spinnerService, csvgenService) {
        this.fb = fb;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.csvgenService = csvgenService;
        this.submitted = false;
        this.pattern = "^[a-zA-Z0-9]+[\.][a-zA-Z0-9.]+[a-zA-Z0-9]$";
        this.patternUrl = "[Hh][Tt][Tt][Pp][Ss]?://(.*)";
        this.enableUrl = false;
        this.form = this.fb.group({
            separator: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1)]],
            className: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.pattern)]],
            file: [null],
            url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.patternUrl)]]
        });
        this.toast_options = this.toastr.toastrConfig;
    }
    ngOnInit() { }
    onDrop(event) {
        this.uploadFile(event[0]);
    }
    fromBrowser(event) {
        this.uploadFile(event.target.files[0]);
    }
    uploadFile(file) {
        this.form.patchValue({
            file: file
        });
        this.form.get('file').updateValueAndValidity();
        this.file = file;
        var reader = new FileReader();
        var SLICE = 1024 * 1;
        var blob = file.slice(0, file.size < SLICE ? file.size : SLICE);
        reader.onload = (e) => {
            var input = document.getElementById('filePreview');
            input.value = reader.result.toString();
        };
        reader.readAsText(blob);
    }
    reset() {
        this.submitted = false;
        this.form.reset();
        this.file = null;
    }
    /**
     * Delete file
    */
    deleteFile() {
        this.file = null;
    }
    /**
     * format bytes
     * @param bytes (File size in bytes)
     * @param decimals (Decimals point)
     */
    formatBytes(bytes, decimals) {
        if (bytes === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const dm = decimals <= 0 ? 0 : decimals || 2;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    submitForm() {
        this.submitted = true;
        if (this.file == null && !this.enableUrl) {
            let that = this;
            that.open_toast("Error in sending File to Intersystems IRIS for Health.", "File is mandatory", "error");
            return;
        }
        if (this.form.get('url').value == null && this.enableUrl) {
            let that = this;
            that.open_toast("Error in sending url to Intersystems IRIS for Health.", "Url is mandatory", "error");
            return;
        }
        if (this.form.invalid) {
            return;
        }
        var formData = new FormData();
        let body = {
            "separator": this.form.get('separator').value,
            "className": this.form.get('className').value,
            "url": this.form.get('url').value,
            "enableUrl": this.enableUrl
        };
        var stringBody = JSON.stringify(body);
        formData.append("body", stringBody);
        formData.append("file", this.form.get('file').value);
        this.spinnerService.show();
        var that = this;
        this.csvgenService.import(formData).subscribe((data) => {
            this.spinnerService.hide();
            that.open_toast("Success", data, "success");
            this.reset();
        }, error => {
            this.spinnerService.hide();
            console.log("There was an error importing file", error);
            let msg = '';
            if (error.error != null) {
                msg = error.error;
            }
            else {
                msg = error.message;
            }
            that.open_toast("Error in sending File to Intersystems IRIS for Health.", msg, "error");
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    open_toast(title, message, type) {
        this.toast_options.positionClass = "toast-bottom-center";
        if (type == "success") {
            this.toast_options.disableTimeOut = true;
            this.toastr.success(message, title);
        }
        else {
            this.toast_options.disableTimeOut = false;
            this.toastr.error(message, title);
        }
    }
};
FileUploadComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _csvgen_service__WEBPACK_IMPORTED_MODULE_5__["CsvgenService"] }
];
FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-upload',
        template: __webpack_require__(/*! raw-loader!./file-upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/file-upload/file-upload.component.html"),
        styles: [__webpack_require__(/*! ./file-upload.component.scss */ "./src/app/file-upload/file-upload.component.scss")]
    })
], FileUploadComponent);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    base_url: 'http://localhost:52774'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/grongier/git/iris-csvgen-ui/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map