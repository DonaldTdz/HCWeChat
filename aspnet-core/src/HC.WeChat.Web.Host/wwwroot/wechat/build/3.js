webpackJsonp([3],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserBindComponentModule", function() { return UserBindComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_bind_component__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserBindComponentModule = (function () {
    function UserBindComponentModule() {
    }
    return UserBindComponentModule;
}());
UserBindComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_bind_component__["a" /* UserBindComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_bind_component__["a" /* UserBindComponent */]),
        ],
    })
], UserBindComponentModule);

//# sourceMappingURL=user-bind.component.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kl_model_index__ = __webpack_require__(326);


var AppComponentBase = (function () {
    function AppComponentBase(injector) {
        var platform = injector.get(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Platform */]);
        this.weChat = new __WEBPACK_IMPORTED_MODULE_1__kl_model_index__["d" /* WeChat */]();
        this.weChat.Code = platform.getQueryParam('code');
        this.weChat.State = platform.getQueryParam('state');
    }
    return AppComponentBase;
}());

//# sourceMappingURL=app-component-base.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBindComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component_base__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kl_model_index__ = __webpack_require__(326);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserBindComponent = (function (_super) {
    __extends(UserBindComponent, _super);
    function UserBindComponent(injector, platform, navCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.navCtrl = navCtrl;
        _this.pet = 'retailer';
        _this.isAndroid = false;
        _this.isAndroid = platform.is('android');
        _this.retailer = new __WEBPACK_IMPORTED_MODULE_3__kl_model_index__["b" /* Retailer */]();
        _this.retailer.Name = '刘洁';
        _this.retailer.LicenseKey = '1510250201010041';
        _this.employee = new __WEBPACK_IMPORTED_MODULE_3__kl_model_index__["a" /* Employee */]();
        _this.employee.Name = '李钢';
        _this.employee.Code = 'YB0001';
        return _this;
    }
    UserBindComponent.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserBindComponent');
    };
    UserBindComponent.prototype.bind = function () {
        this.navCtrl.push('user');
    };
    return UserBindComponent;
}(__WEBPACK_IMPORTED_MODULE_2__app_component_base__["a" /* AppComponentBase */]));
UserBindComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'user-bind'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'user-bind-component',template:/*ion-inline-start:"D:\mygit\HCWeChat\ionic-wechat\src\pages\wechat\marketing\user-bind\user-bind.component.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <ion-title>\n\n      用户绑定\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="userbind-content">\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="pet">\n\n      <ion-segment-button value="retailer">\n\n        零售客户\n\n      </ion-segment-button>\n\n      <ion-segment-button value="marker">\n\n        客户经理\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n  <div [ngSwitch]="pet">\n\n    <ion-list *ngSwitchCase="\'retailer\'">\n\n      <ion-item>\n\n        <ion-label fixed>姓名</ion-label>\n\n        <ion-input type="text" [(ngModel)]="retailer.Name" value=""></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>专卖证号</ion-label>\n\n        <ion-input type="text" [(ngModel)]="retailer.LicenseKey" value=""></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'marker\'">\n\n        <ion-item>\n\n            <ion-label fixed>姓名</ion-label>\n\n            <ion-input type="text" [(ngModel)]="employee.Name" value=""></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label fixed>员工编号</ion-label>\n\n            <ion-input type="text" [(ngModel)]="employee.Code" value=""></ion-input>\n\n          </ion-item>\n\n    </ion-list>\n\n    <div padding>\n\n        <button ion-button color="primary" (click)="bind()" block>绑定</button>\n\n      </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\mygit\HCWeChat\ionic-wechat\src\pages\wechat\marketing\user-bind\user-bind.component.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injector */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], UserBindComponent);

//# sourceMappingURL=user-bind.component.js.map

/***/ })

});
//# sourceMappingURL=3.js.map