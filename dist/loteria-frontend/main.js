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









function AdminComponent_div_84_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 78)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 79)(8, "div", 80)(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Vendido:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 80)(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Pagado:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 80)(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Ganancia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    const sorteo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Ganador: ", (tmp_5_0 = ctx_r2.getSorteoData(sorteo_r2)) == null ? null : tmp_5_0.numeroGanador, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Factor: ", ((tmp_6_0 = ctx_r2.getSorteoData(sorteo_r2)) == null ? null : tmp_6_0.factorMultiplicador) || 70, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" L. ", ((tmp_7_0 = ctx_r2.getSorteoData(sorteo_r2)) == null ? null : tmp_7_0.totalVendido == null ? null : tmp_7_0.totalVendido.toFixed(2)) || "0.00", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" L. ", ((tmp_8_0 = ctx_r2.getSorteoData(sorteo_r2)) == null ? null : tmp_8_0.totalPagado == null ? null : tmp_8_0.totalPagado.toFixed(2)) || "0.00", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("text-success", (((tmp_9_0 = ctx_r2.getSorteoData(sorteo_r2)) == null ? null : tmp_9_0.gananciaNeta) || 0) > 0)("text-danger", (((tmp_10_0 = ctx_r2.getSorteoData(sorteo_r2)) == null ? null : tmp_10_0.gananciaNeta) || 0) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" L. ", ((tmp_11_0 = ctx_r2.getSorteoData(sorteo_r2)) == null ? null : tmp_11_0.gananciaNeta == null ? null : tmp_11_0.gananciaNeta.toFixed(2)) || "0.00", " ");
  }
}
function AdminComponent_div_84_ng_template_12_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 82)(1, "div", 83)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " N\u00FAmero Ganador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_84_ng_template_12_div_0_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const sorteo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.winningNumbers[sorteo_r2.name], $event) || (ctx_r2.winningNumbers[sorteo_r2.name] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 83)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Factor Multiplicador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_84_ng_template_12_div_0_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const sorteo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.factorMultiplicador[sorteo_r2.name], $event) || (ctx_r2.factorMultiplicador[sorteo_r2.name] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_84_ng_template_12_div_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const sorteo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.setWinningNumber(sorteo_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Establecer Ganador ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sorteo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.winningNumbers[sorteo_r2.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.factorMultiplicador[sorteo_r2.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r2.factorMultiplicador[sorteo_r2.name] || 70)("disabled", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.winningNumbers[sorteo_r2.name] || ctx_r2.isLoading);
  }
}
function AdminComponent_div_84_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AdminComponent_div_84_ng_template_12_div_0_Template, 14, 6, "div", 81);
  }
  if (rf & 2) {
    const sorteo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.isSorteoOpen(sorteo_r2));
  }
}
function AdminComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 72)(1, "div", 73)(2, "div", 28)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AdminComponent_div_84_div_11_Template, 20, 9, "div", 77)(12, AdminComponent_div_84_ng_template_12_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const sorteo_r2 = ctx.$implicit;
    const setWinner_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", sorteo_r2.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Cierra: ", sorteo_r2.closeTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("badge-success", ctx_r2.isSorteoOpen(sorteo_r2))("badge-danger", !ctx_r2.isSorteoOpen(sorteo_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.isSorteoOpen(sorteo_r2) ? "Abierto" : "Cerrado", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r2.getSorteoData(sorteo_r2)) == null ? null : tmp_9_0.numeroGanador)("ngIfElse", setWinner_r5);
  }
}
function AdminComponent_option_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sorteo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", sorteo_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", sorteo_r6.label, " ");
  }
}
function AdminComponent_tr_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td")(4, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td")(13, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_tr_138_Template_button_click_13_listener() {
      const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.editUser(user_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_tr_138_Template_button_click_15_listener() {
      const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.deleteUser(user_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("badge-success", user_r8.role === "admin")("badge-primary", user_r8.role === "sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 12, user_r8.role), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r8.sucursal || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("badge-success", user_r8.active)("badge-danger", !user_r8.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", user_r8.active ? "Activo" : "Inactivo", " ");
  }
}
function AdminComponent_div_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 95)(1, "div", 96)(2, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function AdminComponent_div_149_tr_24_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detail_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" N\u00BA ", detail_r10.numero.toString().padStart(2, "0"), ": L. ", detail_r10.monto.toFixed(2), " ");
  }
}
function AdminComponent_div_149_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td")(4, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 104)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td")(14, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AdminComponent_div_149_tr_24_span_15_Template, 2, 2, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td")(17, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_149_tr_24_Template_button_click_17_listener() {
      const sale_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.printService.generateThermalReceipt(sale_r11, ctx_r2.getSaleDetails(sale_r11.id)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Reimprimir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sale_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](sale_r11.sucursal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 5, sale_r11.sorteo));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 7, sale_r11.fecha, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L. ", sale_r11.total.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.getSaleDetails(sale_r11.id));
  }
}
function AdminComponent_div_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 98)(1, "div", 55)(2, "table", 56)(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Sorteo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " N\u00FAmeros");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AdminComponent_div_149_tr_24_Template, 20, 10, "tr", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.sales);
  }
}
function AdminComponent_ng_template_150_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " No hay ventas registradas para los filtros seleccionados. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AdminComponent_ng_template_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AdminComponent_ng_template_150_div_0_Template, 3, 0, "div", 109);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.isLoading);
  }
}
function AdminComponent_div_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "div", 112)(2, "div", 113)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h3", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const sucursal_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](sucursal_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L. ", sucursal_r12.total.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", sucursal_r12.count, " ventas");
  }
}
function AdminComponent_div_160_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 123)(1, "label", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Contrase\u00F1a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_160_div_16_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.userFormData.password, $event) || (ctx_r2.userFormData.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userFormData.password);
  }
}
function AdminComponent_div_160_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 123)(1, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Sucursal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_160_div_26_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.userFormData.sucursal, $event) || (ctx_r2.userFormData.sucursal = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userFormData.sucursal);
  }
}
function AdminComponent_div_160_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 115)(1, "div", 116)(2, "div", 117)(3, "div", 118)(4, "h5", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_160_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closeUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 122)(9, "form", null, 2)(11, "div", 123)(12, "label", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_160_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.userFormData.email, $event) || (ctx_r2.userFormData.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AdminComponent_div_160_div_16_Template, 5, 1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 123)(18, "label", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Rol:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "select", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_160_Template_select_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.userFormData.role, $event) || (ctx_r2.userFormData.role = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "option", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Administrador");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AdminComponent_div_160_div_26_Template, 5, 1, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 123)(28, "div", 131)(29, "input", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_160_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.userFormData.active, $event) || (ctx_r2.userFormData.active = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " Usuario Activo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 134)(34, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_160_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closeUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_div_160_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.saveUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "i", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const userForm_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("display", ctx_r2.showUserModal ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx_r2.showUserModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.editingUser ? "Editar Usuario" : "Nuevo Usuario", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userFormData.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.editingUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userFormData.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.userFormData.role === "sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userFormData.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !userForm_r16.valid || ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.editingUser ? "Actualizar" : "Crear", " ");
  }
}
function AdminComponent_div_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 144);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx_r2.showUserModal);
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
  logout() {
    var _this8 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this8.supabaseService.logout();
      _this8.router.navigate(['/login']);
    })();
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
      decls: 162,
      vars: 26,
      consts: [["noSales", ""], ["setWinner", ""], ["userForm", "ngForm"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "fas", "fa-cog"], [1, "btn", "btn-danger", 3, "click", "disabled"], [1, "fas", "fa-sign-out-alt"], [1, "row", "mb-4"], [1, "col-md-3", "mb-3"], [1, "card", "summary-card", "bg-primary", "text-white"], [1, "card-body"], [1, "d-flex", "justify-content-between"], [1, "card-title"], [1, "fas", "fa-money-bill-wave"], [1, "card-icon"], [1, "fas", "fa-chart-line", "fa-2x"], [1, "card", "summary-card", "bg-warning", "text-white"], [1, "fas", "fa-trophy"], [1, "fas", "fa-coins", "fa-2x"], [1, "text-white"], [1, "fas", "fa-chart-pie"], [1, "fas", "fa-piggy-bank", "fa-2x"], [1, "card", "summary-card", "bg-info", "text-white"], [1, "fas", "fa-ticket-alt"], [1, "fas", "fa-shopping-cart", "fa-2x"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "fas", "fa-filter"], [1, "row"], [1, "col-md-4"], ["for", "fechaDesde"], [1, "fas", "fa-calendar-alt"], ["type", "date", "id", "fechaDesde", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], ["for", "fechaHasta"], ["type", "date", "id", "fechaHasta", 1, "form-control", 3, "ngModelChange", "change", "ngModel"], [1, "col-md-4", "d-flex", "align-items-end"], [1, "btn", "btn-primary", "me-2", 3, "click"], [1, "fas", "fa-search"], [1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-eraser"], ["class", "col-md-4 mb-3", 4, "ngFor", "ngForOf"], [1, "card", "mb-4"], [1, "fas", "fa-calendar"], ["type", "date", 1, "form-control", 3, "ngModelChange", "change", "ngModel", "disabled"], [1, "form-control", 3, "ngModelChange", "change", "ngModel", "disabled"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-file-pdf"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-users"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-plus"], [1, "table-responsive"], [1, "table", "table-striped"], [1, "fas", "fa-envelope"], [1, "fas", "fa-user-tag"], [1, "fas", "fa-store"], [1, "fas", "fa-toggle-on"], [1, "fas", "fa-cogs"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-chart-line"], [1, "total-display"], ["class", "text-center", 4, "ngIf"], ["class", "sales-container", 4, "ngIf", "ngIfElse"], [1, "card", "mt-4"], [1, "fas", "fa-chart-bar"], ["class", "col-md-3 mb-3", 4, "ngFor", "ngForOf"], ["class", "modal fade", "tabindex", "-1", "role", "dialog", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "col-md-4", "mb-3"], [1, "card", "sorteo-card"], [1, "fas", "fa-dice"], [1, "mb-0"], [1, "badge"], [4, "ngIf", "ngIfElse"], [1, "winner-display"], [1, "results"], [1, "result-item"], ["class", "winner-form", 4, "ngIf"], [1, "winner-form"], [1, "form-group"], [1, "fas", "fa-hashtag"], ["type", "number", "min", "1", "max", "99", 1, "form-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "fas", "fa-calculator"], ["type", "number", "min", "1", "max", "100", "step", "0.1", 1, "form-control", 3, "ngModelChange", "ngModel", "value", "disabled"], [1, "btn", "btn-success", "btn-block", 3, "click", "disabled"], [1, "fas", "fa-check"], [3, "value"], [1, "btn", "btn-sm", "btn-outline-primary", "me-1", 3, "click"], [1, "fas", "fa-edit"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "fas", "fa-trash"], [1, "text-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "sales-container"], [1, "fas", "fa-clock"], [1, "fas", "fa-dollar-sign"], [1, "fas", "fa-list-ol"], [1, "fas", "fa-print"], [1, "badge", "badge-primary"], [1, "text-success"], [1, "numbers-display"], ["class", "badge badge-info mr-1 mb-1", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "badge", "badge-info", "mr-1", "mb-1"], ["class", "alert alert-info", 4, "ngIf"], [1, "alert", "alert-info"], [1, "fas", "fa-info-circle"], [1, "card", "sucursal-summary"], [1, "card-body", "text-center"], [1, "text-muted"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "fas", "fa-user-plus"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "form-group", "mb-3"], ["for", "userEmail"], ["type", "email", "id", "userEmail", "name", "email", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "form-group mb-3", 4, "ngIf"], ["for", "userRole"], ["id", "userRole", "name", "role", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "sucursal"], ["value", "admin"], [1, "form-check"], ["type", "checkbox", "id", "userActive", "name", "active", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "userActive", 1, "form-check-label"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fas", "fa-times"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-save"], ["for", "userPassword"], [1, "fas", "fa-lock"], ["type", "password", "id", "userPassword", "name", "password", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "userSucursal"], ["type", "text", "id", "userSucursal", "name", "sucursal", "placeholder", "Nombre de la sucursal", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "modal-backdrop", "fade"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Panel de Administraci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.logout());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Cerrar Sesi\u00F3n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "div")(14, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Total Vendido");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 9)(22, "div", 17)(23, "div", 11)(24, "div", 12)(25, "div")(26, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Total Pagado");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 9)(34, "div", 20)(35, "div", 11)(36, "div", 12)(37, "div")(38, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Ganancia Neta");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 9)(46, "div", 23)(47, "div", 11)(48, "div", 12)(49, "div")(50, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " Ventas Totales");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 8)(58, "div", 26)(59, "div", 27)(60, "div", 28)(61, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, " Filtros de Fecha");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 11)(65, "div", 30)(66, "div", 31)(67, "label", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, " Fecha Desde:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_70_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.fechaDesde, $event) || (ctx.fechaDesde = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onFiltroFechaChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 31)(72, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, " Fecha Hasta:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_75_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.fechaHasta, $event) || (ctx.fechaHasta = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_75_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onFiltroFechaChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 37)(77, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_77_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.aplicarFiltros());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, " Aplicar Filtros ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_80_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.limpiarFiltros());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, " Limpiar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](84, AdminComponent_div_84_Template, 14, 9, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 43)(86, "div", 28)(87, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, " Filtros");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 11)(91, "div", 30)(92, "div", 31)(93, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](94, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, " Fecha:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_96_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedDate, $event) || (ctx.selectedDate = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_96_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onDateChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 31)(98, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](99, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, " Sorteo:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "select", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_101_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedSorteoFilter, $event) || (ctx.selectedSorteoFilter = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AdminComponent_Template_select_change_101_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onSorteoFilterChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "option", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "Todos los sorteos");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](104, AdminComponent_option_104_Template, 2, 2, "option", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 37)(106, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_106_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.generateDailyReport());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, " Generar Reporte ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 43)(110, "div", 51)(111, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](112, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, " Gesti\u00F3n de Usuarios");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_114_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.showUserModal = true);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](115, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, " Nuevo Usuario ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 11)(118, "div", 55)(119, "table", 56)(120, "thead")(121, "tr")(122, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](123, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, " Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](126, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, " Rol");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](129, "i", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, " Sucursal");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](132, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133, " Estado");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](135, "i", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136, " Acciones");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](138, AdminComponent_tr_138_Template, 17, 14, "tr", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "div", 27)(140, "div", 28)(141, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](142, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](143, " Ventas");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](144, "div", 64)(145, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](148, AdminComponent_div_148_Template, 4, 0, "div", 65)(149, AdminComponent_div_149_Template, 25, 1, "div", 66)(150, AdminComponent_ng_template_150_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "div", 67)(153, "div", 28)(154, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](155, "i", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156, " Resumen por Sucursal");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "div", 11)(158, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](159, AdminComponent_div_159_Template, 9, 3, "div", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](160, AdminComponent_div_160_Template, 40, 12, "div", 70)(161, AdminComponent_div_161_Template, 1, 2, "div", 71);
        }
        if (rf & 2) {
          const noSales_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](151);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L. ", ctx.getTotalVendido().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L. ", ctx.getTotalPagado().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("bg-success", ctx.getGananciaNeta() > 0)("bg-danger", ctx.getGananciaNeta() < 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L. ", ctx.getGananciaNeta().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.getTotalVentas());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaDesde);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaHasta);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sorteos);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedSorteoFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sorteos);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.users);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total: L. ", ctx.getTotalSales().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.sales.length > 0)("ngIfElse", noSales_r17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.getSucursalSummary());
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showUserModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showUserModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
      styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #007bff, #0056b3);\n  color: white;\n  padding: 15px 20px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0 0;\n  opacity: 0.9;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 0.75em;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.badge-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.badge-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.badge-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge.badge-info[_ngcontent-%COMP%] {\n  background-color: #17a2b8;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.sorteo-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-display[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-display[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #28a745;\n  margin-bottom: 10px;\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-display[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-display[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-display[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n  border-bottom: 1px solid #eee;\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-display[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 5px;\n  display: block;\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #007bff;\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa;\n  cursor: not-allowed;\n}\n.sorteo-card[_ngcontent-%COMP%]   .winner-form[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.total-display[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #28a745;\n  font-weight: 600;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 0;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n  vertical-align: top;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #007bff;\n}\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.numbers-display[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.sucursal-summary[_ngcontent-%COMP%] {\n  border-left: 4px solid #007bff;\n  transition: transform 0.2s;\n}\n.sucursal-summary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.3s;\n  cursor: pointer;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  text-decoration: none;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1e7e34;\n}\n.btn.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n}\n.btn.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #c82333;\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%] {\n  border: 1px solid #007bff;\n  color: #007bff;\n  background: white;\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #007bff;\n  color: white;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 12px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.form-control[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa;\n  cursor: not-allowed;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spinner-border 0.75s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #28a745 !important;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.align-items-end[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.mb-4[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.mr-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.col-md-3[_ngcontent-%COMP%] {\n  flex: 0 0 25%;\n  max-width: 25%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-4[_ngcontent-%COMP%] {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-6[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  max-width: 50%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert.alert-info[_ngcontent-%COMP%] {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n.alert[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  transition: transform 0.2s;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.summary-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.summary-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n  opacity: 0.9;\n}\n.summary-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.summary-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin: 0;\n}\n\n.sales-container[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n  border: 1px solid #dee2e6;\n  border-radius: 5px;\n}\n\n.modal.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: #000;\n  opacity: 0.5;\n}\n.btn-close[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n    margin-bottom: 15px;\n  }\n  .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .d-flex.justify-content-between[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n  .text-right[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .table[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .summary-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .sales-container[_ngcontent-%COMP%] {\n    max-height: 300px;\n  }\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.slide-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL0xvdGVyaWElMjB2MS9sb3RlcmlhL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UscURBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDQ047QURDTTtFQUNFLGlCQUFBO0FDQ1I7QURHSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0ROO0FESUk7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQ0ZOO0FESU07RUFDRSx5QkFBQTtBQ0ZSO0FES007RUFDRSx5QkFBQTtBQ0hSO0FETU07RUFDRSx5QkFBQTtBQ0pSO0FET007RUFDRSx5QkFBQTtBQ0xSO0FEVUU7RUFDRSxhQUFBO0FDUko7O0FEWUE7RUFDRSxZQUFBO0FDVEY7QURXRTtFQUNFLGtCQUFBO0FDVEo7QURXSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ1ROO0FEV007RUFDRSxpQkFBQTtBQ1RSO0FEYUk7RUFDRSxnQkFBQTtBQ1hOO0FEYU07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUNYUjtBRGFRO0VBQ0UsbUJBQUE7QUNYVjtBRGtCSTtFQUNFLG1CQUFBO0FDaEJOO0FEa0JNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDaEJSO0FEa0JRO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDaEJWO0FEb0JNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ2xCUjtBRG9CUTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0FDbEJWO0FEcUJRO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ25CVjtBRHdCSTtFQUNFLFdBQUE7QUN0Qk47O0FEMkJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN4QkY7O0FEMkJBO0VBQ0UsZ0JBQUE7QUN4QkY7O0FEMkJBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUN4QkY7QUQwQkU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDeEJKO0FEMkJFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUN6Qko7QUQyQkk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUN6Qk47QUQ2QkU7RUFDRSx5QkFBQTtBQzNCSjs7QUQrQkE7RUFDRSxxQ0FBQTtBQzVCRjs7QURnQ0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDN0JKOztBRGlDQTtFQUNFLDhCQUFBO0VBQ0EsMEJBQUE7QUM5QkY7QURnQ0U7RUFDRSwyQkFBQTtBQzlCSjs7QURrQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7QUMvQkY7QURpQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUMvQko7QURrQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNoQ0o7QURrQ0k7RUFDRSx5QkFBQTtBQ2hDTjtBRG9DRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ2xDSjtBRG9DSTtFQUNFLHlCQUFBO0FDbENOO0FEc0NFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDcENKO0FEc0NJO0VBQ0UseUJBQUE7QUNwQ047QUR3Q0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ3RDSjtBRHdDSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ3RDTjtBRDBDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ3hDSjs7QUQ0Q0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDekNGO0FEMkNFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkNBQUE7QUN6Q0o7QUQ0Q0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDMUNKOztBRDhDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUMzQ0Y7O0FEOENBO0VBQ0U7SUFBSyx5QkFBQTtFQzFDTDtBQUNGO0FENENBO0VBQ0UseUJBQUE7QUMxQ0Y7O0FENkNBO0VBQ0UseUJBQUE7QUMxQ0Y7O0FENkNBO0VBQ0Usa0JBQUE7QUMxQ0Y7O0FENkNBO0VBQ0UsaUJBQUE7QUMxQ0Y7O0FENkNBO0VBQ0UsYUFBQTtBQzFDRjs7QUQ2Q0E7RUFDRSw4QkFBQTtBQzFDRjs7QUQ2Q0E7RUFDRSxtQkFBQTtBQzFDRjs7QUQ2Q0E7RUFDRSxxQkFBQTtBQzFDRjs7QUQ2Q0E7RUFBUSxrQkFBQTtBQ3pDUjs7QUQwQ0E7RUFBUSxtQkFBQTtBQ3RDUjs7QUR1Q0E7RUFBUSxxQkFBQTtBQ25DUjs7QURvQ0E7RUFBUSxxQkFBQTtBQ2hDUjs7QURpQ0E7RUFBUSxzQkFBQTtBQzdCUjs7QUQrQkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUM1QkY7O0FEK0JBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDNUJGOztBRCtCQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDNUJGOztBRCtCQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQzVCRjs7QUQrQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQzVCRjtBRDhCRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDNUJKO0FEK0JFO0VBQ0UsaUJBQUE7QUM3Qko7O0FEa0NBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtBQy9CRjtBRGlDRTtFQUNFLDJCQUFBO0FDL0JKO0FEa0NFO0VBQ0UsZUFBQTtBQ2hDSjtBRG1DRTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDakNKO0FEb0NFO0VBQ0UsWUFBQTtBQ2xDSjtBRHFDRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDbkNKOztBRHdDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDckNGOztBRDBDRTtFQUNFLHlCQUFBO0FDdkNKOztBRDJDQTtFQUNFLG9DQUFBO0FDeENGOztBRDRDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUN6Q0Y7QUQyQ0U7RUFDRSxhQUFBO0FDekNKOztBRDhDQTtFQUNFO0lBQ0UsYUFBQTtFQzNDRjtFRDhDQTs7O0lBR0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQzVDRjtFRCtDQTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQzdDRjtFRCtDRTtJQUNFLG9CQUFBO0VDN0NKO0VEaURBO0lBQ0UsZ0JBQUE7RUMvQ0Y7RURrREE7SUFDRSxlQUFBO0VDaERGO0VEa0RFO0lBQ0UsWUFBQTtFQ2hESjtFRG9EQTtJQUNFLGlCQUFBO0VDbERGO0VEcURBO0lBQ0UsaUJBQUE7RUNuREY7QUFDRjtBRHVEQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNyREY7O0FEeURBO0VBQ0UsOEJBQUE7QUN0REY7O0FEeURBO0VBQ0U7SUFBTyxVQUFBO0lBQVksNEJBQUE7RUNwRG5CO0VEcURBO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VDakRqQjtBQUNGO0FEbURBO0VBQ0UsZ0NBQUE7QUNqREY7O0FEb0RBO0VBQ0U7SUFBTywyQkFBQTtJQUE2QixVQUFBO0VDL0NwQztFRGdEQTtJQUFLLHdCQUFBO0lBQTBCLFVBQUE7RUM1Qy9CO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA3YmZmLCAjMDA1NmIzKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIFxyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgXHJcbiAgICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDVweCAwIDAgMDtcclxuICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFkZ2Uge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDAuMjVlbSAwLjRlbTtcclxuICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgICAgXHJcbiAgICAgICYuYmFkZ2Utc3VjY2VzcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5iYWRnZS1kYW5nZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYuYmFkZ2UtcHJpbWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5iYWRnZS1pbmZvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc29ydGVvLWNhcmQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBcclxuICAud2lubmVyLWRpc3BsYXkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBoMyB7XHJcbiAgICAgIGNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBcclxuICAgICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJlc3VsdHMge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICBcclxuICAgICAgLnJlc3VsdC1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndpbm5lci1mb3JtIHtcclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDAsMTIzLDI1NSwwLjI1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1ibG9jayB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRvdGFsLWRpc3BsYXkge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBcclxuICB0aCwgdGQge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIFxyXG4gIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNSk7XHJcbn1cclxuXHJcbi5udW1iZXJzLWRpc3BsYXkge1xyXG4gIC5iYWRnZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5zdWN1cnNhbC1zdW1tYXJ5IHtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMwMDdiZmY7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuXHJcbiAgJi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmJ0bi1kYW5nZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjODIzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBcclxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmJ0bi1zbSB7XHJcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xyXG4gIFxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDAsMTIzLDI1NSwwLjI1KTtcclxuICB9XHJcbiAgXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbn1cclxuXHJcbi5zcGlubmVyLWJvcmRlciB7XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJvcmRlcjogMC4yNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IHNwaW5uZXItYm9yZGVyIDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGlubmVyLWJvcmRlciB7XHJcbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbi50ZXh0LXN1Y2Nlc3Mge1xyXG4gIGNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmQtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGlnbi1pdGVtcy1lbmQge1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLm10LTQgeyBtYXJnaW4tdG9wOiAxLjVyZW07IH1cclxuLm1iLTMgeyBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XHJcbi5tYi00IHsgbWFyZ2luLWJvdHRvbTogMS41cmVtOyB9XHJcbi5tci0xIHsgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtOyB9XHJcbi5tYi0xIHsgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTsgfVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuXHJcbi5jb2wtbWQtMyB7XHJcbiAgZmxleDogMCAwIDI1JTtcclxuICBtYXgtd2lkdGg6IDI1JTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLmNvbC1tZC00IHtcclxuICBmbGV4OiAwIDAgMzMuMzMzMzMzJTtcclxuICBtYXgtd2lkdGg6IDMzLjMzMzMzMyU7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jb2wtbWQtNiB7XHJcbiAgZmxleDogMCAwIDUwJTtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgXHJcbiAgJi5hbGVydC1pbmZvIHtcclxuICAgIGNvbG9yOiAjMGM1NDYwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcclxuICAgIGJvcmRlci1jb2xvcjogI2JlZTVlYjtcclxuICB9XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIENhcmRzIGRlIHJlc3VtZW5cclxuLnN1bW1hcnktY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1pY29uIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcbiAgXHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNhbGVzIGNvbnRhaW5lciBjb24gc2Nyb2xsXHJcbi5zYWxlcy1jb250YWluZXIge1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi8vIE1vZGFsIHN0eWxlc1xyXG4ubW9kYWwge1xyXG4gICYuc2hvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi8vIEdlc3Rpw4PCs24gZGUgdXN1YXJpb3NcclxuLmJ0bi1jbG9zZSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgbWVqb3Jhc1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtbWQtMyxcclxuICAuY29sLW1kLTQsXHJcbiAgLmNvbC1tZC02IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmQtZmxleCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgXHJcbiAgICAmLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcclxuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBcclxuICAgIHRoLCB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnN1bW1hcnktY2FyZCBoNCB7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnNhbGVzLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vIExvYWRpbmcgc3RhdGVzXHJcbi5sb2FkaW5nLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4vLyBBbmltYXRpb25zXHJcbi5mYWRlLWluIHtcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UtaW47XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxyXG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbn1cclxuXHJcbi5zbGlkZS11cCB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XHJcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgb3BhY2l0eTogMDsgfVxyXG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA3YmZmLCAjMDA1NmIzKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIgaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciBoNCBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIgcCB7XG4gIG1hcmdpbjogNXB4IDAgMCAwO1xuICBvcGFjaXR5OiAwLjk7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjI1ZW0gMC40ZW07XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIgLmJhZGdlLmJhZGdlLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xufVxuLmNhcmQgLmNhcmQtaGVhZGVyIC5iYWRnZS5iYWRnZS1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xufVxuLmNhcmQgLmNhcmQtaGVhZGVyIC5iYWRnZS5iYWRnZS1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciAuYmFkZ2UuYmFkZ2UtaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XG59XG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnNvcnRlby1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNvcnRlby1jYXJkIC53aW5uZXItZGlzcGxheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zb3J0ZW8tY2FyZCAud2lubmVyLWRpc3BsYXkgaDMge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zb3J0ZW8tY2FyZCAud2lubmVyLWRpc3BsYXkgaDMgaSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLnNvcnRlby1jYXJkIC53aW5uZXItZGlzcGxheSAucmVzdWx0cyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uc29ydGVvLWNhcmQgLndpbm5lci1kaXNwbGF5IC5yZXN1bHRzIC5yZXN1bHQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLnNvcnRlby1jYXJkIC53aW5uZXItZGlzcGxheSAucmVzdWx0cyAucmVzdWx0LWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uc29ydGVvLWNhcmQgLndpbm5lci1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5zb3J0ZW8tY2FyZCAud2lubmVyLWZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzU1NTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zb3J0ZW8tY2FyZCAud2lubmVyLWZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwgaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogIzAwN2JmZjtcbn1cbi5zb3J0ZW8tY2FyZCAud2lubmVyLWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcbn1cbi5zb3J0ZW8tY2FyZCAud2lubmVyLWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbn1cbi5zb3J0ZW8tY2FyZCAud2lubmVyLWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLnNvcnRlby1jYXJkIC53aW5uZXItZm9ybSAuYnRuLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b3RhbC1kaXNwbGF5IHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRhYmxlIHRoLCAudGFibGUgdGQge1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi50YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuLnRhYmxlIHRoIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4udGFibGUgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLm51bWJlcnMtZGlzcGxheSAuYmFkZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc3VjdXJzYWwtc3VtbWFyeSB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzAwN2JmZjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4uc3VjdXJzYWwtc3VtbWFyeTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJ0bi5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG59XG4uYnRuLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJ0bi5idG4tc3VjY2Vzczpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQ7XG59XG4uYnRuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYnRuLmJ0bi1kYW5nZXI6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgyMzMzO1xufVxuLmJ0bi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmJ0bi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJ0bi5idG4tc20ge1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcbn1cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcbn1cbi5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uc3Bpbm5lci1ib3JkZXIge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXI6IDAuMjVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGlubmVyLWJvcmRlciAwLjc1cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lci1ib3JkZXIge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLnRleHQtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbGlnbi1pdGVtcy1lbmQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5tdC00IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4ubWItMyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5tYi00IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4ubXItMSB7XG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbn1cblxuLm1iLTEge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5jb2wtbWQtMyB7XG4gIGZsZXg6IDAgMCAyNSU7XG4gIG1heC13aWR0aDogMjUlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5jb2wtbWQtNCB7XG4gIGZsZXg6IDAgMCAzMy4zMzMzMzMlO1xuICBtYXgtd2lkdGg6IDMzLjMzMzMzMyU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmNvbC1tZC02IHtcbiAgZmxleDogMCAwIDUwJTtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmFsZXJ0IHtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmFsZXJ0LmFsZXJ0LWluZm8ge1xuICBjb2xvcjogIzBjNTQ2MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcbiAgYm9yZGVyLWNvbG9yOiAjYmVlNWViO1xufVxuLmFsZXJ0IGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnN1bW1hcnktY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG59XG4uc3VtbWFyeS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuLnN1bW1hcnktY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuLnN1bW1hcnktY2FyZCAuY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5zdW1tYXJ5LWNhcmQgLmNhcmQtaWNvbiB7XG4gIG9wYWNpdHk6IDAuMztcbn1cbi5zdW1tYXJ5LWNhcmQgaDQge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNhbGVzLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tb2RhbC5zaG93IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnRuLWNsb3NlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5idG4tY2xvc2U6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc1O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuY29sLW1kLTMsXG4gIC5jb2wtbWQtNCxcbiAgLmNvbC1tZC02IHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuZC1mbGV4IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgfVxuICAuZC1mbGV4Lmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuICAudGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAudGFibGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAudGFibGUgdGgsIC50YWJsZSB0ZCB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIC5zdW1tYXJ5LWNhcmQgaDQge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG4gIC5zYWxlcy1jb250YWluZXIge1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICB9XG59XG4ubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5mYWRlLWluIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLWluO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5zbGlkZS11cCB7XG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjNzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);









function SucursalComponent_div_11_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Abierto (cierra ", ctx_r1.timeUntilClose, ") ");
  }
}
function SucursalComponent_div_11_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Cerrado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SucursalComponent_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_11_div_7_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openNumberModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Agregar N\u00FAmero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
  }
}
function SucursalComponent_div_11_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Venta bloqueada:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Faltan menos de 5 minutos para el cierre del sorteo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SucursalComponent_div_11_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_11_div_9_div_8_Template_button_click_6_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.confirmRemoveNumber(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7.numero.toString().padStart(2, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L. ", item_r7.monto.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.isLoading);
  }
}
function SucursalComponent_div_11_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 59)(1, "div", 6)(2, "div", 60)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Venta Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 62)(7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SucursalComponent_div_11_div_9_div_8_Template, 8, 3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 65)(10, "div", 66)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_11_div_9_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.processSale());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Procesar Venta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.selectedNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Total: L. ", ctx_r1.getTotal().toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.selectedNumbers.length === 0 || ctx_r1.isLoading || ctx_r1.isBlocked);
  }
}
function SucursalComponent_div_11_div_10_div_8_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detail_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", detail_r8.numero.toString().padStart(2, "0"), " ");
  }
}
function SucursalComponent_div_11_div_10_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "div", 80)(3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SucursalComponent_div_11_div_10_div_8_span_10_Template, 2, 1, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sale_r9 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.formatTime(sale_r9.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" L. ", sale_r9.total.toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.getSaleDetails(sale_r9.id));
  }
}
function SucursalComponent_div_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 59)(1, "div", 6)(2, "div", 60)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 62)(7, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SucursalComponent_div_11_div_10_div_8_Template, 11, 3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Ventas del D\u00EDa (", ctx_r1.getTodayDate(), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.getFilteredSales());
  }
}
function SucursalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 44)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SucursalComponent_div_11_span_5_Template, 3, 1, "span", 45)(6, SucursalComponent_div_11_span_6_Template, 3, 0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SucursalComponent_div_11_div_7_Template, 5, 1, "div", 47)(8, SucursalComponent_div_11_div_8_Template, 5, 0, "div", 48)(9, SucursalComponent_div_11_div_9_Template, 17, 3, "div", 49)(10, SucursalComponent_div_11_div_10_Template, 9, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currentSorteo.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isSorteoOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isSorteoOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isSorteoOpen && !ctx_r1.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedNumbers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.recentSales.length > 0);
  }
}
function SucursalComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " No hay sorteo activo en este momento. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SucursalComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 88)(1, "div", 89)(2, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function SucursalComponent_div_25_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 103)(1, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const detail_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" N\u00BA ", detail_r12.numero.toString().padStart(2, "0"), ": L. ", detail_r12.monto.toFixed(2), " ");
  }
}
function SucursalComponent_div_25_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92)(1, "div", 62)(2, "div", 93)(3, "div")(4, "h5", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 97)(13, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_25_div_1_Template_button_click_15_listener() {
      const sale_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.printService.generateThermalReceipt(sale_r11, ctx_r1.getSaleDetails(sale_r11.id)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Reimprimir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 100)(19, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " N\u00FAmeros jugados:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, SucursalComponent_div_25_div_1_div_23_Template, 3, 2, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const sale_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, sale_r11.sorteo), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 6, sale_r11.fecha, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L. ", sale_r11.total.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.getSaleDetails(sale_r11.id));
  }
}
function SucursalComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SucursalComponent_div_25_div_1_Template, 24, 9, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.filteredSales);
  }
}
function SucursalComponent_ng_template_26_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " No hay ventas registradas para la fecha seleccionada. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SucursalComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SucursalComponent_ng_template_26_div_0_Template, 3, 0, "div", 105);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
  }
}
class SucursalComponent {
  constructor(supabaseService, sorteoService, notificationService, printService, router) {
    this.supabaseService = supabaseService;
    this.sorteoService = sorteoService;
    this.notificationService = notificationService;
    this.printService = printService;
    this.router = router;
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
  }
  ngOnInit() {
    this.supabaseService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (!user || user.role !== 'sucursal') {
        this.router.navigate(['/login']);
      }
    });
    this.initializeComponent();
    this.checkTimeRestrictions();
    // Verificar bloqueo cada minuto
    setInterval(() => {
      this.checkTimeRestrictions();
    }, 60000);
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
        // Actualizar cada minuto
        setInterval(() => {
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
    this.selectedNumbers.splice(index, 1);
  }
  confirmRemoveNumber(index) {
    var _this2 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirmed = yield _this2.notificationService.showConfirmation('¿Eliminar número?', 'Esta acción no se puede deshacer.');
      if (confirmed) {
        _this2.removeNumber(index);
      }
    })();
  }
  getTotal() {
    return this.selectedNumbers.reduce((total, item) => total + item.monto, 0);
  }
  processSale() {
    var _this3 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.currentSorteo || !_this3.currentUser || _this3.selectedNumbers.length === 0) {
        return;
      }
      // Validar que el usuario tenga sucursal configurada
      if (!_this3.currentUser.sucursal) {
        yield _this3.notificationService.showError('Error: El usuario no tiene una sucursal asignada. Contacte al administrador.');
        console.error('Usuario sin sucursal:', _this3.currentUser);
        return;
      }
      // Confirmar venta
      const confirmed = yield _this3.notificationService.showConfirmation('Confirmar venta', `¿Procesar venta por L. ${_this3.getTotal().toFixed(2)}?`);
      if (!confirmed) return;
      _this3.isLoading = true;
      _this3.notificationService.showLoading('Procesando venta...');
      try {
        const sale = {
          userId: _this3.currentUser.id,
          sucursal: _this3.currentUser.sucursal,
          sorteo: _this3.currentSorteo.name,
          fecha: new Date(),
          total: _this3.getTotal()
        };
        console.log('Procesando venta:', sale);
        const saleId = yield _this3.supabaseService.createSale(sale);
        // Crear detalles de venta
        const saleDetails = [];
        for (const item of _this3.selectedNumbers) {
          const detailId = yield _this3.supabaseService.createSaleDetail({
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
        _this3.printService.generateThermalReceipt(saleWithId, saleDetails);
        // Limpiar selección
        _this3.selectedNumbers = [];
        // Recargar ventas
        yield _this3.loadTodaySales();
        _this3.notificationService.showSuccess('Venta procesada exitosamente');
      } catch (error) {
        console.error('Error procesando venta:', error);
        _this3.notificationService.showError('Error al procesar la venta');
      } finally {
        _this3.isLoading = false;
        _this3.notificationService.hideLoading();
      }
    })();
  }
  loadTodaySales() {
    var _this4 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.currentUser) return;
      try {
        const today = new Date();
        const allSales = yield _this4.supabaseService.getSalesByDateAndSorteo(today, '');
        _this4.todaySales = allSales.filter(sale => sale.sucursal === _this4.currentUser.sucursal);
        // Cargar detalles de cada venta con timeout individual
        for (const sale of _this4.todaySales) {
          try {
            const timeoutPromise = new Promise((_, reject) => {
              setTimeout(() => reject(new Error('Timeout cargando detalles')), 3000);
            });
            const detailsPromise = _this4.supabaseService.getSaleDetails(sale.id);
            _this4.saleDetails[sale.id] = yield Promise.race([detailsPromise, timeoutPromise]);
          } catch (error) {
            console.warn(`Error cargando detalles de venta ${sale.id}:`, error);
            _this4.saleDetails[sale.id] = [];
          }
        }
        _this4.filterSales();
      } catch (error) {
        console.error('Error cargando ventas:', error);
        _this4.notificationService.showError('Error al cargar las ventas');
      }
    })();
  }
  getSaleDetails(saleId) {
    return this.saleDetails[saleId] || [];
  }
  logout() {
    var _this5 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirmed = yield _this5.notificationService.showConfirmation('Cerrar sesión', '¿Está seguro que desea cerrar sesión?');
      if (confirmed) {
        _this5.notificationService.showLoading('Cerrando sesión...');
        try {
          yield _this5.supabaseService.logout();
          _this5.router.navigate(['/login']);
        } catch (error) {
          console.error('Error cerrando sesión:', error);
          _this5.notificationService.showError('Error al cerrar sesión');
        } finally {
          _this5.notificationService.hideLoading();
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
    console.log('Abriendo modal de número');
    if (this.isBlocked) {
      this.notificationService.showError('Ventas bloqueadas', 'No se pueden realizar ventas en los últimos 5 minutos antes del sorteo');
      return;
    }
    this.showNumberModal = true;
    this.modalNumberInput = '';
    console.log('Modal abierto:', this.showNumberModal);
  }
  closeAllModals() {
    console.log('Cerrando todos los modales');
    this.showNumberModal = false;
    this.showAmountModal = false;
    this.showConfirmModal = false;
    this.modalNumberInput = '';
    this.modalAmountInput = '';
    this.tempNumber = null;
    this.tempAmount = null;
  }
  // Modal 1: Selección de número
  pressModalNumber(num) {
    console.log('Presionando número:', num);
    if (this.modalNumberInput.length < 2) {
      this.modalNumberInput += num.toString();
      console.log('Input actual:', this.modalNumberInput);
    }
  }
  clearModalNumber() {
    console.log('Limpiando número');
    this.modalNumberInput = '';
    // Forzar detección de cambios
    setTimeout(() => {
      console.log('Número limpiado, input actual:', this.modalNumberInput);
    }, 0);
  }
  acceptModalNumber() {
    console.log('Aceptando número:', this.modalNumberInput);
    // Evitar múltiples ejecuciones
    if (!this.modalNumberInput || this.showAmountModal) {
      if (!this.modalNumberInput) {
        this.notificationService.showError('Número requerido', 'Debe ingresar un número');
      }
      return;
    }
    // Formatear el número con ceros a la izquierda si es necesario
    let formattedNumber = this.modalNumberInput.padStart(2, '0');
    const numero = parseInt(formattedNumber);
    if (numero >= 0 && numero <= 99) {
      this.tempNumber = numero;
      // Cerrar modal actual y abrir siguiente
      this.showNumberModal = false;
      // Usar setTimeout para asegurar que el cambio se aplique
      setTimeout(() => {
        this.showAmountModal = true;
        this.modalAmountInput = '';
        console.log('Modal de apuesta abierto, número seleccionado:', numero);
      }, 100);
    } else {
      this.notificationService.showError('Número inválido', 'El número debe estar entre 00 y 99');
    }
  }
  // Modal 2: Selección de apuesta
  pressModalAmount(num) {
    console.log('Presionando cantidad:', num);
    if (this.modalAmountInput.length < 4) {
      // Máximo 4 dígitos para el monto
      this.modalAmountInput += num.toString();
      console.log('Monto actual:', this.modalAmountInput);
    }
  }
  clearModalAmount() {
    console.log('Limpiando monto');
    this.modalAmountInput = '';
    // Forzar detección de cambios
    setTimeout(() => {
      console.log('Monto limpiado, input actual:', this.modalAmountInput);
    }, 0);
  }
  acceptModalAmount() {
    console.log('Aceptando monto:', this.modalAmountInput);
    if (!this.modalAmountInput) {
      this.notificationService.showError('Monto requerido', 'Debe ingresar un monto');
      return;
    }
    const monto = parseFloat(this.modalAmountInput);
    if (monto > 0 && monto <= 1000) {
      // Límite de apuesta
      this.tempAmount = monto;
      this.showAmountModal = false;
      this.showConfirmModal = true;
      console.log('Pasando a confirmación, monto:', monto);
    } else {
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
      this.notificationService.showSuccess('Número agregado', `Número ${this.tempNumber.toString().padStart(2, '0')} agregado con apuesta de L. ${this.tempAmount}`);
      this.closeAllModals();
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
  // Filtrar ventas solo del día actual
  getFilteredSales() {
    if (!this.recentSales) return [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.recentSales.filter(sale => {
      const saleDate = new Date(sale.createdAt);
      saleDate.setHours(0, 0, 0, 0);
      return saleDate.getTime() === today.getTime();
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
    var _this6 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Este método debe cargar las ventas del día actual
        _this6.recentSales = _this6.todaySales;
      } catch (error) {
        console.error('Error cargando ventas recientes:', error);
        _this6.recentSales = [];
      }
    })();
  }
  static {
    this.ɵfac = function SucursalComponent_Factory(t) {
      return new (t || SucursalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_sorteo_service__WEBPACK_IMPORTED_MODULE_2__.SorteoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SucursalComponent,
      selectors: [["app-sucursal"]],
      decls: 144,
      vars: 27,
      consts: [["noSorteo", ""], ["noSales", ""], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "btn", "btn-danger", 3, "click", "disabled"], [1, "fas", "fa-sign-out-alt"], [1, "card"], [1, "fas", "fa-clock"], [4, "ngIf", "ngIfElse"], [1, "card", "mt-4"], [1, "fas", "fa-chart-line"], [1, "row", "mb-3"], [1, "col-md-4"], [1, "fas", "fa-calendar"], ["type", "date", 1, "form-control", 3, "ngModelChange", "change", "ngModel", "disabled"], ["class", "text-center", 4, "ngIf"], [1, "modal", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "fas", "fa-hashtag"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "calculator-container"], [1, "calculator-display"], [1, "display-label"], [1, "display-value"], [1, "calculator-keypad"], [1, "keypad-row"], ["type", "button", 1, "keypad-btn", 3, "click"], ["type", "button", 1, "keypad-btn", "keypad-clear", 3, "click"], ["type", "button", 1, "keypad-btn", "keypad-accept", 3, "click", "disabled"], [1, "fas", "fa-dollar-sign"], [1, "fas", "fa-check-circle"], [1, "confirmation-container"], [1, "confirmation-card"], [1, "number-display-large"], [1, "amount-display"], [1, "confirmation-buttons"], ["type", "button", 1, "btn", "btn-success", "btn-lg", 3, "click"], [1, "fas", "fa-check"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click"], [1, "fas", "fa-times"], [1, "alert", "alert-info"], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], [1, "text-success"], [1, "text-danger"], [1, "fas", "fa-times-circle"], [1, "row"], [1, "col-12", "text-center", "mb-4"], [1, "btn", "btn-primary", "btn-lg", 3, "click", "disabled"], [1, "fas", "fa-plus-circle"], [1, "alert", "alert-danger"], [1, "fas", "fa-lock"], [1, "mt-4"], [1, "card-header"], [1, "fas", "fa-shopping-cart"], [1, "card-body"], [1, "selected-numbers-container"], ["class", "selected-number-item", 4, "ngFor", "ngForOf"], [1, "total-section", "mt-3"], [1, "total-display"], [1, "fas", "fa-calculator"], [1, "btn", "btn-success", "btn-lg", 3, "click", "disabled"], [1, "fas", "fa-cash-register"], [1, "selected-number-item"], [1, "number-info"], [1, "number-badge"], [1, "amount-text"], [1, "btn", "btn-danger", "btn-sm", "delete-btn", 3, "click", "disabled"], [1, "fas", "fa-history"], [1, "sales-history-container"], ["class", "sale-item", 4, "ngFor", "ngForOf"], [1, "sale-item"], [1, "sale-info"], [1, "sale-header"], [1, "sale-time"], [1, "sale-total"], [1, "sale-numbers"], ["class", "number-badge-small", 4, "ngFor", "ngForOf"], [1, "number-badge-small"], [1, "alert", "alert-warning"], [1, "fas", "fa-exclamation-triangle"], [1, "text-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["class", "card mb-2", 4, "ngFor", "ngForOf"], [1, "card", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "card-title"], [1, "fas", "fa-ticket-alt"], [1, "card-text"], [1, "text-right"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "fas", "fa-print"], [1, "mt-2"], [1, "fas", "fa-list-ol"], ["class", "col-md-6 mb-1", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-1"], [1, "badge", "badge-info"], ["class", "alert alert-info", 4, "ngIf"], [1, "fas", "fa-info-circle"]],
      template: function SucursalComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.logout());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Cerrar Sesi\u00F3n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Sorteo Actual");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, SucursalComponent_div_11_Template, 11, 7, "div", 8)(12, SucursalComponent_ng_template_12_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 9)(15, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Ventas del D\u00EDa");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 11)(19, "div", 12)(20, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Filtrar por fecha:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function SucursalComponent_Template_input_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.filterDate, $event) || (ctx.filterDate = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SucursalComponent_Template_input_change_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onFilterDateChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, SucursalComponent_div_24_Template, 4, 0, "div", 15)(25, SucursalComponent_div_25_Template, 2, 1, "div", 8)(26, SucursalComponent_ng_template_26_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.closeAllModals());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "h5", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Seleccionar N\u00FAmero ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.closeAllModals());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 23)(39, "div", 24)(40, "div", 25)(41, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "NUMERO");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 28)(46, "div", 29)(47, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalNumber(1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalNumber(2);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalNumber(3);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 29)(54, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_54_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalNumber(4);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_56_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalNumber(5);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalNumber(6);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 29)(61, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalNumber(7);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_63_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalNumber(8);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "8");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_65_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalNumber(9);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 29)(68, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_68_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalNumber(0);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_70_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.clearModalNumber();
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, " C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_72_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.acceptModalNumber();
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, " Aceptar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_74_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.closeAllModals());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_75_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 18)(77, "div", 19)(78, "h5", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, " Ingresar Apuesta ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_81_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.closeAllModals());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 23)(85, "div", 24)(86, "div", 25)(87, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "APUESTA");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 28)(92, "div", 29)(93, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_93_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalAmount(1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_95_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalAmount(2);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_97_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalAmount(3);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 29)(100, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_100_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalAmount(4);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_102_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalAmount(5);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_104_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalAmount(6);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 29)(107, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_107_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalAmount(7);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_109_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalAmount(8);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, "8");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_111_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalAmount(9);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 29)(114, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_114_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.pressModalAmount(0);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_116_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.clearModalAmount();
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, " C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_118_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            ctx.acceptModalAmount();
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](119, " Aceptar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_120_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.closeAllModals());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_121_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "div", 18)(123, "div", 19)(124, "h5", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](125, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, " Confirmar Apuesta ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_127_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.closeAllModals());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "div", 23)(131, "div", 35)(132, "div", 36)(133, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](136);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 39)(138, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_138_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.confirmAddNumber());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](139, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, " CONFIRMAR ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_141_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.cancelAddNumber());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](142, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](143, " Cancelar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          const noSorteo_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
          const noSales_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Sucursal: ", ctx.currentUser == null ? null : ctx.currentUser.sucursal, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentSorteo)("ngIfElse", noSorteo_r13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.filterDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.filteredSales.length > 0)("ngIfElse", noSales_r14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
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
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
      styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  padding: 20px;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 15px;\n  border-bottom: 2px solid #007bff;\n  padding-bottom: 10px;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #007bff;\n}\n.card[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  margin-bottom: 15px;\n}\n.card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 5px;\n  display: block;\n}\n.card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #007bff;\n}\n.card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 8px 12px;\n  font-size: 14px;\n  transition: border-color 0.3s;\n}\n.card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa;\n  cursor: not-allowed;\n}\n.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: all 0.3s;\n  cursor: pointer;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.card[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n.card[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n.card[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.card[_ngcontent-%COMP%]   .btn.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1e7e34;\n}\n.card[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n}\n.card[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #c82333;\n}\n.card[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%] {\n  border: 1px solid #007bff;\n  color: #007bff;\n  background: white;\n}\n.card[_ngcontent-%COMP%]   .btn.btn-outline-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #007bff;\n  color: white;\n}\n.card[_ngcontent-%COMP%]   .btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 12px;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spinner-border 0.75s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spinner-border {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n.badge.badge-info[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #17a2b8;\n}\n\n.text-success[_ngcontent-%COMP%] {\n  color: #28a745 !important;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.col-md-4[_ngcontent-%COMP%] {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.col-md-6[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  max-width: 50%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #666;\n}\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .col-md-4[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n    margin-bottom: 10px;\n  }\n  .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .d-flex.justify-content-between[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n  .text-right[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n\n.number-display[_ngcontent-%COMP%] {\n  font-family: \"Courier New\", monospace;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.status-indicator[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-weight: 500;\n}\n\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n.numeric-keypad[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 10px;\n  padding: 20px;\n  margin: 20px 0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.keypad-display[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2px solid #007bff;\n  border-radius: 8px;\n  padding: 15px;\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  color: #007bff;\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.keypad-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  margin-bottom: 15px;\n}\n\n.keypad-btn[_ngcontent-%COMP%] {\n  height: 60px;\n  font-size: 24px;\n  font-weight: bold;\n  border: none;\n  border-radius: 8px;\n  background: #007bff;\n  color: white;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n\n.keypad-btn[_ngcontent-%COMP%]:hover {\n  background: #0056b3;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.keypad-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.keypad-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.keypad-clear[_ngcontent-%COMP%] {\n  background: #dc3545;\n}\n\n.keypad-clear[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n\n.keypad-ok[_ngcontent-%COMP%] {\n  background: #28a745;\n}\n\n.keypad-ok[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n\n\n\n.selected-numbers-container[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n  margin-bottom: 15px;\n}\n\n.selected-number-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 10px 15px;\n  margin-bottom: 8px;\n  transition: all 0.2s;\n}\n\n.selected-number-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n\n.number-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.number-badge[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 20px;\n  font-weight: bold;\n  font-size: 16px;\n  min-width: 40px;\n  text-align: center;\n}\n\n.amount-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #28a745;\n}\n\n.delete-btn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.total-section[_ngcontent-%COMP%] {\n  border-top: 2px solid #dee2e6;\n  padding-top: 15px;\n}\n\n.total-display[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 18px;\n  color: #28a745;\n}\n\n\n\n.sales-history-container[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n}\n\n.sale-item[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 10px;\n  transition: all 0.2s;\n}\n\n.sale-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #007bff;\n  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.1);\n}\n\n.sale-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.sale-time[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 14px;\n}\n\n.sale-total[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.sale-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n\n.number-badge-small[_ngcontent-%COMP%] {\n  background: #6f42c1;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 15px;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n\n\n.blocked-alert[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  border: 1px solid #ffeaa7;\n  border-radius: 8px;\n  padding: 15px;\n  margin: 20px 0;\n  text-align: center;\n  color: #856404;\n}\n\n.blocked-alert[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #f39c12;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1050;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n\n.modal.show[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  pointer-events: auto;\n  z-index: 1055;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n  border: none;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #dee2e6;\n  background: #f8f9fa;\n  border-radius: 15px 15px 0 0;\n  padding: 20px;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #343a40;\n  margin-right: 40px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1rem;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  font-size: 28px;\n  font-weight: bold;\n  color: #6c757d;\n  border: none;\n  background: none;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1055;\n}\n\n.close[_ngcontent-%COMP%]:hover {\n  color: #343a40;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.calculator-container[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.calculator-display[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 3px solid #343a40;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.display-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #6c757d;\n  display: block;\n  margin-bottom: 10px;\n}\n\n.display-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  color: #343a40;\n  min-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.calculator-keypad[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.keypad-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n\n.keypad-btn[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 60px;\n  font-size: 24px;\n  font-weight: bold;\n  border: 2px solid #007bff;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #007bff;\n  cursor: pointer;\n  transition: all 0.1s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.keypad-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #007bff;\n  color: white;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 123, 255, 0.3);\n}\n\n.keypad-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(0.95);\n  background: #0056b3;\n  transition: transform 0.05s ease;\n}\n\n.keypad-btn[_ngcontent-%COMP%]:disabled {\n  background: #e9ecef;\n  color: #6c757d;\n  border-color: #dee2e6;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n  opacity: 0.6;\n}\n\n.keypad-clear[_ngcontent-%COMP%] {\n  background: #dc3545;\n  border-color: #dc3545;\n  color: white;\n}\n\n.keypad-clear[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n  border-color: #bd2130;\n}\n\n.keypad-accept[_ngcontent-%COMP%] {\n  background: #28a745;\n  border-color: #28a745;\n  color: white;\n  font-size: 16px;\n}\n\n.keypad-accept[_ngcontent-%COMP%]:hover {\n  background: #218838;\n  border-color: #1e7e34;\n}\n\n\n\n.confirmation-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px 20px;\n}\n\n.confirmation-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 3px solid #28a745;\n  border-radius: 15px;\n  padding: 30px;\n  margin: 0 auto;\n  max-width: 300px;\n}\n\n.number-display-large[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: bold;\n  color: #007bff;\n  margin-bottom: 20px;\n  background: white;\n  border: 2px solid #007bff;\n  border-radius: 10px;\n  padding: 20px;\n}\n\n.amount-display[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #28a745;\n  margin-bottom: 30px;\n  background: white;\n  border: 2px solid #28a745;\n  border-radius: 10px;\n  padding: 15px;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 15px 30px;\n  font-size: 18px;\n  font-weight: bold;\n  border-radius: 10px;\n}\n\n\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1040;\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n\n\n.modal-dialog[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n.modal[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.modal.show[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .col-md-4[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n    margin-bottom: 10px;\n  }\n  .d-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .d-flex.justify-content-between[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n  .text-right[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .calculator-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .keypad-btn[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 50px;\n    font-size: 20px;\n  }\n  .display-value[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .number-display-large[_ngcontent-%COMP%] {\n    font-size: 40px;\n    padding: 15px;\n  }\n  .amount-display[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0xvdGVyaWElMjB2MS9sb3RlcmlhL3NyYy9hcHAvY29tcG9uZW50cy9zdWN1cnNhbC9zdWN1cnNhbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdWN1cnNhbC9zdWN1cnNhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FERUY7O0FDQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QURFRjtBQ0FFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBREVKO0FDQUk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QURFTjtBQ0VFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBREFKO0FDR0U7RUFDRSxtQkFBQTtBRERKO0FDR0k7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURETjtBQ0dNO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FERFI7QUNLSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBREhOO0FDS007RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtBREhSO0FDTU07RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FESlI7QUNTRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QURQSjtBQ1NJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FEUE47QUNVSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBRFJOO0FDVU07RUFDRSx5QkFBQTtBRFJSO0FDWUk7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QURWTjtBQ1lNO0VBQ0UseUJBQUE7QURWUjtBQ2NJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FEWk47QUNjTTtFQUNFLHlCQUFBO0FEWlI7QUNnQkk7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRGROO0FDZ0JNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FEZFI7QUNrQkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QURoQk47O0FDcUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBRGxCRjs7QUNxQkE7RUFDRTtJQUFLLHlCQUFBO0VEakJMO0FBQ0Y7QUNtQkE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FEakJGO0FDbUJFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FEakJKOztBQ3FCQTtFQUNFLHlCQUFBO0FEbEJGOztBQ3FCQTtFQUNFLHlCQUFBO0FEbEJGOztBQ3FCQTtFQUNFLGtCQUFBO0FEbEJGOztBQ3FCQTtFQUNFLGlCQUFBO0FEbEJGOztBQ3FCQTtFQUNFLGFBQUE7QURsQkY7O0FDcUJBO0VBQ0UsOEJBQUE7QURsQkY7O0FDcUJBO0VBQ0UsbUJBQUE7QURsQkY7O0FDcUJBO0VBQVEsa0JBQUE7QURqQlI7O0FDa0JBO0VBQVEsZ0JBQUE7QURkUjs7QUNlQTtFQUFRLGtCQUFBO0FEWFI7O0FDWUE7RUFBUSxzQkFBQTtBRFJSOztBQ1NBO0VBQVEscUJBQUE7QURMUjs7QUNNQTtFQUFRLG1CQUFBO0FERlI7O0FDSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURERjs7QUNJQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEREY7O0FDSUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURERjs7QUNJQTtFQUNFLGFBQUE7QURERjs7QUNJQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRERGOztBQ0lBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FEREY7O0FDS0E7RUFDRTtJQUNFLGFBQUE7RURGRjtFQ0tBOztJQUVFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RURIRjtFQ01BO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0VESkY7RUNNRTtJQUNFLG9CQUFBO0VESko7RUNRQTtJQUNFLGdCQUFBO0VETkY7QUFDRjtBQ1VBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBRFJGOztBQ1lBO0VBQ0UscUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURURjs7QUNhQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QURWRjs7QUNjQTtFQUNFLDhCQUFBO0FEWEY7O0FDY0E7RUFDRTtJQUFPLFVBQUE7SUFBWSw0QkFBQTtFRFRuQjtFQ1VBO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VETmpCO0FBQ0Y7QUNRQSxxQ0FBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QURORjs7QUNTQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURORjs7QUNTQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBRE5GOztBQ1NBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRE5GOztBQ1NBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdDQUFBO0FETkY7O0FDU0E7RUFDRSx3QkFBQTtFQUNBLHdDQUFBO0FETkY7O0FDU0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FETkY7O0FDU0E7RUFDRSxtQkFBQTtBRE5GOztBQ1NBO0VBQ0UsbUJBQUE7QURORjs7QUNTQTtFQUNFLG1CQUFBO0FETkY7O0FDU0E7RUFDRSxtQkFBQTtBRE5GOztBQ1NBLHVDQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURORjs7QUNTQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FETkY7O0FDU0E7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FETkY7O0FDU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FETkY7O0FDU0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FETkY7O0FDU0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FETkY7O0FDU0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FETkY7O0FDU0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FETkY7O0FDU0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURORjs7QUNTQSxxQ0FBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBRE5GOztBQ1NBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURORjs7QUNTQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw0Q0FBQTtBRE5GOztBQ1NBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRE5GOztBQ1NBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QURORjs7QUNTQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURORjs7QUNTQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBRE5GOztBQ1NBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRE5GOztBQ1NBLHVCQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRE5GOztBQ1NBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FETkY7O0FDU0Esd0NBQUE7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRE5GOztBQ1NBO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FETkY7O0FDU0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QURORjs7QUNTQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtBRE5GOztBQ1NBO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBRE5GOztBQ1NBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FETkY7O0FDU0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBRE5GOztBQ1NBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QURORjs7QUNTQTtFQUNFLGNBQUE7QURORjs7QUNTQTtFQUNFLGFBQUE7QURORjs7QUNTQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QURORjs7QUNTQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FETkY7O0FDU0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FETkY7O0FDU0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRE5GOztBQ1NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBRE5GOztBQ1NBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBRE5GOztBQ1NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBRE5GOztBQ1NBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtBRE5GOztBQ1NBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FETkY7O0FDU0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRE5GOztBQ1NBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QURORjs7QUNTQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QURORjs7QUNTQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRE5GOztBQ1NBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBRE5GOztBQ1NBLDBCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FETkY7O0FDU0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FETkY7O0FDU0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FETkY7O0FDU0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FETkY7O0FDU0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FETkY7O0FDU0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FETkY7O0FDU0EsMkJBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FETkY7O0FDU0E7RUFDRSxVQUFBO0FETkY7O0FDU0Esd0JBQUE7QUFDQTtFQUNFLG9CQUFBO0FETkY7O0FDU0E7RUFDRSxvQkFBQTtBRE5GOztBQ1NBO0VBQ0Usb0JBQUE7QURORjs7QUNTQSxlQUFBO0FBQ0E7RUFDRTtJQUNFLGFBQUE7RURORjtFQ1NBOztJQUVFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RURQRjtFQ1VBO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0VEUkY7RUNVRTtJQUNFLG9CQUFBO0VEUko7RUNZQTtJQUNFLGdCQUFBO0VEVkY7RUNhQTtJQUNFLGFBQUE7RURYRjtFQ2NBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VEWkY7RUNlQTtJQUNFLGVBQUE7RURiRjtFQ2dCQTtJQUNFLGVBQUE7SUFDQSxhQUFBO0VEZEY7RUNpQkE7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFRGZGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jYXJkIGgzIHtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA3YmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jYXJkIGgzIGkge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4uY2FyZCAuYWxlcnQge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY2FyZCAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY2FyZCAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNTU1O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhcmQgLmZvcm0tZ3JvdXAgbGFiZWwgaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogIzAwN2JmZjtcbn1cbi5jYXJkIC5mb3JtLWdyb3VwIGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcbn1cbi5jYXJkIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG59XG4uY2FyZCAuZm9ybS1ncm91cCBpbnB1dDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uY2FyZCAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbn1cbi5jYXJkIC5idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uY2FyZCAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmQgLmJ0bi5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG59XG4uY2FyZCAuYnRuLmJ0bi1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmQgLmJ0bi5idG4tc3VjY2Vzczpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQ7XG59XG4uY2FyZCAuYnRuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZCAuYnRuLmJ0bi1kYW5nZXI6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgyMzMzO1xufVxuLmNhcmQgLmJ0bi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmNhcmQgLmJ0bi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcmQgLmJ0bi5idG4tc20ge1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zcGlubmVyLWJvcmRlciB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJvcmRlcjogMC4yNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW5uZXItYm9yZGVyIDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGlubmVyLWJvcmRlciB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMjVlbSAwLjRlbTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5iYWRnZS5iYWRnZS1pbmZvIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XG59XG5cbi50ZXh0LXN1Y2Nlc3Mge1xuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1kYW5nZXIge1xuICBjb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubXQtMiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLm10LTMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ubXQtNCB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLm1iLTEge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4ubWItMiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLm1iLTMge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5jb2wtbWQtNCB7XG4gIGZsZXg6IDAgMCAzMy4zMzMzMzMlO1xuICBtYXgtd2lkdGg6IDMzLjMzMzMzMyU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmNvbC1tZC02IHtcbiAgZmxleDogMCAwIDUwJTtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkLXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGNvbG9yOiAjNjY2O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuY29sLW1kLTQsXG4gIC5jb2wtbWQtNiB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmQtZmxleCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbiAgLmQtZmxleC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbiAgLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbi5sb2FkaW5nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLm51bWJlci1kaXNwbGF5IHtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3RhdHVzLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZhZGUtaW4ge1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UtaW47XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuLyogRXN0aWxvcyBwYXJhIGVsIHRlY2xhZG8gbnVtw4PCqXJpY28gKi9cbi5udW1lcmljLWtleXBhZCB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ua2V5cGFkLWRpc3BsYXkge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA3YmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ua2V5cGFkLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5rZXlwYWQtYnRuIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ua2V5cGFkLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDU2YjM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmtleXBhZC1idG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ua2V5cGFkLWFjdGlvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTBweDtcbn1cblxuLmtleXBhZC1jbGVhciB7XG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XG59XG5cbi5rZXlwYWQtY2xlYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYzgyMzMzO1xufVxuXG4ua2V5cGFkLW9rIHtcbiAgYmFja2dyb3VuZDogIzI4YTc0NTtcbn1cblxuLmtleXBhZC1vazpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMTg4Mzg7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBuw4PCum1lcm9zIHNlbGVjY2lvbmFkb3MgKi9cbi5zZWxlY3RlZC1udW1iZXJzLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uc2VsZWN0ZWQtbnVtYmVyLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uc2VsZWN0ZWQtbnVtYmVyLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICBib3JkZXItY29sb3I6ICNhZGI1YmQ7XG59XG5cbi5udW1iZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbn1cblxuLm51bWJlci1iYWRnZSB7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYW1vdW50LXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjhhNzQ1O1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50b3RhbC1zZWN0aW9uIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4udG90YWwtZGlzcGxheSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI4YTc0NTtcbn1cblxuLyogRXN0aWxvcyBwYXJhIGhpc3RvcmlhbCBkZSB2ZW50YXMgKi9cbi5zYWxlcy1oaXN0b3J5LWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uc2FsZS1pdGVtIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLnNhbGUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XG59XG5cbi5zYWxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uc2FsZS10aW1lIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNhbGUtdG90YWwge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNhbGUtbnVtYmVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA1cHg7XG59XG5cbi5udW1iZXItYmFkZ2Utc21hbGwge1xuICBiYWNrZ3JvdW5kOiAjNmY0MmMxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIEFsZXJ0YXMgZGUgYmxvcXVlbyAqL1xuLmJsb2NrZWQtYWxlcnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmM2NkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZlYWE3O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODU2NDA0O1xufVxuXG4uYmxvY2tlZC1hbGVydCAuZmFzIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGNvbG9yOiAjZjM5YzEyO1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgbW9kYWxlcyBkZSBjYWxjdWxhZG9yYSAqL1xuLm1vZGFsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDUwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tb2RhbC5zaG93IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgei1pbmRleDogMTA1NTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM0M2E0MDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDU1O1xufVxuXG4uY2xvc2U6aG92ZXIge1xuICBjb2xvcjogIzM0M2E0MDtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uY2FsY3VsYXRvci1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNhbGN1bGF0b3ItZGlzcGxheSB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMzNDNhNDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpc3BsYXktbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5kaXNwbGF5LXZhbHVlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzNDNhNDA7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FsY3VsYXRvci1rZXlwYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbi5rZXlwYWQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmtleXBhZC1idG4ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA3YmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzAwN2JmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5rZXlwYWQtYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpO1xufVxuXG4ua2V5cGFkLWJ0bjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICBiYWNrZ3JvdW5kOiAjMDA1NmIzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNXMgZWFzZTtcbn1cblxuLmtleXBhZC1idG46ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLmtleXBhZC1jbGVhciB7XG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ua2V5cGFkLWNsZWFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2M4MjMzMztcbiAgYm9yZGVyLWNvbG9yOiAjYmQyMTMwO1xufVxuXG4ua2V5cGFkLWFjY2VwdCB7XG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5rZXlwYWQtYWNjZXB0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzIxODgzODtcbiAgYm9yZGVyLWNvbG9yOiAjMWU3ZTM0O1xufVxuXG4vKiBNb2RhbCBkZSBjb25maXJtYWNpw4PCs24gKi9cbi5jb25maXJtYXRpb24tY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG59XG5cbi5jb25maXJtYXRpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMyOGE3NDU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4ubnVtYmVyLWRpc3BsYXktbGFyZ2Uge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwN2JmZjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDdiZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5hbW91bnQtZGlzcGxheSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzI4YTc0NTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmNvbmZpcm1hdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMgLmJ0biB7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogQmFja2Ryb3AgcGVyc29uYWxpemFkbyAqL1xuLm1vZGFsLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogMTA0MDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG59XG5cbi5tb2RhbC1iYWNrZHJvcC5zaG93IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRml4IHBhcmEgY2xpY2tlYWJsZSAqL1xuLm1vZGFsLWRpYWxvZyB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4ubW9kYWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm1vZGFsLnNob3cge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmNvbC1tZC00LFxuICAuY29sLW1kLTYge1xuICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5kLWZsZXgge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICB9XG4gIC5kLWZsZXguanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIC50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5jYWxjdWxhdG9yLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAua2V5cGFkLWJ0biB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuZGlzcGxheS12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIC5udW1iZXItZGlzcGxheS1sYXJnZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLmFtb3VudC1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxufSIsIi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgaDMge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDdiZmY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbGVydCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIFxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgXHJcbiAgICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMCwxMjMsMjU1LDAuMjUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDVweDtcclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgfVxyXG5cclxuICAgICYuYnRuLXByaW1hcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5idG4tc3VjY2VzcyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmJ0bi1kYW5nZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgyMzMzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5idG4tb3V0bGluZS1wcmltYXJ5IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcclxuICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBcclxuICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmJ0bi1zbSB7XHJcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zcGlubmVyLWJvcmRlciB7XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJvcmRlcjogMC4yNWVtIHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IHNwaW5uZXItYm9yZGVyIDAuNzVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGlubmVyLWJvcmRlciB7XHJcbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjRlbTtcclxuICBmb250LXNpemU6IDc1JTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG5cclxuICAmLmJhZGdlLWluZm8ge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQtc3VjY2VzcyB7XHJcbiAgY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtZGFuZ2VyIHtcclxuICBjb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZC1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm10LTIgeyBtYXJnaW4tdG9wOiAwLjVyZW07IH1cclxuLm10LTMgeyBtYXJnaW4tdG9wOiAxcmVtOyB9XHJcbi5tdC00IHsgbWFyZ2luLXRvcDogMS41cmVtOyB9XHJcbi5tYi0xIHsgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTsgfVxyXG4ubWItMiB7IG1hcmdpbi1ib3R0b206IDAuNXJlbTsgfVxyXG4ubWItMyB7IG1hcmdpbi1ib3R0b206IDFyZW07IH1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG59XHJcblxyXG4uY29sLW1kLTQge1xyXG4gIGZsZXg6IDAgMCAzMy4zMzMzMzMlO1xyXG4gIG1heC13aWR0aDogMzMuMzMzMzMzJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLmNvbC1tZC02IHtcclxuICBmbGV4OiAwIDAgNTAlO1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi8vIFJlc3BvbnNpdmUgZGVzaWduXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbC1tZC00LFxyXG4gIC5jb2wtbWQtNiB7XHJcbiAgICBmbGV4OiAwIDAgMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kLWZsZXgge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIFxyXG4gICAgJi5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTG9hZGluZyBvdmVybGF5XHJcbi5sb2FkaW5nLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4vLyBFbmhhbmNlZCBudW1iZXIgZGlzcGxheVxyXG4ubnVtYmVyLWRpc3BsYXkge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4vLyBTdGF0dXMgaW5kaWNhdG9yc1xyXG4uc3RhdHVzLWluZGljYXRvciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vLyBTdWNjZXNzIGFuaW1hdGlvbnNcclxuLmZhZGUtaW4ge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG5cclxuLyogRXN0aWxvcyBwYXJhIGVsIHRlY2xhZG8gbnVtw4PCqXJpY28gKi9cclxuLm51bWVyaWMta2V5cGFkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ua2V5cGFkLWRpc3BsYXkge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwN2JmZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5rZXlwYWQtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ua2V5cGFkLWJ0biB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmtleXBhZC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDU2YjM7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5rZXlwYWQtYnRuOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5rZXlwYWQtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ua2V5cGFkLWNsZWFyIHtcclxuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG59XHJcblxyXG4ua2V5cGFkLWNsZWFyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYzgyMzMzO1xyXG59XHJcblxyXG4ua2V5cGFkLW9rIHtcclxuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG59XHJcblxyXG4ua2V5cGFkLW9rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjE4ODM4O1xyXG59XHJcblxyXG4vKiBFc3RpbG9zIHBhcmEgbsODwrptZXJvcyBzZWxlY2Npb25hZG9zICovXHJcbi5zZWxlY3RlZC1udW1iZXJzLWNvbnRhaW5lciB7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtbnVtYmVyLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtbnVtYmVyLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG4ubnVtYmVyLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5udW1iZXItYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1pbi13aWR0aDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbW91bnQtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyOGE3NDU7XHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udG90YWwtc2VjdGlvbiB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZWUyZTY7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi50b3RhbC1kaXNwbGF5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyOGE3NDU7XHJcbn1cclxuXHJcbi8qIEVzdGlsb3MgcGFyYSBoaXN0b3JpYWwgZGUgdmVudGFzICovXHJcbi5zYWxlcy1oaXN0b3J5LWNvbnRhaW5lciB7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnNhbGUtaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbi5zYWxlLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4uc2FsZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uc2FsZS10aW1lIHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zYWxlLXRvdGFsIHtcclxuICBjb2xvcjogIzI4YTc0NTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5zYWxlLW51bWJlcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogNXB4O1xyXG59XHJcblxyXG4ubnVtYmVyLWJhZGdlLXNtYWxsIHtcclxuICBiYWNrZ3JvdW5kOiAjNmY0MmMxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBBbGVydGFzIGRlIGJsb3F1ZW8gKi9cclxuLmJsb2NrZWQtYWxlcnQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmYzY2Q7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZWFhNztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM4NTY0MDQ7XHJcbn1cclxuXHJcbi5ibG9ja2VkLWFsZXJ0IC5mYXMge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGNvbG9yOiAjZjM5YzEyO1xyXG59XHJcblxyXG4vKiBFc3RpbG9zIHBhcmEgbW9kYWxlcyBkZSBjYWxjdWxhZG9yYSAqL1xyXG4ubW9kYWwge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB6LWluZGV4OiAxMDUwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbC5zaG93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICB6LWluZGV4OiAxMDU1O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDsgLy8gRXNwYWNpbyBwYXJhIGxhIFhcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTVweDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTA1NTtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyIHtcclxuICBjb2xvcjogIzM0M2E0MDtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5jYWxjdWxhdG9yLWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FsY3VsYXRvci1kaXNwbGF5IHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMzNDNhNDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGlzcGxheS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5kaXNwbGF5LXZhbHVlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYWxjdWxhdG9yLWtleXBhZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuLmtleXBhZC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ua2V5cGFkLWJ0biB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA3YmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTsgLy8gTcODwqFzIHLDg8KhcGlkb1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ua2V5cGFkLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyAvLyBNZW5vciBkZXNwbGF6YW1pZW50b1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4ua2V5cGFkLWJ0bjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IC8vIEVmZWN0byBkZSBwcmVzacODwrNuXHJcbiAgYmFja2dyb3VuZDogIzAwNTZiMztcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wNXMgZWFzZTtcclxufVxyXG5cclxuLmtleXBhZC1idG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4ua2V5cGFkLWNsZWFyIHtcclxuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5rZXlwYWQtY2xlYXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjODIzMzM7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYmQyMTMwO1xyXG59XHJcblxyXG4ua2V5cGFkLWFjY2VwdCB7XHJcbiAgYmFja2dyb3VuZDogIzI4YTc0NTtcclxuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmtleXBhZC1hY2NlcHQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyMTg4Mzg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWU3ZTM0O1xyXG59XHJcblxyXG4vKiBNb2RhbCBkZSBjb25maXJtYWNpw4PCs24gKi9cclxuLmNvbmZpcm1hdGlvbi1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMjhhNzQ1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ubnVtYmVyLWRpc3BsYXktbGFyZ2Uge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDdiZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uYW1vdW50LWRpc3BsYXkge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzI4YTc0NTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyOGE3NDU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tYnV0dG9ucyAuYnRuIHtcclxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEJhY2tkcm9wIHBlcnNvbmFsaXphZG8gKi9cclxuLm1vZGFsLWJhY2tkcm9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB6LWluZGV4OiAxMDQwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5tb2RhbC1iYWNrZHJvcC5zaG93IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBGaXggcGFyYSBjbGlja2VhYmxlICovXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29sLW1kLTQsXHJcbiAgLmNvbC1tZC02IHtcclxuICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmQtZmxleCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgXHJcbiAgICAmLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcclxuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYWxjdWxhdG9yLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAua2V5cGFkLWJ0biB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmRpc3BsYXktdmFsdWUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuICBcclxuICAubnVtYmVyLWRpc3BsYXktbGFyZ2Uge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmFtb3VudC1kaXNwbGF5IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class PrintService {
  constructor() {}
  // Generar PDF térmico para venta
  generateThermalReceipt(sale, details) {
    // Configurar PDF para impresora térmica de 80mm
    const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]({
      orientation: 'portrait',
      unit: 'mm',
      format: [80, 200] // Ancho 80mm, altura variable
    });
    // Configurar fuente
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    let yPosition = 10;
    const lineHeight = 4;
    const leftMargin = 5;
    const rightMargin = 75;
    // Título
    pdf.setFontSize(12);
    pdf.text('RECIBO DE VENTA', 40, yPosition, {
      align: 'center'
    });
    yPosition += lineHeight * 2;
    // Línea separadora
    pdf.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += lineHeight;
    // Información general
    pdf.setFontSize(9);
    pdf.text(`Fecha: ${new Date(sale.fecha).toLocaleString()}`, leftMargin, yPosition);
    yPosition += lineHeight;
    pdf.text(`Sucursal: ${sale.sucursal}`, leftMargin, yPosition);
    yPosition += lineHeight;
    pdf.text(`Sorteo: ${sale.sorteo.toUpperCase()}`, leftMargin, yPosition);
    yPosition += lineHeight * 2;
    // Línea separadora
    pdf.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += lineHeight;
    // Encabezado de números
    pdf.setFontSize(8);
    pdf.text('NÚMEROS JUGADOS:', leftMargin, yPosition);
    yPosition += lineHeight;
    // Línea separadora
    pdf.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += lineHeight;
    // Detalles de números
    pdf.setFontSize(9);
    for (const detail of details) {
      const numeroText = `Num: ${detail.numero.toString().padStart(2, '0')}`;
      const montoText = `L. ${detail.monto.toFixed(2)}`;
      pdf.text(numeroText, leftMargin, yPosition);
      pdf.text(montoText, rightMargin, yPosition, {
        align: 'right'
      });
      yPosition += lineHeight;
    }
    // Línea separadora
    yPosition += lineHeight;
    pdf.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += lineHeight;
    // Total
    pdf.setFontSize(11);
    pdf.text('TOTAL:', leftMargin, yPosition);
    pdf.text(`L. ${sale.total.toFixed(2)}`, rightMargin, yPosition, {
      align: 'right'
    });
    yPosition += lineHeight * 2;
    // Línea separadora
    pdf.line(leftMargin, yPosition, rightMargin, yPosition);
    yPosition += lineHeight;
    // Mensaje final
    pdf.setFontSize(8);
    pdf.text('¡Gracias por su compra!', 40, yPosition, {
      align: 'center'
    });
    yPosition += lineHeight;
    pdf.text('¡Mucha suerte!', 40, yPosition, {
      align: 'center'
    });
    yPosition += lineHeight * 2;
    // Código de venta (ID)
    pdf.setFontSize(7);
    pdf.text(`ID: ${sale.id}`, 40, yPosition, {
      align: 'center'
    });
    // Ajustar altura del PDF
    const finalHeight = yPosition + 10;
    pdf.internal.pageSize.height = finalHeight;
    // Guardar o imprimir
    const fileName = `recibo_${sale.sorteo}_${new Date().getTime()}.pdf`;
    pdf.save(fileName);
    // También abrir en ventana nueva para imprimir
    window.open(pdf.output('bloburl'), '_blank');
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
  static {
    this.ɵfac = function PrintService_Factory(t) {
      return new (t || PrintService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
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
  // Workaround functions para la restricción de número 0 en la BD
  convertNumeroToBD(numero) {
    // Convertir 0 a 100 para evitar la restricción de la BD
    return numero === 0 ? 100 : numero;
  }
  convertNumeroFromBD(numero) {
    // Convertir 100 de vuelta a 0 para mostrar al usuario
    return numero === 100 ? 0 : numero;
  }
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
  createSale(sale) {
    var _this8 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const saleData = {
          user_id: sale.userId,
          sucursal: sale.sucursal,
          sorteo: sale.sorteo,
          fecha: sale.fecha,
          total: sale.total,
          created_at: new Date().toISOString()
        };
        const {
          data,
          error
        } = yield _this8.supabase.from('sales').insert([saleData]).select().single();
        if (error) throw error;
        return data.id;
      } catch (error) {
        console.error('Error creando venta:', error);
        throw error;
      }
    })();
  }
  createSaleDetail(detail) {
    var _this9 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const detailData = {
          sale_id: detail.saleId,
          numero: _this9.convertNumeroToBD(detail.numero),
          monto: detail.monto
        };
        console.log('Creando detalle con número:', detail.numero, '-> BD:', detailData.numero);
        const {
          data,
          error
        } = yield _this9.supabase.from('sale_details').insert([detailData]).select().single();
        if (error) throw error;
        return data.id;
      } catch (error) {
        console.error('Error creando detalle de venta:', error);
        throw error;
      }
    })();
  }
  getSalesByDateAndSorteo(fecha, sorteo) {
    var _this0 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const startOfDay = new Date(fecha);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(fecha);
        endOfDay.setHours(23, 59, 59, 999);
        let query = _this0.supabase.from('sales').select('*').gte('fecha', startOfDay.toISOString()).lte('fecha', endOfDay.toISOString()).order('created_at', {
          ascending: false
        });
        if (sorteo) {
          query = query.eq('sorteo', sorteo);
        }
        const {
          data,
          error
        } = yield query;
        if (error) throw error;
        return data.map(sale => ({
          id: sale.id,
          userId: sale.user_id,
          sucursal: sale.sucursal,
          sorteo: sale.sorteo,
          fecha: new Date(sale.fecha),
          total: sale.total,
          createdAt: new Date(sale.created_at)
        }));
      } catch (error) {
        console.error('Error obteniendo ventas:', error);
        return [];
      }
    })();
  }
  getSaleDetails(saleId) {
    var _this1 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this1.supabase.from('sale_details').select('*').eq('sale_id', saleId);
        if (error) throw error;
        return data.map(detail => ({
          id: detail.id,
          saleId: detail.sale_id,
          numero: _this1.convertNumeroFromBD(detail.numero),
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
    var _this10 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const sorteoId = `${sorteo.fecha.toDateString()}-${sorteo.sorteo}`;
        // Workaround: Convertir número 0 a 100 para la BD
        const numeroGanadorParaBD = sorteo.numeroGanador === 0 ? 100 : sorteo.numeroGanador;
        const sorteoData = {
          id: sorteoId,
          fecha: sorteo.fecha.toISOString(),
          sorteo: sorteo.sorteo,
          hora_cierre: sorteo.horaCierre.toISOString(),
          numero_ganador: numeroGanadorParaBD,
          factor_multiplicador: sorteo.factorMultiplicador,
          total_vendido: sorteo.totalVendido,
          total_pagado: sorteo.totalPagado,
          ganancia_neta: sorteo.gananciaNeta,
          cerrado: sorteo.cerrado
        };
        const {
          data,
          error
        } = yield _this10.supabase.from('sorteos').upsert([sorteoData]).select().single();
        if (error) throw error;
        return data.id;
      } catch (error) {
        console.error('Error creando/actualizando sorteo:', error);
        throw error;
      }
    })();
  }
  getSorteo(fecha, sorteo) {
    var _this11 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const sorteoId = `${fecha.toDateString()}-${sorteo}`;
        const {
          data,
          error
        } = yield _this11.supabase.from('sorteos').select('*').eq('id', sorteoId).single();
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
          // Workaround: Convertir número 100 de vuelta a 0 para mostrar como 00
          numeroGanador: data.numero_ganador === 100 ? 0 : data.numero_ganador,
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
    var _this12 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Workaround: Convertir número 0 a 100 para la BD
        const numeroParaBD = numeroGanador === 0 ? 100 : numeroGanador;
        const {
          error
        } = yield _this12.supabase.from('sorteos').update({
          numero_ganador: numeroParaBD,
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
    var _this13 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Obtener el sorteo
        const {
          data: sorteo,
          error: sorteoError
        } = yield _this13.supabase.from('sorteos').select('*').eq('id', sorteoId).single();
        if (sorteoError) throw sorteoError;
        if (!sorteo.numero_ganador) return;
        // Obtener todas las ventas del sorteo
        const {
          data: sales,
          error: salesError
        } = yield _this13.supabase.from('sales').select('*, sale_details(*)').eq('sorteo', sorteo.sorteo).gte('fecha', new Date(sorteo.fecha).toISOString().split('T')[0]).lt('fecha', new Date(new Date(sorteo.fecha).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
        if (salesError) throw salesError;
        // Calcular total vendido
        let totalVendido = 0;
        let totalPagado = 0;
        for (const sale of sales) {
          for (const detail of sale.sale_details) {
            totalVendido += detail.monto;
            // Si el número coincide con el ganador, calcular ganancia
            // Considerar tanto el número directo como la conversión 0 <-> 100
            const numeroDetalle = detail.numero === 100 ? 0 : detail.numero;
            const numeroGanador = sorteo.numero_ganador === 100 ? 0 : sorteo.numero_ganador;
            if (numeroDetalle === numeroGanador) {
              totalPagado += detail.monto * sorteo.factor_multiplicador;
            }
          }
        }
        const gananciaNeta = totalVendido - totalPagado;
        // Actualizar el sorteo con los cálculos
        const {
          error: updateError
        } = yield _this13.supabase.from('sorteos').update({
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