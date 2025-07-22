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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 205);
/* harmony import */ var _components_sucursal_sucursal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sucursal/sucursal.component */ 179);
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/admin.component */ 6273);
/* harmony import */ var _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-management/user-management.component */ 7885);
/* harmony import */ var _components_resumen_sorteos_resumen_sorteos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/resumen-sorteos/resumen-sorteos.component */ 2081);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/admin.guard */ 9153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);














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
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard]
}, {
  path: 'admin',
  component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__.AdminComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard, _guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__.AdminGuard]
}, {
  path: 'admin/users',
  component: _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_4__.UserManagementComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard, _guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__.AdminGuard]
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
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard, _guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__.AdminGuard],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes), _components_resumen_sorteos_resumen_sorteos_component__WEBPACK_IMPORTED_MODULE_5__.ResumenSorteosComponent]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _components_sucursal_sucursal_component__WEBPACK_IMPORTED_MODULE_2__.SucursalComponent, _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__.AdminComponent, _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_4__.UserManagementComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _components_resumen_sorteos_resumen_sorteos_component__WEBPACK_IMPORTED_MODULE_5__.ResumenSorteosComponent]
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 6214);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 714);
/* harmony import */ var _models_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/interfaces */ 4597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/supabase.service */ 9692);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ 7473);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/print.service */ 4389);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _resumen_sorteos_resumen_sorteos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resumen-sorteos/resumen-sorteos.component */ 2081);











function AdminComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sorteo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", sorteo_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](sorteo_r2.label);
  }
}
function AdminComponent_i_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 97);
  }
}
function AdminComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 99);
  }
}
function AdminComponent_i_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 97);
  }
}
function AdminComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 100);
  }
}
function AdminComponent_div_86_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 108)(2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 111)(9, "div", 112)(10, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Vendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 115)(15, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 116)(20, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Ganancia");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    const sorteo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](((tmp_9_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_9_0.numeroGanador) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Factor: ", ((tmp_10_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_10_0.factorMultiplicador) || 70, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", ((tmp_11_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_11_0.totalVendido == null ? null : tmp_11_0.totalVendido.toFixed(2)) || "0.00", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", ((tmp_12_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_12_0.totalPagado == null ? null : tmp_12_0.totalPagado.toFixed(2)) || "0.00", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("positive", (((tmp_13_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_13_0.gananciaNeta) || 0) > 0)("negative", (((tmp_14_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_14_0.gananciaNeta) || 0) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", ((tmp_15_0 = ctx_r3.getSorteoData(sorteo_r3)) == null ? null : tmp_15_0.gananciaNeta == null ? null : tmp_15_0.gananciaNeta.toFixed(2)) || "0.00", "");
  }
}
function AdminComponent_div_86_ng_template_11_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_86_ng_template_11_div_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Configurar Factores");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_86_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 119)(1, "div", 66)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "N\u00FAmero Ganador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_86_ng_template_11_div_0_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const sorteo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r3.winningNumbers[sorteo_r3.name], $event) || (ctx_r3.winningNumbers[sorteo_r3.name] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_div_86_ng_template_11_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const sorteo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.openFactorsModal(sorteo_r3.name, +ctx_r3.winningNumbers[sorteo_r3.name]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AdminComponent_div_86_ng_template_11_div_0_span_7_Template, 2, 0, "span", 122)(8, AdminComponent_div_86_ng_template_11_div_0_span_8_Template, 2, 0, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sorteo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.winningNumbers[sorteo_r3.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r3.winningNumbers[sorteo_r3.name] || ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
  }
}
function AdminComponent_div_86_ng_template_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Sorteo abierto - Esperando cierre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_86_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AdminComponent_div_86_ng_template_11_div_0_Template, 9, 5, "div", 117)(1, AdminComponent_div_86_ng_template_11_div_1_Template, 4, 0, "div", 118);
  }
  if (rf & 2) {
    const sorteo_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.isSorteoOpen(sorteo_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.isSorteoOpen(sorteo_r3));
  }
}
function AdminComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 101)(1, "div", 102)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 103)(5, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AdminComponent_div_86_div_10_Template, 24, 9, "div", 107)(11, AdminComponent_div_86_ng_template_11_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sorteo_r3 = ctx.$implicit;
    const setWinner_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](sorteo_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("open", ctx_r3.isSorteoOpen(sorteo_r3))("closed", !ctx_r3.isSorteoOpen(sorteo_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.isSorteoOpen(sorteo_r3) ? "Abierto" : "Cerrado", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](sorteo_r3.closeTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.hasSavedWinner(sorteo_r3))("ngIfElse", setWinner_r6);
  }
}
function AdminComponent_div_100_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 137)(1, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Aplicando filtros...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function AdminComponent_div_100_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 139)(1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 134)(12, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_div_100_div_17_Template_button_click_12_listener() {
      const sale_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.verDetalles(sale_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_div_100_div_17_Template_button_click_14_listener() {
      const sale_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.reprintReceipt(sale_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sale_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.formatDateTime(sale_r8.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](sale_r8.sucursal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](sale_r8.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", sale_r8.total.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](sale_r8.numeroRecibo || sale_r8.id.slice(-6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r3.isLoadingFilters);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r3.isLoadingFilters);
  }
}
function AdminComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AdminComponent_div_100_div_1_Template, 5, 0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 127)(3, "div", 128)(4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Sorteo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Recibo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, AdminComponent_div_100_div_17_Template, 16, 7, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.isLoadingFilters);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("loading", ctx_r3.isLoadingFilters);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.sales)("ngForTrackBy", ctx_r3.trackBySale);
  }
}
function AdminComponent_ng_template_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "No hay ventas para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Ajusta los filtros para ver diferentes resultados");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 66)(1, "label", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Contrase\u00F1a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_124_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r3.userFormData.password, $event) || (ctx_r3.userFormData.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.userFormData.password);
  }
}
function AdminComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 66)(1, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Sucursal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_133_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r3.userFormData.sucursal, $event) || (ctx_r3.userFormData.sucursal = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.userFormData.sucursal);
  }
}
function AdminComponent_div_183_div_32_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 160)(1, "div", 161)(2, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const detail_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](detail_r11.numero.toString().padStart(2, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", detail_r11.monto.toFixed(2), "");
  }
}
function AdminComponent_div_183_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 155)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " N\u00FAmeros Jugados");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AdminComponent_div_183_div_32_div_5_Template, 6, 2, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 158)(7, "div", 159)(8, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Cantidad de n\u00FAmeros:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 159)(13, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Total apostado:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.selectedSaleDetails)("ngForTrackBy", ctx_r3.trackBySaleDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.selectedSaleDetails.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", ctx_r3.getTotalNumeros().toFixed(2), "");
  }
}
function AdminComponent_div_183_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "No se encontraron n\u00FAmeros para esta venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_183_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 65)(1, "div", 149)(2, "div", 150)(3, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Recibo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 150)(8, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Correlativo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 150)(13, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Fecha:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 150)(18, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Sucursal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 150)(23, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Sorteo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 152)(28, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, AdminComponent_div_183_div_32_Template, 17, 4, "div", 153)(33, AdminComponent_div_183_div_33_Template, 4, 0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.selectedSaleForDetail.numeroRecibo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.selectedSaleForDetail.correlativo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.formatDateTime(ctx_r3.selectedSaleForDetail.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.selectedSaleForDetail.sucursal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.selectedSaleForDetail.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", ctx_r3.selectedSaleForDetail.total.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.selectedSaleDetails.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.selectedSaleDetails.length === 0);
  }
}
function AdminComponent_div_191_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 180)(1, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.currentSorteoForFactors.sorteo.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("N\u00FAmero Ganador: ", ctx_r3.currentSorteoForFactors.winningNumber.padStart(2, "0"), "");
  }
}
function AdminComponent_div_191_div_14_div_1_div_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r14 = ctx.$implicit;
    const last_r15 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", user_r14.email, "", !last_r15 ? ", " : "", " ");
  }
}
function AdminComponent_div_191_div_14_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 194)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Usuarios: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AdminComponent_div_191_div_14_div_1_div_5_span_3_Template, 2, 2, "span", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sucursal_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.getUsersBySucursal(sucursal_r16));
  }
}
function AdminComponent_div_191_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 185)(1, "div", 186)(2, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AdminComponent_div_191_div_14_div_1_div_5_Template, 4, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 190)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Factor (ej: 70)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 191)(10, "input", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function AdminComponent_div_191_div_14_div_1_Template_input_input_10_listener($event) {
      const sucursal_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.updateFactorForSucursal(sucursal_r16, $event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const sucursal_r16 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", sucursal_r16, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.hasSucursalUsers(sucursal_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r3.factoresPorSucursal[sucursal_r16] || 75);
  }
}
function AdminComponent_div_191_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AdminComponent_div_191_div_14_div_1_Template, 13, 3, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.getUniqueSucursales());
  }
}
function AdminComponent_div_191_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Cargando configuraci\u00F3n de sucursales...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_191_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "No se encontraron sucursales activas");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_191_i_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 97);
  }
}
function AdminComponent_div_191_i_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 24);
  }
}
function AdminComponent_div_191_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_div_191_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.closeFactorsModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_div_191_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 60)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Configurar Factores por Sucursal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AdminComponent_div_191_div_6_Template, 5, 2, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_div_191_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.closeFactorsModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 65)(10, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Configure el factor multiplicador para cada sucursal. Este factor determinar\u00E1 cu\u00E1nto se paga por cada n\u00FAmero ganador.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AdminComponent_div_191_div_14_Template, 2, 1, "div", 173)(15, AdminComponent_div_191_div_15_Template, 4, 0, "div", 174)(16, AdminComponent_div_191_div_16_Template, 4, 0, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 79)(18, "button", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_div_191_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.closeFactorsModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_div_191_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.confirmWinningNumberWithFactors());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, AdminComponent_div_191_i_22_Template, 1, 0, "i", 178)(23, AdminComponent_div_191_i_23_Template, 1, 0, "i", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.currentSorteoForFactors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.sucursalesFactores.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.isLoading && ctx_r3.sucursalesFactores.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading && ctx_r3.sucursalesFactores.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.isLoading ? "Estableciendo..." : "Establecer Ganador", " ");
  }
}
function AdminComponent_div_192_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 139)(1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sucursal_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](sucursal_r18.sucursal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", sucursal_r18.factor_multiplicador, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", (sucursal_r18.total_vendido == null ? null : sucursal_r18.total_vendido.toFixed(2)) || "0.00", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", (sucursal_r18.total_pagado == null ? null : sucursal_r18.total_pagado.toFixed(2)) || "0.00", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("positive", (sucursal_r18.ganancia_neta || 0) > 0)("negative", (sucursal_r18.ganancia_neta || 0) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" L ", (sucursal_r18.ganancia_neta == null ? null : sucursal_r18.ganancia_neta.toFixed(2)) || "0.00", " ");
  }
}
function AdminComponent_div_192_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_div_192_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.closeResumenModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_div_192_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 60)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Resumen de Cierre por Sucursales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_div_192_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.closeResumenModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 65)(9, "div", 180)(10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 200)(13, "div", 128)(14, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Factor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Total Vendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Total Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Ganancia Neta");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, AdminComponent_div_192_div_24_Template, 11, 9, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 206)(26, "div", 130)(27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "TOTAL GENERAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 202)(32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 203)(35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 204)(38, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 79)(41, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_div_192_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.closeResumenModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "i", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Entendido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.currentSorteoForResumen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.resumenSucursales);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", ctx_r3.getTotalVendidoGeneral(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", ctx_r3.getTotalPagadoGeneral(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("positive", ctx_r3.getGananciaTotalGeneral() > 0)("negative", ctx_r3.getGananciaTotalGeneral() < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", ctx_r3.getGananciaTotalGeneral().toFixed(2), "");
  }
}
class AdminComponent {
  constructor(supabaseService, notificationService, printService, router, cdr) {
    this.supabaseService = supabaseService;
    this.notificationService = notificationService;
    this.printService = printService;
    this.router = router;
    this.cdr = cdr;
    this.currentUser = null;
    this.sorteos = _models_interfaces__WEBPACK_IMPORTED_MODULE_1__.SORTEO_SCHEDULES; // Usar directamente las interfaces en lugar de base de datos
    this.sales = [];
    this.saleDetails = {};
    this.sorteosData = {};
    this.winningNumbers = {};
    this.factorMultiplicador = {};
    this.selectedSorteoFilter = '';
    this.isLoading = false;
    this.isLoadingFilters = false; // Loading específico para filtros
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
    // Propiedades para modal de detalles de venta
    this.showSaleDetailModal = false;
    this.selectedSaleForDetail = null;
    this.selectedSaleDetails = [];
    // Propiedades para gestión de sorteos
    this.showSorteoModal = false;
    this.editingSorteo = null;
    this.sorteoSchedules = [..._models_interfaces__WEBPACK_IMPORTED_MODULE_1__.SORTEO_SCHEDULES];
    // Propiedades para cambio de contraseña
    this.showPasswordModal = false;
    this.selectedUserForPassword = null;
    this.newPassword = '';
    this.confirmPassword = '';
    // Propiedades para acordeón
    this.showSorteosSection = false;
    this.showUsersSection = false;
    // Propiedades para modal de factores por sucursal
    this.showFactorsModal = false;
    this.sucursalesFactores = [];
    this.factoresPorSucursal = {};
    this.currentSorteoForFactors = null;
    // Propiedades para resumen de cierre por sucursales
    this.showResumenModal = false;
    this.resumenSucursales = [];
    this.currentSorteoForResumen = '';
    // Inicializar fechas usando date-fns para filtros
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    this.selectedDate = hondurasToday.toISOString().split('T')[0];
    // FORZAR CIERRE DE TODOS LOS MODALES AL INICIALIZAR
    this.showSaleDetailModal = false;
    this.showUserModal = false;
    this.showPasswordModal = false;
    this.showFactorsModal = false;
    this.showResumenModal = false;
    // Recuperar filtros de localStorage o usar valores por defecto
    this.loadFilterState();
    // Si no hay filtros guardados, usar date-fns para inicializar
    if (!this.fechaDesde || !this.fechaHasta) {
      const fechaInicio = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfDay)(hondurasToday);
      const fechaFin = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.endOfDay)(hondurasToday);
      this.fechaDesde = this.formatDateTimeLocal(fechaInicio);
      this.fechaHasta = this.formatDateTimeLocal(fechaFin);
    }
  }
  // Método para cargar estado de filtros desde localStorage
  loadFilterState() {
    try {
      const savedFilters = localStorage.getItem('admin-filters');
      if (savedFilters) {
        const filters = JSON.parse(savedFilters);
        this.fechaDesde = filters.fechaDesde || '';
        this.fechaHasta = filters.fechaHasta || '';
        this.selectedSorteoFilter = filters.selectedSorteoFilter || '';
        this.selectedDate = filters.selectedDate || '';
      }
    } catch (error) {}
  }
  // Método para guardar estado de filtros en localStorage
  saveFilterState() {
    try {
      const filters = {
        fechaDesde: this.fechaDesde,
        fechaHasta: this.fechaHasta,
        selectedSorteoFilter: this.selectedSorteoFilter,
        selectedDate: this.selectedDate
      };
      localStorage.setItem('admin-filters', JSON.stringify(filters));
    } catch (error) {}
  }
  ngOnInit() {
    this.supabaseService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (!user || user.role !== 'admin') {
        this.router.navigate(['/login']);
      }
    });
    // Cargar datos iniciales
    this.loadSales();
    this.loadSorteosData(); // Cargar datos de sorteos existentes
    this.initializeUsers();
    this.loadSorteoSchedules(); // Ya no es async
  }
  initializeUsers() {
    var _this = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Inicializar la tabla de perfiles
        yield _this.supabaseService.initializeProfilesTable();
        // Cargar usuarios
        yield _this.loadUsers();
      } catch (error) {
        // Si falla, mostramos usuarios por defecto para que funcione la interfaz
        _this.users = [{
          id: '1',
          email: 'admin@loteria.com',
          role: 'admin',
          sucursal: '',
          active: true,
          createdAt: new Date()
        }, {
          id: '2',
          email: 'sucursal1@loteria.com',
          role: 'sucursal',
          sucursal: 'Sucursal 1',
          active: true,
          createdAt: new Date()
        }, {
          id: '3',
          email: 'sucursal2@loteria.com',
          role: 'sucursal',
          sucursal: 'Sucursal 2',
          active: false,
          createdAt: new Date()
        }];
        _this.notificationService.showError('No se pudieron cargar usuarios de la base de datos. Mostrando datos de ejemplo.');
      }
    })();
  }
  isSorteoOpen(sorteo) {
    const now = this.supabaseService.getHondurasDateTime();
    const [hours, minutes] = sorteo.closeTime.split(':');
    const closeTime = new Date(now);
    closeTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    return now <= closeTime;
  }
  getSorteoData(sorteo) {
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    const todayString = hondurasToday.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    const sorteoId = `${todayString}-${sorteo.name}`;
    // SOLO retornar datos reales de la BD, NO crear objetos temporales
    return this.sorteosData[sorteoId];
  }
  // Método para verificar si el sorteo está cerrado basado en datos guardados en BD
  isSorteoCerrado(sorteo) {
    const sorteoData = this.getSorteoData(sorteo);
    // Solo considerar cerrado si está marcado como cerrado en BD O si tiene numeroGanador en BD
    return !!(sorteoData?.cerrado || sorteoData?.numeroGanador);
  }
  // Método para verificar si hay un número ganador guardado (no temporal)
  hasSavedWinner(sorteo) {
    const sorteoData = this.getSorteoData(sorteo);
    // Solo considerar guardado si hay datos REALES de BD con número ganador
    return !!sorteoData?.numeroGanador;
  }
  // Método para verificar si hay datos temporales en el formulario
  hasTemporaryWinnerData(sorteo) {
    return !!(this.winningNumbers[sorteo.name] && !this.hasSavedWinner(sorteo));
  }
  // Método para cargar un sorteo específico por ID y actualizar la UI
  loadSorteoById(sorteoId) {
    var _this2 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const sorteo = yield _this2.supabaseService.getSorteoById(sorteoId);
        if (sorteo) {
          // Actualizar en sorteosData
          _this2.sorteosData[sorteoId] = sorteo;
          // También actualizar el número ganador local si está disponible
          const sorteoName = sorteo.sorteo;
          if (sorteo.numeroGanador) {
            _this2.winningNumbers[sorteoName] = sorteo.numeroGanador;
          }
          // Forzar actualización de la vista
          _this2.cdr.detectChanges();
        } else {}
      } catch (error) {
        // Si es error de RLS, intentar método alternativo
        if (error?.isRLSError || error?.code === '42501') {
          try {
            const simpleData = yield _this2.supabaseService.getSorteoByIdSimple(sorteoId);
            if (simpleData && simpleData.length > 0) {
              const data = simpleData[0];
              // Crear objeto Sorteo desde datos simples
              const sorteo = {
                id: sorteoId,
                fecha: data.fecha ? new Date(data.fecha) : new Date(),
                sorteo: data.sorteo || sorteoId.split('-')[1],
                horaCierre: data.hora_cierre ? new Date(data.hora_cierre) : new Date(),
                numeroGanador: data.numero_ganador || '',
                factorMultiplicador: data.factor_multiplicador || 0,
                totalVendido: data.total_vendido || 0,
                totalPagado: data.total_pagado || 0,
                gananciaNeta: data.ganancia_neta || 0,
                cerrado: data.cerrado || false
              };
              // Actualizar en sorteosData
              _this2.sorteosData[sorteoId] = sorteo;
              // Actualizar número ganador local
              if (sorteo.numeroGanador) {
                _this2.winningNumbers[sorteo.sorteo] = sorteo.numeroGanador;
              }
              _this2.cdr.detectChanges();
            }
          } catch (fallbackError) {}
        }
      }
    })();
  }
  // Método para refrescar todos los sorteos del día actual
  refreshTodaysSorteos() {
    var _this3 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const hondurasToday = _this3.supabaseService.getHondurasDateTime();
        const todayString = hondurasToday.toISOString().split('T')[0];
        for (const sorteo of _this3.sorteoSchedules) {
          const sorteoId = `${todayString}-${sorteo.name}`;
          yield _this3.loadSorteoById(sorteoId);
        }
      } catch (error) {}
    })();
  }
  loadSales() {
    var _this4 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // No cambiar isLoading aquí si ya estamos en modo filtros
        if (!_this4.isLoadingFilters) {
          _this4.isLoading = true;
        }
        // Si hay filtros de rango de fechas, usar el método de rango
        if (_this4.fechaDesde && _this4.fechaHasta) {
          yield _this4.loadSalesByDateRange();
          return;
        }
        // Determinar fecha para consulta individual
        let fechaParaConsulta;
        if (_this4.selectedDate) {
          // Si hay fecha seleccionada, usar esa fecha
          fechaParaConsulta = new Date(_this4.selectedDate);
        } else {
          // Por defecto, usar hoy
          fechaParaConsulta = _this4.supabaseService.getHondurasDateTime();
        }
        // Cargar ventas usando el método existente
        _this4.sales = yield _this4.supabaseService.getSalesByDateAndSorteo(fechaParaConsulta, _this4.selectedSorteoFilter);
        // Forzar actualización del array para trigger change detection
        _this4.sales = [...(_this4.sales || [])];
        // Cargar detalles de cada venta
        for (const sale of _this4.sales) {
          _this4.saleDetails[sale.id] = yield _this4.supabaseService.getSaleDetails(sale.id);
        }
        // Forzar detección de cambios
        _this4.cdr.detectChanges();
      } catch (error) {
        _this4.sales = [];
        _this4.notificationService.showError('Error al cargar las ventas');
      } finally {
        // Solo cambiar isLoading si no estamos en modo filtros
        if (!_this4.isLoadingFilters) {
          _this4.isLoading = false;
        }
      }
    })();
  }
  getSaleDetails(saleId) {
    return this.saleDetails[saleId] || [];
  }
  setWinningNumber(sorteo) {
    var _this5 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const winningNumber = _this5.winningNumbers[sorteo.name];
      if (!winningNumber) {
        _this5.notificationService.showError('Por favor ingrese un número ganador');
        return;
      }
      // Verificar autenticación
      if (!_this5.currentUser) {
        _this5.notificationService.showError('Usuario no autenticado. Por favor inicie sesión nuevamente.');
        _this5.router.navigate(['/login']);
        return;
      }
      // Abrir modal para configurar factores por sucursal
      yield _this5.openFactorsModal(sorteo, winningNumber);
    })();
  }
  calculateSorteoResults(_x, _x2) {
    var _this6 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (sorteo, winningNumber, multiplicador = 70) {
      const hondurasToday = _this6.supabaseService.getHondurasDateTime();
      const sorteoSales = yield _this6.supabaseService.getSalesByDateAndSorteo(hondurasToday, sorteo.name);
      let totalVendido = 0;
      let totalPagado = 0;
      for (const sale of sorteoSales) {
        totalVendido += sale.total;
        const details = yield _this6.supabaseService.getSaleDetails(sale.id);
        for (const detail of details) {
          if (detail.numero.toString() === winningNumber) {
            totalPagado += detail.monto * multiplicador;
          }
        }
      }
      const gananciaNeta = totalVendido - totalPagado;
      // Actualizar o crear sorteo
      const [hours, minutes] = sorteo.closeTime.split(':');
      const horaCierre = new Date();
      horaCierre.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      yield _this6.supabaseService.createOrUpdateSorteo({
        fecha: hondurasToday,
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
  // Método para recargar datos de sorteos desde la base de datos
  loadSorteosData() {
    var _this7 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const hondurasToday = _this7.supabaseService.getHondurasDateTime();
        // Limpiar datos actuales
        _this7.sorteosData = {};
        // Cargar datos de sorteos para cada tipo
        for (const sorteo of _this7.sorteos) {
          try {
            const sorteoId = `${hondurasToday.toISOString().split('T')[0]}-${sorteo.name}`;
            const sorteoData = yield _this7.supabaseService.getSorteoById(sorteoId);
            if (sorteoData) {
              _this7.sorteosData[sorteoId] = sorteoData; // Usar sorteoId como clave
              // Sincronizar con variables locales
              _this7.winningNumbers[sorteo.name] = sorteoData.numeroGanador || '';
              _this7.factorMultiplicador[sorteo.name] = sorteoData.factorMultiplicador || 70;
            }
          } catch (error) {
            // Si es error 406 o RLS, intentar método alternativo
            if (error?.status === 406 || error?.code === '42501') {
              // Aquí podrías implementar un método alternativo si tienes uno
            }
          }
        }
        // Forzar actualización de la UI
        _this7.cdr.detectChanges();
      } catch (error) {}
    })();
  }
  // Método para actualizar la UI específicamente después de establecer ganador
  updateSorteoUI(sorteoName, winningNumber, multiplicador) {
    var _this8 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const hondurasToday = _this8.supabaseService.getHondurasDateTime();
        const sorteoId = `${hondurasToday.toISOString().split('T')[0]}-${sorteoName}`;
        // Actualizar datos locales inmediatamente
        _this8.winningNumbers[sorteoName] = winningNumber;
        _this8.factorMultiplicador[sorteoName] = multiplicador;
        // Intentar cargar datos actualizados desde la base de datos
        yield _this8.loadSorteoById(sorteoId);
        // Si el sorteo aún no aparece en sorteosData, crear un objeto temporal
        if (!_this8.sorteosData[sorteoId]) {
          _this8.sorteosData[sorteoId] = {
            id: sorteoId,
            fecha: hondurasToday,
            sorteo: sorteoName,
            horaCierre: hondurasToday,
            numeroGanador: winningNumber,
            factorMultiplicador: multiplicador,
            totalVendido: 0,
            totalPagado: 0,
            gananciaNeta: 0,
            cerrado: true
          };
        }
        // Forzar detección de cambios para actualizar la UI
        _this8.cdr.detectChanges();
        // Después de un breve delay, intentar refrescar nuevamente para asegurar datos actualizados
        setTimeout(/*#__PURE__*/(0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this8.loadSorteoById(sorteoId);
        }), 2000);
      } catch (error) {
        // En caso de error, asegurar que los datos locales estén actualizados
        _this8.winningNumbers[sorteoName] = winningNumber;
        _this8.factorMultiplicador[sorteoName] = multiplicador;
        _this8.cdr.detectChanges();
      }
    })();
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
    var _this9 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this9.isLoadingFilters = true;
        // Validar que las fechas sean válidas
        if (_this9.fechaDesde && _this9.fechaHasta) {
          const fechaDesde = new Date(_this9.fechaDesde);
          const fechaHasta = new Date(_this9.fechaHasta);
          if (fechaDesde > fechaHasta) {
            _this9.notificationService.showError('La fecha desde no puede ser mayor que la fecha hasta');
            _this9.isLoadingFilters = false;
            return;
          }
        }
        // Guardar estado de filtros
        _this9.saveFilterState();
        // Recargar ventas
        yield _this9.loadSales();
      } catch (error) {
        _this9.notificationService.showError('Error al aplicar filtros');
      } finally {
        // Asegurar que el loading se quite con un pequeño delay
        setTimeout(() => {
          _this9.isLoadingFilters = false;
          _this9.cdr.detectChanges();
        }, 100);
      }
    })();
  }
  limpiarFiltros() {
    var _this0 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this0.isLoadingFilters = true;
        const hondurasToday = _this0.supabaseService.getHondurasDateTime();
        // Reinicializar fechas usando date-fns
        const fechaInicio = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfDay)(hondurasToday);
        const fechaFin = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.endOfDay)(hondurasToday);
        _this0.fechaDesde = _this0.formatDateTimeLocal(fechaInicio);
        _this0.fechaHasta = _this0.formatDateTimeLocal(fechaFin);
        _this0.selectedDate = hondurasToday.toISOString().split('T')[0];
        _this0.selectedSorteoFilter = '';
        // Guardar estado limpio
        _this0.saveFilterState();
        yield _this0.loadSales();
      } catch (error) {
        _this0.notificationService.showError('Error al limpiar filtros');
      } finally {
        // Asegurar que el loading se quite con un pequeño delay
        setTimeout(() => {
          _this0.isLoadingFilters = false;
          _this0.cdr.detectChanges();
        }, 100);
      }
    })();
  }
  onFiltroFechaChange() {
    var _this1 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Auto-aplicar filtros cuando cambian las fechas
      yield _this1.aplicarFiltros();
    })();
  }
  onDateChange() {
    var _this10 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this10.isLoadingFilters = true;
        // Guardar cambio de fecha y recargar
        _this10.saveFilterState();
        yield _this10.loadSales();
      } catch (error) {
        _this10.notificationService.showError('Error al cambiar la fecha');
      } finally {
        _this10.isLoadingFilters = false;
      }
    })();
  }
  onSorteoFilterChange() {
    var _this11 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this11.isLoadingFilters = true;
        // Guardar cambio de sorteo y recargar
        _this11.saveFilterState();
        yield _this11.loadSales();
      } catch (error) {
        _this11.notificationService.showError('Error al cambiar el filtro de sorteo');
      } finally {
        _this11.isLoadingFilters = false;
      }
    })();
  }
  // Método específico para cuando cambia fechaDesde
  onFechaDesdeChange() {
    var _this12 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this12.aplicarFiltros();
    })();
  }
  // Método específico para cuando cambia fechaHasta
  onFechaHastaChange() {
    var _this13 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this13.aplicarFiltros();
    })();
  }
  loadSalesByDateRange() {
    var _this14 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this14.fechaDesde || !_this14.fechaHasta) {
        yield _this14.loadSingleDateSales();
        return;
      }
      // No cambiar isLoading aquí si ya estamos en modo filtros
      if (!_this14.isLoadingFilters) {
        _this14.isLoading = true;
      }
      try {
        // Usar date-fns para manejar las fechas correctamente
        const fechaDesdeObj = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.startOfDay)(new Date(_this14.fechaDesde));
        const fechaHastaObj = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.endOfDay)(new Date(_this14.fechaHasta));
        // Validar que la fecha desde no sea mayor que la fecha hasta
        if (fechaDesdeObj > fechaHastaObj) {
          _this14.notificationService.showError('La fecha desde no puede ser mayor que la fecha hasta');
          _this14.sales = [];
          return;
        }
        // Cargar ventas para cada día en el rango
        let allSales = [];
        let currentDate = new Date(fechaDesdeObj);
        let daysProcessed = 0;
        const maxDays = 31; // Límite de seguridad
        while (currentDate <= fechaHastaObj && daysProcessed < maxDays) {
          const daySales = yield _this14.supabaseService.getSalesByDateAndSorteo(currentDate, _this14.selectedSorteoFilter);
          allSales = [...allSales, ...daySales];
          // Avanzar al siguiente día
          currentDate = new Date(currentDate);
          currentDate.setDate(currentDate.getDate() + 1);
          daysProcessed++;
        }
        if (daysProcessed >= maxDays) {
          _this14.notificationService.showInfo('Se procesaron los primeros 31 días del rango');
        }
        // Forzar actualización del array
        _this14.sales = [...allSales];
        // Cargar detalles de todas las ventas
        for (const sale of _this14.sales) {
          _this14.saleDetails[sale.id] = yield _this14.supabaseService.getSaleDetails(sale.id);
        }
        // Forzar detección de cambios
        _this14.cdr.detectChanges();
      } catch (error) {
        _this14.notificationService.showError('Error al cargar las ventas: ' + error);
        _this14.sales = [];
      } finally {
        // Solo cambiar isLoading si no estamos en modo filtros
        if (!_this14.isLoadingFilters) {
          _this14.isLoading = false;
        }
      }
    })();
  }
  // Método auxiliar para cargar ventas de una sola fecha
  loadSingleDateSales() {
    var _this15 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fecha = _this15.selectedDate ? new Date(_this15.selectedDate) : _this15.supabaseService.getHondurasDateTime();
      _this15.sales = yield _this15.supabaseService.getSalesByDateAndSorteo(fecha, _this15.selectedSorteoFilter);
      _this15.sales = [...(_this15.sales || [])];
      for (const sale of _this15.sales) {
        _this15.saleDetails[sale.id] = yield _this15.supabaseService.getSaleDetails(sale.id);
      }
      _this15.cdr.detectChanges();
    })();
  }
  // Gestión de usuarios
  loadUsers() {
    var _this16 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this16.users = yield _this16.supabaseService.getUsers();
        if (_this16.users.length === 0) {
          _this16.notificationService.showInfo('No hay usuarios configurados. Use el botón Sincronizar para cargar usuarios desde Authentication.');
        }
      } catch (error) {
        _this16.notificationService.showError('Error al cargar usuarios: ' + error?.message);
        // Asegurar que users no sea undefined
        _this16.users = [];
      }
    })();
  }
  loadSorteoSchedules() {
    this.sorteoSchedules = [..._models_interfaces__WEBPACK_IMPORTED_MODULE_1__.SORTEO_SCHEDULES];
    if (this.sorteoSchedules.length === 0) {
      this.notificationService.showError('No se encontraron horarios de sorteos configurados');
    } else {}
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
    var _this17 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this17.isLoading = true;
        if (_this17.editingUser) {
          // Actualizar usuario existente
          yield _this17.supabaseService.updateExistingUser(_this17.editingUser.id, {
            email: _this17.userFormData.email,
            role: _this17.userFormData.role,
            sucursal: _this17.userFormData.sucursal,
            active: _this17.userFormData.active
          });
          _this17.notificationService.showSuccess('Usuario actualizado exitosamente');
        } else {
          // Crear nuevo usuario
          yield _this17.supabaseService.createNewUser(_this17.userFormData);
          _this17.notificationService.showSuccess('Usuario creado exitosamente');
        }
        _this17.closeUserModal();
        yield _this17.loadUsers();
      } catch (error) {
        _this17.notificationService.showError('Error al guardar el usuario');
      } finally {
        _this17.isLoading = false;
      }
    })();
  }
  toggleUserStatus(user) {
    var _this18 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this18.isLoading = true;
        yield _this18.supabaseService.toggleExistingUserStatus(user.id);
        _this18.notificationService.showSuccess('Estado del usuario actualizado');
        yield _this18.loadUsers();
      } catch (error) {
        _this18.notificationService.showError('Error al cambiar el estado del usuario');
      } finally {
        _this18.isLoading = false;
      }
    })();
  }
  deleteUser(userId) {
    var _this19 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirmed = yield _this19.notificationService.showConfirmation('Eliminar Usuario', '¿Está seguro que desea eliminar este usuario?');
      if (confirmed) {
        try {
          _this19.isLoading = true;
          // Implementar eliminación en SupabaseService
          _this19.notificationService.showSuccess('Usuario eliminado exitosamente');
          yield _this19.loadUsers();
        } catch (error) {
          _this19.notificationService.showError('Error al eliminar el usuario');
        } finally {
          _this19.isLoading = false;
        }
      }
    })();
  }
  generateDailyReport() {
    const reportDate = this.selectedDate ? new Date(this.selectedDate) : this.supabaseService.getHondurasDateTime();
    this.printService.generateDailyReport(this.sales, reportDate);
  }
  // Método mejorado para reimprimir recibo desde admin
  reprintReceipt(sale) {
    var _this20 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Obtener detalles de la venta desde la base de datos
        const details = yield _this20.supabaseService.getSaleDetails(sale.id);
        if (details.length === 0) {
          _this20.notificationService.showError('No se encontraron detalles para esta venta. No se puede reimprimir el recibo.');
          return;
        }
        // Generar recibo con los detalles obtenidos
        _this20.printService.generateThermalReceipt(sale, details);
        _this20.notificationService.showSuccess('Recibo enviado a impresión');
      } catch (error) {
        _this20.notificationService.showError('Error al reimprimir el recibo. Por favor intente nuevamente.');
      }
    })();
  }
  logout() {
    var _this21 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this21.supabaseService.logout();
      _this21.router.navigate(['/login']);
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
  // Método para formatear fecha para inputs datetime-local
  formatDateTimeLocal(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  // Método para formatear fecha para mostrar en la UI
  formatDateForDisplay(date) {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return this.supabaseService.formatHondurasDateTime(dateObj);
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
    return user.id;
  }
  trackBySorteo(index, sorteo) {
    return sorteo.id || index.toString();
  }
  trackBySaleDetail(index, detail) {
    return detail.id;
  }
  verDetalles(sale) {
    // Primero cerrar cualquier modal que pueda estar abierto
    this.showSaleDetailModal = false;
    // Obtener detalles de la venta
    const details = this.getSaleDetails(sale.id);
    // Configurar modal
    this.selectedSaleForDetail = sale;
    this.selectedSaleDetails = details;
    this.showSaleDetailModal = true;
    // Forzar detección de cambios
    this.cdr.detectChanges();
  }
  // Método para cerrar el modal de detalles
  closeSaleDetailModal() {
    this.showSaleDetailModal = false;
    this.selectedSaleForDetail = null;
    this.selectedSaleDetails = [];
    // Forzar detección de cambios
    this.cdr.detectChanges();
  }
  // Método para forzar el cierre del modal
  forceCloseSaleDetailModal() {
    this.showSaleDetailModal = false;
    this.selectedSaleForDetail = null;
    this.selectedSaleDetails = [];
  }
  // Método de emergencia para resetear completamente el modal
  resetModal() {
    // Cerrar TODOS los modales
    this.showSaleDetailModal = false;
    this.showUserModal = false;
    this.showPasswordModal = false;
    // Limpiar datos de modales
    this.selectedSaleForDetail = null;
    this.selectedSaleDetails = [];
    // Solo si hay elementos trabados, limpiar el DOM
    setTimeout(() => {
      // Eliminar backdrop de Bootstrap si existe
      const backdrops = document.querySelectorAll('.modal-backdrop');
      backdrops.forEach(el => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
      // Remover clases del body
      document.body.classList.remove('modal-open');
    }, 100);
  }
  // Método para calcular total de números en el modal
  getTotalNumeros() {
    return this.selectedSaleDetails.reduce((total, detail) => total + detail.monto, 0);
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
  // ========================
  // CAMBIO DE CONTRASEÑA
  // ========================
  changePassword(user) {
    this.selectedUserForPassword = user;
    this.newPassword = '';
    this.confirmPassword = '';
    this.showPasswordModal = true;
  }
  closePasswordModal() {
    this.showPasswordModal = false;
    this.selectedUserForPassword = null;
    this.newPassword = '';
    this.confirmPassword = '';
  }
  changeUserPassword() {
    var _this22 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this22.newPassword !== _this22.confirmPassword) {
        _this22.notificationService.showError('Las contraseñas no coinciden');
        return;
      }
      if (_this22.newPassword.length < 6) {
        _this22.notificationService.showError('La contraseña debe tener al menos 6 caracteres');
        return;
      }
      try {
        _this22.isLoading = true;
        // Implementar método en SupabaseService para cambiar contraseña
        yield _this22.supabaseService.updateUserPassword(_this22.selectedUserForPassword.id, _this22.newPassword);
        _this22.notificationService.showSuccess('Contraseña actualizada exitosamente');
        _this22.closePasswordModal();
      } catch (error) {
        _this22.notificationService.showError('Error al cambiar la contraseña');
      } finally {
        _this22.isLoading = false;
      }
    })();
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
      const hondurasToday = this.supabaseService.getHondurasDateTime();
      link.setAttribute('download', `ventas_excel_${hondurasToday.toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.notificationService.showSuccess('Reporte Excel exportado exitosamente');
    } catch (error) {
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
  // ========================
  // MÉTODOS DE DEBUG
  // ========================
  debugSorteoSchedules() {
    var _this23 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this23.isLoading = true;
        //  await this.supabaseService.debugSorteoSchedules();
        _this23.notificationService.showSuccess('Revisa la consola para ver los resultados del debug');
      } catch (error) {
        _this23.notificationService.showError('Error ejecutando debug');
      } finally {
        _this23.isLoading = false;
      }
    })();
  }
  // ===== MÉTODOS PARA ACORDEÓN =====
  toggleSorteosSection() {
    this.showSorteosSection = !this.showSorteosSection;
  }
  toggleUsersSection() {
    this.showUsersSection = !this.showUsersSection;
  }
  // ===== MÉTODOS PARA ABRIR MODALES =====
  openCreateUserModal() {
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
  syncUsersFromAuth() {
    var _this24 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this24.isLoading = true;
        _this24.notificationService.showInfo('Sincronizando usuarios desde auth.users...');
        // Usar el nuevo método de sincronización
        yield _this24.supabaseService.syncUsersFromAuth();
        // Recargar la lista de usuarios
        yield _this24.loadUsers();
        _this24.notificationService.showSuccess('Usuarios sincronizados correctamente');
      } catch (error) {
        _this24.notificationService.showError('Error al sincronizar usuarios');
      } finally {
        _this24.isLoading = false;
      }
    })();
  }
  // Navegar a la gestión de usuarios
  navigateToUsers() {
    this.router.navigate(['/admin/users']);
  }
  openFactorsModal(sorteoOrName, winningNumber) {
    var _this25 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this25.isLoading = true;
        // Cargar usuarios activos por sucursal
        _this25.sucursalesFactores = yield _this25.supabaseService.getActiveUsersBySucursal();
        // Inicializar factores con valores por defecto
        _this25.factoresPorSucursal = {};
        for (const sucursal of _this25.sucursalesFactores) {
          _this25.factoresPorSucursal[sucursal.sucursal] = sucursal.factor;
        }
        // Manejar ambos tipos de parámetros
        if (typeof sorteoOrName === 'string') {
          // Llamada desde la interfaz del sorteo (solo nombre y número)
          const sorteoSchedule = _models_interfaces__WEBPACK_IMPORTED_MODULE_1__.SORTEO_SCHEDULES.find(s => s.name === sorteoOrName);
          if (sorteoSchedule) {
            _this25.currentSorteoForFactors = {
              sorteo: sorteoSchedule,
              winningNumber: winningNumber.toString()
            };
          }
        } else {
          // Llamada desde setWinningNumber (objeto completo)
          _this25.currentSorteoForFactors = {
            sorteo: sorteoOrName,
            winningNumber: winningNumber.toString()
          };
        }
        _this25.showFactorsModal = true;
      } catch (error) {
        console.error('Error al cargar sucursales:', error);
        _this25.notificationService.showError('Error al cargar configuración de sucursales');
      } finally {
        _this25.isLoading = false;
      }
    })();
  }
  closeFactorsModal() {
    this.showFactorsModal = false;
    this.currentSorteoForFactors = null;
    this.factoresPorSucursal = {};
    this.sucursalesFactores = [];
  }
  closeResumenModal() {
    this.showResumenModal = false;
    this.resumenSucursales = [];
    this.currentSorteoForResumen = '';
  }
  confirmWinningNumberWithFactors() {
    var _this26 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this26.currentSorteoForFactors) {
        _this26.notificationService.showError('No hay sorteo seleccionado');
        return;
      }
      const {
        sorteo,
        winningNumber
      } = _this26.currentSorteoForFactors;
      try {
        _this26.isLoading = true;
        // Usar fecha de Honduras
        const hondurasToday = _this26.supabaseService.getHondurasDateTime();
        const fechaStr = hondurasToday.toISOString().split('T')[0];
        const sorteoId = `${fechaStr}-${sorteo.name}`;
        // Crear sorteos por sucursal con factores específicos
        yield _this26.supabaseService.crearSorteosPorSucursal(sorteoId, winningNumber, _this26.factoresPorSucursal);
        // Calcular totales por sucursal
        yield _this26.supabaseService.calcularTotalesSorteoPorSucursal(sorteoId);
        // Cerrar modal de factores
        _this26.closeFactorsModal();
        // Obtener resumen de sucursales para mostrar
        _this26.resumenSucursales = yield _this26.supabaseService.getSorteoResumenPorSucursal(sorteoId);
        _this26.currentSorteoForResumen = `${sorteo.label} - Número Ganador: ${winningNumber.padStart(2, '0')}`;
        // Mostrar modal de resumen
        _this26.showResumenModal = true;
        // Recargar datos
        yield _this26.loadSales();
        yield _this26.loadSorteosData();
        // Notificar actualización de resúmenes
        _this26.supabaseService.notifyResumenUpdate();
        // Actualizar UI
        _this26.winningNumbers[sorteo.name] = winningNumber;
        _this26.notificationService.showSuccess(`Número ganador ${winningNumber.padStart(2, '0')} establecido con factores específicos por sucursal para ${sorteo.name}`);
      } catch (error) {
        console.error('Error al establecer número ganador:', error);
        _this26.notificationService.showError('Error al establecer el número ganador con factores por sucursal');
      } finally {
        _this26.isLoading = false;
      }
    })();
  }
  // Obtener lista única de sucursales
  getUniqueSucursales() {
    return [...new Set(this.sucursalesFactores.map(s => s.sucursal))];
  }
  // Actualizar factor para una sucursal específica
  updateFactorForSucursal(sucursal, factor) {
    this.factoresPorSucursal[sucursal] = typeof factor === 'string' ? parseFloat(factor) : factor;
  }
  // Métodos auxiliares para el template
  getUsersBySucursal(sucursal) {
    return this.sucursalesFactores.filter(s => s.sucursal === sucursal);
  }
  hasSucursalUsers(sucursal) {
    return this.sucursalesFactores.filter(s => s.sucursal === sucursal).length > 0;
  }
  // Métodos para calcular totales en el resumen
  getTotalVendidoGeneral() {
    const total = this.resumenSucursales.reduce((sum, s) => sum + (s.total_vendido || 0), 0);
    return total.toFixed(2);
  }
  getTotalPagadoGeneral() {
    const total = this.resumenSucursales.reduce((sum, s) => sum + (s.total_pagado || 0), 0);
    return total.toFixed(2);
  }
  getGananciaTotalGeneral() {
    return this.resumenSucursales.reduce((sum, s) => sum + (s.ganancia_neta || 0), 0);
  }
  static {
    this.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_supabase_service__WEBPACK_IMPORTED_MODULE_2__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 193,
      vars: 61,
      consts: [["searchIcon", ""], ["eraserIcon", ""], ["noSales", ""], ["userForm", "ngForm"], ["passwordForm", "ngForm"], ["setWinner", ""], [1, "admin-interface"], [1, "header-bar"], [1, "admin-title"], [1, "fas", "fa-cog"], [1, "header-actions"], [1, "btn-header", "btn-users", 3, "click", "disabled"], [1, "fas", "fa-users"], [1, "btn-header", "btn-cerrar", 3, "click", "disabled"], [1, "fas", "fa-sign-out-alt"], [1, "filters-bar"], [1, "filter-group"], ["for", "fechaDesde"], [1, "fas", "fa-calendar-alt"], ["class", "loading-indicator", 4, "ngIf"], ["type", "datetime-local", "id", "fechaDesde", 1, "form-control", 3, "ngModelChange", "change", "ngModel", "disabled"], ["for", "fechaHasta"], ["type", "datetime-local", "id", "fechaHasta", 1, "form-control", 3, "ngModelChange", "change", "ngModel", "disabled"], ["for", "sorteoFilter"], [1, "fas", "fa-trophy"], ["id", "sorteoFilter", 1, "form-control", 3, "ngModelChange", "change", "ngModel", "disabled"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "filter-actions"], [1, "btn-filter", "btn-primary", 3, "click", "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf", "ngIfElse"], [1, "btn-filter", "btn-secondary", 3, "click", "disabled"], [1, "main-content"], [1, "summary-cards"], [1, "summary-card", "vendido"], [1, "card-icon"], [1, "fas", "fa-chart-line"], [1, "card-content"], [1, "summary-card", "pagado"], [1, "fas", "fa-coins"], [1, "summary-card", "ganancia"], [1, "fas", "fa-piggy-bank"], [1, "summary-card", "ventas"], [1, "fas", "fa-shopping-cart"], [1, "sorteos-section"], [1, "section-header"], [1, "fas", "fa-dice"], [1, "sorteos-grid"], ["class", "sorteo-card", 4, "ngFor", "ngForOf"], [1, "ventas-section"], [1, "fas", "fa-list"], [1, "section-actions"], ["title", "Exportar a Excel", 1, "btn-filter", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-file-excel"], ["title", "Exportar a PDF", 1, "btn-filter", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-file-pdf"], ["class", "ventas-table-container", 4, "ngIf", "ngIfElse"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "fas", "fa-user"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "userEmail"], ["type", "email", "id", "userEmail", "required", "", "name", "email", "placeholder", "usuario@ejemplo.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "userName"], ["type", "text", "id", "userName", "name", "nombre", "placeholder", "Nombre completo del usuario", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "form-group", 4, "ngIf"], ["for", "userRole"], ["id", "userRole", "name", "role", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["value", "admin"], ["value", "sucursal"], [1, "checkbox-label"], ["type", "checkbox", "name", "active", 3, "ngModelChange", "ngModel"], [1, "checkmark"], [1, "modal-footer"], ["type", "button", 1, "btn-modal", "btn-secondary", 3, "click"], [1, "fas", "fa-times"], ["type", "button", 1, "btn-modal", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-save"], [1, "fas", "fa-key"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "required", "", "name", "newPassword", "placeholder", "Ingrese la nueva contrase\u00F1a", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "confirmPassword"], ["type", "password", "id", "confirmPassword", "required", "", "name", "confirmPassword", "placeholder", "Confirme la nueva contrase\u00F1a", 1, "form-input", 3, "ngModelChange", "ngModel"], ["tabindex", "0", 1, "modal", 3, "keydown.escape"], [1, "modal-dialog", "modal-dialog-centered", 3, "click"], [1, "fas", "fa-receipt"], ["type", "button", 1, "btn-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "fas", "fa-print"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "loading-indicator"], [1, "fas", "fa-spinner", "fa-spin"], [3, "value"], [1, "fas", "fa-search"], [1, "fas", "fa-eraser"], [1, "sorteo-card"], [1, "sorteo-header"], [1, "sorteo-status"], [1, "status-badge"], [1, "close-time"], [1, "sorteo-content"], [4, "ngIf", "ngIfElse"], [1, "winner-section"], [1, "winner-number"], [1, "factor"], [1, "sorteo-stats"], [1, "stat-item", "vendido"], [1, "label"], [1, "value"], [1, "stat-item", "pagado"], [1, "stat-item", "ganancia"], ["class", "winner-form", 4, "ngIf"], ["class", "sorteo-open-message", 4, "ngIf"], [1, "winner-form"], ["type", "number", "min", "1", "max", "99", "placeholder", "Ingrese n\u00FAmero (1-99)", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "btn-set-winner", 3, "click", "disabled"], [4, "ngIf"], [1, "sorteo-open-message"], [1, "fas", "fa-clock"], [1, "ventas-table-container"], ["class", "loading-overlay", 4, "ngIf"], [1, "ventas-table"], [1, "table-header"], [1, "col-fecha"], [1, "col-sucursal"], [1, "col-sorteo"], [1, "col-total"], [1, "col-recibo"], [1, "col-acciones"], [1, "table-body"], ["class", "table-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "loading-overlay"], [1, "loading-content"], [1, "table-row"], ["title", "Ver detalles", 1, "btn-table-action", 3, "click", "disabled"], [1, "fas", "fa-eye"], ["title", "Reimprimir", 1, "btn-table-action", 3, "click", "disabled"], [1, "no-data-message"], [1, "fas", "fa-inbox"], ["for", "userPassword"], ["type", "password", "id", "userPassword", "required", "", "name", "password", "placeholder", "Contrase\u00F1a segura", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "userSucursal"], ["type", "text", "id", "userSucursal", "name", "sucursal", "placeholder", "Nombre de la sucursal", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "sale-info-grid"], [1, "info-row"], [1, "value", "text-capitalize"], [1, "info-row", "total-row"], ["class", "numbers-section", 4, "ngIf"], ["class", "no-numbers", 4, "ngIf"], [1, "numbers-section"], [1, "numbers-grid"], ["class", "number-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "numbers-summary"], [1, "summary-item"], [1, "number-item"], [1, "number-card"], [1, "number"], [1, "amount"], [1, "no-numbers"], [1, "fas", "fa-exclamation-triangle"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "factors-modal", 3, "click"], [1, "fas", "fa-calculator"], ["class", "sorteo-info", 4, "ngIf"], [1, "btn-close", 3, "click"], [1, "factors-instruction"], [1, "fas", "fa-info-circle"], ["class", "factors-list", 4, "ngIf"], ["class", "loading-factors", 4, "ngIf"], ["class", "no-sucursales", 4, "ngIf"], [1, "btn-modal", "btn-secondary", 3, "click", "disabled"], [1, "btn-modal", "btn-primary", 3, "click", "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], ["class", "fas fa-trophy", 4, "ngIf"], [1, "sorteo-info"], [1, "sorteo-badge"], [1, "winning-number"], [1, "factors-list"], ["class", "factor-item", 4, "ngFor", "ngForOf"], [1, "factor-item"], [1, "sucursal-info"], [1, "sucursal-name"], [1, "fas", "fa-store"], ["class", "sucursal-users", 4, "ngIf"], [1, "factor-input"], [1, "input-with-x"], ["type", "number", "min", "1", "max", "999", "step", "0.1", "placeholder", "70", 3, "input", "value"], [1, "x-multiplier"], [1, "sucursal-users"], [4, "ngFor", "ngForOf"], [1, "loading-factors"], [1, "no-sucursales"], [1, "modal-container", "resumen-modal", 3, "click"], [1, "fas", "fa-chart-bar"], [1, "resumen-table"], [1, "col-factor"], [1, "col-vendido"], [1, "col-pagado"], [1, "col-ganancia"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-footer"], [1, "btn-modal", "btn-primary", 3, "click"], [1, "fas", "fa-check"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Panel de Administraci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 10)(7, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.navigateToUsers());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Gesti\u00F3n de Usuarios ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.logout());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Cerrar Sesi\u00F3n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 15)(14, "div", 16)(15, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Desde: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AdminComponent_span_18_Template, 2, 0, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.fechaDesde, $event) || (ctx.fechaDesde = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onFiltroFechaChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 16)(21, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " Hasta: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, AdminComponent_span_24_Template, 2, 0, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.fechaHasta, $event) || (ctx.fechaHasta = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.onFiltroFechaChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 16)(27, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, " Sorteo: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AdminComponent_span_30_Template, 2, 0, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "select", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedSorteoFilter, $event) || (ctx.selectedSorteoFilter = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AdminComponent_Template_select_change_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.aplicarFiltros());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Todos los sorteos");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, AdminComponent_option_34_Template, 2, 2, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 28)(36, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.aplicarFiltros());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, AdminComponent_i_37_Template, 1, 0, "i", 30)(38, AdminComponent_ng_template_38_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.limpiarFiltros());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, AdminComponent_i_42_Template, 1, 0, "i", 30)(43, AdminComponent_ng_template_43_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 32)(47, "div", 33)(48, "div", 34)(49, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 37)(52, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Total Vendido");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 38)(57, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 37)(60, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Total Pagado");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 40)(65, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 37)(68, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Ganancia Neta");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 42)(73, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 37)(76, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Ventas Totales");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 44)(81, "div", 45)(82, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, " Gesti\u00F3n de Sorteos");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, AdminComponent_div_86_Template, 13, 9, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](87, "app-resumen-sorteos");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 49)(89, "div", 45)(90, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, " Historial de Ventas");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 51)(94, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_94_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.exportarVentasExcel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](95, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, " Excel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_97_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.exportarVentasPDF());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, " PDF ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](100, AdminComponent_div_100_Template, 18, 5, "div", 56)(101, AdminComponent_ng_template_101_Template, 6, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_103_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.showUserModal && $event.target === $event.currentTarget && ctx.closeUserModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "div", 58)(105, "div", 59)(106, "div", 60)(107, "h5", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](108, "i", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_110_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.closeUserModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "span", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "div", 65)(114, "form", null, 3)(116, "div", 66)(117, "label", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "Email:");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "input", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_119_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.userFormData.email, $event) || (ctx.userFormData.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 66)(121, "label", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "Nombre:");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "input", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_123_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.userFormData.nombre, $event) || (ctx.userFormData.nombre = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](124, AdminComponent_div_124_Template, 4, 1, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 66)(126, "label", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, "Rol:");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "select", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_128_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.userFormData.role, $event) || (ctx.userFormData.role = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "option", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "Administrador");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "option", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, "Sucursal");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](133, AdminComponent_div_133_Template, 4, 1, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "div", 66)(135, "label", 76)(136, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_136_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.userFormData.active, $event) || (ctx.userFormData.active = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](137, "span", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](138, " Usuario Activo ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "div", 79)(140, "button", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_140_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.closeUserModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](141, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142, " Cancelar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "button", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_143_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.saveUser());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](144, "i", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](145);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_146_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.showPasswordModal && $event.target === $event.currentTarget && ctx.closePasswordModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "div", 58)(148, "div", 59)(149, "div", 60)(150, "h5", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](151, "i", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152, " Cambiar Contrase\u00F1a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_153_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.closePasswordModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](154, "span", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](155, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "div", 65)(157, "form", null, 4)(159, "div", 66)(160, "label", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](161, "Nueva Contrase\u00F1a:");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](162, "input", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_162_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.newPassword, $event) || (ctx.newPassword = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "div", 66)(164, "label", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165, "Confirmar Contrase\u00F1a:");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "input", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_166_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "div", 79)(168, "button", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_168_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.closePasswordModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](169, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](170, " Cancelar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "button", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_171_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.changeUserPassword());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](172, "i", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, " Cambiar Contrase\u00F1a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](174, "div", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown.escape", function AdminComponent_Template_div_keydown_escape_174_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.closeSaleDetailModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "div", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_175_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "div", 59)(177, "div", 60)(178, "h3", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](179, "i", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180, " Detalles de Venta");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](181, "button", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_181_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.closeSaleDetailModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](182, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](183, AdminComponent_div_183_Template, 34, 8, "div", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](184, "div", 79)(185, "button", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_185_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.reprintReceipt(ctx.selectedSaleForDetail));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](186, "i", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](187, " Reimprimir Recibo ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "button", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_188_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.closeSaleDetailModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](189, "i", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](190, " Cerrar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](191, AdminComponent_div_191_Template, 25, 9, "div", 95)(192, AdminComponent_div_192_Template, 44, 9, "div", 95);
        }
        if (rf & 2) {
          const searchIcon_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](39);
          const eraserIcon_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](44);
          const noSales_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](102);
          const userForm_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](115);
          const passwordForm_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](158);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaDesde);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaHasta);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedSorteoFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.sorteos);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isLoading || ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoadingFilters)("ngIfElse", searchIcon_r19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.isLoadingFilters ? "Filtrando..." : "Filtrar", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isLoading || ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoadingFilters)("ngIfElse", eraserIcon_r20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.isLoadingFilters ? "Limpiando..." : "Limpiar", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", ctx.getTotalVendido().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", ctx.getTotalPagado().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("positive", ctx.getGananciaNeta() > 0)("negative", ctx.getGananciaNeta() < 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("L ", ctx.getGananciaNeta().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.getTotalVentas());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.sorteos);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.sales.length > 0)("ngIfElse", noSales_r21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("display", ctx.showUserModal ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx.showUserModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.editingUser ? "Editar Usuario" : "Crear Usuario", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.userFormData.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.userFormData.nombre);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.editingUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.userFormData.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userFormData.role === "sucursal");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.userFormData.active);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !userForm_r22.valid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.editingUser ? "Actualizar" : "Crear", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("display", ctx.showPasswordModal ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx.showPasswordModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.newPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.confirmPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !passwordForm_r23.valid || ctx.newPassword !== ctx.confirmPassword || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("display", ctx.showSaleDetailModal ? "flex" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx.showSaleDetailModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedSaleForDetail);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showFactorsModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showResumenModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _resumen_sorteos_resumen_sorteos_component__WEBPACK_IMPORTED_MODULE_5__.ResumenSorteosComponent],
      styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css);@charset \"UTF-8\";\n\n\n.admin-interface[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n\n\n.header-bar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);\n  color: white;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.admin-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.admin-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n\n.btn-header[_ngcontent-%COMP%] {\n  background: rgba(52, 152, 219, 0.2);\n  border: 1px solid rgba(52, 152, 219, 0.3);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.btn-header[_ngcontent-%COMP%]:hover {\n  background: rgba(52, 152, 219, 0.3);\n  border-color: rgba(52, 152, 219, 0.5);\n  transform: translateY(-1px);\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.btn-users[_ngcontent-%COMP%] {\n  background: rgba(46, 204, 113, 0.2);\n  border-color: rgba(46, 204, 113, 0.3);\n}\n\n.btn-users[_ngcontent-%COMP%]:hover {\n  background: rgba(46, 204, 113, 0.3);\n  border-color: rgba(46, 204, 113, 0.5);\n}\n\n.btn-cerrar[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.2);\n  border-color: rgba(231, 76, 60, 0.3);\n}\n\n.btn-cerrar[_ngcontent-%COMP%]:hover {\n  background: rgba(231, 76, 60, 0.3);\n  border-color: rgba(231, 76, 60, 0.5);\n}\n\n\n\n.accordion-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  margin: 1.5rem 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  border: 1px solid #f8f9fa;\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);\n  color: white;\n  padding: 1rem 1.5rem;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: all 0.2s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.accordion-header[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #3c5070 0%, #34495e 100%);\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i.fa-chevron-down[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n  font-size: 0.9rem;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i.fa-chevron-down.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  background: white;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 2000px;\n  padding: 1.5rem;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1050;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal.fade[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n\n.modal.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: relative;\n  width: auto;\n  max-width: 700px;\n  margin: 1rem;\n  pointer-events: none;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 700px;\n  pointer-events: auto;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);\n  border: none;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e9ecef;\n  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);\n  color: white;\n  border-radius: 12px 12px 0 0;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1.5rem;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #e9ecef;\n  background: #f8f9fa;\n  border-radius: 0 0 12px 12px;\n  gap: 0.5rem;\n}\n\n.btn-close[_ngcontent-%COMP%], .close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: white;\n  opacity: 0.8;\n  cursor: pointer;\n  padding: 0;\n  width: 1em;\n  height: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn-close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.btn-modal[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.btn-modal.btn-primary[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n}\n\n.btn-modal.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2980b9;\n  transform: translateY(-1px);\n}\n\n.btn-modal.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n\n.btn-modal.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a6268;\n  transform: translateY(-1px);\n}\n\n.btn-modal[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n\n\n.fas[_ngcontent-%COMP%], .fa[_ngcontent-%COMP%] {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n\n\n\n.fa-edit[_ngcontent-%COMP%]:before {\n  content: \"\\f044\";\n}\n\n.fa-trash[_ngcontent-%COMP%]:before {\n  content: \"\\f1f8\";\n}\n\n.fa-key[_ngcontent-%COMP%]:before {\n  content: \"\\f084\";\n}\n\n.fa-toggle-on[_ngcontent-%COMP%]:before {\n  content: \"\\f205\";\n}\n\n.fa-toggle-off[_ngcontent-%COMP%]:before {\n  content: \"\\f204\";\n}\n\n.fa-user-plus[_ngcontent-%COMP%]:before {\n  content: \"\\f234\";\n}\n\n.fa-plus[_ngcontent-%COMP%]:before {\n  content: \"\\f067\";\n}\n\n.fa-bug[_ngcontent-%COMP%]:before {\n  content: \"\\f188\";\n}\n\n.fa-database[_ngcontent-%COMP%]:before {\n  content: \"\\f1c0\";\n}\n\n.fa-clock[_ngcontent-%COMP%]:before {\n  content: \"\\f017\";\n}\n\n.fa-users[_ngcontent-%COMP%]:before {\n  content: \"\\f0c0\";\n}\n\n.fa-chevron-down[_ngcontent-%COMP%]:before {\n  content: \"\\f078\";\n}\n\n.fa-times[_ngcontent-%COMP%]:before {\n  content: \"\\f00d\";\n}\n\n.fa-save[_ngcontent-%COMP%]:before {\n  content: \"\\f0c7\";\n}\n\n.fa-sync[_ngcontent-%COMP%]:before {\n  content: \"\\f021\";\n}\n\n\n\n.filters-bar[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem 2rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  border-bottom: 1px solid #e9ecef;\n  display: flex;\n  align-items: flex-end;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-width: 160px;\n}\n\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n  font-size: 0.85rem;\n}\n\n.loading-indicator[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #3498db;\n}\n.loading-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-control[_ngcontent-%COMP%], .form-input[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 2px solid #e9ecef;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n.form-control[_ngcontent-%COMP%]:disabled, .form-input[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-left: auto;\n}\n\n.btn-filter[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.btn-filter.btn-primary[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n}\n\n.btn-filter.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2980b9;\n  transform: translateY(-1px);\n}\n\n.btn-filter.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n\n.btn-filter.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n  transform: translateY(-1px);\n}\n\n\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n\n\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f8f9fa;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n\n.card-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: white;\n}\n\n.summary-card.vendido[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db, #2980b9);\n}\n\n.summary-card.pagado[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n}\n\n.summary-card.ganancia[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #27ae60, #229954);\n}\n\n.summary-card.ganancia.negative[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n}\n\n.summary-card.ventas[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f39c12, #e67e22);\n}\n\n.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #2c3e50;\n}\n\n.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7f8c8d;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f8f9fa;\n}\n\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #2c3e50;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.section-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.btn-action[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: white;\n}\n\n\n\n.sorteos-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  margin: 2rem 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  border: 1px solid #f8f9fa;\n}\n\n.sorteos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 1.5rem;\n  padding: 1.5rem;\n}\n\n.sorteo-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.sorteo-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n  border-color: #3498db;\n}\n\n.sorteo-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f8f9fa;\n}\n\n.sorteo-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #2c3e50;\n}\n\n.sorteo-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.25rem;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.status-badge.open[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #27ae60, #229954);\n  color: white;\n}\n\n.status-badge.closed[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n  color: white;\n}\n\n.close-time[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #7f8c8d;\n  font-weight: 500;\n}\n\n.sorteo-content[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n\n.winner-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: linear-gradient(135deg, #f8f9fa, #e9ecef);\n  border-radius: 10px;\n}\n\n.winner-number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 2.5rem;\n  font-weight: 800;\n  color: #f39c12;\n  margin-bottom: 0.5rem;\n}\n\n.winner-number[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f39c12;\n}\n\n.factor[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #7f8c8d;\n  font-weight: 600;\n}\n\n.sorteo-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 1rem;\n}\n\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.75rem;\n  border-radius: 8px;\n  border: 2px solid transparent;\n  transition: all 0.2s ease;\n}\n\n.stat-item.vendido[_ngcontent-%COMP%] {\n  background: rgba(52, 152, 219, 0.1);\n  border-color: rgba(52, 152, 219, 0.3);\n}\n\n.stat-item.pagado[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  border-color: rgba(231, 76, 60, 0.3);\n}\n\n.stat-item.ganancia[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  border-color: rgba(39, 174, 96, 0.3);\n}\n\n.stat-item.ganancia.negative[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  border-color: rgba(231, 76, 60, 0.3);\n}\n\n.stat-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #7f8c8d;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.stat-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #2c3e50;\n}\n\n.winner-form[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1.5rem;\n  border-radius: 10px;\n  border: 2px dashed #dee2e6;\n}\n\n.winner-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.winner-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: #495057;\n}\n\n.btn-set-winner[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  background: linear-gradient(135deg, #f39c12, #e67e22);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.btn-set-winner[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #e67e22, #d35400);\n  transform: translateY(-1px);\n}\n\n.btn-set-winner[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.sorteo-open-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #7f8c8d;\n  font-style: italic;\n}\n\n.sorteo-open-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n\n\n\n.ventas-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  margin: 2rem 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  border: 1px solid #f8f9fa;\n  padding: 1.5rem;\n}\n\n.ventas-table-container[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  position: relative;\n}\n\n\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n  border-radius: 8px;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.loading-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #3498db;\n}\n.loading-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #495057;\n}\n\n.ventas-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  transition: opacity 0.3s ease;\n}\n.ventas-table.loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);\n  color: white;\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 1fr;\n  gap: 1rem;\n  padding: 1rem;\n  font-weight: 600;\n  font-size: 0.85rem;\n  letter-spacing: 0.5px;\n}\n\n.table-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 1fr;\n  gap: 1rem;\n  padding: 1rem;\n  border-bottom: 1px solid #f8f9fa;\n  transition: all 0.2s ease;\n  align-items: center;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.btn-table-action[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.6rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  transition: all 0.3s ease;\n  margin-right: 0.5rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 35px;\n  height: 35px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.btn-table-action[_ngcontent-%COMP%]:first-child {\n  background: linear-gradient(135deg, #3498db, #2980b9);\n  color: white;\n}\n.btn-table-action[_ngcontent-%COMP%]:last-child {\n  background: linear-gradient(135deg, #27ae60, #219a52);\n  color: white;\n  margin-right: 0;\n}\n.btn-table-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;\n}\n.btn-table-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.btn-table-action[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.btn-table-action[_ngcontent-%COMP%]:hover:not(:disabled):first-child {\n  background: linear-gradient(135deg, #2980b9, #21618c);\n}\n.btn-table-action[_ngcontent-%COMP%]:hover:not(:disabled):last-child {\n  background: linear-gradient(135deg, #219a52, #1e8449);\n}\n\n\n\n.sorteos-config-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.sorteos-config-table[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-top: 1rem;\n}\n\n.config-table-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);\n  color: white;\n  display: grid;\n  grid-template-columns: 2fr 2fr 2fr 1.5fr;\n  gap: 1rem;\n  padding: 1rem 1.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\n.config-table-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.config-table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 2fr 2fr 1.5fr;\n  gap: 1rem;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #f1f3f4;\n  align-items: center;\n  transition: all 0.2s ease;\n  background: white;\n}\n\n.config-table-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: translateX(3px);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n\n.config-table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.config-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.95rem;\n}\n\n.config-label[_ngcontent-%COMP%] {\n  color: #495057;\n  background: #f8f9fa;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  display: inline-block;\n}\n\n.config-time[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-family: \"Courier New\", monospace;\n  font-weight: 600;\n  background: #e9ecef;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  display: inline-block;\n}\n\n.config-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n\n.btn-config-action[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.8rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  min-width: 70px;\n  justify-content: center;\n}\n\n.btn-config-edit[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db, #2980b9);\n  color: white;\n}\n\n.btn-config-edit[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #2980b9, #21618c);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);\n}\n\n.btn-config-delete[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n  color: white;\n}\n\n.btn-config-delete[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #c0392b, #a93226);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);\n}\n\n\n\n.config-actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.btn-config-edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before {\n  content: \"\\f044\"; \n\n}\n\n.btn-config-delete[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before {\n  content: \"\\f2ed\"; \n\n}\n\n\n\n.accordion-content.collapsed[_ngcontent-%COMP%]   .sorteos-config-table[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media (max-width: 768px) {\n  .config-table-header[_ngcontent-%COMP%], .config-table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n  }\n  .config-table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .config-table-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    padding: 0.25rem 0;\n  }\n  .config-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin-top: 0.5rem;\n  }\n}\n\n\n.users-table-container[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.user-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.user-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);\n  color: white;\n}\n\n.user-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  border: none;\n}\n\n.user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n  border-bottom: 1px solid #f1f3f4;\n}\n\n.user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  vertical-align: middle;\n  border: none;\n}\n\n.user-email[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.95rem;\n}\n\n.user-sucursal[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-style: italic;\n}\n\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n\n.table-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.8rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n\n.table-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.badge.bg-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b) !important;\n  color: white;\n}\n\n.badge.bg-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db, #2980b9) !important;\n  color: white;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.status-badge.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #27ae60, #229954);\n  color: white;\n}\n\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #95a5a6, #7f8c8d);\n  color: white;\n}\n\n\n\n.no-data-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  color: #7f8c8d;\n}\n\n.no-data-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  display: block;\n  color: #bdc3c7;\n}\n\n.no-data-message[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #6c757d;\n}\n\n.no-data-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #95a5a6;\n}\n\n\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n}\n\n.form-input[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n\n.form-input[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  font-weight: 500;\n  color: #495057;\n}\n\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0;\n}\n\n.form-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n\n.preview-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 2px dashed #dee2e6;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-top: 1rem;\n}\n\n.preview-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #495057;\n}\n\n.sorteo-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.time-badge[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #495057;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .user-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 1rem;\n    border: 1px solid #e9ecef;\n    border-radius: 8px;\n    padding: 1rem;\n  }\n  .user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.5rem 0;\n    border: none;\n  }\n  .user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label) \": \";\n    font-weight: 600;\n    color: #495057;\n  }\n  .table-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin-top: 1rem;\n  }\n}\n\n\n\n\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-width: 700px;\n  width: 90vw;\n}\n\n.sale-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border-left: 4px solid #3498db;\n}\n\n.info-row.total-row[_ngcontent-%COMP%] {\n  border-left-color: #27ae60;\n  background: #e8f5e8;\n  font-weight: 600;\n}\n\n.info-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n}\n\n.info-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 500;\n}\n\n.numbers-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.numbers-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #2c3e50;\n  margin-bottom: 1rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.numbers-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n\n.number-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.number-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);\n  color: white;\n  padding: 0.75rem;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);\n  transition: transform 0.2s ease;\n  min-width: 80px;\n}\n\n.number-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);\n}\n\n.number-card[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n\n.number-card[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.9;\n}\n\n.numbers-summary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #dee2e6;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n.summary-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6c757d;\n  font-weight: 500;\n}\n\n.summary-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #2c3e50;\n  font-weight: 600;\n}\n\n.no-numbers[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #6c757d;\n}\n\n.no-numbers[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  color: #ffc107;\n}\n\n.no-numbers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .numbers-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n    gap: 0.5rem;\n  }\n  .numbers-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.25rem;\n  }\n  .info-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    font-weight: 600;\n  }\n}\n\n\n.sorteo-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #6c757d;\n  text-align: center;\n}\n\n.sorteo-loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  color: #007bff;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n.sorteo-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-style: italic;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n\n.btn-set-winner[_ngcontent-%COMP%]:disabled {\n  background: #6c757d !important;\n  border-color: #6c757d !important;\n  cursor: not-allowed !important;\n  opacity: 0.6 !important;\n}\n\n.btn-set-winner[_ngcontent-%COMP%]:disabled:hover {\n  background: #6c757d !important;\n  border-color: #6c757d !important;\n  transform: none !important;\n  box-shadow: none !important;\n}\n\n\n\n.form-input[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa !important;\n  border-color: #dee2e6 !important;\n  color: #6c757d !important;\n  cursor: not-allowed !important;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow-y: auto;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  max-height: 90vh;\n  overflow-y: auto;\n  margin: 1rem;\n  pointer-events: all;\n}\n\n.factors-modal[_ngcontent-%COMP%] {\n  max-width: 600px !important;\n  width: 95% !important;\n}\n\n.factors-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n  position: relative;\n}\n\n.factors-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #2c3e50;\n  font-size: 1.2rem;\n}\n\n.sorteo-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n\n.sorteo-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db, #2980b9);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 15px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n\n.winning-number[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 15px;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n\n.factors-instruction[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  background: linear-gradient(135deg, #e8f5e8, #d4edda);\n  border: 1px solid #c3e6cb;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n.factors-instruction[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-size: 1.1rem;\n  margin-top: 0.1rem;\n}\n\n.factors-instruction[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #155724;\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n\n.factors-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  max-height: 400px;\n  overflow-y: auto;\n  padding-right: 0.5rem;\n}\n\n.factor-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  padding: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n}\n\n.factor-item[_ngcontent-%COMP%]:hover {\n  border-color: #3498db;\n  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.1);\n}\n\n.sucursal-info[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 1rem;\n}\n\n.sucursal-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 1rem;\n}\n\n.sucursal-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n\n.sucursal-users[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n\n.sucursal-users[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n}\n\n.factor-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  min-width: 120px;\n}\n\n.factor-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n\n.input-with-x[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.input-with-x[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 0.5rem 1.5rem 0.5rem 0.5rem;\n  border: 2px solid #e9ecef;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: center;\n  color: #2c3e50;\n  transition: all 0.2s ease;\n}\n\n.input-with-x[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n\n.x-multiplier[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.5rem;\n  color: #3498db;\n  font-weight: 600;\n  font-size: 0.9rem;\n  pointer-events: none;\n}\n\n.loading-factors[_ngcontent-%COMP%], .no-sucursales[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  text-align: center;\n  color: #6c757d;\n}\n\n.loading-factors[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .no-sucursales[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n.loading-factors[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n.no-sucursales[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n\n.loading-factors[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .no-sucursales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n\n\n@media (max-width: 768px) {\n  .factors-modal[_ngcontent-%COMP%] {\n    width: 98% !important;\n    margin: 10px !important;\n  }\n  .factor-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .sucursal-info[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n  .factor-input[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n  .input-with-x[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .sorteo-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .resumen-table-card[_ngcontent-%COMP%]   .table-header-card[_ngcontent-%COMP%], .resumen-table-card[_ngcontent-%COMP%]   .table-row-card[_ngcontent-%COMP%], .resumen-table-card[_ngcontent-%COMP%]   .table-footer-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.2rem;\n    text-align: center;\n  }\n  .resumen-table-card[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%], .resumen-table-card[_ngcontent-%COMP%]   .col-factor[_ngcontent-%COMP%], .resumen-table-card[_ngcontent-%COMP%]   .col-vendido[_ngcontent-%COMP%], .resumen-table-card[_ngcontent-%COMP%]   .col-pagado[_ngcontent-%COMP%], .resumen-table-card[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0.2rem;\n    border-bottom: 1px solid #e9ecef;\n  }\n  .resumen-table-card[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%]:before, .resumen-table-card[_ngcontent-%COMP%]   .col-factor[_ngcontent-%COMP%]:before, .resumen-table-card[_ngcontent-%COMP%]   .col-vendido[_ngcontent-%COMP%]:before, .resumen-table-card[_ngcontent-%COMP%]   .col-pagado[_ngcontent-%COMP%]:before, .resumen-table-card[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%]:before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #6c757d;\n    display: block;\n    font-size: 0.7rem;\n    margin-bottom: 0.2rem;\n  }\n  .resumen-sucursales-card[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    padding: 0.75rem;\n  }\n}\n.resumen-modal[_ngcontent-%COMP%] {\n  max-width: 900px;\n  max-height: 80vh;\n  overflow-y: auto;\n}\n.resumen-modal[_ngcontent-%COMP%]   .sorteo-info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 8px;\n}\n.resumen-modal[_ngcontent-%COMP%]   .sorteo-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%], .resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1.5fr 1.5fr 1.5fr;\n  align-items: center;\n  padding: 0.75rem;\n  gap: 0.5rem;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  border-bottom: 2px solid #dee2e6;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  background-color: white;\n  border-bottom: 1px solid #e9ecef;\n  transition: background-color 0.2s ease;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f8f9fa;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:nth-child(even):hover {\n  background-color: #e9ecef;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745, #20c997);\n  color: white;\n  font-weight: 600;\n  border-top: 2px solid #28a745;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-factor[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  color: #6f42c1;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-vendido[_ngcontent-%COMP%], .resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-pagado[_ngcontent-%COMP%], .resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: \"Courier New\", monospace;\n  font-weight: 500;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-ganancia.positive[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: 600;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-ganancia.negative[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n\n.resumen-sucursales-card[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #495057;\n  font-size: 1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-header-card[_ngcontent-%COMP%], .resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-row-card[_ngcontent-%COMP%], .resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-footer-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1.2fr 1.2fr 1.2fr;\n  align-items: center;\n  padding: 0.5rem;\n  gap: 0.3rem;\n  font-size: 0.85rem;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-header-card[_ngcontent-%COMP%] {\n  background-color: #495057;\n  color: white;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  font-size: 0.75rem;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-row-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-bottom: 1px solid #e9ecef;\n  transition: background-color 0.2s ease;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-row-card[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-row-card[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f8f9fa;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-row-card[_ngcontent-%COMP%]:nth-child(even):hover {\n  background-color: #e9ecef;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-footer-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #198754, #20c997);\n  color: white;\n  font-weight: 600;\n  border-top: 2px solid #198754;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-factor[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  color: #6f42c1;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-vendido[_ngcontent-%COMP%], .resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-pagado[_ngcontent-%COMP%], .resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: \"Courier New\", monospace;\n  font-weight: 500;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-ganancia.positive[_ngcontent-%COMP%] {\n  color: #198754;\n  font-weight: 600;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-ganancia.negative[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-footer-card[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%] {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0xvdGVyaWElMjB2MS9sb3RlcmlhL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsMERBQUE7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsNkRBQUE7RUFDQSw0REFBQTtBRENGOztBQ0VBLHVCQUFBO0FBQ0E7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FEQ0Y7O0FDRUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURDRjs7QUNFQTtFQUNFLGNBQUE7QURDRjs7QUNFQTtFQUNFLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBRENGOztBQ0VBO0VBQ0UsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQ0FBQTtFQUNBLHFDQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQ0FBQTtFQUNBLHFDQUFBO0FEQ0Y7O0FDRUE7RUFDRSxrQ0FBQTtFQUNBLG9DQUFBO0FEQ0Y7O0FDRUE7RUFDRSxrQ0FBQTtFQUNBLG9DQUFBO0FEQ0Y7O0FDRUEseUJBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBRENGOztBQ0VBO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QURDRjs7QUNFQTtFQUNFLDZEQUFBO0FEQ0Y7O0FDRUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURDRjs7QUNFQTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7QURDRjs7QUNFQTtFQUNFLHlCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QURDRjs7QUNFQSxrQ0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURDRjs7QUNFQTtFQUNFLFVBQUE7RUFDQSxnQ0FBQTtBRENGOztBQ0VBO0VBQ0UsVUFBQTtBRENGOztBQ0VBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QURDRjs7QUNFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FEQ0Y7O0FDRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2REFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBRENGOztBQ0VBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEQ0Y7O0FDRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEQ0Y7O0FDRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FEQ0Y7O0FDRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURDRjs7QUNFQTtFQUNFLFVBQUE7QURDRjs7QUNFQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBRENGOztBQ0VBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QURDRjs7QUNFQSxzQ0FBQTtBQUNBO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBRENGOztBQ0VBLHdDQUFBO0FBQ0E7RUFBa0IsZ0JBQUE7QURFbEI7O0FDREE7RUFBbUIsZ0JBQUE7QURLbkI7O0FDSkE7RUFBaUIsZ0JBQUE7QURRakI7O0FDUEE7RUFBdUIsZ0JBQUE7QURXdkI7O0FDVkE7RUFBd0IsZ0JBQUE7QURjeEI7O0FDYkE7RUFBdUIsZ0JBQUE7QURpQnZCOztBQ2hCQTtFQUFrQixnQkFBQTtBRG9CbEI7O0FDbkJBO0VBQWlCLGdCQUFBO0FEdUJqQjs7QUN0QkE7RUFBc0IsZ0JBQUE7QUQwQnRCOztBQ3pCQTtFQUFtQixnQkFBQTtBRDZCbkI7O0FDNUJBO0VBQW1CLGdCQUFBO0FEZ0NuQjs7QUMvQkE7RUFBMEIsZ0JBQUE7QURtQzFCOztBQ2xDQTtFQUFtQixnQkFBQTtBRHNDbkI7O0FDckNBO0VBQWtCLGdCQUFBO0FEeUNsQjs7QUN4Q0E7RUFBa0IsZ0JBQUE7QUQ0Q2xCOztBQzFDQSx3QkFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FENkNGO0FDM0NFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FENkNKOztBQ3pDQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBRDRDRjtBQzFDRTtFQUNFLGlCQUFBO0VBQ0Esa0NBQUE7QUQ0Q0o7O0FDeENBO0VBQ0U7SUFBTyx1QkFBQTtFRDRDUDtFQzNDQTtJQUFLLHlCQUFBO0VEOENMO0FBQ0Y7QUM1Q0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUQ4Q0Y7QUM1Q0U7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRDhDSjs7QUMxQ0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtBRDZDRjs7QUMxQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FENkNGOztBQzFDQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FENkNGOztBQzFDQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FENkNGOztBQzFDQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUQ2Q0Y7O0FDMUNBLG9DQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FENkNGOztBQzFDQSxpQ0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FENkNGOztBQzFDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBRDZDRjs7QUMxQ0E7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FENkNGOztBQzFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxxREFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxxREFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxxREFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxxREFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxxREFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FENkNGOztBQzFDQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRDZDRjs7QUMxQ0EsMEJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FENkNGOztBQzFDQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FENkNGOztBQzFDQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FENkNGOztBQzFDQSxxQ0FBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDZDRjs7QUMxQ0E7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FENkNGOztBQzFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBRDZDRjs7QUMxQ0E7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UscURBQUE7RUFDQSxZQUFBO0FENkNGOztBQzFDQTtFQUNFLHFEQUFBO0VBQ0EsWUFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxpQkFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHFEQUFBO0VBQ0EsbUJBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxjQUFBO0FENkNGOztBQzFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBRDZDRjs7QUMxQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FENkNGOztBQzFDQTtFQUNFLG1DQUFBO0VBQ0EscUNBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0Usa0NBQUE7RUFDQSxvQ0FBQTtBRDZDRjs7QUMxQ0E7RUFDRSxrQ0FBQTtFQUNBLG9DQUFBO0FENkNGOztBQzFDQTtFQUNFLGtDQUFBO0VBQ0Esb0NBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FENkNGOztBQzFDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRDZDRjs7QUMxQ0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FENkNGOztBQzFDQTtFQUNFLG1CQUFBO0FENkNGOztBQzFDQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRDZDRjs7QUMxQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBRDZDRjs7QUMxQ0E7RUFDRSxxREFBQTtFQUNBLDJCQUFBO0FENkNGOztBQzFDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUQ2Q0Y7O0FDMUNBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBRDZDRjs7QUMxQ0Esa0NBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FENkNGOztBQzFDQSxpQ0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDZDRjs7QUMxQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FENkNGO0FDM0NFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUQ2Q0o7QUMxQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FENENKOztBQ3hDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsNkJBQUE7QUQyQ0Y7QUN6Q0U7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUQyQ0o7O0FDdkNBO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUQwQ0Y7O0FDdkNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEMENGOztBQ3ZDQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FEMENGOztBQ3ZDQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5Q0FBQTtBRDBDRjs7QUN2Q0E7RUFDRSxtQkFBQTtBRDBDRjs7QUN2Q0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FEMENGO0FDeENFO0VBQ0UscURBQUE7RUFDQSxZQUFBO0FEMENKO0FDdkNFO0VBQ0UscURBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRHlDSjtBQ3RDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbURBQUE7QUR3Q0o7QUNyQ0U7RUFDRSxpQkFBQTtBRHVDSjs7QUNuQ0E7RUFDRSwyQkFBQTtFQUNBLHlDQUFBO0FEc0NGO0FDcENFO0VBQ0UscURBQUE7QURzQ0o7QUNuQ0U7RUFDRSxxREFBQTtBRHFDSjs7QUNqQ0EseUNBQUE7QUFDQTtFQUNFLGdCQUFBO0FEb0NGOztBQ2pDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QURvQ0Y7O0FDakNBO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QURvQ0Y7O0FDakNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEb0NGOztBQ2pDQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FEb0NGOztBQ2pDQTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQ0FBQTtBRG9DRjs7QUNqQ0E7RUFDRSxtQkFBQTtBRG9DRjs7QUNqQ0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRG9DRjs7QUNqQ0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEb0NGOztBQ2pDQTtFQUNFLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QURvQ0Y7O0FDakNBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBRG9DRjs7QUNqQ0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FEb0NGOztBQ2pDQTtFQUNFLHFEQUFBO0VBQ0EsWUFBQTtBRG9DRjs7QUNqQ0E7RUFDRSxxREFBQTtFQUNBLDJCQUFBO0VBQ0EsOENBQUE7QURvQ0Y7O0FDakNBO0VBQ0UscURBQUE7RUFDQSxZQUFBO0FEb0NGOztBQ2pDQTtFQUNFLHFEQUFBO0VBQ0EsMkJBQUE7RUFDQSw2Q0FBQTtBRG9DRjs7QUNqQ0Esc0RBQUE7QUFDQTtFQUNFLGlCQUFBO0FEb0NGOztBQ2pDQTtFQUNFLGdCQUFBLEVBQUEsWUFBQTtBRG9DRjs7QUNqQ0E7RUFDRSxnQkFBQSxFQUFBLGFBQUE7QURvQ0Y7O0FDakNBLCtDQUFBO0FBQ0E7RUFDRSxhQUFBO0FEb0NGOztBQ2pDQSxzREFBQTtBQUNBO0VBQ0U7O0lBRUUsMEJBQUE7SUFDQSxXQUFBO0VEb0NGO0VDakNBOztJQUVFLGtCQUFBO0VEbUNGO0VDaENBO0lBQ0UsdUJBQUE7SUFDQSxrQkFBQTtFRGtDRjtBQUNGO0FDL0JBLG9DQUFBO0FBQ0E7RUFDRSxrQkFBQTtBRGlDRjs7QUM5QkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtBRGlDRjs7QUM5QkE7RUFDRSw2REFBQTtFQUNBLFlBQUE7QURpQ0Y7O0FDOUJBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtBRGlDRjs7QUM5QkE7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUNBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsbUJBQUE7QURpQ0Y7O0FDOUJBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FEaUNGOztBQzlCQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QURpQ0Y7O0FDOUJBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBRGlDRjs7QUM5QkE7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsZ0VBQUE7RUFDQSxZQUFBO0FEaUNGOztBQzlCQTtFQUNFLGdFQUFBO0VBQ0EsWUFBQTtBRGlDRjs7QUM5QkE7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UscURBQUE7RUFDQSxZQUFBO0FEaUNGOztBQzlCQTtFQUNFLHFEQUFBO0VBQ0EsWUFBQTtBRGlDRjs7QUM5QkEsd0JBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEaUNGOztBQzlCQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FEaUNGOztBQzlCQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRGlDRjs7QUM5QkEsdUJBQUE7QUFDQTtFQUNFLHNCQUFBO0FEaUNGOztBQzlCQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEaUNGOztBQzlCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkNBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UseUJBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FEaUNGOztBQzlCQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURpQ0Y7O0FDOUJBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEaUNGOztBQzlCQSw2QkFBQTtBQUNBO0VBQ0U7SUFDRSxhQUFBO0VEaUNGO0VDOUJBO0lBQ0UsY0FBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RURnQ0Y7RUM3QkE7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VEK0JGO0VDNUJBO0lBQ0UsOEJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUQ4QkY7RUMzQkE7SUFDRSx1QkFBQTtJQUNBLGdCQUFBO0VENkJGO0FBQ0Y7QUMxQkEsMkNBQUE7QUFFQSw0Q0FBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FEMkJGOztBQ3hCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUQyQkY7O0FDeEJBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBRDJCRjs7QUN4QkE7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUQyQkY7O0FDeEJBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUQyQkY7O0FDeEJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FEMkJGOztBQ3hCQTtFQUNFLGtCQUFBO0FEMkJGOztBQ3hCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEMkJGOztBQ3hCQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBRDJCRjs7QUN4QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUQyQkY7O0FDeEJBO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUQyQkY7O0FDeEJBO0VBQ0UsMkJBQUE7RUFDQSw4Q0FBQTtBRDJCRjs7QUN4QkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUQyQkY7O0FDeEJBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FEMkJGOztBQ3hCQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBRDJCRjs7QUN4QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUQyQkY7O0FDeEJBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUQyQkY7O0FDeEJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUQyQkY7O0FDeEJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBRDJCRjs7QUN4QkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FEMkJGOztBQ3hCQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FEMkJGOztBQ3hCQSxzQ0FBQTtBQUNBO0VBQ0U7SUFDRSwyREFBQTtJQUNBLFdBQUE7RUQyQkY7RUN4QkE7SUFDRSxzQkFBQTtJQUNBLFNBQUE7RUQwQkY7RUN2QkE7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtFRHlCRjtFQ3RCQTtJQUNFLGdCQUFBO0VEd0JGO0FBQ0Y7QUNyQkEsb0RBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEdUJGOztBQ3BCQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBRHVCRjs7QUNwQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FEdUJGOztBQ3BCQTtFQUNFO0lBQUssdUJBQUE7RUR3Qkw7RUN2QkE7SUFBTyx5QkFBQTtFRDBCUDtBQUNGO0FDeEJBLDBDQUFBO0FBQ0E7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBRDBCRjs7QUN2QkE7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBRDBCRjs7QUN2QkEsNEJBQUE7QUFDQTtFQUNFLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FEMEJGOztBQ3ZCQSwrQ0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEMEJGOztBQ3ZCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRDBCRjs7QUN2QkE7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0FEMEJGOztBQ3ZCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FEMEJGOztBQ3ZCQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEMEJGOztBQ3ZCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBRDBCRjs7QUN2QkE7RUFDRSxxREFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDBCRjs7QUN2QkE7RUFDRSxxREFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDBCRjs7QUN2QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FEMEJGOztBQ3ZCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEMEJGOztBQ3ZCQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRDBCRjs7QUN2QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FEMEJGOztBQ3ZCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7QUQwQkY7O0FDdkJBO0VBQ0UscUJBQUE7RUFDQSw4Q0FBQTtBRDBCRjs7QUN2QkE7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUQwQkY7O0FDdkJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQwQkY7O0FDdkJBO0VBQ0UsY0FBQTtBRDBCRjs7QUN2QkE7RUFDRSxtQkFBQTtBRDBCRjs7QUN2QkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUQwQkY7O0FDdkJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBRDBCRjs7QUN2QkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FEMEJGOztBQ3ZCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FEMEJGOztBQ3ZCQTtFQUNFLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBRDBCRjs7QUN2QkE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtBRDBCRjs7QUN2QkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FEMEJGOztBQ3ZCQTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUQwQkY7O0FDdkJBOztFQUVFLGlCQUFBO0VBQ0EsbUJBQUE7QUQwQkY7O0FDdkJBO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0FEMEJGOztBQ3ZCQTtFQUNFLGNBQUE7QUQwQkY7O0FDdkJBOztFQUVFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQwQkY7O0FDdkJBLHNDQUFBO0FBQ0E7RUFDRTtJQUNFLHFCQUFBO0lBQ0EsdUJBQUE7RUQwQkY7RUN2QkE7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsU0FBQTtFRHlCRjtFQ3RCQTtJQUNFLGVBQUE7RUR3QkY7RUNyQkE7SUFDRSxvQkFBQTtFRHVCRjtFQ3BCQTtJQUNFLFdBQUE7RURzQkY7RUNuQkE7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtFRHFCRjtFQ2hCRTs7O0lBR0UsMEJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RURrQko7RUNmRTs7Ozs7SUFLRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxnQ0FBQTtFRGlCSjtFQ2ZJOzs7OztJQUNFLHlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EscUJBQUE7RURxQk47RUNoQkE7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VEa0JGO0FBQ0Y7QUNkQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRGdCRjtBQ2RFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRGdCSjtBQ2RJO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURnQk47QUNaRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QURjSjtBQ1pJOzs7RUFHRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBRGNOO0FDWEk7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FEYU47QUNWSTtFQUNFLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtBRFlOO0FDVk07RUFDRSx5QkFBQTtBRFlSO0FDVE07RUFDRSx5QkFBQTtBRFdSO0FDVFE7RUFDRSx5QkFBQTtBRFdWO0FDTkk7RUFDRSxxREFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FEUU47QUNMSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBRE9OO0FDSkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRE1OO0FDSEk7OztFQUdFLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBREtOO0FDRE07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QURHUjtBQ0FNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FERVI7O0FDS0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QURGRjtBQ0lFO0VBQ0UsbUJBQUE7QURGSjtBQ0lJO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FERk47QUNJTTtFQUNFLGNBQUE7QURGUjtBQ09FO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0FETEo7QUNPSTs7O0VBR0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FETE47QUNRSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FETk47QUNTSTtFQUNFLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtBRFBOO0FDU007RUFDRSx5QkFBQTtBRFBSO0FDVU07RUFDRSx5QkFBQTtBRFJSO0FDVVE7RUFDRSx5QkFBQTtBRFJWO0FDYUk7RUFDRSxxREFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FEWE47QUNjSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBRFpOO0FDZUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRGJOO0FDZ0JJOzs7RUFHRSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QURkTjtBQ2tCTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBRGhCUjtBQ21CTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBRGpCUjtBQ3NCSTtFQUNFLHVCQUFBO0FEcEJOIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogQURNSU4gUEFORUwgLSBFU1RJTE8gQ09OIEFDT1JERcODwpNOIFkgTU9EQUxFUyBDRU5UUkFET1MgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuNC4wL2Nzcy9hbGwubWluLmNzc1wiKTtcbi5hZG1pbi1pbnRlcmZhY2Uge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2U5ZWNlZiAxMDAlKTtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi8qID09PT09IEhFQURFUiA9PT09PSAqL1xuLmhlYWRlci1iYXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMmMzZTUwIDAlLCAjMzQ0OTVlIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5hZG1pbi10aXRsZSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYWRtaW4tdGl0bGUgaSB7XG4gIGNvbG9yOiAjMzQ5OGRiO1xufVxuXG4uYnRuLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmJ0bi1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC41KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uaGVhZGVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5idG4tdXNlcnMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ2LCAyMDQsIDExMywgMC4yKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAyMDQsIDExMywgMC4zKTtcbn1cblxuLmJ0bi11c2Vyczpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDYsIDIwNCwgMTEzLCAwLjMpO1xuICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDIwNCwgMTEzLCAwLjUpO1xufVxuXG4uYnRuLWNlcnJhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMxLCA3NiwgNjAsIDAuMik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzEsIDc2LCA2MCwgMC4zKTtcbn1cblxuLmJ0bi1jZXJyYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjMpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjMxLCA3NiwgNjAsIDAuNSk7XG59XG5cbi8qID09PT09IEFDT1JERcODwpNOID09PT09ICovXG4uYWNjb3JkaW9uLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luOiAxLjVyZW0gMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xufVxuXG4uYWNjb3JkaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDQ5NWUgMCUsICMyYzNlNTAgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmFjY29yZGlvbi1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjM2M1MDcwIDAlLCAjMzQ0OTVlIDEwMCUpO1xufVxuXG4uYWNjb3JkaW9uLWhlYWRlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYWNjb3JkaW9uLWhlYWRlciBpLmZhLWNoZXZyb24tZG93biB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uYWNjb3JkaW9uLWhlYWRlciBpLmZhLWNoZXZyb24tZG93bi5yb3RhdGVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmFjY29yZGlvbi1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2U7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYWNjb3JkaW9uLWNvbnRlbnQuc2hvdyB7XG4gIG1heC1oZWlnaHQ6IDIwMDBweDtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuXG4vKiA9PT09PSBNT0RBTEVTIENFTlRSQURPUyA9PT09PSAqL1xuLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgei1pbmRleDogMTA1MDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsLmZhZGUge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGxpbmVhcjtcbn1cblxuLm1vZGFsLnNob3cge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAxcmVtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0NDk1ZSAwJSwgIzJjM2U1MCAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYnRuLWNsb3NlLCAuY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLWNsb3NlOmhvdmVyLCAuY2xvc2U6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYnRuLW1vZGFsIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmJ0bi1tb2RhbC5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1tb2RhbC5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMyOTgwYjk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmJ0bi1tb2RhbC5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLW1vZGFsLmJ0bi1zZWNvbmRhcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5idG4tbW9kYWw6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi8qID09PT09IElDT05PUyBERSBGT05UQVdFU09NRSA9PT09PSAqL1xuLmZhcywgLmZhIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBmb250LXdlaWdodDogOTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLyogRXNwZWPDg8KtZmljb3MgcGFyYSBpY29ub3MgZGUgYWNjaW9uZXMgKi9cbi5mYS1lZGl0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDQ0XCI7XG59XG5cbi5mYS10cmFzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFmOFwiO1xufVxuXG4uZmEta2V5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDg0XCI7XG59XG5cbi5mYS10b2dnbGUtb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDVcIjtcbn1cblxuLmZhLXRvZ2dsZS1vZmY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDRcIjtcbn1cblxuLmZhLXVzZXItcGx1czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIzNFwiO1xufVxuXG4uZmEtcGx1czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2N1wiO1xufVxuXG4uZmEtYnVnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTg4XCI7XG59XG5cbi5mYS1kYXRhYmFzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjMFwiO1xufVxuXG4uZmEtY2xvY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMTdcIjtcbn1cblxuLmZhLXVzZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGMwXCI7XG59XG5cbi5mYS1jaGV2cm9uLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNzhcIjtcbn1cblxuLmZhLXRpbWVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XG59XG5cbi5mYS1zYXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGM3XCI7XG59XG5cbi5mYS1zeW5jOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDIxXCI7XG59XG5cbi8qID09PT09IEZJTFRST1MgPT09PT0gKi9cbi5maWx0ZXJzLWJhciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBnYXA6IDEuNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmlsdGVyLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIG1pbi13aWR0aDogMTYwcHg7XG59XG5cbi5maWx0ZXItZ3JvdXAgbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuLmZpbHRlci1ncm91cCBsYWJlbCBpIHtcbiAgY29sb3I6ICMzNDk4ZGI7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGNvbG9yOiAjMzQ5OGRiO1xufVxuLmxvYWRpbmctaW5kaWNhdG9yIGkge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5mb3JtLWNvbnRyb2wsIC5mb3JtLWlucHV0IHtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmZvcm0tY29udHJvbDpkaXNhYmxlZCwgLmZvcm0taW5wdXQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMSk7XG59XG5cbi5maWx0ZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC43NXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5idG4tZmlsdGVyIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmJ0bi1maWx0ZXIuYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tZmlsdGVyLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI5ODBiOTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uYnRuLWZpbHRlci5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWZpbHRlci5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzVhNjI2ODtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4vKiA9PT09PSBDT05URU5JRE8gUFJJTkNJUEFMID09PT09ICovXG4ubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiA9PT09PSBDQVJEUyBERSBSRVNVTUVOID09PT09ICovXG4uc3VtbWFyeS1jYXJkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnN1bW1hcnktY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y4ZjlmYTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uc3VtbWFyeS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jYXJkLWljb24ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1bW1hcnktY2FyZC52ZW5kaWRvIC5jYXJkLWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiLCAjMjk4MGI5KTtcbn1cblxuLnN1bW1hcnktY2FyZC5wYWdhZG8gLmNhcmQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNzRjM2MsICNjMDM5MmIpO1xufVxuXG4uc3VtbWFyeS1jYXJkLmdhbmFuY2lhIC5jYXJkLWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjdhZTYwLCAjMjI5OTU0KTtcbn1cblxuLnN1bW1hcnktY2FyZC5nYW5hbmNpYS5uZWdhdGl2ZSAuY2FyZC1pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U3NGMzYywgI2MwMzkyYik7XG59XG5cbi5zdW1tYXJ5LWNhcmQudmVudGFzIC5jYXJkLWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjM5YzEyLCAjZTY3ZTIyKTtcbn1cblxuLmNhcmQtY29udGVudCBoMyB7XG4gIG1hcmdpbjogMCAwIDAuMjVyZW0gMDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4uY2FyZC1jb250ZW50IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjN2Y4YzhkO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogPT09PT0gU0VDQ0lPTkVTID09PT09ICovXG4uc2VjdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjhmOWZhO1xufVxuXG4uc2VjdGlvbi1oZWFkZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5zZWN0aW9uLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNzVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmJ0bi1hY3Rpb24ge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qID09PT09IFNFQ0NJT05FUyBERSBTT1JURU9TID09PT09ICovXG4uc29ydGVvcy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY5ZmE7XG59XG5cbi5zb3J0ZW9zLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcbiAgZ2FwOiAxLjVyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLnNvcnRlby1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc29ydGVvLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xufVxuXG4uc29ydGVvLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOWZhO1xufVxuXG4uc29ydGVvLWhlYWRlciBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4uc29ydGVvLXN0YXR1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZ2FwOiAwLjI1cmVtO1xufVxuXG4uc3RhdHVzLWJhZGdlIHtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uc3RhdHVzLWJhZGdlLm9wZW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjdhZTYwLCAjMjI5OTU0KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RhdHVzLWJhZGdlLmNsb3NlZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNzRjM2MsICNjMDM5MmIpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jbG9zZS10aW1lIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjN2Y4YzhkO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc29ydGVvLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLndpbm5lci1zZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICNlOWVjZWYpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ud2lubmVyLW51bWJlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjZjM5YzEyO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi53aW5uZXItbnVtYmVyIGkge1xuICBjb2xvcjogI2YzOWMxMjtcbn1cblxuLmZhY3RvciB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICM3ZjhjOGQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zb3J0ZW8tc3RhdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uc3RhdC1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4uc3RhdC1pdGVtLnZlbmRpZG8ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcbn1cblxuLnN0YXQtaXRlbS5wYWdhZG8ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjMxLCA3NiwgNjAsIDAuMyk7XG59XG5cbi5zdGF0LWl0ZW0uZ2FuYW5jaWEge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNzQsIDk2LCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMzksIDE3NCwgOTYsIDAuMyk7XG59XG5cbi5zdGF0LWl0ZW0uZ2FuYW5jaWEubmVnYXRpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjMxLCA3NiwgNjAsIDAuMyk7XG59XG5cbi5zdGF0LWl0ZW0gLmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzdmOGM4ZDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uc3RhdC1pdGVtIC52YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG5cbi53aW5uZXItZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNkZWUyZTY7XG59XG5cbi53aW5uZXItZm9ybSAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi53aW5uZXItZm9ybSBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4uYnRuLXNldC13aW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YzOWMxMiwgI2U2N2UyMik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYnRuLXNldC13aW5uZXI6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTY3ZTIyLCAjZDM1NDAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uYnRuLXNldC13aW5uZXI6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5zb3J0ZW8tb3Blbi1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICBjb2xvcjogIzdmOGM4ZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc29ydGVvLW9wZW4tbWVzc2FnZSBpIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiA9PT09PSBTRUNDScODwpNOIERFIFZFTlRBUyA9PT09PSAqL1xuLnZlbnRhcy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLnZlbnRhcy10YWJsZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogTG9hZGluZyBvdmVybGF5IHBhcmEgZmlsdHJvcyAqL1xuLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubG9hZGluZy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ubG9hZGluZy1jb250ZW50IGkge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjMzQ5OGRiO1xufVxuLmxvYWRpbmctY29udGVudCBzcGFuIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLnZlbnRhcy10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuLnZlbnRhcy10YWJsZS5sb2FkaW5nIHtcbiAgb3BhY2l0eTogMC42O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnRhYmxlLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDQ5NWUgMCUsICMyYzNlNTAgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMS41ZnIgMWZyIDFmciAxZnIgMWZyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4udGFibGUtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50YWJsZS1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxLjVmciAxZnIgMWZyIDFmciAxZnI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YWJsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4udGFibGUtcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uYnRuLXRhYmxlLWFjdGlvbiB7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjZyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uYnRuLXRhYmxlLWFjdGlvbjpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDk4ZGIsICMyOTgwYjkpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYnRuLXRhYmxlLWFjdGlvbjpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI3YWU2MCwgIzIxOWE1Mik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLmJ0bi10YWJsZS1hY3Rpb246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG59XG4uYnRuLXRhYmxlLWFjdGlvbiBpIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5idG4tdGFibGUtYWN0aW9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5idG4tdGFibGUtYWN0aW9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpOmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI5ODBiOSwgIzIxNjE4Yyk7XG59XG4uYnRuLXRhYmxlLWFjdGlvbjpob3Zlcjpub3QoOmRpc2FibGVkKTpsYXN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzIxOWE1MiwgIzFlODQ0OSk7XG59XG5cbi8qID09PT09IENPTkZJR1VSQUNJw4PCk04gREUgU09SVEVPUyA9PT09PSAqL1xuLnNvcnRlb3MtY29uZmlnLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uc29ydGVvcy1jb25maWctdGFibGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uY29uZmlnLXRhYmxlLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDQ5NWUgMCUsICMyYzNlNTAgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDJmciAxLjVmcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNvbmZpZy10YWJsZS1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbmZpZy10YWJsZS1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMmZyIDEuNWZyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb25maWctdGFibGUtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDNweCk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLmNvbmZpZy10YWJsZS1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5jb25maWctbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG5cbi5jb25maWctbGFiZWwge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbmZpZy10aW1lIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY29uZmlnLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmJ0bi1jb25maWctYWN0aW9uIHtcbiAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuM3JlbTtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bi1jb25maWctZWRpdCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDk4ZGIsICMyOTgwYjkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tY29uZmlnLWVkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjk4MGI5LCAjMjE2MThjKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xufVxuXG4uYnRuLWNvbmZpZy1kZWxldGUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTc0YzNjLCAjYzAzOTJiKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWNvbmZpZy1kZWxldGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYzAzOTJiLCAjYTkzMjI2KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjMxLCA3NiwgNjAsIDAuMyk7XG59XG5cbi8qIEljb25vcyBlc3BlY8ODwq1maWNvcyBwYXJhIGxhIHRhYmxhIGRlIGNvbmZpZ3VyYWNpw4PCs24gKi9cbi5jb25maWctYWN0aW9ucyBpIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5idG4tY29uZmlnLWVkaXQgaTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA0NFwiOyAvKiBmYS1lZGl0ICovXG59XG5cbi5idG4tY29uZmlnLWRlbGV0ZSBpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmVkXCI7IC8qIGZhLXRyYXNoICovXG59XG5cbi8qIEVzdGlsb3MgcGFyYSB3aGVuIGVsIGFjb3JkZcODwrNuIGVzdMODwqEgY2VycmFkbyAqL1xuLmFjY29yZGlvbi1jb250ZW50LmNvbGxhcHNlZCAuc29ydGVvcy1jb25maWctdGFibGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBNZWpvcmFyIHJlc3BvbnNpdmUgcGFyYSBsYSB0YWJsYSBkZSBjb25maWd1cmFjacODwrNuICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbmZpZy10YWJsZS1oZWFkZXIsXG4gIC5jb25maWctdGFibGUtcm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgfVxuICAuY29uZmlnLXRhYmxlLWhlYWRlciA+IGRpdixcbiAgLmNvbmZpZy10YWJsZS1yb3cgPiBkaXYge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMDtcbiAgfVxuICAuY29uZmlnLWFjdGlvbnMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxufVxuLyogPT09PT0gR0VTVEnDg8KTTiBERSBVU1VBUklPUyA9PT09PSAqL1xuLnVzZXJzLXRhYmxlLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLnVzZXItdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLnVzZXItdGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ0OTVlIDAlLCAjMmMzZTUwIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51c2VyLXRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnVzZXItdGFibGUgdGJvZHkgdHIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcbn1cblxuLnVzZXItdGFibGUgdGJvZHkgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4udXNlci10YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnVzZXItdGFibGUgdGJvZHkgdGQge1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udXNlci1lbWFpbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG5cbi51c2VyLXN1Y3Vyc2FsIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnRhYmxlLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnRhYmxlLWFjdGlvbnMgLmJ0biB7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuM3JlbTtcbn1cblxuLnRhYmxlLWFjdGlvbnMgLmJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4uYmFkZ2Uge1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5iYWRnZS5iZy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTc0YzNjLCAjYzAzOTJiKSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWRnZS5iZy1pbmZvIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0OThkYiwgIzI5ODBiOSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RhdHVzLWJhZGdlIHtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uc3RhdHVzLWJhZGdlLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyN2FlNjAsICMyMjk5NTQpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGF0dXMtYmFkZ2UuaW5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTVhNWE2LCAjN2Y4YzhkKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBNZW5zYWplIGRlIG5vIGRhdG9zICovXG4ubm8tZGF0YS1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzcmVtIDJyZW07XG4gIGNvbG9yOiAjN2Y4YzhkO1xufVxuXG4ubm8tZGF0YS1tZXNzYWdlIGkge1xuICBmb250LXNpemU6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2JkYzNjNztcbn1cblxuLm5vLWRhdGEtbWVzc2FnZSBoNCB7XG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5uby1kYXRhLW1lc3NhZ2UgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBjb2xvcjogIzk1YTVhNjtcbn1cblxuLyogTW9kYWxlcyBkZSB1c3VhcmlvICovXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uZm9ybS1pbnB1dCwgLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5mb3JtLWlucHV0OmZvY3VzLCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMSk7XG59XG5cbi5jaGVja2JveC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4uY2hlY2tib3gtbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAwO1xufVxuXG4uZm9ybS10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuXG4udGV4dC1tdXRlZCB7XG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG59XG5cbi5wcmV2aWV3LWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXI6IDJweCBkYXNoZWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ucHJldmlldy1jYXJkIGg2IHtcbiAgbWFyZ2luOiAwIDAgMC43NXJlbSAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi5zb3J0ZW8tcHJldmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4udGltZS1iYWRnZSB7XG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4yNXJlbTtcbn1cblxuLyogUmVzcG9uc2l2ZSBwYXJhIHVzdWFyaW9zICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnVzZXItdGFibGUgdGhlYWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnVzZXItdGFibGUgdGJvZHkgdHIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAudXNlci10YWJsZSB0Ym9keSB0ZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC51c2VyLXRhYmxlIHRib2R5IHRkOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCkgXCI6IFwiO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gIH1cbiAgLnRhYmxlLWFjdGlvbnMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cbn1cbi8qID09PT09IE1PREFMIERFIERFVEFMTEVTIERFIFZFTlRBID09PT09ICovXG4vKiBNb2RhbCBlc3BlY8ODwq1maWNvIHBhcmEgZGV0YWxsZXMgZGUgdmVudGEgKi9cbi5tb2RhbCAubW9kYWwtY29udGVudCB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIHdpZHRoOiA5MHZ3O1xufVxuXG4uc2FsZS1pbmZvLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmluZm8tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzM0OThkYjtcbn1cblxuLmluZm8tcm93LnRvdGFsLXJvdyB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjdhZTYwO1xuICBiYWNrZ3JvdW5kOiAjZThmNWU4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW5mby1yb3cgLmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uaW5mby1yb3cgLnZhbHVlIHtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5udW1iZXJzLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5udW1iZXJzLXNlY3Rpb24gaDQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubnVtYmVycy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICBnYXA6IDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLm51bWJlci1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5udW1iZXItY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDk4ZGIgMCUsICMyOTgwYjkgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIG1pbi13aWR0aDogODBweDtcbn1cblxuLm51bWJlci1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjQpO1xufVxuXG4ubnVtYmVyLWNhcmQgLm51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4ubnVtYmVyLWNhcmQgLmFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5udW1iZXJzLXN1bW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnN1bW1hcnktaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4yNXJlbTtcbn1cblxuLnN1bW1hcnktaXRlbSAubGFiZWwge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3VtbWFyeS1pdGVtIC52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5vLW51bWJlcnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4ubm8tbnVtYmVycyBpIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogI2ZmYzEwNztcbn1cblxuLm5vLW51bWJlcnMgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKiBSZXNwb25zaXZlIHBhcmEgbW9kYWwgZGUgZGV0YWxsZXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubnVtYmVycy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg4MHB4LCAxZnIpKTtcbiAgICBnYXA6IDAuNXJlbTtcbiAgfVxuICAubnVtYmVycy1zdW1tYXJ5IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICAuaW5mby1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAwLjI1cmVtO1xuICB9XG4gIC5pbmZvLXJvdyAudmFsdWUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cbi8qID09PT09IE5VRVZPUyBFU1RJTE9TIFBBUkEgRVNUQURPIERFIENBUkdBID09PT09ICovXG4uc29ydGVvLWxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNvcnRlby1sb2FkaW5nIGkge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uc29ydGVvLWxvYWRpbmcgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4vKiBNZWpvcmFyIGVsIGVzdGFkbyBkaXNhYmxlZCBkZSBib3RvbmVzICovXG4uYnRuLXNldC13aW5uZXI6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuNiAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXNldC13aW5uZXI6ZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKiBNZWpvcmFyIGlucHV0cyBkaXNhYmxlZCAqL1xuLmZvcm0taW5wdXQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2RlZTJlNiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG59XG5cbi8qID09PT09IE1PREFMIERFIEZBQ1RPUkVTIFBPUiBTVUNVUlNBTCA9PT09PSAqL1xuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB6LWluZGV4OiAxMDUwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW46IDFyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi5mYWN0b3JzLW1vZGFsIHtcbiAgbWF4LXdpZHRoOiA2MDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG59XG5cbi5mYWN0b3JzLW1vZGFsIC5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZhY3RvcnMtbW9kYWwgLm1vZGFsLWhlYWRlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnNvcnRlby1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5zb3J0ZW8tYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiLCAjMjk4MGI5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLndpbm5pbmctbnVtYmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U3NGMzYywgI2MwMzkyYik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mYWN0b3JzLWluc3RydWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMC43NXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U4ZjVlOCwgI2Q0ZWRkYSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2U2Y2I7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uZmFjdG9ycy1pbnN0cnVjdGlvbiBpIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBtYXJnaW4tdG9wOiAwLjFyZW07XG59XG5cbi5mYWN0b3JzLWluc3RydWN0aW9uIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMTU1NzI0O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLmZhY3RvcnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmZhY3Rvci1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5mYWN0b3ItaXRlbTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzM0OThkYjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4xKTtcbn1cblxuLnN1Y3Vyc2FsLWluZm8ge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5zdWN1cnNhbC1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5zdWN1cnNhbC1uYW1lIGkge1xuICBjb2xvcjogIzM0OThkYjtcbn1cblxuLnN1Y3Vyc2FsLXVzZXJzIHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cblxuLnN1Y3Vyc2FsLXVzZXJzIHNtYWxsIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4uZmFjdG9yLWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtaW4td2lkdGg6IDEyMHB4O1xufVxuXG4uZmFjdG9yLWlucHV0IGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaW5wdXQtd2l0aC14IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXQtd2l0aC14IGlucHV0IHtcbiAgd2lkdGg6IDgwcHg7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW0gMC41cmVtIDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5pbnB1dC13aXRoLXggaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4xKTtcbn1cblxuLngtbXVsdGlwbGllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNXJlbTtcbiAgY29sb3I6ICMzNDk4ZGI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmxvYWRpbmctZmFjdG9ycyxcbi5uby1zdWN1cnNhbGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW0gMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuLmxvYWRpbmctZmFjdG9ycyBpLFxuLm5vLXN1Y3Vyc2FsZXMgaSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubG9hZGluZy1mYWN0b3JzIGkge1xuICBjb2xvcjogIzM0OThkYjtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLm5vLXN1Y3Vyc2FsZXMgaSB7XG4gIGNvbG9yOiAjZTc0YzNjO1xufVxuXG4ubG9hZGluZy1mYWN0b3JzIHAsXG4ubm8tc3VjdXJzYWxlcyBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIFJlc3BvbnNpdmUgcGFyYSBtb2RhbCBkZSBmYWN0b3JlcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mYWN0b3JzLW1vZGFsIHtcbiAgICB3aWR0aDogOTglICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZhY3Rvci1pdGVtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICAuc3VjdXJzYWwtaW5mbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIC5mYWN0b3ItaW5wdXQge1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIC5pbnB1dC13aXRoLXggaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zb3J0ZW8taW5mbyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDAuNXJlbTtcbiAgfVxuICAucmVzdW1lbi10YWJsZS1jYXJkIC50YWJsZS1oZWFkZXItY2FyZCxcbiAgLnJlc3VtZW4tdGFibGUtY2FyZCAudGFibGUtcm93LWNhcmQsXG4gIC5yZXN1bWVuLXRhYmxlLWNhcmQgLnRhYmxlLWZvb3Rlci1jYXJkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDAuMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnJlc3VtZW4tdGFibGUtY2FyZCAuY29sLXN1Y3Vyc2FsLFxuICAucmVzdW1lbi10YWJsZS1jYXJkIC5jb2wtZmFjdG9yLFxuICAucmVzdW1lbi10YWJsZS1jYXJkIC5jb2wtdmVuZGlkbyxcbiAgLnJlc3VtZW4tdGFibGUtY2FyZCAuY29sLXBhZ2FkbyxcbiAgLnJlc3VtZW4tdGFibGUtY2FyZCAuY29sLWdhbmFuY2lhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC4ycmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuICB9XG4gIC5yZXN1bWVuLXRhYmxlLWNhcmQgLmNvbC1zdWN1cnNhbDpiZWZvcmUsXG4gIC5yZXN1bWVuLXRhYmxlLWNhcmQgLmNvbC1mYWN0b3I6YmVmb3JlLFxuICAucmVzdW1lbi10YWJsZS1jYXJkIC5jb2wtdmVuZGlkbzpiZWZvcmUsXG4gIC5yZXN1bWVuLXRhYmxlLWNhcmQgLmNvbC1wYWdhZG86YmVmb3JlLFxuICAucmVzdW1lbi10YWJsZS1jYXJkIC5jb2wtZ2FuYW5jaWE6YmVmb3JlIHtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xuICB9XG4gIC5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICB9XG59XG4ucmVzdW1lbi1tb2RhbCB7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ucmVzdW1lbi1tb2RhbCAuc29ydGVvLWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ucmVzdW1lbi1tb2RhbCAuc29ydGVvLWluZm8gaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLnRhYmxlLWhlYWRlcixcbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC50YWJsZS1yb3csXG4ucmVzdW1lbi1tb2RhbCAucmVzdW1lbi10YWJsZSAudGFibGUtZm9vdGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDEuNWZyIDEuNWZyIDEuNWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC50YWJsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4ucmVzdW1lbi1tb2RhbCAucmVzdW1lbi10YWJsZSAudGFibGUtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC50YWJsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLnRhYmxlLXJvdzpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLnRhYmxlLXJvdzpudGgtY2hpbGQoZXZlbik6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xufVxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLnRhYmxlLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUsICMyMGM5OTcpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMjhhNzQ1O1xufVxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLmNvbC1zdWN1cnNhbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLmNvbC1mYWN0b3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNmY0MmMxO1xufVxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLmNvbC12ZW5kaWRvLFxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLmNvbC1wYWdhZG8sXG4ucmVzdW1lbi1tb2RhbCAucmVzdW1lbi10YWJsZSAuY29sLWdhbmFuY2lhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC5jb2wtZ2FuYW5jaWEucG9zaXRpdmUge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC5jb2wtZ2FuYW5jaWEubmVnYXRpdmUge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQgLnJlc3VtZW4taGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi1oZWFkZXIgaDUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLWhlYWRlciBoNSBpIHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQgLnJlc3VtZW4tdGFibGUtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi10YWJsZS1jYXJkIC50YWJsZS1oZWFkZXItY2FyZCxcbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi10YWJsZS1jYXJkIC50YWJsZS1yb3ctY2FyZCxcbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi10YWJsZS1jYXJkIC50YWJsZS1mb290ZXItY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxLjJmciAxLjJmciAxLjJmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBnYXA6IDAuM3JlbTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLnRhYmxlLWhlYWRlci1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTA1NztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi10YWJsZS1jYXJkIC50YWJsZS1yb3ctY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQgLnJlc3VtZW4tdGFibGUtY2FyZCAudGFibGUtcm93LWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLnRhYmxlLXJvdy1jYXJkOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQgLnJlc3VtZW4tdGFibGUtY2FyZCAudGFibGUtcm93LWNhcmQ6bnRoLWNoaWxkKGV2ZW4pOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbn1cbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi10YWJsZS1jYXJkIC50YWJsZS1mb290ZXItY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxOTg3NTQsICMyMGM5OTcpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTk4NzU0O1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLmNvbC1zdWN1cnNhbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLmNvbC1mYWN0b3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNmY0MmMxO1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLmNvbC12ZW5kaWRvLFxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLmNvbC1wYWdhZG8sXG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQgLnJlc3VtZW4tdGFibGUtY2FyZCAuY29sLWdhbmFuY2lhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi10YWJsZS1jYXJkIC5jb2wtZ2FuYW5jaWEucG9zaXRpdmUge1xuICBjb2xvcjogIzE5ODc1NDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi10YWJsZS1jYXJkIC5jb2wtZ2FuYW5jaWEubmVnYXRpdmUge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi10YWJsZS1jYXJkIC50YWJsZS1mb290ZXItY2FyZCAuY29sLWdhbmFuY2lhIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59IiwiLyogQURNSU4gUEFORUwgLSBFU1RJTE8gQ09OIEFDT1JERcODwpNOIFkgTU9EQUxFUyBDRU5UUkFET1MgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS82LjQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuXHJcbi5hZG1pbi1pbnRlcmZhY2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEgMCUsICNlOWVjZWYgMTAwJSk7XHJcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiA9PT09PSBIRUFERVIgPT09PT0gKi9cclxuLmhlYWRlci1iYXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyYzNlNTAgMCUsICMzNDQ5NWUgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmFkbWluLXRpdGxlIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5hZG1pbi10aXRsZSBpIHtcclxuICBjb2xvcjogIzM0OThkYjtcclxufVxyXG5cclxuLmJ0bi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLWhlYWRlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC41KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5oZWFkZXItYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmJ0bi11c2VycyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0NiwgMjA0LCAxMTMsIDAuMik7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAyMDQsIDExMywgMC4zKTtcclxufVxyXG5cclxuLmJ0bi11c2Vyczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0NiwgMjA0LCAxMTMsIDAuMyk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAyMDQsIDExMywgMC41KTtcclxufVxyXG5cclxuLmJ0bi1jZXJyYXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMxLCA3NiwgNjAsIDAuMik7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjMpO1xyXG59XHJcblxyXG4uYnRuLWNlcnJhcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC4zKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjMxLCA3NiwgNjAsIDAuNSk7XHJcbn1cclxuXHJcbi8qID09PT09IEFDT1JERcODwpNOID09PT09ICovXHJcbi5hY2NvcmRpb24tc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW46IDEuNXJlbSAwO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ0OTVlIDAlLCAjMmMzZTUwIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWhlYWRlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzNjNTA3MCAwJSwgIzM0NDk1ZSAxMDAlKTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1oZWFkZXIgaDMge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1oZWFkZXIgaS5mYS1jaGV2cm9uLWRvd24ge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5hY2NvcmRpb24taGVhZGVyIGkuZmEtY2hldnJvbi1kb3duLnJvdGF0ZWQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24tY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWNvbnRlbnQuc2hvdyB7XHJcbiAgbWF4LWhlaWdodDogMjAwMHB4O1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG5cclxuLyogPT09PT0gTU9EQUxFUyBDRU5UUkFET1MgPT09PT0gKi9cclxuLm1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICB6LWluZGV4OiAxMDUwO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLmZhZGUge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XHJcbn1cclxuXHJcbi5tb2RhbC5zaG93IHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDEwcHggNTBweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ0OTVlIDAlLCAjMmMzZTUwIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5idG4tY2xvc2UsIC5jbG9zZSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1jbG9zZTpob3ZlciwgLmNsb3NlOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYnRuLW1vZGFsIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLW1vZGFsLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1tb2RhbC5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5idG4tbW9kYWwuYnRuLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tbW9kYWwuYnRuLXNlY29uZGFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogIzVhNjI2ODtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5idG4tbW9kYWw6ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4vKiA9PT09PSBJQ09OT1MgREUgRk9OVEFXRVNPTUUgPT09PT0gKi9cclxuLmZhcywgLmZhIHtcclxuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4vKiBFc3BlY8ODwq1maWNvcyBwYXJhIGljb25vcyBkZSBhY2Npb25lcyAqL1xyXG4uZmEtZWRpdDpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjA0NFwiOyB9XHJcbi5mYS10cmFzaDpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjFmOFwiOyB9XHJcbi5mYS1rZXk6YmVmb3JlIHsgY29udGVudDogXCJcXGYwODRcIjsgfVxyXG4uZmEtdG9nZ2xlLW9uOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxmMjA1XCI7IH1cclxuLmZhLXRvZ2dsZS1vZmY6YmVmb3JlIHsgY29udGVudDogXCJcXGYyMDRcIjsgfVxyXG4uZmEtdXNlci1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxmMjM0XCI7IH1cclxuLmZhLXBsdXM6YmVmb3JlIHsgY29udGVudDogXCJcXGYwNjdcIjsgfVxyXG4uZmEtYnVnOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxmMTg4XCI7IH1cclxuLmZhLWRhdGFiYXNlOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxmMWMwXCI7IH1cclxuLmZhLWNsb2NrOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxmMDE3XCI7IH1cclxuLmZhLXVzZXJzOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxmMGMwXCI7IH1cclxuLmZhLWNoZXZyb24tZG93bjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjA3OFwiOyB9XHJcbi5mYS10aW1lczpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjAwZFwiOyB9XHJcbi5mYS1zYXZlOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxmMGM3XCI7IH1cclxuLmZhLXN5bmM6YmVmb3JlIHsgY29udGVudDogJ1xcZjAyMSc7IH1cclxuXHJcbi8qID09PT09IEZJTFRST1MgPT09PT0gKi9cclxuLmZpbHRlcnMtYmFyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmlsdGVyLWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuLmZpbHRlci1ncm91cCBsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogIzM0OThkYjtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2FkaW5nLWluZGljYXRvciB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLCAuZm9ybS1pbnB1dCB7XHJcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBcclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICBib3JkZXItY29sb3I6ICNkZWUyZTY7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzLCAuZm9ybS1pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjEpO1xyXG59XHJcblxyXG4uZmlsdGVyLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLWZpbHRlciB7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmJ0bi1maWx0ZXIuYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWZpbHRlci5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzI5ODBiOTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5idG4tZmlsdGVyLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWZpbHRlci5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLyogPT09PT0gQ09OVEVOSURPIFBSSU5DSVBBTCA9PT09PSAqL1xyXG4ubWFpbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vKiA9PT09PSBDQVJEUyBERSBSRVNVTUVOID09PT09ICovXHJcbi5zdW1tYXJ5LWNhcmRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxufVxyXG5cclxuLmNhcmQtaWNvbiB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZC52ZW5kaWRvIC5jYXJkLWljb24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDk4ZGIsICMyOTgwYjkpO1xyXG59XHJcblxyXG4uc3VtbWFyeS1jYXJkLnBhZ2FkbyAuY2FyZC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTc0YzNjLCAjYzAzOTJiKTtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZC5nYW5hbmNpYSAuY2FyZC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjdhZTYwLCAjMjI5OTU0KTtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZC5nYW5hbmNpYS5uZWdhdGl2ZSAuY2FyZC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTc0YzNjLCAjYzAzOTJiKTtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZC52ZW50YXMgLmNhcmQtaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YzOWMxMiwgI2U2N2UyMik7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQgaDMge1xyXG4gIG1hcmdpbjogMCAwIDAuMjVyZW0gMDtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiA9PT09PSBTRUNDSU9ORVMgPT09PT0gKi9cclxuLnNlY3Rpb24taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y4ZjlmYTtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiA9PT09PSBTRUNDSU9ORVMgREUgU09SVEVPUyA9PT09PSAqL1xyXG4uc29ydGVvcy1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5zb3J0ZW9zLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcblxyXG4uc29ydGVvLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNvcnRlby1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gIGJvcmRlci1jb2xvcjogIzM0OThkYjtcclxufVxyXG5cclxuLnNvcnRlby1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcclxufVxyXG5cclxuLnNvcnRlby1oZWFkZXIgaDQge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG4uc29ydGVvLXN0YXR1cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBnYXA6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDAuMzVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFkZ2Uub3BlbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI3YWU2MCwgIzIyOTk1NCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3RhdHVzLWJhZGdlLmNsb3NlZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U3NGMzYywgI2MwMzkyYik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2xvc2UtdGltZSB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnNvcnRlby1jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLndpbm5lci1zZWN0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgI2U5ZWNlZik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLndpbm5lci1udW1iZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjZjM5YzEyO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLndpbm5lci1udW1iZXIgaSB7XHJcbiAgY29sb3I6ICNmMzljMTI7XHJcbn1cclxuXHJcbi5mYWN0b3Ige1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc29ydGVvLXN0YXRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnN0YXQtaXRlbSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5zdGF0LWl0ZW0udmVuZGlkbyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuMSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcclxufVxyXG5cclxuLnN0YXQtaXRlbS5wYWdhZG8ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMxLCA3NiwgNjAsIDAuMSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjMpO1xyXG59XHJcblxyXG4uc3RhdC1pdGVtLmdhbmFuY2lhIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAxNzQsIDk2LCAwLjEpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgzOSwgMTc0LCA5NiwgMC4zKTtcclxufVxyXG5cclxuLnN0YXQtaXRlbS5nYW5hbmNpYS5uZWdhdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC4xKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjMxLCA3NiwgNjAsIDAuMyk7XHJcbn1cclxuXHJcbi5zdGF0LWl0ZW0gLmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjN2Y4YzhkO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi5zdGF0LWl0ZW0gLnZhbHVlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG4ud2lubmVyLWZvcm0ge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNkZWUyZTY7XHJcbn1cclxuXHJcbi53aW5uZXItZm9ybSAuZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLndpbm5lci1mb3JtIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLmJ0bi1zZXQtd2lubmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMzljMTIsICNlNjdlMjIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLXNldC13aW5uZXI6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNjdlMjIsICNkMzU0MDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmJ0bi1zZXQtd2lubmVyOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLnNvcnRlby1vcGVuLW1lc3NhZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGNvbG9yOiAjN2Y4YzhkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnNvcnRlby1vcGVuLW1lc3NhZ2UgaSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogPT09PT0gU0VDQ0nDg8KTTiBERSBWRU5UQVMgPT09PT0gKi9cclxuLnZlbnRhcy1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcblxyXG4udmVudGFzLXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLyogTG9hZGluZyBvdmVybGF5IHBhcmEgZmlsdHJvcyAqL1xyXG4ubG9hZGluZy1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIFxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6ICMzNDk4ZGI7XHJcbiAgfVxyXG4gIFxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gIH1cclxufVxyXG5cclxuLnZlbnRhcy10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgXHJcbiAgJi5sb2FkaW5nIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnRhYmxlLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0NDk1ZSAwJSwgIzJjM2U1MCAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxLjVmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4udGFibGUtYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udGFibGUtcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDEuNWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICBnYXA6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZS1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG4udGFibGUtcm93Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tdGFibGUtYWN0aW9uIHtcclxuICBwYWRkaW5nOiAwLjRyZW0gMC42cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIFxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0OThkYiwgIzI5ODBiOSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjdhZTYwLCAjMjE5YTUyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjEpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLXRhYmxlLWFjdGlvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gIFxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI5ODBiOSwgIzIxNjE4Yyk7XHJcbiAgfVxyXG4gIFxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjE5YTUyLCAjMWU4NDQ5KTtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09IENPTkZJR1VSQUNJw4PCk04gREUgU09SVEVPUyA9PT09PSAqL1xyXG4uc29ydGVvcy1jb25maWctc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLnNvcnRlb3MtY29uZmlnLXRhYmxlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5jb25maWctdGFibGUtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ0OTVlIDAlLCAjMmMzZTUwIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAyZnIgMS41ZnI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb25maWctdGFibGUtYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29uZmlnLXRhYmxlLXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMmZyIDEuNWZyO1xyXG4gIGdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5jb25maWctdGFibGUtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjA1KTtcclxufVxyXG5cclxuLmNvbmZpZy10YWJsZS1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLmNvbmZpZy1uYW1lIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxufVxyXG5cclxuLmNvbmZpZy1sYWJlbCB7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jb25maWctdGltZSB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNvbmZpZy1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5idG4tY29uZmlnLWFjdGlvbiB7XHJcbiAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuM3JlbTtcclxuICBtaW4td2lkdGg6IDcwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tY29uZmlnLWVkaXQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDk4ZGIsICMyOTgwYjkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1jb25maWctZWRpdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI5ODBiOSwgIzIxNjE4Yyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XHJcbn1cclxuXHJcbi5idG4tY29uZmlnLWRlbGV0ZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U3NGMzYywgI2MwMzkyYik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWNvbmZpZy1kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNjMDM5MmIsICNhOTMyMjYpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjMxLCA3NiwgNjAsIDAuMyk7XHJcbn1cclxuXHJcbi8qIEljb25vcyBlc3BlY8ODwq1maWNvcyBwYXJhIGxhIHRhYmxhIGRlIGNvbmZpZ3VyYWNpw4PCs24gKi9cclxuLmNvbmZpZy1hY3Rpb25zIGkge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uYnRuLWNvbmZpZy1lZGl0IGk6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxmMDQ0JzsgLyogZmEtZWRpdCAqL1xyXG59XHJcblxyXG4uYnRuLWNvbmZpZy1kZWxldGUgaTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdcXGYyZWQnOyAvKiBmYS10cmFzaCAqL1xyXG59XHJcblxyXG4vKiBFc3RpbG9zIHBhcmEgd2hlbiBlbCBhY29yZGXDg8KzbiBlc3TDg8KhIGNlcnJhZG8gKi9cclxuLmFjY29yZGlvbi1jb250ZW50LmNvbGxhcHNlZCAuc29ydGVvcy1jb25maWctdGFibGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIE1lam9yYXIgcmVzcG9uc2l2ZSBwYXJhIGxhIHRhYmxhIGRlIGNvbmZpZ3VyYWNpw4PCs24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbmZpZy10YWJsZS1oZWFkZXIsXHJcbiAgLmNvbmZpZy10YWJsZS1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbmZpZy10YWJsZS1oZWFkZXIgPiBkaXYsXHJcbiAgLmNvbmZpZy10YWJsZS1yb3cgPiBkaXYge1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwO1xyXG4gIH1cclxuICBcclxuICAuY29uZmlnLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PSBHRVNUScODwpNOIERFIFVTVUFSSU9TID09PT09ICovXHJcbi51c2Vycy10YWJsZS1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG5cclxuLnVzZXItdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLDAsMCwwLjA4KTtcclxufVxyXG5cclxuLnVzZXItdGFibGUgdGhlYWQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDQ5NWUgMCUsICMyYzNlNTAgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udXNlci10YWJsZSB0aGVhZCB0aCB7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi51c2VyLXRhYmxlIHRib2R5IHRyIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmM2Y0O1xyXG59XHJcblxyXG4udXNlci10YWJsZSB0Ym9keSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbn1cclxuXHJcbi51c2VyLXRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi51c2VyLXRhYmxlIHRib2R5IHRkIHtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnVzZXItZW1haWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG59XHJcblxyXG4udXNlci1zdWN1cnNhbCB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4udGFibGUtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4udGFibGUtYWN0aW9ucyAuYnRuIHtcclxuICBwYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuM3JlbTtcclxufVxyXG5cclxuLnRhYmxlLWFjdGlvbnMgLmJ0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwwLjE1KTtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBwYWRkaW5nOiAwLjM1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4uYmFkZ2UuYmctZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTc0YzNjLCAjYzAzOTJiKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJhZGdlLmJnLWluZm8ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDk4ZGIsICMyOTgwYjkpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3RhdHVzLWJhZGdlIHtcclxuICBwYWRkaW5nOiAwLjM1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4uc3RhdHVzLWJhZGdlLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI3YWU2MCwgIzIyOTk1NCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3RhdHVzLWJhZGdlLmluYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTVhNWE2LCAjN2Y4YzhkKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIE1lbnNhamUgZGUgbm8gZGF0b3MgKi9cclxuLm5vLWRhdGEtbWVzc2FnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDNyZW0gMnJlbTtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxufVxyXG5cclxuLm5vLWRhdGEtbWVzc2FnZSBpIHtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2JkYzNjNztcclxufVxyXG5cclxuLm5vLWRhdGEtbWVzc2FnZSBoNCB7XHJcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLm5vLWRhdGEtbWVzc2FnZSBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGNvbG9yOiAjOTVhNWE2O1xyXG59XHJcblxyXG4vKiBNb2RhbGVzIGRlIHVzdWFyaW8gKi9cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmZvcm0taW5wdXQsIC5mb3JtLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0OmZvY3VzLCAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogIzM0OThkYjtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMSk7XHJcbn1cclxuXHJcbi5jaGVja2JveC1sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4uY2hlY2tib3gtbGFiZWwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mb3JtLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbn1cclxuXHJcbi50ZXh0LW11dGVkIHtcclxuICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJldmlldy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZGVlMmU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5wcmV2aWV3LWNhcmQgaDYge1xyXG4gIG1hcmdpbjogMCAwIDAuNzVyZW0gMDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4uc29ydGVvLXByZXZpZXcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4udGltZS1iYWRnZSB7XHJcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC4yNXJlbTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBwYXJhIHVzdWFyaW9zICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC51c2VyLXRhYmxlIHRoZWFkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2VyLXRhYmxlIHRib2R5IHRyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAudXNlci10YWJsZSB0Ym9keSB0ZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudXNlci10YWJsZSB0Ym9keSB0ZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCkgXCI6IFwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gIH1cclxuICBcclxuICAudGFibGUtYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PSBNT0RBTCBERSBERVRBTExFUyBERSBWRU5UQSA9PT09PSAqL1xyXG5cclxuLyogTW9kYWwgZXNwZWPDg8KtZmljbyBwYXJhIGRldGFsbGVzIGRlIHZlbnRhICovXHJcbi5tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICB3aWR0aDogOTB2dztcclxufVxyXG5cclxuLnNhbGUtaW5mby1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5pbmZvLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzM0OThkYjtcclxufVxyXG5cclxuLmluZm8tcm93LnRvdGFsLXJvdyB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMyN2FlNjA7XHJcbiAgYmFja2dyb3VuZDogI2U4ZjVlODtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaW5mby1yb3cgLmxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uaW5mby1yb3cgLnZhbHVlIHtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubnVtYmVycy1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuXHJcbi5udW1iZXJzLXNlY3Rpb24gaDQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5udW1iZXJzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTAwcHgsIDFmcikpO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5udW1iZXItaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm51bWJlci1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiIDAlLCAjMjk4MGI5IDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gIG1pbi13aWR0aDogODBweDtcclxufVxyXG5cclxuLm51bWJlci1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC40KTtcclxufVxyXG5cclxuLm51bWJlci1jYXJkIC5udW1iZXIge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxufVxyXG5cclxuLm51bWJlci1jYXJkIC5hbW91bnQge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLm51bWJlcnMtc3VtbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC4yNXJlbTtcclxufVxyXG5cclxuLnN1bW1hcnktaXRlbSAubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc3VtbWFyeS1pdGVtIC52YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm5vLW51bWJlcnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4ubm8tbnVtYmVycyBpIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBjb2xvcjogI2ZmYzEwNztcclxufVxyXG5cclxuLm5vLW51bWJlcnMgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBwYXJhIG1vZGFsIGRlIGRldGFsbGVzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5udW1iZXJzLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoODBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLm51bWJlcnMtc3VtbWFyeSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuaW5mby1yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAwLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAuaW5mby1yb3cgLnZhbHVlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PSBOVUVWT1MgRVNUSUxPUyBQQVJBIEVTVEFETyBERSBDQVJHQSA9PT09PSAqL1xyXG4uc29ydGVvLWxvYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc29ydGVvLWxvYWRpbmcgaSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLnNvcnRlby1sb2FkaW5nIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuLyogTWVqb3JhciBlbCBlc3RhZG8gZGlzYWJsZWQgZGUgYm90b25lcyAqL1xyXG4uYnRuLXNldC13aW5uZXI6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICM2Yzc1N2QgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC42ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tc2V0LXdpbm5lcjpkaXNhYmxlZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzZjNzU3ZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogTWVqb3JhciBpbnB1dHMgZGlzYWJsZWQgKi9cclxuLmZvcm0taW5wdXQ6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNkZWUyZTYgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogPT09PT0gTU9EQUwgREUgRkFDVE9SRVMgUE9SIFNVQ1VSU0FMID09PT09ICovXHJcbi5tb2RhbC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICB6LWluZGV4OiAxMDUwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbn1cclxuXHJcbi5mYWN0b3JzLW1vZGFsIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmFjdG9ycy1tb2RhbCAubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZmFjdG9ycy1tb2RhbCAubW9kYWwtaGVhZGVyIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uc29ydGVvLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4uc29ydGVvLWJhZGdlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiLCAjMjk4MGI5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi53aW5uaW5nLW51bWJlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U3NGMzYywgI2MwMzkyYik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZmFjdG9ycy1pbnN0cnVjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U4ZjVlOCwgI2Q0ZWRkYSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mYWN0b3JzLWluc3RydWN0aW9uIGkge1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMXJlbTtcclxufVxyXG5cclxuLmZhY3RvcnMtaW5zdHJ1Y3Rpb24gcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiAjMTU1NzI0O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbn1cclxuXHJcbi5mYWN0b3JzLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5mYWN0b3ItaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uZmFjdG9yLWl0ZW06aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzM0OThkYjtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjEpO1xyXG59XHJcblxyXG4uc3VjdXJzYWwtaW5mbyB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5zdWN1cnNhbC1uYW1lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5zdWN1cnNhbC1uYW1lIGkge1xyXG4gIGNvbG9yOiAjMzQ5OGRiO1xyXG59XHJcblxyXG4uc3VjdXJzYWwtdXNlcnMge1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5zdWN1cnNhbC11c2VycyBzbWFsbCB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5mYWN0b3ItaW5wdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLmZhY3Rvci1pbnB1dCBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uaW5wdXQtd2l0aC14IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXQtd2l0aC14IGlucHV0IHtcclxuICB3aWR0aDogODBweDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtIDAuNXJlbSAwLjVyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5pbnB1dC13aXRoLXggaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4xKTtcclxufVxyXG5cclxuLngtbXVsdGlwbGllciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwLjVyZW07XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmxvYWRpbmctZmFjdG9ycyxcclxuLm5vLXN1Y3Vyc2FsZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDNyZW0gMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWZhY3RvcnMgaSxcclxuLm5vLXN1Y3Vyc2FsZXMgaSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmxvYWRpbmctZmFjdG9ycyBpIHtcclxuICBjb2xvcjogIzM0OThkYjtcclxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4ubm8tc3VjdXJzYWxlcyBpIHtcclxuICBjb2xvcjogI2U3NGMzYztcclxufVxyXG5cclxuLmxvYWRpbmctZmFjdG9ycyBwLFxyXG4ubm8tc3VjdXJzYWxlcyBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgcGFyYSBtb2RhbCBkZSBmYWN0b3JlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZmFjdG9ycy1tb2RhbCB7XHJcbiAgICB3aWR0aDogOTglICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmZhY3Rvci1pdGVtIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGdhcDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnN1Y3Vyc2FsLWluZm8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuZmFjdG9yLWlucHV0IHtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtd2l0aC14IGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuc29ydGVvLWluZm8ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJlc3BvbnNpdmUgcGFyYSB0YWJsYSBkZSByZXN1bWVuIGVuIGNhcmRzXHJcbiAgLnJlc3VtZW4tdGFibGUtY2FyZCB7XHJcbiAgICAudGFibGUtaGVhZGVyLWNhcmQsXHJcbiAgICAudGFibGUtcm93LWNhcmQsXHJcbiAgICAudGFibGUtZm9vdGVyLWNhcmQge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgZ2FwOiAwLjJyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbC1zdWN1cnNhbCxcclxuICAgIC5jb2wtZmFjdG9yLFxyXG4gICAgLmNvbC12ZW5kaWRvLFxyXG4gICAgLmNvbC1wYWdhZG8sXHJcbiAgICAuY29sLWdhbmFuY2lhIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgICBcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXN0aWxvcyBlc3BlY8ODwq1maWNvcyBwYXJhIGVsIG1vZGFsIGRlIHJlc3VtZW5cclxuLnJlc3VtZW4tbW9kYWwge1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWF4LWhlaWdodDogODB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIFxyXG4gIC5zb3J0ZW8taW5mbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIFxyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucmVzdW1lbi10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgXHJcbiAgICAudGFibGUtaGVhZGVyLFxyXG4gICAgLnRhYmxlLXJvdyxcclxuICAgIC50YWJsZS1mb290ZXIge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMS41ZnIgMS41ZnIgMS41ZnI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFibGUtcm93IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcclxuICAgICAgXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRhYmxlLWZvb3RlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUsICMyMGM5OTcpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMjhhNzQ1O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sLXN1Y3Vyc2FsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtZmFjdG9yIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogIzZmNDJjMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbC12ZW5kaWRvLFxyXG4gICAgLmNvbC1wYWdhZG8sXHJcbiAgICAuY29sLWdhbmFuY2lhIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtZ2FuYW5jaWEge1xyXG4gICAgICAmLnBvc2l0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzI4YTc0NTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLm5lZ2F0aXZlIHtcclxuICAgICAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFc3RpbG9zIHBhcmEgcmVzdW1lbiBkZSBzdWN1cnNhbGVzIGVuIGNhcmRzXHJcbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2U5ZWNlZiAxMDAlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBcclxuICAucmVzdW1lbi1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIFxyXG4gICAgaDUge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICBcclxuICAgICAgaSB7XHJcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJlc3VtZW4tdGFibGUtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIFxyXG4gICAgLnRhYmxlLWhlYWRlci1jYXJkLFxyXG4gICAgLnRhYmxlLXJvdy1jYXJkLFxyXG4gICAgLnRhYmxlLWZvb3Rlci1jYXJkIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDEuMmZyIDEuMmZyIDEuMmZyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIGdhcDogMC4zcmVtO1xyXG4gICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJsZS1oZWFkZXItY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJsZS1yb3ctY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJsZS1mb290ZXItY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxOTg3NTQsICMyMGM5OTcpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTk4NzU0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sLXN1Y3Vyc2FsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtZmFjdG9yIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogIzZmNDJjMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbC12ZW5kaWRvLFxyXG4gICAgLmNvbC1wYWdhZG8sXHJcbiAgICAuY29sLWdhbmFuY2lhIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtZ2FuYW5jaWEge1xyXG4gICAgICAmLnBvc2l0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzE5ODc1NDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmLm5lZ2F0aXZlIHtcclxuICAgICAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIE92ZXJyaWRlIGNvbG9ycyBmb3IgZm9vdGVyXHJcbiAgICAudGFibGUtZm9vdGVyLWNhcmQgLmNvbC1nYW5hbmNpYSB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
        // Usar timeout para evitar que se cuelgue el login
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Login timeout')), 10000); // 10 segundos
        });
        const loginPromise = _this.supabaseService.login(_this.email, _this.password);
        const user = yield Promise.race([loginPromise, timeoutPromise]);
        if (user) {
          _this.redirectUser(user);
        } else {
          _this.errorMessage = 'Credenciales inválidas';
        }
      } catch (error) {
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

/***/ 2081:
/*!*************************************************************************!*\
  !*** ./src/app/components/resumen-sorteos/resumen-sorteos.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumenSorteosComponent: () => (/* binding */ ResumenSorteosComponent)
/* harmony export */ });
/* harmony import */ var C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _models_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/interfaces */ 4597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/supabase.service */ 9692);






function ResumenSorteosComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Cargando res\u00FAmenes de sorteos...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ResumenSorteosComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "No hay sorteos cerrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Los res\u00FAmenes aparecer\u00E1n aqu\u00ED cuando se cierren los sorteos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ResumenSorteosComponent_div_10_div_2_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sucursal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-label", "Sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", sucursal_r1.sucursal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-label", "Factor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", sucursal_r1.factor_multiplicador, "x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-label", "Vendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" L ", (sucursal_r1.total_vendido == null ? null : sucursal_r1.total_vendido.toFixed(2)) || "0.00", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-label", "Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" L ", (sucursal_r1.total_pagado == null ? null : sucursal_r1.total_pagado.toFixed(2)) || "0.00", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("positive", (sucursal_r1.ganancia_neta || 0) > 0)("negative", (sucursal_r1.ganancia_neta || 0) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-label", "Ganancia");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" L ", (sucursal_r1.ganancia_neta == null ? null : sucursal_r1.ganancia_neta.toFixed(2)) || "0.00", " ");
  }
}
function ResumenSorteosComponent_div_10_div_2_div_72_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65)(1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("L ", item_r2.total.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("#", i_r3 + 1, "");
  }
}
function ResumenSorteosComponent_div_10_div_2_div_72_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 69)(1, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const numero_r4 = ctx.$implicit;
    const sorteo_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r5.getIntensidadColor(sorteo_r5.name, numero_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "N\u00FAmero " + numero_r4 + ": L " + ctx_r5.getVentaTotalPorNumero(sorteo_r5.name, numero_r4).toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](numero_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("L ", ctx_r5.getVentaTotalPorNumero(sorteo_r5.name, numero_r4).toFixed(2), "");
  }
}
function ResumenSorteosComponent_div_10_div_2_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Resumen de Ventas por N\u00FAmero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 52)(5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Top 5 N\u00FAmeros M\u00E1s Vendidos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ResumenSorteosComponent_div_10_div_2_div_72_div_9_Template, 7, 3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 55)(11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Tablero Completo (00-99) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ResumenSorteosComponent_div_10_div_2_div_72_div_15_Template, 5, 5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 59)(17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Estad\u00EDsticas de Ventas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 60)(21, "div", 61)(22, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 30)(25, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "N\u00FAmeros Diferentes Vendidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 61)(30, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 30)(33, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "N\u00FAmero M\u00E1s Vendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 61)(38, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 30)(41, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Promedio por N\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 61)(46, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 30)(49, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Venta M\u00E1xima");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const sorteo_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.getNumerosMasVendidos(sorteo_r5.name, 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.getNumeros());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.getCantidadNumerosVendidos(sorteo_r5.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.getNumerosMasVendidos(sorteo_r5.name, 1).length > 0 ? ctx_r5.getNumerosMasVendidos(sorteo_r5.name, 1)[0].numero : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("L ", ctx_r5.getPromedioVentaPorNumero(sorteo_r5.name).toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("L ", ctx_r5.getMaxVentaPorNumero(sorteo_r5.name).toFixed(2), "");
  }
}
function ResumenSorteosComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 21)(8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 25)(15, "div", 26)(16, "div", 27)(17, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 30)(20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Total Vendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 33)(25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 30)(28, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Total Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 35)(33, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 30)(36, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Ganancia Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 36)(41, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Detalle por Sucursales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 38)(45, "div", 39)(46, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Factor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Vendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Ganancia");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, ResumenSorteosComponent_div_10_div_2_div_56_Template, 12, 14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 46)(58, "div", 40)(59, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "TOTAL GENERAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 42)(64, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 43)(67, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 44)(70, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, ResumenSorteosComponent_div_10_div_2_div_72_Template, 53, 6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sorteo_r5 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sorteo_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](sorteo_r5.closeTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r5.getNumeroGanador(sorteo_r5.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Factor: ", ctx_r5.getFactorPrincipal(sorteo_r5.name), "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("L ", ctx_r5.getTotalVendidoSorteo(sorteo_r5.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("L ", ctx_r5.getTotalPagadoSorteo(sorteo_r5.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("positive", ctx_r5.getGananciaTotalSorteo(sorteo_r5.name) > 0)("negative", ctx_r5.getGananciaTotalSorteo(sorteo_r5.name) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("L ", ctx_r5.getGananciaTotalSorteo(sorteo_r5.name).toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.getResumenSorteo(sorteo_r5.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("L ", ctx_r5.getTotalVendidoSorteo(sorteo_r5.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("L ", ctx_r5.getTotalPagadoSorteo(sorteo_r5.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("positive", ctx_r5.getGananciaTotalSorteo(sorteo_r5.name) > 0)("negative", ctx_r5.getGananciaTotalSorteo(sorteo_r5.name) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("L ", ctx_r5.getGananciaTotalSorteo(sorteo_r5.name).toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.hasVentasPorNumero(sorteo_r5.name));
  }
}
function ResumenSorteosComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ResumenSorteosComponent_div_10_div_1_Template, 7, 0, "div", 12)(2, ResumenSorteosComponent_div_10_div_2_Template, 73, 20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.getSorteosConResumen().length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.getSorteosConResumen());
  }
}
class ResumenSorteosComponent {
  constructor(supabaseService) {
    this.supabaseService = supabaseService;
    this.sorteos = _models_interfaces__WEBPACK_IMPORTED_MODULE_1__.SORTEO_SCHEDULES;
    this.resumenPorSorteo = {};
    this.ventasPorNumero = {};
    this.isLoading = false;
  }
  ngOnInit() {
    this.loadResumenesSorteos();
    // Suscribirse a eventos de recarga desde otros componentes
    this.subscription = this.supabaseService.resumenUpdateSubject?.subscribe(() => {
      this.loadResumenesSorteos();
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  loadResumenesSorteos() {
    var _this = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      const hondurasToday = _this.supabaseService.getHondurasDateTime();
      const fechaStr = hondurasToday.toISOString().split('T')[0];
      try {
        for (const sorteo of _this.sorteos) {
          const sorteoId = `${fechaStr}-${sorteo.name}`;
          try {
            // Cargar resumen por sucursal
            const resumen = yield _this.supabaseService.getSorteoResumenPorSucursal(sorteoId);
            if (resumen && resumen.length > 0) {
              _this.resumenPorSorteo[sorteo.name] = resumen;
            }
            // Cargar ventas por número para este sorteo
            yield _this.loadVentasPorNumero(sorteo.name, fechaStr);
          } catch (error) {
            console.error(`Error cargando resumen para ${sorteo.name}:`, error);
          }
        }
      } finally {
        _this.isLoading = false;
      }
    })();
  }
  // Nuevo método para cargar ventas por número
  loadVentasPorNumero(sorteoName, fecha) {
    var _this2 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const ventasPorNumero = yield _this2.supabaseService.getVentasPorNumero(sorteoName, fecha);
        _this2.ventasPorNumero[sorteoName] = ventasPorNumero;
      } catch (error) {
        console.error(`Error cargando ventas por número para ${sorteoName}:`, error);
        _this2.ventasPorNumero[sorteoName] = {};
      }
    })();
  }
  // Función para obtener resumen de un sorteo específico
  getResumenSorteo(sorteoName) {
    return this.resumenPorSorteo[sorteoName] || [];
  }
  // Función para verificar si un sorteo tiene resumen
  hasResumenSorteo(sorteoName) {
    return this.resumenPorSorteo[sorteoName] && this.resumenPorSorteo[sorteoName].length > 0;
  }
  // Funciones auxiliares para cálculos
  getTotalVendidoSorteo(sorteoName) {
    const resumen = this.getResumenSorteo(sorteoName);
    const total = resumen.reduce((sum, s) => sum + (s.total_vendido || 0), 0);
    return total.toFixed(2);
  }
  getTotalPagadoSorteo(sorteoName) {
    const resumen = this.getResumenSorteo(sorteoName);
    const total = resumen.reduce((sum, s) => sum + (s.total_pagado || 0), 0);
    return total.toFixed(2);
  }
  getGananciaTotalSorteo(sorteoName) {
    const resumen = this.getResumenSorteo(sorteoName);
    return resumen.reduce((sum, s) => sum + (s.ganancia_neta || 0), 0);
  }
  // Función para obtener el número ganador de un sorteo
  getNumeroGanador(sorteoName) {
    const resumen = this.getResumenSorteo(sorteoName);
    return resumen.length > 0 ? resumen[0].numero_ganador || 'N/A' : 'N/A';
  }
  // Función para obtener el factor más común
  getFactorPrincipal(sorteoName) {
    const resumen = this.getResumenSorteo(sorteoName);
    return resumen.length > 0 ? resumen[0].factor_multiplicador || 70 : 70;
  }
  // Función para refrescar datos (para llamar desde el componente padre)
  refreshData() {
    var _this3 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.loadResumenesSorteos();
    })();
  }
  // Función para obtener sorteos con resumen (solo los cerrados)
  getSorteosConResumen() {
    return this.sorteos.filter(sorteo => this.hasResumenSorteo(sorteo.name));
  }
  // Métodos para manejar ventas por número
  getVentasPorNumero(sorteoName) {
    return this.ventasPorNumero[sorteoName] || {};
  }
  hasVentasPorNumero(sorteoName) {
    const ventas = this.getVentasPorNumero(sorteoName);
    return Object.keys(ventas).length > 0;
  }
  getNumerosMasVendidos(sorteoName, top = 5) {
    const ventas = this.getVentasPorNumero(sorteoName);
    return Object.entries(ventas).map(([numero, total]) => ({
      numero,
      total
    })).sort((a, b) => b.total - a.total).slice(0, top);
  }
  getVentaTotalPorNumero(sorteoName, numero) {
    const ventas = this.getVentasPorNumero(sorteoName);
    return ventas[numero] || 0;
  }
  getMaxVentaPorNumero(sorteoName) {
    const ventas = this.getVentasPorNumero(sorteoName);
    const valores = Object.values(ventas);
    return valores.length > 0 ? Math.max(...valores) : 0;
  }
  // Calcular promedio de ventas por número
  getPromedioVentaPorNumero(sorteoName) {
    const ventas = this.getVentasPorNumero(sorteoName);
    const valores = Object.values(ventas);
    if (valores.length === 0) return 0;
    const suma = valores.reduce((acc, val) => acc + val, 0);
    return suma / valores.length;
  }
  // Método auxiliar para obtener la cantidad de números vendidos
  getCantidadNumerosVendidos(sorteoName) {
    return Object.keys(this.getVentasPorNumero(sorteoName)).length;
  }
  // Generar array de números del 00 al 99 para la tabla
  getNumeros() {
    const numeros = ['00']; // Empezar con 00
    for (let i = 1; i <= 99; i++) {
      numeros.push(i.toString().padStart(2, '0'));
    }
    return numeros;
  }
  // Obtener color de intensidad basado en el total vendido
  getIntensidadColor(sorteoName, numero) {
    const venta = this.getVentaTotalPorNumero(sorteoName, numero);
    const maxVenta = this.getMaxVentaPorNumero(sorteoName);
    if (venta === 0 || maxVenta === 0) return '';
    const intensidad = venta / maxVenta;
    if (intensidad > 0.8) return 'intensidad-alta';
    if (intensidad > 0.5) return 'intensidad-media';
    if (intensidad > 0.2) return 'intensidad-baja';
    return 'intensidad-minima';
  }
  static {
    this.ɵfac = function ResumenSorteosComponent_Factory(t) {
      return new (t || ResumenSorteosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_supabase_service__WEBPACK_IMPORTED_MODULE_2__.SupabaseService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ResumenSorteosComponent,
      selectors: [["app-resumen-sorteos"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
      decls: 11,
      vars: 5,
      consts: [[1, "resumen-sorteos-section"], [1, "section-header"], [1, "fas", "fa-chart-bar"], [1, "section-actions"], [1, "btn-refresh", 3, "click", "disabled"], [1, "fas", "fa-sync-alt"], ["class", "loading-overlay", 4, "ngIf"], ["class", "sorteos-resumen-container", 4, "ngIf"], [1, "loading-overlay"], [1, "loading-content"], [1, "fas", "fa-spinner", "fa-spin"], [1, "sorteos-resumen-container"], ["class", "no-resumen-message", 4, "ngIf"], ["class", "sorteo-resumen-card", 4, "ngFor", "ngForOf"], [1, "no-resumen-message"], [1, "empty-state"], [1, "fas", "fa-chart-line"], [1, "sorteo-resumen-card"], [1, "card-header"], [1, "sorteo-info"], [1, "sorteo-time"], [1, "winner-info"], [1, "winner-number"], [1, "fas", "fa-trophy"], [1, "factor-info"], [1, "card-body"], [1, "stats-overview"], [1, "stat-card", "vendido"], [1, "stat-icon"], [1, "fas", "fa-coins"], [1, "stat-content"], [1, "stat-label"], [1, "stat-value"], [1, "stat-card", "pagado"], [1, "fas", "fa-hand-holding-usd"], [1, "stat-card", "ganancia"], [1, "detalle-sucursales"], [1, "fas", "fa-building"], [1, "tabla-resumen"], [1, "tabla-header"], [1, "col-sucursal"], [1, "col-factor"], [1, "col-vendido"], [1, "col-pagado"], [1, "col-ganancia"], ["class", "tabla-row", 4, "ngFor", "ngForOf"], [1, "tabla-footer"], ["class", "ventas-por-numero", 4, "ngIf"], [1, "tabla-row"], [1, "fas", "fa-store"], [1, "ventas-por-numero"], [1, "fas", "fa-th"], [1, "top-numeros"], [1, "top-numeros-grid"], ["class", "top-numero-card", 4, "ngFor", "ngForOf"], [1, "tablero-numeros"], [1, "fas", "fa-grid-3x3"], [1, "numeros-grid"], ["class", "numero-cell", 3, "class", "title", 4, "ngFor", "ngForOf"], [1, "estadisticas-adicionales"], [1, "stats-adicionales-grid"], [1, "stat-adicional"], [1, "fas", "fa-hashtag"], [1, "fas", "fa-crown"], [1, "fas", "fa-calculator"], [1, "top-numero-card"], [1, "numero"], [1, "cantidad"], [1, "posicion"], [1, "numero-cell", 3, "title"], [1, "numero-label"], [1, "numero-venta"]],
      template: function ResumenSorteosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Res\u00FAmenes de Sorteos por Sucursales ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ResumenSorteosComponent_Template_button_click_6_listener() {
            return ctx.loadResumenesSorteos();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Actualizar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ResumenSorteosComponent_div_9_Template, 5, 0, "div", 6)(10, ResumenSorteosComponent_div_10_Template, 3, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fa-spin", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css);@charset \"UTF-8\";\n\n\n.resumen-sorteos-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  position: relative;\n}\n\n\n\n.section-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 1.5rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.section-header[_ngcontent-%COMP%]   .section-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n}\n\n.btn-refresh[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n.btn-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #667eea;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n\n\n.sorteos-resumen-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 300px;\n}\n\n.no-resumen-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.no-resumen-message[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #dee2e6;\n  margin-bottom: 1rem;\n}\n.no-resumen-message[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n}\n.no-resumen-message[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  margin: 0;\n}\n\n\n\n.sorteo-resumen-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  margin-bottom: 2rem;\n  overflow: hidden;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  transition: all 0.3s ease;\n}\n.sorteo-resumen-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #495057, #6c757d);\n  color: white;\n  padding: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-header[_ngcontent-%COMP%]   .sorteo-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.card-header[_ngcontent-%COMP%]   .sorteo-info[_ngcontent-%COMP%]   .sorteo-time[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.8;\n}\n.card-header[_ngcontent-%COMP%]   .winner-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.card-header[_ngcontent-%COMP%]   .winner-info[_ngcontent-%COMP%]   .winner-number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.card-header[_ngcontent-%COMP%]   .winner-info[_ngcontent-%COMP%]   .winner-number[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.card-header[_ngcontent-%COMP%]   .winner-info[_ngcontent-%COMP%]   .factor-info[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.9;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n\n\n.stats-overview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  border-left: 4px solid;\n  transition: all 0.2s ease;\n}\n.stat-card.vendido[_ngcontent-%COMP%] {\n  border-left-color: #0d6efd;\n}\n.stat-card.vendido[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0d6efd, #6610f2);\n}\n.stat-card.pagado[_ngcontent-%COMP%] {\n  border-left-color: #fd7e14;\n}\n.stat-card.pagado[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fd7e14, #e6ad0a);\n}\n.stat-card.ganancia[_ngcontent-%COMP%] {\n  border-left-color: #198754;\n}\n.stat-card.ganancia[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #198754, #20c997);\n}\n.stat-card.ganancia.negative[_ngcontent-%COMP%] {\n  border-left-color: #dc3545;\n}\n.stat-card.ganancia.negative[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dc3545, #fd7e14);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.2rem;\n}\n\n.stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6c757d;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n.stat-content[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #212529;\n  font-family: \"Courier New\", monospace;\n}\n\n\n\n.detalle-sucursales[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #495057;\n  margin-bottom: 1rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.detalle-sucursales[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n.tabla-resumen[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.tabla-resumen[_ngcontent-%COMP%]   .tabla-header[_ngcontent-%COMP%], .tabla-resumen[_ngcontent-%COMP%]   .tabla-row[_ngcontent-%COMP%], .tabla-resumen[_ngcontent-%COMP%]   .tabla-footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1.2fr 1.2fr 1.2fr;\n  align-items: center;\n  padding: 0.75rem;\n  gap: 0.5rem;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .tabla-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #343a40, #495057);\n  color: white;\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .tabla-row[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #e9ecef;\n  transition: background-color 0.2s ease;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .tabla-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .tabla-row[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f9fa;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .tabla-row[_ngcontent-%COMP%]:nth-child(even):hover {\n  background: #e9ecef;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .tabla-footer[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #198754, #20c997);\n  color: white;\n  font-weight: 600;\n  border-top: 2px solid #198754;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .col-factor[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  color: #6f42c1;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .col-vendido[_ngcontent-%COMP%], .tabla-resumen[_ngcontent-%COMP%]   .col-pagado[_ngcontent-%COMP%], .tabla-resumen[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: \"Courier New\", monospace;\n  font-weight: 500;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .col-ganancia.positive[_ngcontent-%COMP%] {\n  color: #198754;\n  font-weight: 600;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .col-ganancia.negative[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n.tabla-resumen[_ngcontent-%COMP%]   .tabla-footer[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%], .tabla-resumen[_ngcontent-%COMP%]   .tabla-footer[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n\n\n.ventas-por-numero[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e9ecef;\n}\n.ventas-por-numero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #495057;\n  margin-bottom: 1.5rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.ventas-por-numero[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6f42c1;\n}\n.ventas-por-numero[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.ventas-por-numero[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n\n\n\n.top-numeros[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.top-numeros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 1rem;\n}\n\n.top-numero-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 10px;\n  padding: 1rem;\n  text-align: center;\n  position: relative;\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);\n  transition: all 0.3s ease;\n}\n.top-numero-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);\n}\n.top-numero-card[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.top-numero-card[_ngcontent-%COMP%]   .cantidad[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.9;\n  margin-bottom: 0.25rem;\n}\n.top-numero-card[_ngcontent-%COMP%]   .posicion[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #ffc107;\n  color: #212529;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.tablero-numeros[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.numeros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n  gap: 0.5rem;\n  max-height: 500px;\n  overflow-y: auto;\n  padding: 0.5rem;\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  background: #f8f9fa;\n}\n\n.numero-cell[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 0.75rem 0.5rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-height: 65px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.numero-cell[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  z-index: 2;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.numero-cell[_ngcontent-%COMP%]   .numero-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  color: #495057;\n  margin-bottom: 0.25rem;\n}\n.numero-cell[_ngcontent-%COMP%]   .numero-venta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6c757d;\n  font-family: \"Courier New\", monospace;\n}\n.numero-cell.intensidad-alta[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dc3545, #c82333);\n  color: white;\n  border-color: #dc3545;\n}\n.numero-cell.intensidad-alta[_ngcontent-%COMP%]   .numero-label[_ngcontent-%COMP%], .numero-cell.intensidad-alta[_ngcontent-%COMP%]   .numero-venta[_ngcontent-%COMP%] {\n  color: white;\n}\n.numero-cell.intensidad-media[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fd7e14, #e66500);\n  color: white;\n  border-color: #fd7e14;\n}\n.numero-cell.intensidad-media[_ngcontent-%COMP%]   .numero-label[_ngcontent-%COMP%], .numero-cell.intensidad-media[_ngcontent-%COMP%]   .numero-venta[_ngcontent-%COMP%] {\n  color: white;\n}\n.numero-cell.intensidad-baja[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffc107, #e6ad0a);\n  color: #212529;\n  border-color: #ffc107;\n}\n.numero-cell.intensidad-baja[_ngcontent-%COMP%]   .numero-label[_ngcontent-%COMP%], .numero-cell.intensidad-baja[_ngcontent-%COMP%]   .numero-venta[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.numero-cell.intensidad-minima[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #20c997, #17a2b8);\n  color: white;\n  border-color: #20c997;\n}\n.numero-cell.intensidad-minima[_ngcontent-%COMP%]   .numero-label[_ngcontent-%COMP%], .numero-cell.intensidad-minima[_ngcontent-%COMP%]   .numero-venta[_ngcontent-%COMP%] {\n  color: white;\n}\n\n\n\n.estadisticas-adicionales[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  background: #f8f9fa;\n  border-radius: 10px;\n  padding: 1.5rem;\n  border: 1px solid #e9ecef;\n}\n\n.stats-adicionales-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n}\n\n.stat-adicional[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  border-left: 4px solid #6f42c1;\n  transition: all 0.2s ease;\n}\n.stat-adicional[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n}\n.stat-adicional[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 8px;\n  background: linear-gradient(135deg, #6f42c1, #9b59b6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.1rem;\n}\n.stat-adicional[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-adicional[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n  display: block;\n}\n.stat-adicional[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #212529;\n  font-family: \"Courier New\", monospace;\n}\n\n\n\n@media (max-width: 768px) {\n  .ventas-por-numero[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin-top: 1rem;\n  }\n  .stats-adicionales-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n    gap: 0.75rem;\n  }\n  .stat-adicional[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    gap: 0.75rem;\n  }\n  .stat-adicional[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 1rem;\n  }\n  .stat-adicional[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .stat-adicional[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .top-numeros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n    gap: 0.75rem;\n  }\n  .top-numero-card[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .top-numero-card[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .top-numero-card[_ngcontent-%COMP%]   .cantidad[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .numeros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));\n    gap: 0.25rem;\n    max-height: 400px;\n  }\n  .numero-cell[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.25rem;\n    min-height: 50px;\n  }\n  .numero-cell[_ngcontent-%COMP%]   .numero-label[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .numero-cell[_ngcontent-%COMP%]   .numero-venta[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n}\n@media (max-width: 480px) {\n  .numeros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));\n  }\n  .numero-cell[_ngcontent-%COMP%] {\n    padding: 0.4rem 0.2rem;\n    min-height: 45px;\n  }\n  .numero-cell[_ngcontent-%COMP%]   .numero-label[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .numero-cell[_ngcontent-%COMP%]   .numero-venta[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n}\n\n\n@media (max-width: 768px) {\n  .section-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .sorteos-resumen-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .card-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .card-header[_ngcontent-%COMP%]   .winner-info[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .stats-overview[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .tabla-resumen[_ngcontent-%COMP%]   .tabla-header[_ngcontent-%COMP%], .tabla-resumen[_ngcontent-%COMP%]   .tabla-row[_ngcontent-%COMP%], .tabla-resumen[_ngcontent-%COMP%]   .tabla-footer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.25rem;\n    text-align: center;\n  }\n  .tabla-resumen[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%], .tabla-resumen[_ngcontent-%COMP%]   .col-factor[_ngcontent-%COMP%], .tabla-resumen[_ngcontent-%COMP%]   .col-vendido[_ngcontent-%COMP%], .tabla-resumen[_ngcontent-%COMP%]   .col-pagado[_ngcontent-%COMP%], .tabla-resumen[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0.5rem;\n    border-bottom: 1px solid #e9ecef;\n  }\n  .tabla-resumen[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%]::before, .tabla-resumen[_ngcontent-%COMP%]   .col-factor[_ngcontent-%COMP%]::before, .tabla-resumen[_ngcontent-%COMP%]   .col-vendido[_ngcontent-%COMP%]::before, .tabla-resumen[_ngcontent-%COMP%]   .col-pagado[_ngcontent-%COMP%]::before, .tabla-resumen[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%]::before {\n    content: attr(data-label) \": \";\n    font-weight: 600;\n    color: #6c757d;\n    display: inline-block;\n    margin-right: 0.5rem;\n  }\n  .tabla-resumen[_ngcontent-%COMP%]   .tabla-header[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%]::before, .tabla-resumen[_ngcontent-%COMP%]   .tabla-header[_ngcontent-%COMP%]   .col-factor[_ngcontent-%COMP%]::before, .tabla-resumen[_ngcontent-%COMP%]   .tabla-header[_ngcontent-%COMP%]   .col-vendido[_ngcontent-%COMP%]::before, .tabla-resumen[_ngcontent-%COMP%]   .tabla-header[_ngcontent-%COMP%]   .col-pagado[_ngcontent-%COMP%]::before, .tabla-resumen[_ngcontent-%COMP%]   .tabla-header[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0xvdGVyaWElMjB2MS9sb3RlcmlhL3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bWVuLXNvcnRlb3MvcmVzdW1lbi1zb3J0ZW9zLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL3Jlc3VtZW4tc29ydGVvcy9yZXN1bWVuLXNvcnRlb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCLGtDQUFBO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURDRjs7QUNFQSxxQ0FBQTtBQUNBO0VBQ0UsNkRBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRENGO0FDQ0U7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURDSjtBQ0NJO0VBQ0UsaUJBQUE7QURDTjtBQ0dFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QURESjs7QUNLQTtFQUNFLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBREZGO0FDSUU7RUFDRSxvQ0FBQTtFQUNBLDJCQUFBO0FERko7QUNLRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBREhKOztBQ09BLGdDQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBREpGO0FDTUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QURKSjtBQ01JO0VB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RUNnR0E7SUFDRSxzQkFBQTtJQUNBLGdCQUFBO0VEOUZGO0VDZ0dFO0lBQ0UsaUJBQUE7RUQ5Rko7RUNpR0U7SUFDRSxpQkFBQTtFRC9GSjtBQUNGO0FDbUdBLGtDQUFBO0FBQ0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFRGpHRjtFQ21HRTtJQUNFLGlCQUFBO0VEakdKO0VDcUdBO0lBQ0UsYUFBQTtFRG5HRjtFQ3NHQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFRHBHRjtFQ3NHRTtJQUNFLGtCQUFBO0VEcEdKO0VDd0dBO0lBQ0UsYUFBQTtFRHRHRjtFQ3lHQTtJQUNFLDBCQUFBO0VEdkdGO0VDMEdBO0lBQ0UsYUFBQTtFRHhHRjtFQzRHRTs7O0lBR0UsMEJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUQxR0o7RUM2R0U7Ozs7O0lBS0Usa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0NBQUE7RUQzR0o7RUM2R0k7Ozs7O0lBQ0UsOEJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLG9CQUFBO0VEdkdOO0VDaUhNOzs7OztJQUNFLGFBQUE7RUQzR1I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIENPTVBPTkVOVEUgUkVTVU1FTiBERSBTT1JURU9TICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS82LjQuMC9jc3MvYWxsLm1pbi5jc3NcIik7XG4ucmVzdW1lbi1zb3J0ZW9zLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogPT09PT0gSEVBREVSIERFIExBIFNFQ0NJw4PCk04gPT09PT0gKi9cbi5zZWN0aW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWN0aW9uLWhlYWRlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbn1cbi5zZWN0aW9uLWhlYWRlciBoMyBpIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4uc2VjdGlvbi1oZWFkZXIgLnNlY3Rpb24tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC43NXJlbTtcbn1cblxuLmJ0bi1yZWZyZXNoIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG4uYnRuLXJlZnJlc2g6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cbi5idG4tcmVmcmVzaDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLyogPT09PT0gTE9BRElORyBPVkVSTEFZID09PT09ICovXG4ubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwO1xufVxuLmxvYWRpbmctb3ZlcmxheSAubG9hZGluZy1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzY2N2VlYTtcbn1cbi5sb2FkaW5nLW92ZXJsYXkgLmxvYWRpbmctY29udGVudCBpIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmxvYWRpbmctb3ZlcmxheSAubG9hZGluZy1jb250ZW50IHNwYW4ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qID09PT09IENPTlRFTkVET1IgREUgU09SVEVPUyA9PT09PSAqL1xuLnNvcnRlb3MtcmVzdW1lbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAycmVtO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbn1cblxuLm5vLXJlc3VtZW4tbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xufVxuLm5vLXJlc3VtZW4tbWVzc2FnZSAuZW1wdHktc3RhdGUgaSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgY29sb3I6ICNkZWUyZTY7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4ubm8tcmVzdW1lbi1tZXNzYWdlIC5lbXB0eS1zdGF0ZSBoNCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubm8tcmVzdW1lbi1tZXNzYWdlIC5lbXB0eS1zdGF0ZSBwIHtcbiAgY29sb3I6ICNhZGI1YmQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogPT09PT0gQ0FSRFMgREUgU09SVEVPUyA9PT09PSAqL1xuLnNvcnRlby1yZXN1bWVuLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZmZmZmZmIDEwMCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uc29ydGVvLXJlc3VtZW4tY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0OTUwNTcsICM2Yzc1N2QpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmQtaGVhZGVyIC5zb3J0ZW8taW5mbyBoNCB7XG4gIG1hcmdpbjogMCAwIDAuMjVyZW0gMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNhcmQtaGVhZGVyIC5zb3J0ZW8taW5mbyAuc29ydGVvLXRpbWUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgb3BhY2l0eTogMC44O1xufVxuLmNhcmQtaGVhZGVyIC53aW5uZXItaW5mbyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcmQtaGVhZGVyIC53aW5uZXItaW5mbyAud2lubmVyLW51bWJlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cbi5jYXJkLWhlYWRlciAud2lubmVyLWluZm8gLndpbm5lci1udW1iZXIgaSB7XG4gIGNvbG9yOiAjZmZjMTA3O1xufVxuLmNhcmQtaGVhZGVyIC53aW5uZXItaW5mbyAuZmFjdG9yLWluZm8ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuXG4vKiA9PT09PSBFU1RBRMODwo1TVElDQVMgT1ZFUlZJRVcgPT09PT0gKi9cbi5zdGF0cy1vdmVydmlldyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5zdGF0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxLjI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLnN0YXQtY2FyZC52ZW5kaWRvIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwZDZlZmQ7XG59XG4uc3RhdC1jYXJkLnZlbmRpZG8gLnN0YXQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZDZlZmQsICM2NjEwZjIpO1xufVxuLnN0YXQtY2FyZC5wYWdhZG8ge1xuICBib3JkZXItbGVmdC1jb2xvcjogI2ZkN2UxNDtcbn1cbi5zdGF0LWNhcmQucGFnYWRvIC5zdGF0LWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmQ3ZTE0LCAjZTZhZDBhKTtcbn1cbi5zdGF0LWNhcmQuZ2FuYW5jaWEge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzE5ODc1NDtcbn1cbi5zdGF0LWNhcmQuZ2FuYW5jaWEgLnN0YXQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxOTg3NTQsICMyMGM5OTcpO1xufVxuLnN0YXQtY2FyZC5nYW5hbmNpYS5uZWdhdGl2ZSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZGMzNTQ1O1xufVxuLnN0YXQtY2FyZC5nYW5hbmNpYS5uZWdhdGl2ZSAuc3RhdC1pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RjMzU0NSwgI2ZkN2UxNCk7XG59XG4uc3RhdC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnN0YXQtaWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uc3RhdC1jb250ZW50IHtcbiAgZmxleDogMTtcbn1cbi5zdGF0LWNvbnRlbnQgLnN0YXQtbGFiZWwge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnN0YXQtY29udGVudCAuc3RhdC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cblxuLyogPT09PT0gREVUQUxMRSBQT1IgU1VDVVJTQUxFUyA9PT09PSAqL1xuLmRldGFsbGUtc3VjdXJzYWxlcyBoNSB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG4uZGV0YWxsZS1zdWN1cnNhbGVzIGg1IGkge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuLnRhYmxhLXJlc3VtZW4ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnRhYmxhLXJlc3VtZW4gLnRhYmxhLWhlYWRlcixcbi50YWJsYS1yZXN1bWVuIC50YWJsYS1yb3csXG4udGFibGEtcmVzdW1lbiAudGFibGEtZm9vdGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDEuMmZyIDEuMmZyIDEuMmZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBnYXA6IDAuNXJlbTtcbn1cbi50YWJsYS1yZXN1bWVuIC50YWJsYS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQzYTQwLCAjNDk1MDU3KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLnRhYmxhLXJlc3VtZW4gLnRhYmxhLXJvdyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG4udGFibGEtcmVzdW1lbiAudGFibGEtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cbi50YWJsYS1yZXN1bWVuIC50YWJsYS1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cbi50YWJsYS1yZXN1bWVuIC50YWJsYS1yb3c6bnRoLWNoaWxkKGV2ZW4pOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbn1cbi50YWJsYS1yZXN1bWVuIC50YWJsYS1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTk4NzU0LCAjMjBjOTk3KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzE5ODc1NDtcbn1cbi50YWJsYS1yZXN1bWVuIC5jb2wtc3VjdXJzYWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG4udGFibGEtcmVzdW1lbiAuY29sLXN1Y3Vyc2FsIGkge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cbi50YWJsYS1yZXN1bWVuIC5jb2wtZmFjdG9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzZmNDJjMTtcbn1cbi50YWJsYS1yZXN1bWVuIC5jb2wtdmVuZGlkbyxcbi50YWJsYS1yZXN1bWVuIC5jb2wtcGFnYWRvLFxuLnRhYmxhLXJlc3VtZW4gLmNvbC1nYW5hbmNpYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udGFibGEtcmVzdW1lbiAuY29sLWdhbmFuY2lhLnBvc2l0aXZlIHtcbiAgY29sb3I6ICMxOTg3NTQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udGFibGEtcmVzdW1lbiAuY29sLWdhbmFuY2lhLm5lZ2F0aXZlIHtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udGFibGEtcmVzdW1lbiAudGFibGEtZm9vdGVyIC5jb2wtZ2FuYW5jaWEsXG4udGFibGEtcmVzdW1lbiAudGFibGEtZm9vdGVyIC5jb2wtc3VjdXJzYWwge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLyogPT09PT0gVkVOVEFTIFBPUiBOw4PCmk1FUk8gPT09PT0gKi9cbi52ZW50YXMtcG9yLW51bWVybyB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG59XG4udmVudGFzLXBvci1udW1lcm8gaDUge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG4udmVudGFzLXBvci1udW1lcm8gaDUgaSB7XG4gIGNvbG9yOiAjNmY0MmMxO1xufVxuLnZlbnRhcy1wb3ItbnVtZXJvIGg2IHtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG4udmVudGFzLXBvci1udW1lcm8gaDYgaSB7XG4gIGNvbG9yOiAjMTdhMmI4O1xufVxuXG4vKiA9PT09PSBUT1AgTsODwppNRVJPUyBNw4PCgVMgVkVORElET1MgPT09PT0gKi9cbi50b3AtbnVtZXJvcyB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi50b3AtbnVtZXJvcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMjBweCwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbn1cblxuLnRvcC1udW1lcm8tY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgxMDIsIDEyNiwgMjM0LCAwLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuLnRvcC1udW1lcm8tY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuNCk7XG59XG4udG9wLW51bWVyby1jYXJkIC5udW1lcm8ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLnRvcC1udW1lcm8tY2FyZCAuY2FudGlkYWQge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgb3BhY2l0eTogMC45O1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuLnRvcC1udW1lcm8tY2FyZCAucG9zaWNpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTVweDtcbiAgcmlnaHQ6IC01cHg7XG4gIGJhY2tncm91bmQ6ICNmZmMxMDc7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qID09PT09IFRBQkxFUk8gREUgTsODwppNRVJPUyA9PT09PSAqL1xuLnRhYmxlcm8tbnVtZXJvcyB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLm51bWVyb3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDgwcHgsIDFmcikpO1xuICBnYXA6IDAuNXJlbTtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG4ubnVtZXJvLWNlbGwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIG1pbi1oZWlnaHQ6IDY1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm51bWVyby1jZWxsOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgei1pbmRleDogMjtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLm51bWVyby1jZWxsIC5udW1lcm8tbGFiZWwge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuLm51bWVyby1jZWxsIC5udW1lcm8tdmVudGEge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG4ubnVtZXJvLWNlbGwuaW50ZW5zaWRhZC1hbHRhIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RjMzU0NSwgI2M4MjMzMyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xufVxuLm51bWVyby1jZWxsLmludGVuc2lkYWQtYWx0YSAubnVtZXJvLWxhYmVsLFxuLm51bWVyby1jZWxsLmludGVuc2lkYWQtYWx0YSAubnVtZXJvLXZlbnRhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm51bWVyby1jZWxsLmludGVuc2lkYWQtbWVkaWEge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmQ3ZTE0LCAjZTY2NTAwKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6ICNmZDdlMTQ7XG59XG4ubnVtZXJvLWNlbGwuaW50ZW5zaWRhZC1tZWRpYSAubnVtZXJvLWxhYmVsLFxuLm51bWVyby1jZWxsLmludGVuc2lkYWQtbWVkaWEgLm51bWVyby12ZW50YSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5udW1lcm8tY2VsbC5pbnRlbnNpZGFkLWJhamEge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZjMTA3LCAjZTZhZDBhKTtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcbn1cbi5udW1lcm8tY2VsbC5pbnRlbnNpZGFkLWJhamEgLm51bWVyby1sYWJlbCxcbi5udW1lcm8tY2VsbC5pbnRlbnNpZGFkLWJhamEgLm51bWVyby12ZW50YSB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuLm51bWVyby1jZWxsLmludGVuc2lkYWQtbWluaW1hIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzIwYzk5NywgIzE3YTJiOCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjMjBjOTk3O1xufVxuLm51bWVyby1jZWxsLmludGVuc2lkYWQtbWluaW1hIC5udW1lcm8tbGFiZWwsXG4ubnVtZXJvLWNlbGwuaW50ZW5zaWRhZC1taW5pbWEgLm51bWVyby12ZW50YSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogPT09PT0gRVNUQUTDg8KNU1RJQ0FTIEFESUNJT05BTEVTID09PT09ICovXG4uZXN0YWRpc3RpY2FzLWFkaWNpb25hbGVzIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xufVxuXG4uc3RhdHMtYWRpY2lvbmFsZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICBnYXA6IDFyZW07XG59XG5cbi5zdGF0LWFkaWNpb25hbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzZmNDJjMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cbi5zdGF0LWFkaWNpb25hbDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uc3RhdC1hZGljaW9uYWwgLnN0YXQtaWNvbiB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZmNDJjMSwgIzliNTliNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLnN0YXQtYWRpY2lvbmFsIC5zdGF0LWNvbnRlbnQge1xuICBmbGV4OiAxO1xufVxuLnN0YXQtYWRpY2lvbmFsIC5zdGF0LWNvbnRlbnQgLnN0YXQtbGFiZWwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN0YXQtYWRpY2lvbmFsIC5zdGF0LWNvbnRlbnQgLnN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cblxuLyogPT09PT0gUkVTUE9OU0lWRSBERVNJR04gPT09PT0gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudmVudGFzLXBvci1udW1lcm8ge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuICAuc3RhdHMtYWRpY2lvbmFsZXMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gICAgZ2FwOiAwLjc1cmVtO1xuICB9XG4gIC5zdGF0LWFkaWNpb25hbCB7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cbiAgLnN0YXQtYWRpY2lvbmFsIC5zdGF0LWljb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgLnN0YXQtYWRpY2lvbmFsIC5zdGF0LWNvbnRlbnQgLnN0YXQtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxuICAuc3RhdC1hZGljaW9uYWwgLnN0YXQtY29udGVudCAuc3RhdC12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG4gIC50b3AtbnVtZXJvcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cbiAgLnRvcC1udW1lcm8tY2FyZCB7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgfVxuICAudG9wLW51bWVyby1jYXJkIC5udW1lcm8ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxuICAudG9wLW51bWVyby1jYXJkIC5jYW50aWRhZCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gIH1cbiAgLm51bWVyb3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNjBweCwgMWZyKSk7XG4gICAgZ2FwOiAwLjI1cmVtO1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICB9XG4gIC5udW1lcm8tY2VsbCB7XG4gICAgcGFkZGluZzogMC41cmVtIDAuMjVyZW07XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgfVxuICAubnVtZXJvLWNlbGwgLm51bWVyby1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgLm51bWVyby1jZWxsIC5udW1lcm8tdmVudGEge1xuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5udW1lcm9zLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDUwcHgsIDFmcikpO1xuICB9XG4gIC5udW1lcm8tY2VsbCB7XG4gICAgcGFkZGluZzogMC40cmVtIDAuMnJlbTtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICB9XG4gIC5udW1lcm8tY2VsbCAubnVtZXJvLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICAubnVtZXJvLWNlbGwgLm51bWVyby12ZW50YSB7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG4gIH1cbn1cbi8qID09PT09IFJFU1BPTlNJVkUgREVTSUdOID09PT09ICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc2VjdGlvbi1oZWFkZXIgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG4gIC5zb3J0ZW9zLXJlc3VtZW4tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNhcmQtaGVhZGVyIC53aW5uZXItaW5mbyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgLnN0YXRzLW92ZXJ2aWV3IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAuc3RhdC1jYXJkIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC50YWJsYS1yZXN1bWVuIC50YWJsYS1oZWFkZXIsXG4gIC50YWJsYS1yZXN1bWVuIC50YWJsYS1yb3csXG4gIC50YWJsYS1yZXN1bWVuIC50YWJsYS1mb290ZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnRhYmxhLXJlc3VtZW4gLmNvbC1zdWN1cnNhbCxcbiAgLnRhYmxhLXJlc3VtZW4gLmNvbC1mYWN0b3IsXG4gIC50YWJsYS1yZXN1bWVuIC5jb2wtdmVuZGlkbyxcbiAgLnRhYmxhLXJlc3VtZW4gLmNvbC1wYWdhZG8sXG4gIC50YWJsYS1yZXN1bWVuIC5jb2wtZ2FuYW5jaWEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG4gIH1cbiAgLnRhYmxhLXJlc3VtZW4gLmNvbC1zdWN1cnNhbDo6YmVmb3JlLFxuICAudGFibGEtcmVzdW1lbiAuY29sLWZhY3Rvcjo6YmVmb3JlLFxuICAudGFibGEtcmVzdW1lbiAuY29sLXZlbmRpZG86OmJlZm9yZSxcbiAgLnRhYmxhLXJlc3VtZW4gLmNvbC1wYWdhZG86OmJlZm9yZSxcbiAgLnRhYmxhLXJlc3VtZW4gLmNvbC1nYW5hbmNpYTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpIFwiOiBcIjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxuICAudGFibGEtcmVzdW1lbiAudGFibGEtaGVhZGVyIC5jb2wtc3VjdXJzYWw6OmJlZm9yZSxcbiAgLnRhYmxhLXJlc3VtZW4gLnRhYmxhLWhlYWRlciAuY29sLWZhY3Rvcjo6YmVmb3JlLFxuICAudGFibGEtcmVzdW1lbiAudGFibGEtaGVhZGVyIC5jb2wtdmVuZGlkbzo6YmVmb3JlLFxuICAudGFibGEtcmVzdW1lbiAudGFibGEtaGVhZGVyIC5jb2wtcGFnYWRvOjpiZWZvcmUsXG4gIC50YWJsYS1yZXN1bWVuIC50YWJsYS1oZWFkZXIgLmNvbC1nYW5hbmNpYTo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiLyogQ09NUE9ORU5URSBSRVNVTUVOIERFIFNPUlRFT1MgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS82LjQuMC9jc3MvYWxsLm1pbi5jc3MnKTtcclxuXHJcbi5yZXN1bWVuLXNvcnRlb3Mtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiA9PT09PSBIRUFERVIgREUgTEEgU0VDQ0nDg8KTTiA9PT09PSAqL1xyXG4uc2VjdGlvbi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNlY3Rpb24tYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1yZWZyZXNoIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIFxyXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIH1cclxuICBcclxuICAmOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PSBMT0FESU5HIE9WRVJMQVkgPT09PT0gKi9cclxuLmxvYWRpbmctb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIFxyXG4gIC5sb2FkaW5nLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM2NjdlZWE7XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PSBDT05URU5FRE9SIERFIFNPUlRFT1MgPT09PT0gKi9cclxuLnNvcnRlb3MtcmVzdW1lbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5uby1yZXN1bWVuLW1lc3NhZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cmVtIDJyZW07XHJcbiAgXHJcbiAgLmVtcHR5LXN0YXRlIHtcclxuICAgIGkge1xyXG4gICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgIGNvbG9yOiAjZGVlMmU2O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoNCB7XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogI2FkYjViZDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT0gQ0FSRFMgREUgU09SVEVPUyA9PT09PSAqL1xyXG4uc29ydGVvLXJlc3VtZW4tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2ZmZmZmZiAxMDAlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0OTUwNTcsICM2Yzc1N2QpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICAuc29ydGVvLWluZm8ge1xyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW46IDAgMCAwLjI1cmVtIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNvcnRlby10aW1lIHtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLndpbm5lci1pbmZvIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgXHJcbiAgICAud2lubmVyLW51bWJlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICAgICAgXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjZmZjMTA3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mYWN0b3ItaW5mbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuXHJcbi8qID09PT09IEVTVEFEw4PCjVNUSUNBUyBPVkVSVklFVyA9PT09PSAqL1xyXG4uc3RhdHMtb3ZlcnZpZXcge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIFxyXG4gICYudmVuZGlkbyB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzBkNmVmZDtcclxuICAgIFxyXG4gICAgLnN0YXQtaWNvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZDZlZmQsICM2NjEwZjIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLnBhZ2FkbyB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZkN2UxNDtcclxuICAgIFxyXG4gICAgLnN0YXQtaWNvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZDdlMTQsICNlNmFkMGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLmdhbmFuY2lhIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMTk4NzU0O1xyXG4gICAgXHJcbiAgICAuc3RhdC1pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE5ODc1NCwgIzIwYzk5Nyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYubmVnYXRpdmUge1xyXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogI2RjMzU0NTtcclxuICAgICAgXHJcbiAgICAgIC5zdGF0LWljb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkYzM1NDUsICNmZDdlMTQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdC1pY29uIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uc3RhdC1jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIFxyXG4gIC5zdGF0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0LXZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PSBERVRBTExFIFBPUiBTVUNVUlNBTEVTID09PT09ICovXHJcbi5kZXRhbGxlLXN1Y3Vyc2FsZXMge1xyXG4gIGg1IHtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50YWJsYS1yZXN1bWVuIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIFxyXG4gIC50YWJsYS1oZWFkZXIsXHJcbiAgLnRhYmxhLXJvdyxcclxuICAudGFibGEtZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMS4yZnIgMS4yZnIgMS4yZnI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gIH1cclxuICBcclxuICAudGFibGEtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDNhNDAsICM0OTUwNTcpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxhLXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsYS1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE5ODc1NCwgIzIwYzk5Nyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxOTg3NTQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtc3VjdXJzYWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY29sLWZhY3RvciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM2ZjQyYzE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtdmVuZGlkbyxcclxuICAuY29sLXBhZ2FkbyxcclxuICAuY29sLWdhbmFuY2lhIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtZ2FuYW5jaWEge1xyXG4gICAgJi5wb3NpdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAjMTk4NzU0O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLm5lZ2F0aXZlIHtcclxuICAgICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE92ZXJyaWRlIGNvbG9ycyBmb3IgZm9vdGVyXHJcbiAgLnRhYmxhLWZvb3RlciAuY29sLWdhbmFuY2lhLFxyXG4gIC50YWJsYS1mb290ZXIgLmNvbC1zdWN1cnNhbCB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09IFZFTlRBUyBQT1IgTsODwppNRVJPID09PT09ICovXHJcbi52ZW50YXMtcG9yLW51bWVybyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcblxyXG4gIGg1IHtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAjNmY0MmMxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDYge1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBcclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogIzE3YTJiODtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09IFRPUCBOw4PCmk1FUk9TIE3Dg8KBUyBWRU5ESURPUyA9PT09PSAqL1xyXG4udG9wLW51bWVyb3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi50b3AtbnVtZXJvcy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTIwcHgsIDFmcikpO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnRvcC1udW1lcm8tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcclxuICB9XHJcblxyXG4gIC5udW1lcm8ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhbnRpZGFkIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICB9XHJcblxyXG4gIC5wb3NpY2lvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICByaWdodDogLTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmMxMDc7XHJcbiAgICBjb2xvcjogIzIxMjUyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PSBUQUJMRVJPIERFIE7Dg8KaTUVST1MgPT09PT0gKi9cclxuLnRhYmxlcm8tbnVtZXJvcyB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4ubnVtZXJvcy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDgwcHgsIDFmcikpO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5udW1lcm8tY2VsbCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMC43NXJlbSAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIG1pbi1oZWlnaHQ6IDY1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgfVxyXG5cclxuICAubnVtZXJvLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgfVxyXG5cclxuICAubnVtZXJvLXZlbnRhIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcclxuICB9XHJcblxyXG4gIC8vIEludGVuc2lkYWRlcyBkZSBjb2xvciBiYXNhZGFzIGVuIHZlbnRhc1xyXG4gICYuaW50ZW5zaWRhZC1hbHRhIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkYzM1NDUsICNjODIzMzMpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgXHJcbiAgICAubnVtZXJvLWxhYmVsLFxyXG4gICAgLm51bWVyby12ZW50YSB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuaW50ZW5zaWRhZC1tZWRpYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmQ3ZTE0LCAjZTY2NTAwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZkN2UxNDtcclxuICAgIFxyXG4gICAgLm51bWVyby1sYWJlbCxcclxuICAgIC5udW1lcm8tdmVudGEge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmludGVuc2lkYWQtYmFqYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZjMTA3LCAjZTZhZDBhKTtcclxuICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xyXG4gICAgXHJcbiAgICAubnVtZXJvLWxhYmVsLFxyXG4gICAgLm51bWVyby12ZW50YSB7XHJcbiAgICAgIGNvbG9yOiAjMjEyNTI5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5pbnRlbnNpZGFkLW1pbmltYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjBjOTk3LCAjMTdhMmI4KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogIzIwYzk5NztcclxuICAgIFxyXG4gICAgLm51bWVyby1sYWJlbCxcclxuICAgIC5udW1lcm8tdmVudGEge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PSBFU1RBRMODwo1TVElDQVMgQURJQ0lPTkFMRVMgPT09PT0gKi9cclxuLmVzdGFkaXN0aWNhcy1hZGljaW9uYWxlcyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbn1cclxuXHJcbi5zdGF0cy1hZGljaW9uYWxlcy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnN0YXQtYWRpY2lvbmFsIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzZmNDJjMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgfVxyXG5cclxuICAuc3RhdC1pY29uIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZmNDJjMSwgIzliNTliNik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG5cclxuICAuc3RhdC1jb250ZW50IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBcclxuICAgIC5zdGF0LWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0YXQtdmFsdWUge1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PSBSRVNQT05TSVZFIERFU0lHTiA9PT09PSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudmVudGFzLXBvci1udW1lcm8ge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuc3RhdHMtYWRpY2lvbmFsZXMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE4MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMC43NXJlbTtcclxuICB9XHJcblxyXG4gIC5zdGF0LWFkaWNpb25hbCB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG5cclxuICAgIC5zdGF0LWljb24ge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXQtY29udGVudCB7XHJcbiAgICAgIC5zdGF0LWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5zdGF0LXZhbHVlIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b3AtbnVtZXJvcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnRvcC1udW1lcm8tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG5cclxuICAgIC5udW1lcm8ge1xyXG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbnRpZGFkIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubnVtZXJvcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDYwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAwLjI1cmVtO1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG5cclxuICAubnVtZXJvLWNlbGwge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuMjVyZW07XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG5cclxuICAgIC5udW1lcm8tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubnVtZXJvLXZlbnRhIHtcclxuICAgICAgZm9udC1zaXplOiAwLjY1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLm51bWVyb3MtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg1MHB4LCAxZnIpKTtcclxuICB9XHJcblxyXG4gIC5udW1lcm8tY2VsbCB7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC4ycmVtO1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuXHJcbiAgICAubnVtZXJvLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLm51bWVyby12ZW50YSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT0gUkVTUE9OU0lWRSBERVNJR04gPT09PT0gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc29ydGVvcy1yZXN1bWVuLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIC53aW5uZXItaW5mbyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuc3RhdHMtb3ZlcnZpZXcge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxhLXJlc3VtZW4ge1xyXG4gICAgLnRhYmxhLWhlYWRlcixcclxuICAgIC50YWJsYS1yb3csXHJcbiAgICAudGFibGEtZm9vdGVyIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIGdhcDogMC4yNXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sLXN1Y3Vyc2FsLFxyXG4gICAgLmNvbC1mYWN0b3IsXHJcbiAgICAuY29sLXZlbmRpZG8sXHJcbiAgICAuY29sLXBhZ2FkbyxcclxuICAgIC5jb2wtZ2FuYW5jaWEge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICAgIFxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCkgXCI6IFwiO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJsYS1oZWFkZXIge1xyXG4gICAgICAuY29sLXN1Y3Vyc2FsLFxyXG4gICAgICAuY29sLWZhY3RvcixcclxuICAgICAgLmNvbC12ZW5kaWRvLFxyXG4gICAgICAuY29sLXBhZ2FkbyxcclxuICAgICAgLmNvbC1nYW5hbmNpYSB7XHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
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








function SucursalComponent_div_13_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Abierto (cierra ", ctx_r1.timeUntilClose, ") ");
  }
}
function SucursalComponent_div_13_div_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cerrado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SucursalComponent_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SucursalComponent_div_13_div_4_span_5_Template, 2, 1, "span", 46)(6, SucursalComponent_div_13_div_4_span_6_Template, 2, 0, "span", 47);
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
function SucursalComponent_div_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Venta bloqueada:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Faltan menos de 5 minutos para el cierre del sorteo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SucursalComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_13_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openNumberModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " VENTA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SucursalComponent_div_13_div_4_Template, 7, 3, "div", 42)(5, SucursalComponent_div_13_div_5_Template, 5, 0, "div", 43);
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
function SucursalComponent_div_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 64)(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 57)(6, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_14_div_9_Template_button_click_6_listener() {
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
function SucursalComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 52)(1, "div", 53)(2, "div", 54)(3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SucursalComponent_div_14_div_9_Template, 8, 3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 60)(11, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_14_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openNumberModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " + Agregar N\u00FAmero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 62)(14, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_14_Template_button_click_14_listener() {
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
function SucursalComponent_div_15_div_7_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detail_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", detail_r8.numero.toString().padStart(2, "0"), " x L", detail_r8.monto.toFixed(0), " ");
  }
}
function SucursalComponent_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 71)(1, "div", 72)(2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SucursalComponent_div_15_div_7_span_9_Template, 2, 2, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 78)(11, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_15_div_7_Template_button_click_13_listener() {
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
function SucursalComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 66)(1, "div", 67)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ventas actuales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 68)(5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Transacciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SucursalComponent_div_15_div_7_Template, 15, 6, "div", 70);
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
    // Propiedades para la hora de Honduras
    this.currentHondurasTime = '';
    this.isProcessingModal = false;
  }
  ngOnInit() {
    this.userSubscription = this.supabaseService.currentUser$.subscribe(user => {
      this.currentUser = user;
      console.log('Usuario actual - Sucursal:', this.currentUser?.sucursal);
      if (!user || user.role !== 'sucursal') {
        this.router.navigate(['/login']);
      }
    });
    this.initializeComponent();
    this.checkTimeRestrictions();
    this.updateHondurasTime();
    // Verificar bloqueo cada minuto - usar método que se puede limpiar
    this.timeCheckInterval = setInterval(() => {
      this.checkTimeRestrictions();
    }, 60000);
    // Actualizar hora de Honduras cada segundo
    this.hondurasTimeInterval = setInterval(() => {
      this.updateHondurasTime();
    }, 1000);
  }
  ngOnDestroy() {
    // Limpiar suscripciones y timers
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.sorteoUpdateInterval) {
      clearInterval(this.sorteoUpdateInterval);
    }
    if (this.timeCheckInterval) {
      clearInterval(this.timeCheckInterval);
    }
    if (this.hondurasTimeInterval) {
      clearInterval(this.hondurasTimeInterval);
    }
  }
  updateHondurasTime() {
    const hondurasTime = this.supabaseService.getHondurasTimeNow();
    const fullFormatted = this.supabaseService.formatDateForHonduras(hondurasTime);
    const parts = fullFormatted.split(' ');
    this.currentHondurasTime = `${parts[1]} ${parts[2]}`; // "12:49:39 AM"
  }
  initializeComponent() {
    var _this = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.isLoading = true;
        _this.notificationService.showLoading('Cargando datos...');
        // Primero asegurar que los horarios de sorteo estén actualizados
        yield _this.sorteoService.refreshSorteoSchedules();
        yield _this.updateSorteoInfo();
        yield _this.loadTodaySales();
        yield _this.loadRecentSales();
        _this.setFilterDate();
        // Limpiar timer anterior si existe
        if (_this.sorteoUpdateInterval) {
          clearInterval(_this.sorteoUpdateInterval);
        }
        // Actualizar cada minuto - usar método que se puede limpiar
        _this.sorteoUpdateInterval = setInterval(/*#__PURE__*/(0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this.updateSorteoInfo();
        }), 60000);
      } catch (error) {
        _this.notificationService.showError('Error al cargar los datos');
      } finally {
        _this.isLoading = false;
        _this.notificationService.hideLoading();
      }
    })();
  }
  setFilterDate() {
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    this.filterDate = hondurasToday.toISOString().split('T')[0];
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
    var _this2 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Asegurar que tenemos los horarios más recientes
        yield _this2.sorteoService.refreshSorteoSchedules();
        _this2.currentSorteo = _this2.sorteoService.getCurrentSorteo();
        if (_this2.currentSorteo) {
          _this2.isSorteoOpen = _this2.sorteoService.isSorteoOpen(_this2.currentSorteo);
          _this2.timeUntilClose = _this2.sorteoService.getTimeUntilClose(_this2.currentSorteo);
        } else {
          _this2.isSorteoOpen = false;
          _this2.timeUntilClose = '';
        }
      } catch (error) {}
    })();
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
    return numeroRecibo;
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
        return;
      }
      // Confirmar venta
      const confirmed = yield _this3.notificationService.showConfirmation('Confirmar venta', `¿Procesar venta por L. ${_this3.getTotal().toFixed(2)}?`);
      if (!confirmed) return;
      _this3.isLoading = true;
      _this3.notificationService.showLoading('Procesando venta...');
      try {
        // Obtener el siguiente correlativo para esta sucursal
        const correlativo = yield _this3.supabaseService.getNextCorrelativo(_this3.currentUser.sucursal);
        // Generar número de recibo con correlativo
        const numeroRecibo = _this3.generateReceiptNumber(correlativo, _this3.currentUser.sucursal);
        const sale = {
          userId: _this3.currentUser.id,
          sucursal: _this3.currentUser.sucursal,
          sorteo: _this3.currentSorteo.name,
          fecha: _this3.supabaseService.getHondurasDateTime(),
          total: _this3.getTotal(),
          numeroRecibo: numeroRecibo,
          correlativo: correlativo
        };
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
        // Asegurar que los detalles tengan datos
        if (saleDetails.length === 0) {
          // Usar selectedNumbers como fallback
          for (const item of _this3.selectedNumbers) {
            saleDetails.push({
              id: `temp-${Date.now()}-${item.numero}`,
              saleId,
              numero: item.numero,
              monto: item.monto
            });
          }
        }
        _this3.printService.generateThermalReceipt(saleWithId, saleDetails);
        // Limpiar selección inmediatamente después de enviar a imprimir
        setTimeout(/*#__PURE__*/(0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          // Limpiar selección inmediatamente
          _this3.selectedNumbers = [];
          // Resetear estado de modales
          _this3.showNumberModal = false;
          _this3.showAmountModal = false;
          _this3.showConfirmModal = false;
          _this3.modalNumberInput = '';
          _this3.modalAmountInput = '';
          _this3.tempNumber = null;
          _this3.tempAmount = null;
          _this3.cdr.detectChanges(); // Forzar actualización visual inmediata
          // Recargar ventas actuales para mostrar la venta recién realizada
          yield _this3.loadTodaySales();
          yield _this3.loadRecentSales();
          _this3.cdr.detectChanges(); // Forzar actualización después de cargar ventas
        }), 100); // Pequeño retraso para evitar conflictos con la ventana de impresión
        _this3.notificationService.showSuccess('Venta procesada e impresa exitosamente');
      } catch (error) {
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
        const hondurasToday = _this4.supabaseService.getHondurasDateTime();
        const allSales = yield _this4.supabaseService.getSalesByDateAndSorteo(hondurasToday, '');
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
            _this4.saleDetails[sale.id] = [];
          }
        }
        _this4.filterSales();
      } catch (error) {
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
    if (this.isProcessingModal || this.isBlocked) {
      if (this.isBlocked) {
        this.notificationService.showError('Ventas bloqueadas', 'No se pueden realizar ventas en los últimos 5 minutos antes del sorteo');
      }
      return;
    }
    this.isProcessingModal = true;
    // Reiniciar estado de modales
    this.closeAllModals();
    // Eliminamos el setTimeout para evitar parpadeo
    this.showNumberModal = true;
    this.modalNumberInput = '';
    this.cdr.detectChanges();
    this.isProcessingModal = false;
  }
  closeAllModals() {
    this.showNumberModal = false;
    this.showAmountModal = false;
    this.showConfirmModal = false;
    this.modalNumberInput = '';
    this.modalAmountInput = '';
    this.tempNumber = null;
    this.tempAmount = null;
    this.isProcessingModal = false;
    this.cdr.detectChanges(); // Forzar detección de cambios
  }
  // Modal 1: Selección de número
  pressModalNumber(num) {
    if (this.modalNumberInput.length < 2) {
      this.modalNumberInput += num.toString();
      this.cdr.detectChanges(); // Forzar actualización de la UI
    }
  }
  clearModalNumber() {
    this.modalNumberInput = '';
    this.cdr.detectChanges(); // Forzar actualización inmediata
  }
  acceptModalNumber() {
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
    } else {
      this.isProcessingModal = false;
      this.notificationService.showError('Número inválido', 'El número debe estar entre 00 y 99');
    }
  }
  // Modal 2: Selección de apuesta
  pressModalAmount(num) {
    if (this.modalAmountInput.length < 4) {
      // Máximo 4 dígitos para el monto
      this.modalAmountInput += num.toString();
      this.cdr.detectChanges(); // Forzar actualización de la UI
    }
  }
  clearModalAmount() {
    this.modalAmountInput = '';
    this.cdr.detectChanges(); // Forzar actualización inmediata
  }
  acceptModalAmount() {
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
    // Usar hora de Honduras en lugar de hora local
    const hondurasNow = this.supabaseService.getHondurasDateTime();
    const [hours, minutes] = this.currentSorteo.closeTime.split(':');
    const closeTime = new Date(hondurasNow);
    closeTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    const timeDiff = closeTime.getTime() - hondurasNow.getTime();
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
    if (!this.recentSales) return [];
    // Usar hora de Honduras para filtrar
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    hondurasToday.setHours(0, 0, 0, 0);
    const filteredSales = this.recentSales.filter(sale => {
      // Crear fecha de venta usando Honduras timezone
      const saleDate = new Date(sale.createdAt);
      const hondurasSaleDate = this.supabaseService.convertToHondurasTime(saleDate);
      hondurasSaleDate.setHours(0, 0, 0, 0);
      const isToday = hondurasSaleDate.getTime() === hondurasToday.getTime();
      return isToday;
    });
    return filteredSales;
  }
  // Obtener fecha de hoy formateada usando Honduras timezone
  getTodayDate() {
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    return hondurasToday.toLocaleDateString('es-HN', {
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
        // Asegurar que las ventas del día estén cargadas
        if (!_this6.todaySales || _this6.todaySales.length === 0) {
          yield _this6.loadTodaySales();
        }
        // Asignar las ventas del día como ventas recientes
        _this6.recentSales = [..._this6.todaySales];
      } catch (error) {
        _this6.recentSales = [];
      }
    })();
  }
  // Método mejorado para reimprimir recibo
  reprintReceipt(sale) {
    var _this7 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this7.notificationService.showLoading('Reimprimiendo recibo...');
        // Obtener detalles de la venta desde la base de datos
        const details = yield _this7.supabaseService.getSaleDetails(sale.id);
        if (details.length === 0) {
          _this7.notificationService.showError('Sin detalles', 'No se encontraron detalles para esta venta. No se puede reimprimir el recibo.');
          return;
        }
        // Generar recibo con los detalles obtenidos
        _this7.printService.generateThermalReceipt(sale, details);
        _this7.notificationService.showSuccess('Recibo reimpreso', `Recibo #${sale.numeroRecibo || sale.id} enviado a impresora`);
      } catch (error) {
        _this7.notificationService.showError('Error de reimpresión', 'Error al reimprimir el recibo. Por favor intente nuevamente.');
      } finally {
        _this7.notificationService.hideLoading();
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
  }
  // Método de debug temporal para verificar conexión con BD
  debugSalesData() {
    var _this8 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Verificar permisos primero
        yield _this8.supabaseService.checkDatabasePermissions();
        // Llamar al método de debug del servicio
        yield _this8.supabaseService.debugSalesData();
        // Intentar cargar ventas de hoy directamente
        yield _this8.loadTodaySales();
        // Probar con fechas diferentes
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdaySales = yield _this8.supabaseService.getSalesByDateAndSorteo(yesterday, '');
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowSales = yield _this8.supabaseService.getSalesByDateAndSorteo(tomorrow, '');
        // Verificar estado de ventas recientes
        // Probar refresh forzado
        yield _this8.loadRecentSales();
      } catch (error) {}
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
      decls: 132,
      vars: 24,
      consts: [[1, "lottery-interface"], [1, "header-bar"], [1, "time-display"], [1, "time-label"], [1, "time-value"], [1, "sucursal-title"], [1, "btn-header", "btn-cerrar", 3, "click", "disabled"], [1, "main-content"], ["class", "venta-screen", 4, "ngIf"], ["class", "jugadas-screen", 4, "ngIf"], ["class", "ventas-actuales", 4, "ngIf"], [1, "modal", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "fas", "fa-hashtag"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "calculator-container"], [1, "calculator-display"], [1, "display-label"], [1, "display-value"], [1, "calculator-keypad"], [1, "keypad-row"], ["type", "button", 1, "keypad-btn", 3, "click"], ["type", "button", 1, "keypad-btn", "keypad-clear", 3, "click"], ["type", "button", 1, "keypad-btn", "keypad-accept", 3, "click", "disabled"], [1, "fas", "fa-dollar-sign"], [1, "fas", "fa-check-circle"], [1, "confirmation-container"], [1, "confirmation-card"], [1, "number-display-large"], [1, "amount-display"], [1, "confirmation-buttons"], ["type", "button", 1, "btn", "btn-success", "btn-lg", 3, "click"], [1, "fas", "fa-check"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click"], [1, "fas", "fa-times"], [1, "venta-screen"], [1, "venta-button-container"], [1, "btn-venta", 3, "click", "disabled"], ["class", "sorteo-info", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "sorteo-info"], [1, "alert", "alert-info"], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-success"], [1, "text-danger"], [1, "alert", "alert-danger"], [1, "fas", "fa-lock"], [1, "jugadas-screen"], [1, "jugadas-table"], [1, "table-header"], [1, "col-numero"], [1, "col-monto"], [1, "col-accion"], [1, "table-body"], ["class", "table-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "add-more-container"], [1, "btn-add-more", 3, "click", "disabled"], [1, "pagar-container"], [1, "btn-pagar", 3, "click", "disabled"], [1, "table-row"], [1, "btn-remove", 3, "click", "disabled"], [1, "ventas-actuales"], [1, "ventas-header"], [1, "ventas-body"], [1, "transacciones-header"], ["class", "transaccion-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "transaccion-item"], [1, "transaccion-left"], [1, "fecha-hora"], [1, "numero-recibo"], [1, "correlativo"], [1, "numeros-jugados"], ["class", "numero-small", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "transaccion-right"], [1, "total"], [1, "btn-reimprimir", 3, "click"], [1, "numero-small"]],
      template: function SucursalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Hora Honduras:");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_10_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Cerrar Sesi\u00F3n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, SucursalComponent_div_13_Template, 6, 3, "div", 8)(14, SucursalComponent_div_14_Template, 16, 4, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, SucursalComponent_div_15_Template, 8, 2, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_16_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_17_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 13)(19, "div", 14)(20, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Seleccionar N\u00FAmero ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_23_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 18)(27, "div", 19)(28, "div", 20)(29, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "NUMERO");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 23)(34, "div", 24)(35, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_35_listener($event) {
            ctx.pressModalNumber(1);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_37_listener($event) {
            ctx.pressModalNumber(2);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_39_listener($event) {
            ctx.pressModalNumber(3);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 24)(42, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_42_listener($event) {
            ctx.pressModalNumber(4);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_44_listener($event) {
            ctx.pressModalNumber(5);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_46_listener($event) {
            ctx.pressModalNumber(6);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 24)(49, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_49_listener($event) {
            ctx.pressModalNumber(7);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_51_listener($event) {
            ctx.pressModalNumber(8);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "8");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_53_listener($event) {
            ctx.pressModalNumber(9);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 24)(56, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_56_listener($event) {
            ctx.pressModalNumber(0);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_58_listener($event) {
            ctx.clearModalNumber();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, " C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_60_listener($event) {
            ctx.acceptModalNumber();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, " Aceptar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_62_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_63_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 13)(65, "div", 14)(66, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, " Ingresar Apuesta ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_69_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 18)(73, "div", 19)(74, "div", 20)(75, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "APUESTA");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 23)(80, "div", 24)(81, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_81_listener($event) {
            ctx.pressModalAmount(1);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_83_listener($event) {
            ctx.pressModalAmount(2);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_85_listener($event) {
            ctx.pressModalAmount(3);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 24)(88, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_88_listener($event) {
            ctx.pressModalAmount(4);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_90_listener($event) {
            ctx.pressModalAmount(5);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_92_listener($event) {
            ctx.pressModalAmount(6);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 24)(95, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_95_listener($event) {
            ctx.pressModalAmount(7);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_97_listener($event) {
            ctx.pressModalAmount(8);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "8");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_99_listener($event) {
            ctx.pressModalAmount(9);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 24)(102, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_102_listener($event) {
            ctx.pressModalAmount(0);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_104_listener($event) {
            ctx.clearModalAmount();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, " C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_106_listener($event) {
            ctx.acceptModalAmount();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, " Aceptar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_108_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_109_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 13)(111, "div", 14)(112, "h5", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](113, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, " Confirmar Apuesta ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_115_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 18)(119, "div", 30)(120, "div", 31)(121, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 34)(126, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_126_listener() {
            return ctx.confirmAddNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](127, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, " CONFIRMAR ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_129_listener() {
            return ctx.cancelAddNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](130, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, " Cancelar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.currentHondurasTime);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
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
      styles: ["@charset \"UTF-8\";\n\n\n.lottery-interface[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  background: #f8f9fa;\n  min-height: 100vh;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\n\n.header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  border-bottom: 1px solid #e9ecef;\n  padding: 20px 25px;\n  margin-bottom: 0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n\n.btn-header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dee2e6;\n  padding: 10px 20px;\n  font-weight: 500;\n  cursor: pointer;\n  font-size: 14px;\n  color: #495057;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n\n.btn-header[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #adb5bd;\n  color: #343a40;\n}\n\n.btn-header[_ngcontent-%COMP%]:disabled {\n  background: #f8f9fa;\n  cursor: not-allowed;\n  opacity: 0.6;\n  color: #6c757d;\n}\n\n.time-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 8px 16px;\n}\n.time-display[_ngcontent-%COMP%]   .time-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  font-weight: 500;\n  margin-bottom: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.time-display[_ngcontent-%COMP%]   .time-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2c5aa0;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n\n.sucursal-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #343a40;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: #ffffff;\n  border-radius: 0 0 8px 8px;\n  border-radius: 0 0 8px 8px;\n  min-height: 500px;\n}\n\n.venta-screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  text-align: center;\n}\n\n.btn-venta[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 100px;\n  background: #28a745;\n  border: none;\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.btn-venta[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #218838;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(40, 167, 69, 0.4);\n}\n\n.btn-venta[_ngcontent-%COMP%]:disabled {\n  background: #6c757d;\n  color: white;\n  cursor: not-allowed;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n\n.sorteo-info[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  border: 1px solid #bee5eb;\n  background: #d1ecf1;\n  color: #0c5460;\n  text-align: center;\n  margin: 20px 0;\n  padding: 12px;\n  border-radius: 6px;\n  font-weight: 500;\n}\n\n.jugadas-table[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  margin-bottom: 20px;\n  background: white;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 60px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n\n.table-header[_ngcontent-%COMP%]   .col-numero[_ngcontent-%COMP%], .table-header[_ngcontent-%COMP%]   .col-monto[_ngcontent-%COMP%], .table-header[_ngcontent-%COMP%]   .col-accion[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-right: 1px solid #dee2e6;\n  text-align: center;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.table-header[_ngcontent-%COMP%]   .col-accion[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\n.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 60px;\n  border-bottom: 1px solid #f8f9fa;\n  transition: background-color 0.2s ease;\n}\n\n.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n\n.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.table-body[_ngcontent-%COMP%]   .col-numero[_ngcontent-%COMP%], .table-body[_ngcontent-%COMP%]   .col-monto[_ngcontent-%COMP%], .table-body[_ngcontent-%COMP%]   .col-accion[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-right: 1px solid #f8f9fa;\n  text-align: center;\n  color: #495057;\n}\n\n.table-body[_ngcontent-%COMP%]   .col-accion[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n  background: #dc3545;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n  transform: scale(1.05);\n}\n\n.btn-add-more[_ngcontent-%COMP%] {\n  background: #17a2b8;\n  border: none;\n  padding: 10px 20px;\n  font-weight: 500;\n  cursor: pointer;\n  margin: 20px 0;\n  color: white;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n\n.btn-add-more[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #138496;\n  transform: translateY(-1px);\n}\n\n.btn-pagar[_ngcontent-%COMP%] {\n  background: #fd7e14;\n  border: none;\n  padding: 14px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  float: right;\n  color: white;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n\n.btn-pagar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e76500;\n  transform: translateY(-1px);\n}\n\n.ventas-actuales[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  margin-top: 20px;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  max-height: 400px;\n  display: flex;\n  flex-direction: column;\n}\n\n.ventas-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  padding: 15px 20px;\n  flex-shrink: 0;\n}\n\n.ventas-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #495057;\n}\n\n.ventas-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n}\n\n.transacciones-header[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  border-bottom: 1px solid #dee2e6;\n  padding: 10px 20px;\n  font-weight: 600;\n  font-size: 12px;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.transaccion-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 1px solid #f8f9fa;\n  transition: background-color 0.2s ease;\n}\n\n.transaccion-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n\n.transaccion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.transaccion-left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.transaccion-left[_ngcontent-%COMP%]   .fecha-hora[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  margin-bottom: 2px;\n  font-weight: 500;\n}\n\n.transaccion-left[_ngcontent-%COMP%]   .numero-recibo[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #007bff;\n  margin-bottom: 2px;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n\n.transaccion-left[_ngcontent-%COMP%]   .correlativo[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #28a745;\n  margin-bottom: 4px;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n\n.transaccion-left[_ngcontent-%COMP%]   .numeros-jugados[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.numero-small[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #495057;\n  background: #e9ecef;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-weight: 500;\n}\n\n.transaccion-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.transaccion-right[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: #495057;\n}\n\n.btn-reimprimir[_ngcontent-%COMP%] {\n  background: #6c757d;\n  border: none;\n  padding: 4px 8px;\n  font-size: 10px;\n  cursor: pointer;\n  color: white;\n  border-radius: 3px;\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.btn-reimprimir[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  padding: 12px;\n  margin: 15px 0;\n  border-radius: 6px;\n  font-weight: 500;\n}\n\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n  border-color: #bee5eb;\n}\n\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  border-color: #f5c6cb;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1050;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  display: none;\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.modal.show[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  z-index: 1055;\n  transform: scale(0.9);\n  transition: transform 0.2s ease-in-out;\n}\n\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  max-width: 400px;\n  width: 100%;\n  border: 1px solid #dee2e6;\n  transform: translateY(-10px);\n  transition: transform 0.2s ease-in-out;\n}\n\n.modal.show[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid #dee2e6;\n  background: #f8f9fa;\n  position: relative;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #6c757d;\n  background: none;\n  border: none;\n  cursor: pointer;\n  z-index: 1055;\n  line-height: 1;\n  width: 30px;\n  height: 30px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n\n\n.calculator-container[_ngcontent-%COMP%] {\n  width: 100%;\n  background: white;\n}\n\n.calculator-display[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  padding: 25px;\n  text-align: center;\n}\n\n.display-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n  display: block;\n  font-weight: 600;\n}\n\n.display-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 600;\n  color: #495057;\n  font-family: \"Courier New\", monospace;\n  min-height: 40px;\n  line-height: 1;\n}\n\n.calculator-keypad[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: white;\n}\n\n.keypad-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.keypad-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.keypad-btn[_ngcontent-%COMP%] {\n  height: 50px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background: white;\n  font-size: 16px;\n  font-weight: 600;\n  color: #495057;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.keypad-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #adb5bd;\n}\n\n.keypad-btn[_ngcontent-%COMP%]:active {\n  background: #e9ecef;\n}\n\n.keypad-btn[_ngcontent-%COMP%]:disabled {\n  background: #f8f9fa;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n\n.keypad-clear[_ngcontent-%COMP%] {\n  background: #dc3545 !important;\n  color: white !important;\n  border-color: #dc3545 !important;\n}\n\n.keypad-clear[_ngcontent-%COMP%]:hover {\n  background: #c82333 !important;\n  border-color: #c82333 !important;\n}\n\n.keypad-accept[_ngcontent-%COMP%] {\n  background: #28a745 !important;\n  color: white !important;\n  border-color: #28a745 !important;\n}\n\n.keypad-accept[_ngcontent-%COMP%]:hover {\n  background: #218838 !important;\n  border-color: #218838 !important;\n}\n\n\n\n.confirmation-container[_ngcontent-%COMP%] {\n  padding: 25px;\n  text-align: center;\n  background: white;\n}\n\n.confirmation-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 30px;\n  border: 1px solid #dee2e6;\n}\n\n.number-display-large[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  color: #28a745;\n  margin-bottom: 15px;\n  font-family: \"Courier New\", monospace;\n}\n\n.amount-display[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #495057;\n  margin-bottom: 25px;\n  font-weight: 600;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n\n\n\n@media (max-width: 768px) {\n  .lottery-interface[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0;\n  }\n  .header-bar[_ngcontent-%COMP%] {\n    padding: 15px;\n    border-radius: 0;\n  }\n  .btn-header[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 12px;\n  }\n  .sucursal-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 20px;\n    border-radius: 0;\n  }\n  .btn-venta[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 80px;\n    font-size: 20px;\n  }\n  .table-header[_ngcontent-%COMP%], .table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 50px;\n  }\n  .col-numero[_ngcontent-%COMP%], .col-monto[_ngcontent-%COMP%], .col-accion[_ngcontent-%COMP%] {\n    padding: 8px !important;\n    font-size: 13px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    max-width: 90%;\n    margin: 20px;\n  }\n  .ventas-actuales[_ngcontent-%COMP%] {\n    max-height: 300px;\n  }\n  .transaccion-item[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n  }\n  .transaccion-left[_ngcontent-%COMP%]   .fecha-hora[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .numero-small[_ngcontent-%COMP%] {\n    font-size: 9px;\n    padding: 1px 4px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0xvdGVyaWElMjB2MS9sb3RlcmlhL3NyYy9hcHAvY29tcG9uZW50cy9zdWN1cnNhbC9zdWN1cnNhbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdWN1cnNhbC9zdWN1cnNhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsd0NBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNERBQUE7RUFDQSx1Q0FBQTtBRENGOztBQ0VBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURDRjs7QUNFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURDRjtBQ0NFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QURBSjs7QUNJQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEREY7O0FDSUE7RUFDRSxhQUFBO0VB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O0lBQ0UsZUFBQTtJQUNBLFNBQUE7RURERjtFQ0lBO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0VERkY7RUNLQTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFREhGO0VDTUE7SUFDRSxlQUFBO0VESkY7RUNPQTtJQUNFLGFBQUE7SUFDQSxnQkFBQTtFRExGO0VDUUE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RURORjtFQ1NBOztJQUVFLG1DQUFBO0VEUEY7RUNVQTs7O0lBR0UsdUJBQUE7SUFDQSxlQUFBO0VEUkY7RUNXQTtJQUNFLGNBQUE7SUFDQSxZQUFBO0VEVEY7RUNZQTtJQUNFLGlCQUFBO0VEVkY7RUNhQTtJQUNFLGtCQUFBO0VEWEY7RUNjQTtJQUNFLGVBQUE7RURaRjtFQ2VBO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0VEYkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIERJU0XDg8KRTyBNSU5JTUFMSVNUQSBDT04gUEFMRVRBIFNVVElMICovXG4ubG90dGVyeS1pbnRlcmZhY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG4gIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5idG4taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLmJ0bi1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItY29sb3I6ICNhZGI1YmQ7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuXG4uYnRuLWhlYWRlcjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi50aW1lLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuLnRpbWUtZGlzcGxheSAudGltZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLnRpbWUtZGlzcGxheSAudGltZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyYzVhYTA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cblxuLnN1Y3Vyc2FsLXRpdGxlIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbn1cblxuLnZlbnRhLXNjcmVlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXZlbnRhIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uYnRuLXZlbnRhOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogIzIxODgzODtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoNDAsIDE2NywgNjksIDAuNCk7XG59XG5cbi5idG4tdmVudGE6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5zb3J0ZW8taW5mbyAuYWxlcnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmVlNWViO1xuICBiYWNrZ3JvdW5kOiAjZDFlY2YxO1xuICBjb2xvcjogIzBjNTQ2MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uanVnYWRhcy10YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDYwcHg7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLnRhYmxlLWhlYWRlciAuY29sLW51bWVybyxcbi50YWJsZS1oZWFkZXIgLmNvbC1tb250byxcbi50YWJsZS1oZWFkZXIgLmNvbC1hY2Npb24ge1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4udGFibGUtaGVhZGVyIC5jb2wtYWNjaW9uIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4udGFibGUtYm9keSAudGFibGUtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDYwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOWZhO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLnRhYmxlLWJvZHkgLnRhYmxlLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG59XG5cbi50YWJsZS1ib2R5IC50YWJsZS1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50YWJsZS1ib2R5IC5jb2wtbnVtZXJvLFxuLnRhYmxlLWJvZHkgLmNvbC1tb250byxcbi50YWJsZS1ib2R5IC5jb2wtYWNjaW9uIHtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y4ZjlmYTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLnRhYmxlLWJvZHkgLmNvbC1hY2Npb24ge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5idG4tcmVtb3ZlIHtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5idG4tcmVtb3ZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2M4MjMzMztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLmJ0bi1hZGQtbW9yZSB7XG4gIGJhY2tncm91bmQ6ICMxN2EyYjg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuLWFkZC1tb3JlOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogIzEzODQ5NjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uYnRuLXBhZ2FyIHtcbiAgYmFja2dyb3VuZDogI2ZkN2UxNDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxNHB4IDMycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4uYnRuLXBhZ2FyOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogI2U3NjUwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4udmVudGFzLWFjdHVhbGVzIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udmVudGFzLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udmVudGFzLWhlYWRlciBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLnZlbnRhcy1ib2R5IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLnRyYW5zYWNjaW9uZXMtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4udHJhbnNhY2Npb24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi50cmFuc2FjY2lvbi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cblxuLnRyYW5zYWNjaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50cmFuc2FjY2lvbi1sZWZ0IHtcbiAgZmxleDogMTtcbn1cblxuLnRyYW5zYWNjaW9uLWxlZnQgLmZlY2hhLWhvcmEge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50cmFuc2FjY2lvbi1sZWZ0IC5udW1lcm8tcmVjaWJvIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzAwN2JmZjtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi50cmFuc2FjY2lvbi1sZWZ0IC5jb3JyZWxhdGl2byB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzI4YTc0NTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi50cmFuc2FjY2lvbi1sZWZ0IC5udW1lcm9zLWp1Z2Fkb3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNHB4O1xufVxuXG4ubnVtZXJvLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udHJhbnNhY2Npb24tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRyYW5zYWNjaW9uLXJpZ2h0IC50b3RhbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi5idG4tcmVpbXByaW1pciB7XG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5idG4tcmVpbXByaW1pcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1YTYyNjg7XG59XG5cbi5hbGVydCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hbGVydC5hbGVydC1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2QxZWNmMTtcbiAgY29sb3I6ICMwYzU0NjA7XG4gIGJvcmRlci1jb2xvcjogI2JlZTVlYjtcbn1cblxuLmFsZXJ0LmFsZXJ0LWRhbmdlciB7XG4gIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XG4gIGNvbG9yOiAjNzIxYzI0O1xuICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XG59XG5cbi8qIEVTVElMT1MgUEFSQSBNT0RBTEVTIC0gTUlOSU1BTElTVEFTIENPTiBUUkFOU0lDSU9ORVMgU1VBVkVTICovXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDEwNTA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubW9kYWwuc2hvdyB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tb2RhbC1kaWFsb2cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgei1pbmRleDogMTA1NTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLm1vZGFsLnNob3cgLm1vZGFsLWRpYWxvZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubW9kYWwuc2hvdyAubW9kYWwtY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDU1O1xuICBsaW5lLWhlaWdodDogMTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiBDYWxjdWxhZG9yYSBNaW5pbWFsaXN0YSAqL1xuLmNhbGN1bGF0b3ItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY2FsY3VsYXRvci1kaXNwbGF5IHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpc3BsYXktbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGlzcGxheS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5jYWxjdWxhdG9yLWtleXBhZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ua2V5cGFkLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmtleXBhZC1yb3c6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5rZXlwYWQtYnRuIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5rZXlwYWQtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLWNvbG9yOiAjYWRiNWJkO1xufVxuXG4ua2V5cGFkLWJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xufVxuXG4ua2V5cGFkLWJ0bjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ua2V5cGFkLWNsZWFyIHtcbiAgYmFja2dyb3VuZDogI2RjMzU0NSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5rZXlwYWQtY2xlYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYzgyMzMzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2M4MjMzMyAhaW1wb3J0YW50O1xufVxuXG4ua2V5cGFkLWFjY2VwdCB7XG4gIGJhY2tncm91bmQ6ICMyOGE3NDUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xufVxuXG4ua2V5cGFkLWFjY2VwdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMTg4MzggIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMjE4ODM4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIE1vZGFsIGRlIGNvbmZpcm1hY2nDg8KzbiAqL1xuLmNvbmZpcm1hdGlvbi1jb250YWluZXIge1xuICBwYWRkaW5nOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY29uZmlybWF0aW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5udW1iZXItZGlzcGxheS1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cblxuLmFtb3VudC1kaXNwbGF5IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbmZpcm1hdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEycHg7XG59XG5cbi5jb25maXJtYXRpb24tYnV0dG9ucyAuYnRuIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb25maXJtYXRpb24tYnV0dG9ucyAuYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb25maXJtYXRpb24tYnV0dG9ucyAuYnRuLXN1Y2Nlc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjE4ODM4O1xufVxuXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMgLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb25maXJtYXRpb24tYnV0dG9ucyAuYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1YTYyNjg7XG59XG5cbi5jb25maXJtYXRpb24tYnV0dG9ucyAuYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1YTYyNjg7XG59XG5cbi8qIFJFU1BPTlNJVkUgTUlOSU1BTElTVEEgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG90dGVyeS1pbnRlcmZhY2Uge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmhlYWRlci1iYXIge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAuYnRuLWhlYWRlciB7XG4gICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5zdWN1cnNhbC10aXRsZSBoMiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAuYnRuLXZlbnRhIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAudGFibGUtaGVhZGVyLFxuICAudGFibGUtYm9keSAudGFibGUtcm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgNTBweDtcbiAgfVxuICAuY29sLW51bWVybyxcbiAgLmNvbC1tb250byxcbiAgLmNvbC1hY2Npb24ge1xuICAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAubW9kYWwtY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG4gIC52ZW50YXMtYWN0dWFsZXMge1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICB9XG4gIC50cmFuc2FjY2lvbi1pdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIH1cbiAgLnRyYW5zYWNjaW9uLWxlZnQgLmZlY2hhLWhvcmEge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAubnVtZXJvLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xuICB9XG59IiwiLyogRElTRcODwpFPIE1JTklNQUxJU1RBIENPTiBQQUxFVEEgU1VUSUwgKi9cclxuXHJcbi5sb3R0ZXJ5LWludGVyZmFjZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi5oZWFkZXItYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgcGFkZGluZzogMjBweCAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbn1cclxuXHJcbi5idG4taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmJ0bi1oZWFkZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYWRiNWJkO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG59XHJcblxyXG4uYnRuLWhlYWRlcjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLnRpbWUtZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBcclxuICAudGltZS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxuICBcclxuICAudGltZS12YWx1ZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzJjNWFhMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG4gIH1cclxufVxyXG5cclxuLnN1Y3Vyc2FsLXRpdGxlIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLnZlbnRhLXNjcmVlbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLXZlbnRhIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNDAsIDE2NywgNjksIDAuMyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5idG4tdmVudGE6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQ6ICMyMTg4Mzg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSg0MCwgMTY3LCA2OSwgMC40KTtcclxufVxyXG5cclxuLmJ0bi12ZW50YTpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4uc29ydGVvLWluZm8gLmFsZXJ0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmVlNWViO1xyXG4gIGJhY2tncm91bmQ6ICNkMWVjZjE7XHJcbiAgY29sb3I6ICMwYzU0NjA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5qdWdhZGFzLXRhYmxlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbn1cclxuXHJcbi50YWJsZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDYwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVyIC5jb2wtbnVtZXJvLFxyXG4udGFibGUtaGVhZGVyIC5jb2wtbW9udG8sXHJcbi50YWJsZS1oZWFkZXIgLmNvbC1hY2Npb24ge1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVyIC5jb2wtYWNjaW9uIHtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZS1ib2R5IC50YWJsZS1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDYwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi50YWJsZS1ib2R5IC50YWJsZS1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi50YWJsZS1ib2R5IC50YWJsZS1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlLWJvZHkgLmNvbC1udW1lcm8sXHJcbi50YWJsZS1ib2R5IC5jb2wtbW9udG8sXHJcbi50YWJsZS1ib2R5IC5jb2wtYWNjaW9uIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmOGY5ZmE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4udGFibGUtYm9keSAuY29sLWFjY2lvbiB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4uYnRuLXJlbW92ZSB7XHJcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5idG4tcmVtb3ZlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYzgyMzMzO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5idG4tYWRkLW1vcmUge1xyXG4gIGJhY2tncm91bmQ6ICMxN2EyYjg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYnRuLWFkZC1tb3JlOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiAjMTM4NDk2O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmJ0bi1wYWdhciB7XHJcbiAgYmFja2dyb3VuZDogI2ZkN2UxNDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTRweCAzMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLXBhZ2FyOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiAjZTc2NTAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLnZlbnRhcy1hY3R1YWxlcyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnZlbnRhcy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4udmVudGFzLWhlYWRlciBoNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4udmVudGFzLWJvZHkge1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtaW4taGVpZ2h0OiAwO1xyXG59XHJcblxyXG4udHJhbnNhY2Npb25lcy1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4udHJhbnNhY2Npb24taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi50cmFuc2FjY2lvbi1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG59XHJcblxyXG4udHJhbnNhY2Npb24taXRlbTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4udHJhbnNhY2Npb24tbGVmdCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLWxlZnQgLmZlY2hhLWhvcmEge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLWxlZnQgLm51bWVyby1yZWNpYm8ge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4udHJhbnNhY2Npb24tbGVmdCAuY29ycmVsYXRpdm8ge1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi50cmFuc2FjY2lvbi1sZWZ0IC5udW1lcm9zLWp1Z2Fkb3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogNHB4O1xyXG59XHJcblxyXG4ubnVtZXJvLXNtYWxsIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICBwYWRkaW5nOiAycHggNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4udHJhbnNhY2Npb24tcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udHJhbnNhY2Npb24tcmlnaHQgLnRvdGFsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLmJ0bi1yZWltcHJpbWlyIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4uYnRuLXJlaW1wcmltaXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1YTYyNjg7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYWxlcnQuYWxlcnQtaW5mbyB7XHJcbiAgYmFja2dyb3VuZDogI2QxZWNmMTtcclxuICBjb2xvcjogIzBjNTQ2MDtcclxuICBib3JkZXItY29sb3I6ICNiZWU1ZWI7XHJcbn1cclxuXHJcbi5hbGVydC5hbGVydC1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XHJcbiAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xyXG59XHJcblxyXG4vKiBFU1RJTE9TIFBBUkEgTU9EQUxFUyAtIE1JTklNQUxJU1RBUyBDT04gVFJBTlNJQ0lPTkVTIFNVQVZFUyAqL1xyXG4ubW9kYWwge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB6LWluZGV4OiAxMDUwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1vZGFsLnNob3cge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgei1pbmRleDogMTA1NTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tb2RhbC5zaG93IC5tb2RhbC1kaWFsb2cge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyAubW9kYWwtY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTVweDtcclxuICB0b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDEwNTU7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciAuY2xvc2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKiBDYWxjdWxhZG9yYSBNaW5pbWFsaXN0YSAqL1xyXG4uY2FsY3VsYXRvci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FsY3VsYXRvci1kaXNwbGF5IHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGlzcGxheS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmRpc3BsYXktdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLmNhbGN1bGF0b3Ita2V5cGFkIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ua2V5cGFkLXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4ua2V5cGFkLXJvdzpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ua2V5cGFkLWJ0biB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ua2V5cGFkLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItY29sb3I6ICNhZGI1YmQ7XHJcbn1cclxuXHJcbi5rZXlwYWQtYnRuOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxufVxyXG5cclxuLmtleXBhZC1idG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmtleXBhZC1jbGVhciB7XHJcbiAgYmFja2dyb3VuZDogI2RjMzU0NSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ua2V5cGFkLWNsZWFyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYzgyMzMzICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzgyMzMzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5rZXlwYWQtYWNjZXB0IHtcclxuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5rZXlwYWQtYWNjZXB0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjE4ODM4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjE4ODM4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIE1vZGFsIGRlIGNvbmZpcm1hY2nDg8KzbiAqL1xyXG4uY29uZmlybWF0aW9uLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4ubnVtYmVyLWRpc3BsYXktbGFyZ2Uge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuLmFtb3VudC1kaXNwbGF5IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4ge1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMgLmJ0bi1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4tc3VjY2Vzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzIxODgzODtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4tc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMgLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1YTYyNjg7XHJcbn1cclxuXHJcbi8qIFJFU1BPTlNJVkUgTUlOSU1BTElTVEEgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxvdHRlcnktaW50ZXJmYWNlIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1iYXIge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4taGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAuc3VjdXJzYWwtdGl0bGUgaDIge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAuYnRuLXZlbnRhIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLWhlYWRlcixcclxuICAudGFibGUtYm9keSAudGFibGUtcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA1MHB4O1xyXG4gIH1cclxuICBcclxuICAuY29sLW51bWVybyxcclxuICAuY29sLW1vbnRvLFxyXG4gIC5jb2wtYWNjaW9uIHtcclxuICAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnZlbnRhcy1hY3R1YWxlcyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRyYW5zYWNjaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIH1cclxuICBcclxuICAudHJhbnNhY2Npb24tbGVmdCAuZmVjaGEtaG9yYSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5udW1lcm8tc21hbGwge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7885:
/*!*************************************************************************!*\
  !*** ./src/app/components/user-management/user-management.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserManagementComponent: () => (/* binding */ UserManagementComponent)
/* harmony export */ });
/* harmony import */ var C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/supabase.service */ 9692);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notification.service */ 7473);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);







function UserManagementComponent_table_12_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td")(9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td", 16)(15, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementComponent_table_12_tr_16_Template_button_click_15_listener() {
      const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.openEditUserModal(user_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementComponent_table_12_tr_16_Template_button_click_17_listener() {
      const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.toggleUserStatus(user_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementComponent_table_12_tr_16_Template_button_click_19_listener() {
      const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.deleteUser(user_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("role-" + user_r2.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getRoleLabel(user_r2.role), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r2.sucursal || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r2.getStatusClass(user_r2.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.getStatusLabel(user_r2.active), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 15, user_r2.created_at, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.isLoading)("title", user_r2.active ? "Desactivar usuario" : "Activar usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](user_r2.active ? "fa-eye-slash" : "fa-eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
  }
}
function UserManagementComponent_table_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 12)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Fecha Creaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, UserManagementComponent_table_12_tr_16_Template, 21, 18, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.users)("ngForTrackBy", ctx_r2.trackByUserId);
  }
}
function UserManagementComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Cargando usuarios...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function UserManagementComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No hay usuarios registrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Comience creando el primer usuario del sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementComponent_div_14_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.openCreateUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Crear Primer Usuario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function UserManagementComponent_div_15_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Confirmar Contrase\u00F1a *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UserManagementComponent_div_15_div_17_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.userForm.confirmPassword, $event) || (ctx_r2.userForm.confirmPassword = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userForm.confirmPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", !ctx_r2.isEditMode || ctx_r2.userForm.password);
  }
}
function UserManagementComponent_div_15_div_26_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "option", 60);
  }
  if (rf & 2) {
    const sucursal_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", sucursal_r8);
  }
}
function UserManagementComponent_div_15_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35)(1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sucursal *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UserManagementComponent_div_15_div_26_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.userForm.sucursal, $event) || (ctx_r2.userForm.sucursal = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "datalist", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UserManagementComponent_div_15_div_26_option_5_Template, 1, 1, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Puedes escribir cualquier nombre o seleccionar una opci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userForm.sucursal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.sucursalesSugeridas);
  }
}
function UserManagementComponent_div_15_i_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 24);
  }
}
function UserManagementComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementComponent_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementComponent_div_15_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 30)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementComponent_div_15_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 33)(8, "form", 34)(9, "div", 35)(10, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Email *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UserManagementComponent_div_15_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.userForm.email, $event) || (ctx_r2.userForm.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 35)(14, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UserManagementComponent_div_15_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.userForm.password, $event) || (ctx_r2.userForm.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, UserManagementComponent_div_15_div_17_Template, 4, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 35)(19, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Rol *");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UserManagementComponent_div_15_Template_select_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.userForm.role, $event) || (ctx_r2.userForm.role = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Administrador");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, UserManagementComponent_div_15_div_26_Template, 8, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 45)(28, "label", 46)(29, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UserManagementComponent_div_15_Template_input_ngModelChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r2.userForm.active, $event) || (ctx_r2.userForm.active = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Usuario activo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 49)(33, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementComponent_div_15_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.closeUserModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementComponent_div_15_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.saveUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, UserManagementComponent_div_15_i_36_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.isEditMode ? "Editar Usuario" : "Crear Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userForm.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.isEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Contrase\u00F1a ", ctx_r2.isEditMode ? "(dejar vac\u00EDo para mantener actual)" : "*", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userForm.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("required", !ctx_r2.isEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.isEditMode || ctx_r2.userForm.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userForm.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.userForm.role === "sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.userForm.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.isEditMode ? "Actualizar" : "Crear", " Usuario ");
  }
}
class UserManagementComponent {
  constructor(supabaseService, notificationService, router, cdr) {
    this.supabaseService = supabaseService;
    this.notificationService = notificationService;
    this.router = router;
    this.cdr = cdr;
    this.currentUser = null;
    this.users = [];
    this.isLoading = false;
    // Modal para crear/editar usuario
    this.showUserModal = false;
    this.isEditMode = false;
    this.selectedUser = null;
    // Formulario de usuario
    this.userForm = {
      email: '',
      password: '',
      confirmPassword: '',
      role: 'sucursal',
      sucursal: '',
      active: true
    };
    // Lista de sucursales predefinidas para autocompletado
    this.sucursalesSugeridas = ['Sucursal Central', 'Sucursal Norte', 'Sucursal Sur', 'Sucursal Este', 'Sucursal Oeste'];
  }
  ngOnInit() {
    this.userSubscription = this.supabaseService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (!user || user.role !== 'admin') {
        this.router.navigate(['/login']);
        return;
      }
    });
    this.loadUsers();
  }
  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
  loadUsers() {
    var _this = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('loadUsers iniciado, isLoading:', _this.isLoading);
      _this.isLoading = true;
      try {
        console.log('Llamando getAllUsers...');
        _this.users = yield _this.supabaseService.getAllUsers();
        console.log('Usuarios cargados:', _this.users);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
        _this.notificationService.showError('Error al cargar usuarios');
      } finally {
        _this.isLoading = false;
        console.log('loadUsers terminado, isLoading:', _this.isLoading);
      }
    })();
  }
  openCreateUserModal() {
    this.isEditMode = false;
    this.selectedUser = null;
    this.resetForm();
    this.showUserModal = true;
    this.cdr.detectChanges();
  }
  openEditUserModal(user) {
    this.isEditMode = true;
    this.selectedUser = user;
    this.userForm = {
      email: user.email,
      password: '',
      confirmPassword: '',
      role: user.role,
      sucursal: user.sucursal || '',
      active: user.active
    };
    this.showUserModal = true;
    this.cdr.detectChanges(); // Forzar detección de cambios
  }
  closeUserModal() {
    this.showUserModal = false;
    this.resetForm();
    this.selectedUser = null;
    this.cdr.detectChanges(); // Forzar detección de cambios
  }
  goToMainMenu() {
    this.router.navigate(['/admin']);
  }
  resetForm() {
    this.userForm = {
      email: '',
      password: '',
      confirmPassword: '',
      role: 'sucursal',
      sucursal: '',
      active: true
    };
  }
  saveUser() {
    var _this2 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.validateForm()) {
        return;
      }
      _this2.isLoading = true;
      try {
        if (_this2.isEditMode && _this2.selectedUser) {
          // Actualizar usuario existente
          yield _this2.supabaseService.updateExistingUser(_this2.selectedUser.id, {
            email: _this2.userForm.email,
            role: _this2.userForm.role,
            sucursal: _this2.userForm.sucursal,
            active: _this2.userForm.active
          });
          // Si se proporcionó una nueva contraseña, actualizarla
          if (_this2.userForm.password && _this2.userForm.password.trim() !== '') {
            yield _this2.supabaseService.updateUserPassword(_this2.selectedUser.id, _this2.userForm.password);
            _this2.notificationService.showSuccess('Usuario y contraseña actualizados exitosamente');
          } else {
            _this2.notificationService.showSuccess('Usuario actualizado exitosamente');
          }
        } else {
          // Crear nuevo usuario
          yield _this2.supabaseService.createNewUser({
            email: _this2.userForm.email,
            role: _this2.userForm.role,
            sucursal: _this2.userForm.sucursal,
            active: _this2.userForm.active
          });
          _this2.notificationService.showSuccess('Usuario creado exitosamente con contraseña temporal: LoteriaTemporal123!');
        }
        _this2.closeUserModal();
        yield _this2.loadUsers();
      } catch (error) {
        _this2.notificationService.showError(error.message || 'Error al guardar usuario');
      } finally {
        _this2.isLoading = false;
      }
    })();
  }
  deleteUser(user) {
    var _this3 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirmed = yield _this3.notificationService.showConfirmation('Eliminar usuario', `¿Está seguro que desea eliminar al usuario ${user.email}?`);
      if (!confirmed) return;
      _this3.isLoading = true;
      try {
        yield _this3.supabaseService.deleteExistingUser(user.id);
        _this3.notificationService.showSuccess('Usuario eliminado exitosamente');
        yield _this3.loadUsers();
      } catch (error) {
        _this3.notificationService.showError(error.message || 'Error al eliminar usuario');
      } finally {
        _this3.isLoading = false;
      }
    })();
  }
  toggleUserStatus(user) {
    var _this4 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newStatus = !user.active;
      const action = newStatus ? 'activar' : 'desactivar';
      const confirmed = yield _this4.notificationService.showConfirmation(`${action.charAt(0).toUpperCase() + action.slice(1)} usuario`, `¿Está seguro que desea ${action} al usuario ${user.email}?`);
      if (!confirmed) return;
      _this4.isLoading = true;
      try {
        yield _this4.supabaseService.toggleExistingUserStatus(user.id);
        _this4.notificationService.showSuccess(`Usuario ${action}ado exitosamente`);
        yield _this4.loadUsers();
      } catch (error) {
        _this4.notificationService.showError(error.message || `Error al ${action} usuario`);
      } finally {
        _this4.isLoading = false;
      }
    })();
  }
  validateForm() {
    if (!this.userForm.email) {
      this.notificationService.showError('El email es requerido');
      return false;
    }
    if (!this.isEditMode && !this.userForm.password) {
      this.notificationService.showError('La contraseña es requerida para usuarios nuevos');
      return false;
    }
    if (this.userForm.password && this.userForm.password.length < 6) {
      this.notificationService.showError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    if (this.userForm.password && this.userForm.password !== this.userForm.confirmPassword) {
      this.notificationService.showError('Las contraseñas no coinciden');
      return false;
    }
    if (this.userForm.role === 'sucursal' && !this.userForm.sucursal.trim()) {
      this.notificationService.showError('La sucursal es requerida para usuarios de tipo sucursal');
      return false;
    }
    return true;
  }
  getRoleLabel(role) {
    return role === 'admin' ? 'Administrador' : 'Vendedor';
  }
  getStatusLabel(active) {
    return active ? 'Activo' : 'Inactivo';
  }
  getStatusClass(active) {
    return active ? 'status-active' : 'status-inactive';
  }
  // Función de trackBy para optimizar el rendimiento del ngFor
  trackByUserId(index, user) {
    return user.id;
  }
  static {
    this.ɵfac = function UserManagementComponent_Factory(t) {
      return new (t || UserManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: UserManagementComponent,
      selectors: [["app-user-management"]],
      decls: 16,
      vars: 6,
      consts: [[1, "user-management-container"], [1, "header"], [1, "header-left"], ["title", "Regresar al men\u00FA principal", 1, "btn-secondary", 3, "click", "disabled"], [1, "fas", "fa-arrow-left"], ["title", "Crear nuevo usuario", 1, "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-plus"], [1, "users-table-container"], ["class", "users-table", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "users-table"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "role-badge"], [1, "status-badge"], [1, "actions-cell"], ["title", "Editar usuario", 1, "btn-icon", "btn-edit", 3, "click", "disabled"], [1, "fas", "fa-edit"], [1, "btn-icon", "btn-toggle", 3, "click", "disabled", "title"], [1, "fas"], ["title", "Eliminar usuario", 1, "btn-icon", "btn-delete", 3, "click", "disabled"], [1, "fas", "fa-trash"], [1, "loading-state"], [1, "fas", "fa-spinner", "fa-spin"], [1, "empty-state"], [1, "fas", "fa-users"], [1, "btn-primary", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "btn-close", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "user-form"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "placeholder", "ejemplo@correo.com", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "placeholder", "M\u00EDnimo 6 caracteres", 3, "ngModelChange", "ngModel", "required"], ["class", "form-group", 4, "ngIf"], ["for", "role"], ["id", "role", "name", "role", "required", "", 3, "ngModelChange", "ngModel"], ["value", "admin"], ["value", "sucursal"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "name", "active", 3, "ngModelChange", "ngModel"], [1, "checkmark"], [1, "modal-footer"], [1, "btn-secondary", 3, "click", "disabled"], [1, "btn-primary", 3, "click", "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], ["for", "confirmPassword"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "placeholder", "Repetir la contrase\u00F1a", 3, "ngModelChange", "ngModel", "required"], ["for", "sucursal"], ["type", "text", "id", "sucursal", "name", "sucursal", "placeholder", "Ingrese el nombre de la sucursal", "list", "sucursales-list", "required", "", 3, "ngModelChange", "ngModel"], ["id", "sucursales-list"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-help"], [3, "value"]],
      template: function UserManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementComponent_Template_button_click_3_listener() {
            return ctx.goToMainMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Men\u00FA Principal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Gesti\u00F3n de Usuarios");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementComponent_Template_button_click_8_listener() {
            return ctx.openCreateUserModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Crear Usuario ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, UserManagementComponent_table_12_Template, 17, 2, "table", 8)(13, UserManagementComponent_div_13_Template, 4, 0, "div", 9)(14, UserManagementComponent_div_14_Template, 9, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, UserManagementComponent_div_15_Template, 38, 14, "div", 11);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.users.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.users.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showUserModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
      styles: ["@charset \"UTF-8\";\n.user-management-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n}\n\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #333;\n  margin: 0;\n}\n\n\n\n.users-table-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  font-weight: 600;\n  color: #555;\n}\n\n.users-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n\n\n.role-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.role-admin[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n\n.role-sucursal[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  color: #7b1fa2;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.status-active[_ngcontent-%COMP%] {\n  background-color: #e8f5e8;\n  color: #2e7d32;\n}\n\n.status-inactive[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #d32f2f;\n}\n\n\n\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background-color: #bbdefb;\n}\n\n.btn-toggle[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  color: #f57c00;\n}\n\n.btn-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #ffe0b2;\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #d32f2f;\n}\n\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background-color: #ffcdd2;\n}\n\n\n\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n  color: #666;\n}\n\n.loading-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 16px;\n  color: #1976d2;\n}\n\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n  color: #ccc;\n}\n\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 16px 0 8px 0;\n  color: #333;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  width: 90%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n}\n\n.btn-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  color: #666;\n  padding: 4px;\n}\n\n.btn-close[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 20px;\n  border-top: 1px solid #e5e5e5;\n}\n\n\n\n.user-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  font-weight: 500;\n  color: #333;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1976d2;\n  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.2);\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  color: #666;\n}\n\n\n\n.checkbox-group[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin: 0;\n}\n\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  background-color: #fff;\n  border: 2px solid #ddd;\n  border-radius: 4px;\n  margin-right: 8px;\n  position: relative;\n  transition: all 0.2s;\n}\n\n.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  border-color: #1976d2;\n}\n\n.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .checkmark[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 6px;\n  top: 2px;\n  width: 6px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  transform: rotate(45deg);\n}\n\n\n\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #1565c0;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  color: #333;\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled, .btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n    align-items: stretch;\n  }\n  .users-table-container[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .users-table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n  .modal-container[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: 20px;\n  }\n}\n.form-help[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #666;\n  font-style: italic;\n}\n\ninput[list][_ngcontent-%COMP%] {\n  position: relative;\n}\n\ninput[list][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\ninput[list][_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0xvdGVyaWElMjB2MS9sb3RlcmlhL3NyYy9hcHAvY29tcG9uZW50cy91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb21wb25lbnRzL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBREVGOztBQ0NBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBREVGOztBQ0NBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBREVGOztBQ0NBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QURFRjs7QUNDQSxzQkFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7QURFRjs7QUNDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBREVGOztBQ0NBOztFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBREVGOztBQ0NBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QURFRjs7QUNDQTtFQUNFLHlCQUFBO0FERUY7O0FDQ0EsV0FBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FERUY7O0FDQ0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QURFRjs7QUNDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBREVGOztBQ0NBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBREVGOztBQ0NBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FERUY7O0FDQ0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QURFRjs7QUNDQSxhQUFBO0FBQ0E7RUFD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OztBQ0NBLGVBQUE7QUFDQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0lBQ0Esb0JBQUE7RURFRjtFQ0NBO0lBQ0UsZ0JBQUE7RURDRjtFQ0VBO0lBQ0UsZ0JBQUE7RURBRjtFQ0dBO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RURERjtBQUNGO0FDS0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURIRjs7QUNPQTtFQUNFLGtCQUFBO0FESkY7O0FDT0E7RUFDRSxhQUFBO0FESkY7O0FDT0E7RUFDRSxxQkFBQTtFQUNBLGdEQUFBO0FESkYiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udXNlci1tYW5hZ2VtZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmhlYWRlci1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uaGVhZGVyIGgyIHtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogVGFibGEgZGUgdXN1YXJpb3MgKi9cbi51c2Vycy10YWJsZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnVzZXJzLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi51c2Vycy10YWJsZSB0aCxcbi51c2Vycy10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG59XG5cbi51c2Vycy10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4udXNlcnMtdGFibGUgdGJvZHkgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4vKiBCYWRnZXMgKi9cbi5yb2xlLWJhZGdlIHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucm9sZS1hZG1pbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGNvbG9yOiAjMTk3NmQyO1xufVxuXG4ucm9sZS1zdWN1cnNhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2U1ZjU7XG4gIGNvbG9yOiAjN2IxZmEyO1xufVxuXG4uc3RhdHVzLWJhZGdlIHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3RhdHVzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGY1ZTg7XG4gIGNvbG9yOiAjMmU3ZDMyO1xufVxuXG4uc3RhdHVzLWluYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgY29sb3I6ICNkMzJmMmY7XG59XG5cbi8qIEFjY2lvbmVzICovXG4uYWN0aW9ucy1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbi5idG4taWNvbiB7XG4gIHBhZGRpbmc6IDZweCA4cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5idG4tZWRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGNvbG9yOiAjMTk3NmQyO1xufVxuXG4uYnRuLWVkaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkZWZiO1xufVxuXG4uYnRuLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYzZTA7XG4gIGNvbG9yOiAjZjU3YzAwO1xufVxuXG4uYnRuLXRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmUwYjI7XG59XG5cbi5idG4tZGVsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcbiAgY29sb3I6ICNkMzJmMmY7XG59XG5cbi5idG4tZGVsZXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RkMjtcbn1cblxuLyogRXN0YWRvcyBkZSBjYXJnYSB5IHZhY8ODwq1vICovXG4ubG9hZGluZy1zdGF0ZSxcbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweCAyMHB4O1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmxvYWRpbmctc3RhdGUgaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgY29sb3I6ICMxOTc2ZDI7XG59XG5cbi5lbXB0eS1zdGF0ZSBpIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBjb2xvcjogI2NjYztcbn1cblxuLmVtcHR5LXN0YXRlIGgzIHtcbiAgbWFyZ2luOiAxNnB4IDAgOHB4IDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4vKiBNb2RhbCAqL1xuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLm1vZGFsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG59XG5cbi5tb2RhbC1oZWFkZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uYnRuLWNsb3NlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2NjY7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLmJ0bi1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTVlNWU1O1xufVxuXG4vKiBGb3JtdWxhcmlvICovXG4udXNlci1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQsXG4uZm9ybS1ncm91cCBzZWxlY3Qge1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLFxuLmZvcm0tZ3JvdXAgc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgyNSwgMTE4LCAyMTAsIDAuMik7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi8qIENoZWNrYm94IHBlcnNvbmFsaXphZG8gKi9cbi5jaGVja2JveC1ncm91cCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGVja2JveC1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2hlY2tib3gtbGFiZWwgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jaGVja21hcmsge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uY2hlY2tib3gtbGFiZWwgaW5wdXQ6Y2hlY2tlZCArIC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBib3JkZXItY29sb3I6ICMxOTc2ZDI7XG59XG5cbi5jaGVja2JveC1sYWJlbCBpbnB1dDpjaGVja2VkICsgLmNoZWNrbWFyazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDZweDtcbiAgdG9wOiAycHg7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4vKiBCb3RvbmVzICovXG4uYnRuLXByaW1hcnksXG4uYnRuLXNlY29uZGFyeSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1NjVjMDtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQsXG4uYnRuLXNlY29uZGFyeTpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLyogUmVzcG9uc2l2ZSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gIC51c2Vycy10YWJsZS1jb250YWluZXIge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgLnVzZXJzLXRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xuICB9XG4gIC5tb2RhbC1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG59XG4uZm9ybS1oZWxwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5pbnB1dFtsaXN0XSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbbGlzdF06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W2xpc3RdOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XG59IiwiLnVzZXItbWFuYWdlbWVudC1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmhlYWRlci1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIGgyIHtcclxuICBjb2xvcjogIzMzMztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIFRhYmxhIGRlIHVzdWFyaW9zICovXHJcbi51c2Vycy10YWJsZS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udXNlcnMtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbi51c2Vycy10YWJsZSB0aCxcclxuLnVzZXJzLXRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcclxufVxyXG5cclxuLnVzZXJzLXRhYmxlIHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi51c2Vycy10YWJsZSB0Ym9keSB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuLyogQmFkZ2VzICovXHJcbi5yb2xlLWJhZGdlIHtcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnJvbGUtYWRtaW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XHJcbiAgY29sb3I6ICMxOTc2ZDI7XHJcbn1cclxuXHJcbi5yb2xlLXN1Y3Vyc2FsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNlNWY1O1xyXG4gIGNvbG9yOiAjN2IxZmEyO1xyXG59XHJcblxyXG4uc3RhdHVzLWJhZGdlIHtcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zdGF0dXMtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmNWU4O1xyXG4gIGNvbG9yOiAjMmU3ZDMyO1xyXG59XHJcblxyXG4uc3RhdHVzLWluYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xyXG4gIGNvbG9yOiAjZDMyZjJmO1xyXG59XHJcblxyXG4vKiBBY2Npb25lcyAqL1xyXG4uYWN0aW9ucy1jZWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4uYnRuLWljb24ge1xyXG4gIHBhZGRpbmc6IDZweCA4cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4uYnRuLWVkaXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XHJcbiAgY29sb3I6ICMxOTc2ZDI7XHJcbn1cclxuXHJcbi5idG4tZWRpdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZGVmYjtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYzZTA7XHJcbiAgY29sb3I6ICNmNTdjMDA7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMGIyO1xyXG59XHJcblxyXG4uYnRuLWRlbGV0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcclxuICBjb2xvcjogI2QzMmYyZjtcclxufVxyXG5cclxuLmJ0bi1kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNkZDI7XHJcbn1cclxuXHJcbi8qIEVzdGFkb3MgZGUgY2FyZ2EgeSB2YWPDg8KtbyAqL1xyXG4ubG9hZGluZy1zdGF0ZSxcclxuLmVtcHR5LXN0YXRlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjBweCAyMHB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4ubG9hZGluZy1zdGF0ZSBpIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBjb2xvcjogIzE5NzZkMjtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIGkge1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUgaDMge1xyXG4gIG1hcmdpbjogMTZweCAwIDhweCAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4vKiBNb2RhbCAqL1xyXG4ubW9kYWwtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWF4LWhlaWdodDogOTB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5idG4tY2xvc2Uge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uYnRuLWNsb3NlOmhvdmVyIHtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTtcclxufVxyXG5cclxuLyogRm9ybXVsYXJpbyAqL1xyXG4udXNlci1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGlucHV0LFxyXG4uZm9ybS1ncm91cCBzZWxlY3Qge1xyXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMsXHJcbi5mb3JtLWdyb3VwIHNlbGVjdDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICMxOTc2ZDI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjUsIDExOCwgMjEwLCAwLjIpO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dDpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLyogQ2hlY2tib3ggcGVyc29uYWxpemFkbyAqL1xyXG4uY2hlY2tib3gtZ3JvdXAge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrYm94LWxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNoZWNrYm94LWxhYmVsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5jaGVja21hcmsge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmNoZWNrYm94LWxhYmVsIGlucHV0OmNoZWNrZWQgKyAuY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGJvcmRlci1jb2xvcjogIzE5NzZkMjtcclxufVxyXG5cclxuLmNoZWNrYm94LWxhYmVsIGlucHV0OmNoZWNrZWQgKyAuY2hlY2ttYXJrOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDZweDtcclxuICB0b3A6IDJweDtcclxuICB3aWR0aDogNnB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4vKiBCb3RvbmVzICovXHJcbi5idG4tcHJpbWFyeSxcclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1NjVjMDtcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQsXHJcbi5idG4tc2Vjb25kYXJ5OmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE2cHg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcblxyXG4gIC51c2Vycy10YWJsZS1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICB9XHJcblxyXG4gIC51c2Vycy10YWJsZSB7XHJcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXN0aWxvcyBwYXJhIGVsIHRleHRvIGRlIGF5dWRhXHJcbi5mb3JtLWhlbHAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4vLyBFc3RpbG9zIHBhcmEgZWwgZGF0YWxpc3QgYXV0b2NvbXBsZXRhZG9cclxuaW5wdXRbbGlzdF0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuaW5wdXRbbGlzdF06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbbGlzdF06Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
    return this.supabaseService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.timeout)(8000),
    // Aumentar timeout a 8 segundos
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
      const isAdmin = user?.role === 'admin';
      return isAdmin;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(isAdmin => {
      if (!isAdmin) {
        this.router.navigate(['/sucursal']);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
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
    return this.supabaseService.currentUser$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.timeout)(8000),
    // Aumentar timeout a 8 segundos
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
      return !!user;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(isAuthenticated => {
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      // Dar más tiempo antes de redirigir
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
  closeTime: '9:15'
}, {
  name: 'tarde',
  label: 'Tarde',
  closeTime: '14:55'
}, {
  name: 'noche',
  label: 'Noche',
  closeTime: '20:55'
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
    // Si no hay detalles, crear datos de prueba
    if (!details || details.length === 0) {
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
      // FUNCIÓN DE IMPRESIÓN DIRECTA
      // Crear blob para impresión
      const pdfData = pdf.output('arraybuffer');
      const blob = new Blob([pdfData], {
        type: 'application/pdf'
      });
      const url = URL.createObjectURL(blob);
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
            } catch (printError) {}
          }, 1000); // Esperar 1 segundo para que cargue completamente
          // Limpiar URL cuando la ventana se cierre (detección manual)
          const checkClosed = setInterval(() => {
            if (printWindow.closed) {
              clearInterval(checkClosed);
              URL.revokeObjectURL(url);
            }
          }, 1000);
        };
      } else {
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
            }, 5000);
          } catch (printError) {}
        };
      }
    } catch (error) {
      alert('Error al generar el recibo: ' + (error?.message || error));
    }
  }
  // Método de prueba para generar un recibo con datos fijos
  generateTestReceipt() {
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
/* harmony import */ var C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _models_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/interfaces */ 4597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _supabase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supabase.service */ 9692);




class SorteoService {
  constructor(supabaseService) {
    this.supabaseService = supabaseService;
    this.sorteoSchedules = [..._models_interfaces__WEBPACK_IMPORTED_MODULE_1__.SORTEO_SCHEDULES];
    this.loadSorteoSchedules();
  }
  loadSorteoSchedules() {
    var _this = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Usar siempre los horarios definidos en las interfaces
        _this.sorteoSchedules = [..._models_interfaces__WEBPACK_IMPORTED_MODULE_1__.SORTEO_SCHEDULES];
        // Opcionalmente, si quieres usar horarios dinámicos de la BD, descomenta:
        /*
        const dynamicSchedules = await this.supabaseService.getSorteoSchedules();
        
        if (dynamicSchedules.length > 0) {
          this.sorteoSchedules = dynamicSchedules.map(schedule => ({
            name: schedule.name,
            label: schedule.label,
            closeTime: schedule.close_time  // Mapear de close_time a closeTime
          }));
        }
        */
      } catch (error) {
        // Mantener los horarios por defecto en caso de error
        _this.sorteoSchedules = [..._models_interfaces__WEBPACK_IMPORTED_MODULE_1__.SORTEO_SCHEDULES];
      }
    })();
  }
  refreshSorteoSchedules() {
    var _this2 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.loadSorteoSchedules();
    })();
  }
  getCurrentSorteo() {
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const currentHour = hondurasTime.getHours();
    const currentMinute = hondurasTime.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    for (const sorteo of this.sorteoSchedules) {
      const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
      const closeTimeInMinutes = closeHour * 60 + closeMinute;
      if (currentTimeInMinutes < closeTimeInMinutes) {
        return sorteo;
      }
    }
    // Si ya pasaron todos los sorteos del día, retorna null
    return null;
  }
  getNextSorteo() {
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const currentHour = hondurasTime.getHours();
    const currentMinute = hondurasTime.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    for (const sorteo of this.sorteoSchedules) {
      const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
      const closeTimeInMinutes = closeHour * 60 + closeMinute;
      if (currentTimeInMinutes < closeTimeInMinutes) {
        return sorteo;
      }
    }
    // Si ya pasaron todos los sorteos del día, retorna el primero del siguiente día
    return this.sorteoSchedules[0] || null;
  }
  isSorteoOpen(sorteo) {
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const currentHour = hondurasTime.getHours();
    const currentMinute = hondurasTime.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
    const closeTimeInMinutes = closeHour * 60 + closeMinute;
    return currentTimeInMinutes < closeTimeInMinutes;
  }
  getTimeUntilClose(sorteo) {
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const [hours, minutes] = sorteo.closeTime.split(':');
    const closeTime = new Date(hondurasTime);
    closeTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    if (closeTime <= hondurasTime) {
      return '00:00';
    }
    const diff = closeTime.getTime() - hondurasTime.getTime();
    const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
    const minutesLeft = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    const timeLeft = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}`;
    return timeLeft;
  }
  getAllSorteos() {
    return this.sorteoSchedules;
  }
  static {
    this.ɵfac = function SorteoService_Factory(t) {
      return new (t || SorteoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_supabase_service__WEBPACK_IMPORTED_MODULE_2__.SupabaseService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
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
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @supabase/supabase-js */ 2014);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _models_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/interfaces */ 4597);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ 9380);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns-tz */ 1812);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/locale */ 5281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);









class SupabaseService {
  constructor() {
    var _this = this;
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this.currentUser$ = this.currentUserSubject.asObservable();
    // Subject para comunicación entre componentes
    this.resumenUpdateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    // ========== FUNCIONES DE TIMEZONE HONDURAS CON DATE-FNS-TZ ==========
    this.HONDURAS_TIMEZONE = 'America/Tegucigalpa';
    this.supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_6__.createClient)(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.supabase.url, _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.supabase.key);
    // Inicializar sesión existente
    this.initializeSession();
    // Escuchar cambios en la autenticación
    this.supabase.auth.onAuthStateChange(/*#__PURE__*/function () {
      var _ref = (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event, session) {
        if (session?.user && session.user.email) {
          // Obtener sucursal del metadata si existe, sino usar método por email
          const userMetadata = session.user.user_metadata || {};
          const rawMetadata = session.user.raw_user_meta_data || {};
          const metaSucursal = userMetadata.sucursal || rawMetadata.sucursal;
          const metaRole = userMetadata.role || rawMetadata.role;
          const userData = {
            id: session.user.id,
            email: session.user.email,
            role: metaRole || (session.user.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal'),
            sucursal: metaSucursal || _this.getSucursalFromEmail(session.user.email),
            active: true,
            createdAt: new Date()
          };
          _this.currentUserSubject.next(userData);
        } else {
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
        const {
          data: {
            session
          },
          error
        } = yield _this2.supabase.auth.getSession();
        if (error) {
          _this2.currentUserSubject.next(null);
          return;
        }
        if (session?.user && session.user.email) {
          // Obtener sucursal del metadata si existe, sino usar método por email
          const userMetadata = session.user.user_metadata || {};
          const rawMetadata = session.user.raw_user_meta_data || {};
          const metaSucursal = userMetadata.sucursal || rawMetadata.sucursal;
          const metaRole = userMetadata.role || rawMetadata.role;
          const userData = {
            id: session.user.id,
            email: session.user.email,
            role: metaRole || (session.user.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal'),
            sucursal: metaSucursal || _this2.getSucursalFromEmail(session.user.email),
            active: true,
            createdAt: new Date()
          };
          _this2.currentUserSubject.next(userData);
        } else {
          _this2.currentUserSubject.next(null);
        }
      } catch (error) {
        _this2.currentUserSubject.next(null);
      }
    })();
  }
  // Cargar datos del usuario en segundo plano
  loadUserDataInBackground(uid) {
    var _this3 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Background load timeout')), 5000);
        });
        const queryPromise = _this3.supabase.from('users').select('*').eq('id', uid).single();
        const {
          data,
          error
        } = yield Promise.race([queryPromise, timeoutPromise]);
        if (data && !error) {
          const updatedUser = {
            id: data.id,
            email: data.email,
            role: data.role,
            sucursal: data.sucursal,
            active: data.active,
            createdAt: new Date(data.created_at)
          };
          _this3.currentUserSubject.next(updatedUser);
        }
      } catch (error) {
        // No hacer nada, mantener los datos por defecto
      }
    })();
  }
  // Autenticación
  login(email, password) {
    var _this4 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this4.supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) {
          throw error;
        }
        if (data.user && data.user.email) {
          // Obtener sucursal del metadata si existe, sino usar método por email
          const userMetadata = data.user.user_metadata || {};
          const rawMetadata = data.user.raw_user_meta_data || {};
          const metaSucursal = userMetadata.sucursal || rawMetadata.sucursal;
          const metaRole = userMetadata.role || rawMetadata.role;
          const userData = {
            id: data.user.id,
            email: data.user.email,
            role: metaRole || (data.user.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal'),
            sucursal: metaSucursal || _this4.getSucursalFromEmail(data.user.email),
            active: true,
            createdAt: new Date()
          };
          _this4.currentUserSubject.next(userData);
          return userData;
        }
        return null;
      } catch (error) {
        throw error;
      }
    })();
  }
  getSucursalFromEmail(email) {
    if (email === 'gerencia@loteria.com') return '';
    if (email.includes('venta1')) return 'Sucursal 1';
    if (email.includes('venta2')) return 'Sucursal 2';
    if (email.includes('venta3')) return 'Sucursal 3';
    if (email.includes('venta4')) return 'Sucursal 4';
    return 'Principal';
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
        return false;
      }
    })();
  }
  // Usuarios
  getUserData(uid) {
    var _this7 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Primero obtener datos básicos de auth
        const {
          data: authUser,
          error: authError
        } = yield _this7.supabase.auth.getUser();
        if (authError || !authUser.user) {
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
          // Error/timeout consultando tabla users, usar datos por defecto
        }
        return defaultUserData;
      } catch (error) {
        return null;
      }
    })();
  }
  // Ventas
  getNextCorrelativo(sucursal) {
    var _this8 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Obtener el correlativo más alto para esta sucursal en el día actual
        const today = new Date();
        const startOfDay = new Date(today);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(today);
        endOfDay.setHours(23, 59, 59, 999);
        // Obtener solo las del día actual
        const {
          data,
          error
        } = yield _this8.supabase.from('sales').select('correlativo, fecha, created_at').eq('sucursal', sucursal).gte('fecha', startOfDay.toISOString()).lte('fecha', endOfDay.toISOString()).order('correlativo', {
          ascending: false
        }).limit(1);
        if (error) {
          throw error;
        }
        const nextCorrelativo = data && data.length > 0 ? (data[0].correlativo || 0) + 1 : 1;
        return nextCorrelativo;
      } catch (error) {
        // En caso de error, usar 1 como fallback
        return 1;
      }
    })();
  }
  createSale(sale) {
    var _this9 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Obtener fecha/hora actual en Honduras
        const hondurasTime = _this9.getHondurasDateTime();
        // Convertir a UTC para guardar en la base de datos
        const utcTime = _this9.hondurasToUtc(hondurasTime);
        const saleData = {
          user_id: sale.userId,
          sucursal: sale.sucursal,
          sorteo: sale.sorteo,
          fecha: utcTime.toISOString(),
          total: sale.total,
          numero_recibo: sale.numeroRecibo,
          correlativo: sale.correlativo,
          created_at: utcTime.toISOString()
        };
        const {
          data,
          error
        } = yield _this9.supabase.from('sales').insert([saleData]).select().single();
        if (error) {
          throw error;
        }
        return data.id;
      } catch (error) {
        throw error;
      }
    })();
  }
  createSaleDetail(detail) {
    var _this0 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Validar que los datos sean válidos
        if (detail.numero === null || detail.numero === undefined) {
          throw new Error('Número no puede ser null o undefined');
        }
        if (detail.monto === null || detail.monto === undefined || detail.monto <= 0) {
          throw new Error('Monto debe ser mayor a 0');
        }
        // Convertir el número a string con formato de 2 dígitos (00, 01, 02, etc.)
        const numeroString = detail.numero.toString().padStart(2, '0');
        const detailData = {
          sale_id: detail.saleId,
          numero: numeroString,
          monto: Number(detail.monto)
        };
        const {
          data,
          error
        } = yield _this0.supabase.from('sale_details').insert([detailData]).select().single();
        if (error) {
          throw error;
        }
        return data.id;
      } catch (error) {
        throw error;
      }
    })();
  }
  getSalesByDateAndSorteo(fecha, sorteo) {
    var _this1 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Crear rango de fechas para el día seleccionado en hora de Honduras
        const startOfDayHonduras = new Date(fecha);
        startOfDayHonduras.setHours(0, 0, 0, 0);
        const endOfDayHonduras = new Date(fecha);
        endOfDayHonduras.setHours(23, 59, 59, 999);
        // Convertir a UTC para consultar en la base de datos
        const startOfDayUtc = _this1.hondurasToUtc(startOfDayHonduras);
        const endOfDayUtc = _this1.hondurasToUtc(endOfDayHonduras);
        let query = _this1.supabase.from('sales').select('*').gte('fecha', startOfDayUtc.toISOString()).lte('fecha', endOfDayUtc.toISOString()).order('created_at', {
          ascending: false
        });
        if (sorteo && sorteo.trim() !== '') {
          query = query.eq('sorteo', sorteo);
        }
        const {
          data,
          error
        } = yield query;
        if (error) {
          throw error;
        }
        if (!data || data.length === 0) {
          return [];
        }
        const mappedSales = data.map(sale => ({
          id: sale.id,
          userId: sale.user_id,
          sucursal: sale.sucursal,
          sorteo: sale.sorteo,
          fecha: _this1.parseDateFromDatabase(sale.fecha),
          total: sale.total,
          numeroRecibo: sale.numero_recibo || sale.id.slice(-6),
          correlativo: sale.correlativo || 0,
          createdAt: _this1.parseDateFromDatabase(sale.created_at) // Convertir a hora Honduras
        }));
        return mappedSales;
      } catch (error) {
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
        // Asegurar formato de string para numero_ganador
        const numeroGanadorString = (sorteo.numeroGanador ?? '').toString().padStart(2, '0');
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
          // Mantener como string ya que numero_ganador es tipo text
          numeroGanador: data.numero_ganador || '',
          factorMultiplicador: data.factor_multiplicador,
          totalVendido: data.total_vendido,
          totalPagado: data.total_pagado,
          gananciaNeta: data.ganancia_neta,
          cerrado: data.cerrado
        };
      } catch (error) {
        return null;
      }
    })();
  }
  // Método específico para verificar si un sorteo existe por ID (maneja múltiples sucursales)
  getSorteoById(sorteoId) {
    var _this13 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this13.supabase.from('sorteos').select('*').eq('id', sorteoId);
        if (error) {
          // Si es un error de permisos (406, RLS), lanzar para manejo especial
          if (error.code === '42501' || error.details?.includes('permission denied')) {
            throw {
              ...error,
              isRLSError: true
            };
          }
          throw error;
        }
        if (!data || data.length === 0) {
          return null;
        }
        // Si hay múltiples sucursales, usar la primera para mostrar datos básicos
        const firstRecord = data[0];
        return {
          id: firstRecord.id,
          fecha: new Date(firstRecord.fecha),
          sorteo: firstRecord.sorteo,
          horaCierre: new Date(firstRecord.hora_cierre),
          numeroGanador: firstRecord.numero_ganador || '',
          factorMultiplicador: firstRecord.factor_multiplicador,
          totalVendido: firstRecord.total_vendido,
          totalPagado: firstRecord.total_pagado,
          gananciaNeta: firstRecord.ganancia_neta,
          cerrado: firstRecord.cerrado,
          sucursal: firstRecord.sucursal
        };
      } catch (error) {
        throw error;
      }
    })();
  }
  // Nuevo método para obtener resumen de todas las sucursales de un sorteo
  getSorteoResumenPorSucursal(sorteoId) {
    var _this14 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this14.supabase.from('sorteos').select('sucursal, numero_ganador, factor_multiplicador, total_vendido, total_pagado, ganancia_neta').eq('id', sorteoId).order('sucursal');
        if (error) {
          console.error('Error al obtener resumen por sucursal:', error);
          return [];
        }
        return data || [];
      } catch (error) {
        console.error('Error al obtener resumen por sucursal:', error);
        return [];
      }
    })();
  }
  // Método alternativo que usa una consulta sin RLS estricto
  getSorteoByIdSimple(sorteoId) {
    var _this15 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this15.supabase.rpc('get_sorteo_simple', {
          sorteo_id: sorteoId
        });
        if (error) {
          return null;
        }
        return data;
      } catch (error) {
        return null;
      }
    })();
  }
  // Método específico para insertar un nuevo sorteo
  insertNewSorteo(sorteoId, numeroGanador, factorMultiplicador) {
    var _this16 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const numeroString = numeroGanador.toString().padStart(2, '0');
        const hondurasDateTime = _this16.getHondurasDateTime();
        const {
          error
        } = yield _this16.supabase.from('sorteos').insert({
          id: sorteoId,
          fecha: hondurasDateTime.toISOString(),
          sorteo: sorteoId.split('-').slice(1).join('-'),
          hora_cierre: hondurasDateTime.toISOString(),
          numero_ganador: numeroString,
          factor_multiplicador: factorMultiplicador,
          total_vendido: 0,
          total_pagado: 0,
          ganancia_neta: 0,
          cerrado: true
        });
        if (error) {
          throw error;
        }
      } catch (error) {
        throw error;
      }
    })();
  }
  updateSorteoWinner(sorteoId, numeroGanador, factorMultiplicador) {
    var _this17 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Asegurar formato de 2 dígitos si es número
        const numeroString = numeroGanador.toString().padStart(2, '0');
        // Primero intentar hacer un update simple
        const {
          data: existingData,
          error: selectError
        } = yield _this17.supabase.from('sorteos').select('id').eq('id', sorteoId).single();
        if (selectError && selectError.code !== 'PGRST116') {
          throw selectError;
        }
        let result;
        if (existingData) {
          // El sorteo existe, hacer update
          result = yield _this17.supabase.from('sorteos').update({
            numero_ganador: numeroString,
            factor_multiplicador: factorMultiplicador,
            cerrado: true
          }).eq('id', sorteoId);
        } else {
          // El sorteo no existe, hacer insert con las columnas correctas
          const hondurasDateTime = _this17.getHondurasDateTime();
          result = yield _this17.supabase.from('sorteos').insert({
            id: sorteoId,
            fecha: hondurasDateTime.toISOString(),
            sorteo: sorteoId.split('-').slice(1).join('-'),
            hora_cierre: hondurasDateTime.toISOString(),
            numero_ganador: numeroString,
            factor_multiplicador: factorMultiplicador,
            total_vendido: 0,
            total_pagado: 0,
            ganancia_neta: 0,
            cerrado: true
          });
        }
        if (result.error) {
          throw result.error;
        }
      } catch (error) {
        throw error;
      }
    })();
  }
  createSorteo(sorteoId, sorteoName, fecha) {
    var _this18 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const hondurasDateTime = _this18.getHondurasDateTime();
        const {
          error
        } = yield _this18.supabase.from('sorteos').insert({
          id: sorteoId,
          fecha: hondurasDateTime.toISOString(),
          sorteo: sorteoName,
          hora_cierre: hondurasDateTime.toISOString(),
          numero_ganador: null,
          factor_multiplicador: 70,
          total_vendido: 0,
          total_pagado: 0,
          ganancia_neta: 0,
          cerrado: false
        });
        if (error) throw error;
      } catch (error) {
        throw error;
      }
    })();
  }
  // Método alternativo para actualizar sorteo sin políticas RLS complejas
  updateSorteoWinnerDirect(sorteoId, numeroGanador, factorMultiplicador) {
    var _this19 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const numeroString = numeroGanador.toString().padStart(2, '0');
        const {
          error
        } = yield _this19.supabase.from('sorteos').update({
          numero_ganador: numeroString,
          factor_multiplicador: factorMultiplicador,
          cerrado: true
        }).eq('id', sorteoId);
        if (error) {
          throw error;
        }
      } catch (error) {
        throw error;
      }
    })();
  }
  // Método súper simple que solo hace UPDATE (último recurso)
  updateSorteoWinnerSimple(sorteoId, numeroGanador, factorMultiplicador) {
    var _this20 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const numeroString = numeroGanador.toString().padStart(2, '0');
        // Solo hacer UPDATE, sin verificaciones
        const {
          error
        } = yield _this20.supabase.from('sorteos').update({
          numero_ganador: numeroString,
          factor_multiplicador: factorMultiplicador,
          cerrado: true
        }).eq('id', sorteoId);
        if (error) {
          throw error;
        }
      } catch (error) {
        throw error;
      }
    })();
  }
  calculateSorteoWinnings(sorteoId) {
    var _this21 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Obtener el sorteo
        const {
          data: sorteo,
          error: sorteoError
        } = yield _this21.supabase.from('sorteos').select('*').eq('id', sorteoId).single();
        if (sorteoError) throw sorteoError;
        if (!sorteo.numero_ganador) return;
        // Obtener todas las ventas del sorteo
        const {
          data: sales,
          error: salesError
        } = yield _this21.supabase.from('sales').select('*, sale_details(*)').eq('sorteo', sorteo.sorteo).gte('fecha', new Date(sorteo.fecha).toISOString().split('T')[0]).lt('fecha', new Date(new Date(sorteo.fecha).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
        if (salesError) throw salesError;
        // Calcular total vendido
        let totalVendido = 0;
        let totalPagado = 0;
        for (const sale of sales) {
          for (const detail of sale.sale_details) {
            totalVendido += detail.monto;
            // Comparar números: convertir detail.numero a string para comparar con numero_ganador (text)
            if (detail.numero.toString().padStart(2, '0') === sorteo.numero_ganador) {
              totalPagado += detail.monto * sorteo.factor_multiplicador;
            }
          }
        }
        const gananciaNeta = totalVendido - totalPagado;
        // Actualizar el sorteo con los cálculos
        const {
          error: updateError
        } = yield _this21.supabase.from('sorteos').update({
          total_vendido: totalVendido,
          total_pagado: totalPagado,
          ganancia_neta: gananciaNeta
        }).eq('id', sorteoId);
        if (updateError) throw updateError;
      } catch (error) {
        throw error;
      }
    })();
  }
  // Método de debug para verificar conexión y datos
  debugSalesData() {
    var _this22 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Verificar conexión básica
        const {
          data: tablesData,
          error: tablesError
        } = yield _this22.supabase.from('sales').select('count(*)', {
          count: 'exact',
          head: true
        });
        if (tablesError) {
          return;
        }
        // Verificar ventas de hoy sin filtros
        const today = new Date();
        const startOfDay = new Date(today);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(today);
        endOfDay.setHours(23, 59, 59, 999);
        const {
          data: todayData,
          error: todayError
        } = yield _this22.supabase.from('sales').select('*').gte('fecha', startOfDay.toISOString()).lte('fecha', endOfDay.toISOString());
        if (todayError) {
          return;
        }
        if (todayData && todayData.length > 0) {}
        // Verificar ventas de los últimos 3 días
        const threeDaysAgo = new Date(today);
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        threeDaysAgo.setHours(0, 0, 0, 0);
        const {
          data: recentData,
          error: recentError
        } = yield _this22.supabase.from('sales').select('*').gte('fecha', threeDaysAgo.toISOString()).order('created_at', {
          ascending: false
        }).limit(10);
        if (recentError) {
          return;
        }
        if (recentData && recentData.length > 0) {
          recentData.forEach((sale, index) => {});
        }
      } catch (error) {}
    })();
  }
  // Método para verificar permisos y políticas RLS
  checkDatabasePermissions() {
    var _this23 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Verificar sesión actual
        const {
          data: session,
          error: sessionError
        } = yield _this23.supabase.auth.getSession();
        if (sessionError) {
          return;
        }
        // Probar consulta simple a la tabla sales
        const {
          data: simpleQuery,
          error: simpleError
        } = yield _this23.supabase.from('sales').select('id, sucursal, created_at').limit(1);
        if (simpleError) {} else {}
        // Probar inserción de test (para verificar permisos de escritura)
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
        } = yield _this23.supabase.from('sales').insert(testSale).select();
        if (insertError) {} else {
          // Eliminar el registro de prueba
          if (insertTest && insertTest.length > 0) {
            yield _this23.supabase.from('sales').delete().eq('id', insertTest[0].id);
          }
        }
      } catch (error) {}
    })();
  }
  // ========================
  // GESTIÓN DE USUARIOS
  // ========================
  getUsers() {
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Retornar usuarios por defecto simples para que funcione
        return [{
          id: '1',
          email: 'gerencia@loteria.com',
          role: 'admin',
          sucursal: '',
          active: true,
          createdAt: new Date()
        }, {
          id: '2',
          email: 'venta1@loteria.com',
          role: 'sucursal',
          sucursal: 'Sucursal 1',
          active: true,
          createdAt: new Date()
        }, {
          id: '3',
          email: 'venta2@loteria.com',
          role: 'sucursal',
          sucursal: 'Sucursal 2',
          active: true,
          createdAt: new Date()
        }, {
          id: '4',
          email: 'venta3@loteria.com',
          role: 'sucursal',
          sucursal: 'Sucursal 3',
          active: true,
          createdAt: new Date()
        }, {
          id: '5',
          email: 'venta4@loteria.com',
          role: 'sucursal',
          sucursal: 'Sucursal 4',
          active: true,
          createdAt: new Date()
        }];
      } catch (error) {
        return [];
      }
    })();
  }
  getDefaultUsers() {
    return [{
      id: '1',
      email: 'admin@loteria.com',
      role: 'admin',
      sucursal: '',
      active: true,
      createdAt: new Date()
    }, {
      id: '2',
      email: 'sucursal1@loteria.com',
      role: 'sucursal',
      sucursal: 'Sucursal 1',
      active: true,
      createdAt: new Date()
    }];
  }
  createProfilesFromAuthUsers(authUsers) {
    var _this24 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const profilesData = authUsers.map(authUser => ({
          id: authUser.id,
          email: authUser.email,
          role: authUser.email?.includes('admin') || authUser.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal',
          sucursal: _this24.getSucursalFromEmail(authUser.email || ''),
          active: true,
          created_at: new Date(authUser.created_at).toISOString()
        }));
        const {
          error
        } = yield _this24.supabase.from('profiles').upsert(profilesData, {
          onConflict: 'id'
        });
        if (error) {} else {}
      } catch (error) {}
    })();
  }
  // ========================
  // GESTIÓN DE SORTEOS
  // ========================
  getSorteoSchedules() {
    var _this25 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this25.supabase.from('sorteo_schedules').select('*').order('close_time', {
          ascending: true
        });
        if (error) {
          throw error;
        }
        return data || [];
      } catch (error) {
        throw error;
      }
    })();
  }
  createSorteoSchedule(sorteoData) {
    var _this26 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this26.supabase.from('sorteo_schedules').insert([sorteoData]).select().single();
        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        throw error;
      }
    })();
  }
  updateSorteoSchedule(sorteoId, updates) {
    var _this27 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this27.supabase.from('sorteo_schedules').update(updates).eq('id', sorteoId).select().single();
        if (error) {
          throw error;
        }
        return data;
      } catch (error) {
        throw error;
      }
    })();
  }
  deleteSorteoSchedule(sorteoId) {
    var _this28 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          error
        } = yield _this28.supabase.from('sorteo_schedules').delete().eq('id', sorteoId);
        if (error) {
          throw error;
        }
      } catch (error) {
        throw error;
      }
    })();
  }
  // ========================
  // MÉTODOS DE DEBUG Y SETUP
  // ========================
  initializeSorteoSchedules() {
    var _this29 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Crear los sorteos por defecto si no existen
        const defaultSorteos = [..._models_interfaces__WEBPACK_IMPORTED_MODULE_2__.SORTEO_SCHEDULES];
        for (const sorteo of defaultSorteos) {
          const {
            error
          } = yield _this29.supabase.from('sorteo_schedules').upsert(sorteo, {
            onConflict: 'name'
          });
          if (error) {} else {}
        }
      } catch (error) {}
    })();
  }
  // Método para inicializar la tabla de perfiles si no existe
  initializeProfilesTable() {
    var _this30 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Simplemente intentar hacer una consulta para ver si la tabla existe
        const {
          error
        } = yield _this30.supabase.from('profiles').select('count', {
          count: 'exact',
          head: true
        });
        if (error) {} else {}
      } catch (error) {}
    })();
  }
  // Método para sincronizar usuarios manualmente
  syncUsersFromAuth() {
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {} catch (error) {}
    })();
  }
  // Función para obtener la fecha/hora actual en Honduras
  getHondurasDateTime() {
    const now = new Date();
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_3__.toZonedTime)(now, this.HONDURAS_TIMEZONE);
  }
  // Función para formatear fecha/hora en formato de Honduras
  formatHondurasDateTime(date) {
    const targetDate = date || new Date();
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_3__.formatInTimeZone)(targetDate, this.HONDURAS_TIMEZONE, 'yyyy-MM-dd hh:mm:ss a', {
      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_7__.es
    });
  }
  // Función para convertir una fecha de Honduras a UTC para guardar en BD
  hondurasToUtc(date) {
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_3__.fromZonedTime)(date, this.HONDURAS_TIMEZONE);
  }
  // Función para convertir una fecha UTC de BD a hora de Honduras
  utcToHonduras(utcDate) {
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_3__.toZonedTime)(utcDate, this.HONDURAS_TIMEZONE);
  }
  // Método público para convertir cualquier fecha a hora de Honduras
  convertToHondurasTime(date) {
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_3__.toZonedTime)(date, this.HONDURAS_TIMEZONE);
  }
  // Método público para que los componentes obtengan la hora de Honduras
  getHondurasTimeNow() {
    return this.getHondurasDateTime();
  }
  // Método público para formatear fechas en hora de Honduras con formato legible
  formatDateForHonduras(date) {
    const targetDate = date || new Date();
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_3__.formatInTimeZone)(targetDate, this.HONDURAS_TIMEZONE, 'dd/MM/yyyy hh:mm:ss a', {
      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_7__.es
    });
  }
  // Método público para parsear fechas de la base de datos a hora de Honduras
  parseDateFromDatabase(isoString) {
    const utcDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.parseISO)(isoString);
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_3__.toZonedTime)(utcDate, this.HONDURAS_TIMEZONE);
  }
  // ============= MÉTODOS DE GESTIÓN DE USUARIOS =============
  // Obtener todos los usuarios del sistema desde auth.users
  getAllUsers() {
    var _this31 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Usar la API de administración para obtener usuarios de auth.users
        const {
          data,
          error
        } = yield _this31.supabase.auth.admin.listUsers();
        console.log('Usuarios obtenidos:', data);
        if (error) {
          console.error('Error obteniendo usuarios:', error);
          // Si falla, usar datos por defecto
          return _this31.getDefaultUsersForManagement();
        }
        // Mapear los usuarios de auth a nuestro formato
        return data.users.map(user => ({
          id: user.id,
          email: user.email || '',
          role: user.user_metadata?.['role'] || (user.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal'),
          sucursal: user.user_metadata?.['sucursal'] || _this31.getSucursalFromEmail(user.email || ''),
          active: user.user_metadata?.['active'] ?? !user['banned_until'],
          createdAt: new Date(user.created_at)
        }));
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        // Retornar usuarios por defecto si falla
        return _this31.getDefaultUsersForManagement();
      }
    })();
  }
  // Usuarios por defecto para gestión
  getDefaultUsersForManagement() {
    return [{
      id: 'default-admin',
      email: 'gerencia@loteria.com',
      role: 'admin',
      sucursal: '',
      active: true,
      createdAt: new Date()
    }, {
      id: 'default-venta1',
      email: 'venta1@loteria.com',
      role: 'sucursal',
      sucursal: 'Sucursal 1',
      active: true,
      createdAt: new Date()
    }, {
      id: 'default-venta2',
      email: 'venta2@loteria.com',
      role: 'sucursal',
      sucursal: 'Sucursal 2',
      active: true,
      createdAt: new Date()
    }];
  }
  // Crear un nuevo usuario en el sistema usando auth.users
  createNewUser(userData) {
    var _this32 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Creando usuario:', userData);
        // Crear usuario directamente en auth.users
        const {
          data: authData,
          error: authError
        } = yield _this32.supabase.auth.admin.createUser({
          email: userData.email,
          password: 'LoteriaTemporal123!',
          email_confirm: true,
          user_metadata: {
            role: userData.role,
            sucursal: userData.sucursal || '',
            active: userData.active !== undefined ? userData.active : true
          }
        });
        if (authError) {
          throw authError;
        }
        console.log('Usuario creado exitosamente:', authData.user.email);
        // Retornar el usuario en nuestro formato
        return {
          id: authData.user.id,
          email: authData.user.email || '',
          role: userData.role,
          sucursal: userData.sucursal || '',
          active: userData.active !== undefined ? userData.active : true,
          createdAt: new Date(authData.user.created_at)
        };
      } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
      }
    })();
  }
  // Actualizar un usuario existente usando auth.users
  updateExistingUser(userId, updates) {
    var _this33 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Actualizando usuario:', userId, updates);
        // Preparar los metadatos del usuario
        const userMetadata = {};
        if (updates.role) userMetadata['role'] = updates.role;
        if (updates.sucursal !== undefined) userMetadata['sucursal'] = updates.sucursal;
        if (updates.active !== undefined) userMetadata['active'] = updates.active;
        // Actualizar en auth.users
        const updateData = {};
        if (updates.email) updateData.email = updates.email;
        if (Object.keys(userMetadata).length > 0) updateData.user_metadata = userMetadata;
        // Si se quiere desactivar el usuario, usar ban
        if (updates.active === false) {
          updateData.ban_duration = '876000h'; // Ban muy largo para simular desactivación
        } else if (updates.active === true) {
          updateData.ban_duration = 'none'; // Remover ban
        }
        const {
          data,
          error
        } = yield _this33.supabase.auth.admin.updateUserById(userId, updateData);
        if (error) {
          throw error;
        }
        console.log('Usuario actualizado exitosamente:', data.user.email);
        // Retornar el usuario actualizado en nuestro formato
        return {
          id: data.user.id,
          email: data.user.email || '',
          role: updates.role || data.user.user_metadata?.['role'] || 'sucursal',
          sucursal: updates.sucursal || data.user.user_metadata?.['sucursal'] || '',
          active: updates.active !== undefined ? updates.active : !data.user['banned_until'],
          createdAt: new Date(data.user.created_at)
        };
      } catch (error) {
        console.error('Error al actualizar usuario:', error);
        throw error;
      }
    })();
  }
  // Eliminar un usuario usando auth.users
  deleteExistingUser(userId) {
    var _this34 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Eliminando usuario:', userId);
        const {
          error
        } = yield _this34.supabase.auth.admin.deleteUser(userId);
        if (error) {
          throw error;
        }
        console.log('Usuario eliminado exitosamente');
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
        throw error;
      }
    })();
  }
  // Alternar el estado activo/inactivo de un usuario usando auth.users
  toggleExistingUserStatus(userId) {
    var _this35 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Alternando estado del usuario:', userId);
        // Primero obtener el usuario actual de auth.users
        const {
          data: authUser,
          error: fetchError
        } = yield _this35.supabase.auth.admin.getUserById(userId);
        if (fetchError) {
          throw fetchError;
        }
        // Determinar el estado actual desde los metadatos o si está baneado
        const currentActive = authUser.user.user_metadata?.['active'] ?? !authUser.user['banned_until'];
        const newStatus = !currentActive;
        // Actualizar el estado del usuario
        const updateData = {
          user_metadata: {
            ...authUser.user.user_metadata,
            ['active']: newStatus
          }
        };
        // Si se está desactivando, ban el usuario
        if (!newStatus) {
          updateData.ban_duration = '876000h'; // Ban muy largo para simular desactivación
        } else {
          updateData.ban_duration = 'none'; // Remover ban
        }
        const {
          data,
          error
        } = yield _this35.supabase.auth.admin.updateUserById(userId, updateData);
        if (error) {
          throw error;
        }
        console.log('Estado del usuario alternado exitosamente:', newStatus ? 'Activo' : 'Inactivo');
        return {
          id: data.user.id,
          email: data.user.email || '',
          role: data.user.user_metadata?.['role'] || 'sucursal',
          sucursal: data.user.user_metadata?.['sucursal'] || '',
          active: newStatus,
          createdAt: new Date(data.user.created_at)
        };
      } catch (error) {
        console.error('Error al alternar estado del usuario:', error);
        throw error;
      }
    })();
  }
  // Actualizar contraseña de un usuario usando auth.users
  updateUserPassword(userId, newPassword) {
    var _this36 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Actualizando contraseña del usuario:', userId);
        const {
          error
        } = yield _this36.supabase.auth.admin.updateUserById(userId, {
          password: newPassword
        });
        if (error) {
          throw error;
        }
        console.log('Contraseña actualizada exitosamente');
      } catch (error) {
        console.error('Error al actualizar contraseña:', error);
        throw error;
      }
    })();
  }
  // Enviar email de restablecimiento de contraseña
  sendPasswordReset(email) {
    var _this37 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          error
        } = yield _this37.supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`
        });
        if (error) {
          throw error;
        }
      } catch (error) {
        throw error;
      }
    })();
  }
  // ========================
  // GESTIÓN DE SORTEOS POR SUCURSAL
  // ========================
  // Obtener usuarios activos agrupados por sucursal
  getActiveUsersBySucursal() {
    var _this38 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Intentar usar la función SQL primero
        const {
          data,
          error
        } = yield _this38.supabase.rpc('get_active_users_by_sucursal');
        if (error) {
          console.warn('Función get_active_users_by_sucursal falló, intentando consulta directa:', error);
          // Fallback: consulta directa a auth.users
          const {
            data: usersData,
            error: usersError
          } = yield _this38.supabase.auth.admin.listUsers();
          if (usersError) {
            throw usersError;
          }
          // Procesar usuarios y agrupar por sucursal
          const sucursalesMap = new Map();
          for (const user of usersData.users) {
            if (user.email === 'gerencia@loteria.com' || !user.email_confirmed_at || !user.email) {
              continue;
            }
            let sucursal = 'Principal';
            if (user.user_metadata && user.user_metadata['sucursal']) {
              sucursal = user.user_metadata['sucursal'];
            } else if (user.email.includes('venta1')) {
              sucursal = 'Sucursal 1';
            } else if (user.email.includes('venta2')) {
              sucursal = 'Sucursal 2';
            } else if (user.email.includes('venta3')) {
              sucursal = 'Sucursal 3';
            } else if (user.email.includes('venta4')) {
              sucursal = 'Sucursal 4';
            }
            if (!sucursalesMap.has(sucursal)) {
              sucursalesMap.set(sucursal, {
                sucursal,
                factor: 75,
                usuario: user.id,
                email: user.email || ''
              });
            }
          }
          return Array.from(sucursalesMap.values());
        }
        return (data || []).map(user => ({
          sucursal: user.sucursal,
          factor: user.factor_default,
          usuario: user.user_id,
          email: user.email
        }));
      } catch (error) {
        console.error('Error al obtener usuarios por sucursal:', error);
        // Fallback final con datos por defecto
        return [{
          sucursal: 'Sucursal 1',
          factor: 75,
          usuario: '',
          email: 'venta1@loteria.com'
        }, {
          sucursal: 'Sucursal 2',
          factor: 75,
          usuario: '',
          email: 'venta2@loteria.com'
        }, {
          sucursal: 'Sucursal 3',
          factor: 75,
          usuario: '',
          email: 'venta3@loteria.com'
        }, {
          sucursal: 'Sucursal 4',
          factor: 75,
          usuario: '',
          email: 'venta4@loteria.com'
        }, {
          sucursal: 'Principal',
          factor: 75,
          usuario: '',
          email: 'principal@loteria.com'
        }];
      }
    })();
  }
  // Crear sorteos por sucursal con factores específicos
  crearSorteosPorSucursal(sorteoId, numeroGanador, factoresPorSucursal) {
    var _this39 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const numeroString = numeroGanador.toString().padStart(2, '0');
        const {
          data,
          error
        } = yield _this39.supabase.rpc('crear_sorteos_por_sucursal', {
          p_sorteo_id: sorteoId,
          p_numero_ganador: numeroString,
          p_factores_json: factoresPorSucursal
        });
        if (error) {
          throw error;
        }
        console.log('Sorteos creados por sucursal exitosamente');
      } catch (error) {
        console.error('Error al crear sorteos por sucursal:', error);
        throw error;
      }
    })();
  }
  // Calcular totales de sorteo por sucursal
  calcularTotalesSorteoPorSucursal(sorteoId) {
    var _this40 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this40.supabase.rpc('calcular_totales_sorteo_por_sucursal', {
          p_sorteo_id: sorteoId
        });
        if (error) {
          throw error;
        }
        console.log('Totales calculados por sucursal exitosamente');
      } catch (error) {
        console.error('Error al calcular totales por sucursal:', error);
        throw error;
      }
    })();
  }
  // Obtener sorteos por sucursal para una fecha y tipo específicos
  getSorteosPorSucursal(fecha, sorteo) {
    var _this41 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const fechaStr = fecha.toISOString().split('T')[0];
        const sorteoId = `${fechaStr}-${sorteo}`;
        const {
          data,
          error
        } = yield _this41.supabase.from('sorteos').select('*').eq('id', sorteoId).order('sucursal');
        if (error) {
          throw error;
        }
        return (data || []).map(item => ({
          id: item.id,
          fecha: new Date(item.fecha),
          sorteo: item.sorteo,
          horaCierre: new Date(item.hora_cierre),
          numeroGanador: item.numero_ganador || '',
          factorMultiplicador: item.factor_multiplicador,
          totalVendido: item.total_vendido,
          totalPagado: item.total_pagado,
          gananciaNeta: item.ganancia_neta,
          cerrado: item.cerrado,
          sucursal: item.sucursal
        }));
      } catch (error) {
        console.error('Error al obtener sorteos por sucursal:', error);
        return [];
      }
    })();
  }
  // Obtener resumen consolidado de un sorteo (todas las sucursales)
  getResumenConsolidadoSorteo(fecha, sorteo) {
    var _this42 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const sorteosPorSucursal = yield _this42.getSorteosPorSucursal(fecha, sorteo);
        if (sorteosPorSucursal.length === 0) {
          return {
            numeroGanador: '',
            totalVendido: 0,
            totalPagado: 0,
            gananciaNeta: 0,
            cerrado: false,
            detallesPorSucursal: []
          };
        }
        const resumen = {
          numeroGanador: sorteosPorSucursal[0].numeroGanador || '',
          totalVendido: sorteosPorSucursal.reduce((sum, s) => sum + s.totalVendido, 0),
          totalPagado: sorteosPorSucursal.reduce((sum, s) => sum + s.totalPagado, 0),
          gananciaNeta: sorteosPorSucursal.reduce((sum, s) => sum + s.gananciaNeta, 0),
          cerrado: sorteosPorSucursal.every(s => s.cerrado),
          detallesPorSucursal: sorteosPorSucursal.map(s => ({
            sucursal: s.sucursal,
            factor: s.factorMultiplicador,
            vendido: s.totalVendido,
            pagado: s.totalPagado,
            ganancia: s.gananciaNeta
          }))
        };
        return resumen;
      } catch (error) {
        console.error('Error al obtener resumen consolidado:', error);
        return {
          numeroGanador: '',
          totalVendido: 0,
          totalPagado: 0,
          gananciaNeta: 0,
          cerrado: false,
          detallesPorSucursal: []
        };
      }
    })();
  }
  /**
   * Obtener ventas agrupadas por número para un sorteo específico en una fecha
   */
  getVentasPorNumero(sorteoName, fecha) {
    var _this43 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data: ventas,
          error
        } = yield _this43.supabase.from('sales').select(`
          details:sale_details(numero, monto)
        `).eq('sorteo', sorteoName).gte('created_at', `${fecha}T00:00:00`).lt('created_at', `${fecha}T23:59:59`);
        if (error) {
          console.error('Error al obtener ventas por número:', error);
          return {};
        }
        const ventasPorNumero = {};
        // Procesar todas las ventas y detalles
        ventas?.forEach(venta => {
          venta.details?.forEach(detalle => {
            const numero = detalle.numero.toString().padStart(2, '0');
            const monto = detalle.monto || 0;
            if (!ventasPorNumero[numero]) {
              ventasPorNumero[numero] = 0;
            }
            ventasPorNumero[numero] += monto;
          });
        });
        return ventasPorNumero;
      } catch (error) {
        console.error('Error en getVentasPorNumero:', error);
        return {};
      }
    })();
  }
  /**
   * Notificar actualización de resúmenes
   */
  notifyResumenUpdate() {
    this.resumenUpdateSubject.next();
  }
  static {
    this.ɵfac = function SupabaseService_Factory(t) {
      return new (t || SupabaseService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
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
    // ⚠️ CAMBIAR ESTA KEY POR TU SERVICE_ROLE KEY
    // Ve a Supabase Dashboard → Settings → API → service_role key
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94dWhjb3VicnB1cGptanZ5emJ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjcxNzU0MiwiZXhwIjoyMDY4MjkzNTQyfQ.xAawEVJAtjAvxAo1iUeWw2w33IvismG_k92spFgEyYI' // Reemplaza con tu service_role key real
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


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map