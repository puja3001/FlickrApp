(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _templates_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/home/home.component */ "./src/app/templates/home/home.component.ts");



//importing all the components

//declaring the paths
var routes = [
    { path: '', component: _templates_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _templates_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\n</app-layout>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'flickr-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _templates_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/home/home.component */ "./src/app/templates/home/home.component.ts");
/* harmony import */ var _templates_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates/header/header.component */ "./src/app/templates/header/header.component.ts");
/* harmony import */ var _templates_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./templates/footer/footer.component */ "./src/app/templates/footer/footer.component.ts");
/* harmony import */ var _templates_layout_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./templates/layout/layout.component */ "./src/app/templates/layout/layout.component.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_14__);






//Importing the Http Client Module and Http Interceptors to use http client
//for making API calls and intercepting the calls

//Services

//For Toaster animation


//importing all the components





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _templates_layout_layout_component__WEBPACK_IMPORTED_MODULE_13__["LayoutComponent"],
                _templates_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _templates_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _templates_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_14__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
    }
    //for getting images from flickr feeds
    ApiService.prototype.getFeeds = function (tags) {
        return this.httpClient.get('/api/feeds?tags=' + tags);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/templates/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/templates/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa {\n    color: hotpink;\n  }\n\n  @media screen and (max-width: 600px) {\n    nav {\n        font-size: 12px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEI7O0VBRUE7SUFDRTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEge1xuICAgIGNvbG9yOiBob3RwaW5rO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBuYXYge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/templates/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\n    <div class=\"navbar-expand m-auto navbar-text\">\n      Made with&nbsp;&nbsp;<i class=\"fa fa-flickr\"></i>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/templates/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/templates/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/templates/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/templates/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/templates/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/templates/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 600px) {\n    nav {\n        font-size: 14px;\n    }\n    a{\n        font-size: 12px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxhdGVzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbmF2IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBhe1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/templates/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark mb-5\">\n    <a class=\"navbar-brand\" href=\"/\">Get FlickrY</a>\n    <div class=\"navbar-expand mr-auto\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link active\" href=\"#\">Home</a>\n      </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/templates/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/templates/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/templates/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/templates/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/templates/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/templates/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul { \n  padding:0; \n  width:1200px; \n  margin: auto;\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n\nli { \n  display:inline;\n}\n\n.tn{\n margin:1% 1%;\n /*border: 4px solid #eee;\n box-shadow:#555 1px 1px 8px 1px;*/\n cursor: pointer;\n}\n\n.modal-content {\n  width: 1200px !important;\n}\n\nimg:hover{\n  -webkit-transform: scale(1.05);\n  transform: scale(1.05);\n  border: 2px solid #eee;\n  box-shadow:#555 1px 1px 8px 1px;\n}\n\n.img-content-hover {\n  background-color: #f7f7f7;\n  border: 1px solid black;\n  color: black;\n  position: absolute;\n  z-index: 1;\n  word-wrap: break-word;\n  width:120px;\n  padding: 1%;\n  font-size: 12px !important;\n  border-radius: 6px;\n  margin-top: 1.25rem;\n  margin-left: -4rem;\n}\n\n.search-header{\n  display: flex;\n  margin-left: 5%;\n}\n\ni{\n  font-size: 24px;\n  margin-top: 3%;\n  margin-right: 4%;\n  margin-left: 4%;\n}\n\ntag-input{\n  width:100%;\n}\n\n.btn-pos{\n  margin-top:1%;\n}\n\n.span-div{\n  margin-top: 2%;\n  margin-left: 10%;\n}\n\n@media screen and (max-width: 600px) {\n  .tags-inp{\n    font-size: 12px !important;\n  }\n  i{\n    font-size: 12px;\n    margin-top: 9%;\n    margin-right: 2%;\n    margin-left: 2%;\n  }\n  ul { \n    padding:1%; \n    width:800px; \n    margin: 2%;\n  }\n  .btn-pos{\n    font-size: 12px !important;\n    margin-top: 3%;\n  }\n  h3{\n    font-size: 14px !important;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1o7a0NBQ2lDO0NBQ2pDLGVBQWU7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFFOUIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0VBQ1o7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7IFxuICBwYWRkaW5nOjA7IFxuICB3aWR0aDoxMjAwcHg7IFxuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cblxubGkgeyBcbiAgZGlzcGxheTppbmxpbmU7XG59XG5cbi50bntcbiBtYXJnaW46MSUgMSU7XG4gLypib3JkZXI6IDRweCBzb2xpZCAjZWVlO1xuIGJveC1zaGFkb3c6IzU1NSAxcHggMXB4IDhweCAxcHg7Ki9cbiBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgd2lkdGg6IDEyMDBweCAhaW1wb3J0YW50O1xufVxuXG5pbWc6aG92ZXJ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XG4gIGJveC1zaGFkb3c6IzU1NSAxcHggMXB4IDhweCAxcHg7XG59XG5cbi5pbWctY29udGVudC1ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aWR0aDoxMjBweDtcbiAgcGFkZGluZzogMSU7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAtNHJlbTtcbn1cbi5zZWFyY2gtaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5pe1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tcmlnaHQ6IDQlO1xuICBtYXJnaW4tbGVmdDogNCU7XG59XG50YWctaW5wdXR7XG4gIHdpZHRoOjEwMCU7XG59XG5cbi5idG4tcG9ze1xuICBtYXJnaW4tdG9wOjElO1xufVxuLnNwYW4tZGl2e1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50YWdzLWlucHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxuICBpe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiA5JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgfVxuICB1bCB7IFxuICAgIHBhZGRpbmc6MSU7IFxuICAgIHdpZHRoOjgwMHB4OyBcbiAgICBtYXJnaW46IDIlO1xuICB9XG4gIC5idG4tcG9ze1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICB9XG4gIGgze1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/templates/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/templates/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner> </ng4-loading-spinner>\n <div class=\"row\">\n   <div class=\"col\">\n      <div class=\"search-header\">\n          <i class=\"fa fa-search\"></i>\n         <tag-input class=\"tags-inp\" [(ngModel)]='tags'></tag-input>\n       </div>\n   </div>\n   <div class=\"col\">\n     <button id=\"searchBtn\" class=\"btn btn-secondary btn-md btn-pos\" (click)=\"getFeeds()\">Search</button>\n   </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"feedList.length == 0\">\n    <span class=\"span-div\"><h3>No content found!!</h3></span>\n  </div>\n\n  <div class=\"row\">\n  <ul id=\"thumbnailsList\">\n      <li *ngFor=\"let image of feedList\" >\n          <img src=\"{{image.imageUrl}}\" class=\"tn\" width=\"{{image.imgWidth}}\" height=\"{{image.imgHeight}}\" \n          (mouseover)=\"image.showTitle=true\" (mouseleave)=\"image.showTitle=false\">\n          <span *ngIf=\"image.title != '' && image.showTitle\" class=\"img-content-hover\">\n            {{image.title}}\n          </span>\n      </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/templates/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/templates/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);





var HomeComponent = /** @class */ (function () {
    function HomeComponent(_apiService, router, spinnerService) {
        this._apiService = _apiService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.feedList = [];
        this.tags = [];
        this.router.routeReuseStrategy.shouldReuseRoute =
            function () {
                return false;
            };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getFeeds();
    };
    HomeComponent.prototype.getFeeds = function () {
        var _this = this;
        this.spinnerService.show();
        var queryTags = "";
        if (this.tags.length > 0) {
            var tagsArr = [];
            this.tags.map(function (tag) {
                console.log(tag.value);
                tagsArr.push(tag.value);
            });
            queryTags = JSON.stringify(tagsArr);
        }
        this._apiService.getFeeds(queryTags).subscribe(function (data) {
            if (data != null) {
                _this.feedList = data['images'];
                _this.feedList.map(function (feed) {
                    feed['showTitle'] = false;
                });
            }
            _this.spinnerService.hide();
        }, function (error) {
            console.log("error");
            _this.spinnerService.hide();
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/templates/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/templates/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/templates/layout/layout.component.css":
/*!*******************************************************!*\
  !*** ./src/app/templates/layout/layout.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/templates/layout/layout.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/layout/layout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/templates/layout/layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/templates/layout/layout.component.ts ***!
  \******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/templates/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/templates/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



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
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pujaagarwal/Documents/flickrapp/flickr-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map