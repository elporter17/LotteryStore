"use strict";
(self["webpackChunkloteria_frontend"] = self["webpackChunkloteria_frontend"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/supabase.service */ 9692);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AppComponent {
  constructor(supabaseService, router) {
    this.supabaseService = supabaseService;
    this.router = router;
  }
  ngOnInit() {
    // Verificar estado de autenticación al iniciar
    this.supabaseService.currentUser$.subscribe(user => {
      if (!user && !this.router.url.includes('login')) {
        this.router.navigate(['/login']);
      }
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_supabase_service__WEBPACK_IMPORTED_MODULE_0__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "app-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      styles: [".app-container[_ngcontent-%COMP%] {\n      min-height: 100vh;\n      background-color: #f5f5f5;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxpQkFBaUI7TUFDakIseUJBQXlCO0lBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmFwcC1jb250YWluZXIge1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 205);
/* harmony import */ var _components_sucursal_sucursal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sucursal/sucursal.component */ 179);
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/admin.component */ 6273);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/admin.guard */ 9153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);












const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'sucursal',
  component: _components_sucursal_sucursal_component__WEBPACK_IMPORTED_MODULE_2__.SucursalComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
}, {
  path: 'admin',
  component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__.AdminComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard, _guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__.AdminGuard]
}, {
  path: '**',
  redirectTo: '/login'
}];
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard, _guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__.AdminGuard],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _components_sucursal_sucursal_component__WEBPACK_IMPORTED_MODULE_2__.SucursalComponent, _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__.AdminComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 6273:
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/supabase.service */ 9692);
/* harmony import */ var _services_sorteo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sorteo.service */ 6390);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ 7473);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/print.service */ 4389);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);









function AdminComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sorteo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", sorteo_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](sorteo_r2.label);
  }
}
function AdminComponent_div_72_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 87)(2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 91)(9, "div", 92)(10, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Vendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 95)(15, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 96)(20, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Ganancia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    const sorteo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_7_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_7_0.numeroGanador);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Factor: ", ((tmp_8_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_8_0.factorMultiplicador) || 70, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ((tmp_9_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_9_0.totalVendido == null ? null : tmp_9_0.totalVendido.toFixed(2)) || "0.00", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ((tmp_10_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_10_0.totalPagado == null ? null : tmp_10_0.totalPagado.toFixed(2)) || "0.00", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("positive", (((tmp_11_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_11_0.gananciaNeta) || 0) > 0)("negative", (((tmp_12_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_12_0.gananciaNeta) || 0) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ((tmp_13_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_13_0.gananciaNeta == null ? null : tmp_13_0.gananciaNeta.toFixed(2)) || "0.00", "");
  }
}
function AdminComponent_div_72_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 99)(1, "div", 63)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "N\u00FAmero Ganador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_72_ng_template_11_div_0_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const sorteo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r3.winningNumbers[sorteo_r3.name], $event) || (ctx_r3.winningNumbers[sorteo_r3.name] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 63)(6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Factor Multiplicador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_72_ng_template_11_div_0_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const sorteo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r3.factorMultiplicador[sorteo_r3.name], $event) || (ctx_r3.factorMultiplicador[sorteo_r3.name] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_72_ng_template_11_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const sorteo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.setWinningNumber(sorteo_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Establecer Ganador ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sorteo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.winningNumbers[sorteo_r3.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.factorMultiplicador[sorteo_r3.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r3.factorMultiplicador[sorteo_r3.name] || 70)("disabled", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r3.winningNumbers[sorteo_r3.name] || ctx_r3.isLoading);
  }
}
function AdminComponent_div_72_ng_template_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Sorteo abierto - Esperando cierre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_72_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AdminComponent_div_72_ng_template_11_div_0_Template, 12, 6, "div", 97)(1, AdminComponent_div_72_ng_template_11_div_1_Template, 4, 0, "div", 98);
  }
  if (rf & 2) {
    const sorteo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.isSorteoOpen(sorteo_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.isSorteoOpen(sorteo_r3));
  }
}
function AdminComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80)(1, "div", 81)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 82)(5, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AdminComponent_div_72_div_10_Template, 24, 9, "div", 86)(11, AdminComponent_div_72_ng_template_11_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const sorteo_r3 = ctx.$implicit;
    const setWinner_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](sorteo_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("open", ctx_r3.isSorteoOpen(sorteo_r3))("closed", !ctx_r3.isSorteoOpen(sorteo_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r3.isSorteoOpen(sorteo_r3) ? "Abierto" : "Cerrado", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](sorteo_r3.closeTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_11_0.numeroGanador)("ngIfElse", setWinner_r6);
  }
}
function AdminComponent_div_85_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 116)(1, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 113)(12, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_85_div_16_Template_button_click_12_listener() {
      const sale_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.verDetalles(sale_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_85_div_16_Template_button_click_14_listener() {
      const sale_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.reprintReceipt(sale_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sale_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.formatDateTime(sale_r8.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](sale_r8.sucursal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](sale_r8.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", sale_r8.total.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](sale_r8.numeroRecibo || sale_r8.id.slice(-6));
  }
}
function AdminComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 105)(1, "div", 106)(2, "div", 107)(3, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Sorteo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Recibo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AdminComponent_div_85_div_16_Template, 16, 5, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.sales)("ngForTrackBy", ctx_r3.trackBySale);
  }
}
function AdminComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No hay ventas para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Ajusta los filtros para ver diferentes resultados");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_97_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 116)(1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 127)(8, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 113)(11, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_97_div_14_Template_button_click_11_listener() {
      const user_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.editUser(user_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_97_div_14_Template_button_click_13_listener() {
      const user_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.toggleUserStatus(user_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r10.role === "admin" ? "Administrador" : "Sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r10.sucursal || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", user_r10.active)("inactive", !user_r10.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", user_r10.active ? "Activo" : "Inactivo", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("fa-toggle-on", user_r10.active)("fa-toggle-off", !user_r10.active);
  }
}
function AdminComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 123)(1, "div", 124)(2, "div", 107)(3, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AdminComponent_div_97_div_14_Template, 15, 12, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.users)("ngForTrackBy", ctx_r3.trackByUser);
  }
}
function AdminComponent_ng_template_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No hay usuarios registrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Crea el primer usuario para comenzar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63)(1, "label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Contrase\u00F1a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_117_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r3.userFormData.password, $event) || (ctx_r3.userFormData.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.userFormData.password);
  }
}
function AdminComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63)(1, "label", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Sucursal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_126_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r3.userFormData.sucursal, $event) || (ctx_r3.userFormData.sucursal = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.userFormData.sucursal);
  }
}
class AdminComponent {
  constructor(supabaseService, sorteoService, notificationService, printService, router) {
    this.supabaseService = supabaseService;
    this.sorteoService = sorteoService;
    this.notificationService = notificationService;
    this.printService = printService;
    this.router = router;
    this.currentUser = null;
    this.sorteos = this.sorteoService.getAllSorteos();
    this.sales = [];
    this.saleDetails = {};
    this.sorteosData = {};
    this.winningNumbers = {};
    this.factorMultiplicador = {};
    this.selectedSorteoFilter = '';
    this.isLoading = false;
    this.selectedDate = '';
    // Nuevas propiedades para las mejoras
    this.fechaDesde = '';
    this.fechaHasta = '';
    this.users = [];
    this.showUserModal = false;
    this.editingUser = null;
    this.userFormData = {
      email: '',
      password: '',
      role: 'sucursal',
      sucursal: '',
      active: true
    };
    const today = new Date();
    this.selectedDate = today.toISOString().split('T')[0];
    // Inicializar fechas para filtros
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0);
    this.fechaDesde = startOfDay.toISOString().slice(0, 16);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);
    this.fechaHasta = endOfDay.toISOString().slice(0, 16);
  }
  ngOnInit() {
    this.supabaseService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (!user || user.role !== 'admin') {
        this.router.navigate(['/login']);
      }
    });
    this.loadSales();
    this.loadSorteosData();
    this.loadUsers();
  }
  isSorteoOpen(sorteo) {
    return this.sorteoService.isSorteoOpen(sorteo);
  }
  getSorteoData(sorteo) {
    const today = new Date().toDateString();
    return this.sorteosData[`${today}-${sorteo.name}`];
  }
  loadSales() {
    var _this = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const selectedDateObj = _this.selectedDate ? new Date(_this.selectedDate) : new Date();
        _this.sales = yield _this.supabaseService.getSalesByDateAndSorteo(selectedDateObj, _this.selectedSorteoFilter);
        // Cargar detalles de cada venta
        for (const sale of _this.sales) {
          _this.saleDetails[sale.id] = yield _this.supabaseService.getSaleDetails(sale.id);
        }
      } catch (error) {
        console.error('Error cargando ventas:', error);
      }
    })();
  }
  loadSorteosData() {
    var _this2 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const today = new Date();
        for (const sorteo of _this2.sorteos) {
          const sorteoData = yield _this2.supabaseService.getSorteo(today, sorteo.name);
          if (sorteoData) {
            _this2.sorteosData[sorteoData.id] = sorteoData;
          }
        }
      } catch (error) {
        console.error('Error cargando datos de sorteos:', error);
      }
    })();
  }
  getSaleDetails(saleId) {
    return this.saleDetails[saleId] || [];
  }
  setWinningNumber(sorteo) {
    var _this3 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const winningNumber = _this3.winningNumbers[sorteo.name];
      const multiplicador = _this3.factorMultiplicador[sorteo.name] || 70;
      if (!winningNumber) {
        alert('Por favor ingrese un número ganador');
        return;
      }
      try {
        const today = new Date();
        const sorteoId = `${today.toDateString()}-${sorteo.name}`;
        yield _this3.supabaseService.updateSorteoWinner(sorteoId, winningNumber, multiplicador);
        // Recalcular totales
        yield _this3.calculateSorteoResults(sorteo, winningNumber, multiplicador);
        // Recargar datos
        yield _this3.loadSorteosData();
        alert('Número ganador establecido correctamente');
      } catch (error) {
        console.error('Error estableciendo número ganador:', error);
        alert('Error al establecer el número ganador');
      }
    })();
  }
  calculateSorteoResults(_x, _x2) {
    var _this4 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (sorteo, winningNumber, multiplicador = 70) {
      const today = new Date();
      const sorteoSales = yield _this4.supabaseService.getSalesByDateAndSorteo(today, sorteo.name);
      let totalVendido = 0;
      let totalPagado = 0;
      for (const sale of sorteoSales) {
        totalVendido += sale.total;
        const details = yield _this4.supabaseService.getSaleDetails(sale.id);
        for (const detail of details) {
          if (detail.numero === winningNumber) {
            totalPagado += detail.monto * multiplicador;
          }
        }
      }
      const gananciaNeta = totalVendido - totalPagado;
      // Actualizar o crear sorteo
      const [hours, minutes] = sorteo.closeTime.split(':');
      const horaCierre = new Date();
      horaCierre.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      yield _this4.supabaseService.createOrUpdateSorteo({
        fecha: today,
        sorteo: sorteo.name,
        horaCierre,
        numeroGanador: winningNumber,
        factorMultiplicador: multiplicador,
        totalVendido,
        totalPagado,
        gananciaNeta,
        cerrado: true
      });
    }).apply(this, arguments);
  }
  getTotalSales() {
    return this.sales.reduce((total, sale) => total + sale.total, 0);
  }
  getSucursalSummary() {
    const summary = {};
    for (const sale of this.sales) {
      if (!summary[sale.sucursal]) {
        summary[sale.sucursal] = {
          total: 0,
          count: 0
        };
      }
      summary[sale.sucursal].total += sale.total;
      summary[sale.sucursal].count += 1;
    }
    return Object.entries(summary).map(([name, data]) => ({
      name,
      total: data.total,
      count: data.count
    }));
  }
  // Métodos para cards de resumen
  getTotalVendido() {
    return this.sales.reduce((total, sale) => total + sale.total, 0);
  }
  getTotalPagado() {
    return Object.values(this.sorteosData).reduce((total, sorteo) => total + (sorteo.totalPagado || 0), 0);
  }
  getGananciaNeta() {
    return this.getTotalVendido() - this.getTotalPagado();
  }
  getTotalVentas() {
    return this.sales.length;
  }
  // Métodos para filtros de fecha
  aplicarFiltros() {
    if (this.fechaDesde && this.fechaHasta) {
      this.loadSalesByDateRange();
    } else if (this.fechaDesde) {
      this.selectedDate = this.fechaDesde;
      this.loadSales();
    } else {
      this.loadSales();
    }
  }
  limpiarFiltros() {
    const today = new Date();
    this.fechaDesde = '';
    this.fechaHasta = '';
    this.selectedDate = today.toISOString().split('T')[0];
    this.selectedSorteoFilter = '';
    this.loadSales();
  }
  onFiltroFechaChange() {
    // Auto-aplicar filtros cuando cambian las fechas
    this.aplicarFiltros();
  }
  loadSalesByDateRange() {
    var _this5 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.fechaDesde || !_this5.fechaHasta) return;
      _this5.isLoading = true;
      try {
        const fechaDesdeDate = new Date(_this5.fechaDesde);
        const fechaHastaDate = new Date(_this5.fechaHasta);
        // Cargar ventas para cada día en el rango
        let allSales = [];
        let currentDate = new Date(fechaDesdeDate);
        while (currentDate <= fechaHastaDate) {
          const daySales = yield _this5.supabaseService.getSalesByDateAndSorteo(currentDate, _this5.selectedSorteoFilter);
          allSales = [...allSales, ...daySales];
          currentDate.setDate(currentDate.getDate() + 1);
        }
        _this5.sales = allSales;
        // Cargar detalles de todas las ventas
        for (const sale of _this5.sales) {
          _this5.saleDetails[sale.id] = yield _this5.supabaseService.getSaleDetails(sale.id);
        }
      } catch (error) {
        console.error('Error cargando ventas por rango:', error);
        _this5.notificationService.showError('Error al cargar las ventas');
      } finally {
        _this5.isLoading = false;
      }
    })();
  }
  // Gestión de usuarios
  loadUsers() {
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Implementar método en SupabaseService para cargar usuarios
        // this.users = await this.supabaseService.getUsers();
        console.log('Cargando usuarios...');
      } catch (error) {
        console.error('Error cargando usuarios:', error);
      }
    })();
  }
  closeUserModal() {
    this.showUserModal = false;
    this.editingUser = null;
    this.userFormData = {
      email: '',
      password: '',
      role: 'sucursal',
      sucursal: '',
      active: true
    };
  }
  editUser(user) {
    this.editingUser = user;
    this.userFormData = {
      ...user
    };
    this.showUserModal = true;
  }
  saveUser() {
    var _this6 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this6.isLoading = true;
        if (_this6.editingUser) {
          // Actualizar usuario existente
          console.log('Actualizando usuario:', _this6.userFormData);
          _this6.notificationService.showSuccess('Usuario actualizado exitosamente');
        } else {
          // Crear nuevo usuario
          console.log('Creando usuario:', _this6.userFormData);
          _this6.notificationService.showSuccess('Usuario creado exitosamente');
        }
        _this6.closeUserModal();
        yield _this6.loadUsers();
      } catch (error) {
        console.error('Error guardando usuario:', error);
        _this6.notificationService.showError('Error al guardar el usuario');
      } finally {
        _this6.isLoading = false;
      }
    })();
  }
  deleteUser(userId) {
    var _this7 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirmed = yield _this7.notificationService.showConfirmation('Eliminar Usuario', '¿Está seguro que desea eliminar este usuario?');
      if (confirmed) {
        try {
          _this7.isLoading = true;
          // Implementar eliminación en SupabaseService
          console.log('Eliminando usuario:', userId);
          _this7.notificationService.showSuccess('Usuario eliminado exitosamente');
          yield _this7.loadUsers();
        } catch (error) {
          console.error('Error eliminando usuario:', error);
          _this7.notificationService.showError('Error al eliminar el usuario');
        } finally {
          _this7.isLoading = false;
        }
      }
    })();
  }
  onDateChange() {
    this.loadSales();
  }
  onSorteoFilterChange() {
    this.loadSales();
  }
  generateDailyReport() {
    const reportDate = this.selectedDate ? new Date(this.selectedDate) : new Date();
    this.printService.generateDailyReport(this.sales, reportDate);
  }
  // Método mejorado para reimprimir recibo desde admin
  reprintReceipt(sale) {
    var _this8 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Reimprimiendo recibo desde admin para venta:', sale);
        // Obtener detalles de la venta desde la base de datos
        const details = yield _this8.supabaseService.getSaleDetails(sale.id);
        console.log('Detalles obtenidos de la BD:', details);
        if (details.length === 0) {
          console.warn('No se encontraron detalles para la venta:', sale.id);
          _this8.notificationService.showError('No se encontraron detalles para esta venta. No se puede reimprimir el recibo.');
          return;
        }
        // Generar recibo con los detalles obtenidos
        _this8.printService.generateThermalReceipt(sale, details);
        _this8.notificationService.showSuccess('Recibo enviado a impresión');
      } catch (error) {
        console.error('Error reimprimiendo recibo:', error);
        _this8.notificationService.showError('Error al reimprimir el recibo. Por favor intente nuevamente.');
      }
    })();
  }
  logout() {
    var _this9 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this9.supabaseService.logout();
      _this9.router.navigate(['/login']);
    })();
  }
  // Métodos para el nuevo diseño minimalista
  formatDateTime(dateInput) {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    return date.toLocaleString('es-HN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  // Métodos faltantes para el template del admin
  exportarVentas() {
    // Método legacy - ahora llama a Excel por defecto
    this.exportarVentasExcel();
  }
  exportarVentasExcel() {
    this.generateVentasReportExcel();
  }
  exportarVentasPDF() {
    this.generateVentasReportPDF();
  }
  trackBySale(index, sale) {
    return sale.id;
  }
  trackByUser(index, user) {
    return user.id || index.toString();
  }
  verDetalles(sale) {
    const details = this.getSaleDetails(sale.id);
    const numeros = details.map(d => `#${d.numero.toString().padStart(2, '0')} x L${d.monto}`).join(', ');
    const mensaje = `Detalles de Venta\n\n` + `Recibo: ${sale.numeroRecibo}\n` + `Correlativo: ${sale.correlativo}\n` + `Fecha: ${this.formatDateTime(sale.createdAt)}\n` + `Sucursal: ${sale.sucursal}\n` + `Sorteo: ${sale.sorteo}\n` + `Total: L ${sale.total.toFixed(2)}\n\n` + `Números: ${numeros}`;
    alert(mensaje);
  }
  createUser() {
    this.editingUser = null;
    this.userFormData = {
      email: '',
      password: '',
      role: 'sucursal',
      sucursal: '',
      active: true
    };
    this.showUserModal = true;
  }
  toggleUserStatus(user) {
    // Implementar cambio de estado del usuario
    user.active = !user.active;
    console.log('Cambiando estado del usuario:', user);
    // Aquí se debería llamar al servicio para actualizar en la BD
  }
  // Método para generar reporte de ventas en Excel
  generateVentasReportExcel() {
    if (this.sales.length === 0) {
      this.notificationService.showError('No hay ventas para exportar');
      return;
    }
    try {
      // Generar CSV
      let csvContent = 'Fecha,Sucursal,Sorteo,Total,Recibo,Correlativo,Números\n';
      for (const sale of this.sales) {
        const details = this.getSaleDetails(sale.id);
        const numeros = details.map(d => `${d.numero}x${d.monto}`).join(';');
        csvContent += `"${this.formatDateTime(sale.createdAt)}","${sale.sucursal}","${sale.sorteo}","${sale.total}","${sale.numeroRecibo || sale.id.slice(-6)}","${sale.correlativo}","${numeros}"\n`;
      }
      // Descargar archivo
      const blob = new Blob([csvContent], {
        type: 'text/csv;charset=utf-8;'
      });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `ventas_excel_${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.notificationService.showSuccess('Reporte Excel exportado exitosamente');
    } catch (error) {
      console.error('Error exportando ventas a Excel:', error);
      this.notificationService.showError('Error al exportar el reporte Excel');
    }
  }
  // Método para generar reporte de ventas en PDF
  generateVentasReportPDF() {
    if (this.sales.length === 0) {
      this.notificationService.showError('No hay ventas para exportar');
      return;
    }
    try {
      // Usar el servicio de impresión para generar PDF
      this.printService.generateVentasReportPDF(this.sales, this.saleDetails, {
        fechaDesde: this.fechaDesde,
        fechaHasta: this.fechaHasta,
        sorteoFilter: this.selectedSorteoFilter
      });
      this.notificationService.showSuccess('Reporte PDF generado exitosamente');
    } catch (error) {
      console.error('Error exportando ventas a PDF:', error);
      this.notificationService.showError('Error al exportar el reporte PDF');
    }
  }
  // Método para generar reporte de ventas (legacy)
  generateVentasReport() {
    // Mantener método legacy, ahora llama a Excel
    this.generateVentasReportExcel();
  }
  onFactorChange(sorteoName, event) {
    const target = event.target;
    if (target && target.value) {
      this.factorMultiplicador[sorteoName] = +target.value;
    }
  }
  static {
    this.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_sorteo_service__WEBPACK_IMPORTED_MODULE_2__.SorteoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 139,
      vars: 35,
      consts: [["noSales", ""], ["noUsers", ""], ["userForm", "ngForm"], ["setWinner", ""], [1, "admin-interface"], [1, "header-bar"], [1, "admin-title"], [1, "fas", "fa-cog"], [1, "btn-header", "btn-cerrar", 3, "click", "disabled"], [1, "fas", "fa-sign-out-alt"], [1, "filters-bar"], [1, "filter-group"], ["for", "fechaDesde"], ["type", "datetime-local", "id", "fechaDesde", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["for", "fechaHasta"], ["type", "datetime-local", "id", "fechaHasta", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["for", "sorteoFilter"], ["id", "sorteoFilter", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "filter-actions"], [1, "btn-filter", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-search"], [1, "btn-filter", "btn-secondary", 3, "click", "disabled"], [1, "fas", "fa-eraser"], [1, "main-content"], [1, "summary-cards"], [1, "summary-card", "vendido"], [1, "card-icon"], [1, "fas", "fa-chart-line"], [1, "card-content"], [1, "summary-card", "pagado"], [1, "fas", "fa-coins"], [1, "summary-card", "ganancia"], [1, "fas", "fa-piggy-bank"], [1, "summary-card", "ventas"], [1, "fas", "fa-shopping-cart"], [1, "sorteos-section"], [1, "section-header"], [1, "fas", "fa-dice"], [1, "sorteos-grid"], ["class", "sorteo-card", 4, "ngFor", "ngForOf"], [1, "ventas-section"], [1, "fas", "fa-list"], [1, "section-actions"], ["title", "Exportar a Excel", 1, "btn-action", 3, "click", "disabled"], [1, "fas", "fa-file-excel"], ["title", "Exportar a PDF", 1, "btn-action", 3, "click", "disabled"], [1, "fas", "fa-file-pdf"], ["class", "ventas-table-container", 4, "ngIf", "ngIfElse"], [1, "users-section"], [1, "fas", "fa-users"], [1, "btn-action", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-plus"], ["class", "users-table-container", 4, "ngIf", "ngIfElse"], [1, "modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "fas", "fa-user"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "form-group"], ["for", "userEmail"], ["type", "email", "id", "userEmail", "required", "", "name", "email", "placeholder", "usuario@ejemplo.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "form-group", 4, "ngIf"], ["for", "userRole"], ["id", "userRole", "name", "role", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["value", "admin"], ["value", "sucursal"], [1, "checkbox-label"], ["type", "checkbox", "name", "active", 3, "ngModelChange", "ngModel"], [1, "checkmark"], [1, "modal-footer"], ["type", "button", 1, "btn-modal", "btn-secondary", 3, "click"], [1, "fas", "fa-times"], ["type", "button", 1, "btn-modal", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-save"], [3, "value"], [1, "sorteo-card"], [1, "sorteo-header"], [1, "sorteo-status"], [1, "status-badge"], [1, "close-time"], [1, "sorteo-content"], [4, "ngIf", "ngIfElse"], [1, "winner-section"], [1, "winner-number"], [1, "fas", "fa-trophy"], [1, "factor"], [1, "sorteo-stats"], [1, "stat-item", "vendido"], [1, "label"], [1, "value"], [1, "stat-item", "pagado"], [1, "stat-item", "ganancia"], ["class", "winner-form", 4, "ngIf"], ["class", "sorteo-open-message", 4, "ngIf"], [1, "winner-form"], ["type", "number", "min", "1", "max", "99", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "number", "min", "1", "max", "100", "step", "0.1", 1, "form-input", 3, "ngModelChange", "ngModel", "value", "disabled"], [1, "btn-set-winner", 3, "click", "disabled"], [1, "sorteo-open-message"], [1, "fas", "fa-clock"], [1, "ventas-table-container"], [1, "ventas-table"], [1, "table-header"], [1, "col-fecha"], [1, "col-sucursal"], [1, "col-sorteo"], [1, "col-total"], [1, "col-recibo"], [1, "col-acciones"], [1, "table-body"], ["class", "table-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "table-row"], ["title", "Ver detalles", 1, "btn-table-action", 3, "click"], [1, "fas", "fa-eye"], ["title", "Reimprimir", 1, "btn-table-action", 3, "click"], [1, "fas", "fa-print"], [1, "no-data-message"], [1, "fas", "fa-inbox"], [1, "users-table-container"], [1, "users-table"], [1, "col-email"], [1, "col-role"], [1, "col-status"], ["title", "Editar", 1, "btn-table-action", 3, "click"], [1, "fas", "fa-edit"], ["title", "Cambiar estado", 1, "btn-table-action", "danger", 3, "click"], [1, "fas"], [1, "fas", "fa-users-slash"], ["for", "userPassword"], ["type", "password", "id", "userPassword", "required", "", "name", "password", "placeholder", "Contrase\u00F1a segura", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "userSucursal"], ["type", "text", "id", "userSucursal", "name", "sucursal", "placeholder", "Nombre de la sucursal", 1, "form-input", 3, "ngModelChange", "ngModel"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Panel de Administraci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.logout());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Cerrar Sesi\u00F3n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 10)(10, "div", 11)(11, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Desde:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.fechaDesde, $event) || (ctx.fechaDesde = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onFiltroFechaChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11)(15, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Hasta:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.fechaHasta, $event) || (ctx.fechaHasta = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onFiltroFechaChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 11)(19, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Sorteo:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedSorteoFilter, $event) || (ctx.selectedSorteoFilter = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AdminComponent_Template_select_change_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.aplicarFiltros());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "option", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Todos los sorteos");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AdminComponent_option_24_Template, 2, 2, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 20)(26, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.aplicarFiltros());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Filtrar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.limpiarFiltros());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Limpiar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 25)(33, "div", 26)(34, "div", 27)(35, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 30)(38, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Total Vendido");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 31)(43, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 30)(46, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Total Pagado");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 33)(51, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 30)(54, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Ganancia Neta");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 35)(59, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 30)(62, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Ventas Totales");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 37)(67, "div", 38)(68, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, " Gesti\u00F3n de Sorteos");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, AdminComponent_div_72_Template, 13, 9, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 42)(74, "div", 38)(75, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, " Historial de Ventas");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 44)(79, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_79_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.exportarVentasExcel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, " Excel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "button", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_82_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.exportarVentasPDF());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, " PDF ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](85, AdminComponent_div_85_Template, 17, 2, "div", 49)(86, AdminComponent_ng_template_86_Template, 6, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 50)(89, "div", 38)(90, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "i", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, " Gesti\u00F3n de Usuarios");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 44)(94, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_94_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.createUser());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](95, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, " Nuevo Usuario ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, AdminComponent_div_97_Template, 15, 2, "div", 54)(98, AdminComponent_ng_template_98_Template, 6, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 55)(101, "div", 56)(102, "div", 57)(103, "div", 58)(104, "h5", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](105, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_107_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.closeUserModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 62)(111, "form", null, 2)(113, "div", 63)(114, "label", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "Email:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "input", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_116_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.userFormData.email, $event) || (ctx.userFormData.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](117, AdminComponent_div_117_Template, 4, 1, "div", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 63)(119, "label", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, "Rol:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "select", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_121_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.userFormData.role, $event) || (ctx.userFormData.role = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "option", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, "Administrador");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "option", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, "Sucursal");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](126, AdminComponent_div_126_Template, 4, 1, "div", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "div", 63)(128, "label", 71)(129, "input", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_129_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.userFormData.active, $event) || (ctx.userFormData.active = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](130, "span", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, " Usuario Activo ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](132, "div", 74)(133, "button", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_133_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.closeUserModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](134, "i", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, " Cancelar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "button", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_136_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.saveUser());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](137, "i", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          const noSales_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](87);
          const noUsers_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](99);
          const userForm_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](112);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaDesde);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaHasta);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedSorteoFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sorteos);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ctx.getTotalVendido().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ctx.getTotalPagado().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("positive", ctx.getGananciaNeta() > 0)("negative", ctx.getGananciaNeta() < 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ctx.getGananciaNeta().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.getTotalVentas());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sorteos);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sales.length > 0)("ngIfElse", noSales_r13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.users.length > 0)("ngIfElse", noUsers_r14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("display", ctx.showUserModal ? "flex" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx.showUserModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.editingUser ? "Editar Usuario" : "Crear Usuario", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.userFormData.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.editingUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.userFormData.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userFormData.role === "sucursal");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.userFormData.active);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !userForm_r15.valid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.editingUser ? "Actualizar" : "Crear", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm],
      styles: ["\n\n.admin-interface[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n\n\n.header-bar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);\n  color: white;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.admin-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.admin-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n\n.btn-header[_ngcontent-%COMP%] {\n  background: rgba(52, 152, 219, 0.2);\n  border: 1px solid rgba(52, 152, 219, 0.3);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.btn-header[_ngcontent-%COMP%]:hover {\n  background: rgba(52, 152, 219, 0.3);\n  border-color: rgba(52, 152, 219, 0.5);\n  transform: translateY(-1px);\n}\n\n.btn-cerrar[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.2);\n  border-color: rgba(231, 76, 60, 0.3);\n}\n\n.btn-cerrar[_ngcontent-%COMP%]:hover {\n  background: rgba(231, 76, 60, 0.3);\n  border-color: rgba(231, 76, 60, 0.5);\n}\n\n\n\n.filters-bar[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem 2rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  border-bottom: 1px solid #e9ecef;\n  display: flex;\n  align-items: flex-end;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-width: 160px;\n}\n\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  font-size: 0.9rem;\n}\n\n.form-control[_ngcontent-%COMP%], .form-input[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 2px solid #e9ecef;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-left: auto;\n}\n\n.btn-filter[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.btn-filter.btn-primary[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n}\n\n.btn-filter.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2980b9;\n  transform: translateY(-1px);\n}\n\n.btn-filter.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n\n.btn-filter.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n  transform: translateY(-1px);\n}\n\n\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n\n\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f8f9fa;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n\n.card-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: white;\n}\n\n.summary-card.vendido[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db, #2980b9);\n}\n\n.summary-card.pagado[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n}\n\n.summary-card.ganancia[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #27ae60, #229954);\n}\n\n.summary-card.ganancia.negative[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n}\n\n.summary-card.ventas[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f39c12, #d68910);\n}\n\n.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #2c3e50;\n}\n\n.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7f8c8d;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n\n\n.sorteos-section[_ngcontent-%COMP%], .ventas-section[_ngcontent-%COMP%], .users-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  margin-bottom: 2rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n\n.section-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e9ecef;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #2c3e50;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.section-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n\n.btn-action[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #6c757d;\n  color: white;\n}\n\n.btn-action.btn-primary[_ngcontent-%COMP%] {\n  background: #3498db;\n}\n\n.btn-action[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  filter: brightness(1.1);\n}\n\n\n\n.sorteos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 1.5rem;\n  padding: 2rem;\n}\n\n.sorteo-card[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  padding: 1.5rem;\n  transition: all 0.2s ease;\n}\n\n.sorteo-card[_ngcontent-%COMP%]:hover {\n  border-color: #3498db;\n  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.1);\n}\n\n.sorteo-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #f8f9fa;\n}\n\n.sorteo-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2c3e50;\n  font-weight: 600;\n}\n\n.sorteo-status[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.status-badge.open[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n  border: 1px solid rgba(39, 174, 96, 0.2);\n}\n\n.status-badge.closed[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  color: #e74c3c;\n  border: 1px solid rgba(231, 76, 60, 0.2);\n}\n\n.status-badge.active[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n  border: 1px solid rgba(39, 174, 96, 0.2);\n}\n\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: rgba(149, 165, 166, 0.1);\n  color: #95a5a6;\n  border: 1px solid rgba(149, 165, 166, 0.2);\n}\n\n.close-time[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: #7f8c8d;\n  margin-top: 0.25rem;\n}\n\n.winner-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n\n.winner-number[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f39c12, #d68910);\n  color: white;\n  padding: 1rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n\n.factor[_ngcontent-%COMP%] {\n  color: #7f8c8d;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n.sorteo-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.75rem;\n  border-radius: 6px;\n  background: #f8f9fa;\n}\n\n.stat-item.vendido[_ngcontent-%COMP%] {\n  background: rgba(52, 152, 219, 0.1);\n  color: #3498db;\n}\n\n.stat-item.pagado[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  color: #e74c3c;\n}\n\n.stat-item.ganancia[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  color: #27ae60;\n}\n\n.stat-item.ganancia.negative[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  color: #e74c3c;\n}\n\n.stat-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 500;\n  margin-bottom: 0.25rem;\n}\n\n.stat-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  font-weight: 700;\n}\n\n.winner-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  font-size: 0.9rem;\n}\n\n.btn-set-winner[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f39c12, #d68910);\n  color: white;\n  border: none;\n  padding: 0.75rem 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.btn-set-winner[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  filter: brightness(1.1);\n}\n\n.sorteo-open-message[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #7f8c8d;\n  font-style: italic;\n  padding: 1rem;\n  background: #f8f9fa;\n  border-radius: 6px;\n}\n\n\n\n.ventas-table-container[_ngcontent-%COMP%], .users-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  max-height: 600px;\n}\n\n.ventas-table[_ngcontent-%COMP%], .users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 0.9rem;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-bottom: 2px solid #e9ecef;\n  padding: 1rem;\n  display: grid;\n  font-weight: 600;\n  color: #495057;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.ventas-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  grid-template-columns: 150px 120px 100px 100px 120px 100px;\n}\n\n.users-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 120px 150px 100px 120px;\n}\n\n.table-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #f8f9fa;\n  display: grid;\n  align-items: center;\n  transition: all 0.2s ease;\n}\n\n.ventas-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 150px 120px 100px 100px 120px 100px;\n}\n\n.users-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 120px 150px 100px 120px;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n\n.col-fecha[_ngcontent-%COMP%], .col-sucursal[_ngcontent-%COMP%], .col-sorteo[_ngcontent-%COMP%], .col-total[_ngcontent-%COMP%], .col-recibo[_ngcontent-%COMP%], .col-acciones[_ngcontent-%COMP%], .col-email[_ngcontent-%COMP%], .col-role[_ngcontent-%COMP%], .col-status[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  font-size: 0.85rem;\n}\n\n.col-total[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #27ae60;\n}\n\n.btn-table-action[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #6c757d;\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n  margin-right: 0.5rem;\n}\n\n.btn-table-action[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  color: #3498db;\n}\n\n.btn-table-action.danger[_ngcontent-%COMP%]:hover {\n  color: #e74c3c;\n}\n\n\n\n.no-data-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #7f8c8d;\n}\n\n.no-data-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  color: #bdc3c7;\n}\n\n.no-data-message[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  color: #95a5a6;\n}\n\n.no-data-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n\n.modal.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);\n  transform: scale(0.9);\n  transition: transform 0.2s ease;\n}\n\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid #e9ecef;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 12px 12px 0 0;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #2c3e50;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: #7f8c8d;\n  padding: 0;\n  line-height: 1;\n}\n\n.close[_ngcontent-%COMP%]:hover {\n  color: #e74c3c;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1.5rem 2rem;\n  border-top: 1px solid #e9ecef;\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  border-radius: 0 0 12px 12px;\n}\n\n.btn-modal[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.btn-modal.btn-primary[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n}\n\n.btn-modal.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n\n.btn-modal[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  filter: brightness(1.1);\n}\n\n\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  font-weight: 500;\n  color: #495057;\n}\n\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .filters-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .filter-actions[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sorteos-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ventas-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .ventas-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 120px 100px 80px 80px 100px 80px;\n    font-size: 0.8rem;\n  }\n  .users-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .users-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 80px 100px 80px 80px;\n    font-size: 0.8rem;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .modal-dialog[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 1rem;\n  }\n}\n\n\n.btn-filter[_ngcontent-%COMP%]:disabled, .btn-action[_ngcontent-%COMP%]:disabled, .btn-set-winner[_ngcontent-%COMP%]:disabled, .btn-modal[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.summary-card[_ngcontent-%COMP%], .sorteo-card[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL0xvdGVyaWElMjB2MS9sb3RlcmlhL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpREFBQTtBQUVBO0VBQ0UsaUJBQUE7RUFDQSw2REFBQTtFQUNBLDREQUFBO0FDQUY7O0FER0EsdUJBQUE7QUFDQTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UsbUNBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxtQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGtDQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQTtFQUNFLGtDQUFBO0VBQ0Esb0NBQUE7QUNBRjs7QURHQSx3QkFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQSxvQ0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBLGlDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxxREFBQTtBQ0FGOztBREdBO0VBQ0UscURBQUE7QUNBRjs7QURHQTtFQUNFLHFEQUFBO0FDQUY7O0FER0E7RUFDRSxxREFBQTtBQ0FGOztBREdBO0VBQ0UscURBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0EsMEJBQUE7QUFDQTs7O0VBR0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBLHdCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7RUFDQSw4Q0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSx3Q0FBQTtBQ0FGOztBREdBO0VBQ0Usa0NBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QUNBRjs7QURHQTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0FDQUY7O0FER0E7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxxREFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLGtDQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0Usa0NBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UscURBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBLHVCQUFBO0FBQ0E7O0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBOztFQUVFLFdBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsMERBQUE7QUNBRjs7QURHQTtFQUNFLGtEQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQUY7O0FER0E7RUFDRSwwREFBQTtBQ0FGOztBREdBO0VBQ0Usa0RBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7O0VBRUUsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQSxtQ0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQSxzQkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNBRjs7QURHQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBLHlCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURHQSwyQkFBQTtBQUNBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0VDQUY7RURHQTtJQUNFLGNBQUE7RUNERjtFRElBO0lBQ0UsMEJBQUE7RUNGRjtFREtBO0lBQ0UsMEJBQUE7RUNIRjtFRE1BOztJQUVFLHVEQUFBO0lBQ0EsaUJBQUE7RUNKRjtFRE9BOztJQUVFLCtDQUFBO0lBQ0EsaUJBQUE7RUNMRjtFRFFBO0lBQ0UsYUFBQTtFQ05GO0VEU0E7SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQ1BGO0FBQ0Y7QURVQSxpQ0FBQTtBQUNBOzs7O0VBSUUsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNSRjs7QURXQSxvQ0FBQTtBQUNBO0VBQ0U7SUFBTyxVQUFBO0lBQVksMkJBQUE7RUNObkI7RURPQTtJQUFLLFVBQUE7SUFBWSx3QkFBQTtFQ0hqQjtBQUNGO0FES0E7OztFQUdFLDJCQUFBO0FDSEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBRE1JTiBQQU5FTCAtIEVTVElMTyBNSU5JTUFMSVNUQSBDT05TSVNURU5URSAqL1xyXG5cclxuLmFkbWluLWludGVyZmFjZSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2U5ZWNlZiAxMDAlKTtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qID09PT09IEhFQURFUiA9PT09PSAqL1xyXG4uaGVhZGVyLWJhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzJjM2U1MCAwJSwgIzM0NDk1ZSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uYWRtaW4tdGl0bGUgaDIge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmFkbWluLXRpdGxlIGkge1xyXG4gIGNvbG9yOiAjMzQ5OGRiO1xyXG59XHJcblxyXG4uYnRuLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5idG4taGVhZGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmJ0bi1jZXJyYXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMxLCA3NiwgNjAsIDAuMik7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjMpO1xyXG59XHJcblxyXG4uYnRuLWNlcnJhcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC4zKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjMxLCA3NiwgNjAsIDAuNSk7XHJcbn1cclxuXHJcbi8qID09PT09IEZJTFRST1MgPT09PT0gKi9cclxuLmZpbHRlcnMtYmFyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmlsdGVyLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuLmZpbHRlci1ncm91cCBsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCwgLmZvcm0taW5wdXQge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLWlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogIzM0OThkYjtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMSk7XHJcbn1cclxuXHJcbi5maWx0ZXItYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5idG4tZmlsdGVyIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLWZpbHRlci5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tZmlsdGVyLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmJ0bi1maWx0ZXIuYnRuLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tZmlsdGVyLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1YTYyNjg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4vKiA9PT09PSBDT05URU5JRE8gUFJJTkNJUEFMID09PT09ICovXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8qID09PT09IENBUkRTIERFIFJFU1VNRU4gPT09PT0gKi9cclxuLnN1bW1hcnktY2FyZHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY5ZmE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uc3VtbWFyeS1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsMCwwLDAuMTIpO1xyXG59XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3VtbWFyeS1jYXJkLnZlbmRpZG8gLmNhcmQtaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0OThkYiwgIzI5ODBiOSk7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWNhcmQucGFnYWRvIC5jYXJkLWljb24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNzRjM2MsICNjMDM5MmIpO1xyXG59XHJcblxyXG4uc3VtbWFyeS1jYXJkLmdhbmFuY2lhIC5jYXJkLWljb24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyN2FlNjAsICMyMjk5NTQpO1xyXG59XHJcblxyXG4uc3VtbWFyeS1jYXJkLmdhbmFuY2lhLm5lZ2F0aXZlIC5jYXJkLWljb24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNzRjM2MsICNjMDM5MmIpO1xyXG59XHJcblxyXG4uc3VtbWFyeS1jYXJkLnZlbnRhcyAuY2FyZC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjM5YzEyLCAjZDY4OTEwKTtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjN2Y4YzhkO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qID09PT09IFNFQ0NJT05FUyA9PT09PSAqL1xyXG4uc29ydGVvcy1zZWN0aW9uLCBcclxuLnZlbnRhcy1zZWN0aW9uLCBcclxuLnVzZXJzLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRlciBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbi1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC43NXJlbTtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tYWN0aW9uLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG59XHJcblxyXG4uYnRuLWFjdGlvbjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG59XHJcblxyXG4vKiA9PT09PSBTT1JURU9TID09PT09ICovXHJcbi5zb3J0ZW9zLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLnNvcnRlby1jYXJkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnNvcnRlby1jYXJkOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4xKTtcclxufVxyXG5cclxuLnNvcnRlby1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcclxufVxyXG5cclxuLnNvcnRlby1oZWFkZXIgaDQge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc29ydGVvLXN0YXR1cyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnN0YXR1cy1iYWRnZS5vcGVuIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNzQsIDk2LCAwLjEpO1xyXG4gIGNvbG9yOiAjMjdhZTYwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzksIDE3NCwgOTYsIDAuMik7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFkZ2UuY2xvc2VkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjEpO1xyXG4gIGNvbG9yOiAjZTc0YzNjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMxLCA3NiwgNjAsIDAuMik7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFkZ2UuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNzQsIDk2LCAwLjEpO1xyXG4gIGNvbG9yOiAjMjdhZTYwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzksIDE3NCwgOTYsIDAuMik7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFkZ2UuaW5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTQ5LCAxNjUsIDE2NiwgMC4xKTtcclxuICBjb2xvcjogIzk1YTVhNjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0OSwgMTY1LCAxNjYsIDAuMik7XHJcbn1cclxuXHJcbi5jbG9zZS10aW1lIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ud2lubmVyLXNlY3Rpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ud2lubmVyLW51bWJlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YzOWMxMiwgI2Q2ODkxMCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmZhY3RvciB7XHJcbiAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnNvcnRlby1zdGF0cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnN0YXQtaXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5zdGF0LWl0ZW0udmVuZGlkbyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuMSk7XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbn1cclxuXHJcbi5zdGF0LWl0ZW0ucGFnYWRvIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjEpO1xyXG4gIGNvbG9yOiAjZTc0YzNjO1xyXG59XHJcblxyXG4uc3RhdC1pdGVtLmdhbmFuY2lhIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNzQsIDk2LCAwLjEpO1xyXG4gIGNvbG9yOiAjMjdhZTYwO1xyXG59XHJcblxyXG4uc3RhdC1pdGVtLmdhbmFuY2lhLm5lZ2F0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjEpO1xyXG4gIGNvbG9yOiAjZTc0YzNjO1xyXG59XHJcblxyXG4uc3RhdC1pdGVtIC5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uc3RhdC1pdGVtIC52YWx1ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi53aW5uZXItZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5idG4tc2V0LXdpbm5lciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YzOWMxMiwgI2Q2ODkxMCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLXNldC13aW5uZXI6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcclxufVxyXG5cclxuLnNvcnRlby1vcGVuLW1lc3NhZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLyogPT09PT0gVEFCTEFTID09PT09ICovXHJcbi52ZW50YXMtdGFibGUtY29udGFpbmVyLFxyXG4udXNlcnMtdGFibGUtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4udmVudGFzLXRhYmxlLFxyXG4udXNlcnMtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTllY2VmO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4udmVudGFzLXRhYmxlIC50YWJsZS1oZWFkZXIge1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMTIwcHggMTAwcHggMTAwcHggMTIwcHggMTAwcHg7XHJcbn1cclxuXHJcbi51c2Vycy10YWJsZSAudGFibGUtaGVhZGVyIHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMjBweCAxNTBweCAxMDBweCAxMjBweDtcclxufVxyXG5cclxuLnRhYmxlLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRhYmxlLXJvdyB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnZlbnRhcy10YWJsZSAudGFibGUtcm93IHtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDEyMHB4IDEwMHB4IDEwMHB4IDEyMHB4IDEwMHB4O1xyXG59XHJcblxyXG4udXNlcnMtdGFibGUgLnRhYmxlLXJvdyB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTIwcHggMTUwcHggMTAwcHggMTIwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5jb2wtZmVjaGEsIC5jb2wtc3VjdXJzYWwsIC5jb2wtc29ydGVvLCAuY29sLXRvdGFsLCAuY29sLXJlY2libywgLmNvbC1hY2Npb25lcyxcclxuLmNvbC1lbWFpbCwgLmNvbC1yb2xlLCAuY29sLXN0YXR1cyB7XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbn1cclxuXHJcbi5jb2wtdG90YWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyN2FlNjA7XHJcbn1cclxuXHJcbi5idG4tdGFibGUtYWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLmJ0bi10YWJsZS1hY3Rpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbn1cclxuXHJcbi5idG4tdGFibGUtYWN0aW9uLmRhbmdlcjpob3ZlciB7XHJcbiAgY29sb3I6ICNlNzRjM2M7XHJcbn1cclxuXHJcbi8qID09PT09IE1FTlNBSkVTIFNJTiBEQVRPUyA9PT09PSAqL1xyXG4ubm8tZGF0YS1tZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxufVxyXG5cclxuLm5vLWRhdGEtbWVzc2FnZSBpIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBjb2xvcjogI2JkYzNjNztcclxufVxyXG5cclxuLm5vLWRhdGEtbWVzc2FnZSBoNCB7XHJcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XHJcbiAgY29sb3I6ICM5NWE1YTY7XHJcbn1cclxuXHJcbi5uby1kYXRhLW1lc3NhZ2UgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4vKiA9PT09PSBNT0RBTCA9PT09PSAqL1xyXG4ubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWF4LWhlaWdodDogOTB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCA1MHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLm1vZGFsLnNob3cgLm1vZGFsLWRpYWxvZyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyIHtcclxuICBjb2xvcjogI2U3NGMzYztcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xyXG59XHJcblxyXG4uYnRuLW1vZGFsIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLW1vZGFsLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1tb2RhbC5idG4tc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1tb2RhbDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG59XHJcblxyXG4vKiA9PT09PSBDSEVDS0JPWCA9PT09PSAqL1xyXG4uY2hlY2tib3gtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLmNoZWNrYm94LWxhYmVsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2hlY2ttYXJrIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLyogPT09PT0gUkVTUE9OU0lWRSA9PT09PSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZmlsdGVycy1iYXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuICBcclxuICAuZmlsdGVyLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdW1tYXJ5LWNhcmRzIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBcclxuICAuc29ydGVvcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICBcclxuICAudmVudGFzLXRhYmxlIC50YWJsZS1oZWFkZXIsXHJcbiAgLnZlbnRhcy10YWJsZSAudGFibGUtcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTIwcHggMTAwcHggODBweCA4MHB4IDEwMHB4IDgwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXJzLXRhYmxlIC50YWJsZS1oZWFkZXIsXHJcbiAgLnVzZXJzLXRhYmxlIC50YWJsZS1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgODBweCAxMDBweCA4MHB4IDgwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4tY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PSBFRkVDVE9TIERFIENBUkdBID09PT09ICovXHJcbi5idG4tZmlsdGVyOmRpc2FibGVkLFxyXG4uYnRuLWFjdGlvbjpkaXNhYmxlZCxcclxuLmJ0bi1zZXQtd2lubmVyOmRpc2FibGVkLFxyXG4uYnRuLW1vZGFsOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogPT09PT0gQU5JTUFDSU9ORVMgU1VUSUxFUyA9PT09PSAqL1xyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTsgfVxyXG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWNhcmQsXHJcbi5zb3J0ZW8tY2FyZCxcclxuLnRhYmxlLXJvdyB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xyXG59XHJcbiIsIi8qIEFETUlOIFBBTkVMIC0gRVNUSUxPIE1JTklNQUxJU1RBIENPTlNJU1RFTlRFICovXG4uYWRtaW4taW50ZXJmYWNlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEgMCUsICNlOWVjZWYgMTAwJSk7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4vKiA9PT09PSBIRUFERVIgPT09PT0gKi9cbi5oZWFkZXItYmFyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzJjM2U1MCAwJSwgIzM0NDk1ZSAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uYWRtaW4tdGl0bGUgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmFkbWluLXRpdGxlIGkge1xuICBjb2xvcjogIzM0OThkYjtcbn1cblxuLmJ0bi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5idG4taGVhZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MiwgMTUyLCAyMTksIDAuNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmJ0bi1jZXJyYXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjIpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjMxLCA3NiwgNjAsIDAuMyk7XG59XG5cbi5idG4tY2VycmFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC4zKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjUpO1xufVxuXG4vKiA9PT09PSBGSUxUUk9TID09PT09ICovXG4uZmlsdGVycy1iYXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZ2FwOiAxLjVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZpbHRlci1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBtaW4td2lkdGg6IDE2MHB4O1xufVxuXG4uZmlsdGVyLWdyb3VwIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZm9ybS1jb250cm9sLCAuZm9ybS1pbnB1dCB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cywgLmZvcm0taW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4xKTtcbn1cblxuLmZpbHRlci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmJ0bi1maWx0ZXIge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYnRuLWZpbHRlci5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1maWx0ZXIuYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5idG4tZmlsdGVyLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tZmlsdGVyLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi8qID09PT09IENPTlRFTklETyBQUklOQ0lQQUwgPT09PT0gKi9cbi5tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi8qID09PT09IENBUkRTIERFIFJFU1VNRU4gPT09PT0gKi9cbi5zdW1tYXJ5LWNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uc3VtbWFyeS1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5zdW1tYXJ5LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNhcmQtaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3VtbWFyeS1jYXJkLnZlbmRpZG8gLmNhcmQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDk4ZGIsICMyOTgwYjkpO1xufVxuXG4uc3VtbWFyeS1jYXJkLnBhZ2FkbyAuY2FyZC1pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U3NGMzYywgI2MwMzkyYik7XG59XG5cbi5zdW1tYXJ5LWNhcmQuZ2FuYW5jaWEgLmNhcmQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyN2FlNjAsICMyMjk5NTQpO1xufVxuXG4uc3VtbWFyeS1jYXJkLmdhbmFuY2lhLm5lZ2F0aXZlIC5jYXJkLWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTc0YzNjLCAjYzAzOTJiKTtcbn1cblxuLnN1bW1hcnktY2FyZC52ZW50YXMgLmNhcmQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMzljMTIsICNkNjg5MTApO1xufVxuXG4uY2FyZC1jb250ZW50IGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG5cbi5jYXJkLWNvbnRlbnQgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM3ZjhjOGQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiA9PT09PSBTRUNDSU9ORVMgPT09PT0gKi9cbi5zb3J0ZW9zLXNlY3Rpb24sXG4udmVudGFzLXNlY3Rpb24sXG4udXNlcnMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5zZWN0aW9uLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNzVyZW07XG59XG5cbi5idG4tYWN0aW9uIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWFjdGlvbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG59XG5cbi5idG4tYWN0aW9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcbn1cblxuLyogPT09PT0gU09SVEVPUyA9PT09PSAqL1xuLnNvcnRlb3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xuICBnYXA6IDEuNXJlbTtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLnNvcnRlby1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5zb3J0ZW8tY2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzM0OThkYjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4xKTtcbn1cblxuLnNvcnRlby1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcbn1cblxuLnNvcnRlby1oZWFkZXIgaDQge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc29ydGVvLXN0YXR1cyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc3RhdHVzLWJhZGdlIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0YXR1cy1iYWRnZS5vcGVuIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTc0LCA5NiwgMC4xKTtcbiAgY29sb3I6ICMyN2FlNjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzksIDE3NCwgOTYsIDAuMik7XG59XG5cbi5zdGF0dXMtYmFkZ2UuY2xvc2VkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC4xKTtcbiAgY29sb3I6ICNlNzRjM2M7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjMxLCA3NiwgNjAsIDAuMik7XG59XG5cbi5zdGF0dXMtYmFkZ2UuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTc0LCA5NiwgMC4xKTtcbiAgY29sb3I6ICMyN2FlNjA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzksIDE3NCwgOTYsIDAuMik7XG59XG5cbi5zdGF0dXMtYmFkZ2UuaW5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE0OSwgMTY1LCAxNjYsIDAuMSk7XG4gIGNvbG9yOiAjOTVhNWE2O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE0OSwgMTY1LCAxNjYsIDAuMik7XG59XG5cbi5jbG9zZS10aW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzdmOGM4ZDtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cblxuLndpbm5lci1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ud2lubmVyLW51bWJlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMzljMTIsICNkNjg5MTApO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZmFjdG9yIHtcbiAgY29sb3I6ICM3ZjhjOGQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc29ydGVvLXN0YXRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uc3RhdC1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG59XG5cbi5zdGF0LWl0ZW0udmVuZGlkbyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjEpO1xuICBjb2xvcjogIzM0OThkYjtcbn1cblxuLnN0YXQtaXRlbS5wYWdhZG8ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjEpO1xuICBjb2xvcjogI2U3NGMzYztcbn1cblxuLnN0YXQtaXRlbS5nYW5hbmNpYSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzksIDE3NCwgOTYsIDAuMSk7XG4gIGNvbG9yOiAjMjdhZTYwO1xufVxuXG4uc3RhdC1pdGVtLmdhbmFuY2lhLm5lZ2F0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC4xKTtcbiAgY29sb3I6ICNlNzRjM2M7XG59XG5cbi5zdGF0LWl0ZW0gLmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uc3RhdC1pdGVtIC52YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi53aW5uZXItZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5idG4tc2V0LXdpbm5lciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMzljMTIsICNkNjg5MTApO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYnRuLXNldC13aW5uZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xufVxuXG4uc29ydGVvLW9wZW4tbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3ZjhjOGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4vKiA9PT09PSBUQUJMQVMgPT09PT0gKi9cbi52ZW50YXMtdGFibGUtY29udGFpbmVyLFxuLnVzZXJzLXRhYmxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xufVxuXG4udmVudGFzLXRhYmxlLFxuLnVzZXJzLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlOWVjZWY7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4udmVudGFzLXRhYmxlIC50YWJsZS1oZWFkZXIge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1MHB4IDEyMHB4IDEwMHB4IDEwMHB4IDEyMHB4IDEwMHB4O1xufVxuXG4udXNlcnMtdGFibGUgLnRhYmxlLWhlYWRlciB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEyMHB4IDE1MHB4IDEwMHB4IDEyMHB4O1xufVxuXG4udGFibGUtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50YWJsZS1yb3cge1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLnZlbnRhcy10YWJsZSAudGFibGUtcm93IHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAxMjBweCAxMDBweCAxMDBweCAxMjBweCAxMDBweDtcbn1cblxuLnVzZXJzLXRhYmxlIC50YWJsZS1yb3cge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMjBweCAxNTBweCAxMDBweCAxMjBweDtcbn1cblxuLnRhYmxlLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG59XG5cbi5jb2wtZmVjaGEsIC5jb2wtc3VjdXJzYWwsIC5jb2wtc29ydGVvLCAuY29sLXRvdGFsLCAuY29sLXJlY2libywgLmNvbC1hY2Npb25lcyxcbi5jb2wtZW1haWwsIC5jb2wtcm9sZSwgLmNvbC1zdGF0dXMge1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbi5jb2wtdG90YWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzI3YWU2MDtcbn1cblxuLmJ0bi10YWJsZS1hY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5idG4tdGFibGUtYWN0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgY29sb3I6ICMzNDk4ZGI7XG59XG5cbi5idG4tdGFibGUtYWN0aW9uLmRhbmdlcjpob3ZlciB7XG4gIGNvbG9yOiAjZTc0YzNjO1xufVxuXG4vKiA9PT09PSBNRU5TQUpFUyBTSU4gREFUT1MgPT09PT0gKi9cbi5uby1kYXRhLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW07XG4gIGNvbG9yOiAjN2Y4YzhkO1xufVxuXG4ubm8tZGF0YS1tZXNzYWdlIGkge1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiAjYmRjM2M3O1xufVxuXG4ubm8tZGF0YS1tZXNzYWdlIGg0IHtcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gIGNvbG9yOiAjOTVhNWE2O1xufVxuXG4ubm8tZGF0YS1tZXNzYWdlIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4vKiA9PT09PSBNT0RBTCA9PT09PSAqL1xuLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogMTAwMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xufVxuXG4ubW9kYWwuc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tb2RhbC1kaWFsb2cge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm94LXNoYWRvdzogMCAxMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG59XG5cbi5tb2RhbC5zaG93IC5tb2RhbC1kaWFsb2cge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjN2Y4YzhkO1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmNsb3NlOmhvdmVyIHtcbiAgY29sb3I6ICNlNzRjM2M7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xufVxuXG4uYnRuLW1vZGFsIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmJ0bi1tb2RhbC5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1tb2RhbC5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLW1vZGFsOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcbn1cblxuLyogPT09PT0gQ0hFQ0tCT1ggPT09PT0gKi9cbi5jaGVja2JveC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4uY2hlY2tib3gtbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBtYXJnaW46IDA7XG59XG5cbi5jaGVja21hcmsge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLyogPT09PT0gUkVTUE9OU0lWRSA9PT09PSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5maWx0ZXJzLWJhciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuICAuZmlsdGVyLWFjdGlvbnMge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5zdW1tYXJ5LWNhcmRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAuc29ydGVvcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAudmVudGFzLXRhYmxlIC50YWJsZS1oZWFkZXIsXG4gIC52ZW50YXMtdGFibGUgLnRhYmxlLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjBweCAxMDBweCA4MHB4IDgwcHggMTAwcHggODBweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICAudXNlcnMtdGFibGUgLnRhYmxlLWhlYWRlcixcbiAgLnVzZXJzLXRhYmxlIC50YWJsZS1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwcHggMTAwcHggODBweCA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIC5tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgLm1vZGFsLWRpYWxvZyB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cbn1cbi8qID09PT09IEVGRUNUT1MgREUgQ0FSR0EgPT09PT0gKi9cbi5idG4tZmlsdGVyOmRpc2FibGVkLFxuLmJ0bi1hY3Rpb246ZGlzYWJsZWQsXG4uYnRuLXNldC13aW5uZXI6ZGlzYWJsZWQsXG4uYnRuLW1vZGFsOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogPT09PT0gQU5JTUFDSU9ORVMgU1VUSUxFUyA9PT09PSAqL1xuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5zdW1tYXJ5LWNhcmQsXG4uc29ydGVvLWNhcmQsXG4udGFibGUtcm93IHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 205:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/supabase.service */ 9692);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notification.service */ 7473);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);







function LoginComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
  }
}
class LoginComponent {
  constructor(supabaseService, notificationService, router) {
    this.supabaseService = supabaseService;
    this.notificationService = notificationService;
    this.router = router;
    this.email = '';
    this.password = '';
    this.errorMessage = '';
    this.isLoading = false;
  }
  ngOnInit() {
    // Verificar si ya hay un usuario logueado con timeout
    this.supabaseService.currentUser$.subscribe(user => {
      if (user) {
        console.log('Usuario ya logueado, redirigiendo...');
        this.redirectUser(user);
      }
    });
  }
  onLogin() {
    var _this = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      _this.errorMessage = '';
      _this.notificationService.showLoading('Iniciando sesión...');
      try {
        console.log('Iniciando login desde componente...');
        // Usar timeout para evitar que se cuelgue el login
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Login timeout')), 10000); // 10 segundos
        });
        const loginPromise = _this.supabaseService.login(_this.email, _this.password);
        const user = yield Promise.race([loginPromise, timeoutPromise]);
        console.log('Resultado del login:', user);
        if (user) {
          console.log('Usuario logueado exitosamente, redirigiendo...');
          _this.redirectUser(user);
        } else {
          console.log('Login falló - usuario es null');
          _this.errorMessage = 'Credenciales inválidas';
        }
      } catch (error) {
        console.error('Error en login:', error);
        _this.errorMessage = _this.getErrorMessage(error);
      } finally {
        _this.isLoading = false;
        _this.notificationService.hideLoading();
      }
    })();
  }
  redirectUser(user) {
    if (user.role === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/sucursal']);
    }
  }
  getErrorMessage(error) {
    switch (error.message) {
      case 'Invalid login credentials':
        return 'Credenciales inválidas';
      case 'Email not confirmed':
        return 'Email no confirmado';
      case 'Too many requests':
        return 'Demasiados intentos, intenta más tarde';
      case 'Login timeout':
        return 'Tiempo de espera agotado, intenta de nuevo';
      default:
        return 'Error en el inicio de sesión';
    }
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 17,
      vars: 5,
      consts: [["loginForm", "ngForm"], [1, "container"], [1, "card", 2, "max-width", "400px", "margin", "100px auto"], [1, "text-center", "mb-3"], [3, "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "disabled"], [1, "alert", "alert-danger"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Sistema de Loter\u00EDa");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onLogin());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Email:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5)(11, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Contrase\u00F1a:");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const loginForm_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !loginForm_r3.valid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Iniciando sesi\u00F3n..." : "Iniciar Sesi\u00F3n", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
      styles: [".w-100[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsV0FBVztJQUNiIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnctMTAwIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 179:
/*!***********************************************************!*\
  !*** ./src/app/components/sucursal/sucursal.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SucursalComponent: () => (/* binding */ SucursalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/supabase.service */ 9692);
/* harmony import */ var _services_sorteo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sorteo.service */ 6390);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ 7473);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/print.service */ 4389);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);








function SucursalComponent_div_12_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Abierto (cierra ", ctx_r1.timeUntilClose, ") ");
  }
}
function SucursalComponent_div_12_div_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cerrado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SucursalComponent_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SucursalComponent_div_12_div_4_span_5_Template, 2, 1, "span", 45)(6, SucursalComponent_div_12_div_4_span_6_Template, 2, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currentSorteo.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isSorteoOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isSorteoOpen);
  }
}
function SucursalComponent_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Venta bloqueada:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Faltan menos de 5 minutos para el cierre del sorteo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SucursalComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_12_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openNumberModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " VENTA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SucursalComponent_div_12_div_4_Template, 7, 3, "div", 41)(5, SucursalComponent_div_12_div_5_Template, 5, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.isLoading || ctx_r1.isBlocked || !ctx_r1.isSorteoOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.currentSorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isBlocked);
  }
}
function SucursalComponent_div_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63)(1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 56)(6, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_13_div_9_Template_button_click_6_listener() {
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.removeNumber(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r6.numero.toString().padStart(2, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", item_r6.monto.toFixed(0), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
  }
}
function SucursalComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div", 53)(3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SucursalComponent_div_13_div_9_Template, 8, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 59)(11, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_13_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openNumberModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " + Agregar N\u00FAmero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 61)(14, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_13_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.processSale());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " PAGAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.selectedNumbers)("ngForTrackBy", ctx_r1.trackByIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.isLoading || ctx_r1.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.selectedNumbers.length === 0 || ctx_r1.isLoading || ctx_r1.isBlocked);
  }
}
function SucursalComponent_div_14_div_7_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detail_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", detail_r8.numero.toString().padStart(2, "0"), " x L", detail_r8.monto.toFixed(0), " ");
  }
}
function SucursalComponent_div_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SucursalComponent_div_14_div_7_span_9_Template, 2, 2, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 77)(11, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_14_div_7_Template_button_click_13_listener() {
      const sale_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.reprintReceipt(sale_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " \uD83D\uDDA8\uFE0F Reimprimir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sale_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.formatTime(sale_r9.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Recibo: ", sale_r9.numeroRecibo || sale_r9.id.slice(-6), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Correlativo: ", sale_r9.correlativo || "N/A", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.getSaleDetails(sale_r9.id))("ngForTrackBy", ctx_r1.trackByDetailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total: L", sale_r9.total.toFixed(0), "");
  }
}
function SucursalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ventas actuales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 67)(5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Transacciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SucursalComponent_div_14_div_7_Template, 15, 6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.getFilteredSales())("ngForTrackBy", ctx_r1.trackBySaleId);
  }
}
class SucursalComponent {
  constructor(supabaseService, sorteoService, notificationService, printService, router, cdr) {
    this.supabaseService = supabaseService;
    this.sorteoService = sorteoService;
    this.notificationService = notificationService;
    this.printService = printService;
    this.router = router;
    this.cdr = cdr;
    this.currentUser = null;
    this.currentSorteo = null;
    this.timeUntilClose = '';
    this.isSorteoOpen = false;
    this.selectedNumber = null;
    this.selectedAmount = null;
    this.selectedNumbers = [];
    // Propiedades para entrada individual
    this.numero = null;
    this.monto = null;
    this.todaySales = [];
    this.recentSales = [];
    this.saleDetails = {};
    this.filteredSales = [];
    this.filterDate = '';
    this.isLoading = false;
    // Propiedades para el teclado numérico
    this.numberInput = '';
    this.showKeypad = false;
    this.isBlocked = false;
    this.currentInput = 'numero';
    // Propiedades para el flujo de modales
    this.showNumberModal = false;
    this.showAmountModal = false;
    this.showConfirmModal = false;
    this.tempNumber = null;
    this.tempAmount = null;
    this.modalNumberInput = '';
    this.modalAmountInput = '';
    this.isProcessingModal = false;
  }
  ngOnInit() {
    console.log('[SUCURSAL] ngOnInit iniciado');
    this.userSubscription = this.supabaseService.currentUser$.subscribe(user => {
      console.log('[SUCURSAL] Usuario actualizado:', user);
      this.currentUser = user;
      if (!user || user.role !== 'sucursal') {
        this.router.navigate(['/login']);
      }
    });
    this.initializeComponent();
    this.checkTimeRestrictions();
    // Verificar bloqueo cada minuto - usar método que se puede limpiar
    this.timeCheckInterval = setInterval(() => {
      this.checkTimeRestrictions();
    }, 60000);
    console.log('[SUCURSAL] ngOnInit completado');
  }
  ngOnDestroy() {
    console.log('[SUCURSAL] ngOnDestroy iniciado - limpiando recursos');
    // Limpiar suscripciones y timers
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
      console.log('[SUCURSAL] Suscripción de usuario limpiada');
    }
    if (this.sorteoUpdateInterval) {
      clearInterval(this.sorteoUpdateInterval);
      console.log('[SUCURSAL] Interval de sorteo limpiado');
    }
    if (this.timeCheckInterval) {
      clearInterval(this.timeCheckInterval);
      console.log('[SUCURSAL] Interval de tiempo limpiado');
    }
    console.log('[SUCURSAL] ngOnDestroy completado');
  }
  initializeComponent() {
    var _this = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.isLoading = true;
        _this.notificationService.showLoading('Cargando datos...');
        yield _this.updateSorteoInfo();
        yield _this.loadTodaySales();
        yield _this.loadRecentSales();
        _this.setFilterDate();
        // Limpiar timer anterior si existe
        if (_this.sorteoUpdateInterval) {
          clearInterval(_this.sorteoUpdateInterval);
        }
        // Actualizar cada minuto - usar método que se puede limpiar
        _this.sorteoUpdateInterval = setInterval(() => {
          _this.updateSorteoInfo();
        }, 60000);
      } catch (error) {
        console.error('Error inicializando componente:', error);
        _this.notificationService.showError('Error al cargar los datos');
      } finally {
        _this.isLoading = false;
        _this.notificationService.hideLoading();
      }
    })();
  }
  setFilterDate() {
    const today = new Date();
    this.filterDate = today.toISOString().split('T')[0];
  }
  onFilterDateChange() {
    this.filterSales();
  }
  filterSales() {
    if (!this.filterDate) {
      this.filteredSales = this.todaySales;
      return;
    }
    const filterDateObj = new Date(this.filterDate);
    this.filteredSales = this.todaySales.filter(sale => {
      const saleDate = new Date(sale.fecha);
      return saleDate.toDateString() === filterDateObj.toDateString();
    });
  }
  updateSorteoInfo() {
    try {
      this.currentSorteo = this.sorteoService.getCurrentSorteo();
      if (this.currentSorteo) {
        this.isSorteoOpen = this.sorteoService.isSorteoOpen(this.currentSorteo);
        this.timeUntilClose = this.sorteoService.getTimeUntilClose(this.currentSorteo);
      }
    } catch (error) {
      console.error('Error actualizando info del sorteo:', error);
    }
  }
  addNumber() {
    if (this.numero && this.monto && this.numero >= 0 && this.numero <= 99) {
      // Verificar si el número ya fue seleccionado
      const existingIndex = this.selectedNumbers.findIndex(n => n.numero === this.numero);
      if (existingIndex >= 0) {
        // Actualizar monto
        this.selectedNumbers[existingIndex].monto += this.monto;
      } else {
        // Agregar nuevo número
        this.selectedNumbers.push({
          numero: this.numero,
          monto: this.monto
        });
      }
      this.numero = null;
      this.monto = null;
      this.numberInput = '';
      this.currentInput = 'numero';
      this.notificationService.showSuccess('Número agregado', 'Número agregado exitosamente a la venta');
    }
  }
  removeNumber(index) {
    console.log('Eliminando número en índice:', index);
    console.log('Array antes:', [...this.selectedNumbers]);
    this.selectedNumbers.splice(index, 1);
    console.log('Array después:', [...this.selectedNumbers]);
    this.cdr.detectChanges(); // Forzar actualización visual inmediata
  }
  // Generar número de recibo único con correlativo
  generateReceiptNumber(correlativo, sucursal) {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2); // Últimos 2 dígitos del año
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    // Formato: SUC001-REC-250717-0001
    const sucursalCode = sucursal.replace(/\s+/g, '').toUpperCase().substring(0, 3);
    const correlativoFormatted = correlativo.toString().padStart(4, '0');
    const numeroRecibo = `${sucursalCode}-REC-${year}${month}${day}-${correlativoFormatted}`;
    console.log('Número de recibo generado:', numeroRecibo);
    return numeroRecibo;
  }
  getTotal() {
    return this.selectedNumbers.reduce((total, item) => total + item.monto, 0);
  }
  processSale() {
    var _this2 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.currentSorteo || !_this2.currentUser || _this2.selectedNumbers.length === 0) {
        return;
      }
      // Validar que el usuario tenga sucursal configurada
      if (!_this2.currentUser.sucursal) {
        yield _this2.notificationService.showError('Error: El usuario no tiene una sucursal asignada. Contacte al administrador.');
        console.error('Usuario sin sucursal:', _this2.currentUser);
        return;
      }
      // Confirmar venta
      const confirmed = yield _this2.notificationService.showConfirmation('Confirmar venta', `¿Procesar venta por L. ${_this2.getTotal().toFixed(2)}?`);
      if (!confirmed) return;
      _this2.isLoading = true;
      _this2.notificationService.showLoading('Procesando venta...');
      try {
        // Obtener el siguiente correlativo para esta sucursal
        console.log('=== INICIANDO CÁLCULO DE CORRELATIVO ===');
        console.log('Sucursal:', _this2.currentUser.sucursal);
        const correlativo = yield _this2.supabaseService.getNextCorrelativo(_this2.currentUser.sucursal);
        console.log('Correlativo obtenido del servicio:', correlativo);
        // Generar número de recibo con correlativo
        const numeroRecibo = _this2.generateReceiptNumber(correlativo, _this2.currentUser.sucursal);
        console.log('Número de recibo generado:', numeroRecibo);
        const sale = {
          userId: _this2.currentUser.id,
          sucursal: _this2.currentUser.sucursal,
          sorteo: _this2.currentSorteo.name,
          fecha: new Date(),
          total: _this2.getTotal(),
          numeroRecibo: numeroRecibo,
          correlativo: correlativo
        };
        console.log('=== OBJETO SALE COMPLETO ===');
        console.log('Sale object:', JSON.stringify(sale, null, 2));
        console.log('Correlativo en sale:', sale.correlativo);
        const saleId = yield _this2.supabaseService.createSale(sale);
        // Crear detalles de venta
        const saleDetails = [];
        for (const item of _this2.selectedNumbers) {
          const detailId = yield _this2.supabaseService.createSaleDetail({
            saleId,
            numero: item.numero,
            monto: item.monto
          });
          saleDetails.push({
            id: detailId,
            saleId,
            numero: item.numero,
            monto: item.monto
          });
        }
        // Generar e imprimir recibo
        const saleWithId = {
          ...sale,
          id: saleId
        };
        console.log('Imprimiendo recibo para venta:', saleWithId);
        console.log('Detalles para imprimir:', saleDetails);
        // Asegurar que los detalles tengan datos
        if (saleDetails.length === 0) {
          console.warn('No hay detalles de venta, usando selectedNumbers como fallback');
          // Usar selectedNumbers como fallback
          for (const item of _this2.selectedNumbers) {
            saleDetails.push({
              id: `temp-${Date.now()}-${item.numero}`,
              saleId,
              numero: item.numero,
              monto: item.monto
            });
          }
        }
        _this2.printService.generateThermalReceipt(saleWithId, saleDetails);
        // Limpiar selección inmediatamente después de enviar a imprimir
        setTimeout(/*#__PURE__*/(0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          // Limpiar selección inmediatamente
          _this2.selectedNumbers = [];
          // Resetear estado de modales
          _this2.showNumberModal = false;
          _this2.showAmountModal = false;
          _this2.showConfirmModal = false;
          _this2.modalNumberInput = '';
          _this2.modalAmountInput = '';
          _this2.tempNumber = null;
          _this2.tempAmount = null;
          _this2.cdr.detectChanges(); // Forzar actualización visual inmediata
          console.log('Selección limpiada, selectedNumbers:', _this2.selectedNumbers);
          console.log('Estado de modales reseteado');
          // Recargar ventas actuales para mostrar la venta recién realizada
          console.log('Recargando ventas después de la venta...');
          yield _this2.loadTodaySales();
          yield _this2.loadRecentSales();
          console.log('Ventas recargadas después de la venta');
          console.log('recentSales:', _this2.recentSales.length);
          console.log('todaySales:', _this2.todaySales.length);
          _this2.cdr.detectChanges(); // Forzar actualización después de cargar ventas
        }), 100); // Pequeño retraso para evitar conflictos con la ventana de impresión
        _this2.notificationService.showSuccess('Venta procesada e impresa exitosamente');
      } catch (error) {
        console.error('Error procesando venta:', error);
        _this2.notificationService.showError('Error al procesar la venta');
      } finally {
        _this2.isLoading = false;
        _this2.notificationService.hideLoading();
      }
    })();
  }
  loadTodaySales() {
    var _this3 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.currentUser) return;
      try {
        const today = new Date();
        const allSales = yield _this3.supabaseService.getSalesByDateAndSorteo(today, '');
        _this3.todaySales = allSales.filter(sale => sale.sucursal === _this3.currentUser.sucursal);
        // Cargar detalles de cada venta con timeout individual
        for (const sale of _this3.todaySales) {
          try {
            const timeoutPromise = new Promise((_, reject) => {
              setTimeout(() => reject(new Error('Timeout cargando detalles')), 3000);
            });
            const detailsPromise = _this3.supabaseService.getSaleDetails(sale.id);
            _this3.saleDetails[sale.id] = yield Promise.race([detailsPromise, timeoutPromise]);
          } catch (error) {
            console.warn(`Error cargando detalles de venta ${sale.id}:`, error);
            _this3.saleDetails[sale.id] = [];
          }
        }
        _this3.filterSales();
      } catch (error) {
        console.error('Error cargando ventas:', error);
        _this3.notificationService.showError('Error al cargar las ventas');
      }
    })();
  }
  getSaleDetails(saleId) {
    return this.saleDetails[saleId] || [];
  }
  logout() {
    var _this4 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirmed = yield _this4.notificationService.showConfirmation('Cerrar sesión', '¿Está seguro que desea cerrar sesión?');
      if (confirmed) {
        _this4.notificationService.showLoading('Cerrando sesión...');
        try {
          yield _this4.supabaseService.logout();
          _this4.router.navigate(['/login']);
        } catch (error) {
          console.error('Error cerrando sesión:', error);
          _this4.notificationService.showError('Error al cerrar sesión');
        } finally {
          _this4.notificationService.hideLoading();
        }
      }
    })();
  }
  // Métodos del teclado numérico
  pressNumber(num) {
    if (this.isBlocked) {
      this.notificationService.showError('Ventas bloqueadas', 'No se pueden realizar ventas en los últimos 5 minutos antes del sorteo');
      return;
    }
    if (this.numberInput.length < 5) {
      // Máximo 5 dígitos
      this.numberInput += num.toString();
    }
  }
  clearNumber() {
    this.numberInput = '';
  }
  acceptNumber() {
    if (!this.numberInput) return;
    if (this.currentInput === 'numero') {
      const numero = parseInt(this.numberInput);
      if (numero >= 0 && numero <= 99) {
        this.numero = numero;
        this.numberInput = '';
        this.currentInput = 'monto';
        this.notificationService.showInfo('Número seleccionado', 'Ahora ingresa el monto a apostar');
      } else {
        this.notificationService.showError('Número inválido', 'El número debe estar entre 00 y 99');
      }
    } else {
      const monto = parseFloat(this.numberInput);
      if (monto > 0 && monto <= 500) {
        this.monto = monto;
        this.addNumber();
        this.numberInput = '';
        this.currentInput = 'numero';
      } else {
        this.notificationService.showError('Monto inválido', 'El monto debe ser mayor a 0 y menor o igual a L. 500');
      }
    }
  }
  // Flujo de modales para selección de números
  openNumberModal() {
    console.log('[MODAL] Intentando abrir modal de número');
    console.log('[MODAL] Estado actual - isProcessingModal:', this.isProcessingModal, 'isBlocked:', this.isBlocked);
    if (this.isProcessingModal || this.isBlocked) {
      console.log('[MODAL] Cancelando apertura - procesando o bloqueado');
      if (this.isBlocked) {
        this.notificationService.showError('Ventas bloqueadas', 'No se pueden realizar ventas en los últimos 5 minutos antes del sorteo');
      }
      return;
    }
    this.isProcessingModal = true;
    console.log('[MODAL] Marcando como procesando');
    // Reiniciar estado de modales
    this.closeAllModals();
    // Eliminamos el setTimeout para evitar parpadeo
    this.showNumberModal = true;
    this.modalNumberInput = '';
    this.cdr.detectChanges();
    this.isProcessingModal = false;
    console.log('[MODAL] Modal abierto, estado final:', this.showNumberModal);
  }
  closeAllModals() {
    console.log('[MODAL] Cerrando todos los modales');
    this.showNumberModal = false;
    this.showAmountModal = false;
    this.showConfirmModal = false;
    this.modalNumberInput = '';
    this.modalAmountInput = '';
    this.tempNumber = null;
    this.tempAmount = null;
    this.isProcessingModal = false;
    this.cdr.detectChanges(); // Forzar detección de cambios
    console.log('[MODAL] Todos los modales cerrados');
  }
  // Modal 1: Selección de número
  pressModalNumber(num) {
    console.log('Presionando número:', num);
    if (this.modalNumberInput.length < 2) {
      this.modalNumberInput += num.toString();
      this.cdr.detectChanges(); // Forzar actualización de la UI
      console.log('Input actual:', this.modalNumberInput);
    }
  }
  clearModalNumber() {
    console.log('Limpiando número');
    this.modalNumberInput = '';
    this.cdr.detectChanges(); // Forzar actualización inmediata
    console.log('Número limpiado, input actual:', this.modalNumberInput);
  }
  acceptModalNumber() {
    console.log('Aceptando número:', this.modalNumberInput);
    // Evitar múltiples ejecuciones
    if (!this.modalNumberInput || this.isProcessingModal) {
      if (!this.modalNumberInput) {
        this.notificationService.showError('Número requerido', 'Debe ingresar un número');
      }
      return;
    }
    this.isProcessingModal = true;
    // Formatear el número con ceros a la izquierda si es necesario
    let formattedNumber = this.modalNumberInput.padStart(2, '0');
    const numero = parseInt(formattedNumber);
    if (numero >= 0 && numero <= 99) {
      this.tempNumber = numero;
      // Transición suave sin setTimeout
      this.showNumberModal = false;
      this.showAmountModal = true;
      this.modalAmountInput = '';
      this.isProcessingModal = false;
      this.cdr.detectChanges();
      console.log('Modal de apuesta abierto, número seleccionado:', numero);
    } else {
      this.isProcessingModal = false;
      this.notificationService.showError('Número inválido', 'El número debe estar entre 00 y 99');
    }
  }
  // Modal 2: Selección de apuesta
  pressModalAmount(num) {
    console.log('Presionando cantidad:', num);
    if (this.modalAmountInput.length < 4) {
      // Máximo 4 dígitos para el monto
      this.modalAmountInput += num.toString();
      this.cdr.detectChanges(); // Forzar actualización de la UI
      console.log('Monto actual:', this.modalAmountInput);
    }
  }
  clearModalAmount() {
    console.log('Limpiando monto');
    this.modalAmountInput = '';
    this.cdr.detectChanges(); // Forzar actualización inmediata
    console.log('Monto limpiado, input actual:', this.modalAmountInput);
  }
  acceptModalAmount() {
    console.log('Aceptando monto:', this.modalAmountInput);
    if (!this.modalAmountInput || this.isProcessingModal) {
      if (!this.modalAmountInput) {
        this.notificationService.showError('Monto requerido', 'Debe ingresar un monto');
      }
      return;
    }
    this.isProcessingModal = true;
    const monto = parseFloat(this.modalAmountInput);
    if (monto > 0 && monto <= 1000) {
      // Límite de apuesta
      this.tempAmount = monto;
      // Transición suave sin setTimeout
      this.showAmountModal = false;
      this.showConfirmModal = true;
      this.isProcessingModal = false;
      this.cdr.detectChanges();
      console.log('Pasando a confirmación, monto:', monto);
    } else {
      this.isProcessingModal = false;
      this.notificationService.showError('Monto inválido', 'El monto debe estar entre 1 y 1000');
    }
  }
  // Modal 3: Confirmación
  confirmAddNumber() {
    if (this.tempNumber !== null && this.tempAmount !== null) {
      // Verificar si el número ya fue seleccionado
      const existingIndex = this.selectedNumbers.findIndex(n => n.numero === this.tempNumber);
      if (existingIndex >= 0) {
        // Actualizar monto
        this.selectedNumbers[existingIndex].monto += this.tempAmount;
      } else {
        // Agregar nuevo número
        this.selectedNumbers.push({
          numero: this.tempNumber,
          monto: this.tempAmount
        });
      }
      // Quitar el modal de confirmación, solo cerrar modales
      this.closeAllModals();
      this.cdr.detectChanges(); // Forzar actualización final
    }
  }
  cancelAddNumber() {
    this.closeAllModals();
  }
  // Verificación de restricciones de tiempo
  checkTimeRestrictions() {
    if (!this.currentSorteo) return;
    const now = new Date();
    const [hours, minutes] = this.currentSorteo.closeTime.split(':');
    const closeTime = new Date();
    closeTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    const timeDiff = closeTime.getTime() - now.getTime();
    const minutesLeft = Math.floor(timeDiff / (1000 * 60));
    if (minutesLeft <= 5 && minutesLeft >= 0) {
      this.isBlocked = true;
      if (minutesLeft <= 0) {
        this.notificationService.showWarning('Sorteo cerrado', 'El sorteo ya ha comenzado. No se pueden realizar más ventas.');
      } else {
        this.notificationService.showWarning('Ventas bloqueadas', `Faltan ${minutesLeft} minutos para el sorteo. Ventas bloqueadas.`);
      }
    } else {
      this.isBlocked = false;
    }
  }
  // Filtrar ventas solo del sorteo actual
  getFilteredSales() {
    if (!this.recentSales || !this.currentSorteo) return [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.recentSales.filter(sale => {
      const saleDate = new Date(sale.createdAt);
      saleDate.setHours(0, 0, 0, 0);
      // Filtrar por día actual Y sorteo actual
      return saleDate.getTime() === today.getTime() && sale.sorteo === this.currentSorteo?.name;
    });
  }
  // Obtener fecha de hoy formateada
  getTodayDate() {
    return new Date().toLocaleDateString('es-HN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  // Formatear hora
  formatTime(date) {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleTimeString('es-HN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }
  // Método para cargar ventas recientes (inicializar recentSales)
  loadRecentSales() {
    var _this5 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Asegurar que las ventas del día estén cargadas
        if (!_this5.todaySales || _this5.todaySales.length === 0) {
          yield _this5.loadTodaySales();
        }
        // Asignar las ventas del día como ventas recientes
        _this5.recentSales = [..._this5.todaySales];
        console.log('Ventas recientes actualizadas:', _this5.recentSales.length);
      } catch (error) {
        console.error('Error cargando ventas recientes:', error);
        _this5.recentSales = [];
      }
    })();
  }
  // Método mejorado para reimprimir recibo
  reprintReceipt(sale) {
    var _this6 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Reimprimiendo recibo para venta:', sale);
        _this6.notificationService.showLoading('Reimprimiendo recibo...');
        // Obtener detalles de la venta desde la base de datos
        const details = yield _this6.supabaseService.getSaleDetails(sale.id);
        console.log('Detalles obtenidos de la BD:', details);
        if (details.length === 0) {
          console.warn('No se encontraron detalles para la venta:', sale.id);
          _this6.notificationService.showError('Sin detalles', 'No se encontraron detalles para esta venta. No se puede reimprimir el recibo.');
          return;
        }
        // Generar recibo con los detalles obtenidos
        _this6.printService.generateThermalReceipt(sale, details);
        _this6.notificationService.showSuccess('Recibo reimpreso', `Recibo #${sale.numeroRecibo || sale.id} enviado a impresora`);
      } catch (error) {
        console.error('Error reimprimiendo recibo:', error);
        _this6.notificationService.showError('Error de reimpresión', 'Error al reimprimir el recibo. Por favor intente nuevamente.');
      } finally {
        _this6.notificationService.hideLoading();
      }
    })();
  }
  // Funciones de optimización para trackBy
  trackByIndex(index, item) {
    return index;
  }
  trackBySaleId(index, sale) {
    return sale.id;
  }
  trackByDetailId(index, detail) {
    return detail.id;
  }
  // Función de debug temporal
  debugModalState() {
    console.log('=== DEBUG MODAL STATE ===');
    console.log('showNumberModal:', this.showNumberModal);
    console.log('showAmountModal:', this.showAmountModal);
    console.log('showConfirmModal:', this.showConfirmModal);
    console.log('isProcessingModal:', this.isProcessingModal);
    console.log('isBlocked:', this.isBlocked);
    console.log('isLoading:', this.isLoading);
    console.log('modalNumberInput:', this.modalNumberInput);
    console.log('modalAmountInput:', this.modalAmountInput);
    console.log('tempNumber:', this.tempNumber);
    console.log('tempAmount:', this.tempAmount);
    console.log('currentUser:', this.currentUser);
    console.log('========================');
    // Forzar reinicio completo de los modales
    this.closeAllModals();
    alert(`Estado de modales:
- showNumberModal: ${this.showNumberModal}
- showAmountModal: ${this.showAmountModal}  
- showConfirmModal: ${this.showConfirmModal}
- isProcessingModal: ${this.isProcessingModal}
- isBlocked: ${this.isBlocked}
Revisa la consola para más detalles.`);
  }
  // Función para toggle manual de bloqueo
  toggleBloqueo() {
    this.isBlocked = !this.isBlocked;
    const estado = this.isBlocked ? 'bloqueadas' : 'habilitadas';
    this.notificationService.showInfo('Estado actualizado', `Ventas ${estado} manualmente`);
    console.log('[SUCURSAL] Bloqueo manual:', this.isBlocked);
  }
  // Método de debug temporal para verificar conexión con BD
  debugSalesData() {
    var _this7 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('=== INICIANDO DEBUG DESDE SUCURSAL ===');
      console.log('Usuario actual:', _this7.currentUser);
      try {
        // Verificar permisos primero
        console.log('=== VERIFICANDO PERMISOS ===');
        yield _this7.supabaseService.checkDatabasePermissions();
        // Llamar al método de debug del servicio
        console.log('=== DEBUG GENERAL DE DATOS ===');
        yield _this7.supabaseService.debugSalesData();
        // Intentar cargar ventas de hoy directamente
        console.log('=== PROBANDO loadTodaySales ===');
        yield _this7.loadTodaySales();
        console.log('Ventas del día cargadas:', _this7.todaySales.length);
        console.log('Detalles de ventas cargados:', Object.keys(_this7.saleDetails).length);
        // Probar con fechas diferentes
        console.log('=== PROBANDO FECHAS ESPECÍFICAS ===');
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdaySales = yield _this7.supabaseService.getSalesByDateAndSorteo(yesterday, '');
        console.log('Ventas de ayer:', yesterdaySales.length);
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowSales = yield _this7.supabaseService.getSalesByDateAndSorteo(tomorrow, '');
        console.log('Ventas de mañana:', tomorrowSales.length);
        // Verificar estado de ventas recientes
        console.log('=== ESTADO DE VENTAS RECIENTES ===');
        console.log('recentSales length:', _this7.recentSales.length);
        console.log('todaySales length:', _this7.todaySales.length);
        // Probar refresh forzado
        console.log('=== PROBANDO REFRESH FORZADO ===');
        yield _this7.loadRecentSales();
        console.log('Después del refresh - recentSales:', _this7.recentSales.length);
      } catch (error) {
        console.error('Error en debug de sucursal:', error);
      }
    })();
  }
  static {
    this.ɵfac = function SucursalComponent_Factory(t) {
      return new (t || SucursalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_sorteo_service__WEBPACK_IMPORTED_MODULE_2__.SorteoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SucursalComponent,
      selectors: [["app-sucursal"]],
      decls: 131,
      vars: 25,
      consts: [[1, "lottery-interface"], [1, "header-bar"], [1, "btn-header", "btn-bloquear", 3, "click", "disabled"], [1, "btn-header", 2, "background", "rgba(255, 193, 7, 0.2)", "border-color", "rgba(255, 193, 7, 0.3)", 3, "click"], [1, "sucursal-title"], [1, "btn-header", "btn-cerrar", 3, "click", "disabled"], [1, "main-content"], ["class", "venta-screen", 4, "ngIf"], ["class", "jugadas-screen", 4, "ngIf"], ["class", "ventas-actuales", 4, "ngIf"], [1, "modal", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "fas", "fa-hashtag"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "calculator-container"], [1, "calculator-display"], [1, "display-label"], [1, "display-value"], [1, "calculator-keypad"], [1, "keypad-row"], ["type", "button", 1, "keypad-btn", 3, "click"], ["type", "button", 1, "keypad-btn", "keypad-clear", 3, "click"], ["type", "button", 1, "keypad-btn", "keypad-accept", 3, "click", "disabled"], [1, "fas", "fa-dollar-sign"], [1, "fas", "fa-check-circle"], [1, "confirmation-container"], [1, "confirmation-card"], [1, "number-display-large"], [1, "amount-display"], [1, "confirmation-buttons"], ["type", "button", 1, "btn", "btn-success", "btn-lg", 3, "click"], [1, "fas", "fa-check"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click"], [1, "fas", "fa-times"], [1, "venta-screen"], [1, "venta-button-container"], [1, "btn-venta", 3, "click", "disabled"], ["class", "sorteo-info", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "sorteo-info"], [1, "alert", "alert-info"], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-success"], [1, "text-danger"], [1, "alert", "alert-danger"], [1, "fas", "fa-lock"], [1, "jugadas-screen"], [1, "jugadas-table"], [1, "table-header"], [1, "col-numero"], [1, "col-monto"], [1, "col-accion"], [1, "table-body"], ["class", "table-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "add-more-container"], [1, "btn-add-more", 3, "click", "disabled"], [1, "pagar-container"], [1, "btn-pagar", 3, "click", "disabled"], [1, "table-row"], [1, "btn-remove", 3, "click", "disabled"], [1, "ventas-actuales"], [1, "ventas-header"], [1, "ventas-body"], [1, "transacciones-header"], ["class", "transaccion-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "transaccion-item"], [1, "transaccion-left"], [1, "fecha-hora"], [1, "numero-recibo"], [1, "correlativo"], [1, "numeros-jugados"], ["class", "numero-small", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "transaccion-right"], [1, "total"], [1, "btn-reimprimir", 3, "click"], [1, "numero-small"]],
      template: function SucursalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_2_listener() {
            return ctx.toggleBloqueo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_4_listener() {
            return ctx.debugSalesData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Debug DB ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_9_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Cerrar Sesi\u00F3n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SucursalComponent_div_12_Template, 6, 3, "div", 7)(13, SucursalComponent_div_13_Template, 16, 4, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SucursalComponent_div_14_Template, 8, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_15_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_16_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " Seleccionar N\u00FAmero ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_22_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 17)(26, "div", 18)(27, "div", 19)(28, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "NUMERO");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 22)(33, "div", 23)(34, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_34_listener($event) {
            ctx.pressModalNumber(1);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_36_listener($event) {
            ctx.pressModalNumber(2);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_38_listener($event) {
            ctx.pressModalNumber(3);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 23)(41, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_41_listener($event) {
            ctx.pressModalNumber(4);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_43_listener($event) {
            ctx.pressModalNumber(5);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_45_listener($event) {
            ctx.pressModalNumber(6);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 23)(48, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_48_listener($event) {
            ctx.pressModalNumber(7);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_50_listener($event) {
            ctx.pressModalNumber(8);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "8");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_52_listener($event) {
            ctx.pressModalNumber(9);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 23)(55, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_55_listener($event) {
            ctx.pressModalNumber(0);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_57_listener($event) {
            ctx.clearModalNumber();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, " C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_59_listener($event) {
            ctx.acceptModalNumber();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, " Aceptar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_61_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_62_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 12)(64, "div", 13)(65, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, " Ingresar Apuesta ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_68_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 17)(72, "div", 18)(73, "div", 19)(74, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "APUESTA");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 22)(79, "div", 23)(80, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_80_listener($event) {
            ctx.pressModalAmount(1);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_82_listener($event) {
            ctx.pressModalAmount(2);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_84_listener($event) {
            ctx.pressModalAmount(3);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 23)(87, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_87_listener($event) {
            ctx.pressModalAmount(4);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_89_listener($event) {
            ctx.pressModalAmount(5);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_91_listener($event) {
            ctx.pressModalAmount(6);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 23)(94, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_94_listener($event) {
            ctx.pressModalAmount(7);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_96_listener($event) {
            ctx.pressModalAmount(8);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "8");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_98_listener($event) {
            ctx.pressModalAmount(9);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 23)(101, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_101_listener($event) {
            ctx.pressModalAmount(0);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_103_listener($event) {
            ctx.clearModalAmount();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, " C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_105_listener($event) {
            ctx.acceptModalAmount();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, " Aceptar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_107_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_108_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 12)(110, "div", 13)(111, "h5", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](112, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, " Confirmar Apuesta ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_114_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 17)(118, "div", 29)(119, "div", 30)(120, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 33)(125, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_125_listener() {
            return ctx.confirmAddNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](126, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, " CONFIRMAR ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_128_listener() {
            return ctx.cancelAddNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](129, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, " Cancelar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.isBlocked ? "Desbloquear" : "Bloquear", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.currentUser == null ? null : ctx.currentUser.sucursal) || "Sucursal 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedNumbers.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedNumbers.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.recentSales.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("display", ctx.showNumberModal ? "flex" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx.showNumberModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((ctx.modalNumberInput || "00").padStart(2, "0"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.modalNumberInput);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("display", ctx.showAmountModal ? "flex" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx.showAmountModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.modalAmountInput || "00");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.modalAmountInput);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("display", ctx.showConfirmModal ? "flex" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx.showConfirmModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" # ", ctx.tempNumber !== null ? ctx.tempNumber.toString().padStart(2, "0") : "00", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" APUESTA: L ", ctx.tempAmount || 0, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
      styles: ["@charset \"UTF-8\";\n\n\n.lottery-interface[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  background: #f8f9fa;\n  min-height: 100vh;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\n\n.header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  border-bottom: 1px solid #e9ecef;\n  padding: 20px 25px;\n  margin-bottom: 0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n\n.btn-header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dee2e6;\n  padding: 10px 20px;\n  font-weight: 500;\n  cursor: pointer;\n  font-size: 14px;\n  color: #495057;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n\n.btn-header[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #adb5bd;\n  color: #343a40;\n}\n\n.btn-header[_ngcontent-%COMP%]:disabled {\n  background: #f8f9fa;\n  cursor: not-allowed;\n  opacity: 0.6;\n  color: #6c757d;\n}\n\n.sucursal-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #343a40;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: #ffffff;\n  border-radius: 0 0 8px 8px;\n  border-radius: 0 0 8px 8px;\n  min-height: 500px;\n}\n\n.venta-screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  text-align: center;\n}\n\n.btn-venta[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 100px;\n  background: #28a745;\n  border: none;\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.btn-venta[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #218838;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(40, 167, 69, 0.4);\n}\n\n.btn-venta[_ngcontent-%COMP%]:disabled {\n  background: #6c757d;\n  color: white;\n  cursor: not-allowed;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n\n.sorteo-info[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  border: 1px solid #bee5eb;\n  background: #d1ecf1;\n  color: #0c5460;\n  text-align: center;\n  margin: 20px 0;\n  padding: 12px;\n  border-radius: 6px;\n  font-weight: 500;\n}\n\n.jugadas-table[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  margin-bottom: 20px;\n  background: white;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 60px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n\n.table-header[_ngcontent-%COMP%]   .col-numero[_ngcontent-%COMP%], .table-header[_ngcontent-%COMP%]   .col-monto[_ngcontent-%COMP%], .table-header[_ngcontent-%COMP%]   .col-accion[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-right: 1px solid #dee2e6;\n  text-align: center;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.table-header[_ngcontent-%COMP%]   .col-accion[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\n.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 60px;\n  border-bottom: 1px solid #f8f9fa;\n  transition: background-color 0.2s ease;\n}\n\n.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n\n.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.table-body[_ngcontent-%COMP%]   .col-numero[_ngcontent-%COMP%], .table-body[_ngcontent-%COMP%]   .col-monto[_ngcontent-%COMP%], .table-body[_ngcontent-%COMP%]   .col-accion[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-right: 1px solid #f8f9fa;\n  text-align: center;\n  color: #495057;\n}\n\n.table-body[_ngcontent-%COMP%]   .col-accion[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n  background: #dc3545;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n  transform: scale(1.05);\n}\n\n.btn-add-more[_ngcontent-%COMP%] {\n  background: #17a2b8;\n  border: none;\n  padding: 10px 20px;\n  font-weight: 500;\n  cursor: pointer;\n  margin: 20px 0;\n  color: white;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n\n.btn-add-more[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #138496;\n  transform: translateY(-1px);\n}\n\n.btn-pagar[_ngcontent-%COMP%] {\n  background: #fd7e14;\n  border: none;\n  padding: 14px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  float: right;\n  color: white;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n\n.btn-pagar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e76500;\n  transform: translateY(-1px);\n}\n\n.ventas-actuales[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  margin-top: 20px;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  max-height: 400px;\n  display: flex;\n  flex-direction: column;\n}\n\n.ventas-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  padding: 15px 20px;\n  flex-shrink: 0;\n}\n\n.ventas-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #495057;\n}\n\n.ventas-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n}\n\n.transacciones-header[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  border-bottom: 1px solid #dee2e6;\n  padding: 10px 20px;\n  font-weight: 600;\n  font-size: 12px;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.transaccion-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 1px solid #f8f9fa;\n  transition: background-color 0.2s ease;\n}\n\n.transaccion-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n\n.transaccion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.transaccion-left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.transaccion-left[_ngcontent-%COMP%]   .fecha-hora[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  margin-bottom: 2px;\n  font-weight: 500;\n}\n\n.transaccion-left[_ngcontent-%COMP%]   .numero-recibo[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #007bff;\n  margin-bottom: 2px;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n\n.transaccion-left[_ngcontent-%COMP%]   .correlativo[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #28a745;\n  margin-bottom: 4px;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n\n.transaccion-left[_ngcontent-%COMP%]   .numeros-jugados[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.numero-small[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #495057;\n  background: #e9ecef;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-weight: 500;\n}\n\n.transaccion-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.transaccion-right[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: #495057;\n}\n\n.btn-reimprimir[_ngcontent-%COMP%] {\n  background: #6c757d;\n  border: none;\n  padding: 4px 8px;\n  font-size: 10px;\n  cursor: pointer;\n  color: white;\n  border-radius: 3px;\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.btn-reimprimir[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  padding: 12px;\n  margin: 15px 0;\n  border-radius: 6px;\n  font-weight: 500;\n}\n\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n  border-color: #bee5eb;\n}\n\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  border-color: #f5c6cb;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1050;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  display: none;\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.modal.show[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  z-index: 1055;\n  transform: scale(0.9);\n  transition: transform 0.2s ease-in-out;\n}\n\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  max-width: 400px;\n  width: 100%;\n  border: 1px solid #dee2e6;\n  transform: translateY(-10px);\n  transition: transform 0.2s ease-in-out;\n}\n\n.modal.show[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid #dee2e6;\n  background: #f8f9fa;\n  position: relative;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #6c757d;\n  background: none;\n  border: none;\n  cursor: pointer;\n  z-index: 1055;\n  line-height: 1;\n  width: 30px;\n  height: 30px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n\n\n.calculator-container[_ngcontent-%COMP%] {\n  width: 100%;\n  background: white;\n}\n\n.calculator-display[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  padding: 25px;\n  text-align: center;\n}\n\n.display-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n  display: block;\n  font-weight: 600;\n}\n\n.display-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 600;\n  color: #495057;\n  font-family: \"Courier New\", monospace;\n  min-height: 40px;\n  line-height: 1;\n}\n\n.calculator-keypad[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: white;\n}\n\n.keypad-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.keypad-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.keypad-btn[_ngcontent-%COMP%] {\n  height: 50px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background: white;\n  font-size: 16px;\n  font-weight: 600;\n  color: #495057;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.keypad-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #adb5bd;\n}\n\n.keypad-btn[_ngcontent-%COMP%]:active {\n  background: #e9ecef;\n}\n\n.keypad-btn[_ngcontent-%COMP%]:disabled {\n  background: #f8f9fa;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n\n.keypad-clear[_ngcontent-%COMP%] {\n  background: #dc3545 !important;\n  color: white !important;\n  border-color: #dc3545 !important;\n}\n\n.keypad-clear[_ngcontent-%COMP%]:hover {\n  background: #c82333 !important;\n  border-color: #c82333 !important;\n}\n\n.keypad-accept[_ngcontent-%COMP%] {\n  background: #28a745 !important;\n  color: white !important;\n  border-color: #28a745 !important;\n}\n\n.keypad-accept[_ngcontent-%COMP%]:hover {\n  background: #218838 !important;\n  border-color: #218838 !important;\n}\n\n\n\n.confirmation-container[_ngcontent-%COMP%] {\n  padding: 25px;\n  text-align: center;\n  background: white;\n}\n\n.confirmation-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 30px;\n  border: 1px solid #dee2e6;\n}\n\n.number-display-large[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  color: #28a745;\n  margin-bottom: 15px;\n  font-family: \"Courier New\", monospace;\n}\n\n.amount-display[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #495057;\n  margin-bottom: 25px;\n  font-weight: 600;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n\n\n\n@media (max-width: 768px) {\n  .lottery-interface[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0;\n  }\n  .header-bar[_ngcontent-%COMP%] {\n    padding: 15px;\n    border-radius: 0;\n  }\n  .btn-header[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 12px;\n  }\n  .sucursal-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 20px;\n    border-radius: 0;\n  }\n  .btn-venta[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 80px;\n    font-size: 20px;\n  }\n  .table-header[_ngcontent-%COMP%], .table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 50px;\n  }\n  .col-numero[_ngcontent-%COMP%], .col-monto[_ngcontent-%COMP%], .col-accion[_ngcontent-%COMP%] {\n    padding: 8px !important;\n    font-size: 13px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    max-width: 90%;\n    margin: 20px;\n  }\n  .ventas-actuales[_ngcontent-%COMP%] {\n    max-height: 300px;\n  }\n  .transaccion-item[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n  }\n  .transaccion-left[_ngcontent-%COMP%]   .fecha-hora[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .numero-small[_ngcontent-%COMP%] {\n    font-size: 9px;\n    padding: 1px 4px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0xvdGVyaWElMjB2MS9sb3RlcmlhL3NyYy9hcHAvY29tcG9uZW50cy9zdWN1cnNhbC9zdWN1cnNhbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdWN1cnNhbC9zdWN1cnNhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsd0NBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNERBQUE7RUFDQSx1Q0FBQTtBRENGOztBQ0VBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURDRjs7QUNFQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEQ0Y7O0FDRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QURDRjs7QUNFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZDQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FEQ0Y7O0FDRUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEQ0Y7O0FDRUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QURDRjs7QUNFQTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURDRjs7QUNFQTs7O0VBR0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRENGOztBQ0VBO0VBQ0Usa0JBQUE7QURDRjs7QUNFQTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtBRENGOztBQ0VBOzs7RUFHRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURDRjs7QUNFQTtFQUNFLGtCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QURDRjs7QUNFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEQ0Y7O0FDRUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRENGOztBQ0VBO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FEQ0Y7O0FDRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0FEQ0Y7O0FDRUE7RUFDRSxPQUFBO0FEQ0Y7O0FDRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURDRjs7QUNFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FEQ0Y7O0FDRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBRENGOztBQ0VBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FEQ0Y7O0FDRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxpQkFBQTtBRENGOztBQ0VBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0FEQ0Y7O0FDRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FEQ0Y7O0FDRUEsZ0VBQUE7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7QURDRjs7QUNFQTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QURDRjs7QUNFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtBRENGOztBQ0VBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7QURDRjs7QUNFQTtFQUNFLHdCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRENGOztBQ0VBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FEQ0Y7O0FDRUE7RUFDRSxVQUFBO0FEQ0Y7O0FDRUEsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBRENGOztBQ0VBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURDRjs7QUNFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRENGOztBQ0VBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QURDRjs7QUNFQTtFQUNFLGdCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEQ0Y7O0FDRUE7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QURDRjs7QUNFQTtFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QURDRjs7QUNFQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBRENGOztBQ0VBO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtBRENGOztBQ0VBLDBCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBRENGOztBQ0VBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QURDRjs7QUNFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRENGOztBQ0VBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBRENGOztBQ0VBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0FEQ0Y7O0FDRUEsMkJBQUE7QUFDQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFNBQUE7RURDRjtFQ0VBO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0VEQUY7RUNHQTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFRERGO0VDSUE7SUFDRSxlQUFBO0VERkY7RUNLQTtJQUNFLGFBQUE7SUFDQSxnQkFBQTtFREhGO0VDTUE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RURKRjtFQ09BOztJQUVFLG1DQUFBO0VETEY7RUNRQTs7O0lBR0UsdUJBQUE7SUFDQSxlQUFBO0VETkY7RUNTQTtJQUNFLGNBQUE7SUFDQSxZQUFBO0VEUEY7RUNVQTtJQUNFLGlCQUFBO0VEUkY7RUNXQTtJQUNFLGtCQUFBO0VEVEY7RUNZQTtJQUNFLGVBQUE7RURWRjtFQ2FBO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0VEWEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIERJU0XDg8KRTyBNSU5JTUFMSVNUQSBDT04gUEFMRVRBIFNVVElMICovXG4ubG90dGVyeS1pbnRlcmZhY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG4gIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5idG4taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLmJ0bi1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItY29sb3I6ICNhZGI1YmQ7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuXG4uYnRuLWhlYWRlcjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5zdWN1cnNhbC10aXRsZSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzM0M2E0MDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG59XG5cbi52ZW50YS1zY3JlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi12ZW50YSB7XG4gIHdpZHRoOiAyMjBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzI4YTc0NTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg0MCwgMTY3LCA2OSwgMC4zKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmJ0bi12ZW50YTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMyMTg4Mzg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjQpO1xufVxuXG4uYnRuLXZlbnRhOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc29ydGVvLWluZm8gLmFsZXJ0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JlZTVlYjtcbiAgYmFja2dyb3VuZDogI2QxZWNmMTtcbiAgY29sb3I6ICMwYzU0NjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmp1Z2FkYXMtdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi50YWJsZS1oZWFkZXIgLmNvbC1udW1lcm8sXG4udGFibGUtaGVhZGVyIC5jb2wtbW9udG8sXG4udGFibGUtaGVhZGVyIC5jb2wtYWNjaW9uIHtcbiAgcGFkZGluZzogMTRweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnRhYmxlLWhlYWRlciAuY29sLWFjY2lvbiB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA2MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi50YWJsZS1ib2R5IC50YWJsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG4udGFibGUtYm9keSAudGFibGUtcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4udGFibGUtYm9keSAuY29sLW51bWVybyxcbi50YWJsZS1ib2R5IC5jb2wtbW9udG8sXG4udGFibGUtYm9keSAuY29sLWFjY2lvbiB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmOGY5ZmE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi50YWJsZS1ib2R5IC5jb2wtYWNjaW9uIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uYnRuLXJlbW92ZSB7XG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4uYnRuLXJlbW92ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjODIzMzM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5idG4tYWRkLW1vcmUge1xuICBiYWNrZ3JvdW5kOiAjMTdhMmI4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDIwcHggMDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ0bi1hZGQtbW9yZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMxMzg0OTY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmJ0bi1wYWdhciB7XG4gIGJhY2tncm91bmQ6ICNmZDdlMTQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTRweCAzMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLmJ0bi1wYWdhcjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICNlNzY1MDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLnZlbnRhcy1hY3R1YWxlcyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnZlbnRhcy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnZlbnRhcy1oZWFkZXIgaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi52ZW50YXMtYm9keSB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi50cmFuc2FjY2lvbmVzLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnRyYW5zYWNjaW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xufVxuXG4udHJhbnNhY2Npb24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG59XG5cbi50cmFuc2FjY2lvbi1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4udHJhbnNhY2Npb24tbGVmdCB7XG4gIGZsZXg6IDE7XG59XG5cbi50cmFuc2FjY2lvbi1sZWZ0IC5mZWNoYS1ob3JhIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udHJhbnNhY2Npb24tbGVmdCAubnVtZXJvLXJlY2libyB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xufVxuXG4udHJhbnNhY2Npb24tbGVmdCAuY29ycmVsYXRpdm8ge1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xufVxuXG4udHJhbnNhY2Npb24tbGVmdCAubnVtZXJvcy1qdWdhZG9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDRweDtcbn1cblxuLm51bWVyby1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRyYW5zYWNjaW9uLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50cmFuc2FjY2lvbi1yaWdodCAudG90YWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4uYnRuLXJlaW1wcmltaXIge1xuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uYnRuLXJlaW1wcmltaXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xufVxuXG4uYWxlcnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW46IDE1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYWxlcnQuYWxlcnQtaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNkMWVjZjE7XG4gIGNvbG9yOiAjMGM1NDYwO1xuICBib3JkZXItY29sb3I6ICNiZWU1ZWI7XG59XG5cbi5hbGVydC5hbGVydC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xuICBjb2xvcjogIzcyMWMyNDtcbiAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xufVxuXG4vKiBFU1RJTE9TIFBBUkEgTU9EQUxFUyAtIE1JTklNQUxJU1RBUyBDT04gVFJBTlNJQ0lPTkVTIFNVQVZFUyAqL1xuLm1vZGFsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDUwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLm1vZGFsLnNob3cge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIHotaW5kZXg6IDEwNTU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tb2RhbC5zaG93IC5tb2RhbC1kaWFsb2cge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLm1vZGFsLnNob3cgLm1vZGFsLWNvbnRlbnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTA1NTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5tb2RhbC1oZWFkZXIgLmNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLyogQ2FsY3VsYWRvcmEgTWluaW1hbGlzdGEgKi9cbi5jYWxjdWxhdG9yLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNhbGN1bGF0b3ItZGlzcGxheSB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICBwYWRkaW5nOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXNwbGF5LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRpc3BsYXktdmFsdWUge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uY2FsY3VsYXRvci1rZXlwYWQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmtleXBhZC1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5rZXlwYWQtcm93Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ua2V5cGFkLWJ0biB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ua2V5cGFkLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1jb2xvcjogI2FkYjViZDtcbn1cblxuLmtleXBhZC1idG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbn1cblxuLmtleXBhZC1idG46ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmtleXBhZC1jbGVhciB7XG4gIGJhY2tncm91bmQ6ICNkYzM1NDUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuXG4ua2V5cGFkLWNsZWFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2M4MjMzMyAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNjODIzMzMgIWltcG9ydGFudDtcbn1cblxuLmtleXBhZC1hY2NlcHQge1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cblxuLmtleXBhZC1hY2NlcHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjE4ODM4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzIxODgzOCAhaW1wb3J0YW50O1xufVxuXG4vKiBNb2RhbCBkZSBjb25maXJtYWNpw4PCs24gKi9cbi5jb25maXJtYXRpb24tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNvbmZpcm1hdGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4ubnVtYmVyLWRpc3BsYXktbGFyZ2Uge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi5hbW91bnQtZGlzcGxheSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb25maXJtYXRpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMnB4O1xufVxuXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMgLmJ0biB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMgLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogIzI4YTc0NTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMgLmJ0bi1zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzIxODgzODtcbn1cblxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMgLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xufVxuXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMgLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xufVxuXG4vKiBSRVNQT05TSVZFIE1JTklNQUxJU1RBICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvdHRlcnktaW50ZXJmYWNlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5oZWFkZXItYmFyIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLmJ0bi1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuc3VjdXJzYWwtdGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAubWFpbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgLmJ0bi12ZW50YSB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnRhYmxlLWhlYWRlcixcbiAgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDUwcHg7XG4gIH1cbiAgLmNvbC1udW1lcm8sXG4gIC5jb2wtbW9udG8sXG4gIC5jb2wtYWNjaW9uIHtcbiAgICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuICAudmVudGFzLWFjdHVhbGVzIHtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgfVxuICAudHJhbnNhY2Npb24taXRlbSB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICB9XG4gIC50cmFuc2FjY2lvbi1sZWZ0IC5mZWNoYS1ob3JhIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgLm51bWVyby1zbWFsbCB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgcGFkZGluZzogMXB4IDRweDtcbiAgfVxufSIsIi8qIERJU0XDg8KRTyBNSU5JTUFMSVNUQSBDT04gUEFMRVRBIFNVVElMICovXHJcblxyXG4ubG90dGVyeS1pbnRlcmZhY2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4uaGVhZGVyLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIHBhZGRpbmc6IDIwcHggMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG4uYnRuLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5idG4taGVhZGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1jb2xvcjogI2FkYjViZDtcclxuICBjb2xvcjogIzM0M2E0MDtcclxufVxyXG5cclxuLmJ0bi1oZWFkZXI6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5zdWN1cnNhbC10aXRsZSBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi52ZW50YS1zY3JlZW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi12ZW50YSB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZDogIzI4YTc0NTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjMpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uYnRuLXZlbnRhOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiAjMjE4ODM4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoNDAsIDE2NywgNjksIDAuNCk7XHJcbn1cclxuXHJcbi5idG4tdmVudGE6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuLnNvcnRlby1pbmZvIC5hbGVydCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2JlZTVlYjtcclxuICBiYWNrZ3JvdW5kOiAjZDFlY2YxO1xyXG4gIGNvbG9yOiAjMGM1NDYwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uanVnYWRhcy10YWJsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLnRhYmxlLWhlYWRlciAuY29sLW51bWVybyxcclxuLnRhYmxlLWhlYWRlciAuY29sLW1vbnRvLFxyXG4udGFibGUtaGVhZGVyIC5jb2wtYWNjaW9uIHtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLnRhYmxlLWhlYWRlciAuY29sLWFjY2lvbiB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4udGFibGUtYm9keSAudGFibGUtcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA2MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOWZhO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4udGFibGUtYm9keSAudGFibGUtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG59XHJcblxyXG4udGFibGUtYm9keSAudGFibGUtcm93Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZS1ib2R5IC5jb2wtbnVtZXJvLFxyXG4udGFibGUtYm9keSAuY29sLW1vbnRvLFxyXG4udGFibGUtYm9keSAuY29sLWFjY2lvbiB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjhmOWZhO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLnRhYmxlLWJvZHkgLmNvbC1hY2Npb24ge1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1yZW1vdmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLXJlbW92ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2M4MjMzMztcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uYnRuLWFkZC1tb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjMTdhMmI4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJ0bi1hZGQtbW9yZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogIzEzODQ5NjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5idG4tcGFnYXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZDdlMTQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDE0cHggMzJweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmJ0bi1wYWdhcjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogI2U3NjUwMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi52ZW50YXMtYWN0dWFsZXMge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi52ZW50YXMtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnZlbnRhcy1oZWFkZXIgaDQge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLnZlbnRhcy1ib2R5IHtcclxuICBmbGV4OiAxO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMDtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uZXMtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOWZhO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4udHJhbnNhY2Npb24taXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLWxlZnQge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50cmFuc2FjY2lvbi1sZWZ0IC5mZWNoYS1ob3JhIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50cmFuc2FjY2lvbi1sZWZ0IC5udW1lcm8tcmVjaWJvIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLWxlZnQgLmNvcnJlbGF0aXZvIHtcclxuICBmb250LXNpemU6IDlweDtcclxuICBjb2xvcjogIzI4YTc0NTtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4udHJhbnNhY2Npb24tbGVmdCAubnVtZXJvcy1qdWdhZG9zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLm51bWVyby1zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgcGFkZGluZzogMnB4IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLXJpZ2h0IC50b3RhbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcbi5idG4tcmVpbXByaW1pciB7XHJcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNHB4IDhweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLmJ0bi1yZWltcHJpbWlyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBtYXJnaW46IDE1cHggMDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmFsZXJ0LmFsZXJ0LWluZm8ge1xyXG4gIGJhY2tncm91bmQ6ICNkMWVjZjE7XHJcbiAgY29sb3I6ICMwYzU0NjA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYmVlNWViO1xyXG59XHJcblxyXG4uYWxlcnQuYWxlcnQtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xyXG4gIGNvbG9yOiAjNzIxYzI0O1xyXG4gIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcclxufVxyXG5cclxuLyogRVNUSUxPUyBQQVJBIE1PREFMRVMgLSBNSU5JTUFMSVNUQVMgQ09OIFRSQU5TSUNJT05FUyBTVUFWRVMgKi9cclxuLm1vZGFsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgei1pbmRleDogMTA1MDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tb2RhbC5zaG93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHotaW5kZXg6IDEwNTU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1vZGFsLnNob3cgLm1vZGFsLWNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1vZGFsLXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMDU1O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgLmNsb3NlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyogQ2FsY3VsYWRvcmEgTWluaW1hbGlzdGEgKi9cclxuLmNhbGN1bGF0b3ItY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhbGN1bGF0b3ItZGlzcGxheSB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpc3BsYXktbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5kaXNwbGF5LXZhbHVlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5jYWxjdWxhdG9yLWtleXBhZCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmtleXBhZC1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmtleXBhZC1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmtleXBhZC1idG4ge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmtleXBhZC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG4ua2V5cGFkLWJ0bjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbn1cclxuXHJcbi5rZXlwYWQtYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5rZXlwYWQtY2xlYXIge1xyXG4gIGJhY2tncm91bmQ6ICNkYzM1NDUgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmtleXBhZC1jbGVhcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2M4MjMzMyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2M4MjMzMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ua2V5cGFkLWFjY2VwdCB7XHJcbiAgYmFja2dyb3VuZDogIzI4YTc0NSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ua2V5cGFkLWFjY2VwdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzIxODgzOCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzIxODgzOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBNb2RhbCBkZSBjb25maXJtYWNpw4PCs24gKi9cclxuLmNvbmZpcm1hdGlvbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLm51bWJlci1kaXNwbGF5LWxhcmdlIHtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzI4YTc0NTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi5hbW91bnQtZGlzcGxheSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1idXR0b25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tYnV0dG9ucyAuYnRuIHtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4tc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogIzI4YTc0NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tYnV0dG9ucyAuYnRuLXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyMTg4Mzg7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tYnV0dG9ucyAuYnRuLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tYnV0dG9ucyAuYnRuLXNlY29uZGFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzVhNjI2ODtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xyXG59XHJcblxyXG4vKiBSRVNQT05TSVZFIE1JTklNQUxJU1RBICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5sb3R0ZXJ5LWludGVyZmFjZSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItYmFyIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLnN1Y3Vyc2FsLXRpdGxlIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4tY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi12ZW50YSB7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1oZWFkZXIsXHJcbiAgLnRhYmxlLWJvZHkgLnRhYmxlLXJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbC1udW1lcm8sXHJcbiAgLmNvbC1tb250byxcclxuICAuY29sLWFjY2lvbiB7XHJcbiAgICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZW50YXMtYWN0dWFsZXMge1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50cmFuc2FjY2lvbi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRyYW5zYWNjaW9uLWxlZnQgLmZlY2hhLWhvcmEge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubnVtZXJvLXNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgcGFkZGluZzogMXB4IDRweDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9153:
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminGuard: () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/supabase.service */ 9692);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);





class AdminGuard {
  constructor(supabaseService, router) {
    this.supabaseService = supabaseService;
    this.router = router;
  }
  canActivate() {
    return this.supabaseService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.timeout)(5000),
    // 5 segundos timeout
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
      console.log('AdminGuard - Usuario actual:', user);
      return user?.role === 'admin';
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(isAdmin => {
      console.log('AdminGuard - Es admin:', isAdmin);
      if (!isAdmin) {
        console.log('AdminGuard - Redirigiendo a login');
        this.router.navigate(['/login']);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('AdminGuard - Error o timeout:', error);
      this.router.navigate(['/login']);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
    }));
  }
  static {
    this.ɵfac = function AdminGuard_Factory(t) {
      return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_supabase_service__WEBPACK_IMPORTED_MODULE_0__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: AdminGuard,
      factory: AdminGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/supabase.service */ 9692);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);





class AuthGuard {
  constructor(supabaseService, router) {
    this.supabaseService = supabaseService;
    this.router = router;
  }
  canActivate() {
    return this.supabaseService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.timeout)(5000),
    // 5 segundos timeout
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
      console.log('AuthGuard - Usuario actual:', user);
      return !!user;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(isAuthenticated => {
      console.log('AuthGuard - Autenticado:', isAuthenticated);
      if (!isAuthenticated) {
        console.log('AuthGuard - Redirigiendo a login');
        this.router.navigate(['/login']);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('AuthGuard - Error o timeout:', error);
      this.router.navigate(['/login']);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false);
    }));
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_supabase_service__WEBPACK_IMPORTED_MODULE_0__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4597:
/*!**************************************!*\
  !*** ./src/app/models/interfaces.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SORTEO_SCHEDULES: () => (/* binding */ SORTEO_SCHEDULES)
/* harmony export */ });
const SORTEO_SCHEDULES = [{
  name: 'mañana',
  label: 'Mañana',
  closeTime: '10:55'
}, {
  name: 'tarde',
  label: 'Tarde',
  closeTime: '14:55'
}, {
  name: 'noche',
  label: 'Noche',
  closeTime: '22:00'
}];

/***/ }),

/***/ 7473:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 7581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class NotificationService {
  constructor() {
    this.loadingInstance = null;
  }
  // Mostrar mensaje de éxito
  showSuccess(title, text) {
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title,
        text,
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#28a745'
      });
    })();
  }
  // Mostrar mensaje de error
  showError(title, text) {
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title,
        text,
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#dc3545'
      });
    })();
  }
  // Mostrar mensaje de información
  showInfo(title, text) {
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title,
        text,
        icon: 'info',
        confirmButtonText: 'OK',
        confirmButtonColor: '#007bff'
      });
    })();
  }
  // Mostrar mensaje de advertencia
  showWarning(title, text) {
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title,
        text,
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#ffc107'
      });
    })();
  }
  // Mostrar confirmación
  showConfirmation(_x, _x2) {
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (title, text, confirmButtonText = 'Sí, confirmar', cancelButtonText = 'Cancelar') {
      const result = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        title,
        text,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText,
        cancelButtonText,
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#dc3545'
      });
      return result.isConfirmed;
    }).apply(this, arguments);
  }
  // Mostrar loader
  showLoading(title = 'Cargando...') {
    this.hideLoading(); // Cerrar cualquier loading anterior
    this.loadingInstance = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().showLoading();
      }
    });
  }
  // Cerrar loader
  hideLoading() {
    if (this.loadingInstance) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
      this.loadingInstance = null;
    }
  }
  static {
    this.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4389:
/*!*******************************************!*\
  !*** ./src/app/services/print.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrintService: () => (/* binding */ PrintService)
/* harmony export */ });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ 8198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class PrintService {
  constructor() {}
  // Generar PDF térmico para venta
  generateThermalReceipt(sale, details) {
    console.log('=== GENERANDO RECIBO PARA IMPRESIÓN ===');
    console.log('Sale completo:', JSON.stringify(sale, null, 2));
    console.log('Details completo:', JSON.stringify(details, null, 2));
    console.log('Cantidad de detalles:', details ? details.length : 'details es null/undefined');
    // Si no hay detalles, crear datos de prueba
    if (!details || details.length === 0) {
      console.log('⚠️ No hay detalles, creando datos de prueba');
      details = [{
        id: 'test1',
        saleId: sale.id,
        numero: 11,
        monto: 40
      }, {
        id: 'test2',
        saleId: sale.id,
        numero: 54,
        monto: 10
      }];
    }
    try {
      // Crear PDF para impresión térmica
      const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]({
        orientation: 'portrait',
        unit: 'mm',
        format: [80, 150]
      });
      console.log('PDF creado, agregando contenido...');
      // Configuración básica
      let y = 10;
      const lineHeight = 5;
      // Título
      pdf.setFontSize(14);
      pdf.text('LOTERIA', 40, y, {
        align: 'center'
      });
      y += lineHeight;
      pdf.setFontSize(10);
      pdf.text('RECIBO DE VENTA', 40, y, {
        align: 'center'
      });
      y += lineHeight + 2;
      // Número de recibo
      pdf.setFontSize(9);
      pdf.text(`Recibo #: ${sale.numeroRecibo || 'N/A'}`, 40, y, {
        align: 'center'
      });
      y += lineHeight;
      // Línea
      pdf.line(5, y, 75, y);
      y += lineHeight;
      // Sucursal
      pdf.setFontSize(12);
      pdf.text(sale.sucursal || 'Sucursal 1', 40, y, {
        align: 'center'
      });
      y += lineHeight;
      // Sorteo
      pdf.setFontSize(9);
      pdf.text(`Sorteo: ${sale.sorteo}`, 40, y, {
        align: 'center'
      });
      y += lineHeight;
      // Fecha
      const fecha = new Date(sale.fecha).toLocaleString();
      pdf.text(`Fecha: ${fecha}`, 40, y, {
        align: 'center'
      });
      y += lineHeight + 2;
      // Encabezados
      pdf.setFontSize(10);
      pdf.text('Numero', 20, y, {
        align: 'center'
      });
      pdf.text('Valor', 60, y, {
        align: 'center'
      });
      y += lineHeight;
      // Línea
      pdf.line(5, y, 75, y);
      y += lineHeight;
      // Detalles
      let total = 0;
      for (const detail of details) {
        pdf.text(detail.numero.toString().padStart(2, '0'), 20, y, {
          align: 'center'
        });
        pdf.text(`L ${detail.monto}`, 60, y, {
          align: 'center'
        });
        total += detail.monto;
        y += lineHeight;
      }
      // Línea
      y += 2;
      pdf.line(5, y, 75, y);
      y += lineHeight;
      // Total
      pdf.setFontSize(12);
      pdf.text('Total a pagar:', 10, y);
      pdf.text(`L ${total}`, 70, y, {
        align: 'right'
      });
      y += lineHeight + 2;
      // Mensaje
      pdf.setFontSize(8);
      pdf.text('Gracias por su compra!', 40, y, {
        align: 'center'
      });
      y += lineHeight;
      pdf.text('Mucha suerte!', 40, y, {
        align: 'center'
      });
      console.log('Contenido agregado al PDF');
      // FUNCIÓN DE IMPRESIÓN DIRECTA
      // Crear blob para impresión
      const pdfData = pdf.output('arraybuffer');
      const blob = new Blob([pdfData], {
        type: 'application/pdf'
      });
      const url = URL.createObjectURL(blob);
      console.log('Iniciando impresión directa...');
      // Abrir en nueva ventana para impresión manual controlada por el usuario
      const printWindow = window.open(url, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
      if (printWindow) {
        printWindow.onload = () => {
          // Enfocar la ventana
          printWindow.focus();
          // Ejecutar impresión automáticamente
          setTimeout(() => {
            try {
              printWindow.print();
              console.log('✅ Recibo enviado a impresora');
            } catch (printError) {
              console.error('Error al imprimir:', printError);
            }
          }, 1000); // Esperar 1 segundo para que cargue completamente
          // Limpiar URL cuando la ventana se cierre (detección manual)
          const checkClosed = setInterval(() => {
            if (printWindow.closed) {
              clearInterval(checkClosed);
              URL.revokeObjectURL(url);
              console.log('Ventana de impresión cerrada por el usuario, URL limpiada');
            }
          }, 1000);
        };
      } else {
        console.warn('No se pudo abrir la ventana de impresión, intentando método iframe');
        // Fallback: usar iframe como respaldo
        const printFrame = document.createElement('iframe');
        printFrame.style.display = 'none';
        printFrame.src = url;
        document.body.appendChild(printFrame);
        printFrame.onload = () => {
          try {
            printFrame.contentWindow?.focus();
            printFrame.contentWindow?.print();
            // Limpiar después de 5 segundos en modo iframe
            setTimeout(() => {
              document.body.removeChild(printFrame);
              URL.revokeObjectURL(url);
              console.log('iframe de impresión limpiado');
            }, 5000);
          } catch (printError) {
            console.error('Error al imprimir con iframe:', printError);
          }
        };
      }
    } catch (error) {
      console.error('Error creando PDF:', error);
      alert('Error al generar el recibo: ' + (error?.message || error));
    }
  }
  // Método de prueba para generar un recibo con datos fijos
  generateTestReceipt() {
    console.log('=== GENERANDO RECIBO DE PRUEBA ===');
    const testSale = {
      id: 'test-123',
      userId: 'user1',
      sucursal: 'Sucursal 1',
      sorteo: 'mañana',
      fecha: new Date(),
      total: 50,
      numeroRecibo: 'SUC-REC-250717-0001',
      correlativo: 1,
      createdAt: new Date()
    };
    const testDetails = [{
      id: 'detail1',
      saleId: 'test-123',
      numero: 11,
      monto: 40
    }, {
      id: 'detail2',
      saleId: 'test-123',
      numero: 54,
      monto: 10
    }];
    this.generateThermalReceipt(testSale, testDetails);
  }
  // Generar PDF de reporte diario
  generateDailyReport(sales, fecha) {
    const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]();
    pdf.setFontSize(16);
    pdf.text('REPORTE DIARIO DE VENTAS', 105, 20, {
      align: 'center'
    });
    pdf.setFontSize(12);
    pdf.text(`Fecha: ${fecha.toLocaleDateString()}`, 20, 35);
    // Aquí se puede expandir para incluir más detalles del reporte
    let yPos = 50;
    // Resumen por sorteo
    const sorteoSummary = this.calculateSorteoSummary(sales);
    pdf.setFontSize(14);
    pdf.text('RESUMEN POR SORTEO:', 20, yPos);
    yPos += 10;
    pdf.setFontSize(10);
    for (const [sorteo, data] of Object.entries(sorteoSummary)) {
      pdf.text(`${sorteo.toUpperCase()}: L. ${data.total.toFixed(2)} (${data.count} ventas)`, 25, yPos);
      yPos += 7;
    }
    // Total general
    const totalGeneral = sales.reduce((sum, sale) => sum + sale.total, 0);
    yPos += 10;
    pdf.setFontSize(12);
    pdf.text(`TOTAL GENERAL: L. ${totalGeneral.toFixed(2)}`, 20, yPos);
    pdf.save(`reporte_diario_${fecha.toISOString().split('T')[0]}.pdf`);
  }
  calculateSorteoSummary(sales) {
    const summary = {};
    for (const sale of sales) {
      if (!summary[sale.sorteo]) {
        summary[sale.sorteo] = {
          total: 0,
          count: 0
        };
      }
      summary[sale.sorteo].total += sale.total;
      summary[sale.sorteo].count += 1;
    }
    return summary;
  }
  // Generar reporte de ventas en PDF
  generateVentasReportPDF(sales, saleDetails, filters) {
    try {
      const doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]();
      // Header profesional con logo y título
      doc.setFillColor(52, 73, 94); // Color azul oscuro
      doc.rect(0, 0, 210, 35, 'F'); // Rectángulo header
      doc.setTextColor(255, 255, 255); // Texto blanco
      doc.setFontSize(24);
      doc.setFont('helvetica', 'bold');
      doc.text('SISTEMA DE LOTERÍA', 105, 20, {
        align: 'center'
      });
      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.text('REPORTE DE VENTAS', 105, 28, {
        align: 'center'
      });
      // Resetear color de texto
      doc.setTextColor(0, 0, 0);
      // Información del reporte en formato profesional
      let yPos = 50;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      // Sección de información general con fondo gris claro
      doc.setFillColor(248, 249, 250);
      doc.rect(15, yPos - 5, 180, 40, 'F');
      doc.setDrawColor(200, 200, 200);
      doc.rect(15, yPos - 5, 180, 40, 'S');
      yPos += 5;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('INFORMACIÓN DEL REPORTE', 20, yPos);
      yPos += 8;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      if (filters.fechaDesde || filters.fechaHasta) {
        const fechaTexto = filters.fechaDesde && filters.fechaHasta ? `Período: ${new Date(filters.fechaDesde).toLocaleDateString()} - ${new Date(filters.fechaHasta).toLocaleDateString()}` : filters.fechaDesde ? `Desde: ${new Date(filters.fechaDesde).toLocaleDateString()}` : `Hasta: ${new Date(filters.fechaHasta).toLocaleDateString()}`;
        doc.text(fechaTexto, 25, yPos);
        yPos += 6;
      }
      if (filters.sorteoFilter) {
        doc.text(`Sorteo: ${filters.sorteoFilter}`, 25, yPos);
        yPos += 6;
      }
      const now = new Date();
      doc.text(`Fecha de generación: ${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`, 25, yPos);
      yPos += 6;
      doc.text(`Total de transacciones: ${sales.length}`, 25, yPos);
      yPos += 20;
      // Resumen por sucursal en formato tabla
      const sucursalTotals = {};
      sales.forEach(sale => {
        if (!sucursalTotals[sale.sucursal]) {
          sucursalTotals[sale.sucursal] = {
            total: 0,
            count: 0
          };
        }
        sucursalTotals[sale.sucursal].total += sale.total;
        sucursalTotals[sale.sucursal].count += 1;
      });
      // Header del resumen con estilo
      doc.setFillColor(52, 73, 94);
      doc.setTextColor(255, 255, 255);
      doc.rect(15, yPos - 3, 180, 10, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('RESUMEN POR SUCURSAL', 105, yPos + 3, {
        align: 'center'
      });
      yPos += 15;
      // Resetear color
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      // Crear mini tabla para resumen
      Object.entries(sucursalTotals).forEach(([sucursal, data], index) => {
        const fillColor = index % 2 === 0 ? [245, 245, 245] : [255, 255, 255];
        doc.setFillColor(fillColor[0], fillColor[1], fillColor[2]);
        doc.rect(15, yPos - 2, 180, 8, 'F');
        doc.text(`${sucursal}:`, 25, yPos + 2);
        doc.text(`${data.count} ventas`, 105, yPos + 2, {
          align: 'center'
        });
        doc.text(`L ${data.total.toFixed(2)}`, 175, yPos + 2, {
          align: 'right'
        });
        yPos += 8;
      });
      yPos += 5;
      // Total general destacado
      const totalGeneral = sales.reduce((sum, sale) => sum + sale.total, 0);
      doc.setFillColor(46, 204, 113); // Verde
      doc.rect(15, yPos - 3, 180, 12, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text(`TOTAL GENERAL: L ${totalGeneral.toFixed(2)}`, 105, yPos + 4, {
        align: 'center'
      });
      yPos += 20;
      // Resetear para la tabla
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('DETALLE DE VENTAS:', 20, yPos);
      yPos += 10;
      // Preparar datos para la tabla
      const tableData = sales.map(sale => {
        const details = saleDetails[sale.id] || [];
        const numerosText = details.map(d => `${d.numero.toString().padStart(2, '0')}xL${d.monto}`).join(', ');
        // Formatear fecha con hora
        const saleDate = new Date(sale.createdAt);
        const fechaHoraStr = `${saleDate.toLocaleDateString()} ${saleDate.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit'
        })}`;
        return [fechaHoraStr, sale.numeroRecibo || sale.id.slice(-6), sale.sucursal, sale.sorteo, numerosText, `L ${sale.total.toFixed(2)}`];
      });
      // Crear tabla con autoTable
      (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, {
        startY: yPos,
        head: [['Fecha/Hora', 'Recibo', 'Sucursal', 'Sorteo', 'Números', 'Total']],
        body: tableData,
        theme: 'grid',
        headStyles: {
          fillColor: [66, 139, 202],
          textColor: 255,
          fontSize: 10,
          fontStyle: 'bold',
          halign: 'center'
        },
        bodyStyles: {
          fontSize: 9,
          cellPadding: 3
        },
        columnStyles: {
          0: {
            cellWidth: 35,
            halign: 'center'
          },
          1: {
            cellWidth: 30,
            halign: 'center'
          },
          2: {
            cellWidth: 25,
            halign: 'center'
          },
          3: {
            cellWidth: 20,
            halign: 'center'
          },
          4: {
            cellWidth: 45,
            halign: 'left'
          },
          5: {
            cellWidth: 25,
            halign: 'right'
          } // Total
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245]
        },
        margin: {
          left: 15,
          right: 15
        },
        didDrawPage: function (data) {
          // Pie de página
          doc.setFontSize(8);
          doc.text(`Página ${data.pageNumber}`, 160, 290);
          doc.text(`Generado el ${new Date().toLocaleString()}`, 15, 290);
        }
      });
      // Guardar el PDF
      const fileName = `reporte_ventas_${new Date().toISOString().split('T')[0]}.pdf`;
      doc.save(fileName);
    } catch (error) {
      console.error('Error generando PDF:', error);
      throw error;
    }
  }
  static {
    this.ɵfac = function PrintService_Factory(t) {
      return new (t || PrintService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PrintService,
      factory: PrintService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6390:
/*!********************************************!*\
  !*** ./src/app/services/sorteo.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SorteoService: () => (/* binding */ SorteoService)
/* harmony export */ });
/* harmony import */ var _models_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/interfaces */ 4597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class SorteoService {
  constructor() {}
  getCurrentSorteo() {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    for (const sorteo of _models_interfaces__WEBPACK_IMPORTED_MODULE_0__.SORTEO_SCHEDULES) {
      if (currentTime < sorteo.closeTime) {
        return sorteo;
      }
    }
    // Si ya pasaron todos los sorteos del día, retorna null
    return null;
  }
  getNextSorteo() {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    for (const sorteo of _models_interfaces__WEBPACK_IMPORTED_MODULE_0__.SORTEO_SCHEDULES) {
      if (currentTime < sorteo.closeTime) {
        return sorteo;
      }
    }
    // Si ya pasaron todos los sorteos del día, retorna el primero del siguiente día
    return _models_interfaces__WEBPACK_IMPORTED_MODULE_0__.SORTEO_SCHEDULES[0];
  }
  isSorteoOpen(sorteo) {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    return currentTime < sorteo.closeTime;
  }
  getTimeUntilClose(sorteo) {
    const now = new Date();
    const [hours, minutes] = sorteo.closeTime.split(':');
    const closeTime = new Date();
    closeTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    if (closeTime <= now) {
      return '00:00';
    }
    const diff = closeTime.getTime() - now.getTime();
    const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
    const minutesLeft = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    return `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}`;
  }
  getAllSorteos() {
    return _models_interfaces__WEBPACK_IMPORTED_MODULE_0__.SORTEO_SCHEDULES;
  }
  static {
    this.ɵfac = function SorteoService_Factory(t) {
      return new (t || SorteoService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SorteoService,
      factory: SorteoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9692:
/*!**********************************************!*\
  !*** ./src/app/services/supabase.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupabaseService: () => (/* binding */ SupabaseService)
/* harmony export */ });
/* harmony import */ var C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/supabase-js */ 2014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);





class SupabaseService {
  constructor() {
    var _this = this;
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__.createClient)(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.supabase.url, _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.supabase.key);
    // Inicializar sesión existente
    this.initializeSession();
    // Escuchar cambios en la autenticación
    this.supabase.auth.onAuthStateChange(/*#__PURE__*/function () {
      var _ref = (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event, session) {
        console.log('Auth state changed:', event, session?.user?.id);
        if (session?.user) {
          console.log('Usuario autenticado:', session.user.id);
          // Usar datos básicos inmediatamente
          const userData = {
            id: session.user.id,
            email: session.user.email || '',
            role: 'sucursal',
            sucursal: 'Principal',
            active: true,
            createdAt: new Date()
          };
          console.log('Setting user data:', userData);
          _this.currentUserSubject.next(userData);
          // Cargar datos adicionales en segundo plano
          _this.loadUserDataInBackground(session.user.id);
        } else {
          console.log('No session, clearing user');
          _this.currentUserSubject.next(null);
        }
      });
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  // Inicializar sesión existente
  initializeSession() {
    var _this2 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Inicializando sesión...');
        const {
          data: {
            session
          },
          error
        } = yield _this2.supabase.auth.getSession();
        if (error) {
          console.error('Error obteniendo sesión:', error);
          _this2.currentUserSubject.next(null);
          return;
        }
        if (session?.user) {
          console.log('Sesión encontrada:', session.user.id);
          // Usar directamente los datos de la sesión para evitar timeouts
          const userData = {
            id: session.user.id,
            email: session.user.email || '',
            role: 'sucursal',
            sucursal: 'Principal',
            active: true,
            createdAt: new Date()
          };
          console.log('Datos de usuario inicializados:', userData);
          _this2.currentUserSubject.next(userData);
          // Intentar obtener datos de la tabla users en segundo plano (no bloqueante)
          _this2.loadUserDataInBackground(session.user.id);
        } else {
          console.log('No hay sesión activa');
          _this2.currentUserSubject.next(null);
        }
      } catch (error) {
        console.error('Error inicializando sesión:', error);
        _this2.currentUserSubject.next(null);
      }
    })();
  }
  // Cargar datos del usuario en segundo plano
  loadUserDataInBackground(uid) {
    var _this3 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Cargando datos de usuario en segundo plano...');
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Background load timeout')), 5000);
        });
        const queryPromise = _this3.supabase.from('users').select('*').eq('id', uid).single();
        const {
          data,
          error
        } = yield Promise.race([queryPromise, timeoutPromise]);
        if (data && !error) {
          console.log('Datos actualizados desde la base de datos:', data);
          const updatedUser = {
            id: data.id,
            email: data.email,
            role: data.role,
            sucursal: data.sucursal,
            active: data.active,
            createdAt: new Date(data.created_at)
          };
          _this3.currentUserSubject.next(updatedUser);
        } else {
          console.log('No se pudieron cargar datos adicionales, manteniendo datos por defecto');
        }
      } catch (error) {
        console.warn('Error cargando datos en segundo plano:', error);
        // No hacer nada, mantener los datos por defecto
      }
    })();
  }
  // Autenticación
  login(email, password) {
    var _this4 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Intentando login con:', email);
        const {
          data,
          error
        } = yield _this4.supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) {
          console.error('Error en auth.signInWithPassword:', error);
          throw error;
        }
        if (data.user) {
          console.log('Usuario autenticado:', data.user.id);
          const userData = yield _this4.getUserData(data.user.id);
          console.log('Datos del usuario obtenidos:', userData);
          return userData;
        }
        return null;
      } catch (error) {
        console.error('Error en login:', error);
        throw error;
      }
    })();
  }
  logout() {
    var _this5 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        error
      } = yield _this5.supabase.auth.signOut();
      if (error) throw error;
    })();
  }
  // Verificar conexión a la base de datos
  testConnection() {
    var _this6 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this6.supabase.from('usuarios').select('count').limit(1);
        return !error;
      } catch (error) {
        console.error('Error testando conexión:', error);
        return false;
      }
    })();
  }
  // Usuarios
  getUserData(uid) {
    var _this7 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Buscando usuario con UID:', uid);
        // Primero obtener datos básicos de auth
        const {
          data: authUser,
          error: authError
        } = yield _this7.supabase.auth.getUser();
        if (authError || !authUser.user) {
          console.error('Error obteniendo usuario autenticado:', authError);
          return null;
        }
        // Datos por defecto usando auth
        const defaultUserData = {
          id: authUser.user.id,
          email: authUser.user.email || '',
          role: 'sucursal',
          sucursal: 'Principal',
          active: true,
          createdAt: new Date()
        };
        // Intentar obtener datos de la tabla users con timeout muy corto
        try {
          const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Database timeout')), 1000); // 1 segundo timeout
          });
          const queryPromise = _this7.supabase.from('users').select('*').eq('id', uid).single();
          const {
            data,
            error
          } = yield Promise.race([queryPromise, timeoutPromise]);
          if (data && !error) {
            console.log('Usuario encontrado en tabla users:', data);
            return {
              id: data.id,
              email: data.email,
              role: data.role,
              sucursal: data.sucursal,
              active: data.active,
              createdAt: new Date(data.created_at)
            };
          }
        } catch (dbError) {
          console.warn('Error/timeout consultando tabla users, usando datos por defecto:', dbError);
        }
        console.log('Usando datos de auth como fallback');
        return defaultUserData;
      } catch (error) {
        console.error('Error en getUserData:', error);
        return null;
      }
    })();
  }
  // Ventas
  getNextCorrelativo(sucursal) {
    var _this8 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('=== CALCULANDO SIGUIENTE CORRELATIVO ===');
        console.log('Sucursal:', sucursal);
        // Obtener el correlativo más alto para esta sucursal en el día actual
        const today = new Date();
        const startOfDay = new Date(today);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(today);
        endOfDay.setHours(23, 59, 59, 999);
        console.log('Fecha inicio del día:', startOfDay.toISOString());
        console.log('Fecha fin del día:', endOfDay.toISOString());
        // Primero, obtener TODAS las ventas de esta sucursal para debug
        const {
          data: allSales,
          error: allError
        } = yield _this8.supabase.from('sales').select('id, correlativo, fecha, created_at').eq('sucursal', sucursal).order('created_at', {
          ascending: false
        });
        if (allError) {
          console.error('Error obteniendo todas las ventas:', allError);
        } else {
          console.log('=== TODAS LAS VENTAS DE LA SUCURSAL ===');
          console.log('Total ventas encontradas:', allSales.length);
          allSales.forEach((sale, index) => {
            console.log(`Venta ${index + 1}: ID=${sale.id}, Correlativo=${sale.correlativo}, Fecha=${sale.fecha}, CreatedAt=${sale.created_at}`);
          });
        }
        // Ahora obtener solo las del día actual
        const {
          data,
          error
        } = yield _this8.supabase.from('sales').select('correlativo, fecha, created_at').eq('sucursal', sucursal).gte('fecha', startOfDay.toISOString()).lte('fecha', endOfDay.toISOString()).order('correlativo', {
          ascending: false
        }).limit(1);
        if (error) {
          console.error('Error obteniendo correlativo del día:', error);
          throw error;
        }
        console.log('=== VENTAS DEL DÍA ACTUAL ===');
        console.log('Ventas del día encontradas:', data.length);
        if (data.length > 0) {
          console.log('Venta con correlativo más alto:', data[0]);
          console.log('Correlativo más alto del día:', data[0].correlativo);
        } else {
          console.log('No se encontraron ventas del día actual');
        }
        const nextCorrelativo = data && data.length > 0 ? (data[0].correlativo || 0) + 1 : 1;
        console.log('SIGUIENTE CORRELATIVO CALCULADO:', nextCorrelativo);
        return nextCorrelativo;
      } catch (error) {
        console.error('Error calculando correlativo:', error);
        // En caso de error, usar 1 como fallback
        return 1;
      }
    })();
  }
  createSale(sale) {
    var _this9 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Asegurar que la fecha sea del mismo día actual (timezone local)
        const now = new Date();
        const saleDate = new Date(sale.fecha);
        // Forzar que la fecha de la venta sea hoy en timezone local
        const todayWithCorrectTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), saleDate.getHours(), saleDate.getMinutes(), saleDate.getSeconds());
        const saleData = {
          user_id: sale.userId,
          sucursal: sale.sucursal,
          sorteo: sale.sorteo,
          fecha: todayWithCorrectTime.toISOString(),
          total: sale.total,
          numero_recibo: sale.numeroRecibo,
          correlativo: sale.correlativo,
          created_at: now.toISOString()
        };
        console.log('=== GUARDANDO VENTA ===');
        console.log('Fecha original:', sale.fecha);
        console.log('Fecha corregida:', todayWithCorrectTime.toISOString());
        console.log('Fecha actual:', now.toISOString());
        console.log('Datos de venta a guardar:', saleData);
        console.log('Correlativo:', sale.correlativo);
        console.log('Número de recibo:', sale.numeroRecibo);
        const {
          data,
          error
        } = yield _this9.supabase.from('sales').insert([saleData]).select().single();
        if (error) {
          console.error('Error en la base de datos:', error);
          throw error;
        }
        console.log('Venta guardada exitosamente:', data);
        console.log('ID de venta creada:', data.id);
        return data.id;
      } catch (error) {
        console.error('Error creando venta:', error);
        throw error;
      }
    })();
  }
  createSaleDetail(detail) {
    var _this0 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('=== DEBUG createSaleDetail ===');
        console.log('Detalle original recibido:', detail);
        console.log('Número original:', detail.numero, 'Tipo:', typeof detail.numero);
        console.log('Monto original:', detail.monto, 'Tipo:', typeof detail.monto);
        // Validar que los datos sean válidos
        if (detail.numero === null || detail.numero === undefined) {
          throw new Error('Número no puede ser null o undefined');
        }
        if (detail.monto === null || detail.monto === undefined || detail.monto <= 0) {
          throw new Error('Monto debe ser mayor a 0');
        }
        // Convertir el número a string con formato de 2 dígitos (00, 01, 02, etc.)
        const numeroString = detail.numero.toString().padStart(2, '0');
        console.log('Número como string para BD:', numeroString);
        const detailData = {
          sale_id: detail.saleId,
          numero: numeroString,
          monto: Number(detail.monto)
        };
        console.log('Datos finales que se enviarán a la BD:', detailData);
        console.log('Tipos de datos:', {
          sale_id: typeof detailData.sale_id,
          numero: typeof detailData.numero,
          monto: typeof detailData.monto
        });
        const {
          data,
          error
        } = yield _this0.supabase.from('sale_details').insert([detailData]).select().single();
        if (error) {
          console.error('Error de Supabase:', error);
          console.error('Detalles del error:', JSON.stringify(error, null, 2));
          throw error;
        }
        console.log('Detalle creado exitosamente:', data);
        return data.id;
      } catch (error) {
        console.error('Error creando detalle de venta:', error);
        throw error;
      }
    })();
  }
  getSalesByDateAndSorteo(fecha, sorteo) {
    var _this1 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('=== INICIANDO CONSULTA DE VENTAS ===');
        console.log('Fecha solicitada:', fecha);
        console.log('Sorteo filtro:', sorteo || 'TODOS');
        const startOfDay = new Date(fecha);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(fecha);
        endOfDay.setHours(23, 59, 59, 999);
        console.log('Rango de consulta:');
        console.log('Inicio:', startOfDay.toISOString());
        console.log('Final:', endOfDay.toISOString());
        let query = _this1.supabase.from('sales').select('*').gte('fecha', startOfDay.toISOString()).lte('fecha', endOfDay.toISOString()).order('created_at', {
          ascending: false
        });
        if (sorteo && sorteo.trim() !== '') {
          console.log('Aplicando filtro de sorteo:', sorteo);
          query = query.eq('sorteo', sorteo);
        }
        console.log('Ejecutando consulta...');
        const {
          data,
          error
        } = yield query;
        if (error) {
          console.error('Error en consulta Supabase:', error);
          throw error;
        }
        console.log('=== RESULTADOS DE CONSULTA ===');
        console.log('Cantidad de ventas encontradas:', data?.length || 0);
        if (!data || data.length === 0) {
          console.warn('No se encontraron ventas para los criterios especificados');
          // Hacer una consulta de debug para ver qué hay en la tabla
          const {
            data: debugData,
            error: debugError
          } = yield _this1.supabase.from('sales').select('*').order('created_at', {
            ascending: false
          }).limit(5);
          if (!debugError && debugData) {
            console.log('Últimas 5 ventas en la tabla para debug:');
            debugData.forEach((sale, index) => {
              console.log(`${index + 1}. ID: ${sale.id}, Fecha: ${sale.fecha}, Sucursal: ${sale.sucursal}`);
            });
          }
          return [];
        }
        // Log detallado de cada venta encontrada
        data.forEach((sale, index) => {
          console.log(`Venta ${index + 1}:`);
          console.log(`  - ID: ${sale.id}`);
          console.log(`  - Fecha: ${sale.fecha}`);
          console.log(`  - Sucursal: ${sale.sucursal}`);
          console.log(`  - Sorteo: ${sale.sorteo}`);
          console.log(`  - Total: ${sale.total}`);
          console.log(`  - Correlativo: ${sale.correlativo}`);
          console.log(`  - Numero Recibo: ${sale.numero_recibo}`);
        });
        const mappedSales = data.map(sale => ({
          id: sale.id,
          userId: sale.user_id,
          sucursal: sale.sucursal,
          sorteo: sale.sorteo,
          fecha: new Date(sale.fecha),
          total: sale.total,
          numeroRecibo: sale.numero_recibo || sale.id.slice(-6),
          correlativo: sale.correlativo || 0,
          createdAt: new Date(sale.created_at)
        }));
        console.log('=== VENTAS MAPEADAS EXITOSAMENTE ===');
        console.log('Total de ventas devueltas:', mappedSales.length);
        return mappedSales;
      } catch (error) {
        console.error('=== ERROR EN getSalesByDateAndSorteo ===');
        console.error('Error completo:', error);
        console.error('Fecha:', fecha);
        console.error('Sorteo:', sorteo);
        return [];
      }
    })();
  }
  getSaleDetails(saleId) {
    var _this10 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this10.supabase.from('sale_details').select('*').eq('sale_id', saleId);
        if (error) throw error;
        return data.map(detail => ({
          id: detail.id,
          saleId: detail.sale_id,
          numero: parseInt(detail.numero),
          monto: detail.monto
        }));
      } catch (error) {
        console.error('Error obteniendo detalles de venta:', error);
        return [];
      }
    })();
  }
  // Sorteos
  createOrUpdateSorteo(sorteo) {
    var _this11 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const sorteoId = `${sorteo.fecha.toDateString()}-${sorteo.sorteo}`;
        // Convertir el número ganador a string con formato de 2 dígitos
        const numeroGanadorString = (sorteo.numeroGanador ?? 0).toString().padStart(2, '0');
        const sorteoData = {
          id: sorteoId,
          fecha: sorteo.fecha.toISOString(),
          sorteo: sorteo.sorteo,
          hora_cierre: sorteo.horaCierre.toISOString(),
          numero_ganador: numeroGanadorString,
          factor_multiplicador: sorteo.factorMultiplicador,
          total_vendido: sorteo.totalVendido,
          total_pagado: sorteo.totalPagado,
          ganancia_neta: sorteo.gananciaNeta,
          cerrado: sorteo.cerrado
        };
        const {
          data,
          error
        } = yield _this11.supabase.from('sorteos').upsert([sorteoData]).select().single();
        if (error) throw error;
        return data.id;
      } catch (error) {
        console.error('Error creando/actualizando sorteo:', error);
        throw error;
      }
    })();
  }
  getSorteo(fecha, sorteo) {
    var _this12 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const sorteoId = `${fecha.toDateString()}-${sorteo}`;
        const {
          data,
          error
        } = yield _this12.supabase.from('sorteos').select('*').eq('id', sorteoId).single();
        if (error) {
          if (error.code === 'PGRST116') {
            // No se encontró el registro
            return null;
          }
          throw error;
        }
        return {
          id: data.id,
          fecha: new Date(data.fecha),
          sorteo: data.sorteo,
          horaCierre: new Date(data.hora_cierre),
          // Convertir string a número para la interfaz
          numeroGanador: parseInt(data.numero_ganador) || 0,
          factorMultiplicador: data.factor_multiplicador,
          totalVendido: data.total_vendido,
          totalPagado: data.total_pagado,
          gananciaNeta: data.ganancia_neta,
          cerrado: data.cerrado
        };
      } catch (error) {
        console.error('Error obteniendo sorteo:', error);
        return null;
      }
    })();
  }
  updateSorteoWinner(sorteoId, numeroGanador, factorMultiplicador) {
    var _this13 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Convertir el número a string con formato de 2 dígitos
        const numeroString = numeroGanador.toString().padStart(2, '0');
        const {
          error
        } = yield _this13.supabase.from('sorteos').update({
          numero_ganador: numeroString,
          factor_multiplicador: factorMultiplicador,
          cerrado: true
        }).eq('id', sorteoId);
        if (error) throw error;
      } catch (error) {
        console.error('Error actualizando ganador:', error);
        throw error;
      }
    })();
  }
  calculateSorteoWinnings(sorteoId) {
    var _this14 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Obtener el sorteo
        const {
          data: sorteo,
          error: sorteoError
        } = yield _this14.supabase.from('sorteos').select('*').eq('id', sorteoId).single();
        if (sorteoError) throw sorteoError;
        if (!sorteo.numero_ganador) return;
        // Obtener todas las ventas del sorteo
        const {
          data: sales,
          error: salesError
        } = yield _this14.supabase.from('sales').select('*, sale_details(*)').eq('sorteo', sorteo.sorteo).gte('fecha', new Date(sorteo.fecha).toISOString().split('T')[0]).lt('fecha', new Date(new Date(sorteo.fecha).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
        if (salesError) throw salesError;
        // Calcular total vendido
        let totalVendido = 0;
        let totalPagado = 0;
        for (const sale of sales) {
          for (const detail of sale.sale_details) {
            totalVendido += detail.monto;
            // Comparar números como strings (ambos deberían estar en formato "00", "01", etc.)
            if (detail.numero === sorteo.numero_ganador) {
              totalPagado += detail.monto * sorteo.factor_multiplicador;
            }
          }
        }
        const gananciaNeta = totalVendido - totalPagado;
        // Actualizar el sorteo con los cálculos
        const {
          error: updateError
        } = yield _this14.supabase.from('sorteos').update({
          total_vendido: totalVendido,
          total_pagado: totalPagado,
          ganancia_neta: gananciaNeta
        }).eq('id', sorteoId);
        if (updateError) throw updateError;
      } catch (error) {
        console.error('Error calculando ganancias:', error);
        throw error;
      }
    })();
  }
  // Método de debug para verificar conexión y datos
  debugSalesData() {
    var _this15 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('=== DEBUG SALES DATA ===');
        console.log('Supabase URL:', _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.supabase.url);
        console.log('Fecha actual:', new Date().toISOString());
        // Verificar conexión básica
        const {
          data: tablesData,
          error: tablesError
        } = yield _this15.supabase.from('sales').select('count(*)', {
          count: 'exact',
          head: true
        });
        if (tablesError) {
          console.error('Error verificando tabla sales:', tablesError);
          return;
        }
        console.log('Total de ventas en la tabla:', tablesData);
        // Verificar ventas de hoy sin filtros
        const today = new Date();
        const startOfDay = new Date(today);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(today);
        endOfDay.setHours(23, 59, 59, 999);
        console.log('Rango de fechas para hoy:');
        console.log('Inicio del día:', startOfDay.toISOString());
        console.log('Final del día:', endOfDay.toISOString());
        const {
          data: todayData,
          error: todayError
        } = yield _this15.supabase.from('sales').select('*').gte('fecha', startOfDay.toISOString()).lte('fecha', endOfDay.toISOString());
        if (todayError) {
          console.error('Error obteniendo ventas de hoy:', todayError);
          return;
        }
        console.log('Ventas encontradas para hoy:', todayData?.length || 0);
        if (todayData && todayData.length > 0) {
          console.log('Primera venta encontrada:', todayData[0]);
        }
        // Verificar ventas de los últimos 3 días
        const threeDaysAgo = new Date(today);
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        threeDaysAgo.setHours(0, 0, 0, 0);
        const {
          data: recentData,
          error: recentError
        } = yield _this15.supabase.from('sales').select('*').gte('fecha', threeDaysAgo.toISOString()).order('created_at', {
          ascending: false
        }).limit(10);
        if (recentError) {
          console.error('Error obteniendo ventas recientes:', recentError);
          return;
        }
        console.log('Ventas de los últimos 3 días:', recentData?.length || 0);
        if (recentData && recentData.length > 0) {
          console.log('Ventas recientes encontradas:');
          recentData.forEach((sale, index) => {
            console.log(`${index + 1}. ID: ${sale.id}, Fecha: ${sale.fecha}, Sucursal: ${sale.sucursal}, Total: ${sale.total}`);
          });
        }
      } catch (error) {
        console.error('Error en debug de datos de ventas:', error);
      }
    })();
  }
  // Método para verificar permisos y políticas RLS
  checkDatabasePermissions() {
    var _this16 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('=== VERIFICANDO PERMISOS DE BASE DE DATOS ===');
        // Verificar sesión actual
        const {
          data: session,
          error: sessionError
        } = yield _this16.supabase.auth.getSession();
        if (sessionError) {
          console.error('Error obteniendo sesión:', sessionError);
          return;
        }
        console.log('Usuario autenticado:', session?.session?.user?.id || 'NO AUTENTICADO');
        console.log('Email del usuario:', session?.session?.user?.email || 'SIN EMAIL');
        // Probar consulta simple a la tabla sales
        console.log('Probando consulta simple a tabla sales...');
        const {
          data: simpleQuery,
          error: simpleError
        } = yield _this16.supabase.from('sales').select('id, sucursal, created_at').limit(1);
        if (simpleError) {
          console.error('Error en consulta simple:', simpleError);
          console.error('Código de error:', simpleError.code);
          console.error('Detalles:', simpleError.details);
          console.error('Mensaje:', simpleError.message);
        } else {
          console.log('Consulta simple exitosa, resultado:', simpleQuery);
        }
        // Probar inserción de test (para verificar permisos de escritura)
        console.log('Probando permisos de escritura...');
        const testSale = {
          user_id: session?.session?.user?.id || 'test-user',
          sucursal: 'TEST',
          sorteo: 'test',
          fecha: new Date().toISOString(),
          total: 0,
          numero_recibo: 'TEST-001',
          correlativo: 999
        };
        const {
          data: insertTest,
          error: insertError
        } = yield _this16.supabase.from('sales').insert(testSale).select();
        if (insertError) {
          console.error('Error en inserción de prueba:', insertError);
        } else {
          console.log('Inserción de prueba exitosa:', insertTest);
          // Eliminar el registro de prueba
          if (insertTest && insertTest.length > 0) {
            yield _this16.supabase.from('sales').delete().eq('id', insertTest[0].id);
            console.log('Registro de prueba eliminado');
          }
        }
      } catch (error) {
        console.error('Error verificando permisos:', error);
      }
    })();
  }
  static {
    this.ɵfac = function SupabaseService_Factory(t) {
      return new (t || SupabaseService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: SupabaseService,
      factory: SupabaseService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  supabase: {
    url: 'https://oxuhcoubrpupjmjvyzbv.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dWhjb3VicnB1cGptanZ5emJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MTc1NDIsImV4cCI6MjA2ODI5MzU0Mn0.dvWlnt9WQpxSEU7QD4qm-r62Ggd_P_0BMwKB9zR-9o4'
  }
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map