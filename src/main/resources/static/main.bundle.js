webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".striking-text {\r\n    text-decoration: line-through;\r\n    color: #d9d9d9;\r\n}\r\n\r\n.form-container {\r\n    display: block;\r\n    width: 90%;\r\n    padding: 2em;\r\n    margin: 2em auto;\r\n    background: #fff;\r\n}\r\n\r\n.alert {\r\n    background: #f2edda;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n.button {\r\n    margin-top: 3rem;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 2rem;\r\n    font-weight: bold;\r\n    font-family: 'Muli';\r\n    font-size: 2em;\r\n}\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n@keyframes alertAnim {\r\n    from {\r\n        opacity: 0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to {\r\n        opacity: 1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <h1 style=\"color: rgba(58,152,67, 0.40)\">\n        Welcome to {{ title }}\n    </h1>\n</div>\n\n<div class=\"form-container\">\n    <form [formGroup]=\"todoForm\" (ngSubmit)=\"validatePost(todoForm.value)\">\n        <div class=\"row columns\">\n            <input type=\"text\" formControlName=\"name\">\n            <div class=\"alert\" *ngIf=\"!todoForm.controls['name'].valid && todoForm.controls['name'].touched\">\n                {{ nameAlert }}\n            </div>\n            <input type=\"submit\" value=\"Add Todo\" [disabled]=\"!todoForm.valid\">\n        </div>\n    </form>\n    <ol>\n        <li *ngFor=\"let todo of todos\" >\n            <input type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"todo.isDone\"/>\n            <span [class.striking-text]=\"todo.isDone\"> {{ todo.name }} </span>\n            <button class=\"class=btn btn-primary active\" (click)=\"updateTodo(todo)\"> Complete/Uncomplete</button>\n            <button class=\"class=btn btn-primary active\" (click)=\"removeTodo(todo)\"> Remove</button>\n\n        </li>\n    </ol>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(fb, httpClient) {
        this.fb = fb;
        this.httpClient = httpClient;
        this.title = 'ToDoApp';
        this.nameAlert = 'This field is required';
        this.name = '';
        this.todoForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(200)])]
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllToDoItems();
    };
    AppComponent.prototype.validatePost = function (post) {
        this.name = post.name;
        this.addTodo();
        this.todoForm.reset();
    };
    AppComponent.prototype.addTodo = function () {
        var _this = this;
        var newTodo = {
            name: this.name,
            isDone: false
        };
        this.httpClient.post('/todo', newTodo)
            .subscribe(function () {
            _this.getAllToDoItems();
        });
    };
    AppComponent.prototype.getAllToDoItems = function () {
        var _this = this;
        this.httpClient.get('/todo')
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    AppComponent.prototype.removeTodo = function (todo) {
        var _this = this;
        var url = '/todo/' + todo.id;
        this.httpClient.delete(url)
            .subscribe(function () {
            _this.getAllToDoItems();
        });
    };
    AppComponent.prototype.updateTodo = function (todo) {
        var _this = this;
        var modifiedTodo = {
            id: todo.id,
            isDone: todo.isDone
        };
        this.httpClient.put('/todo', modifiedTodo)
            .subscribe(function () {
            _this.getAllToDoItems();
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map