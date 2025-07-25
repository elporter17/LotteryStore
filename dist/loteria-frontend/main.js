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
/* harmony import */ var _models_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/interfaces */ 4597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_supabase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/supabase.service */ 9692);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notification.service */ 7473);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/print.service */ 4389);
/* harmony import */ var _services_export_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/export.service */ 8892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _resumen_sorteos_resumen_sorteos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resumen-sorteos/resumen-sorteos.component */ 2081);











function AdminComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdminComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdminComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdminComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sorteo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", sorteo_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sorteo_r2.label);
  }
}
function AdminComponent_i_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 101);
  }
}
function AdminComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 103);
  }
}
function AdminComponent_i_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 101);
  }
}
function AdminComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 104);
  }
}
function AdminComponent_i_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 101);
  }
}
function AdminComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 105);
  }
}
function AdminComponent_i_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 101);
  }
}
function AdminComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 106);
  }
}
function AdminComponent_div_94_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 120)(1, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sucursal_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sucursal_r3.sucursal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", sucursal_r3.factor_multiplicador, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", (sucursal_r3.cantidad_numero_ganador || 0).toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ((sucursal_r3.cantidad_numero_ganador || 0) * (sucursal_r3.factor_multiplicador || 1)).toFixed(2), "");
  }
}
function AdminComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 107)(1, "div", 53)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Informaci\u00F3n del N\u00FAmero Ganador");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Detalle de pagos por sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 108)(8, "div", 109)(9, "div", 110)(10, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "N\u00FAmero Ganador");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 113)(15, "div", 114)(16, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Total Comprado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 114)(21, "span", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Total a Pagar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 117)(26, "div", 118)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Factor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, AdminComponent_div_94_div_35_Template, 9, 4, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r3.resumenSucursales[0] == null ? null : ctx_r3.resumenSucursales[0].numero_ganador) || "00");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx_r3.getTotalCantidadNumeroGanador().toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx_r3.getTotalPagadoGeneral(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.resumenSucursales);
  }
}
function AdminComponent_div_102_div_1_div_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 142)(1, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const numero_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](numero_r5.numero.toString().padStart(2, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", numero_r5.totalVendido.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("#", i_r6 + 1, "");
  }
}
function AdminComponent_div_102_div_1_div_7_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 146)(1, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const num_r7 = ctx.$implicit;
    const sucursalGroup_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r3.getNumeroIntensity(sucursalGroup_r8, num_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "N\u00FAmero " + num_r7.toString().padStart(2, "0") + ": L " + ctx_r3.getNumeroVenta(sucursalGroup_r8, num_r7).toFixed(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](num_r7.toString().padStart(2, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx_r3.getNumeroVenta(sucursalGroup_r8, num_r7).toFixed(2), "");
  }
}
function AdminComponent_div_102_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 132)(1, "div", 133)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 135)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Top 5 N\u00FAmeros M\u00E1s Vendidos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AdminComponent_div_102_div_1_div_7_div_11_Template, 7, 3, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 138)(13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "i", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, " Tablero Completo (00-99) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, AdminComponent_div_102_div_1_div_7_div_17_Template, 5, 5, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sucursalGroup_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sucursalGroup_r8.sucursal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx_r3.getSucursalTotal(sucursalGroup_r8).toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", sucursalGroup_r8.numeros.slice(0, 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.getAllNumbers());
  }
}
function AdminComponent_div_102_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 127)(1, "div", 128)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AdminComponent_div_102_div_1_div_7_Template, 18, 4, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sorteoGroup_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sorteoGroup_r9.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Total: L ", ctx_r3.getSorteoTotal(sorteoGroup_r9).toFixed(2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", sorteoGroup_r9.sucursales);
  }
}
function AdminComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AdminComponent_div_102_div_1_Template, 8, 3, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.getNumbersSummaryBySorteoAndSucursal());
  }
}
function AdminComponent_ng_template_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "No hay ventas por n\u00FAmeros para mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Las estad\u00EDsticas aparecer\u00E1n cuando haya ventas registradas");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_111_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 156)(2, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_12_0;
    const sorteo_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](((tmp_11_0 = ctx_r3.getSorteoData(sorteo_r10)) == null ? null : tmp_11_0.numeroGanador) || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Factor: ", ((tmp_12_0 = ctx_r3.getSorteoData(sorteo_r10)) == null ? null : tmp_12_0.factorMultiplicador) || 70, "");
  }
}
function AdminComponent_div_111_ng_template_11_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Cargando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_111_ng_template_11_div_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Configurar Factores");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AdminComponent_div_111_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 161)(1, "div", 70)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "N\u00FAmero Ganador:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_111_ng_template_11_div_0_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const sorteo_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r3.winningNumbers[sorteo_r10.name], $event) || (ctx_r3.winningNumbers[sorteo_r10.name] = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_div_111_ng_template_11_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const sorteo_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFactorsModal(sorteo_r10.name, +ctx_r3.winningNumbers[sorteo_r10.name]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AdminComponent_div_111_ng_template_11_div_0_span_7_Template, 2, 0, "span", 164)(8, AdminComponent_div_111_ng_template_11_div_0_span_8_Template, 2, 0, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sorteo_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.winningNumbers[sorteo_r10.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r3.winningNumbers[sorteo_r10.name] || ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
  }
}
function AdminComponent_div_111_ng_template_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Sorteo abierto - Esperando cierre");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_111_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AdminComponent_div_111_ng_template_11_div_0_Template, 9, 5, "div", 159)(1, AdminComponent_div_111_ng_template_11_div_1_Template, 4, 0, "div", 160);
  }
  if (rf & 2) {
    const sorteo_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.isSorteoOpen(sorteo_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isSorteoOpen(sorteo_r10));
  }
}
function AdminComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 149)(1, "div", 150)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 151)(5, "span", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, AdminComponent_div_111_div_10_Template, 8, 2, "div", 155)(11, AdminComponent_div_111_ng_template_11_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sorteo_r10 = ctx.$implicit;
    const setWinner_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sorteo_r10.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("open", ctx_r3.isSorteoOpen(sorteo_r10))("closed", !ctx_r3.isSorteoOpen(sorteo_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.isSorteoOpen(sorteo_r10) ? "Abierto" : "Cerrado", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sorteo_r10.closeTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.hasSavedWinner(sorteo_r10))("ngIfElse", setWinner_r12);
  }
}
function AdminComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 70)(1, "label", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Contrase\u00F1a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_134_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r3.userFormData.password, $event) || (ctx_r3.userFormData.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.userFormData.password);
  }
}
function AdminComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 70)(1, "label", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Sucursal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_div_143_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r3.userFormData.sucursal, $event) || (ctx_r3.userFormData.sucursal = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.userFormData.sucursal);
  }
}
function AdminComponent_div_193_div_32_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 185)(1, "div", 186)(2, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const detail_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](detail_r15.numero.toString().padStart(2, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", detail_r15.monto.toFixed(2), "");
  }
}
function AdminComponent_div_193_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 179)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " N\u00FAmeros Jugados");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AdminComponent_div_193_div_32_div_5_Template, 6, 2, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 183)(7, "div", 184)(8, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Cantidad de n\u00FAmeros:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 184)(13, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Total apostado:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.selectedSaleDetails)("ngForTrackBy", ctx_r3.trackBySaleDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.selectedSaleDetails.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx_r3.getTotalNumeros().toFixed(2), "");
  }
}
function AdminComponent_div_193_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "No se encontraron n\u00FAmeros para esta venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_193_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 69)(1, "div", 171)(2, "div", 172)(3, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Recibo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 172)(8, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Correlativo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 172)(13, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Fecha:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 172)(18, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Sucursal:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 172)(23, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Sorteo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 176)(28, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, AdminComponent_div_193_div_32_Template, 17, 4, "div", 177)(33, AdminComponent_div_193_div_33_Template, 4, 0, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.selectedSaleForDetail.numeroRecibo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.selectedSaleForDetail.correlativo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.formatDateTime(ctx_r3.selectedSaleForDetail.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.selectedSaleForDetail.sucursal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.selectedSaleForDetail.sorteo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx_r3.selectedSaleForDetail.total.toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.selectedSaleDetails.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.selectedSaleDetails.length === 0);
  }
}
function AdminComponent_div_201_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 205)(1, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.currentSorteoForFactors.sorteo.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("N\u00FAmero Ganador: ", ctx_r3.currentSorteoForFactors.winningNumber.padStart(2, "0"), "");
  }
}
function AdminComponent_div_201_div_14_div_1_div_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r18 = ctx.$implicit;
    const last_r19 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", user_r18.email, "", !last_r19 ? ", " : "", " ");
  }
}
function AdminComponent_div_201_div_14_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 218)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Usuarios: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AdminComponent_div_201_div_14_div_1_div_5_span_3_Template, 2, 2, "span", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sucursal_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.getUsersBySucursal(sucursal_r20));
  }
}
function AdminComponent_div_201_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 210)(1, "div", 211)(2, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AdminComponent_div_201_div_14_div_1_div_5_Template, 4, 1, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 214)(7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Factor (ej: 70)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 215)(10, "input", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function AdminComponent_div_201_div_14_div_1_Template_input_input_10_listener($event) {
      const sucursal_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.updateFactorForSucursal(sucursal_r20, $event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const sucursal_r20 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", sucursal_r20, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.hasSucursalUsers(sucursal_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.factoresPorSucursal[sucursal_r20] || 75);
  }
}
function AdminComponent_div_201_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AdminComponent_div_201_div_14_div_1_Template, 13, 3, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.getUniqueSucursales());
  }
}
function AdminComponent_div_201_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Cargando configuraci\u00F3n de sucursales...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_201_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "No se encontraron sucursales activas");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function AdminComponent_div_201_i_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 101);
  }
}
function AdminComponent_div_201_i_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 26);
  }
}
function AdminComponent_div_201_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_div_201_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.closeFactorsModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_div_201_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 64)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Configurar Factores por Sucursal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AdminComponent_div_201_div_6_Template, 5, 2, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_div_201_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.closeFactorsModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 69)(10, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Configure el factor multiplicador para cada sucursal. Este factor determinar\u00E1 cu\u00E1nto se paga por cada n\u00FAmero ganador.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AdminComponent_div_201_div_14_Template, 2, 1, "div", 198)(15, AdminComponent_div_201_div_15_Template, 4, 0, "div", 199)(16, AdminComponent_div_201_div_16_Template, 4, 0, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 83)(18, "button", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_div_201_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.closeFactorsModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_div_201_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.confirmWinningNumberWithFactors());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, AdminComponent_div_201_i_22_Template, 1, 0, "i", 203)(23, AdminComponent_div_201_i_23_Template, 1, 0, "i", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.currentSorteoForFactors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.sucursalesFactores.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isLoading && ctx_r3.sucursalesFactores.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading && ctx_r3.sucursalesFactores.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.isLoading ? "Estableciendo..." : "Establecer Ganador", " ");
  }
}
function AdminComponent_div_202_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 235)(1, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 227)(6, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "small", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const sucursal_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](sucursal_r22.sucursal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", sucursal_r22.factor_multiplicador, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", (sucursal_r22.cantidad_numero_ganador || 0).toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("x", sucursal_r22.factor_multiplicador, " = L ", ((sucursal_r22.cantidad_numero_ganador || 0) * (sucursal_r22.factor_multiplicador || 1)).toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", (sucursal_r22.total_vendido == null ? null : sucursal_r22.total_vendido.toFixed(2)) || "0.00", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", (sucursal_r22.total_pagado == null ? null : sucursal_r22.total_pagado.toFixed(2)) || "0.00", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("positive", (sucursal_r22.ganancia_neta || 0) > 0)("negative", (sucursal_r22.ganancia_neta || 0) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" L ", (sucursal_r22.ganancia_neta == null ? null : sucursal_r22.ganancia_neta.toFixed(2)) || "0.00", " ");
  }
}
function AdminComponent_div_202_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_div_202_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.closeResumenModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_div_202_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 64)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Resumen de Cierre por Sucursales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_div_202_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.closeResumenModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 69)(9, "div", 205)(10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 223)(13, "div", 224)(14, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Sucursal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Factor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Total Vendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Total Pagado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Ganancia Neta");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, AdminComponent_div_202_div_26_Template, 16, 12, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 232)(28, "div", 225)(29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "TOTAL GENERAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 227)(34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 228)(37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 229)(40, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 230)(43, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 83)(46, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_div_202_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r21);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.closeResumenModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "i", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " Entendido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.currentSorteoForResumen);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Cantidad #", (ctx_r3.resumenSucursales[0] == null ? null : ctx_r3.resumenSucursales[0].numero_ganador) || "00", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.resumenSucursales);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx_r3.getTotalCantidadNumeroGanador().toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx_r3.getTotalVendidoGeneral(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx_r3.getTotalPagadoGeneral(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("positive", ctx_r3.getGananciaTotalGeneral() > 0)("negative", ctx_r3.getGananciaTotalGeneral() < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx_r3.getGananciaTotalGeneral().toFixed(2), "");
  }
}
class AdminComponent {
  constructor(supabaseService, notificationService, printService, exportService, router, cdr) {
    this.supabaseService = supabaseService;
    this.notificationService = notificationService;
    this.printService = printService;
    this.exportService = exportService;
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
    // Propiedades optimizadas para caché de datos
    this.cachedDashboardData = null;
    this.cachedNumbersData = null;
    this.lastDataFetch = null;
    this.cacheValidTime = 30000; // 30 segundos de caché
    // Propiedades para resumen de cierre por sucursales
    this.showResumenModal = false;
    this.resumenSucursales = [];
    this.currentSorteoForResumen = '';
    // Inicializar fechas usando timezone de Honduras para filtros
    const hondurasToday = this.supabaseService.getHondurasDateTime();
    this.selectedDate = this.supabaseService.formatDateTimeLocalHonduras(hondurasToday).split('T')[0];
    // FORZAR CIERRE DE TODOS LOS MODALES AL INICIALIZAR
    this.showSaleDetailModal = false;
    this.showUserModal = false;
    this.showPasswordModal = false;
    this.showFactorsModal = false;
    this.showResumenModal = false;
    // Recuperar filtros de localStorage o usar valores por defecto
    this.loadFilterState();
    // Si no hay filtros guardados, usar fecha de Honduras para inicializar
    if (!this.fechaDesde || !this.fechaHasta) {
      const fechaInicio = this.supabaseService.getStartOfDayHonduras(hondurasToday);
      const fechaFin = this.supabaseService.getEndOfDayHonduras(hondurasToday);
      this.fechaDesde = this.supabaseService.formatDateTimeLocalHonduras(fechaInicio);
      this.fechaHasta = this.supabaseService.formatDateTimeLocalHonduras(fechaFin);
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
    const todayString = this.supabaseService.formatDateOnlyForSupabase(hondurasToday);
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
        const todayString = _this3.supabaseService.formatDateOnlyForSupabase(hondurasToday);
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
        // Limpiar caché cuando se cargan nuevos datos
        _this4.clearCache();
        // Si hay filtros de rango de fechas, usar el método de rango optimizado
        if (_this4.fechaDesde && _this4.fechaHasta) {
          yield _this4.loadSalesByDateRangeOptimized();
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
        console.log('Cargando ventas optimizadas para fecha:', fechaParaConsulta);
        // Usar método optimizado para una sola fecha
        const optimizedData = yield _this4.supabaseService.getDailyOptimizedData(fechaParaConsulta, _this4.selectedSorteoFilter);
        // Asignar datos
        _this4.sales = optimizedData.sales;
        _this4.saleDetails = optimizedData.saleDetails;
        _this4.cachedDashboardData = optimizedData.dashboardData;
        _this4.lastDataFetch = new Date();
        console.log('Datos optimizados cargados:', {
          ventas: _this4.sales.length,
          totalVendido: optimizedData.dashboardData.totalVendido
        });
        // Forzar detección de cambios
        _this4.cdr.detectChanges();
      } catch (error) {
        console.error('Error al cargar ventas optimizadas:', error);
        _this4.sales = [];
        _this4.saleDetails = {};
        _this4.clearCache();
        _this4.notificationService.showError('Error al cargar las ventas');
      } finally {
        // Solo cambiar isLoading si no estamos en modo filtros
        if (!_this4.isLoadingFilters) {
          _this4.isLoading = false;
        }
      }
    })();
  }
  // Método optimizado para rangos de fechas
  loadSalesByDateRangeOptimized() {
    var _this5 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.fechaDesde || !_this5.fechaHasta) {
        yield _this5.loadSingleDateSales();
        return;
      }
      try {
        console.log('Cargando rango de fechas optimizado:', _this5.fechaDesde, 'hasta', _this5.fechaHasta);
        // Convertir strings de datetime-local a fechas
        const fechaDesdeUtc = _this5.supabaseService.parseLocalDateTimeToUtc(_this5.fechaDesde);
        const fechaHastaUtc = _this5.supabaseService.parseLocalDateTimeToUtc(_this5.fechaHasta);
        // Validar fechas
        if (fechaDesdeUtc > fechaHastaUtc) {
          _this5.notificationService.showError('La fecha desde no puede ser mayor que la fecha hasta');
          _this5.sales = [];
          _this5.saleDetails = {};
          return;
        }
        // Usar método optimizado del servicio
        const optimizedData = yield _this5.supabaseService.getSalesWithDetailsOptimized(fechaDesdeUtc, fechaHastaUtc, _this5.selectedSorteoFilter);
        // Asignar datos
        _this5.sales = optimizedData.sales;
        _this5.saleDetails = optimizedData.saleDetails;
        // Obtener datos del dashboard para el rango
        const dashboardData = yield _this5.supabaseService.getAdminDashboardData(fechaDesdeUtc, fechaHastaUtc, _this5.selectedSorteoFilter);
        _this5.cachedDashboardData = dashboardData;
        _this5.cachedNumbersData = dashboardData.numerosPorSorteo;
        _this5.lastDataFetch = new Date();
        console.log('Datos de rango optimizados cargados:', {
          ventas: _this5.sales.length,
          totalVendido: dashboardData.totalVendido
        });
        // Forzar detección de cambios
        _this5.cdr.detectChanges();
      } catch (error) {
        console.error('Error al cargar rango optimizado:', error);
        _this5.notificationService.showError('Error al cargar las ventas: ' + error);
        _this5.sales = [];
        _this5.saleDetails = {};
        _this5.clearCache();
      }
    })();
  }
  // Método para limpiar caché
  clearCache() {
    this.cachedDashboardData = null;
    this.cachedNumbersData = null;
    this.lastDataFetch = null;
  }
  // Verificar si el caché es válido
  isCacheValid() {
    if (!this.lastDataFetch || !this.cachedDashboardData) {
      return false;
    }
    return new Date().getTime() - this.lastDataFetch.getTime() < this.cacheValidTime;
  }
  getSaleDetails(saleId) {
    return this.saleDetails[saleId] || [];
  }
  setWinningNumber(sorteo) {
    var _this6 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const winningNumber = _this6.winningNumbers[sorteo.name];
      if (!winningNumber) {
        _this6.notificationService.showError('Por favor ingrese un número ganador');
        return;
      }
      // Verificar autenticación
      if (!_this6.currentUser) {
        _this6.notificationService.showError('Usuario no autenticado. Por favor inicie sesión nuevamente.');
        _this6.router.navigate(['/login']);
        return;
      }
      // Abrir modal para configurar factores por sucursal
      yield _this6.openFactorsModal(sorteo, winningNumber);
    })();
  }
  calculateSorteoResults(_x, _x2) {
    var _this7 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (sorteo, winningNumber, multiplicador = 70) {
      const hondurasToday = _this7.supabaseService.getHondurasDateTime();
      const sorteoSales = yield _this7.supabaseService.getSalesByDateAndSorteo(hondurasToday, sorteo.name);
      let totalVendido = 0;
      let totalPagado = 0;
      for (const sale of sorteoSales) {
        totalVendido += sale.total;
        const details = yield _this7.supabaseService.getSaleDetails(sale.id);
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
      yield _this7.supabaseService.createOrUpdateSorteo({
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
    var _this8 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const hondurasToday = _this8.supabaseService.getHondurasDateTime();
        // Limpiar datos actuales
        _this8.sorteosData = {};
        // Cargar datos de sorteos para cada tipo
        for (const sorteo of _this8.sorteos) {
          try {
            const sorteoId = `${_this8.supabaseService.formatDateOnlyForSupabase(hondurasToday)}-${sorteo.name}`;
            const sorteoData = yield _this8.supabaseService.getSorteoById(sorteoId);
            if (sorteoData) {
              _this8.sorteosData[sorteoId] = sorteoData; // Usar sorteoId como clave
              // Sincronizar con variables locales
              _this8.winningNumbers[sorteo.name] = sorteoData.numeroGanador || '';
              _this8.factorMultiplicador[sorteo.name] = sorteoData.factorMultiplicador || 70;
            }
          } catch (error) {
            // Si es error 406 o RLS, intentar método alternativo
            if (error?.status === 406 || error?.code === '42501') {
              // Aquí podrías implementar un método alternativo si tienes uno
            }
          }
        }
        // Forzar actualización de la UI
        _this8.cdr.detectChanges();
      } catch (error) {}
    })();
  }
  // Método para actualizar la UI específicamente después de establecer ganador
  updateSorteoUI(sorteoName, winningNumber, multiplicador) {
    var _this9 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const hondurasToday = _this9.supabaseService.getHondurasDateTime();
        const sorteoId = `${_this9.supabaseService.formatDateOnlyForSupabase(hondurasToday)}-${sorteoName}`;
        // Actualizar datos locales inmediatamente
        _this9.winningNumbers[sorteoName] = winningNumber;
        _this9.factorMultiplicador[sorteoName] = multiplicador;
        // Intentar cargar datos actualizados desde la base de datos
        yield _this9.loadSorteoById(sorteoId);
        // Si el sorteo aún no aparece en sorteosData, crear un objeto temporal
        if (!_this9.sorteosData[sorteoId]) {
          _this9.sorteosData[sorteoId] = {
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
        _this9.cdr.detectChanges();
        // Después de un breve delay, intentar refrescar nuevamente para asegurar datos actualizados
        setTimeout(/*#__PURE__*/(0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this9.loadSorteoById(sorteoId);
        }), 2000);
      } catch (error) {
        // En caso de error, asegurar que los datos locales estén actualizados
        _this9.winningNumbers[sorteoName] = winningNumber;
        _this9.factorMultiplicador[sorteoName] = multiplicador;
        _this9.cdr.detectChanges();
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
    // Usar caché si está disponible y válido
    if (this.isCacheValid() && this.cachedDashboardData) {
      return this.cachedDashboardData.totalVendido;
    }
    // Fallback al cálculo tradicional si no hay caché
    return this.sales.reduce((total, sale) => total + sale.total, 0);
  }
  getTotalPagado() {
    // Usar caché si está disponible y válido
    if (this.isCacheValid() && this.cachedDashboardData) {
      return this.cachedDashboardData.totalPagado;
    }
    // Fallback al cálculo tradicional si no hay caché
    let totalPagado = 0;
    // Calcular total pagado basándose en sorteos cerrados y números ganadores
    for (const sale of this.sales) {
      const sorteoSchedule = this.sorteos.find(s => s.name === sale.sorteo);
      if (sorteoSchedule) {
        const sorteoData = this.getSorteoData(sorteoSchedule);
        if (sorteoData && sorteoData.cerrado && sorteoData.numeroGanador) {
          const saleDetails = this.getSaleDetails(sale.id);
          for (const detail of saleDetails) {
            if (detail.numero.toString() === sorteoData.numeroGanador.toString()) {
              const factor = sorteoData.factorMultiplicador || 70;
              totalPagado += detail.monto * factor;
            }
          }
        }
      }
    }
    return totalPagado;
  }
  getGananciaNeta() {
    return this.getTotalVendido() - this.getTotalPagado();
  }
  getTotalVentas() {
    return this.sales.length;
  }
  // Métodos para filtros de fecha
  aplicarFiltros() {
    var _this0 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this0.isLoadingFilters = true;
        // Validar que las fechas sean válidas
        if (_this0.fechaDesde && _this0.fechaHasta) {
          const fechaDesde = new Date(_this0.fechaDesde);
          const fechaHasta = new Date(_this0.fechaHasta);
          if (fechaDesde > fechaHasta) {
            _this0.notificationService.showError('La fecha desde no puede ser mayor que la fecha hasta');
            _this0.isLoadingFilters = false;
            return;
          }
        }
        // Guardar estado de filtros
        _this0.saveFilterState();
        // Recargar ventas
        yield _this0.loadSales();
      } catch (error) {
        _this0.notificationService.showError('Error al aplicar filtros');
      } finally {
        // Asegurar que el loading se quite con un pequeño delay
        setTimeout(() => {
          _this0.isLoadingFilters = false;
          _this0.cdr.detectChanges();
        }, 100);
      }
    })();
  }
  limpiarFiltros() {
    var _this1 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this1.isLoadingFilters = true;
        const hondurasToday = _this1.supabaseService.getHondurasDateTime();
        // Reinicializar fechas usando zona horaria de Honduras
        const fechaInicio = _this1.supabaseService.getStartOfDayHonduras(hondurasToday);
        const fechaFin = _this1.supabaseService.getEndOfDayHonduras(hondurasToday);
        _this1.fechaDesde = _this1.supabaseService.formatDateTimeLocalHonduras(fechaInicio);
        _this1.fechaHasta = _this1.supabaseService.formatDateTimeLocalHonduras(fechaFin);
        _this1.selectedDate = _this1.supabaseService.formatDateTimeLocalHonduras(hondurasToday).split('T')[0];
        _this1.selectedSorteoFilter = '';
        // Guardar estado limpio
        _this1.saveFilterState();
        yield _this1.loadSales();
      } catch (error) {
        _this1.notificationService.showError('Error al limpiar filtros');
      } finally {
        // Asegurar que el loading se quite con un pequeño delay
        setTimeout(() => {
          _this1.isLoadingFilters = false;
          _this1.cdr.detectChanges();
        }, 100);
      }
    })();
  }
  onFiltroFechaChange() {
    var _this10 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Auto-aplicar filtros cuando cambian las fechas
      yield _this10.aplicarFiltros();
    })();
  }
  onDateChange() {
    var _this11 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this11.isLoadingFilters = true;
        // Guardar cambio de fecha y recargar
        _this11.saveFilterState();
        yield _this11.loadSales();
      } catch (error) {
        _this11.notificationService.showError('Error al cambiar la fecha');
      } finally {
        _this11.isLoadingFilters = false;
      }
    })();
  }
  onSorteoFilterChange() {
    var _this12 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this12.isLoadingFilters = true;
        // Guardar cambio de sorteo y recargar
        _this12.saveFilterState();
        yield _this12.loadSales();
      } catch (error) {
        _this12.notificationService.showError('Error al cambiar el filtro de sorteo');
      } finally {
        _this12.isLoadingFilters = false;
      }
    })();
  }
  // Método específico para cuando cambia fechaDesde
  onFechaDesdeChange() {
    var _this13 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this13.aplicarFiltros();
    })();
  }
  // Método específico para cuando cambia fechaHasta
  onFechaHastaChange() {
    var _this14 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this14.aplicarFiltros();
    })();
  }
  loadSalesByDateRange() {
    var _this15 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this15.fechaDesde || !_this15.fechaHasta) {
        yield _this15.loadSingleDateSales();
        return;
      }
      // No cambiar isLoading aquí si ya estamos en modo filtros
      if (!_this15.isLoadingFilters) {
        _this15.isLoading = true;
      }
      try {
        // Convertir strings de datetime-local a fechas UTC para la base de datos
        const fechaDesdeUtc = _this15.supabaseService.parseLocalDateTimeToUtc(_this15.fechaDesde);
        const fechaHastaUtc = _this15.supabaseService.parseLocalDateTimeToUtc(_this15.fechaHasta);
        // Validar que la fecha desde no sea mayor que la fecha hasta
        if (fechaDesdeUtc > fechaHastaUtc) {
          _this15.notificationService.showError('La fecha desde no puede ser mayor que la fecha hasta');
          _this15.sales = [];
          return;
        }
        // Cargar ventas para cada día en el rango usando fechas en Honduras
        let allSales = [];
        let currentDate = new Date(fechaDesdeUtc);
        let daysProcessed = 0;
        const maxDays = 31; // Límite de seguridad
        while (currentDate <= fechaHastaUtc && daysProcessed < maxDays) {
          const daySales = yield _this15.supabaseService.getSalesByDateAndSorteo(currentDate, _this15.selectedSorteoFilter);
          allSales = [...allSales, ...daySales];
          // Avanzar al siguiente día usando fecha UTC
          currentDate = new Date(currentDate);
          currentDate.setUTCDate(currentDate.getUTCDate() + 1);
          daysProcessed++;
        }
        if (daysProcessed >= maxDays) {
          _this15.notificationService.showInfo('Se procesaron los primeros 31 días del rango');
        }
        // Forzar actualización del array
        _this15.sales = [...allSales];
        // Cargar detalles de todas las ventas
        for (const sale of _this15.sales) {
          _this15.saleDetails[sale.id] = yield _this15.supabaseService.getSaleDetails(sale.id);
        }
        // Forzar detección de cambios
        _this15.cdr.detectChanges();
      } catch (error) {
        _this15.notificationService.showError('Error al cargar las ventas: ' + error);
        _this15.sales = [];
      } finally {
        // Solo cambiar isLoading si no estamos en modo filtros
        if (!_this15.isLoadingFilters) {
          _this15.isLoading = false;
        }
      }
    })();
  }
  // Método auxiliar para cargar ventas de una sola fecha
  loadSingleDateSales() {
    var _this16 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fecha = _this16.selectedDate ? new Date(_this16.selectedDate) : _this16.supabaseService.getHondurasDateTime();
      _this16.sales = yield _this16.supabaseService.getSalesByDateAndSorteo(fecha, _this16.selectedSorteoFilter);
      _this16.sales = [...(_this16.sales || [])];
      for (const sale of _this16.sales) {
        _this16.saleDetails[sale.id] = yield _this16.supabaseService.getSaleDetails(sale.id);
      }
      _this16.cdr.detectChanges();
    })();
  }
  // Gestión de usuarios
  loadUsers() {
    var _this17 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this17.users = yield _this17.supabaseService.getUsers();
        if (_this17.users.length === 0) {
          _this17.notificationService.showInfo('No hay usuarios configurados. Use el botón Sincronizar para cargar usuarios desde Authentication.');
        }
      } catch (error) {
        _this17.notificationService.showError('Error al cargar usuarios: ' + error?.message);
        // Asegurar que users no sea undefined
        _this17.users = [];
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
    var _this18 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this18.isLoading = true;
        if (_this18.editingUser) {
          // Actualizar usuario existente
          yield _this18.supabaseService.updateExistingUser(_this18.editingUser.id, {
            email: _this18.userFormData.email,
            role: _this18.userFormData.role,
            sucursal: _this18.userFormData.sucursal,
            active: _this18.userFormData.active
          });
          _this18.notificationService.showSuccess('Usuario actualizado exitosamente');
        } else {
          // Crear nuevo usuario
          yield _this18.supabaseService.createNewUser(_this18.userFormData);
          _this18.notificationService.showSuccess('Usuario creado exitosamente');
        }
        _this18.closeUserModal();
        yield _this18.loadUsers();
      } catch (error) {
        _this18.notificationService.showError('Error al guardar el usuario');
      } finally {
        _this18.isLoading = false;
      }
    })();
  }
  toggleUserStatus(user) {
    var _this19 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this19.isLoading = true;
        yield _this19.supabaseService.toggleExistingUserStatus(user.id);
        _this19.notificationService.showSuccess('Estado del usuario actualizado');
        yield _this19.loadUsers();
      } catch (error) {
        _this19.notificationService.showError('Error al cambiar el estado del usuario');
      } finally {
        _this19.isLoading = false;
      }
    })();
  }
  deleteUser(userId) {
    var _this20 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const confirmed = yield _this20.notificationService.showConfirmation('Eliminar Usuario', '¿Está seguro que desea eliminar este usuario?');
      if (confirmed) {
        try {
          _this20.isLoading = true;
          // Implementar eliminación en SupabaseService
          _this20.notificationService.showSuccess('Usuario eliminado exitosamente');
          yield _this20.loadUsers();
        } catch (error) {
          _this20.notificationService.showError('Error al eliminar el usuario');
        } finally {
          _this20.isLoading = false;
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
    var _this21 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Obtener detalles de la venta desde la base de datos
        const details = yield _this21.supabaseService.getSaleDetails(sale.id);
        if (details.length === 0) {
          _this21.notificationService.showError('No se encontraron detalles para esta venta. No se puede reimprimir el recibo.');
          return;
        }
        // Generar recibo con los detalles obtenidos
        _this21.printService.generateThermalReceipt(sale, details);
        _this21.notificationService.showSuccess('Recibo enviado a impresión');
      } catch (error) {
        _this21.notificationService.showError('Error al reimprimir el recibo. Por favor intente nuevamente.');
      }
    })();
  }
  logout() {
    var _this22 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this22.supabaseService.logout();
      _this22.router.navigate(['/login']);
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
  // Método para formatear fecha para inputs datetime-local (DEPRECATED - usar supabaseService)
  formatDateTimeLocal(date) {
    // Delegar al servicio de Supabase para consistencia
    return this.supabaseService.formatDateTimeLocalHonduras(date);
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
    var _this23 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this23.newPassword !== _this23.confirmPassword) {
        _this23.notificationService.showError('Las contraseñas no coinciden');
        return;
      }
      if (_this23.newPassword.length < 6) {
        _this23.notificationService.showError('La contraseña debe tener al menos 6 caracteres');
        return;
      }
      try {
        _this23.isLoading = true;
        // Implementar método en SupabaseService para cambiar contraseña
        yield _this23.supabaseService.updateUserPassword(_this23.selectedUserForPassword.id, _this23.newPassword);
        _this23.notificationService.showSuccess('Contraseña actualizada exitosamente');
        _this23.closePasswordModal();
      } catch (error) {
        _this23.notificationService.showError('Error al cambiar la contraseña');
      } finally {
        _this23.isLoading = false;
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
      link.setAttribute('download', `ventas_excel_${this.supabaseService.formatDateOnlyForSupabase(hondurasToday)}.csv`);
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
    var _this24 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this24.isLoading = true;
        //  await this.supabaseService.debugSorteoSchedules();
        _this24.notificationService.showSuccess('Revisa la consola para ver los resultados del debug');
      } catch (error) {
        _this24.notificationService.showError('Error ejecutando debug');
      } finally {
        _this24.isLoading = false;
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
    var _this25 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this25.isLoading = true;
        _this25.notificationService.showInfo('Sincronizando usuarios desde auth.users...');
        // Usar el nuevo método de sincronización
        yield _this25.supabaseService.syncUsersFromAuth();
        // Recargar la lista de usuarios
        yield _this25.loadUsers();
        _this25.notificationService.showSuccess('Usuarios sincronizados correctamente');
      } catch (error) {
        _this25.notificationService.showError('Error al sincronizar usuarios');
      } finally {
        _this25.isLoading = false;
      }
    })();
  }
  // Navegar a la gestión de usuarios
  navigateToUsers() {
    this.router.navigate(['/admin/users']);
  }
  openFactorsModal(sorteoOrName, winningNumber) {
    var _this26 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this26.isLoading = true;
        // Cargar usuarios activos por sucursal
        _this26.sucursalesFactores = yield _this26.supabaseService.getActiveUsersBySucursal();
        // Inicializar factores con valores por defecto
        _this26.factoresPorSucursal = {};
        for (const sucursal of _this26.sucursalesFactores) {
          _this26.factoresPorSucursal[sucursal.sucursal] = sucursal.factor;
        }
        // Manejar ambos tipos de parámetros
        if (typeof sorteoOrName === 'string') {
          // Llamada desde la interfaz del sorteo (solo nombre y número)
          const sorteoSchedule = _models_interfaces__WEBPACK_IMPORTED_MODULE_1__.SORTEO_SCHEDULES.find(s => s.name === sorteoOrName);
          if (sorteoSchedule) {
            _this26.currentSorteoForFactors = {
              sorteo: sorteoSchedule,
              winningNumber: winningNumber.toString()
            };
          }
        } else {
          // Llamada desde setWinningNumber (objeto completo)
          _this26.currentSorteoForFactors = {
            sorteo: sorteoOrName,
            winningNumber: winningNumber.toString()
          };
        }
        _this26.showFactorsModal = true;
      } catch (error) {
        console.error('Error al cargar sucursales:', error);
        _this26.notificationService.showError('Error al cargar configuración de sucursales');
      } finally {
        _this26.isLoading = false;
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
    var _this27 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this27.currentSorteoForFactors) {
        _this27.notificationService.showError('No hay sorteo seleccionado');
        return;
      }
      const {
        sorteo,
        winningNumber
      } = _this27.currentSorteoForFactors;
      try {
        _this27.isLoading = true;
        // Usar fecha de Honduras
        const hondurasToday = _this27.supabaseService.getHondurasDateTime();
        const fechaStr = _this27.supabaseService.formatDateOnlyForSupabase(hondurasToday);
        const sorteoId = `${fechaStr}-${sorteo.name}`;
        // Crear sorteos por sucursal con factores específicos
        yield _this27.supabaseService.crearSorteosPorSucursal(sorteoId, winningNumber, _this27.factoresPorSucursal);
        // Calcular totales por sucursal
        yield _this27.supabaseService.calcularTotalesSorteoPorSucursal(sorteoId);
        // Cerrar modal de factores
        _this27.closeFactorsModal();
        // Obtener resumen de sucursales para mostrar
        _this27.resumenSucursales = yield _this27.supabaseService.getSorteoResumenPorSucursal(sorteoId);
        _this27.currentSorteoForResumen = `${sorteo.label} - Número Ganador: ${winningNumber.padStart(2, '0')}`;
        // Mostrar modal de resumen
        _this27.showResumenModal = true;
        // Recargar datos
        yield _this27.loadSales();
        yield _this27.loadSorteosData();
        // Notificar actualización de resúmenes
        _this27.supabaseService.notifyResumenUpdate();
        // Actualizar UI
        _this27.winningNumbers[sorteo.name] = winningNumber;
        _this27.notificationService.showSuccess(`Número ganador ${winningNumber.padStart(2, '0')} establecido con factores específicos por sucursal para ${sorteo.name}`);
      } catch (error) {
        console.error('Error al establecer número ganador:', error);
        _this27.notificationService.showError('Error al establecer el número ganador con factores por sucursal');
      } finally {
        _this27.isLoading = false;
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
    const total = this.getTotalVendido();
    return total.toFixed(2);
  }
  getTotalPagadoGeneral() {
    const total = this.getTotalPagado();
    return total.toFixed(2);
  }
  getGananciaTotalGeneral() {
    return this.getGananciaNeta();
  }
  // Método para calcular el total de la cantidad del número ganador
  getTotalCantidadNumeroGanador() {
    if (!this.resumenSucursales || this.resumenSucursales.length === 0) {
      return 0;
    }
    return this.resumenSucursales.reduce((total, sucursal) => {
      return total + (sucursal.cantidad_numero_ganador || 0);
    }, 0);
  }
  // Método para obtener resumen de ventas por número
  getNumbersSummary() {
    // Usar caché si está disponible y válido
    if (this.isCacheValid() && this.cachedNumbersData) {
      const totalGeneral = this.cachedNumbersData.get('total') || 0;
      const result = [];
      this.cachedNumbersData.forEach((value, key) => {
        if (key !== 'total' && typeof value === 'object' && value.totalVendido !== undefined) {
          result.push({
            numero: parseInt(key),
            totalVendido: value.totalVendido,
            cantidadVentas: value.cantidadVentas,
            porcentaje: totalGeneral > 0 ? value.totalVendido / totalGeneral * 100 : 0
          });
        }
      });
      return result.sort((a, b) => b.totalVendido - a.totalVendido);
    }
    // Fallback al cálculo tradicional si no hay caché
    const sales = this.sales;
    const numeroStats = {};
    let totalGeneral = 0;
    // Procesar todas las ventas
    sales.forEach(sale => {
      const details = this.getSaleDetails(sale.id);
      details.forEach(detail => {
        if (!numeroStats[detail.numero]) {
          numeroStats[detail.numero] = {
            totalVendido: 0,
            cantidadVentas: 0
          };
        }
        numeroStats[detail.numero].totalVendido += detail.monto;
        numeroStats[detail.numero].cantidadVentas += 1;
        totalGeneral += detail.monto;
      });
    });
    // Convertir a array y calcular porcentajes
    return Object.entries(numeroStats).map(([numero, stats]) => ({
      numero: parseInt(numero),
      totalVendido: stats.totalVendido,
      cantidadVentas: stats.cantidadVentas,
      porcentaje: totalGeneral > 0 ? stats.totalVendido / totalGeneral * 100 : 0
    })).sort((a, b) => b.totalVendido - a.totalVendido); // Ordenar por total vendido descendente
  }
  // Método para obtener números vendidos agrupados por sorteo y sucursal
  getNumbersSummaryBySorteoAndSucursal() {
    const groups = {};
    // Agrupar por sorteo, sucursal y número
    this.sales.forEach(sale => {
      const sorteo = sale.sorteo || 'Sin Sorteo';
      const sucursal = sale.sucursal || 'Sin Sucursal';
      if (!groups[sorteo]) {
        groups[sorteo] = {};
      }
      if (!groups[sorteo][sucursal]) {
        groups[sorteo][sucursal] = {};
      }
      const details = this.getSaleDetails(sale.id);
      details.forEach(detail => {
        const numero = parseInt(detail.numero.toString());
        if (!groups[sorteo][sucursal][numero]) {
          groups[sorteo][sucursal][numero] = {
            totalVendido: 0,
            cantidadVentas: 0
          };
        }
        groups[sorteo][sucursal][numero].totalVendido += detail.monto;
        groups[sorteo][sucursal][numero].cantidadVentas += 1;
      });
    });
    // Convertir a array y calcular porcentajes
    return Object.keys(groups).map(sorteo => {
      const sorteoData = groups[sorteo];
      const sucursales = Object.keys(sorteoData).map(sucursal => {
        const sucursalData = sorteoData[sucursal];
        const totalSucursal = Object.values(sucursalData).reduce((sum, data) => sum + data.totalVendido, 0);
        const numeros = Object.keys(sucursalData).map(numeroStr => {
          const numero = parseInt(numeroStr);
          const data = sucursalData[numero];
          return {
            numero,
            totalVendido: data.totalVendido,
            cantidadVentas: data.cantidadVentas,
            porcentaje: totalSucursal > 0 ? data.totalVendido / totalSucursal * 100 : 0
          };
        }).sort((a, b) => b.totalVendido - a.totalVendido);
        return {
          sucursal,
          numeros
        };
      });
      return {
        sorteo,
        sucursales
      };
    });
  }
  // Métodos auxiliares para la vista de números vendidos
  getSorteoTotal(sorteoGroup) {
    return sorteoGroup.sucursales.reduce((total, sucursal) => {
      return total + sucursal.numeros.reduce((subtotal, numero) => subtotal + numero.totalVendido, 0);
    }, 0);
  }
  getSucursalTotal(sucursalGroup) {
    return sucursalGroup.numeros.reduce((total, numero) => total + numero.totalVendido, 0);
  }
  // Métodos para el tablero de números completo
  getAllNumbers() {
    const numbers = [];
    for (let i = 0; i <= 99; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  getNumeroVenta(sucursalGroup, numero) {
    const numeroData = sucursalGroup.numeros.find(n => n.numero === numero);
    return numeroData ? numeroData.totalVendido : 0;
  }
  getNumeroIntensity(sucursalGroup, numero) {
    const venta = this.getNumeroVenta(sucursalGroup, numero);
    const maxVenta = Math.max(...sucursalGroup.numeros.map(n => n.totalVendido));
    if (venta === 0) return 'sin-venta';
    if (maxVenta === 0) return 'sin-venta';
    const intensidad = venta / maxVenta;
    if (intensidad >= 0.8) return 'intensidad-muy-alta';
    if (intensidad >= 0.6) return 'intensidad-alta';
    if (intensidad >= 0.4) return 'intensidad-media';
    if (intensidad >= 0.2) return 'intensidad-baja';
    return 'intensidad-muy-baja';
  }
  // Métodos de exportación
  prepareReportData() {
    // Obtener fecha del filtro actual
    const fechaReporte = this.fechaDesde ? this.supabaseService.formatDateOnlyForSupabase(this.supabaseService.parseLocalDateTimeToUtc(this.fechaDesde)) : this.selectedDate || this.supabaseService.formatDateOnlyForSupabase(this.supabaseService.getHondurasDateTime());
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const fechaHora = this.supabaseService.formatHondurasDateTime(hondurasTime);
    const [, hora, periodo] = fechaHora.split(' ');
    // Describir filtros aplicados
    let filtroAplicado = 'Todos los datos';
    if (this.fechaDesde && this.fechaHasta) {
      filtroAplicado = `Desde: ${this.fechaDesde} Hasta: ${this.fechaHasta}`;
    } else if (this.fechaDesde) {
      filtroAplicado = `Desde: ${this.fechaDesde}`;
    } else if (this.fechaHasta) {
      filtroAplicado = `Hasta: ${this.fechaHasta}`;
    }
    if (this.selectedSorteoFilter) {
      filtroAplicado += ` - Sorteo: ${this.selectedSorteoFilter}`;
    }
    // 1. DASHBOARD PRINCIPAL (4 cards como se ven en pantalla)
    const dashboardData = {
      totalVendido: this.getTotalVendido(),
      totalPagado: this.getTotalPagado(),
      gananciaNeta: this.getGananciaNeta(),
      ventasTotales: this.getTotalVentas()
    };
    // 2. NÚMEROS POR SORTEO Y SUCURSAL (tableros completos como se ven)
    const numerosPorSorteo = this.getNumbersSummaryBySorteoAndSucursal();
    // 3. DETALLE POR SUCURSALES (LA PARTE MÁS IMPORTANTE)
    const numeroGanador = this.resumenSucursales.length > 0 ? this.resumenSucursales[0].numero_ganador : '';
    const detallePorSucursales = {
      headers: ['Sucursal', 'Factor', `Cantidad #${numeroGanador}`, 'Total Vendido', 'Total Pagado', 'Ganancia Neta'],
      filas: this.resumenSucursales.map(sucursal => ({
        sucursal: sucursal.sucursal,
        factor: `${sucursal.factor_multiplicador}x`,
        cantidadNumeroGanador: sucursal.cantidad_numero_ganador || 0,
        totalVendido: sucursal.total_vendido || 0,
        totalPagado: sucursal.total_pagado || 0,
        gananciaNeta: sucursal.ganancia_neta || 0
      })),
      totales: {
        sucursal: 'TOTAL GENERAL',
        factor: '-',
        cantidadNumeroGanador: this.getTotalCantidadNumeroGanador(),
        totalVendido: parseFloat(this.getTotalVendidoGeneral()),
        totalPagado: parseFloat(this.getTotalPagadoGeneral()),
        gananciaNeta: this.getGananciaTotalGeneral()
      }
    };
    return {
      // Información del reporte
      fechaReporte: fechaReporte,
      horaReporte: `${hora} ${periodo}`,
      filtroAplicado: filtroAplicado,
      // Datos principales
      dashboard: dashboardData,
      numerosPorSorteo: numerosPorSorteo,
      detallePorSucursales: detallePorSucursales
    };
  }
  // Método para exportar datos tal como se ven en el admin
  prepareVisualReportData() {
    // Datos del dashboard tal como aparecen en la interfaz admin
    const totalVendidoGeneral = this.getTotalVendido();
    const totalPagadoGeneral = this.getTotalPagado();
    const gananciaNeta = totalVendidoGeneral - totalPagadoGeneral;
    // Usar timezone de Honduras para fecha y hora
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    const fechaFormateada = this.supabaseService.formatHondurasDateTime(hondurasTime);
    const [fecha, horaCompleta] = fechaFormateada.split(' ');
    const hora = horaCompleta || '';
    const periodo = fechaFormateada.includes('AM') ? 'AM' : 'PM';
    // Descripción de filtros
    let filtrosAplicados = 'Todos los datos';
    if (this.fechaDesde && this.fechaHasta) {
      const fechaDesdeOnly = this.fechaDesde.split('T')[0];
      const fechaHastaOnly = this.fechaHasta.split('T')[0];
      filtrosAplicados = `Desde: ${fechaDesdeOnly} Hasta: ${fechaHastaOnly}`;
    } else if (this.selectedDate) {
      filtrosAplicados = `Fecha: ${this.selectedDate}`;
    }
    if (this.selectedSorteoFilter) {
      filtrosAplicados += ` - Sorteo: ${this.selectedSorteoFilter}`;
    }
    // 1. DASHBOARD CARDS (como aparecen arriba del admin)
    const dashboard = {
      totalVendido: totalVendidoGeneral,
      totalPagado: totalPagadoGeneral,
      gananciaNeta: gananciaNeta,
      ventasTotales: this.sales.length
    };
    // 2. NÚMEROS POR SORTEO (formato tablero como en el admin)
    const numerosPorSorteo = this.getNumbersSummaryBySorteoAndSucursal();
    // 3. DETALLE POR SUCURSALES (LA MÁS IMPORTANTE - exacto como tabla admin)
    let detallePorSucursales;
    if (this.resumenSucursales && this.resumenSucursales.length > 0) {
      // Usar datos existentes de resumenSucursales
      detallePorSucursales = {
        headers: ['Sucursal', 'Factor', 'Total Vendido', 'Total Pagado', 'Ganancia Neta'],
        filas: this.resumenSucursales.map(resumen => [resumen.sucursal, `${resumen.factor_multiplicador || 70}x`, `L ${(resumen.total_vendido || 0).toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`, `L ${(resumen.total_pagado || 0).toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`, `L ${(resumen.ganancia_neta || 0).toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`]),
        totales: ['TOTAL GENERAL', '', `L ${totalVendidoGeneral.toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`, `L ${totalPagadoGeneral.toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`, `L ${gananciaNeta.toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`]
      };
    } else {
      // Calcular desde las ventas actuales si no hay resumenSucursales
      const sucursalesMap = new Map();
      // Agrupar ventas por sucursal
      this.sales.forEach(sale => {
        const sucursal = sale.sucursal || 'Sin Sucursal';
        if (!sucursalesMap.has(sucursal)) {
          sucursalesMap.set(sucursal, {
            sucursal: sucursal,
            factor: 70,
            totalVendido: 0,
            totalPagado: 0,
            gananciaNeta: 0
          });
        }
        const data = sucursalesMap.get(sucursal);
        data.totalVendido += sale.total;
        // Calcular total pagado basado en sorteos cerrados
        const sorteoSchedule = this.sorteos.find(s => s.name === sale.sorteo);
        if (sorteoSchedule) {
          const sorteoData = this.getSorteoData(sorteoSchedule);
          if (sorteoData && sorteoData.cerrado && sorteoData.numeroGanador) {
            const saleDetails = this.getSaleDetails(sale.id);
            saleDetails.forEach(detail => {
              if (parseInt(detail.numero.toString()) === parseInt(sorteoData.numeroGanador || '0')) {
                data.totalPagado += detail.monto * (sorteoData.factorMultiplicador || 70);
              }
            });
          }
        }
        data.gananciaNeta = data.totalVendido - data.totalPagado;
      });
      const sucursalesArray = Array.from(sucursalesMap.values());
      detallePorSucursales = {
        headers: ['Sucursal', 'Factor', 'Total Vendido', 'Total Pagado', 'Ganancia Neta'],
        filas: sucursalesArray.map(sucursal => [sucursal.sucursal, `${sucursal.factor}x`, `L ${sucursal.totalVendido.toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`, `L ${sucursal.totalPagado.toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`, `L ${sucursal.gananciaNeta.toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`]),
        totales: ['TOTAL GENERAL', '', `L ${totalVendidoGeneral.toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`, `L ${totalPagadoGeneral.toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`, `L ${gananciaNeta.toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`]
      };
    }
    return {
      fecha: fecha || hondurasTime.toLocaleDateString('es-HN'),
      hora: hora || hondurasTime.toLocaleTimeString('es-HN'),
      filtros: filtrosAplicados,
      dashboard: dashboard,
      numerosPorSorteo: numerosPorSorteo,
      detallePorSucursales: detallePorSucursales
    };
  }
  downloadDailyReportExcel() {
    var _this28 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this28.isLoading = true;
        const reportData = _this28.prepareVisualReportData();
        yield _this28.exportService.exportVisualToExcel(reportData, `reporte-admin-visual-${_this28.selectedDate}`);
        _this28.notificationService.showSuccess('Reporte Excel descargado exitosamente');
      } catch (error) {
        console.error('Error descargando reporte Excel:', error);
        _this28.notificationService.showError('Error al descargar el reporte Excel');
      } finally {
        _this28.isLoading = false;
      }
    })();
  }
  downloadDailyReportPDF() {
    var _this29 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this29.isLoading = true;
        const reportData = _this29.prepareVisualReportData();
        yield _this29.exportService.exportVisualToPDF(reportData, `reporte-admin-visual-${_this29.selectedDate}`);
        _this29.notificationService.showSuccess('Reporte PDF descargado exitosamente');
      } catch (error) {
        console.error('Error descargando reporte PDF:', error);
        _this29.notificationService.showError('Error al descargar el reporte PDF');
      } finally {
        _this29.isLoading = false;
      }
    })();
  }
  static {
    this.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_supabase_service__WEBPACK_IMPORTED_MODULE_2__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_export_service__WEBPACK_IMPORTED_MODULE_5__.ExportService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 203,
      vars: 66,
      consts: [["searchIcon", ""], ["eraserIcon", ""], ["excelIcon", ""], ["pdfIcon", ""], ["noVentasNumeros", ""], ["userForm", "ngForm"], ["passwordForm", "ngForm"], ["setWinner", ""], [1, "admin-interface"], [1, "header-bar"], [1, "admin-title"], [1, "fas", "fa-cog"], [1, "header-actions"], [1, "btn-header", "btn-users", 3, "click", "disabled"], [1, "fas", "fa-users"], [1, "btn-header", "btn-cerrar", 3, "click", "disabled"], [1, "fas", "fa-sign-out-alt"], [1, "filters-bar"], [1, "filter-group"], ["for", "fechaDesde"], [1, "fas", "fa-calendar-alt"], ["class", "loading-indicator", 4, "ngIf"], ["type", "datetime-local", "id", "fechaDesde", 1, "form-control", 3, "ngModelChange", "change", "ngModel", "disabled"], ["for", "fechaHasta"], ["type", "datetime-local", "id", "fechaHasta", 1, "form-control", 3, "ngModelChange", "change", "ngModel", "disabled"], ["for", "sorteoFilter"], [1, "fas", "fa-trophy"], ["id", "sorteoFilter", 1, "form-control", 3, "ngModelChange", "change", "ngModel", "disabled"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "filter-actions"], [1, "btn-filter", "btn-primary", 3, "click", "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf", "ngIfElse"], [1, "btn-filter", "btn-secondary", 3, "click", "disabled"], [1, "export-actions"], [1, "export-label"], [1, "fas", "fa-download"], [1, "btn-export", "btn-excel", 3, "click", "disabled"], [1, "btn-export", "btn-pdf", 3, "click", "disabled"], [1, "main-content"], [1, "summary-cards"], [1, "summary-card", "vendido"], [1, "card-icon"], [1, "fas", "fa-chart-line"], [1, "card-content"], [1, "summary-card", "pagado"], [1, "fas", "fa-coins"], [1, "summary-card", "ganancia"], [1, "fas", "fa-piggy-bank"], [1, "summary-card", "ventas"], [1, "fas", "fa-shopping-cart"], ["class", "numero-ganador-section", 4, "ngIf"], [1, "numeros-vendidos-section"], [1, "section-header"], [1, "fas", "fa-chart-bar"], [1, "section-subtitle"], ["class", "sorteos-numeros-grid", 4, "ngIf", "ngIfElse"], [1, "sorteos-section"], [1, "fas", "fa-dice"], [1, "sorteos-grid"], ["class", "sorteo-card", 4, "ngFor", "ngForOf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "fas", "fa-user"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "userEmail"], ["type", "email", "id", "userEmail", "required", "", "name", "email", "placeholder", "usuario@ejemplo.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "userName"], ["type", "text", "id", "userName", "name", "nombre", "placeholder", "Nombre completo del usuario", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "form-group", 4, "ngIf"], ["for", "userRole"], ["id", "userRole", "name", "role", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["value", "admin"], ["value", "sucursal"], [1, "checkbox-label"], ["type", "checkbox", "name", "active", 3, "ngModelChange", "ngModel"], [1, "checkmark"], [1, "modal-footer"], ["type", "button", 1, "btn-modal", "btn-secondary", 3, "click"], [1, "fas", "fa-times"], ["type", "button", 1, "btn-modal", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-save"], [1, "fas", "fa-key"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "required", "", "name", "newPassword", "placeholder", "Ingrese la nueva contrase\u00F1a", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "confirmPassword"], ["type", "password", "id", "confirmPassword", "required", "", "name", "confirmPassword", "placeholder", "Confirme la nueva contrase\u00F1a", 1, "form-input", 3, "ngModelChange", "ngModel"], ["tabindex", "0", 1, "modal", 3, "keydown.escape"], [1, "modal-dialog", "modal-dialog-centered", 3, "click"], [1, "fas", "fa-receipt"], ["type", "button", 1, "btn-close", 3, "click"], ["class", "modal-body", 4, "ngIf"], [1, "fas", "fa-print"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "loading-indicator"], [1, "fas", "fa-spinner", "fa-spin"], [3, "value"], [1, "fas", "fa-search"], [1, "fas", "fa-eraser"], [1, "fas", "fa-file-excel"], [1, "fas", "fa-file-pdf"], [1, "numero-ganador-section"], [1, "numero-ganador-card"], [1, "numero-ganador-header"], [1, "numero-display"], [1, "numero-text"], [1, "numero-label"], [1, "totales-general"], [1, "total-item"], [1, "total-value"], [1, "total-label"], [1, "sucursales-detalle"], [1, "detalle-header"], ["class", "detalle-row", 4, "ngFor", "ngForOf"], [1, "detalle-row"], [1, "sucursal-name"], [1, "factor-value"], [1, "cantidad-value"], [1, "pago-value"], [1, "sorteos-numeros-grid"], ["class", "sorteo-numeros-card", 4, "ngFor", "ngForOf"], [1, "sorteo-numeros-card"], [1, "sorteo-numeros-header"], [1, "sorteo-total"], [1, "sucursales-container"], ["class", "sucursal-group", 4, "ngFor", "ngForOf"], [1, "sucursal-group"], [1, "sucursal-header"], [1, "sucursal-total"], [1, "top-numeros-section"], [1, "top-numeros-grid"], ["class", "top-numero-card", 4, "ngFor", "ngForOf"], [1, "tablero-numeros"], [1, "fas", "fa-grid-3x3"], [1, "numeros-grid-completo"], ["class", "numero-cell", 3, "class", "title", 4, "ngFor", "ngForOf"], [1, "top-numero-card"], [1, "numero"], [1, "cantidad"], [1, "posicion"], [1, "numero-cell", 3, "title"], [1, "numero-venta"], [1, "no-data-message"], [1, "sorteo-card"], [1, "sorteo-header"], [1, "sorteo-status"], [1, "status-badge"], [1, "close-time"], [1, "sorteo-content"], [4, "ngIf", "ngIfElse"], [1, "winner-section"], [1, "winner-number"], [1, "factor"], ["class", "winner-form", 4, "ngIf"], ["class", "sorteo-open-message", 4, "ngIf"], [1, "winner-form"], ["type", "number", "min", "1", "max", "99", "placeholder", "Ingrese n\u00FAmero (1-99)", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "btn-set-winner", 3, "click", "disabled"], [4, "ngIf"], [1, "sorteo-open-message"], [1, "fas", "fa-clock"], ["for", "userPassword"], ["type", "password", "id", "userPassword", "required", "", "name", "password", "placeholder", "Contrase\u00F1a segura", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "userSucursal"], ["type", "text", "id", "userSucursal", "name", "sucursal", "placeholder", "Nombre de la sucursal", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "sale-info-grid"], [1, "info-row"], [1, "label"], [1, "value"], [1, "value", "text-capitalize"], [1, "info-row", "total-row"], ["class", "numbers-section", 4, "ngIf"], ["class", "no-numbers", 4, "ngIf"], [1, "numbers-section"], [1, "fas", "fa-list"], [1, "numbers-grid"], ["class", "number-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "numbers-summary"], [1, "summary-item"], [1, "number-item"], [1, "number-card"], [1, "number"], [1, "amount"], [1, "no-numbers"], [1, "fas", "fa-exclamation-triangle"], [1, "modal-overlay", 3, "click"], [1, "modal-container", "factors-modal", 3, "click"], [1, "fas", "fa-calculator"], ["class", "sorteo-info", 4, "ngIf"], [1, "btn-close", 3, "click"], [1, "factors-instruction"], [1, "fas", "fa-info-circle"], ["class", "factors-list", 4, "ngIf"], ["class", "loading-factors", 4, "ngIf"], ["class", "no-sucursales", 4, "ngIf"], [1, "btn-modal", "btn-secondary", 3, "click", "disabled"], [1, "btn-modal", "btn-primary", 3, "click", "disabled"], ["class", "fas fa-spinner fa-spin", 4, "ngIf"], ["class", "fas fa-trophy", 4, "ngIf"], [1, "sorteo-info"], [1, "sorteo-badge"], [1, "winning-number"], [1, "factors-list"], ["class", "factor-item", 4, "ngFor", "ngForOf"], [1, "factor-item"], [1, "sucursal-info"], [1, "fas", "fa-store"], ["class", "sucursal-users", 4, "ngIf"], [1, "factor-input"], [1, "input-with-x"], ["type", "number", "min", "1", "max", "999", "step", "0.1", "placeholder", "70", 3, "input", "value"], [1, "x-multiplier"], [1, "sucursal-users"], [4, "ngFor", "ngForOf"], [1, "loading-factors"], [1, "no-sucursales"], [1, "modal-container", "resumen-modal", 3, "click"], [1, "resumen-table"], [1, "table-header"], [1, "col-sucursal"], [1, "col-factor"], [1, "col-numero-ganador"], [1, "col-vendido"], [1, "col-pagado"], [1, "col-ganancia"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-footer"], [1, "btn-modal", "btn-primary", 3, "click"], [1, "fas", "fa-check"], [1, "table-row"], [1, "cantidad-numero"], [1, "multiplicacion"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Panel de Administraci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 12)(7, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.navigateToUsers());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Gesti\u00F3n de Usuarios ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.logout());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Cerrar Sesi\u00F3n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 17)(14, "div", 18)(15, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Desde: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, AdminComponent_span_18_Template, 2, 0, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.fechaDesde, $event) || (ctx.fechaDesde = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.onFiltroFechaChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 18)(21, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " Hasta: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, AdminComponent_span_24_Template, 2, 0, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.fechaHasta, $event) || (ctx.fechaHasta = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.onFiltroFechaChange());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 18)(27, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Sorteo: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, AdminComponent_span_30_Template, 2, 0, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.selectedSorteoFilter, $event) || (ctx.selectedSorteoFilter = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AdminComponent_Template_select_change_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.aplicarFiltros());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Todos los sorteos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, AdminComponent_option_34_Template, 2, 2, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 30)(36, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.aplicarFiltros());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, AdminComponent_i_37_Template, 1, 0, "i", 32)(38, AdminComponent_ng_template_38_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.limpiarFiltros());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, AdminComponent_i_42_Template, 1, 0, "i", 32)(43, AdminComponent_ng_template_43_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 34)(47, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, " Descargar Reporte Diario: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.downloadDailyReportExcel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, AdminComponent_i_51_Template, 1, 0, "i", 32)(52, AdminComponent_ng_template_52_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, " Excel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_55_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.downloadDailyReportPDF());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, AdminComponent_i_56_Template, 1, 0, "i", 32)(57, AdminComponent_ng_template_57_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, " PDF ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 39)(61, "div", 40)(62, "div", 41)(63, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 44)(66, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, "Total Vendido");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 45)(71, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 44)(74, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Total Pagado");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 47)(79, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](80, "i", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 44)(82, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Ganancia Neta");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 49)(87, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](88, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 44)(90, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93, "Ventas Totales");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](94, AdminComponent_div_94_Template, 36, 4, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 52)(96, "div", 53)(97, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99, " N\u00FAmeros Vendidos por Sorteo");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101, "Vista en tiempo real de las ventas por sorteo");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](102, AdminComponent_div_102_Template, 2, 1, "div", 56)(103, AdminComponent_ng_template_103_Template, 6, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "div", 57)(106, "div", 53)(107, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](108, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, " Gesti\u00F3n de Sorteos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](111, AdminComponent_div_111_Template, 13, 9, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](112, "app-resumen-sorteos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_113_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.showUserModal && $event.target === $event.currentTarget && ctx.closeUserModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "div", 62)(115, "div", 63)(116, "div", 64)(117, "h5", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](118, "i", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "button", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_120_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.closeUserModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "div", 69)(124, "form", null, 5)(126, "div", 70)(127, "label", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](128, "Email:");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "input", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_129_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.userFormData.email, $event) || (ctx.userFormData.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](130, "div", 70)(131, "label", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](132, "Nombre:");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](133, "input", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_133_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.userFormData.nombre, $event) || (ctx.userFormData.nombre = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](134, AdminComponent_div_134_Template, 4, 1, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "div", 70)(136, "label", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, "Rol:");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "select", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_138_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.userFormData.role, $event) || (ctx.userFormData.role = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](139, "option", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](140, "Administrador");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "option", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](142, "Sucursal");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](143, AdminComponent_div_143_Template, 4, 1, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](144, "div", 70)(145, "label", 80)(146, "input", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_146_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.userFormData.active, $event) || (ctx.userFormData.active = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](147, "span", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](148, " Usuario Activo ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](149, "div", 83)(150, "button", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_150_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.closeUserModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](151, "i", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](152, " Cancelar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](153, "button", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_153_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.saveUser());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](154, "i", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](155);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](156, "div", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_156_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.showPasswordModal && $event.target === $event.currentTarget && ctx.closePasswordModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](157, "div", 62)(158, "div", 63)(159, "div", 64)(160, "h5", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](161, "i", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](162, " Cambiar Contrase\u00F1a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](163, "button", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_163_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.closePasswordModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "span", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](166, "div", 69)(167, "form", null, 6)(169, "div", 70)(170, "label", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](171, "Nueva Contrase\u00F1a:");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](172, "input", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_172_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.newPassword, $event) || (ctx.newPassword = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](173, "div", 70)(174, "label", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](175, "Confirmar Contrase\u00F1a:");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](176, "input", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_176_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](177, "div", 83)(178, "button", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_178_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.closePasswordModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](179, "i", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](180, " Cancelar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](181, "button", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_181_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.changeUserPassword());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](182, "i", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](183, " Cambiar Contrase\u00F1a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](184, "div", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.escape", function AdminComponent_Template_div_keydown_escape_184_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.closeSaleDetailModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](185, "div", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_185_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](186, "div", 63)(187, "div", 64)(188, "h3", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](189, "i", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](190, " Detalles de Venta");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](191, "button", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_191_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.closeSaleDetailModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](192, "i", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](193, AdminComponent_div_193_Template, 34, 8, "div", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](194, "div", 83)(195, "button", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_195_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.reprintReceipt(ctx.selectedSaleForDetail));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](196, "i", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](197, " Reimprimir Recibo ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](198, "button", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_198_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.closeSaleDetailModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](199, "i", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](200, " Cerrar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](201, AdminComponent_div_201_Template, 25, 9, "div", 99)(202, AdminComponent_div_202_Template, 49, 11, "div", 99);
        }
        if (rf & 2) {
          const searchIcon_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](39);
          const eraserIcon_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](44);
          const excelIcon_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](53);
          const pdfIcon_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](58);
          const noVentasNumeros_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](104);
          const userForm_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](125);
          const passwordForm_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](168);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaDesde);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.fechaHasta);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedSorteoFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.sorteos);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isLoading || ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoadingFilters)("ngIfElse", searchIcon_r23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.isLoadingFilters ? "Filtrando..." : "Filtrar", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isLoading || ctx.isLoadingFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoadingFilters)("ngIfElse", eraserIcon_r24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.isLoadingFilters ? "Limpiando..." : "Limpiar", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", excelIcon_r25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", pdfIcon_r26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx.getTotalVendido().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx.getTotalPagado().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("positive", ctx.getGananciaNeta() > 0)("negative", ctx.getGananciaNeta() < 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("L ", ctx.getGananciaNeta().toFixed(2), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getTotalVentas());
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.resumenSucursales && ctx.resumenSucursales.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sales.length > 0)("ngIfElse", noVentasNumeros_r27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.sorteos);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("display", ctx.showUserModal ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx.showUserModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.editingUser ? "Editar Usuario" : "Crear Usuario", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.userFormData.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.userFormData.nombre);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.editingUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.userFormData.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userFormData.role === "sucursal");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.userFormData.active);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !userForm_r28.valid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.editingUser ? "Actualizar" : "Crear", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("display", ctx.showPasswordModal ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx.showPasswordModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.newPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.confirmPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !passwordForm_r29.valid || ctx.newPassword !== ctx.confirmPassword || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("display", ctx.showSaleDetailModal ? "flex" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx.showSaleDetailModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedSaleForDetail);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showFactorsModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showResumenModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _resumen_sorteos_resumen_sorteos_component__WEBPACK_IMPORTED_MODULE_6__.ResumenSorteosComponent],
      styles: ["@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css);@charset \"UTF-8\";\n\n\n.admin-interface[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n\n\n.header-bar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);\n  color: white;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.admin-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.admin-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n\n.btn-header[_ngcontent-%COMP%] {\n  background: rgba(52, 152, 219, 0.2);\n  border: 1px solid rgba(52, 152, 219, 0.3);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.btn-header[_ngcontent-%COMP%]:hover {\n  background: rgba(52, 152, 219, 0.3);\n  border-color: rgba(52, 152, 219, 0.5);\n  transform: translateY(-1px);\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.btn-users[_ngcontent-%COMP%] {\n  background: rgba(46, 204, 113, 0.2);\n  border-color: rgba(46, 204, 113, 0.3);\n}\n\n.btn-users[_ngcontent-%COMP%]:hover {\n  background: rgba(46, 204, 113, 0.3);\n  border-color: rgba(46, 204, 113, 0.5);\n}\n\n.btn-cerrar[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.2);\n  border-color: rgba(231, 76, 60, 0.3);\n}\n\n.btn-cerrar[_ngcontent-%COMP%]:hover {\n  background: rgba(231, 76, 60, 0.3);\n  border-color: rgba(231, 76, 60, 0.5);\n}\n\n\n\n.accordion-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  margin: 1.5rem 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  border: 1px solid #f8f9fa;\n}\n\n.accordion-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);\n  color: white;\n  padding: 1rem 1.5rem;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: all 0.2s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.accordion-header[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #3c5070 0%, #34495e 100%);\n}\n\n.accordion-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i.fa-chevron-down[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n  font-size: 0.9rem;\n}\n\n.accordion-header[_ngcontent-%COMP%]   i.fa-chevron-down.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.accordion-content[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  background: white;\n}\n\n.accordion-content.show[_ngcontent-%COMP%] {\n  max-height: 2000px;\n  padding: 1.5rem;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1050;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal.fade[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n\n.modal.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: relative;\n  width: auto;\n  max-width: 700px;\n  margin: 1rem;\n  pointer-events: none;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 700px;\n  pointer-events: auto;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);\n  border: none;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.5rem;\n  border-bottom: 1px solid #e9ecef;\n  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);\n  color: white;\n  border-radius: 12px 12px 0 0;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1.5rem;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #e9ecef;\n  background: #f8f9fa;\n  border-radius: 0 0 12px 12px;\n  gap: 0.5rem;\n}\n\n.btn-close[_ngcontent-%COMP%], .close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: white;\n  opacity: 0.8;\n  cursor: pointer;\n  padding: 0;\n  width: 1em;\n  height: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn-close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.btn-modal[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.btn-modal.btn-primary[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n}\n\n.btn-modal.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #2980b9;\n  transform: translateY(-1px);\n}\n\n.btn-modal.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n\n.btn-modal.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5a6268;\n  transform: translateY(-1px);\n}\n\n.btn-modal[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n\n\n.fas[_ngcontent-%COMP%], .fa[_ngcontent-%COMP%] {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n\n\n\n.fa-edit[_ngcontent-%COMP%]:before {\n  content: \"\\f044\";\n}\n\n.fa-trash[_ngcontent-%COMP%]:before {\n  content: \"\\f1f8\";\n}\n\n.fa-key[_ngcontent-%COMP%]:before {\n  content: \"\\f084\";\n}\n\n.fa-toggle-on[_ngcontent-%COMP%]:before {\n  content: \"\\f205\";\n}\n\n.fa-toggle-off[_ngcontent-%COMP%]:before {\n  content: \"\\f204\";\n}\n\n.fa-user-plus[_ngcontent-%COMP%]:before {\n  content: \"\\f234\";\n}\n\n.fa-plus[_ngcontent-%COMP%]:before {\n  content: \"\\f067\";\n}\n\n.fa-bug[_ngcontent-%COMP%]:before {\n  content: \"\\f188\";\n}\n\n.fa-database[_ngcontent-%COMP%]:before {\n  content: \"\\f1c0\";\n}\n\n.fa-clock[_ngcontent-%COMP%]:before {\n  content: \"\\f017\";\n}\n\n.fa-users[_ngcontent-%COMP%]:before {\n  content: \"\\f0c0\";\n}\n\n.fa-chevron-down[_ngcontent-%COMP%]:before {\n  content: \"\\f078\";\n}\n\n.fa-times[_ngcontent-%COMP%]:before {\n  content: \"\\f00d\";\n}\n\n.fa-save[_ngcontent-%COMP%]:before {\n  content: \"\\f0c7\";\n}\n\n.fa-sync[_ngcontent-%COMP%]:before {\n  content: \"\\f021\";\n}\n\n\n\n.filters-bar[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1.5rem 2rem;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  border-bottom: 1px solid #e9ecef;\n  display: flex;\n  align-items: flex-end;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  min-width: 160px;\n}\n\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n  font-size: 0.85rem;\n}\n\n.loading-indicator[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #3498db;\n}\n.loading-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-control[_ngcontent-%COMP%], .form-input[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 2px solid #e9ecef;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n.form-control[_ngcontent-%COMP%]:disabled, .form-input[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa;\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-left: auto;\n}\n\n.btn-filter[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.btn-filter.btn-primary[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: white;\n}\n\n.btn-filter.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2980b9;\n  transform: translateY(-1px);\n}\n\n.btn-filter.btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n\n.btn-filter.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n  transform: translateY(-1px);\n}\n\n\n\n.export-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 0;\n  border-top: 1px solid #e9ecef;\n  margin-top: 1rem;\n}\n\n.export-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.export-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-size: 1rem;\n}\n\n.btn-export[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.2rem;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.btn-export[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none !important;\n}\n\n.btn-export[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n\n.btn-export.btn-excel[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #218838 0%, #28a745 100%);\n  color: white;\n}\n.btn-export.btn-excel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #1e7e34 0%, #218838 100%);\n}\n.btn-export.btn-excel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #d4edda;\n}\n\n.btn-export.btn-pdf[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);\n  color: white;\n}\n.btn-export.btn-pdf[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #b91c1c 0%, #dc2626 100%);\n}\n.btn-export.btn-pdf[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fecaca;\n}\n\n\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n\n\n\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  border: 1px solid #f8f9fa;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n}\n\n.card-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: white;\n}\n\n.summary-card.vendido[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db, #2980b9);\n}\n\n.summary-card.pagado[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n}\n\n.summary-card.ganancia[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #27ae60, #229954);\n}\n\n.summary-card.ganancia.negative[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n}\n\n.summary-card.ventas[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f39c12, #e67e22);\n}\n\n.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #2c3e50;\n}\n\n.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7f8c8d;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n\n\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f8f9fa;\n}\n\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #2c3e50;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.section-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.btn-action[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: white;\n}\n\n\n\n\n\n.numeros-vendidos-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  margin: 2rem 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  border: 1px solid #f8f9fa;\n  padding: 1.5rem;\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n  margin-top: 0.25rem;\n  font-style: italic;\n}\n\n.sorteos-numeros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  gap: 2rem;\n  margin-top: 1.5rem;\n}\n\n.sorteo-numeros-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n\n.sorteo-numeros-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);\n  border-color: #3498db;\n}\n\n.sorteo-numeros-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f1f3f4;\n}\n\n.sorteo-numeros-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n\n.sorteo-total[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db, #2980b9);\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);\n}\n\n.sucursales-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.sucursal-group[_ngcontent-%COMP%] {\n  background: rgba(248, 249, 250, 0.5);\n  border-radius: 8px;\n  padding: 1rem;\n  border-left: 4px solid #3498db;\n}\n\n.sucursal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.sucursal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #34495e;\n}\n\n.sucursal-total[_ngcontent-%COMP%] {\n  background: rgba(46, 204, 113, 0.1);\n  color: #27ae60;\n  padding: 0.25rem 0.75rem;\n  border-radius: 15px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  border: 1px solid rgba(46, 204, 113, 0.2);\n}\n\n\n\n.top-numeros-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.top-numeros-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #34495e;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.top-numeros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.top-numero-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);\n  color: white;\n  padding: 0.75rem;\n  border-radius: 8px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);\n  transition: all 0.2s ease;\n}\n\n.top-numero-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);\n}\n\n.top-numero-card[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n\n.top-numero-card[_ngcontent-%COMP%]   .cantidad[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin-bottom: 0.25rem;\n}\n\n.top-numero-card[_ngcontent-%COMP%]   .posicion[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  opacity: 0.8;\n}\n\n\n\n.tablero-numeros[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.tablero-numeros[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #34495e;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.numeros-grid-completo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 2px;\n  background: #f8f9fa;\n  padding: 0.5rem;\n  border-radius: 8px;\n  border: 1px solid #e9ecef;\n}\n\n.numero-cell[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 0.5rem 0.25rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-height: 45px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.numero-cell[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  z-index: 10;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n\n.numero-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n\n.numero-venta[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #6c757d;\n  margin-top: 0.1rem;\n}\n\n\n\n.sin-venta[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  color: #adb5bd;\n}\n\n.intensidad-muy-baja[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%);\n  color: #155724;\n}\n\n.intensidad-baja[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);\n  color: #0c5460;\n}\n\n.intensidad-media[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);\n  color: #856404;\n}\n\n.intensidad-alta[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fab1a0 0%, #e17055 100%);\n  color: #721c24;\n}\n\n.intensidad-muy-alta[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fd79a8 0%, #e84393 100%);\n  color: white;\n  font-weight: 700;\n}\n\n.intensidad-muy-alta[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  box-shadow: 0 6px 15px rgba(232, 67, 147, 0.4);\n}\n\n.numeros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 0.75rem;\n}\n\n.numero-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  padding: 0.75rem;\n  text-align: center;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.numero-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  border-color: #3498db;\n}\n\n.numero-item.top-seller[_ngcontent-%COMP%] {\n  border-color: #e67e22;\n  background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);\n}\n\n.numero-item.top-seller[_ngcontent-%COMP%]:hover {\n  border-color: #d35400;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 15px rgba(230, 126, 34, 0.3);\n}\n\n.numero-valor[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin-bottom: 0.5rem;\n}\n\n.numero-info[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.2;\n}\n\n.numero-total[_ngcontent-%COMP%] {\n  color: #27ae60;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n\n.numero-porcentaje[_ngcontent-%COMP%] {\n  color: #3498db;\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n\n.numero-ventas[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.7rem;\n}\n\n.more-numbers[_ngcontent-%COMP%] {\n  background: rgba(108, 117, 125, 0.1);\n  border: 2px dashed #dee2e6;\n  border-radius: 8px;\n  padding: 0.75rem;\n  text-align: center;\n  color: #6c757d;\n  font-size: 0.8rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  transition: all 0.2s ease;\n}\n\n.more-numbers[_ngcontent-%COMP%]:hover {\n  background: rgba(108, 117, 125, 0.15);\n  border-color: #adb5bd;\n}\n\n.more-numbers[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 0.25rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .sorteos-numeros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n  .top-numeros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 0.25rem;\n  }\n  .numeros-grid-completo[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, 1fr);\n    gap: 1px;\n    padding: 0.25rem;\n  }\n  .numero-cell[_ngcontent-%COMP%] {\n    padding: 0.25rem;\n    min-height: 35px;\n  }\n  .numero-label[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .numero-venta[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .top-numeros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .numeros-grid-completo[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.sorteos-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  margin: 2rem 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  border: 1px solid #f8f9fa;\n}\n\n.sorteos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  gap: 1.5rem;\n  padding: 1.5rem;\n}\n\n.sorteo-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e9ecef;\n  border-radius: 12px;\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.sorteo-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);\n  border-color: #3498db;\n}\n\n.sorteo-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #f8f9fa;\n}\n\n.sorteo-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #2c3e50;\n}\n\n.sorteo-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.25rem;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.status-badge.open[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #27ae60, #229954);\n  color: white;\n}\n\n.status-badge.closed[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n  color: white;\n}\n\n.close-time[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #7f8c8d;\n  font-weight: 500;\n}\n\n.sorteo-content[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n\n.winner-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: linear-gradient(135deg, #f8f9fa, #e9ecef);\n  border-radius: 10px;\n}\n\n.winner-number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 2.5rem;\n  font-weight: 800;\n  color: #f39c12;\n  margin-bottom: 0.5rem;\n}\n\n.winner-number[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f39c12;\n}\n\n.factor[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #7f8c8d;\n  font-weight: 600;\n}\n\n.sorteo-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\n  gap: 1rem;\n}\n\n.stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.75rem;\n  border-radius: 8px;\n  border: 2px solid transparent;\n  transition: all 0.2s ease;\n}\n\n.stat-item.vendido[_ngcontent-%COMP%] {\n  background: rgba(52, 152, 219, 0.1);\n  border-color: rgba(52, 152, 219, 0.3);\n}\n\n.stat-item.pagado[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  border-color: rgba(231, 76, 60, 0.3);\n}\n\n.stat-item.ganancia[_ngcontent-%COMP%] {\n  background: rgba(39, 174, 96, 0.1);\n  border-color: rgba(39, 174, 96, 0.3);\n}\n\n.stat-item.ganancia.negative[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.1);\n  border-color: rgba(231, 76, 60, 0.3);\n}\n\n.stat-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #7f8c8d;\n  margin-bottom: 0.25rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.stat-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #2c3e50;\n}\n\n.winner-form[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1.5rem;\n  border-radius: 10px;\n  border: 2px dashed #dee2e6;\n}\n\n.winner-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.winner-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: #495057;\n}\n\n.btn-set-winner[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  background: linear-gradient(135deg, #f39c12, #e67e22);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.btn-set-winner[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: linear-gradient(135deg, #e67e22, #d35400);\n  transform: translateY(-1px);\n}\n\n.btn-set-winner[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.sorteo-open-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #7f8c8d;\n  font-style: italic;\n}\n\n.sorteo-open-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n\n\n\n.ventas-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  margin: 2rem 0;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  border: 1px solid #f8f9fa;\n  padding: 1.5rem;\n}\n\n.ventas-table-container[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  position: relative;\n}\n\n\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n  border-radius: 8px;\n}\n\n.loading-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.loading-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #3498db;\n}\n.loading-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #495057;\n}\n\n.ventas-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n  transition: opacity 0.3s ease;\n}\n.ventas-table.loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.table-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);\n  color: white;\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 1fr;\n  gap: 1rem;\n  padding: 1rem;\n  font-weight: 600;\n  font-size: 0.85rem;\n  letter-spacing: 0.5px;\n}\n\n.table-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 1fr;\n  gap: 1rem;\n  padding: 1rem;\n  border-bottom: 1px solid #f8f9fa;\n  transition: all 0.2s ease;\n  align-items: center;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.btn-table-action[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.6rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  transition: all 0.3s ease;\n  margin-right: 0.5rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 35px;\n  height: 35px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.btn-table-action[_ngcontent-%COMP%]:first-child {\n  background: linear-gradient(135deg, #3498db, #2980b9);\n  color: white;\n}\n.btn-table-action[_ngcontent-%COMP%]:last-child {\n  background: linear-gradient(135deg, #27ae60, #219a52);\n  color: white;\n  margin-right: 0;\n}\n.btn-table-action[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none !important;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1) !important;\n}\n.btn-table-action[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.btn-table-action[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n.btn-table-action[_ngcontent-%COMP%]:hover:not(:disabled):first-child {\n  background: linear-gradient(135deg, #2980b9, #21618c);\n}\n.btn-table-action[_ngcontent-%COMP%]:hover:not(:disabled):last-child {\n  background: linear-gradient(135deg, #219a52, #1e8449);\n}\n\n\n\n.sorteos-config-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.sorteos-config-table[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  margin-top: 1rem;\n}\n\n.config-table-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);\n  color: white;\n  display: grid;\n  grid-template-columns: 2fr 2fr 2fr 1.5fr;\n  gap: 1rem;\n  padding: 1rem 1.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\n.config-table-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.config-table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 2fr 2fr 1.5fr;\n  gap: 1rem;\n  padding: 1rem 1.5rem;\n  border-bottom: 1px solid #f1f3f4;\n  align-items: center;\n  transition: all 0.2s ease;\n  background: white;\n}\n\n.config-table-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: translateX(3px);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n\n.config-table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.config-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.95rem;\n}\n\n.config-label[_ngcontent-%COMP%] {\n  color: #495057;\n  background: #f8f9fa;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  display: inline-block;\n}\n\n.config-time[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-family: \"Courier New\", monospace;\n  font-weight: 600;\n  background: #e9ecef;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  display: inline-block;\n}\n\n.config-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n\n.btn-config-action[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.8rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  min-width: 70px;\n  justify-content: center;\n}\n\n.btn-config-edit[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db, #2980b9);\n  color: white;\n}\n\n.btn-config-edit[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #2980b9, #21618c);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);\n}\n\n.btn-config-delete[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n  color: white;\n}\n\n.btn-config-delete[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #c0392b, #a93226);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);\n}\n\n\n\n.config-actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.btn-config-edit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before {\n  content: \"\\f044\"; \n\n}\n\n.btn-config-delete[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before {\n  content: \"\\f2ed\"; \n\n}\n\n\n\n.accordion-content.collapsed[_ngcontent-%COMP%]   .sorteos-config-table[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media (max-width: 768px) {\n  .config-table-header[_ngcontent-%COMP%], .config-table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n  }\n  .config-table-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .config-table-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    padding: 0.25rem 0;\n  }\n  .config-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin-top: 0.5rem;\n  }\n}\n\n\n.users-table-container[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.user-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n}\n\n.user-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);\n  color: white;\n}\n\n.user-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  border: none;\n}\n\n.user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n  border-bottom: 1px solid #f1f3f4;\n}\n\n.user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  vertical-align: middle;\n  border: none;\n}\n\n.user-email[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 0.95rem;\n}\n\n.user-sucursal[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-style: italic;\n}\n\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n\n.table-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.8rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n\n.table-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.badge.bg-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b) !important;\n  color: white;\n}\n\n.badge.bg-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db, #2980b9) !important;\n  color: white;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.status-badge.active[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #27ae60, #229954);\n  color: white;\n}\n\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #95a5a6, #7f8c8d);\n  color: white;\n}\n\n\n\n.no-data-message[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem;\n  color: #7f8c8d;\n}\n\n.no-data-message[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  display: block;\n  color: #bdc3c7;\n}\n\n.no-data-message[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #6c757d;\n}\n\n.no-data-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #95a5a6;\n}\n\n\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n}\n\n.form-input[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n  background: white;\n}\n\n.form-input[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  font-weight: 500;\n  color: #495057;\n}\n\n.checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0;\n}\n\n.form-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  margin-top: 0.25rem;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n\n.preview-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 2px dashed #dee2e6;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-top: 1rem;\n}\n\n.preview-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #495057;\n}\n\n.sorteo-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.time-badge[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  color: #495057;\n  padding: 0.25rem 0.5rem;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .user-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 1rem;\n    border: 1px solid #e9ecef;\n    border-radius: 8px;\n    padding: 1rem;\n  }\n  .user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.5rem 0;\n    border: none;\n  }\n  .user-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label) \": \";\n    font-weight: 600;\n    color: #495057;\n  }\n  .table-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin-top: 1rem;\n  }\n}\n\n\n\n\n.modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  max-width: 700px;\n  width: 90vw;\n}\n\n.sale-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border-left: 4px solid #3498db;\n}\n\n.info-row.total-row[_ngcontent-%COMP%] {\n  border-left-color: #27ae60;\n  background: #e8f5e8;\n  font-weight: 600;\n}\n\n.info-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n}\n\n.info-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 500;\n}\n\n.numbers-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.numbers-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #2c3e50;\n  margin-bottom: 1rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n.numbers-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n\n.number-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.number-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);\n  color: white;\n  padding: 0.75rem;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(52, 152, 219, 0.3);\n  transition: transform 0.2s ease;\n  min-width: 80px;\n}\n\n.number-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);\n}\n\n.number-card[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n\n.number-card[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  opacity: 0.9;\n}\n\n.numbers-summary[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 1rem;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #dee2e6;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n.summary-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6c757d;\n  font-weight: 500;\n}\n\n.summary-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #2c3e50;\n  font-weight: 600;\n}\n\n.no-numbers[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #6c757d;\n}\n\n.no-numbers[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  color: #ffc107;\n}\n\n.no-numbers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .numbers-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));\n    gap: 0.5rem;\n  }\n  .numbers-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .info-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.25rem;\n  }\n  .info-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    font-weight: 600;\n  }\n}\n\n\n.sorteo-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #6c757d;\n  text-align: center;\n}\n\n.sorteo-loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  color: #007bff;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n.sorteo-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-style: italic;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n\n.btn-set-winner[_ngcontent-%COMP%]:disabled {\n  background: #6c757d !important;\n  border-color: #6c757d !important;\n  cursor: not-allowed !important;\n  opacity: 0.6 !important;\n}\n\n.btn-set-winner[_ngcontent-%COMP%]:disabled:hover {\n  background: #6c757d !important;\n  border-color: #6c757d !important;\n  transform: none !important;\n  box-shadow: none !important;\n}\n\n\n\n.form-input[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa !important;\n  border-color: #dee2e6 !important;\n  color: #6c757d !important;\n  cursor: not-allowed !important;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow-y: auto;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\n  max-height: 90vh;\n  overflow-y: auto;\n  margin: 1rem;\n  pointer-events: all;\n}\n\n.factors-modal[_ngcontent-%COMP%] {\n  max-width: 600px !important;\n  width: 95% !important;\n}\n\n.factors-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n  position: relative;\n}\n\n.factors-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #2c3e50;\n  font-size: 1.2rem;\n}\n\n.sorteo-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n\n.sorteo-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #3498db, #2980b9);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 15px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n\n.winning-number[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e74c3c, #c0392b);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 15px;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n\n.factors-instruction[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  background: linear-gradient(135deg, #e8f5e8, #d4edda);\n  border: 1px solid #c3e6cb;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n.factors-instruction[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-size: 1.1rem;\n  margin-top: 0.1rem;\n}\n\n.factors-instruction[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #155724;\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n\n.factors-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  max-height: 400px;\n  overflow-y: auto;\n  padding-right: 0.5rem;\n}\n\n.factor-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: white;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  padding: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  transition: all 0.2s ease;\n}\n\n.factor-item[_ngcontent-%COMP%]:hover {\n  border-color: #3498db;\n  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.1);\n}\n\n.sucursal-info[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 1rem;\n}\n\n.sucursal-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  color: #2c3e50;\n  font-size: 1rem;\n}\n\n.sucursal-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n}\n\n.sucursal-users[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n\n.sucursal-users[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.8rem;\n}\n\n.factor-input[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  min-width: 120px;\n}\n\n.factor-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n}\n\n.input-with-x[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.input-with-x[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 0.5rem 1.5rem 0.5rem 0.5rem;\n  border: 2px solid #e9ecef;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: center;\n  color: #2c3e50;\n  transition: all 0.2s ease;\n}\n\n.input-with-x[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);\n}\n\n.x-multiplier[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.5rem;\n  color: #3498db;\n  font-weight: 600;\n  font-size: 0.9rem;\n  pointer-events: none;\n}\n\n.loading-factors[_ngcontent-%COMP%], .no-sucursales[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 1rem;\n  text-align: center;\n  color: #6c757d;\n}\n\n.loading-factors[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .no-sucursales[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n\n.loading-factors[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #3498db;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n.no-sucursales[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e74c3c;\n}\n\n.loading-factors[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .no-sucursales[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n\n\n@media (max-width: 768px) {\n  .factors-modal[_ngcontent-%COMP%] {\n    width: 98% !important;\n    margin: 10px !important;\n  }\n  .factor-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n  }\n  .sucursal-info[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n  .factor-input[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n  .input-with-x[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .sorteo-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .resumen-table-card[_ngcontent-%COMP%]   .table-header-card[_ngcontent-%COMP%], .resumen-table-card[_ngcontent-%COMP%]   .table-row-card[_ngcontent-%COMP%], .resumen-table-card[_ngcontent-%COMP%]   .table-footer-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.2rem;\n    text-align: center;\n  }\n  .resumen-table-card[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%], .resumen-table-card[_ngcontent-%COMP%]   .col-factor[_ngcontent-%COMP%], .resumen-table-card[_ngcontent-%COMP%]   .col-vendido[_ngcontent-%COMP%], .resumen-table-card[_ngcontent-%COMP%]   .col-pagado[_ngcontent-%COMP%], .resumen-table-card[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0.2rem;\n    border-bottom: 1px solid #e9ecef;\n  }\n  .resumen-table-card[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%]:before, .resumen-table-card[_ngcontent-%COMP%]   .col-factor[_ngcontent-%COMP%]:before, .resumen-table-card[_ngcontent-%COMP%]   .col-vendido[_ngcontent-%COMP%]:before, .resumen-table-card[_ngcontent-%COMP%]   .col-pagado[_ngcontent-%COMP%]:before, .resumen-table-card[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%]:before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #6c757d;\n    display: block;\n    font-size: 0.7rem;\n    margin-bottom: 0.2rem;\n  }\n  .resumen-sucursales-card[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    padding: 0.75rem;\n  }\n}\n.resumen-modal[_ngcontent-%COMP%] {\n  max-width: 900px;\n  max-height: 80vh;\n  overflow-y: auto;\n}\n.resumen-modal[_ngcontent-%COMP%]   .sorteo-info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 8px;\n}\n.resumen-modal[_ngcontent-%COMP%]   .sorteo-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%], .resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1.5fr 1.5fr 1.5fr 1.5fr;\n  align-items: center;\n  padding: 0.75rem;\n  gap: 0.5rem;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  font-weight: 600;\n  color: #495057;\n  border-bottom: 2px solid #dee2e6;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  background-color: white;\n  border-bottom: 1px solid #e9ecef;\n  transition: background-color 0.2s ease;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f8f9fa;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:nth-child(even):hover {\n  background-color: #e9ecef;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .table-footer[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745, #20c997);\n  color: white;\n  font-weight: 600;\n  border-top: 2px solid #28a745;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-factor[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  color: #6f42c1;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-numero-ganador[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-numero-ganador[_ngcontent-%COMP%]   .cantidad-numero[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #28a745;\n  font-size: 0.9rem;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-numero-ganador[_ngcontent-%COMP%]   .multiplicacion[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #6c757d;\n  margin-top: 2px;\n  font-style: italic;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-vendido[_ngcontent-%COMP%], .resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-pagado[_ngcontent-%COMP%], .resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: \"Courier New\", monospace;\n  font-weight: 500;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-ganancia.positive[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: 600;\n}\n.resumen-modal[_ngcontent-%COMP%]   .resumen-table[_ngcontent-%COMP%]   .col-ganancia.negative[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n\n.resumen-sucursales-card[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #495057;\n  font-size: 1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-header-card[_ngcontent-%COMP%], .resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-row-card[_ngcontent-%COMP%], .resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-footer-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1.2fr 1.2fr 1.2fr;\n  align-items: center;\n  padding: 0.5rem;\n  gap: 0.3rem;\n  font-size: 0.85rem;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-header-card[_ngcontent-%COMP%] {\n  background-color: #495057;\n  color: white;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  font-size: 0.75rem;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-row-card[_ngcontent-%COMP%] {\n  background-color: white;\n  border-bottom: 1px solid #e9ecef;\n  transition: background-color 0.2s ease;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-row-card[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-row-card[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f8f9fa;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-row-card[_ngcontent-%COMP%]:nth-child(even):hover {\n  background-color: #e9ecef;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-footer-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #198754, #20c997);\n  color: white;\n  font-weight: 600;\n  border-top: 2px solid #198754;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-sucursal[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-factor[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  color: #6f42c1;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-vendido[_ngcontent-%COMP%], .resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-pagado[_ngcontent-%COMP%], .resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%] {\n  text-align: right;\n  font-family: \"Courier New\", monospace;\n  font-weight: 500;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-ganancia.positive[_ngcontent-%COMP%] {\n  color: #198754;\n  font-weight: 600;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .col-ganancia.negative[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n.resumen-sucursales-card[_ngcontent-%COMP%]   .resumen-table-card[_ngcontent-%COMP%]   .table-footer-card[_ngcontent-%COMP%]   .col-ganancia[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.numero-ganador-section[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 1.3rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n  font-style: italic;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);\n  border: 2px solid #ffc107;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.2);\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .numero-ganador-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px dashed #ffc107;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .numero-ganador-header[_ngcontent-%COMP%]   .numero-display[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .numero-ganador-header[_ngcontent-%COMP%]   .numero-display[_ngcontent-%COMP%]   .numero-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 3rem;\n  font-weight: 900;\n  color: #ff6f00;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\n  font-family: \"Arial Black\", sans-serif;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .numero-ganador-header[_ngcontent-%COMP%]   .numero-display[_ngcontent-%COMP%]   .numero-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  color: #795548;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-top: 0.5rem;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .numero-ganador-header[_ngcontent-%COMP%]   .totales-general[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .numero-ganador-header[_ngcontent-%COMP%]   .totales-general[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .numero-ganador-header[_ngcontent-%COMP%]   .totales-general[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #2e7d32;\n  font-family: \"Courier New\", monospace;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .numero-ganador-header[_ngcontent-%COMP%]   .totales-general[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: #5d4037;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 0.25rem;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1.5fr 1.5fr;\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  background: rgba(255, 193, 7, 0.1);\n  border-radius: 6px;\n  font-weight: 600;\n  color: #5d4037;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 0.5rem;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1.5fr 1.5fr;\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  border-bottom: 1px solid rgba(255, 193, 7, 0.2);\n  align-items: center;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 193, 7, 0.05);\n  border-radius: 4px;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-row[_ngcontent-%COMP%]   .sucursal-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-row[_ngcontent-%COMP%]   .factor-value[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  color: #6f42c1;\n  background: rgba(111, 66, 193, 0.1);\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  display: inline-block;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-row[_ngcontent-%COMP%]   .cantidad-value[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Courier New\", monospace;\n  font-weight: 600;\n  color: #28a745;\n}\n.numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-row[_ngcontent-%COMP%]   .pago-value[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Courier New\", monospace;\n  font-weight: 700;\n  color: #dc3545;\n  background: rgba(220, 53, 69, 0.1);\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n}\n@media (max-width: 768px) {\n  .numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .numero-ganador-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n    text-align: center;\n  }\n  .numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .numero-ganador-header[_ngcontent-%COMP%]   .totales-general[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-header[_ngcontent-%COMP%], .numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.5rem;\n  }\n  .numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .numero-ganador-section[_ngcontent-%COMP%]   .numero-ganador-card[_ngcontent-%COMP%]   .sucursales-detalle[_ngcontent-%COMP%]   .detalle-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-align: center !important;\n    padding: 0.25rem 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0xvdGVyaWElMjB2MS9sb3RlcmlhL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsMERBQUE7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsNkRBQUE7RUFDQSw0REFBQTtBRENGOztBQ0VBLHVCQUFBO0FBQ0E7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FEQ0Y7O0FDRUE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURDRjs7QUNFQTtFQUNFLGNBQUE7QURDRjs7QUNFQTtFQUNFLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBRENGOztBQ0VBO0VBQ0UsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0FEQ0Y7O0FDRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQ0FBQTtFQUNBLHFDQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQ0FBQTtFQUNBLHFDQUFBO0FEQ0Y7O0FDRUE7RUFDRSxrQ0FBQTtFQUNBLG9DQUFBO0FEQ0Y7O0FDRUE7RUFDRSxrQ0FBQTtFQUNBLG9DQUFBO0FEQ0Y7O0FDRUEseUJBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JB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RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FEakRaO0FDd0RNO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FEdERSO0FDd0RRO0VBQ0Usa0JBQUE7QUR0RFY7QUN3RFU7RUFDRSxnQkFBQTtBRHREWjtBQzJETTtFQUNFLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7QUR6RFI7QUMyRFE7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0FEekRWO0FDNERRO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FEMURWO0FDNkRRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBRDNEVjtBQzhEUTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUQ1RFY7QUMrRFE7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FEN0RWO0FDb0VFO0VBRUk7SUFDRSxzQkFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtFRG5FTjtFQ3FFTTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFRG5FUjtFQ3dFTTs7SUFFRSwwQkFBQTtJQUNBLFdBQUE7RUR0RVI7RUN3RVE7O0lBQ0UsNkJBQUE7SUFDQSxrQkFBQTtFRHJFVjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogQURNSU4gUEFORUwgLSBFU1RJTE8gQ09OIEFDT1JERcODwpNOIFkgTU9EQUxFUyBDRU5UUkFET1MgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuNC4wL2Nzcy9hbGwubWluLmNzc1wiKTtcbi5hZG1pbi1pbnRlcmZhY2Uge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2U5ZWNlZiAxMDAlKTtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi8qID09PT09IEhFQURFUiA9PT09PSAqL1xuLmhlYWRlci1iYXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMmMzZTUwIDAlLCAjMzQ0OTVlIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5hZG1pbi10aXRsZSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYWRtaW4tdGl0bGUgaSB7XG4gIGNvbG9yOiAjMzQ5OGRiO1xufVxuXG4uYnRuLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmJ0bi1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC41KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uaGVhZGVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5idG4tdXNlcnMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ2LCAyMDQsIDExMywgMC4yKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDQ2LCAyMDQsIDExMywgMC4zKTtcbn1cblxuLmJ0bi11c2Vyczpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDYsIDIwNCwgMTEzLCAwLjMpO1xuICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDIwNCwgMTEzLCAwLjUpO1xufVxuXG4uYnRuLWNlcnJhciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMxLCA3NiwgNjAsIDAuMik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzEsIDc2LCA2MCwgMC4zKTtcbn1cblxuLmJ0bi1jZXJyYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjMpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjMxLCA3NiwgNjAsIDAuNSk7XG59XG5cbi8qID09PT09IEFDT1JERcODwpNOID09PT09ICovXG4uYWNjb3JkaW9uLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luOiAxLjVyZW0gMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xufVxuXG4uYWNjb3JkaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDQ5NWUgMCUsICMyYzNlNTAgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmFjY29yZGlvbi1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjM2M1MDcwIDAlLCAjMzQ0OTVlIDEwMCUpO1xufVxuXG4uYWNjb3JkaW9uLWhlYWRlciBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYWNjb3JkaW9uLWhlYWRlciBpLmZhLWNoZXZyb24tZG93biB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uYWNjb3JkaW9uLWhlYWRlciBpLmZhLWNoZXZyb24tZG93bi5yb3RhdGVkIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmFjY29yZGlvbi1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2U7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYWNjb3JkaW9uLWNvbnRlbnQuc2hvdyB7XG4gIG1heC1oZWlnaHQ6IDIwMDBweDtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuXG4vKiA9PT09PSBNT0RBTEVTIENFTlRSQURPUyA9PT09PSAqL1xuLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgei1pbmRleDogMTA1MDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1vZGFsLmZhZGUge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGxpbmVhcjtcbn1cblxuLm1vZGFsLnNob3cge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAxcmVtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgMTBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0NDk1ZSAwJSwgIzJjM2U1MCAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uYnRuLWNsb3NlLCAuY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnRuLWNsb3NlOmhvdmVyLCAuY2xvc2U6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYnRuLW1vZGFsIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmJ0bi1tb2RhbC5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1tb2RhbC5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICMyOTgwYjk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmJ0bi1tb2RhbC5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLW1vZGFsLmJ0bi1zZWNvbmRhcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5idG4tbW9kYWw6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi8qID09PT09IElDT05PUyBERSBGT05UQVdFU09NRSA9PT09PSAqL1xuLmZhcywgLmZhIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBmb250LXdlaWdodDogOTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLyogRXNwZWPDg8KtZmljb3MgcGFyYSBpY29ub3MgZGUgYWNjaW9uZXMgKi9cbi5mYS1lZGl0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDQ0XCI7XG59XG5cbi5mYS10cmFzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFmOFwiO1xufVxuXG4uZmEta2V5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDg0XCI7XG59XG5cbi5mYS10b2dnbGUtb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDVcIjtcbn1cblxuLmZhLXRvZ2dsZS1vZmY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDRcIjtcbn1cblxuLmZhLXVzZXItcGx1czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIzNFwiO1xufVxuXG4uZmEtcGx1czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2N1wiO1xufVxuXG4uZmEtYnVnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTg4XCI7XG59XG5cbi5mYS1kYXRhYmFzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjMFwiO1xufVxuXG4uZmEtY2xvY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMTdcIjtcbn1cblxuLmZhLXVzZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGMwXCI7XG59XG5cbi5mYS1jaGV2cm9uLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNzhcIjtcbn1cblxuLmZhLXRpbWVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XG59XG5cbi5mYS1zYXZlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGM3XCI7XG59XG5cbi5mYS1zeW5jOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDIxXCI7XG59XG5cbi8qID09PT09IEZJTFRST1MgPT09PT0gKi9cbi5maWx0ZXJzLWJhciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBnYXA6IDEuNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmlsdGVyLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIG1pbi13aWR0aDogMTYwcHg7XG59XG5cbi5maWx0ZXItZ3JvdXAgbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuLmZpbHRlci1ncm91cCBsYWJlbCBpIHtcbiAgY29sb3I6ICMzNDk4ZGI7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGNvbG9yOiAjMzQ5OGRiO1xufVxuLmxvYWRpbmctaW5kaWNhdG9yIGkge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5mb3JtLWNvbnRyb2wsIC5mb3JtLWlucHV0IHtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmZvcm0tY29udHJvbDpkaXNhYmxlZCwgLmZvcm0taW5wdXQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMSk7XG59XG5cbi5maWx0ZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC43NXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5idG4tZmlsdGVyIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmJ0bi1maWx0ZXIuYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tZmlsdGVyLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzI5ODBiOTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uYnRuLWZpbHRlci5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWZpbHRlci5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzVhNjI2ODtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4vKiA9PT09PSBFWFBPUlRBQ0nDg8KTTiA9PT09PSAqL1xuLmV4cG9ydC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllY2VmO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uZXhwb3J0LWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5leHBvcnQtbGFiZWwgaSB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5idG4tZXhwb3J0IHtcbiAgcGFkZGluZzogMC42cmVtIDEuMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmJ0bi1leHBvcnQ6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWV4cG9ydDpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5idG4tZXhwb3J0LmJ0bi1leGNlbCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyMTg4MzggMCUsICMyOGE3NDUgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5idG4tZXhwb3J0LmJ0bi1leGNlbDpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxZTdlMzQgMCUsICMyMTg4MzggMTAwJSk7XG59XG4uYnRuLWV4cG9ydC5idG4tZXhjZWwgaSB7XG4gIGNvbG9yOiAjZDRlZGRhO1xufVxuXG4uYnRuLWV4cG9ydC5idG4tcGRmIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RjMjYyNiAwJSwgI2VmNDQ0NCAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJ0bi1leHBvcnQuYnRuLXBkZjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNiOTFjMWMgMCUsICNkYzI2MjYgMTAwJSk7XG59XG4uYnRuLWV4cG9ydC5idG4tcGRmIGkge1xuICBjb2xvcjogI2ZlY2FjYTtcbn1cblxuLyogPT09PT0gQ09OVEVOSURPIFBSSU5DSVBBTCA9PT09PSAqL1xuLm1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLyogPT09PT0gQ0FSRFMgREUgUkVTVU1FTiA9PT09PSAqL1xuLnN1bW1hcnktY2FyZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ2FwOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5zdW1tYXJ5LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY5ZmE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLnN1bW1hcnktY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2FyZC1pY29uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdW1tYXJ5LWNhcmQudmVuZGlkbyAuY2FyZC1pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0OThkYiwgIzI5ODBiOSk7XG59XG5cbi5zdW1tYXJ5LWNhcmQucGFnYWRvIC5jYXJkLWljb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTc0YzNjLCAjYzAzOTJiKTtcbn1cblxuLnN1bW1hcnktY2FyZC5nYW5hbmNpYSAuY2FyZC1pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI3YWU2MCwgIzIyOTk1NCk7XG59XG5cbi5zdW1tYXJ5LWNhcmQuZ2FuYW5jaWEubmVnYXRpdmUgLmNhcmQtaWNvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNzRjM2MsICNjMDM5MmIpO1xufVxuXG4uc3VtbWFyeS1jYXJkLnZlbnRhcyAuY2FyZC1pY29uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YzOWMxMiwgI2U2N2UyMik7XG59XG5cbi5jYXJkLWNvbnRlbnQgaDMge1xuICBtYXJnaW46IDAgMCAwLjI1cmVtIDA7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzJjM2U1MDtcbn1cblxuLmNhcmQtY29udGVudCBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzdmOGM4ZDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qID09PT09IFNFQ0NJT05FUyA9PT09PSAqL1xuLnNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y4ZjlmYTtcbn1cblxuLnNlY3Rpb24taGVhZGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uc2VjdGlvbi1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5idG4tYWN0aW9uIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiA9PT09PSBTRUNDSU9ORVMgREUgU09SVEVPUyA9PT09PSAqL1xuLyogPT09PT0gU0VDQ0nDg8KTTiBERSBOw4PCmk1FUk9TIFZFTkRJRE9TIFBPUiBTT1JURU8gPT09PT0gKi9cbi5udW1lcm9zLXZlbmRpZG9zLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y4ZjlmYTtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuXG4uc2VjdGlvbi1zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uc29ydGVvcy1udW1lcm9zLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgZ2FwOiAycmVtO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5zb3J0ZW8tbnVtZXJvcy1jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2Y4ZjlmYSAxMDAlKTtcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMS41cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5zb3J0ZW8tbnVtZXJvcy1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDZweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xufVxuXG4uc29ydGVvLW51bWVyb3MtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YxZjNmNDtcbn1cblxuLnNvcnRlby1udW1lcm9zLWhlYWRlciBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4uc29ydGVvLXRvdGFsIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0OThkYiwgIzI5ODBiOSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XG59XG5cbi5zdWN1cnNhbGVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41cmVtO1xufVxuXG4uc3VjdXJzYWwtZ3JvdXAge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjQ5LCAyNTAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMzQ5OGRiO1xufVxuXG4uc3VjdXJzYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uc3VjdXJzYWwtaGVhZGVyIGg1IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzQ0OTVlO1xufVxuXG4uc3VjdXJzYWwtdG90YWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ2LCAyMDQsIDExMywgMC4xKTtcbiAgY29sb3I6ICMyN2FlNjA7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ2LCAyMDQsIDExMywgMC4yKTtcbn1cblxuLyogVG9wIG7Dg8K6bWVyb3MgbcODwqFzIHZlbmRpZG9zICovXG4udG9wLW51bWVyb3Mtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnRvcC1udW1lcm9zLXNlY3Rpb24gaDYge1xuICBtYXJnaW46IDAgMCAwLjc1cmVtIDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzM0NDk1ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi50b3AtbnVtZXJvcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ2FwOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi50b3AtbnVtZXJvLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiIDAlLCAjMjk4MGI5IDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi50b3AtbnVtZXJvLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSg1MiwgMTUyLCAyMTksIDAuNCk7XG59XG5cbi50b3AtbnVtZXJvLWNhcmQgLm51bWVybyB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4udG9wLW51bWVyby1jYXJkIC5jYW50aWRhZCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4udG9wLW51bWVyby1jYXJkIC5wb3NpY2lvbiB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi8qIFRhYmxlcm8gY29tcGxldG8gZGUgbsODwrptZXJvcyAqL1xuLnRhYmxlcm8tbnVtZXJvcyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi50YWJsZXJvLW51bWVyb3MgaDYge1xuICBtYXJnaW46IDAgMCAwLjc1cmVtIDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzM0NDk1ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5udW1lcm9zLWdyaWQtY29tcGxldG8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ2FwOiAycHg7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xufVxuXG4ubnVtZXJvLWNlbGwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwLjVyZW0gMC4yNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubnVtZXJvLWNlbGw6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4ubnVtZXJvLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4ubnVtZXJvLXZlbnRhIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW4tdG9wOiAwLjFyZW07XG59XG5cbi8qIEludGVuc2lkYWRlcyBkZSBjb2xvciAqL1xuLnNpbi12ZW50YSB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGNvbG9yOiAjYWRiNWJkO1xufVxuXG4uaW50ZW5zaWRhZC1tdXktYmFqYSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlOGY1ZTggMCUsICNkNGVkZGEgMTAwJSk7XG4gIGNvbG9yOiAjMTU1NzI0O1xufVxuXG4uaW50ZW5zaWRhZC1iYWphIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2QxZWNmMSAwJSwgI2JlZTVlYiAxMDAlKTtcbiAgY29sb3I6ICMwYzU0NjA7XG59XG5cbi5pbnRlbnNpZGFkLW1lZGlhIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZWFhNyAwJSwgI2ZkY2I2ZSAxMDAlKTtcbiAgY29sb3I6ICM4NTY0MDQ7XG59XG5cbi5pbnRlbnNpZGFkLWFsdGEge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmFiMWEwIDAlLCAjZTE3MDU1IDEwMCUpO1xuICBjb2xvcjogIzcyMWMyNDtcbn1cblxuLmludGVuc2lkYWQtbXV5LWFsdGEge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmQ3OWE4IDAlLCAjZTg0MzkzIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pbnRlbnNpZGFkLW11eS1hbHRhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMjMyLCA2NywgMTQ3LCAwLjQpO1xufVxuXG4ubnVtZXJvcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTIwcHgsIDFmcikpO1xuICBnYXA6IDAuNzVyZW07XG59XG5cbi5udW1lcm8taXRlbSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubnVtZXJvLWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XG59XG5cbi5udW1lcm8taXRlbS50b3Atc2VsbGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTY3ZTIyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZlYWE3IDAlLCAjZmRjYjZlIDEwMCUpO1xufVxuXG4ubnVtZXJvLWl0ZW0udG9wLXNlbGxlcjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2QzNTQwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDZweCAxNXB4IHJnYmEoMjMwLCAxMjYsIDM0LCAwLjMpO1xufVxuXG4ubnVtZXJvLXZhbG9yIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5udW1lcm8taW5mbyB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLm51bWVyby10b3RhbCB7XG4gIGNvbG9yOiAjMjdhZTYwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4ubnVtZXJvLXBvcmNlbnRhamUge1xuICBjb2xvcjogIzM0OThkYjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLm51bWVyby12ZW50YXMge1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG5cbi5tb3JlLW51bWJlcnMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgMTE3LCAxMjUsIDAuMSk7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZGVlMmU2O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5tb3JlLW51bWJlcnM6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgMTE3LCAxMjUsIDAuMTUpO1xuICBib3JkZXItY29sb3I6ICNhZGI1YmQ7XG59XG5cbi5tb3JlLW51bWJlcnMgaSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLyogUmVzcG9uc2l2ZSBwYXJhIG7Dg8K6bWVyb3MgdmVuZGlkb3MgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc29ydGVvcy1udW1lcm9zLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICAudG9wLW51bWVyb3MtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBnYXA6IDAuMjVyZW07XG4gIH1cbiAgLm51bWVyb3MtZ3JpZC1jb21wbGV0byB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICBnYXA6IDFweDtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICB9XG4gIC5udW1lcm8tY2VsbCB7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xuICB9XG4gIC5udW1lcm8tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICB9XG4gIC5udW1lcm8tdmVudGEge1xuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnRvcC1udW1lcm9zLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cbiAgLm51bWVyb3MtZ3JpZC1jb21wbGV0byB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgfVxufVxuLnNvcnRlb3Mtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW46IDJyZW0gMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xufVxuXG4uc29ydGVvcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XG4gIGdhcDogMS41cmVtO1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi5zb3J0ZW8tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNvcnRlby1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiAwIDhweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1jb2xvcjogIzM0OThkYjtcbn1cblxuLnNvcnRlby1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcbn1cblxuLnNvcnRlby1oZWFkZXIgaDQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzJjM2U1MDtcbn1cblxuLnNvcnRlby1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGdhcDogMC4yNXJlbTtcbn1cblxuLnN0YXR1cy1iYWRnZSB7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnN0YXR1cy1iYWRnZS5vcGVuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI3YWU2MCwgIzIyOTk1NCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXR1cy1iYWRnZS5jbG9zZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTc0YzNjLCAjYzAzOTJiKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2xvc2UtdGltZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzdmOGM4ZDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNvcnRlby1jb250ZW50IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi53aW5uZXItc2VjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjZTllY2VmKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLndpbm5lci1udW1iZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogI2YzOWMxMjtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ud2lubmVyLW51bWJlciBpIHtcbiAgY29sb3I6ICNmMzljMTI7XG59XG5cbi5mYWN0b3Ige1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjN2Y4YzhkO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc29ydGVvLXN0YXRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbn1cblxuLnN0YXQtaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLnN0YXQtaXRlbS52ZW5kaWRvIHtcbiAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XG59XG5cbi5zdGF0LWl0ZW0ucGFnYWRvIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjMpO1xufVxuXG4uc3RhdC1pdGVtLmdhbmFuY2lhIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTc0LCA5NiwgMC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM5LCAxNzQsIDk2LCAwLjMpO1xufVxuXG4uc3RhdC1pdGVtLmdhbmFuY2lhLm5lZ2F0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDc2LCA2MCwgMC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjMpO1xufVxuXG4uc3RhdC1pdGVtIC5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM3ZjhjOGQ7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnN0YXQtaXRlbSAudmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4ud2lubmVyLWZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZGVlMmU2O1xufVxuXG4ud2lubmVyLWZvcm0gLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ud2lubmVyLWZvcm0gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLmJ0bi1zZXQtd2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMzljMTIsICNlNjdlMjIpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmJ0bi1zZXQtd2lubmVyOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U2N2UyMiwgI2QzNTQwMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmJ0bi1zZXQtd2lubmVyOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uc29ydGVvLW9wZW4tbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcbiAgY29sb3I6ICM3ZjhjOGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnNvcnRlby1vcGVuLW1lc3NhZ2UgaSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogPT09PT0gU0VDQ0nDg8KTTiBERSBWRU5UQVMgPT09PT0gKi9cbi52ZW50YXMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW46IDJyZW0gMDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xuICBwYWRkaW5nOiAxLjVyZW07XG59XG5cbi52ZW50YXMtdGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIExvYWRpbmcgb3ZlcmxheSBwYXJhIGZpbHRyb3MgKi9cbi5sb2FkaW5nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmxvYWRpbmctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmxvYWRpbmctY29udGVudCBpIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogIzM0OThkYjtcbn1cbi5sb2FkaW5nLWNvbnRlbnQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi52ZW50YXMtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cbi52ZW50YXMtdGFibGUubG9hZGluZyB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50YWJsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ0OTVlIDAlLCAjMmMzZTUwIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDEuNWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnRhYmxlLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGFibGUtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMS41ZnIgMWZyIDFmciAxZnIgMWZyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOWZhO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFibGUtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnRhYmxlLXJvdzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmJ0bi10YWJsZS1hY3Rpb24ge1xuICBwYWRkaW5nOiAwLjRyZW0gMC42cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmJ0bi10YWJsZS1hY3Rpb246Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiLCAjMjk4MGI5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJ0bi10YWJsZS1hY3Rpb246bGFzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyN2FlNjAsICMyMTlhNTIpO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5idG4tdGFibGUtYWN0aW9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xufVxuLmJ0bi10YWJsZS1hY3Rpb24gaSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uYnRuLXRhYmxlLWFjdGlvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4uYnRuLXRhYmxlLWFjdGlvbjpob3Zlcjpub3QoOmRpc2FibGVkKTpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOTgwYjksICMyMTYxOGMpO1xufVxuLmJ0bi10YWJsZS1hY3Rpb246aG92ZXI6bm90KDpkaXNhYmxlZCk6bGFzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyMTlhNTIsICMxZTg0NDkpO1xufVxuXG4vKiA9PT09PSBDT05GSUdVUkFDScODwpNOIERFIFNPUlRFT1MgPT09PT0gKi9cbi5zb3J0ZW9zLWNvbmZpZy1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLnNvcnRlb3MtY29uZmlnLXRhYmxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmNvbmZpZy10YWJsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ0OTVlIDAlLCAjMmMzZTUwIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAyZnIgMS41ZnI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb25maWctdGFibGUtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb25maWctdGFibGUtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDJmciAxLjVmcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYzZjQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY29uZmlnLXRhYmxlLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5jb25maWctdGFibGUtcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY29uZmlnLW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuXG4uY29uZmlnLWxhYmVsIHtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jb25maWctdGltZSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbmZpZy1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5idG4tY29uZmlnLWFjdGlvbiB7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNyZW07XG4gIG1pbi13aWR0aDogNzBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idG4tY29uZmlnLWVkaXQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiLCAjMjk4MGI5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWNvbmZpZy1lZGl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI5ODBiOSwgIzIxNjE4Yyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcbn1cblxuLmJ0bi1jb25maWctZGVsZXRlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U3NGMzYywgI2MwMzkyYik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1jb25maWctZGVsZXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2MwMzkyYiwgI2E5MzIyNik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDIzMSwgNzYsIDYwLCAwLjMpO1xufVxuXG4vKiBJY29ub3MgZXNwZWPDg8KtZmljb3MgcGFyYSBsYSB0YWJsYSBkZSBjb25maWd1cmFjacODwrNuICovXG4uY29uZmlnLWFjdGlvbnMgaSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uYnRuLWNvbmZpZy1lZGl0IGk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNDRcIjsgLyogZmEtZWRpdCAqL1xufVxuXG4uYnRuLWNvbmZpZy1kZWxldGUgaTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJlZFwiOyAvKiBmYS10cmFzaCAqL1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgd2hlbiBlbCBhY29yZGXDg8KzbiBlc3TDg8KhIGNlcnJhZG8gKi9cbi5hY2NvcmRpb24tY29udGVudC5jb2xsYXBzZWQgLnNvcnRlb3MtY29uZmlnLXRhYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogTWVqb3JhciByZXNwb25zaXZlIHBhcmEgbGEgdGFibGEgZGUgY29uZmlndXJhY2nDg8KzbiAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb25maWctdGFibGUtaGVhZGVyLFxuICAuY29uZmlnLXRhYmxlLXJvdyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cbiAgLmNvbmZpZy10YWJsZS1oZWFkZXIgPiBkaXYsXG4gIC5jb25maWctdGFibGUtcm93ID4gZGl2IHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDA7XG4gIH1cbiAgLmNvbmZpZy1hY3Rpb25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH1cbn1cbi8qID09PT09IEdFU1RJw4PCk04gREUgVVNVQVJJT1MgPT09PT0gKi9cbi51c2Vycy10YWJsZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi51c2VyLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbi51c2VyLXRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0NDk1ZSAwJSwgIzJjM2U1MCAxMDAlKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlci10YWJsZSB0aGVhZCB0aCB7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi51c2VyLXRhYmxlIHRib2R5IHRyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYzZjQ7XG59XG5cbi51c2VyLXRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnVzZXItdGFibGUgdGJvZHkgdHI6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi51c2VyLXRhYmxlIHRib2R5IHRkIHtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnVzZXItZW1haWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xufVxuXG4udXNlci1zdWN1cnNhbCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi50YWJsZS1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi50YWJsZS1hY3Rpb25zIC5idG4ge1xuICBwYWRkaW5nOiAwLjRyZW0gMC44cmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNyZW07XG59XG5cbi50YWJsZS1hY3Rpb25zIC5idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmJhZGdlIHtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uYmFkZ2UuYmctZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U3NGMzYywgI2MwMzkyYikgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFkZ2UuYmctaW5mbyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDk4ZGIsICMyOTgwYjkpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXR1cy1iYWRnZSB7XG4gIHBhZGRpbmc6IDAuMzVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLnN0YXR1cy1iYWRnZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjdhZTYwLCAjMjI5OTU0KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3RhdHVzLWJhZGdlLmluYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzk1YTVhNiwgIzdmOGM4ZCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogTWVuc2FqZSBkZSBubyBkYXRvcyAqL1xuLm5vLWRhdGEtbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogM3JlbSAycmVtO1xuICBjb2xvcjogIzdmOGM4ZDtcbn1cblxuLm5vLWRhdGEtbWVzc2FnZSBpIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNiZGMzYzc7XG59XG5cbi5uby1kYXRhLW1lc3NhZ2UgaDQge1xuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNmM3NTdkO1xufVxuXG4ubm8tZGF0YS1tZXNzYWdlIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgY29sb3I6ICM5NWE1YTY7XG59XG5cbi8qIE1vZGFsZXMgZGUgdXN1YXJpbyAqL1xuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuXG4uZm9ybS1ncm91cCBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmZvcm0taW5wdXQsIC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZm9ybS1pbnB1dDpmb2N1cywgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzM0OThkYjtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjEpO1xufVxuXG4uY2hlY2tib3gtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLmNoZWNrYm94LWxhYmVsIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMDtcbn1cblxuLmZvcm0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cblxuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xufVxuXG4ucHJldmlldy1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNkZWUyZTY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLnByZXZpZXctY2FyZCBoNiB7XG4gIG1hcmdpbjogMCAwIDAuNzVyZW0gMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4uc29ydGVvLXByZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNzVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnRpbWUtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG59XG5cbi8qIFJlc3BvbnNpdmUgcGFyYSB1c3VhcmlvcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC51c2VyLXRhYmxlIHRoZWFkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC51c2VyLXRhYmxlIHRib2R5IHRyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cbiAgLnVzZXItdGFibGUgdGJvZHkgdGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAudXNlci10YWJsZSB0Ym9keSB0ZDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpIFwiOiBcIjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICB9XG4gIC50YWJsZS1hY3Rpb25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG59XG4vKiA9PT09PSBNT0RBTCBERSBERVRBTExFUyBERSBWRU5UQSA9PT09PSAqL1xuLyogTW9kYWwgZXNwZWPDg8KtZmljbyBwYXJhIGRldGFsbGVzIGRlIHZlbnRhICovXG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICB3aWR0aDogOTB2dztcbn1cblxuLnNhbGUtaW5mby1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5pbmZvLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMzNDk4ZGI7XG59XG5cbi5pbmZvLXJvdy50b3RhbC1yb3cge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzI3YWU2MDtcbiAgYmFja2dyb3VuZDogI2U4ZjVlODtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmluZm8tcm93IC5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmluZm8tcm93IC52YWx1ZSB7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubnVtYmVycy1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4ubnVtYmVycy1zZWN0aW9uIGg0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm51bWJlcnMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5udW1iZXItaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubnVtYmVyLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiIDAlLCAjMjk4MGI5IDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICBtaW4td2lkdGg6IDgwcHg7XG59XG5cbi5udW1iZXItY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC40KTtcbn1cblxuLm51bWJlci1jYXJkIC5udW1iZXIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLm51bWJlci1jYXJkIC5hbW91bnQge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4ubnVtYmVycy1zdW1tYXJ5IHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5zdW1tYXJ5LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMjVyZW07XG59XG5cbi5zdW1tYXJ5LWl0ZW0gLmxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1bW1hcnktaXRlbSAudmFsdWUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uby1udW1iZXJzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cblxuLm5vLW51bWJlcnMgaSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICNmZmMxMDc7XG59XG5cbi5uby1udW1iZXJzIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLyogUmVzcG9uc2l2ZSBwYXJhIG1vZGFsIGRlIGRldGFsbGVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm51bWJlcnMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoODBweCwgMWZyKSk7XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cbiAgLm51bWJlcnMtc3VtbWFyeSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFyZW07XG4gIH1cbiAgLmluZm8tcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMC4yNXJlbTtcbiAgfVxuICAuaW5mby1yb3cgLnZhbHVlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG4vKiA9PT09PSBOVUVWT1MgRVNUSUxPUyBQQVJBIEVTVEFETyBERSBDQVJHQSA9PT09PSAqL1xuLnNvcnRlby1sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGNvbG9yOiAjNmM3NTdkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb3J0ZW8tbG9hZGluZyBpIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogIzAwN2JmZjtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLnNvcnRlby1sb2FkaW5nIHNwYW4ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLyogTWVqb3JhciBlbCBlc3RhZG8gZGlzYWJsZWQgZGUgYm90b25lcyAqL1xuLmJ0bi1zZXQtd2lubmVyOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzZjNzU3ZCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjYgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1zZXQtd2lubmVyOmRpc2FibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzZjNzU3ZCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogTWVqb3JhciBpbnB1dHMgZGlzYWJsZWQgKi9cbi5mb3JtLWlucHV0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkZWUyZTYgIWltcG9ydGFudDtcbiAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xufVxuXG4vKiA9PT09PSBNT0RBTCBERSBGQUNUT1JFUyBQT1IgU1VDVVJTQUwgPT09PT0gKi9cbi5tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgei1pbmRleDogMTA1MDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luOiAxcmVtO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uZmFjdG9ycy1tb2RhbCB7XG4gIG1heC13aWR0aDogNjAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufVxuXG4uZmFjdG9ycy1tb2RhbCAubW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mYWN0b3JzLW1vZGFsIC5tb2RhbC1oZWFkZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5zb3J0ZW8taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4uc29ydGVvLWJhZGdlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0OThkYiwgIzI5ODBiOSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi53aW5uaW5nLW51bWJlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNzRjM2MsICNjMDM5MmIpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZmFjdG9ycy1pbnN0cnVjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDAuNzVyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlOGY1ZTgsICNkNGVkZGEpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNlNmNiO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmZhY3RvcnMtaW5zdHJ1Y3Rpb24gaSB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbWFyZ2luLXRvcDogMC4xcmVtO1xufVxuXG4uZmFjdG9ycy1pbnN0cnVjdGlvbiBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzE1NTcyNDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5mYWN0b3JzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5mYWN0b3ItaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4uZmFjdG9yLWl0ZW06aG92ZXIge1xuICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMSk7XG59XG5cbi5zdWN1cnNhbC1pbmZvIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uc3VjdXJzYWwtbmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uc3VjdXJzYWwtbmFtZSBpIHtcbiAgY29sb3I6ICMzNDk4ZGI7XG59XG5cbi5zdWN1cnNhbC11c2VycyB7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG59XG5cbi5zdWN1cnNhbC11c2VycyBzbWFsbCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmZhY3Rvci1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbn1cblxuLmZhY3Rvci1pbnB1dCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmlucHV0LXdpdGgteCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0LXdpdGgteCBpbnB1dCB7XG4gIHdpZHRoOiA4MHB4O1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtIDAuNXJlbSAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4uaW5wdXQtd2l0aC14IGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMSk7XG59XG5cbi54LW11bHRpcGxpZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwLjVyZW07XG4gIGNvbG9yOiAjMzQ5OGRiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5sb2FkaW5nLWZhY3RvcnMsXG4ubm8tc3VjdXJzYWxlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAzcmVtIDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi5sb2FkaW5nLWZhY3RvcnMgaSxcbi5uby1zdWN1cnNhbGVzIGkge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmxvYWRpbmctZmFjdG9ycyBpIHtcbiAgY29sb3I6ICMzNDk4ZGI7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5uby1zdWN1cnNhbGVzIGkge1xuICBjb2xvcjogI2U3NGMzYztcbn1cblxuLmxvYWRpbmctZmFjdG9ycyBwLFxuLm5vLXN1Y3Vyc2FsZXMgcCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiBSZXNwb25zaXZlIHBhcmEgbW9kYWwgZGUgZmFjdG9yZXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZmFjdG9ycy1tb2RhbCB7XG4gICAgd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5mYWN0b3ItaXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDFyZW07XG4gIH1cbiAgLnN1Y3Vyc2FsLWluZm8ge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuZmFjdG9yLWlucHV0IHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuICAuaW5wdXQtd2l0aC14IGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc29ydGVvLWluZm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cbiAgLnJlc3VtZW4tdGFibGUtY2FyZCAudGFibGUtaGVhZGVyLWNhcmQsXG4gIC5yZXN1bWVuLXRhYmxlLWNhcmQgLnRhYmxlLXJvdy1jYXJkLFxuICAucmVzdW1lbi10YWJsZS1jYXJkIC50YWJsZS1mb290ZXItY2FyZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAwLjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5yZXN1bWVuLXRhYmxlLWNhcmQgLmNvbC1zdWN1cnNhbCxcbiAgLnJlc3VtZW4tdGFibGUtY2FyZCAuY29sLWZhY3RvcixcbiAgLnJlc3VtZW4tdGFibGUtY2FyZCAuY29sLXZlbmRpZG8sXG4gIC5yZXN1bWVuLXRhYmxlLWNhcmQgLmNvbC1wYWdhZG8sXG4gIC5yZXN1bWVuLXRhYmxlLWNhcmQgLmNvbC1nYW5hbmNpYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgfVxuICAucmVzdW1lbi10YWJsZS1jYXJkIC5jb2wtc3VjdXJzYWw6YmVmb3JlLFxuICAucmVzdW1lbi10YWJsZS1jYXJkIC5jb2wtZmFjdG9yOmJlZm9yZSxcbiAgLnJlc3VtZW4tdGFibGUtY2FyZCAuY29sLXZlbmRpZG86YmVmb3JlLFxuICAucmVzdW1lbi10YWJsZS1jYXJkIC5jb2wtcGFnYWRvOmJlZm9yZSxcbiAgLnJlc3VtZW4tdGFibGUtY2FyZCAuY29sLWdhbmFuY2lhOmJlZm9yZSB7XG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgfVxuICAucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgcGFkZGluZzogMC43NXJlbTtcbiAgfVxufVxuLnJlc3VtZW4tbW9kYWwge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnJlc3VtZW4tbW9kYWwgLnNvcnRlby1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnJlc3VtZW4tbW9kYWwgLnNvcnRlby1pbmZvIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC50YWJsZS1oZWFkZXIsXG4ucmVzdW1lbi1tb2RhbCAucmVzdW1lbi10YWJsZSAudGFibGUtcm93LFxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLnRhYmxlLWZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxLjVmciAxLjVmciAxLjVmciAxLjVmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgZ2FwOiAwLjVyZW07XG59XG4ucmVzdW1lbi1tb2RhbCAucmVzdW1lbi10YWJsZSAudGFibGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLnRhYmxlLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG4ucmVzdW1lbi1tb2RhbCAucmVzdW1lbi10YWJsZSAudGFibGUtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC50YWJsZS1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC50YWJsZS1yb3c6bnRoLWNoaWxkKGV2ZW4pOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbn1cbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC50YWJsZS1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1LCAjMjBjOTk3KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzI4YTc0NTtcbn1cbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC5jb2wtc3VjdXJzYWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC5jb2wtZmFjdG9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzZmNDJjMTtcbn1cbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC5jb2wtbnVtZXJvLWdhbmFkb3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucmVzdW1lbi1tb2RhbCAucmVzdW1lbi10YWJsZSAuY29sLW51bWVyby1nYW5hZG9yIC5jYW50aWRhZC1udW1lcm8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLmNvbC1udW1lcm8tZ2FuYWRvciAubXVsdGlwbGljYWNpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ucmVzdW1lbi1tb2RhbCAucmVzdW1lbi10YWJsZSAuY29sLXZlbmRpZG8sXG4ucmVzdW1lbi1tb2RhbCAucmVzdW1lbi10YWJsZSAuY29sLXBhZ2Fkbyxcbi5yZXN1bWVuLW1vZGFsIC5yZXN1bWVuLXRhYmxlIC5jb2wtZ2FuYW5jaWEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLmNvbC1nYW5hbmNpYS5wb3NpdGl2ZSB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnJlc3VtZW4tbW9kYWwgLnJlc3VtZW4tdGFibGUgLmNvbC1nYW5hbmNpYS5uZWdhdGl2ZSB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEgMCUsICNlOWVjZWYgMTAwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLWhlYWRlciBoNSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQgLnJlc3VtZW4taGVhZGVyIGg1IGkge1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi10YWJsZS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLnRhYmxlLWhlYWRlci1jYXJkLFxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLnRhYmxlLXJvdy1jYXJkLFxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLnRhYmxlLWZvb3Rlci1jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDEuMmZyIDEuMmZyIDEuMmZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGdhcDogMC4zcmVtO1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQgLnJlc3VtZW4tdGFibGUtY2FyZCAudGFibGUtaGVhZGVyLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLnRhYmxlLXJvdy1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi10YWJsZS1jYXJkIC50YWJsZS1yb3ctY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQgLnJlc3VtZW4tdGFibGUtY2FyZCAudGFibGUtcm93LWNhcmQ6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi10YWJsZS1jYXJkIC50YWJsZS1yb3ctY2FyZDpudGgtY2hpbGQoZXZlbik6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLnRhYmxlLWZvb3Rlci1jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE5ODc1NCwgIzIwYzk5Nyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxOTg3NTQ7XG59XG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQgLnJlc3VtZW4tdGFibGUtY2FyZCAuY29sLXN1Y3Vyc2FsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQgLnJlc3VtZW4tdGFibGUtY2FyZCAuY29sLWZhY3RvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM2ZjQyYzE7XG59XG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQgLnJlc3VtZW4tdGFibGUtY2FyZCAuY29sLXZlbmRpZG8sXG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQgLnJlc3VtZW4tdGFibGUtY2FyZCAuY29sLXBhZ2Fkbyxcbi5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCAucmVzdW1lbi10YWJsZS1jYXJkIC5jb2wtZ2FuYW5jaWEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLmNvbC1nYW5hbmNpYS5wb3NpdGl2ZSB7XG4gIGNvbG9yOiAjMTk4NzU0O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLmNvbC1nYW5hbmNpYS5uZWdhdGl2ZSB7XG4gIGNvbG9yOiAjZGMzNTQ1O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnJlc3VtZW4tc3VjdXJzYWxlcy1jYXJkIC5yZXN1bWVuLXRhYmxlLWNhcmQgLnRhYmxlLWZvb3Rlci1jYXJkIC5jb2wtZ2FuYW5jaWEge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm51bWVyby1nYW5hZG9yLXNlY3Rpb24ge1xuICBtYXJnaW46IDJyZW0gMDtcbn1cbi5udW1lcm8tZ2FuYWRvci1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm51bWVyby1nYW5hZG9yLXNlY3Rpb24gLnNlY3Rpb24taGVhZGVyIGgzIHtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuLm51bWVyby1nYW5hZG9yLXNlY3Rpb24gLnNlY3Rpb24taGVhZGVyIGgzIGkge1xuICBjb2xvcjogI2ZmYzEwNztcbn1cbi5udW1lcm8tZ2FuYWRvci1zZWN0aW9uIC5zZWN0aW9uLWhlYWRlciAuc2VjdGlvbi1zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLm51bWVyby1nYW5hZG9yLXNlY3Rpb24gLm51bWVyby1nYW5hZG9yLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmOGUxIDAlLCAjZmZlY2IzIDEwMCUpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZjMTA3O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyNTUsIDE5MywgNywgMC4yKTtcbn1cbi5udW1lcm8tZ2FuYWRvci1zZWN0aW9uIC5udW1lcm8tZ2FuYWRvci1jYXJkIC5udW1lcm8tZ2FuYWRvci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgI2ZmYzEwNztcbn1cbi5udW1lcm8tZ2FuYWRvci1zZWN0aW9uIC5udW1lcm8tZ2FuYWRvci1jYXJkIC5udW1lcm8tZ2FuYWRvci1oZWFkZXIgLm51bWVyby1kaXNwbGF5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm51bWVyby1nYW5hZG9yLXNlY3Rpb24gLm51bWVyby1nYW5hZG9yLWNhcmQgLm51bWVyby1nYW5hZG9yLWhlYWRlciAubnVtZXJvLWRpc3BsYXkgLm51bWVyby10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICNmZjZmMDA7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGZvbnQtZmFtaWx5OiBcIkFyaWFsIEJsYWNrXCIsIHNhbnMtc2VyaWY7XG59XG4ubnVtZXJvLWdhbmFkb3Itc2VjdGlvbiAubnVtZXJvLWdhbmFkb3ItY2FyZCAubnVtZXJvLWdhbmFkb3ItaGVhZGVyIC5udW1lcm8tZGlzcGxheSAubnVtZXJvLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogIzc5NTU0ODtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLm51bWVyby1nYW5hZG9yLXNlY3Rpb24gLm51bWVyby1nYW5hZG9yLWNhcmQgLm51bWVyby1nYW5hZG9yLWhlYWRlciAudG90YWxlcy1nZW5lcmFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xufVxuLm51bWVyby1nYW5hZG9yLXNlY3Rpb24gLm51bWVyby1nYW5hZG9yLWNhcmQgLm51bWVyby1nYW5hZG9yLWhlYWRlciAudG90YWxlcy1nZW5lcmFsIC50b3RhbC1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm51bWVyby1nYW5hZG9yLXNlY3Rpb24gLm51bWVyby1nYW5hZG9yLWNhcmQgLm51bWVyby1nYW5hZG9yLWhlYWRlciAudG90YWxlcy1nZW5lcmFsIC50b3RhbC1pdGVtIC50b3RhbC12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyZTdkMzI7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cbi5udW1lcm8tZ2FuYWRvci1zZWN0aW9uIC5udW1lcm8tZ2FuYWRvci1jYXJkIC5udW1lcm8tZ2FuYWRvci1oZWFkZXIgLnRvdGFsZXMtZ2VuZXJhbCAudG90YWwtaXRlbSAudG90YWwtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjNWQ0MDM3O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG59XG4ubnVtZXJvLWdhbmFkb3Itc2VjdGlvbiAubnVtZXJvLWdhbmFkb3ItY2FyZCAuc3VjdXJzYWxlcy1kZXRhbGxlIC5kZXRhbGxlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxLjVmciAxLjVmcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM1ZDQwMzc7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5udW1lcm8tZ2FuYWRvci1zZWN0aW9uIC5udW1lcm8tZ2FuYWRvci1jYXJkIC5zdWN1cnNhbGVzLWRldGFsbGUgLmRldGFsbGUtaGVhZGVyIHNwYW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubnVtZXJvLWdhbmFkb3Itc2VjdGlvbiAubnVtZXJvLWdhbmFkb3ItY2FyZCAuc3VjdXJzYWxlcy1kZXRhbGxlIC5kZXRhbGxlLWhlYWRlciBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5udW1lcm8tZ2FuYWRvci1zZWN0aW9uIC5udW1lcm8tZ2FuYWRvci1jYXJkIC5zdWN1cnNhbGVzLWRldGFsbGUgLmRldGFsbGUtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDEuNWZyIDEuNWZyO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAxOTMsIDcsIDAuMik7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubnVtZXJvLWdhbmFkb3Itc2VjdGlvbiAubnVtZXJvLWdhbmFkb3ItY2FyZCAuc3VjdXJzYWxlcy1kZXRhbGxlIC5kZXRhbGxlLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubnVtZXJvLWdhbmFkb3Itc2VjdGlvbiAubnVtZXJvLWdhbmFkb3ItY2FyZCAuc3VjdXJzYWxlcy1kZXRhbGxlIC5kZXRhbGxlLXJvdyAuc3VjdXJzYWwtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuLm51bWVyby1nYW5hZG9yLXNlY3Rpb24gLm51bWVyby1nYW5hZG9yLWNhcmQgLnN1Y3Vyc2FsZXMtZGV0YWxsZSAuZGV0YWxsZS1yb3cgLmZhY3Rvci12YWx1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM2ZjQyYzE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTExLCA2NiwgMTkzLCAwLjEpO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubnVtZXJvLWdhbmFkb3Itc2VjdGlvbiAubnVtZXJvLWdhbmFkb3ItY2FyZCAuc3VjdXJzYWxlcy1kZXRhbGxlIC5kZXRhbGxlLXJvdyAuY2FudGlkYWQtdmFsdWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyOGE3NDU7XG59XG4ubnVtZXJvLWdhbmFkb3Itc2VjdGlvbiAubnVtZXJvLWdhbmFkb3ItY2FyZCAuc3VjdXJzYWxlcy1kZXRhbGxlIC5kZXRhbGxlLXJvdyAucGFnby12YWx1ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2RjMzU0NTtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwgMC4xKTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubnVtZXJvLWdhbmFkb3Itc2VjdGlvbiAubnVtZXJvLWdhbmFkb3ItY2FyZCAubnVtZXJvLWdhbmFkb3ItaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm51bWVyby1nYW5hZG9yLXNlY3Rpb24gLm51bWVyby1nYW5hZG9yLWNhcmQgLm51bWVyby1nYW5hZG9yLWhlYWRlciAudG90YWxlcy1nZW5lcmFsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgfVxuICAubnVtZXJvLWdhbmFkb3Itc2VjdGlvbiAubnVtZXJvLWdhbmFkb3ItY2FyZCAuc3VjdXJzYWxlcy1kZXRhbGxlIC5kZXRhbGxlLWhlYWRlcixcbiAgLm51bWVyby1nYW5hZG9yLXNlY3Rpb24gLm51bWVyby1nYW5hZG9yLWNhcmQgLnN1Y3Vyc2FsZXMtZGV0YWxsZSAuZGV0YWxsZS1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMC41cmVtO1xuICB9XG4gIC5udW1lcm8tZ2FuYWRvci1zZWN0aW9uIC5udW1lcm8tZ2FuYWRvci1jYXJkIC5zdWN1cnNhbGVzLWRldGFsbGUgLmRldGFsbGUtaGVhZGVyIHNwYW4sXG4gIC5udW1lcm8tZ2FuYWRvci1zZWN0aW9uIC5udW1lcm8tZ2FuYWRvci1jYXJkIC5zdWN1cnNhbGVzLWRldGFsbGUgLmRldGFsbGUtcm93IHNwYW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMDtcbiAgfVxufSIsIi8qIEFETUlOIFBBTkVMIC0gRVNUSUxPIENPTiBBQ09SREXDg8KTTiBZIE1PREFMRVMgQ0VOVFJBRE9TICovXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi40LjAvY3NzL2FsbC5taW4uY3NzJyk7XHJcblxyXG4uYWRtaW4taW50ZXJmYWNlIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLyogPT09PT0gSEVBREVSID09PT09ICovXHJcbi5oZWFkZXItYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMmMzZTUwIDAlLCAjMzQ0OTVlIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5hZG1pbi10aXRsZSBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uYWRtaW4tdGl0bGUgaSB7XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbn1cclxuXHJcbi5idG4taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCAxNTIsIDIxOSwgMC4yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4zKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmJ0bi1oZWFkZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MiwgMTUyLCAyMTksIDAuNSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uaGVhZGVyLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5idG4tdXNlcnMge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDYsIDIwNCwgMTEzLCAwLjIpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMjA0LCAxMTMsIDAuMyk7XHJcbn1cclxuXHJcbi5idG4tdXNlcnM6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDYsIDIwNCwgMTEzLCAwLjMpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg0NiwgMjA0LCAxMTMsIDAuNSk7XHJcbn1cclxuXHJcbi5idG4tY2VycmFyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjIpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzEsIDc2LCA2MCwgMC4zKTtcclxufVxyXG5cclxuLmJ0bi1jZXJyYXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMxLCA3NiwgNjAsIDAuMyk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjUpO1xyXG59XHJcblxyXG4vKiA9PT09PSBBQ09SREXDg8KTTiA9PT09PSAqL1xyXG4uYWNjb3JkaW9uLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0NDk1ZSAwJSwgIzJjM2U1MCAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1oZWFkZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzYzUwNzAgMCUsICMzNDQ5NWUgMTAwJSk7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24taGVhZGVyIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5hY2NvcmRpb24taGVhZGVyIGkuZmEtY2hldnJvbi1kb3duIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWhlYWRlciBpLmZhLWNoZXZyb24tZG93bi5yb3RhdGVkIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1jb250ZW50LnNob3cge1xyXG4gIG1heC1oZWlnaHQ6IDIwMDBweDtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuXHJcbi8qID09PT09IE1PREFMRVMgQ0VOVFJBRE9TID09PT09ICovXHJcbi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgei1pbmRleDogMTA1MDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC5mYWRlIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgbGluZWFyO1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDUwcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0NDk1ZSAwJSwgIzJjM2U1MCAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcclxufVxyXG5cclxuLm1vZGFsLXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uYnRuLWNsb3NlLCAuY2xvc2Uge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tY2xvc2U6aG92ZXIsIC5jbG9zZTpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmJ0bi1tb2RhbCB7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmJ0bi1tb2RhbC5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tbW9kYWwuYnRuLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uYnRuLW1vZGFsLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLW1vZGFsLmJ0bi1zZWNvbmRhcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQ6ICM1YTYyNjg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uYnRuLW1vZGFsOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLyogPT09PT0gSUNPTk9TIERFIEZPTlRBV0VTT01FID09PT09ICovXHJcbi5mYXMsIC5mYSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLyogRXNwZWPDg8KtZmljb3MgcGFyYSBpY29ub3MgZGUgYWNjaW9uZXMgKi9cclxuLmZhLWVkaXQ6YmVmb3JlIHsgY29udGVudDogXCJcXGYwNDRcIjsgfVxyXG4uZmEtdHJhc2g6YmVmb3JlIHsgY29udGVudDogXCJcXGYxZjhcIjsgfVxyXG4uZmEta2V5OmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxmMDg0XCI7IH1cclxuLmZhLXRvZ2dsZS1vbjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjIwNVwiOyB9XHJcbi5mYS10b2dnbGUtb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxmMjA0XCI7IH1cclxuLmZhLXVzZXItcGx1czpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjIzNFwiOyB9XHJcbi5mYS1wbHVzOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxmMDY3XCI7IH1cclxuLmZhLWJ1ZzpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjE4OFwiOyB9XHJcbi5mYS1kYXRhYmFzZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjFjMFwiOyB9XHJcbi5mYS1jbG9jazpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjAxN1wiOyB9XHJcbi5mYS11c2VyczpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjBjMFwiOyB9XHJcbi5mYS1jaGV2cm9uLWRvd246YmVmb3JlIHsgY29udGVudDogXCJcXGYwNzhcIjsgfVxyXG4uZmEtdGltZXM6YmVmb3JlIHsgY29udGVudDogXCJcXGYwMGRcIjsgfVxyXG4uZmEtc2F2ZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjBjN1wiOyB9XHJcbi5mYS1zeW5jOmJlZm9yZSB7IGNvbnRlbnQ6ICdcXGYwMjEnOyB9XHJcblxyXG4vKiA9PT09PSBGSUxUUk9TID09PT09ICovXHJcbi5maWx0ZXJzLWJhciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZpbHRlci1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItZ3JvdXAgbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIFxyXG4gIGkge1xyXG4gICAgY29sb3I6ICMzNDk4ZGI7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGluZy1pbmRpY2F0b3Ige1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGNvbG9yOiAjMzQ5OGRiO1xyXG4gIFxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbCwgLmZvcm0taW5wdXQge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cywgLmZvcm0taW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4xKTtcclxufVxyXG5cclxuLmZpbHRlci1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmJ0bi1maWx0ZXIge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5idG4tZmlsdGVyLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1maWx0ZXIuYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uYnRuLWZpbHRlci5idG4tc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1maWx0ZXIuYnRuLXNlY29uZGFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzVhNjI2ODtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi8qID09PT09IEVYUE9SVEFDScODwpNOID09PT09ICovXHJcbi5leHBvcnQtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmV4cG9ydC1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBjb2xvcjogIzI4YTc0NTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tZXhwb3J0IHtcclxuICBwYWRkaW5nOiAwLjZyZW0gMS4ycmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBcclxuICAmOmRpc2FibGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tZXhwb3J0OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbi5idG4tZXhwb3J0LmJ0bi1leGNlbCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzIxODgzOCAwJSwgIzI4YTc0NSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWU3ZTM0IDAlLCAjMjE4ODM4IDEwMCUpO1xyXG4gIH1cclxuICBcclxuICBpIHtcclxuICAgIGNvbG9yOiAjZDRlZGRhO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1leHBvcnQuYnRuLXBkZiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RjMjYyNiAwJSwgI2VmNDQ0NCAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYjkxYzFjIDAlLCAjZGMyNjI2IDEwMCUpO1xyXG4gIH1cclxuICBcclxuICBpIHtcclxuICAgIGNvbG9yOiAjZmVjYWNhO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT0gQ09OVEVOSURPIFBSSU5DSVBBTCA9PT09PSAqL1xyXG4ubWFpbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vKiA9PT09PSBDQVJEUyBERSBSRVNVTUVOID09PT09ICovXHJcbi5zdW1tYXJ5LWNhcmRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgwLDAsMCwwLjEyKTtcclxufVxyXG5cclxuLmNhcmQtaWNvbiB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZC52ZW5kaWRvIC5jYXJkLWljb24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDk4ZGIsICMyOTgwYjkpO1xyXG59XHJcblxyXG4uc3VtbWFyeS1jYXJkLnBhZ2FkbyAuY2FyZC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTc0YzNjLCAjYzAzOTJiKTtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZC5nYW5hbmNpYSAuY2FyZC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjdhZTYwLCAjMjI5OTU0KTtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZC5nYW5hbmNpYS5uZWdhdGl2ZSAuY2FyZC1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTc0YzNjLCAjYzAzOTJiKTtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZC52ZW50YXMgLmNhcmQtaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YzOWMxMiwgI2U2N2UyMik7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQgaDMge1xyXG4gIG1hcmdpbjogMCAwIDAuMjVyZW0gMDtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiA9PT09PSBTRUNDSU9ORVMgPT09PT0gKi9cclxuLnNlY3Rpb24taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y4ZjlmYTtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGVyIGgzIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiA9PT09PSBTRUNDSU9ORVMgREUgU09SVEVPUyA9PT09PSAqL1xyXG5cclxuLyogPT09PT0gU0VDQ0nDg8KTTiBERSBOw4PCmk1FUk9TIFZFTkRJRE9TIFBPUiBTT1JURU8gPT09PT0gKi9cclxuLm51bWVyb3MtdmVuZGlkb3Mtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW46IDJyZW0gMDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24tc3VidGl0bGUge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uc29ydGVvcy1udW1lcm9zLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG5cclxuLnNvcnRlby1udW1lcm9zLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZmZmYgMCUsICNmOGY5ZmEgMTAwJSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLDAsMCwwLjA1KTtcclxufVxyXG5cclxuLnNvcnRlby1udW1lcm9zLWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDZweCAyNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XHJcbn1cclxuXHJcbi5zb3J0ZW8tbnVtZXJvcy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjFmM2Y0O1xyXG59XHJcblxyXG4uc29ydGVvLW51bWVyb3MtaGVhZGVyIGg0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxufVxyXG5cclxuLnNvcnRlby10b3RhbCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0OThkYiwgIzI5ODBiOSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XHJcbn1cclxuXHJcbi5zdWN1cnNhbGVzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMS41cmVtO1xyXG59XHJcblxyXG4uc3VjdXJzYWwtZ3JvdXAge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNDksIDI1MCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMzNDk4ZGI7XHJcbn1cclxuXHJcbi5zdWN1cnNhbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnN1Y3Vyc2FsLWhlYWRlciBoNSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzQ0OTVlO1xyXG59XHJcblxyXG4uc3VjdXJzYWwtdG90YWwge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDYsIDIwNCwgMTEzLCAwLjEpO1xyXG4gIGNvbG9yOiAjMjdhZTYwO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDYsIDIwNCwgMTEzLCAwLjIpO1xyXG59XHJcblxyXG4vKiBUb3AgbsODwrptZXJvcyBtw4PCoXMgdmVuZGlkb3MgKi9cclxuLnRvcC1udW1lcm9zLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLnRvcC1udW1lcm9zLXNlY3Rpb24gaDYge1xyXG4gIG1hcmdpbjogMCAwIDAuNzVyZW0gMDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzQ0OTVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnRvcC1udW1lcm9zLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICBnYXA6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udG9wLW51bWVyby1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiIDAlLCAjMjk4MGI5IDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi50b3AtbnVtZXJvLWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjQpO1xyXG59XHJcblxyXG4udG9wLW51bWVyby1jYXJkIC5udW1lcm8ge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxufVxyXG5cclxuLnRvcC1udW1lcm8tY2FyZCAuY2FudGlkYWQge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbn1cclxuXHJcbi50b3AtbnVtZXJvLWNhcmQgLnBvc2ljaW9uIHtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi8qIFRhYmxlcm8gY29tcGxldG8gZGUgbsODwrptZXJvcyAqL1xyXG4udGFibGVyby1udW1lcm9zIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4udGFibGVyby1udW1lcm9zIGg2IHtcclxuICBtYXJnaW46IDAgMCAwLjc1cmVtIDA7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzM0NDk1ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5udW1lcm9zLWdyaWQtY29tcGxldG8ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XHJcbiAgZ2FwOiAycHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbn1cclxuXHJcbi5udW1lcm8tY2VsbCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMC41cmVtIDAuMjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubnVtZXJvLWNlbGw6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG59XHJcblxyXG4ubnVtZXJvLWxhYmVsIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG4ubnVtZXJvLXZlbnRhIHtcclxuICBmb250LXNpemU6IDAuNnJlbTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBtYXJnaW4tdG9wOiAwLjFyZW07XHJcbn1cclxuXHJcbi8qIEludGVuc2lkYWRlcyBkZSBjb2xvciAqL1xyXG4uc2luLXZlbnRhIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG4uaW50ZW5zaWRhZC1tdXktYmFqYSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U4ZjVlOCAwJSwgI2Q0ZWRkYSAxMDAlKTtcclxuICBjb2xvcjogIzE1NTcyNDtcclxufVxyXG5cclxuLmludGVuc2lkYWQtYmFqYSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2QxZWNmMSAwJSwgI2JlZTVlYiAxMDAlKTtcclxuICBjb2xvcjogIzBjNTQ2MDtcclxufVxyXG5cclxuLmludGVuc2lkYWQtbWVkaWEge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmVhYTcgMCUsICNmZGNiNmUgMTAwJSk7XHJcbiAgY29sb3I6ICM4NTY0MDQ7XHJcbn1cclxuXHJcbi5pbnRlbnNpZGFkLWFsdGEge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmYWIxYTAgMCUsICNlMTcwNTUgMTAwJSk7XHJcbiAgY29sb3I6ICM3MjFjMjQ7XHJcbn1cclxuXHJcbi5pbnRlbnNpZGFkLW11eS1hbHRhIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmQ3OWE4IDAlLCAjZTg0MzkzIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uaW50ZW5zaWRhZC1tdXktYWx0YTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDE1cHggcmdiYSgyMzIsIDY3LCAxNDcsIDAuNCk7XHJcbn1cclxuXHJcbi5udW1lcm9zLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTIwcHgsIDFmcikpO1xyXG4gIGdhcDogMC43NXJlbTtcclxufVxyXG5cclxuLm51bWVyby1pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm51bWVyby1pdGVtOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xyXG59XHJcblxyXG4ubnVtZXJvLWl0ZW0udG9wLXNlbGxlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTY3ZTIyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmVhYTcgMCUsICNmZGNiNmUgMTAwJSk7XHJcbn1cclxuXHJcbi5udW1lcm8taXRlbS50b3Atc2VsbGVyOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICNkMzU0MDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDE1cHggcmdiYSgyMzAsIDEyNiwgMzQsIDAuMyk7XHJcbn1cclxuXHJcbi5udW1lcm8tdmFsb3Ige1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4ubnVtZXJvLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4ubnVtZXJvLXRvdGFsIHtcclxuICBjb2xvcjogIzI3YWU2MDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbn1cclxuXHJcbi5udW1lcm8tcG9yY2VudGFqZSB7XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ubnVtZXJvLXZlbnRhcyB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi5tb3JlLW51bWJlcnMge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA4LCAxMTcsIDEyNSwgMC4xKTtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI2RlZTJlNjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5tb3JlLW51bWJlcnM6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA4LCAxMTcsIDEyNSwgMC4xNSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG4ubW9yZS1udW1iZXJzIGkge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIHBhcmEgbsODwrptZXJvcyB2ZW5kaWRvcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc29ydGVvcy1udW1lcm9zLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50b3AtbnVtZXJvcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5udW1lcm9zLWdyaWQtY29tcGxldG8ge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICAgIGdhcDogMXB4O1xyXG4gICAgcGFkZGluZzogMC4yNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLm51bWVyby1jZWxsIHtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xyXG4gIH1cclxuICBcclxuICAubnVtZXJvLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxuICBcclxuICAubnVtZXJvLXZlbnRhIHtcclxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLnRvcC1udW1lcm9zLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICB9XHJcbiAgXHJcbiAgLm51bWVyb3MtZ3JpZC1jb21wbGV0byB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIH1cclxufVxyXG5cclxuLnNvcnRlb3Mtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW46IDJyZW0gMDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xyXG59XHJcblxyXG4uc29ydGVvcy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG4gIGdhcDogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG5cclxuLnNvcnRlby1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zb3J0ZW8tY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMwcHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XHJcbn1cclxuXHJcbi5zb3J0ZW8taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5zb3J0ZW8taGVhZGVyIGg0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxufVxyXG5cclxuLnNvcnRlby1zdGF0dXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgZ2FwOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uc3RhdHVzLWJhZGdlIHtcclxuICBwYWRkaW5nOiAwLjM1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4uc3RhdHVzLWJhZGdlLm9wZW4ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyN2FlNjAsICMyMjk5NTQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN0YXR1cy1iYWRnZS5jbG9zZWQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNzRjM2MsICNjMDM5MmIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNsb3NlLXRpbWUge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGNvbG9yOiAjN2Y4YzhkO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zb3J0ZW8tY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi53aW5uZXItc2VjdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICNlOWVjZWYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi53aW5uZXItbnVtYmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogI2YzOWMxMjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi53aW5uZXItbnVtYmVyIGkge1xyXG4gIGNvbG9yOiAjZjM5YzEyO1xyXG59XHJcblxyXG4uZmFjdG9yIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnNvcnRlby1zdGF0cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5zdGF0LWl0ZW0ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uc3RhdC1pdGVtLnZlbmRpZG8ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjEpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XHJcbn1cclxuXHJcbi5zdGF0LWl0ZW0ucGFnYWRvIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjEpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzEsIDc2LCA2MCwgMC4zKTtcclxufVxyXG5cclxuLnN0YXQtaXRlbS5nYW5hbmNpYSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgMTc0LCA5NiwgMC4xKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMzksIDE3NCwgOTYsIDAuMyk7XHJcbn1cclxuXHJcbi5zdGF0LWl0ZW0uZ2FuYW5jaWEubmVnYXRpdmUge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjMxLCA3NiwgNjAsIDAuMSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMSwgNzYsIDYwLCAwLjMpO1xyXG59XHJcblxyXG4uc3RhdC1pdGVtIC5sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4uc3RhdC1pdGVtIC52YWx1ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxufVxyXG5cclxuLndpbm5lci1mb3JtIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZGVlMmU2O1xyXG59XHJcblxyXG4ud2lubmVyLWZvcm0gLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi53aW5uZXItZm9ybSBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcbi5idG4tc2V0LXdpbm5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjM5YzEyLCAjZTY3ZTIyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmJ0bi1zZXQtd2lubmVyOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTY3ZTIyLCAjZDM1NDAwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5idG4tc2V0LXdpbm5lcjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5zb3J0ZW8tb3Blbi1tZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBjb2xvcjogIzdmOGM4ZDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5zb3J0ZW8tb3Blbi1tZXNzYWdlIGkge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qID09PT09IFNFQ0NJw4PCk04gREUgVkVOVEFTID09PT09ICovXHJcbi52ZW50YXMtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBtYXJnaW46IDJyZW0gMDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG5cclxuLnZlbnRhcy10YWJsZS1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIExvYWRpbmcgb3ZlcmxheSBwYXJhIGZpbHRyb3MgKi9cclxuLmxvYWRpbmctb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmxvYWRpbmctY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiAjMzQ5OGRiO1xyXG4gIH1cclxuICBcclxuICBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICB9XHJcbn1cclxuXHJcbi52ZW50YXMtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gIFxyXG4gICYubG9hZGluZyB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDQ5NWUgMCUsICMyYzNlNTAgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMS41ZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLnRhYmxlLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRhYmxlLXJvdyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxLjVmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGFibGUtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA1KTtcclxufVxyXG5cclxuLnRhYmxlLXJvdzpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uYnRuLXRhYmxlLWFjdGlvbiB7XHJcbiAgcGFkZGluZzogMC40cmVtIDAuNnJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBcclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMzNDk4ZGIsICMyOTgwYjkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI3YWU2MCwgIzIxOWE1Mik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi10YWJsZS1hY3Rpb246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICBcclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOTgwYjksICMyMTYxOGMpO1xyXG4gIH1cclxuICBcclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzIxOWE1MiwgIzFlODQ0OSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiA9PT09PSBDT05GSUdVUkFDScODwpNOIERFIFNPUlRFT1MgPT09PT0gKi9cclxuLnNvcnRlb3MtY29uZmlnLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5zb3J0ZW9zLWNvbmZpZy10YWJsZSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLDAsMCwwLjA4KTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY29uZmlnLXRhYmxlLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0NDk1ZSAwJSwgIzJjM2U1MCAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMmZyIDEuNWZyO1xyXG4gIGdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY29uZmlnLXRhYmxlLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbmZpZy10YWJsZS1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDJmciAxLjVmcjtcclxuICBnYXA6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYzZjQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY29uZmlnLXRhYmxlLXJvdzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbn1cclxuXHJcbi5jb25maWctdGFibGUtcm93Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi5jb25maWctbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbn1cclxuXHJcbi5jb25maWctbGFiZWwge1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY29uZmlnLXRpbWUge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jb25maWctYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYnRuLWNvbmZpZy1hY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjNyZW07XHJcbiAgbWluLXdpZHRoOiA3MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWNvbmZpZy1lZGl0IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiLCAjMjk4MGI5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tY29uZmlnLWVkaXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOTgwYjksICMyMTYxOGMpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjMpO1xyXG59XHJcblxyXG4uYnRuLWNvbmZpZy1kZWxldGUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNzRjM2MsICNjMDM5MmIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1jb25maWctZGVsZXRlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYzAzOTJiLCAjYTkzMjI2KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDIzMSwgNzYsIDYwLCAwLjMpO1xyXG59XHJcblxyXG4vKiBJY29ub3MgZXNwZWPDg8KtZmljb3MgcGFyYSBsYSB0YWJsYSBkZSBjb25maWd1cmFjacODwrNuICovXHJcbi5jb25maWctYWN0aW9ucyBpIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmJ0bi1jb25maWctZWRpdCBpOmJlZm9yZSB7XHJcbiAgY29udGVudDogJ1xcZjA0NCc7IC8qIGZhLWVkaXQgKi9cclxufVxyXG5cclxuLmJ0bi1jb25maWctZGVsZXRlIGk6YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxmMmVkJzsgLyogZmEtdHJhc2ggKi9cclxufVxyXG5cclxuLyogRXN0aWxvcyBwYXJhIHdoZW4gZWwgYWNvcmRlw4PCs24gZXN0w4PCoSBjZXJyYWRvICovXHJcbi5hY2NvcmRpb24tY29udGVudC5jb2xsYXBzZWQgLnNvcnRlb3MtY29uZmlnLXRhYmxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBNZWpvcmFyIHJlc3BvbnNpdmUgcGFyYSBsYSB0YWJsYSBkZSBjb25maWd1cmFjacODwrNuICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb25maWctdGFibGUtaGVhZGVyLFxyXG4gIC5jb25maWctdGFibGUtcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb25maWctdGFibGUtaGVhZGVyID4gZGl2LFxyXG4gIC5jb25maWctdGFibGUtcm93ID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbmZpZy1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT0gR0VTVEnDg8KTTiBERSBVU1VBUklPUyA9PT09PSAqL1xyXG4udXNlcnMtdGFibGUtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuXHJcbi51c2VyLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwwLDAsMC4wOCk7XHJcbn1cclxuXHJcbi51c2VyLXRhYmxlIHRoZWFkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ0OTVlIDAlLCAjMmMzZTUwIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnVzZXItdGFibGUgdGhlYWQgdGgge1xyXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4udXNlci10YWJsZSB0Ym9keSB0ciB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcclxufVxyXG5cclxuLnVzZXItdGFibGUgdGJvZHkgdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG4udXNlci10YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4udXNlci10YWJsZSB0Ym9keSB0ZCB7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi51c2VyLWVtYWlsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxufVxyXG5cclxuLnVzZXItc3VjdXJzYWwge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnRhYmxlLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnRhYmxlLWFjdGlvbnMgLmJ0biB7XHJcbiAgcGFkZGluZzogMC40cmVtIDAuOHJlbTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjNyZW07XHJcbn1cclxuXHJcbi50YWJsZS1hY3Rpb25zIC5idG46aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgcGFkZGluZzogMC4zNXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLmJhZGdlLmJnLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U3NGMzYywgI2MwMzkyYikgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iYWRnZS5iZy1pbmZvIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzQ5OGRiLCAjMjk4MGI5KSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN0YXR1cy1iYWRnZSB7XHJcbiAgcGFkZGluZzogMC4zNXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLnN0YXR1cy1iYWRnZS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyN2FlNjAsICMyMjk5NTQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN0YXR1cy1iYWRnZS5pbmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzk1YTVhNiwgIzdmOGM4ZCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBNZW5zYWplIGRlIG5vIGRhdG9zICovXHJcbi5uby1kYXRhLW1lc3NhZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzcmVtIDJyZW07XHJcbiAgY29sb3I6ICM3ZjhjOGQ7XHJcbn1cclxuXHJcbi5uby1kYXRhLW1lc3NhZ2UgaSB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICNiZGMzYzc7XHJcbn1cclxuXHJcbi5uby1kYXRhLW1lc3NhZ2UgaDQge1xyXG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5uby1kYXRhLW1lc3NhZ2UgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBjb2xvcjogIzk1YTVhNjtcclxufVxyXG5cclxuLyogTW9kYWxlcyBkZSB1c3VhcmlvICovXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0LCAuZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1pbnB1dDpmb2N1cywgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjEpO1xyXG59XHJcblxyXG4uY2hlY2tib3gtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLmNoZWNrYm94LWxhYmVsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9ybS10ZXh0IHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByZXZpZXctY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI2RlZTJlNjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ucHJldmlldy1jYXJkIGg2IHtcclxuICBtYXJnaW46IDAgMCAwLjc1cmVtIDA7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLnNvcnRlby1wcmV2aWV3IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnRpbWUtYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuMjVyZW07XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgcGFyYSB1c3VhcmlvcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudXNlci10YWJsZSB0aGVhZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAudXNlci10YWJsZSB0Ym9keSB0ciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItdGFibGUgdGJvZHkgdGQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItdGFibGUgdGJvZHkgdGQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpIFwiOiBcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlLWFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT0gTU9EQUwgREUgREVUQUxMRVMgREUgVkVOVEEgPT09PT0gKi9cclxuXHJcbi8qIE1vZGFsIGVzcGVjw4PCrWZpY28gcGFyYSBkZXRhbGxlcyBkZSB2ZW50YSAqL1xyXG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbn1cclxuXHJcbi5zYWxlLWluZm8tZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uaW5mby1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMzNDk4ZGI7XHJcbn1cclxuXHJcbi5pbmZvLXJvdy50b3RhbC1yb3cge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjdhZTYwO1xyXG4gIGJhY2tncm91bmQ6ICNlOGY1ZTg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmluZm8tcm93IC5sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmluZm8tcm93IC52YWx1ZSB7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm51bWJlcnMtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcblxyXG4ubnVtYmVycy1zZWN0aW9uIGg0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubnVtYmVycy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4ubnVtYmVyLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5udW1iZXItY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0OThkYiAwJSwgIzI5ODBiOSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5udW1iZXItY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg1MiwgMTUyLCAyMTksIDAuNCk7XHJcbn1cclxuXHJcbi5udW1iZXItY2FyZCAubnVtYmVyIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbn1cclxuXHJcbi5udW1iZXItY2FyZCAuYW1vdW50IHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5udW1iZXJzLXN1bW1hcnkge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4uc3VtbWFyeS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWl0ZW0gLmxhYmVsIHtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnN1bW1hcnktaXRlbSAudmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5uby1udW1iZXJzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLm5vLW51bWJlcnMgaSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgY29sb3I6ICNmZmMxMDc7XHJcbn1cclxuXHJcbi5uby1udW1iZXJzIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgcGFyYSBtb2RhbCBkZSBkZXRhbGxlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubnVtYmVycy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDgwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5udW1iZXJzLXN1bW1hcnkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmluZm8tcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMC4yNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmluZm8tcm93IC52YWx1ZSB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT0gTlVFVk9TIEVTVElMT1MgUEFSQSBFU1RBRE8gREUgQ0FSR0EgPT09PT0gKi9cclxuLnNvcnRlby1sb2FkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNvcnRlby1sb2FkaW5nIGkge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5zb3J0ZW8tbG9hZGluZyBzcGFuIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbi8qIE1lam9yYXIgZWwgZXN0YWRvIGRpc2FibGVkIGRlIGJvdG9uZXMgKi9cclxuLmJ0bi1zZXQtd2lubmVyOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXNldC13aW5uZXI6ZGlzYWJsZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM2Yzc1N2QgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIE1lam9yYXIgaW5wdXRzIGRpc2FibGVkICovXHJcbi5mb3JtLWlucHV0OmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qID09PT09IE1PREFMIERFIEZBQ1RPUkVTIFBPUiBTVUNVUlNBTCA9PT09PSAqL1xyXG4ubW9kYWwtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgei1pbmRleDogMTA1MDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgbWF4LWhlaWdodDogOTB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG59XHJcblxyXG4uZmFjdG9ycy1tb2RhbCB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhY3RvcnMtbW9kYWwgLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZhY3RvcnMtbW9kYWwgLm1vZGFsLWhlYWRlciBoMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLnNvcnRlby1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLnNvcnRlby1iYWRnZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzM0OThkYiwgIzI5ODBiOSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ud2lubmluZy1udW1iZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNzRjM2MsICNjMDM5MmIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZhY3RvcnMtaW5zdHJ1Y3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlOGY1ZTgsICNkNGVkZGEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2U2Y2I7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uZmFjdG9ycy1pbnN0cnVjdGlvbiBpIHtcclxuICBjb2xvcjogIzI4YTc0NTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjFyZW07XHJcbn1cclxuXHJcbi5mYWN0b3JzLWluc3RydWN0aW9uIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzE1NTcyNDtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG4uZmFjdG9ycy1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4uZmFjdG9yLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4wNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmZhY3Rvci1pdGVtOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDUyLCAxNTIsIDIxOSwgMC4xKTtcclxufVxyXG5cclxuLnN1Y3Vyc2FsLWluZm8ge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uc3VjdXJzYWwtbmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uc3VjdXJzYWwtbmFtZSBpIHtcclxuICBjb2xvcjogIzM0OThkYjtcclxufVxyXG5cclxuLnN1Y3Vyc2FsLXVzZXJzIHtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uc3VjdXJzYWwtdXNlcnMgc21hbGwge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uZmFjdG9yLWlucHV0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5mYWN0b3ItaW5wdXQgbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmlucHV0LXdpdGgteCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0LXdpdGgteCBpbnB1dCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbSAwLjVyZW0gMC41cmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uaW5wdXQtd2l0aC14IGlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogIzM0OThkYjtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg1MiwgMTUyLCAyMTksIDAuMSk7XHJcbn1cclxuXHJcbi54LW11bHRpcGxpZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMC41cmVtO1xyXG4gIGNvbG9yOiAjMzQ5OGRiO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWZhY3RvcnMsXHJcbi5uby1zdWN1cnNhbGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzcmVtIDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4ubG9hZGluZy1mYWN0b3JzIGksXHJcbi5uby1zdWN1cnNhbGVzIGkge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5sb2FkaW5nLWZhY3RvcnMgaSB7XHJcbiAgY29sb3I6ICMzNDk4ZGI7XHJcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLm5vLXN1Y3Vyc2FsZXMgaSB7XHJcbiAgY29sb3I6ICNlNzRjM2M7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWZhY3RvcnMgcCxcclxuLm5vLXN1Y3Vyc2FsZXMgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIHBhcmEgbW9kYWwgZGUgZmFjdG9yZXMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZhY3RvcnMtbW9kYWwge1xyXG4gICAgd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWN0b3ItaXRlbSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWN1cnNhbC1pbmZvIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmZhY3Rvci1pbnB1dCB7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0LXdpdGgteCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnNvcnRlby1pbmZvIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gIH1cclxuICBcclxuICAvLyBSZXNwb25zaXZlIHBhcmEgdGFibGEgZGUgcmVzdW1lbiBlbiBjYXJkc1xyXG4gIC5yZXN1bWVuLXRhYmxlLWNhcmQge1xyXG4gICAgLnRhYmxlLWhlYWRlci1jYXJkLFxyXG4gICAgLnRhYmxlLXJvdy1jYXJkLFxyXG4gICAgLnRhYmxlLWZvb3Rlci1jYXJkIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIGdhcDogMC4ycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtc3VjdXJzYWwsXHJcbiAgICAuY29sLWZhY3RvcixcclxuICAgIC5jb2wtdmVuZGlkbyxcclxuICAgIC5jb2wtcGFnYWRvLFxyXG4gICAgLmNvbC1nYW5hbmNpYSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICAgICAgXHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXN1bWVuLXN1Y3Vyc2FsZXMtY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEVzdGlsb3MgZXNwZWPDg8KtZmljb3MgcGFyYSBlbCBtb2RhbCBkZSByZXN1bWVuXHJcbi5yZXN1bWVuLW1vZGFsIHtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDgwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBcclxuICAuc29ydGVvLWluZm8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBcclxuICAgIGg0IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJlc3VtZW4tdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIFxyXG4gICAgLnRhYmxlLWhlYWRlcixcclxuICAgIC50YWJsZS1yb3csXHJcbiAgICAudGFibGUtZm9vdGVyIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDEuNWZyIDEuNWZyIDEuNWZyIDEuNWZyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgICBnYXA6IDAuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcclxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRhYmxlLXJvdyB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcbiAgICAgIFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50YWJsZS1mb290ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1LCAjMjBjOTk3KTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzI4YTc0NTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbC1zdWN1cnNhbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sLWZhY3RvciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICM2ZjQyYzE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtbnVtZXJvLWdhbmFkb3Ige1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAuY2FudGlkYWQtbnVtZXJvIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubXVsdGlwbGljYWNpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtdmVuZGlkbyxcclxuICAgIC5jb2wtcGFnYWRvLFxyXG4gICAgLmNvbC1nYW5hbmNpYSB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sLWdhbmFuY2lhIHtcclxuICAgICAgJi5wb3NpdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5uZWdhdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRXN0aWxvcyBwYXJhIHJlc3VtZW4gZGUgc3VjdXJzYWxlcyBlbiBjYXJkc1xyXG4ucmVzdW1lbi1zdWN1cnNhbGVzLWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEgMCUsICNlOWVjZWYgMTAwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgXHJcbiAgLnJlc3VtZW4taGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBcclxuICAgIGg1IHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXN1bWVuLXRhYmxlLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICBcclxuICAgIC50YWJsZS1oZWFkZXItY2FyZCxcclxuICAgIC50YWJsZS1yb3ctY2FyZCxcclxuICAgIC50YWJsZS1mb290ZXItY2FyZCB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxLjJmciAxLjJmciAxLjJmcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICBnYXA6IDAuM3JlbTtcclxuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFibGUtaGVhZGVyLWNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFibGUtcm93LWNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGFibGUtZm9vdGVyLWNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTk4NzU0LCAjMjBjOTk3KTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzE5ODc1NDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbC1zdWN1cnNhbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sLWZhY3RvciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICM2ZjQyYzE7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2wtdmVuZGlkbyxcclxuICAgIC5jb2wtcGFnYWRvLFxyXG4gICAgLmNvbC1nYW5hbmNpYSB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29sLWdhbmFuY2lhIHtcclxuICAgICAgJi5wb3NpdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICMxOTg3NTQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5uZWdhdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBPdmVycmlkZSBjb2xvcnMgZm9yIGZvb3RlclxyXG4gICAgLnRhYmxlLWZvb3Rlci1jYXJkIC5jb2wtZ2FuYW5jaWEge1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEVzdGlsb3MgcGFyYSBsYSBzZWNjacODwrNuIGRlIGluZm9ybWFjacODwrNuIGRlbCBuw4PCum1lcm8gZ2FuYWRvclxyXG4ubnVtZXJvLWdhbmFkb3Itc2VjdGlvbiB7XHJcbiAgbWFyZ2luOiAycmVtIDA7XHJcbiAgXHJcbiAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgaDMge1xyXG4gICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgIFxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogI2ZmYzEwNztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubnVtZXJvLWdhbmFkb3ItY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmOGUxIDAlLCAjZmZlY2IzIDEwMCUpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmYzEwNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMjU1LCAxOTMsIDcsIDAuMik7XHJcbiAgICBcclxuICAgIC5udW1lcm8tZ2FuYWRvci1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgI2ZmYzEwNztcclxuICAgICAgXHJcbiAgICAgIC5udW1lcm8tZGlzcGxheSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5udW1lcm8tdGV4dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmNmYwMDtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsIEJsYWNrJywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm51bWVyby1sYWJlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgY29sb3I6ICM3OTU1NDg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudG90YWxlcy1nZW5lcmFsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogMnJlbTtcclxuICAgICAgICBcclxuICAgICAgICAudG90YWwtaXRlbSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC50b3RhbC12YWx1ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMyZTdkMzI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC50b3RhbC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM1ZDQwMzc7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN1Y3Vyc2FsZXMtZGV0YWxsZSB7XHJcbiAgICAgIC5kZXRhbGxlLWhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMS41ZnIgMS41ZnI7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjNWQ0MDM3O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICBcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZGV0YWxsZS1yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDEuNWZyIDEuNWZyO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAxOTMsIDcsIDAuMik7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMDUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc3VjdXJzYWwtbmFtZSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5mYWN0b3ItdmFsdWUge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjNmY0MmMxO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMTEsIDY2LCAxOTMsIDAuMSk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNhbnRpZGFkLXZhbHVlIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wYWdvLXZhbHVlIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJlc3BvbnNpdmVcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5udW1lcm8tZ2FuYWRvci1jYXJkIHtcclxuICAgICAgLm51bWVyby1nYW5hZG9yLWhlYWRlciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC50b3RhbGVzLWdlbmVyYWwge1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGdhcDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5zdWN1cnNhbGVzLWRldGFsbGUge1xyXG4gICAgICAgIC5kZXRhbGxlLWhlYWRlcixcclxuICAgICAgICAuZGV0YWxsZS1yb3cge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 71);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cerrado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SucursalComponent_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 67)(1, "div", 68)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SucursalComponent_div_13_div_4_span_5_Template, 2, 1, "span", 69)(6, SucursalComponent_div_13_div_4_span_6_Template, 2, 0, "span", 70);
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
function SucursalComponent_div_13_div_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 79)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.blockDetail);
  }
}
function SucursalComponent_div_13_div_5_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 88)(1, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Tiempo restante:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.timeUntilNextOpening);
  }
}
function SucursalComponent_div_13_div_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 80)(1, "div", 81)(2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 84)(7, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Abre a las:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, SucursalComponent_div_13_div_5_div_6_div_11_Template, 5, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.nextSorteoName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.nextSorteoOpenTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.timeUntilNextOpening);
  }
}
function SucursalComponent_div_13_div_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "El sorteo cerrar\u00E1 pronto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SucursalComponent_div_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SucursalComponent_div_13_div_5_div_5_Template, 3, 1, "div", 76)(6, SucursalComponent_div_13_div_5_div_6_Template, 12, 3, "div", 77)(7, SucursalComponent_div_13_div_5_div_7_Template, 4, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.blockMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.blockDetail);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.nextSorteoName && ctx_r1.nextSorteoOpenTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.nextSorteoName && ctx_r1.blockDetail.includes("minutos"));
  }
}
function SucursalComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_13_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openNumberModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " VENTA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SucursalComponent_div_13_div_4_Template, 7, 3, "div", 65)(5, SucursalComponent_div_13_div_5_Template, 8, 4, "div", 66);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 108)(1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 97)(6, "button", 109);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "div", 94)(3, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SucursalComponent_div_14_div_9_Template, 8, 3, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 100)(11, "div", 101)(12, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Total a Pagar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 104)(17, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_14_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.openNumberModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " + Agregar N\u00FAmero ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 106)(20, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_div_14_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r1.processSale());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " PAGAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.selectedNumbers)("ngForTrackBy", ctx_r1.trackByIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ctx_r1.getTotal().toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.isLoading || ctx_r1.isBlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r1.selectedNumbers.length === 0 || ctx_r1.isLoading || ctx_r1.isBlocked);
  }
}
function SucursalComponent_div_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 112)(1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "N\u00FAmero Ganador");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.getSorteoNumeroGanador("manana").toString().padStart(2, "0"));
  }
}
function SucursalComponent_div_27_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 112)(1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Total a Pagar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ctx_r1.getSorteoTotalPagar("manana").toFixed(2), "");
  }
}
function SucursalComponent_div_27_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 123)(1, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const numero_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](numero_r7.numero.toString().padStart(2, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", numero_r7.total.toFixed(0), "");
  }
}
function SucursalComponent_div_27_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SucursalComponent_div_27_div_12_div_1_Template, 5, 2, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.getSorteoNumerosVendidos("manana"));
  }
}
function SucursalComponent_div_27_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 126)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No hay n\u00FAmeros vendidos para este sorteo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SucursalComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 110)(1, "div", 111)(2, "div", 112)(3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Total Vendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SucursalComponent_div_27_div_7_Template, 5, 1, "div", 115)(8, SucursalComponent_div_27_div_8_Template, 5, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 116)(10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "N\u00FAmeros Vendidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SucursalComponent_div_27_div_12_Template, 2, 1, "div", 117)(13, SucursalComponent_div_27_div_13_Template, 3, 0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ctx_r1.getSorteoTotalVendido("manana").toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getSorteoNumeroGanador("manana") !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getSorteoTotalPagar("manana") > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getSorteoNumerosVendidos("manana").length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getSorteoNumerosVendidos("manana").length === 0);
  }
}
function SucursalComponent_div_28_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 112)(1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "N\u00FAmero Ganador");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.getSorteoNumeroGanador("tarde").toString().padStart(2, "0"));
  }
}
function SucursalComponent_div_28_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 112)(1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Total a Pagar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ctx_r1.getSorteoTotalPagar("tarde").toFixed(2), "");
  }
}
function SucursalComponent_div_28_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 123)(1, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const numero_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](numero_r8.numero.toString().padStart(2, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", numero_r8.total.toFixed(0), "");
  }
}
function SucursalComponent_div_28_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SucursalComponent_div_28_div_12_div_1_Template, 5, 2, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.getSorteoNumerosVendidos("tarde"));
  }
}
function SucursalComponent_div_28_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 126)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No hay n\u00FAmeros vendidos para este sorteo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SucursalComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 110)(1, "div", 111)(2, "div", 112)(3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Total Vendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SucursalComponent_div_28_div_7_Template, 5, 1, "div", 115)(8, SucursalComponent_div_28_div_8_Template, 5, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 116)(10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "N\u00FAmeros Vendidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SucursalComponent_div_28_div_12_Template, 2, 1, "div", 117)(13, SucursalComponent_div_28_div_13_Template, 3, 0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ctx_r1.getSorteoTotalVendido("tarde").toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getSorteoNumeroGanador("tarde") !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getSorteoTotalPagar("tarde") > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getSorteoNumerosVendidos("tarde").length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getSorteoNumerosVendidos("tarde").length === 0);
  }
}
function SucursalComponent_div_29_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 112)(1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "N\u00FAmero Ganador");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.getSorteoNumeroGanador("noche").toString().padStart(2, "0"));
  }
}
function SucursalComponent_div_29_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 112)(1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Total a Pagar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ctx_r1.getSorteoTotalPagar("noche").toFixed(2), "");
  }
}
function SucursalComponent_div_29_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 123)(1, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const numero_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](numero_r9.numero.toString().padStart(2, "0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", numero_r9.total.toFixed(0), "");
  }
}
function SucursalComponent_div_29_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SucursalComponent_div_29_div_12_div_1_Template, 5, 2, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.getSorteoNumerosVendidos("noche"));
  }
}
function SucursalComponent_div_29_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 126)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No hay n\u00FAmeros vendidos para este sorteo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SucursalComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 110)(1, "div", 111)(2, "div", 112)(3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Total Vendido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SucursalComponent_div_29_div_7_Template, 5, 1, "div", 115)(8, SucursalComponent_div_29_div_8_Template, 5, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 116)(10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "N\u00FAmeros Vendidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SucursalComponent_div_29_div_12_Template, 2, 1, "div", 117)(13, SucursalComponent_div_29_div_13_Template, 3, 0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("L ", ctx_r1.getSorteoTotalVendido("noche").toFixed(2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getSorteoNumeroGanador("noche") !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getSorteoTotalPagar("noche") > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getSorteoNumerosVendidos("noche").length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getSorteoNumerosVendidos("noche").length === 0);
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
    // Propiedades para el stepper de monto
    this.stepperAmount = 5; // Monto mínimo
    this.maxAmount = 1000; // Monto máximo configurable (opcional)
    this.stepIncrement = 5; // Incremento de 5 en 5
    // Propiedades para tabs de sorteos
    this.activeTab = 'manana';
    this.sorteoData = {};
    // Propiedades para la hora de Honduras
    this.currentHondurasTime = '';
    // Propiedades para información de bloqueo
    this.blockMessage = '';
    this.blockDetail = '';
    this.nextSorteoName = '';
    this.nextSorteoOpenTime = '';
    this.timeUntilNextOpening = '';
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
    }, 500);
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
        _this.setFilterDate();
        // Limpiar timer anterior si existe
        if (_this.sorteoUpdateInterval) {
          clearInterval(_this.sorteoUpdateInterval);
        }
        // Actualizar cada minuto - usar método que se puede limpiar
        _this.sorteoUpdateInterval = setInterval(/*#__PURE__*/(0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this.updateSorteoInfo();
        }), 500);
        // Cargar datos iniciales de todos los tabs
        yield _this.loadAllSorteoData();
      } catch (error) {
        _this.notificationService.showError('Error al cargar los datos');
      } finally {
        _this.isLoading = false;
        _this.notificationService.hideLoading();
      }
    })();
  }
  setFilterDate() {
    // Obtiene la fecha/hora actual en Honduras
    const hondurasNow = this.supabaseService.getHondurasDateTime();
    // Formatea sin zona: "YYYY-MM-DD hh:mm:ss" y extrae la parte de fecha
    const formatted = this.supabaseService.formatLocalDateForSupabase(hondurasNow);
    this.filterDate = formatted.split(' ')[0]; // -> "YYYY-MM-DD"
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
    // Obtener fecha actual de Honduras como Date
    const hondurasTime = this.supabaseService.getHondurasDateTime();
    // Formatear sin zona para Supabase: "YYYY-MM-DD hh:mm:ss"
    const formatted = this.supabaseService.formatLocalDateForSupabase(hondurasTime);
    // Extraer sólo la parte de fecha
    const datePart = formatted.split(' ')[0]; // "YYYY-MM-DD"
    const [yearFull, month, day] = datePart.split('-');
    const year = yearFull.slice(-2); // últimos dos dígitos
    const sucursalCode = sucursal.replace(/\s+/g, '').toUpperCase().substring(0, 3);
    const correlativoFormatted = correlativo.toString().padStart(4, '0');
    return `${sucursalCode}-REC-${year}${month}${day}-${correlativoFormatted}`;
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
          // Recargar datos de sorteos para mostrar la venta recién realizada
          yield _this3.loadAllSorteoData();
          _this3.cdr.detectChanges(); // Forzar actualización después de cargar datos
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
      this.stepperAmount = 5; // Reiniciar stepper al mínimo
      this.isProcessingModal = false;
      this.cdr.detectChanges();
    } else {
      this.isProcessingModal = false;
      this.notificationService.showError('Número inválido', 'El número debe estar entre 00 y 99');
    }
  }
  // Modal 2: Stepper de monto
  increaseAmount() {
    if (this.stepperAmount < this.maxAmount) {
      this.stepperAmount += this.stepIncrement;
      this.cdr.detectChanges();
    }
  }
  decreaseAmount() {
    if (this.stepperAmount > 5) {
      // Mínimo L 5
      this.stepperAmount -= this.stepIncrement;
      this.cdr.detectChanges();
    }
  }
  resetAmount() {
    this.stepperAmount = 5; // Reiniciar al mínimo
    this.cdr.detectChanges();
  }
  acceptStepperAmount() {
    if (this.isProcessingModal) {
      return;
    }
    this.isProcessingModal = true;
    if (this.stepperAmount >= 5 && this.stepperAmount <= this.maxAmount) {
      this.tempAmount = this.stepperAmount;
      // Transición al modal de confirmación
      this.showAmountModal = false;
      this.showConfirmModal = true;
      this.isProcessingModal = false;
      this.cdr.detectChanges();
    } else {
      this.isProcessingModal = false;
      this.notificationService.showError('Monto inválido', `El monto debe estar entre L 5 y L ${this.maxAmount}`);
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
    // Obtener hora de Honduras formateada
    const hnFormatted = this.supabaseService.formatLocalDateForSupabase(this.supabaseService.getHondurasDateTime());
    const [, timePart] = hnFormatted.split(' ');
    const [hourStr, minuteStr] = timePart.split(':');
    const currentTotalMinutes = parseInt(hourStr, 10) * 60 + parseInt(minuteStr, 10);
    // Obtener todos los sorteos configurados
    const sorteos = this.sorteoService.getAllSorteos();
    let isInActivePeriod = false;
    let activeSorteo = null;
    // Verificar si estamos en un período activo de ventas
    for (const sorteo of sorteos) {
      const [openHour, openMinute] = sorteo.openTime.split(':').map(Number);
      const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
      const openTimeInMinutes = openHour * 60 + openMinute;
      const closeTimeInMinutes = closeHour * 60 + closeMinute;
      // Caso especial para sorteo de noche que puede cruzar medianoche
      if (sorteo.name === 'noche') {
        if (closeTimeInMinutes < openTimeInMinutes) {
          // Cruza medianoche
          if (currentTotalMinutes >= openTimeInMinutes || currentTotalMinutes <= closeTimeInMinutes) {
            isInActivePeriod = true;
            activeSorteo = sorteo;
            break;
          }
        } else {
          // No cruza medianoche
          if (currentTotalMinutes >= openTimeInMinutes && currentTotalMinutes <= closeTimeInMinutes) {
            isInActivePeriod = true;
            activeSorteo = sorteo;
            break;
          }
        }
      } else {
        // Sorteos normales (mañana y tarde)
        if (currentTotalMinutes >= openTimeInMinutes && currentTotalMinutes <= closeTimeInMinutes) {
          isInActivePeriod = true;
          activeSorteo = sorteo;
          break;
        }
      }
    }
    // Si no estamos en un período activo, bloquear ventas
    if (!isInActivePeriod) {
      // Buscar el próximo sorteo que abrirá
      const nextSorteo = this.getNextOpeningSorteo(currentTotalMinutes);
      if (nextSorteo) {
        this.blockMessage = 'Ventas cerradas';
        this.blockDetail = `El próximo sorteo ${nextSorteo.label} abre a las ${nextSorteo.openTime}`;
        this.nextSorteoName = nextSorteo.label;
        this.nextSorteoOpenTime = nextSorteo.openTime;
        this.timeUntilNextOpening = this.calculateTimeUntilOpening(currentTotalMinutes, nextSorteo);
        // Solo mostrar notificación la primera vez que se bloquea
        if (!this.isBlocked) {
          this.notificationService.showWarning(this.blockMessage, this.blockDetail);
        }
      } else {
        this.blockMessage = 'Ventas cerradas';
        this.blockDetail = 'No hay sorteos disponibles en este momento';
        this.nextSorteoName = '';
        this.nextSorteoOpenTime = '';
        this.timeUntilNextOpening = '';
        if (!this.isBlocked) {
          this.notificationService.showWarning(this.blockMessage, this.blockDetail);
        }
      }
      this.isBlocked = true;
      this.cdr.detectChanges(); // Forzar actualización de la UI
      return;
    }
    // Si estamos en período activo, verificar restricciones del sorteo actual
    if (!this.currentSorteo || !activeSorteo) {
      this.isBlocked = false;
      return;
    }
    // Hora de cierre del sorteo activo
    const [closeHourStr, closeMinuteStr] = activeSorteo.closeTime.split(':');
    const closeTotalMinutes = parseInt(closeHourStr, 10) * 60 + parseInt(closeMinuteStr, 10);
    // Calcula minutos restantes (manejar cruce de medianoche)
    let minutesLeft = closeTotalMinutes - currentTotalMinutes;
    if (activeSorteo.name === 'noche' && closeTotalMinutes < currentTotalMinutes) {
      // Si es sorteo nocturno que cruza medianoche
      minutesLeft = 24 * 60 + closeTotalMinutes - currentTotalMinutes;
    }
    // Bloquear ventas en los últimos 5 minutos antes del sorteo
    if (minutesLeft <= 5 && minutesLeft >= 0) {
      if (!this.isBlocked) {
        if (minutesLeft <= 0) {
          this.blockMessage = 'Sorteo cerrado';
          this.blockDetail = 'El sorteo ya ha comenzado. No se pueden realizar más ventas.';
          this.notificationService.showWarning(this.blockMessage, this.blockDetail);
        } else {
          this.blockMessage = 'Ventas bloqueadas';
          this.blockDetail = `Faltan ${minutesLeft} minutos para el sorteo. Ventas bloqueadas.`;
          this.notificationService.showWarning(this.blockMessage, this.blockDetail);
        }
        this.nextSorteoName = '';
        this.nextSorteoOpenTime = '';
        this.timeUntilNextOpening = '';
      }
      this.isBlocked = true;
    } else {
      // Limpiar mensajes de bloqueo cuando se desbloquea
      if (this.isBlocked) {
        this.blockMessage = '';
        this.blockDetail = '';
        this.nextSorteoName = '';
        this.nextSorteoOpenTime = '';
        this.timeUntilNextOpening = '';
      }
      this.isBlocked = false;
    }
    this.cdr.detectChanges(); // Forzar actualización de la UI
  }
  // Método para encontrar el próximo sorteo que abrirá
  getNextOpeningSorteo(currentTotalMinutes) {
    const sorteos = this.sorteoService.getAllSorteos();
    // Buscar el próximo sorteo del mismo día
    for (const sorteo of sorteos) {
      const [openHour, openMinute] = sorteo.openTime.split(':').map(Number);
      const openTimeInMinutes = openHour * 60 + openMinute;
      if (openTimeInMinutes > currentTotalMinutes) {
        return sorteo;
      }
    }
    // Si no hay más sorteos hoy, el próximo será mañana (primer sorteo del día)
    return sorteos[0] || null;
  }
  // Método para calcular el tiempo hasta la próxima apertura
  calculateTimeUntilOpening(currentTotalMinutes, nextSorteo) {
    if (!nextSorteo) return '';
    const [openHour, openMinute] = nextSorteo.openTime.split(':').map(Number);
    const openTimeInMinutes = openHour * 60 + openMinute;
    let minutesUntilOpening;
    if (openTimeInMinutes > currentTotalMinutes) {
      // Sorteo abre hoy
      minutesUntilOpening = openTimeInMinutes - currentTotalMinutes;
    } else {
      // Sorteo abre mañana (es el primer sorteo del día)
      minutesUntilOpening = 24 * 60 - currentTotalMinutes + openTimeInMinutes;
    }
    const hours = Math.floor(minutesUntilOpening / 60);
    const minutes = minutesUntilOpening % 60;
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
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
  // Método mejorado para reimprimir recibo
  reprintReceipt(sale) {
    var _this5 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this5.notificationService.showLoading('Reimprimiendo recibo...');
        // Obtener detalles de la venta desde la base de datos
        const details = yield _this5.supabaseService.getSaleDetails(sale.id);
        if (details.length === 0) {
          _this5.notificationService.showError('Sin detalles', 'No se encontraron detalles para esta venta. No se puede reimprimir el recibo.');
          return;
        }
        // Generar recibo con los detalles obtenidos
        _this5.printService.generateThermalReceipt(sale, details);
        _this5.notificationService.showSuccess('Recibo reimpreso', `Recibo #${sale.numeroRecibo || sale.id} enviado a impresora`);
      } catch (error) {
        _this5.notificationService.showError('Error de reimpresión', 'Error al reimprimir el recibo. Por favor intente nuevamente.');
      } finally {
        _this5.notificationService.hideLoading();
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
  // ===== MÉTODOS PARA TABS DE SORTEOS =====
  loadAllSorteoData() {
    var _this6 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Cargando datos de sorteos de forma optimizada...');
        // Construir un Date a partir de filterDate (ej. "2025-07-24")
        const fecha = new Date(_this6.filterDate + 'T00:00:00');
        const sucursal = _this6.currentUser?.sucursal || 'Sucursal 1';
        // Inicializar estructura
        _this6.sorteoData = {
          manana: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          },
          tarde: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          },
          noche: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          }
        };
        // Ahora sí cargamos con la fecha filtrada
        yield _this6.loadSorteoDataOptimized(fecha, sucursal);
        // Determinar y mostrar el tab activo
        _this6.activeTab = _this6.getCurrentSorteoTab();
        console.log('Datos de sorteos cargados:', _this6.sorteoData);
        _this6.cdr.detectChanges();
      } catch (error) {
        console.error('Error cargando datos de sorteos:', error);
      }
    })();
  }
  // Método optimizado que hace una sola consulta agregada
  loadSorteoDataOptimized(fecha, sucursal) {
    var _this7 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Cargando datos de sorteos optimizados para fecha:', fecha, 'y sucursal:', sucursal);
        // Determinar rango completo del día
        const startOfDay = new Date(fecha);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(fecha);
        endOfDay.setHours(23, 59, 59, 999);
        // Formatear fechas para Supabase
        const startStr = _this7.supabaseService.formatLocalDateForSupabase(startOfDay);
        const endStr = _this7.supabaseService.formatLocalDateForSupabase(endOfDay);
        console.log('Rango formateado para consulta:', startStr, '->', endStr);
        // Consulta optimizada que obtiene todos los datos del día en una sola petición
        const {
          data,
          error
        } = yield _this7.supabaseService.client.from('sales').select(`
        sorteo,
        sale_details(numero, monto)
      `).eq('sucursal', sucursal).gte('fecha', startStr).lte('fecha', endStr);
        console.log('Consulta optimizada ejecutada:', {
          data,
          error
        });
        if (error) {
          console.error('Error en consulta optimizada:', error);
          return;
        }
        console.log('Datos obtenidos de consulta optimizada:', data);
        // Procesar los datos agregándolos por sorteo
        if (data?.length) {
          data.forEach(sale => {
            const clave = sale.sorteo?.toLowerCase();
            let mapped = clave;
            if (sale.sorteo?.toLowerCase() === 'mañana' || sale.sorteo?.toLowerCase() === 'manana') {
              mapped = 'manana';
            }
            const target = _this7.sorteoData[mapped];
            if (target && sale.sale_details) {
              sale.sale_details.forEach(detail => {
                target.totalVendido += detail.monto;
                const numStr = detail.numero.toString();
                if (!target.numerosVendidos[numStr]) {
                  target.numerosVendidos[numStr] = 0;
                }
                target.numerosVendidos[numStr] += detail.monto;
              });
            }
          });
        }
        console.log('Datos procesados y agregados:', _this7.sorteoData);
      } catch (error) {
        console.error('Error en loadSorteoDataOptimized:', error);
      }
    })();
  }
  // Determinar el sorteo actual basado en la hora de Honduras y los horarios configurados
  getCurrentSorteoTab() {
    console.log('Determinando sorteo actual basado en hora de Honduras y horarios configurados...');
    // Obtener la hora actual de Honduras
    const hondurasNow = this.supabaseService.getHondurasDateTime();
    const [, timeStr] = this.supabaseService.formatLocalDateForSupabase(hondurasNow).split(' ');
    const [hourStr, minuteStr] = timeStr.split(':');
    const currentHour = parseInt(hourStr, 10);
    const currentMinute = parseInt(minuteStr, 10);
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    console.log(`Hora actual de Honduras: ${hourStr.padStart(2, '0')}:${minuteStr.padStart(2, '0')}`);
    // Obtener todos los sorteos configurados
    const sorteos = this.sorteoService.getAllSorteos();
    // Encontrar el sorteo activo basado en los horarios configurados
    for (const sorteo of sorteos) {
      const [openHour, openMinute] = sorteo.openTime.split(':').map(Number);
      const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
      const openTimeInMinutes = openHour * 60 + openMinute;
      const closeTimeInMinutes = closeHour * 60 + closeMinute;
      console.log(`Verificando sorteo ${sorteo.name}: ${sorteo.openTime} - ${sorteo.closeTime}`);
      // Caso especial para sorteo de noche que puede cruzar medianoche
      if (sorteo.name === 'noche') {
        // Si closeTime es menor que openTime, significa que cruza medianoche
        if (closeTimeInMinutes < openTimeInMinutes) {
          // Caso 1: Hora actual está después de la apertura (mismo día)
          // Caso 2: Hora actual está antes del cierre (día siguiente)
          if (currentTimeInMinutes >= openTimeInMinutes || currentTimeInMinutes <= closeTimeInMinutes) {
            console.log(`Sorteo detectado: ${sorteo.name} (cruza medianoche)`);
            return sorteo.name;
          }
        } else {
          // Sorteo de noche normal (no cruza medianoche)
          if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes <= closeTimeInMinutes) {
            console.log(`Sorteo detectado: ${sorteo.name} (mismo día)`);
            return sorteo.name;
          }
        }
      } else {
        // Sorteos normales (mañana y tarde)
        if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes <= closeTimeInMinutes) {
          console.log(`Sorteo detectado: ${sorteo.name} (${sorteo.openTime} - ${sorteo.closeTime})`);
          return sorteo.name;
        }
      }
    }
    // Si no encuentra ningún sorteo activo, determinar cuál mostrar basado en proximidad
    console.log('No se encontró sorteo activo, determinando por proximidad...');
    // Buscar el próximo sorteo que abrirá
    const nextSorteo = this.getNextOpeningSorteo(currentTimeInMinutes);
    if (nextSorteo) {
      console.log(`Próximo sorteo: ${nextSorteo.name} abre a las ${nextSorteo.openTime}`);
      return nextSorteo.name;
    }
    // Si no hay próximo sorteo (caso muy raro), buscar el más reciente que cerró
    const recentlyClosedSorteo = this.getRecentlyClosedSorteo(currentTimeInMinutes);
    if (recentlyClosedSorteo) {
      console.log(`Sorteo recién cerrado: ${recentlyClosedSorteo.name}`);
      return recentlyClosedSorteo.name;
    }
    // Último fallback: usar mañana por defecto
    console.log('Último fallback: usando mañana por defecto');
    return 'manana';
  }
  // Método para encontrar el sorteo que cerró más recientemente
  getRecentlyClosedSorteo(currentTotalMinutes) {
    const sorteos = this.sorteoService.getAllSorteos();
    let recentlyClosedSorteo = null;
    let minTimeSinceClosure = Infinity;
    for (const sorteo of sorteos) {
      const [closeHour, closeMinute] = sorteo.closeTime.split(':').map(Number);
      const closeTimeInMinutes = closeHour * 60 + closeMinute;
      let timeSinceClosure;
      if (sorteo.name === 'noche' && closeTimeInMinutes < currentTotalMinutes) {
        // Sorteo nocturno que cerró hoy muy temprano
        timeSinceClosure = currentTotalMinutes - closeTimeInMinutes;
      } else if (closeTimeInMinutes < currentTotalMinutes) {
        // Sorteo que cerró hoy
        timeSinceClosure = currentTotalMinutes - closeTimeInMinutes;
      } else {
        // Sorteo que cerrará más tarde o mañana
        timeSinceClosure = 24 * 60 - (closeTimeInMinutes - currentTotalMinutes);
      }
      if (timeSinceClosure < minTimeSinceClosure && timeSinceClosure > 0) {
        minTimeSinceClosure = timeSinceClosure;
        recentlyClosedSorteo = sorteo;
      }
    }
    return recentlyClosedSorteo;
  }
  setActiveTab(tab) {
    var _this8 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.activeTab = tab;
      // Ya no necesitamos cargar números vendidos porque ya están cargados en loadAllSorteoData
      _this8.cdr.detectChanges();
    })();
  }
  // Método eliminado - ya no es necesario porque cargamos todo de una vez
  // private async loadNumerosVendidosForTab() - reemplazado por loadSorteoDataOptimized
  loadSorteoData(sorteo) {
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Este método ya no es necesario porque cargamos todo de una vez
      // Lo mantenemos por compatibilidad pero no hace nada
      return;
    })();
  }
  getSorteoTotalVendido(sorteo) {
    return this.sorteoData[sorteo]?.totalVendido || 0;
  }
  getSorteoNumeroGanador(sorteo) {
    return this.sorteoData[sorteo]?.numeroGanador || null;
  }
  getSorteoTotalPagar(sorteo) {
    return this.sorteoData[sorteo]?.totalPagar || 0;
  }
  getSorteoNumerosVendidos(sorteo) {
    const numerosVendidos = this.sorteoData[sorteo]?.numerosVendidos || {};
    return Object.keys(numerosVendidos).map(numero => ({
      numero: parseInt(numero),
      total: numerosVendidos[numero]
    })).sort((a, b) => a.numero - b.numero); // Ordenar por número ascendente (00-99)
  }
  calculateTotalPayout(sorteo, numeroGanador, factor) {
    const numerosVendidos = this.sorteoData[sorteo]?.numerosVendidos || {};
    if (numerosVendidos[numeroGanador]) {
      return numerosVendidos[numeroGanador] * factor;
    }
    return 0;
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
      decls: 133,
      vars: 34,
      consts: [[1, "lottery-interface"], [1, "header-bar"], [1, "time-display"], [1, "time-label"], [1, "time-value"], [1, "sucursal-title"], [1, "btn-header", "btn-cerrar", 3, "click", "disabled"], [1, "main-content"], ["class", "venta-screen", 4, "ngIf"], ["class", "jugadas-screen", 4, "ngIf"], [1, "sorteos-tabs-section"], [1, "tabs-header"], [1, "tab-btn", 3, "click"], [1, "fas", "fa-sun"], [1, "fas", "fa-cloud-sun"], [1, "fas", "fa-moon"], [1, "tab-content"], ["class", "tab-panel", 4, "ngIf"], [1, "modal", 3, "click"], [1, "modal-dialog", "modal-dialog-centered", 3, "click"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "fas", "fa-hashtag"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "calculator-container"], [1, "calculator-display"], [1, "display-label"], [1, "display-value"], [1, "calculator-keypad"], [1, "keypad-row"], ["type", "button", 1, "keypad-btn", 3, "click"], ["type", "button", 1, "keypad-btn", "keypad-clear", 3, "click"], ["type", "button", 1, "keypad-btn", "keypad-accept", 3, "click", "disabled"], [1, "fas", "fa-dollar-sign"], [1, "stepper-container"], [1, "stepper-controls"], ["type", "button", 1, "stepper-btn", "stepper-minus", 3, "click", "disabled"], [1, "fas", "fa-minus"], [1, "stepper-value"], [1, "amount-large"], [1, "currency"], ["type", "button", 1, "stepper-btn", "stepper-plus", 3, "click", "disabled"], [1, "fas", "fa-plus"], [1, "stepper-actions"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-lg", "stepper-action-btn", 3, "click"], [1, "fas", "fa-redo"], ["type", "button", 1, "btn", "btn-success", "btn-lg", "stepper-action-btn", 3, "click", "disabled"], [1, "fas", "fa-check"], [1, "stepper-info"], [1, "text-muted"], [1, "fas", "fa-info-circle"], [1, "fas", "fa-check-circle"], [1, "confirmation-container"], [1, "confirmation-card"], [1, "number-display-large"], [1, "amount-display"], [1, "confirmation-buttons"], ["type", "button", 1, "btn", "btn-success", "btn-lg", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", 3, "click"], [1, "fas", "fa-times"], [1, "venta-screen"], [1, "venta-button-container"], [1, "btn-venta", 3, "click", "disabled"], ["class", "sorteo-info", 4, "ngIf"], ["class", "alert alert-danger block-info", 4, "ngIf"], [1, "sorteo-info"], [1, "alert", "alert-info"], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-success"], [1, "text-danger"], [1, "alert", "alert-danger", "block-info"], [1, "block-header"], [1, "fas", "fa-lock"], ["class", "block-details", 4, "ngIf"], ["class", "next-sorteo-info", 4, "ngIf"], ["class", "closing-warning", 4, "ngIf"], [1, "block-details"], [1, "next-sorteo-info"], [1, "next-sorteo-card"], [1, "sorteo-name"], [1, "fas", "fa-clock"], [1, "opening-time"], [1, "label"], [1, "time"], ["class", "countdown", 4, "ngIf"], [1, "countdown"], [1, "time-remaining"], [1, "closing-warning"], [1, "fas", "fa-exclamation-triangle"], [1, "jugadas-screen"], [1, "jugadas-table"], [1, "table-header"], [1, "col-numero"], [1, "col-monto"], [1, "col-accion"], [1, "table-body"], ["class", "table-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "total-container"], [1, "total-card"], [1, "total-label"], [1, "total-amount"], [1, "add-more-container"], [1, "btn-add-more", 3, "click", "disabled"], [1, "pagar-container"], [1, "btn-pagar", 3, "click", "disabled"], [1, "table-row"], [1, "btn-remove", 3, "click", "disabled"], [1, "tab-panel"], [1, "sorteo-summary"], [1, "summary-card"], [1, "summary-label"], [1, "summary-value"], ["class", "summary-card", 4, "ngIf"], [1, "numeros-vendidos"], ["class", "numeros-grid", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "summary-value", "winner-number"], [1, "summary-value", "payout"], [1, "numeros-grid"], ["class", "numero-vendido-item", 4, "ngFor", "ngForOf"], [1, "numero-vendido-item"], [1, "numero"], [1, "monto"], [1, "no-data"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, SucursalComponent_div_13_Template, 6, 3, "div", 8)(14, SucursalComponent_div_14_Template, 22, 5, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10)(16, "div", 11)(17, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_17_listener() {
            return ctx.setActiveTab("manana");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " Ma\u00F1ana ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_20_listener() {
            return ctx.setActiveTab("tarde");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Tarde ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_23_listener() {
            return ctx.setActiveTab("noche");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Noche ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, SucursalComponent_div_27_Template, 14, 5, "div", 17)(28, SucursalComponent_div_28_Template, 14, 5, "div", 17)(29, SucursalComponent_div_29_Template, 14, 5, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_30_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_31_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 20)(33, "div", 21)(34, "h5", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Seleccionar N\u00FAmero ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_37_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 25)(41, "div", 26)(42, "div", 27)(43, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "NUMERO");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 30)(48, "div", 31)(49, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_49_listener($event) {
            ctx.pressModalNumber(1);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_51_listener($event) {
            ctx.pressModalNumber(2);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_53_listener($event) {
            ctx.pressModalNumber(3);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 31)(56, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_56_listener($event) {
            ctx.pressModalNumber(4);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_58_listener($event) {
            ctx.pressModalNumber(5);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "5");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_60_listener($event) {
            ctx.pressModalNumber(6);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 31)(63, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_63_listener($event) {
            ctx.pressModalNumber(7);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_65_listener($event) {
            ctx.pressModalNumber(8);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "8");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_67_listener($event) {
            ctx.pressModalNumber(9);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "9");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 31)(70, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_70_listener($event) {
            ctx.pressModalNumber(0);
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_72_listener($event) {
            ctx.clearModalNumber();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, " C ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_74_listener($event) {
            ctx.acceptModalNumber();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, " Aceptar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_76_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_77_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 20)(79, "div", 21)(80, "h5", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, " Ingresar Apuesta ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_83_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 25)(87, "div", 36)(88, "div", 37)(89, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_89_listener($event) {
            ctx.decreaseAmount();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 40)(92, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "Lempiras");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_96_listener($event) {
            ctx.increaseAmount();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](97, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 45)(99, "button", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_99_listener($event) {
            ctx.resetAmount();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](100, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, " Reiniciar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_102_listener($event) {
            ctx.acceptStepperAmount();
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](103, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, " Aceptar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 50)(106, "small", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, " Monto m\u00EDnimo: L 5 \u2022 Se incrementa de 5 en 5 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_109_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_div_click_110_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 20)(112, "div", 21)(113, "h5", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](114, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, " Confirmar Apuesta ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_116_listener() {
            return ctx.closeAllModals();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 25)(120, "div", 54)(121, "div", 55)(122, "div", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 58)(127, "button", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_127_listener() {
            return ctx.confirmAddNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](128, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, " CONFIRMAR ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SucursalComponent_Template_button_click_130_listener() {
            return ctx.cancelAddNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](131, "i", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, " Cancelar ");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.activeTab === "manana");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.activeTab === "tarde");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.activeTab === "noche");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeTab === "manana");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeTab === "tarde");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeTab === "noche");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.stepperAmount <= 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.stepperAmount);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.stepperAmount >= ctx.maxAmount);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.stepperAmount < 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("display", ctx.showConfirmModal ? "flex" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("show", ctx.showConfirmModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" # ", ctx.tempNumber !== null ? ctx.tempNumber.toString().padStart(2, "0") : "00", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" APUESTA: L ", ctx.tempAmount || 0, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
      styles: ["@charset \"UTF-8\";\n\n\n.lottery-interface[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  background: #f8f9fa;\n  min-height: 100vh;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n}\n\n.header-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  border-bottom: 1px solid #e9ecef;\n  padding: 20px 25px;\n  margin-bottom: 0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n\n.btn-header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #dee2e6;\n  padding: 10px 20px;\n  font-weight: 500;\n  cursor: pointer;\n  font-size: 14px;\n  color: #495057;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n\n.btn-header[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #adb5bd;\n  color: #343a40;\n}\n\n.btn-header[_ngcontent-%COMP%]:disabled {\n  background: #f8f9fa;\n  cursor: not-allowed;\n  opacity: 0.6;\n  color: #6c757d;\n}\n\n.time-display[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 8px 16px;\n}\n.time-display[_ngcontent-%COMP%]   .time-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  font-weight: 500;\n  margin-bottom: 2px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.time-display[_ngcontent-%COMP%]   .time-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2c5aa0;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n\n.sucursal-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #343a40;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: #ffffff;\n  border-radius: 0 0 8px 8px;\n  border-radius: 0 0 8px 8px;\n  min-height: 500px;\n}\n\n.venta-screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  text-align: center;\n}\n\n.btn-venta[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 100px;\n  background: #28a745;\n  border: none;\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\n.btn-venta[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #218838;\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(40, 167, 69, 0.4);\n}\n\n.btn-venta[_ngcontent-%COMP%]:disabled {\n  background: #6c757d;\n  color: white;\n  cursor: not-allowed;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n\n.sorteo-info[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  border: 1px solid #bee5eb;\n  background: #d1ecf1;\n  color: #0c5460;\n  text-align: center;\n  margin: 20px 0;\n  padding: 12px;\n  border-radius: 6px;\n  font-weight: 500;\n}\n\n.jugadas-table[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  margin-bottom: 20px;\n  background: white;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n\n.table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 60px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  font-weight: 600;\n  color: #495057;\n}\n\n.table-header[_ngcontent-%COMP%]   .col-numero[_ngcontent-%COMP%], .table-header[_ngcontent-%COMP%]   .col-monto[_ngcontent-%COMP%], .table-header[_ngcontent-%COMP%]   .col-accion[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-right: 1px solid #dee2e6;\n  text-align: center;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.table-header[_ngcontent-%COMP%]   .col-accion[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\n.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 60px;\n  border-bottom: 1px solid #f8f9fa;\n  transition: background-color 0.2s ease;\n}\n\n.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n\n.table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.table-body[_ngcontent-%COMP%]   .col-numero[_ngcontent-%COMP%], .table-body[_ngcontent-%COMP%]   .col-monto[_ngcontent-%COMP%], .table-body[_ngcontent-%COMP%]   .col-accion[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-right: 1px solid #f8f9fa;\n  text-align: center;\n  color: #495057;\n}\n\n.table-body[_ngcontent-%COMP%]   .col-accion[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\n.btn-remove[_ngcontent-%COMP%] {\n  background: #dc3545;\n  border: none;\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 4px;\n  transition: all 0.2s ease;\n}\n\n.btn-remove[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n  transform: scale(1.05);\n}\n\n.total-container[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n\n.total-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);\n  border: 2px solid #28a745;\n  border-radius: 12px;\n  padding: 20px 30px;\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.25);\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  min-width: 280px;\n}\n.total-card[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #ffffff;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.total-card[_ngcontent-%COMP%]   .total-amount[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #ffffff;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 8px 16px;\n  border-radius: 8px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  letter-spacing: 0.5px;\n}\n\n.total-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(40, 167, 69, 0.35);\n}\n\n.btn-add-more[_ngcontent-%COMP%] {\n  background: #17a2b8;\n  border: none;\n  padding: 10px 20px;\n  font-weight: 500;\n  cursor: pointer;\n  margin: 20px 0;\n  color: white;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n\n.btn-add-more[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #138496;\n  transform: translateY(-1px);\n}\n\n.btn-pagar[_ngcontent-%COMP%] {\n  background: #fd7e14;\n  border: none;\n  padding: 14px 32px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  float: right;\n  color: white;\n  border-radius: 6px;\n  transition: all 0.2s ease;\n}\n\n.btn-pagar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e76500;\n  transform: translateY(-1px);\n}\n\n.ventas-actuales[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  margin-top: 20px;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  max-height: 400px;\n  display: flex;\n  flex-direction: column;\n}\n\n.ventas-header[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  padding: 15px 20px;\n  flex-shrink: 0;\n}\n\n.ventas-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #495057;\n}\n\n.ventas-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n}\n\n.transacciones-header[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  border-bottom: 1px solid #dee2e6;\n  padding: 10px 20px;\n  font-weight: 600;\n  font-size: 12px;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.transaccion-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  border-bottom: 1px solid #f8f9fa;\n  transition: background-color 0.2s ease;\n}\n\n.transaccion-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n}\n\n.transaccion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.transaccion-left[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.transaccion-left[_ngcontent-%COMP%]   .fecha-hora[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c757d;\n  margin-bottom: 2px;\n  font-weight: 500;\n}\n\n.transaccion-left[_ngcontent-%COMP%]   .numero-recibo[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #007bff;\n  margin-bottom: 2px;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n\n.transaccion-left[_ngcontent-%COMP%]   .correlativo[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #28a745;\n  margin-bottom: 4px;\n  font-weight: 600;\n  font-family: \"Courier New\", monospace;\n}\n\n.transaccion-left[_ngcontent-%COMP%]   .numeros-jugados[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.numero-small[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #495057;\n  background: #e9ecef;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-weight: 500;\n}\n\n.transaccion-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.transaccion-right[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: #495057;\n}\n\n.btn-reimprimir[_ngcontent-%COMP%] {\n  background: #6c757d;\n  border: none;\n  padding: 4px 8px;\n  font-size: 10px;\n  cursor: pointer;\n  color: white;\n  border-radius: 3px;\n  transition: all 0.2s ease;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.btn-reimprimir[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n  padding: 12px;\n  margin: 15px 0;\n  border-radius: 6px;\n  font-weight: 500;\n}\n\n.alert.alert-info[_ngcontent-%COMP%] {\n  background: #d1ecf1;\n  color: #0c5460;\n  border-color: #bee5eb;\n}\n\n.alert.alert-danger[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  border-color: #f5c6cb;\n}\n\n.alert.block-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);\n  border: 2px solid #dc3545;\n  border-radius: 12px;\n  padding: 20px;\n  margin: 20px 0;\n  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.15);\n}\n.alert.block-info[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #721c24;\n  margin-bottom: 15px;\n}\n.alert.block-info[_ngcontent-%COMP%]   .block-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #dc3545;\n}\n.alert.block-info[_ngcontent-%COMP%]   .block-details[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.alert.block-info[_ngcontent-%COMP%]   .block-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #721c24;\n  font-weight: 500;\n}\n.alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%]   .next-sorteo-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid #f5c6cb;\n  border-radius: 8px;\n  padding: 15px;\n}\n.alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%]   .next-sorteo-card[_ngcontent-%COMP%]   .sorteo-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #495057;\n  margin-bottom: 10px;\n}\n.alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%]   .next-sorteo-card[_ngcontent-%COMP%]   .sorteo-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 14px;\n}\n.alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%]   .next-sorteo-card[_ngcontent-%COMP%]   .opening-time[_ngcontent-%COMP%], .alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%]   .next-sorteo-card[_ngcontent-%COMP%]   .countdown[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%]   .next-sorteo-card[_ngcontent-%COMP%]   .opening-time[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%], .alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%]   .next-sorteo-card[_ngcontent-%COMP%]   .countdown[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6c757d;\n  font-weight: 500;\n}\n.alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%]   .next-sorteo-card[_ngcontent-%COMP%]   .opening-time[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%], .alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%]   .next-sorteo-card[_ngcontent-%COMP%]   .countdown[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #007bff;\n  background: rgba(0, 123, 255, 0.1);\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%]   .next-sorteo-card[_ngcontent-%COMP%]   .opening-time[_ngcontent-%COMP%]   .time-remaining[_ngcontent-%COMP%], .alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%]   .next-sorteo-card[_ngcontent-%COMP%]   .countdown[_ngcontent-%COMP%]   .time-remaining[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #dc3545;\n  background: rgba(220, 53, 69, 0.1);\n  padding: 6px 12px;\n  border-radius: 6px;\n  border: 1px solid rgba(220, 53, 69, 0.2);\n}\n.alert.block-info[_ngcontent-%COMP%]   .next-sorteo-info[_ngcontent-%COMP%]   .next-sorteo-card[_ngcontent-%COMP%]   .countdown[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.alert.block-info[_ngcontent-%COMP%]   .closing-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 193, 7, 0.2);\n  border: 1px solid #ffc107;\n  border-radius: 6px;\n  padding: 10px 15px;\n  margin-top: 15px;\n}\n.alert.block-info[_ngcontent-%COMP%]   .closing-warning[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #856404;\n  font-size: 16px;\n}\n.alert.block-info[_ngcontent-%COMP%]   .closing-warning[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #856404;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1050;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  display: none;\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.modal.show[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  z-index: 1055;\n  transform: scale(0.9);\n  transition: transform 0.2s ease-in-out;\n}\n\n.modal.show[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  max-width: 400px;\n  width: 100%;\n  border: 1px solid #dee2e6;\n  transform: translateY(-10px);\n  transition: transform 0.2s ease-in-out;\n}\n\n.modal.show[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid #dee2e6;\n  background: #f8f9fa;\n  position: relative;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  color: #495057;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  font-size: 24px;\n  font-weight: 600;\n  color: #6c757d;\n  background: none;\n  border: none;\n  cursor: pointer;\n  z-index: 1055;\n  line-height: 1;\n  width: 30px;\n  height: 30px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n\n\n.calculator-container[_ngcontent-%COMP%] {\n  width: 100%;\n  background: white;\n}\n\n.calculator-display[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  padding: 25px;\n  text-align: center;\n}\n\n.display-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n  display: block;\n  font-weight: 600;\n}\n\n.display-value[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 600;\n  color: #495057;\n  font-family: \"Courier New\", monospace;\n  min-height: 40px;\n  line-height: 1;\n}\n\n.calculator-keypad[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: white;\n}\n\n.keypad-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.keypad-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.keypad-btn[_ngcontent-%COMP%] {\n  height: 50px;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  background: white;\n  font-size: 16px;\n  font-weight: 600;\n  color: #495057;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.keypad-btn[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  border-color: #adb5bd;\n}\n\n.keypad-btn[_ngcontent-%COMP%]:active {\n  background: #e9ecef;\n}\n\n.keypad-btn[_ngcontent-%COMP%]:disabled {\n  background: #f8f9fa;\n  color: #6c757d;\n  cursor: not-allowed;\n}\n\n.keypad-clear[_ngcontent-%COMP%] {\n  background: #dc3545 !important;\n  color: white !important;\n  border-color: #dc3545 !important;\n}\n\n.keypad-clear[_ngcontent-%COMP%]:hover {\n  background: #c82333 !important;\n  border-color: #c82333 !important;\n}\n\n.keypad-accept[_ngcontent-%COMP%] {\n  background: #28a745 !important;\n  color: white !important;\n  border-color: #28a745 !important;\n}\n\n.keypad-accept[_ngcontent-%COMP%]:hover {\n  background: #218838 !important;\n  border-color: #218838 !important;\n}\n\n\n\n.confirmation-container[_ngcontent-%COMP%] {\n  padding: 25px;\n  text-align: center;\n  background: white;\n}\n\n.confirmation-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 30px;\n  border: 1px solid #dee2e6;\n}\n\n.number-display-large[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  color: #28a745;\n  margin-bottom: 15px;\n  font-family: \"Courier New\", monospace;\n}\n\n.amount-display[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #495057;\n  margin-bottom: 25px;\n  font-weight: 600;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border: none;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 14px;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n\n\n\n.stepper-container[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: white;\n  text-align: center;\n}\n\n.stepper-display[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.stepper-display[_ngcontent-%COMP%]   .display-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6c757d;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.stepper-display[_ngcontent-%COMP%]   .display-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #28a745;\n  font-family: \"Courier New\", monospace;\n}\n\n.stepper-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 30px;\n  padding: 20px 0;\n}\n\n.stepper-btn[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 2px solid #28a745;\n  background: white;\n  color: #28a745;\n  font-size: 24px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.stepper-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #28a745;\n  color: white;\n  transform: scale(1.05);\n}\n\n.stepper-btn[_ngcontent-%COMP%]:disabled {\n  border-color: #dee2e6;\n  color: #6c757d;\n  cursor: not-allowed;\n  opacity: 0.6;\n}\n\n.stepper-value[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 150px;\n}\n\n.stepper-value[_ngcontent-%COMP%]   .amount-large[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 36px;\n  font-weight: 700;\n  color: #28a745;\n  font-family: \"Courier New\", monospace;\n  line-height: 1;\n}\n\n.stepper-value[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: #6c757d;\n  margin-top: 5px;\n  font-weight: 500;\n}\n\n.stepper-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n  margin-bottom: 20px;\n}\n\n.stepper-action-btn[_ngcontent-%COMP%] {\n  padding: 15px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  font-size: 16px;\n  border: 2px solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.stepper-action-btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #6c757d;\n  color: #6c757d;\n  background: white;\n}\n\n.stepper-action-btn.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #6c757d;\n  color: white;\n}\n\n.stepper-action-btn.btn-success[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background: #28a745;\n  color: white;\n}\n\n.stepper-action-btn.btn-success[_ngcontent-%COMP%]:hover {\n  background: #218838;\n  border-color: #218838;\n}\n\n.stepper-action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.stepper-info[_ngcontent-%COMP%] {\n  padding: 15px;\n  background: #f8f9fa;\n  border-radius: 6px;\n  border: 1px solid #dee2e6;\n}\n\n.stepper-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: #6c757d;\n  color: white;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n\n.confirmation-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #5a6268;\n}\n\n\n\n.sorteos-tabs-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin: 20px 25px;\n  overflow: hidden;\n}\n\n.tabs-header[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 15px 20px;\n  background: transparent;\n  border: none;\n  color: #6c757d;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 14px;\n}\n\n.tab-btn[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  color: #495057;\n}\n\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  box-shadow: inset 0 -3px 0 rgba(255, 255, 255, 0.3);\n}\n\n.tab-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.tab-panel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease-in;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.sorteo-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 15px;\n  margin-bottom: 25px;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  padding: 20px;\n  text-align: center;\n  transition: all 0.2s ease;\n}\n\n.summary-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin-bottom: 8px;\n}\n\n.summary-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #28a745;\n  font-family: \"Courier New\", monospace;\n}\n\n.summary-value.winner-number[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 36px;\n}\n\n.summary-value.payout[_ngcontent-%COMP%] {\n  color: #fd7e14;\n}\n\n.numeros-vendidos[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #495057;\n  margin-bottom: 15px;\n  font-weight: 600;\n  padding-bottom: 8px;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.numeros-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 12px;\n  max-height: 300px;\n  overflow-y: auto;\n}\n\n.numero-vendido-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  padding: 12px;\n  text-align: center;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.numero-vendido-item[_ngcontent-%COMP%]:hover {\n  border-color: #007bff;\n  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.2);\n}\n\n.numero-vendido-item[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  font-weight: 700;\n  color: #007bff;\n  font-family: \"Courier New\", monospace;\n  margin-bottom: 4px;\n}\n\n.numero-vendido-item[_ngcontent-%COMP%]   .monto[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #28a745;\n  font-weight: 600;\n}\n\n.no-data[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  color: #6c757d;\n  font-style: italic;\n}\n\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n\n\n\n@media (max-width: 768px) {\n  .lottery-interface[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0;\n  }\n  .header-bar[_ngcontent-%COMP%] {\n    padding: 15px;\n    border-radius: 0;\n  }\n  .btn-header[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 12px;\n  }\n  .sucursal-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    padding: 20px;\n    border-radius: 0;\n  }\n  .btn-venta[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 80px;\n    font-size: 20px;\n  }\n  .table-header[_ngcontent-%COMP%], .table-body[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 50px;\n  }\n  .col-numero[_ngcontent-%COMP%], .col-monto[_ngcontent-%COMP%], .col-accion[_ngcontent-%COMP%] {\n    padding: 8px !important;\n    font-size: 13px;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    max-width: 90%;\n    margin: 20px;\n  }\n  .ventas-actuales[_ngcontent-%COMP%] {\n    max-height: 300px;\n  }\n  .transaccion-item[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n  }\n  .transaccion-left[_ngcontent-%COMP%]   .fecha-hora[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .numero-small[_ngcontent-%COMP%] {\n    font-size: 9px;\n    padding: 1px 4px;\n  }\n  \n\n  .sorteos-tabs-section[_ngcontent-%COMP%] {\n    margin: 15px;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    padding: 12px 10px;\n    font-size: 12px;\n  }\n  .tab-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .tab-content[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .sorteo-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .summary-value[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .summary-value.winner-number[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .numeros-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n    gap: 8px;\n  }\n  .numero-vendido-item[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .numero-vendido-item[_ngcontent-%COMP%]   .numero[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL0xvdGVyaWElMjB2MS9sb3RlcmlhL3NyYy9hcHAvY29tcG9uZW50cy9zdWN1cnNhbC9zdWN1cnNhbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zdWN1cnNhbC9zdWN1cnNhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsd0NBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNERBQUE7RUFDQSx1Q0FBQTtBRENGOztBQ0VBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QURDRjs7QUNFQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FEQ0Y7O0FDRUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURDRjs7QUNFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURDRjtBQ0NFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QURBSjs7QUNJQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEREY7O0FDSUE7RUFDRSxhQUFBO0VB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WUFBQTtFRHZDRjtFQzBDQTtJQUNFLGVBQUE7RUR4Q0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIERJU0XDg8KRTyBNSU5JTUFMSVNUQSBDT04gUEFMRVRBIFNVVElMICovXG4ubG90dGVyeS1pbnRlcmZhY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVhZGVyLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG4gIHBhZGRpbmc6IDIwcHggMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5idG4taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLmJ0bi1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItY29sb3I6ICNhZGI1YmQ7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuXG4uYnRuLWhlYWRlcjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbi50aW1lLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xufVxuLnRpbWUtZGlzcGxheSAudGltZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLnRpbWUtZGlzcGxheSAudGltZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyYzVhYTA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbn1cblxuLnN1Y3Vyc2FsLXRpdGxlIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbn1cblxuLnZlbnRhLXNjcmVlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXZlbnRhIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjhhNzQ1O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uYnRuLXZlbnRhOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogIzIxODgzODtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoNDAsIDE2NywgNjksIDAuNCk7XG59XG5cbi5idG4tdmVudGE6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5zb3J0ZW8taW5mbyAuYWxlcnQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmVlNWViO1xuICBiYWNrZ3JvdW5kOiAjZDFlY2YxO1xuICBjb2xvcjogIzBjNTQ2MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uanVnYWRhcy10YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4udGFibGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDYwcHg7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLnRhYmxlLWhlYWRlciAuY29sLW51bWVybyxcbi50YWJsZS1oZWFkZXIgLmNvbC1tb250byxcbi50YWJsZS1oZWFkZXIgLmNvbC1hY2Npb24ge1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4udGFibGUtaGVhZGVyIC5jb2wtYWNjaW9uIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4udGFibGUtYm9keSAudGFibGUtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDYwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOWZhO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLnRhYmxlLWJvZHkgLnRhYmxlLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG59XG5cbi50YWJsZS1ib2R5IC50YWJsZS1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50YWJsZS1ib2R5IC5jb2wtbnVtZXJvLFxuLnRhYmxlLWJvZHkgLmNvbC1tb250byxcbi50YWJsZS1ib2R5IC5jb2wtYWNjaW9uIHtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y4ZjlmYTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLnRhYmxlLWJvZHkgLmNvbC1hY2Npb24ge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5idG4tcmVtb3ZlIHtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5idG4tcmVtb3ZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2M4MjMzMztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuLnRvdGFsLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRvdGFsLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjhhNzQ1IDAlLCAjMjBjOTk3IDEwMCUpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjhhNzQ1O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg0MCwgMTY3LCA2OSwgMC4yNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgbWluLXdpZHRoOiAyODBweDtcbn1cbi50b3RhbC1jYXJkIC50b3RhbC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLnRvdGFsLWNhcmQgLnRvdGFsLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4udG90YWwtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjM1KTtcbn1cblxuLmJ0bi1hZGQtbW9yZSB7XG4gIGJhY2tncm91bmQ6ICMxN2EyYjg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuLWFkZC1tb3JlOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogIzEzODQ5NjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4uYnRuLXBhZ2FyIHtcbiAgYmFja2dyb3VuZDogI2ZkN2UxNDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxNHB4IDMycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4uYnRuLXBhZ2FyOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogI2U3NjUwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4udmVudGFzLWFjdHVhbGVzIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udmVudGFzLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udmVudGFzLWhlYWRlciBoNCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLnZlbnRhcy1ib2R5IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWluLWhlaWdodDogMDtcbn1cblxuLnRyYW5zYWNjaW9uZXMtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4udHJhbnNhY2Npb24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjlmYTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG59XG5cbi50cmFuc2FjY2lvbi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbn1cblxuLnRyYW5zYWNjaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50cmFuc2FjY2lvbi1sZWZ0IHtcbiAgZmxleDogMTtcbn1cblxuLnRyYW5zYWNjaW9uLWxlZnQgLmZlY2hhLWhvcmEge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50cmFuc2FjY2lvbi1sZWZ0IC5udW1lcm8tcmVjaWJvIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzAwN2JmZjtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi50cmFuc2FjY2lvbi1sZWZ0IC5jb3JyZWxhdGl2byB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzI4YTc0NTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi50cmFuc2FjY2lvbi1sZWZ0IC5udW1lcm9zLWp1Z2Fkb3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNHB4O1xufVxuXG4ubnVtZXJvLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udHJhbnNhY2Npb24tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRyYW5zYWNjaW9uLXJpZ2h0IC50b3RhbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi5idG4tcmVpbXByaW1pciB7XG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5idG4tcmVpbXByaW1pcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1YTYyNjg7XG59XG5cbi5hbGVydCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hbGVydC5hbGVydC1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2QxZWNmMTtcbiAgY29sb3I6ICMwYzU0NjA7XG4gIGJvcmRlci1jb2xvcjogI2JlZTVlYjtcbn1cblxuLmFsZXJ0LmFsZXJ0LWRhbmdlciB7XG4gIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XG4gIGNvbG9yOiAjNzIxYzI0O1xuICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XG59XG5cbi5hbGVydC5ibG9jay1pbmZvIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZDdkYSAwJSwgI2Y1YzZjYiAxMDAlKTtcbiAgYm9yZGVyOiAycHggc29saWQgI2RjMzU0NTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyMjAsIDUzLCA2OSwgMC4xNSk7XG59XG4uYWxlcnQuYmxvY2staW5mbyAuYmxvY2staGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNzIxYzI0O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmFsZXJ0LmJsb2NrLWluZm8gLmJsb2NrLWhlYWRlciBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2RjMzU0NTtcbn1cbi5hbGVydC5ibG9jay1pbmZvIC5ibG9jay1kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5hbGVydC5ibG9jay1pbmZvIC5ibG9jay1kZXRhaWxzIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYWxlcnQuYmxvY2staW5mbyAubmV4dC1zb3J0ZW8taW5mbyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uYWxlcnQuYmxvY2staW5mbyAubmV4dC1zb3J0ZW8taW5mbyAubmV4dC1zb3J0ZW8tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzZjYjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmFsZXJ0LmJsb2NrLWluZm8gLm5leHQtc29ydGVvLWluZm8gLm5leHQtc29ydGVvLWNhcmQgLnNvcnRlby1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYWxlcnQuYmxvY2staW5mbyAubmV4dC1zb3J0ZW8taW5mbyAubmV4dC1zb3J0ZW8tY2FyZCAuc29ydGVvLW5hbWUgaSB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYWxlcnQuYmxvY2staW5mbyAubmV4dC1zb3J0ZW8taW5mbyAubmV4dC1zb3J0ZW8tY2FyZCAub3BlbmluZy10aW1lLCAuYWxlcnQuYmxvY2staW5mbyAubmV4dC1zb3J0ZW8taW5mbyAubmV4dC1zb3J0ZW8tY2FyZCAuY291bnRkb3duIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uYWxlcnQuYmxvY2staW5mbyAubmV4dC1zb3J0ZW8taW5mbyAubmV4dC1zb3J0ZW8tY2FyZCAub3BlbmluZy10aW1lIC5sYWJlbCwgLmFsZXJ0LmJsb2NrLWluZm8gLm5leHQtc29ydGVvLWluZm8gLm5leHQtc29ydGVvLWNhcmQgLmNvdW50ZG93biAubGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmFsZXJ0LmJsb2NrLWluZm8gLm5leHQtc29ydGVvLWluZm8gLm5leHQtc29ydGVvLWNhcmQgLm9wZW5pbmctdGltZSAudGltZSwgLmFsZXJ0LmJsb2NrLWluZm8gLm5leHQtc29ydGVvLWluZm8gLm5leHQtc29ydGVvLWNhcmQgLmNvdW50ZG93biAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5hbGVydC5ibG9jay1pbmZvIC5uZXh0LXNvcnRlby1pbmZvIC5uZXh0LXNvcnRlby1jYXJkIC5vcGVuaW5nLXRpbWUgLnRpbWUtcmVtYWluaW5nLCAuYWxlcnQuYmxvY2staW5mbyAubmV4dC1zb3J0ZW8taW5mbyAubmV4dC1zb3J0ZW8tY2FyZCAuY291bnRkb3duIC50aW1lLXJlbWFpbmluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNkYzM1NDU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksIDAuMSk7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLCA1MywgNjksIDAuMik7XG59XG4uYWxlcnQuYmxvY2staW5mbyAubmV4dC1zb3J0ZW8taW5mbyAubmV4dC1zb3J0ZW8tY2FyZCAuY291bnRkb3duOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmFsZXJ0LmJsb2NrLWluZm8gLmNsb3Npbmctd2FybmluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MywgNywgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYzEwNztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uYWxlcnQuYmxvY2staW5mbyAuY2xvc2luZy13YXJuaW5nIGkge1xuICBjb2xvcjogIzg1NjQwNDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmFsZXJ0LmJsb2NrLWluZm8gLmNsb3Npbmctd2FybmluZyBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzg1NjQwNDtcbn1cblxuLyogRVNUSUxPUyBQQVJBIE1PREFMRVMgLSBNSU5JTUFMSVNUQVMgQ09OIFRSQU5TSUNJT05FUyBTVUFWRVMgKi9cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogMTA1MDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tb2RhbC5zaG93IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB6LWluZGV4OiAxMDU1O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tb2RhbC5zaG93IC5tb2RhbC1jb250ZW50IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwNTU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ubW9kYWwtaGVhZGVyIC5jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qIENhbGN1bGFkb3JhIE1pbmltYWxpc3RhICovXG4uY2FsY3VsYXRvci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jYWxjdWxhdG9yLWRpc3BsYXkge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgcGFkZGluZzogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlzcGxheS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kaXNwbGF5LXZhbHVlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmNhbGN1bGF0b3Ita2V5cGFkIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5rZXlwYWQtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ua2V5cGFkLXJvdzpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmtleXBhZC1idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLmtleXBhZC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItY29sb3I6ICNhZGI1YmQ7XG59XG5cbi5rZXlwYWQtYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XG59XG5cbi5rZXlwYWQtYnRuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5rZXlwYWQtY2xlYXIge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbn1cblxuLmtleXBhZC1jbGVhcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjODIzMzMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjYzgyMzMzICFpbXBvcnRhbnQ7XG59XG5cbi5rZXlwYWQtYWNjZXB0IHtcbiAgYmFja2dyb3VuZDogIzI4YTc0NSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5rZXlwYWQtYWNjZXB0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzIxODgzOCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMyMTg4MzggIWltcG9ydGFudDtcbn1cblxuLyogTW9kYWwgZGUgY29uZmlybWFjacODwrNuICovXG4uY29uZmlybWF0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb25maXJtYXRpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLm51bWJlci1kaXNwbGF5LWxhcmdlIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzI4YTc0NTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xufVxuXG4uYW1vdW50LWRpc3BsYXkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTJweDtcbn1cblxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4ge1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4tc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4tc3VjY2Vzczpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMTg4Mzg7XG59XG5cbi8qIEVTVElMT1MgUEFSQSBTVEVQUEVSIERFIE1PTlRPICovXG4uc3RlcHBlci1jb250YWluZXIge1xuICBwYWRkaW5nOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RlcHBlci1kaXNwbGF5IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnN0ZXBwZXItZGlzcGxheSAuZGlzcGxheS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zdGVwcGVyLWRpc3BsYXkgLmRpc3BsYXktdmFsdWUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi5zdGVwcGVyLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4uc3RlcHBlci1idG4ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyOGE3NDU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzI4YTc0NTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN0ZXBwZXItYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogIzI4YTc0NTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4uc3RlcHBlci1idG46ZGlzYWJsZWQge1xuICBib3JkZXItY29sb3I6ICNkZWUyZTY7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5zdGVwcGVyLXZhbHVlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG4uc3RlcHBlci12YWx1ZSAuYW1vdW50LWxhcmdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5zdGVwcGVyLXZhbHVlIC5jdXJyZW5jeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdGVwcGVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnN0ZXBwZXItYWN0aW9uLWJ0biB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLnN0ZXBwZXItYWN0aW9uLWJ0bi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnN0ZXBwZXItYWN0aW9uLWJ0bi5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGVwcGVyLWFjdGlvbi1idG4uYnRuLXN1Y2Nlc3Mge1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0ZXBwZXItYWN0aW9uLWJ0bi5idG4tc3VjY2Vzczpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMTg4Mzg7XG4gIGJvcmRlci1jb2xvcjogIzIxODgzODtcbn1cblxuLnN0ZXBwZXItYWN0aW9uLWJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnN0ZXBwZXItaW5mbyB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLnN0ZXBwZXItaW5mbyBzbWFsbCB7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMgLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xufVxuXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMgLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xufVxuXG4vKiBFU1RJTE9TIFBBUkEgVEFCUyBERSBTT1JURU9TICovXG4uc29ydGVvcy10YWJzLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW46IDIwcHggMjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYnMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi50YWItYnRuIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRhYi1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuLnRhYi1idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0zcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi50YWItYnRuIGkge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50YWItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50YWItcGFuZWwge1xuICBhbmltYXRpb246IGZhZGVJbiAwLjJzIGVhc2UtaW47XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4uc29ydGVvLXN1bW1hcnkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uc3VtbWFyeS1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5zdW1tYXJ5LWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufVxuXG4uc3VtbWFyeS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2Yzc1N2Q7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnN1bW1hcnktdmFsdWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG59XG5cbi5zdW1tYXJ5LXZhbHVlLndpbm5lci1udW1iZXIge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4uc3VtbWFyeS12YWx1ZS5wYXlvdXQge1xuICBjb2xvcjogI2ZkN2UxNDtcbn1cblxuLm51bWVyb3MtdmVuZGlkb3MgaDUge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5udW1lcm9zLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMjBweCwgMWZyKSk7XG4gIGdhcDogMTJweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5udW1lcm8tdmVuZGlkby1pdGVtIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5udW1lcm8tdmVuZGlkby1pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAxMjMsIDI1NSwgMC4yKTtcbn1cblxuLm51bWVyby12ZW5kaWRvLWl0ZW0gLm51bWVybyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLm51bWVyby12ZW5kaWRvLWl0ZW0gLm1vbnRvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzI4YTc0NTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5vLWRhdGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGNvbG9yOiAjNmM3NTdkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uby1kYXRhIHAge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyogUkVTUE9OU0lWRSBNSU5JTUFMSVNUQSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sb3R0ZXJ5LWludGVyZmFjZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuaGVhZGVyLWJhciB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIC5idG4taGVhZGVyIHtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLnN1Y3Vyc2FsLXRpdGxlIGgyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLm1haW4tY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG4gIC5idG4tdmVudGEge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC50YWJsZS1oZWFkZXIsXG4gIC50YWJsZS1ib2R5IC50YWJsZS1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA1MHB4O1xuICB9XG4gIC5jb2wtbnVtZXJvLFxuICAuY29sLW1vbnRvLFxuICAuY29sLWFjY2lvbiB7XG4gICAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbiAgLnZlbnRhcy1hY3R1YWxlcyB7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gIH1cbiAgLnRyYW5zYWNjaW9uLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgfVxuICAudHJhbnNhY2Npb24tbGVmdCAuZmVjaGEtaG9yYSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5udW1lcm8tc21hbGwge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIHBhZGRpbmc6IDFweCA0cHg7XG4gIH1cbiAgLyogUmVzcG9uc2l2ZSBwYXJhIHRhYnMgKi9cbiAgLnNvcnRlb3MtdGFicy1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cbiAgLnRhYi1idG4ge1xuICAgIHBhZGRpbmc6IDEycHggMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLnRhYi1idG4gaSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC50YWItY29udGVudCB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuc29ydGVvLXN1bW1hcnkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuICAuc3VtbWFyeS1jYXJkIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5zdW1tYXJ5LXZhbHVlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLnN1bW1hcnktdmFsdWUud2lubmVyLW51bWJlciB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIC5udW1lcm9zLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDhweDtcbiAgfVxuICAubnVtZXJvLXZlbmRpZG8taXRlbSB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIC5udW1lcm8tdmVuZGlkby1pdGVtIC5udW1lcm8ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSIsIi8qIERJU0XDg8KRTyBNSU5JTUFMSVNUQSBDT04gUEFMRVRBIFNVVElMICovXHJcblxyXG4ubG90dGVyeS1pbnRlcmZhY2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4uaGVhZGVyLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIHBhZGRpbmc6IDIwcHggMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG4uYnRuLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5idG4taGVhZGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1jb2xvcjogI2FkYjViZDtcclxuICBjb2xvcjogIzM0M2E0MDtcclxufVxyXG5cclxuLmJ0bi1oZWFkZXI6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi50aW1lLWRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgXHJcbiAgLnRpbWUtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWUtdmFsdWUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMyYzVhYTA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcclxuICB9XHJcbn1cclxuXHJcbi5zdWN1cnNhbC10aXRsZSBoMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi52ZW50YS1zY3JlZW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi12ZW50YSB7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZDogIzI4YTc0NTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjMpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uYnRuLXZlbnRhOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiAjMjE4ODM4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoNDAsIDE2NywgNjksIDAuNCk7XHJcbn1cclxuXHJcbi5idG4tdmVudGE6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuLnNvcnRlby1pbmZvIC5hbGVydCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2JlZTVlYjtcclxuICBiYWNrZ3JvdW5kOiAjZDFlY2YxO1xyXG4gIGNvbG9yOiAjMGM1NDYwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uanVnYWRhcy10YWJsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG4udGFibGUtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLnRhYmxlLWhlYWRlciAuY29sLW51bWVybyxcclxuLnRhYmxlLWhlYWRlciAuY29sLW1vbnRvLFxyXG4udGFibGUtaGVhZGVyIC5jb2wtYWNjaW9uIHtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLnRhYmxlLWhlYWRlciAuY29sLWFjY2lvbiB7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4udGFibGUtYm9keSAudGFibGUtcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA2MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOWZhO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4udGFibGUtYm9keSAudGFibGUtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG59XHJcblxyXG4udGFibGUtYm9keSAudGFibGUtcm93Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZS1ib2R5IC5jb2wtbnVtZXJvLFxyXG4udGFibGUtYm9keSAuY29sLW1vbnRvLFxyXG4udGFibGUtYm9keSAuY29sLWFjY2lvbiB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjhmOWZhO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLnRhYmxlLWJvZHkgLmNvbC1hY2Npb24ge1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1yZW1vdmUge1xyXG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYnRuLXJlbW92ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2M4MjMzMztcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4vLyBFc3RpbG9zIHBhcmEgZWwgdG90YWwgYSBwYWdhclxyXG4udG90YWwtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udG90YWwtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSAwJSwgIzIwYzk5NyAxMDAlKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMjhhNzQ1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg0MCwgMTY3LCA2OSwgMC4yNSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTVweDtcclxuICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gIFxyXG4gIC50b3RhbC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLnRvdGFsLWFtb3VudCB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gRWZlY3RvIGhvdmVyIHBhcmEgZWwgdG90YWxcclxuLnRvdGFsLWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDZweCAxNnB4IHJnYmEoNDAsIDE2NywgNjksIDAuMzUpO1xyXG59XHJcblxyXG4uYnRuLWFkZC1tb3JlIHtcclxuICBiYWNrZ3JvdW5kOiAjMTdhMmI4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJ0bi1hZGQtbW9yZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogIzEzODQ5NjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5idG4tcGFnYXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZDdlMTQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDE0cHggMzJweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmJ0bi1wYWdhcjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgYmFja2dyb3VuZDogI2U3NjUwMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi52ZW50YXMtYWN0dWFsZXMge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi52ZW50YXMtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnZlbnRhcy1oZWFkZXIgaDQge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLnZlbnRhcy1ib2R5IHtcclxuICBmbGV4OiAxO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMDtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uZXMtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOWZhO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4udHJhbnNhY2Npb24taXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLWxlZnQge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi50cmFuc2FjY2lvbi1sZWZ0IC5mZWNoYS1ob3JhIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50cmFuc2FjY2lvbi1sZWZ0IC5udW1lcm8tcmVjaWJvIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLWxlZnQgLmNvcnJlbGF0aXZvIHtcclxuICBmb250LXNpemU6IDlweDtcclxuICBjb2xvcjogIzI4YTc0NTtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4udHJhbnNhY2Npb24tbGVmdCAubnVtZXJvcy1qdWdhZG9zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLm51bWVyby1zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgcGFkZGluZzogMnB4IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRyYW5zYWNjaW9uLXJpZ2h0IC50b3RhbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcbi5idG4tcmVpbXByaW1pciB7XHJcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNHB4IDhweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuLmJ0bi1yZWltcHJpbWlyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBtYXJnaW46IDE1cHggMDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmFsZXJ0LmFsZXJ0LWluZm8ge1xyXG4gIGJhY2tncm91bmQ6ICNkMWVjZjE7XHJcbiAgY29sb3I6ICMwYzU0NjA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYmVlNWViO1xyXG59XHJcblxyXG4uYWxlcnQuYWxlcnQtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xyXG4gIGNvbG9yOiAjNzIxYzI0O1xyXG4gIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcclxufVxyXG5cclxuLy8gRXN0aWxvcyBlc3BlY8ODwq1maWNvcyBwYXJhIGluZm9ybWFjacODwrNuIGRlIGJsb3F1ZW8gbWVqb3JhZGFcclxuLmFsZXJ0LmJsb2NrLWluZm8ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGQ3ZGEgMCUsICNmNWM2Y2IgMTAwJSk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RjMzU0NTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDIyMCwgNTMsIDY5LCAwLjE1KTtcclxuICBcclxuICAuYmxvY2staGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNzIxYzI0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ibG9jay1kZXRhaWxzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5uZXh0LXNvcnRlby1pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBcclxuICAgIC5uZXh0LXNvcnRlby1jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIFxyXG4gICAgICAuc29ydGVvLW5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAub3BlbmluZy10aW1lLCAuY291bnRkb3duIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICBcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAudGltZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRpbWUtcmVtYWluaW5nIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksIDAuMSk7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLCA1MywgNjksIDAuMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY291bnRkb3duOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNsb3Npbmctd2FybmluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMik7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZjMTA3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIFxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjODU2NDA0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogRVNUSUxPUyBQQVJBIE1PREFMRVMgLSBNSU5JTUFMSVNUQVMgQ09OIFRSQU5TSUNJT05FUyBTVUFWRVMgKi9cclxuLm1vZGFsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgei1pbmRleDogMTA1MDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tb2RhbC5zaG93IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHotaW5kZXg6IDEwNTU7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubW9kYWwuc2hvdyAubW9kYWwtZGlhbG9nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1vZGFsLnNob3cgLm1vZGFsLWNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1vZGFsLXRpdGxlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMDU1O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIgLmNsb3NlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyogQ2FsY3VsYWRvcmEgTWluaW1hbGlzdGEgKi9cclxuLmNhbGN1bGF0b3ItY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhbGN1bGF0b3ItZGlzcGxheSB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpc3BsYXktbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5kaXNwbGF5LXZhbHVlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5jYWxjdWxhdG9yLWtleXBhZCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmtleXBhZC1yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmtleXBhZC1yb3c6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmtleXBhZC1idG4ge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmtleXBhZC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYWRiNWJkO1xyXG59XHJcblxyXG4ua2V5cGFkLWJ0bjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbn1cclxuXHJcbi5rZXlwYWQtYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5rZXlwYWQtY2xlYXIge1xyXG4gIGJhY2tncm91bmQ6ICNkYzM1NDUgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmtleXBhZC1jbGVhcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2M4MjMzMyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2M4MjMzMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ua2V5cGFkLWFjY2VwdCB7XHJcbiAgYmFja2dyb3VuZDogIzI4YTc0NSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ua2V5cGFkLWFjY2VwdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzIxODgzOCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzIxODgzOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBNb2RhbCBkZSBjb25maXJtYWNpw4PCs24gKi9cclxuLmNvbmZpcm1hdGlvbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLm51bWJlci1kaXNwbGF5LWxhcmdlIHtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzI4YTc0NTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi5hbW91bnQtZGlzcGxheSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1idXR0b25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tYnV0dG9ucyAuYnRuIHtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4tc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogIzI4YTc0NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb25maXJtYXRpb24tYnV0dG9ucyAuYnRuLXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyMTg4Mzg7XHJcbn1cclxuXHJcbi8qIEVTVElMT1MgUEFSQSBTVEVQUEVSIERFIE1PTlRPICovXHJcbi5zdGVwcGVyLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWRpc3BsYXkge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWRpc3BsYXkgLmRpc3BsYXktbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWRpc3BsYXkgLmRpc3BsYXktdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWNvbnRyb2xzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG4uc3RlcHBlci1idG4ge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzI4YTc0NTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogIzI4YTc0NTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3RlcHBlci1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWJ0bjpkaXNhYmxlZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4uc3RlcHBlci12YWx1ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5zdGVwcGVyLXZhbHVlIC5hbW91bnQtbGFyZ2Uge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbi5zdGVwcGVyLXZhbHVlIC5jdXJyZW5jeSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc3RlcHBlci1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnN0ZXBwZXItYWN0aW9uLWJ0biB7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IDJweCBzb2xpZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWFjdGlvbi1idG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcclxuICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWFjdGlvbi1idG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN0ZXBwZXItYWN0aW9uLWJ0bi5idG4tc3VjY2VzcyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG4gIGJhY2tncm91bmQ6ICMyOGE3NDU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3RlcHBlci1hY3Rpb24tYnRuLmJ0bi1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjE4ODM4O1xyXG4gIGJvcmRlci1jb2xvcjogIzIxODgzODtcclxufVxyXG5cclxuLnN0ZXBwZXItYWN0aW9uLWJ0bjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWluZm8ge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnN0ZXBwZXItaW5mbyBzbWFsbCB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4tc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbmZpcm1hdGlvbi1idXR0b25zIC5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNWE2MjY4O1xyXG59XHJcblxyXG4uY29uZmlybWF0aW9uLWJ1dHRvbnMgLmJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1YTYyNjg7XHJcbn1cclxuXHJcbi8qIEVTVElMT1MgUEFSQSBUQUJTIERFIFNPUlRFT1MgKi9cclxuLnNvcnRlb3MtdGFicy1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICBtYXJnaW46IDIwcHggMjVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGFicy1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYi1idG4ge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50YWItYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4udGFiLWJ0bi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTNweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxufVxyXG5cclxuLnRhYi1idG4gaSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi50YWItcGFuZWwge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMnMgZWFzZS1pbjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7IH1cclxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG59XHJcblxyXG4uc29ydGVvLXN1bW1hcnkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgZ2FwOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnN1bW1hcnktY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG4uc3VtbWFyeS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLnN1bW1hcnktdmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbi5zdW1tYXJ5LXZhbHVlLndpbm5lci1udW1iZXIge1xyXG4gIGNvbG9yOiAjZGMzNTQ1O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLnN1bW1hcnktdmFsdWUucGF5b3V0IHtcclxuICBjb2xvcjogI2ZkN2UxNDtcclxufVxyXG5cclxuLm51bWVyb3MtdmVuZGlkb3MgaDUge1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4ubnVtZXJvcy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEyMHB4LCAxZnIpKTtcclxuICBnYXA6IDEycHg7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm51bWVyby12ZW5kaWRvLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubnVtZXJvLXZlbmRpZG8taXRlbTpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMTIzLDI1NSwwLjIpO1xyXG59XHJcblxyXG4ubnVtZXJvLXZlbmRpZG8taXRlbSAubnVtZXJvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLm51bWVyby12ZW5kaWRvLWl0ZW0gLm1vbnRvIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMyOGE3NDU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm5vLWRhdGEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLm5vLWRhdGEgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLyogUkVTUE9OU0lWRSBNSU5JTUFMSVNUQSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubG90dGVyeS1pbnRlcmZhY2Uge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWJhciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWN1cnNhbC10aXRsZSBoMiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tdmVudGEge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFibGUtaGVhZGVyLFxyXG4gIC50YWJsZS1ib2R5IC50YWJsZS1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtbnVtZXJvLFxyXG4gIC5jb2wtbW9udG8sXHJcbiAgLmNvbC1hY2Npb24ge1xyXG4gICAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudmVudGFzLWFjdHVhbGVzIHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAudHJhbnNhY2Npb24taXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50cmFuc2FjY2lvbi1sZWZ0IC5mZWNoYS1ob3JhIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm51bWVyby1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHBhZGRpbmc6IDFweCA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlc3BvbnNpdmUgcGFyYSB0YWJzICovXHJcbiAgLnNvcnRlb3MtdGFicy1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYi1idG4ge1xyXG4gICAgcGFkZGluZzogMTJweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAudGFiLWJ0biBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zb3J0ZW8tc3VtbWFyeSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnN1bW1hcnktY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuc3VtbWFyeS12YWx1ZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdW1tYXJ5LXZhbHVlLndpbm5lci1udW1iZXIge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuICBcclxuICAubnVtZXJvcy1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMHB4LCAxZnIpKTtcclxuICAgIGdhcDogOHB4O1xyXG4gIH1cclxuICBcclxuICAubnVtZXJvLXZlbmRpZG8taXRlbSB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5udW1lcm8tdmVuZGlkby1pdGVtIC5udW1lcm8ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
  name: 'manana',
  label: 'Mañana',
  closeTime: '9:15',
  openTime: '00:47'
}, {
  name: 'tarde',
  label: 'Tarde',
  closeTime: '14:55',
  openTime: '13:00'
}, {
  name: 'noche',
  label: 'Noche',
  closeTime: '22:40',
  openTime: '20:00'
}];

/***/ }),

/***/ 8892:
/*!********************************************!*\
  !*** ./src/app/services/export.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportService: () => (/* binding */ ExportService)
/* harmony export */ });
/* harmony import */ var C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ 3857);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf-autotable */ 8198);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 5841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _supabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supabase.service */ 9692);







class ExportService {
  constructor(supabaseService) {
    this.supabaseService = supabaseService;
  }
  exportToExcel(_x) {
    var _this = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data, filename = 'reporte-diario') {
      try {
        // Crear un nuevo workbook
        const workbook = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_new();
        // ===== HOJA 1: RESUMEN GENERAL =====
        const resumenData = [['REPORTE DIARIO - SISTEMA DE LOTERÍA'], ['Fecha:', data.resumenGeneral.fechaReporte], ['Hora:', data.resumenGeneral.horaReporte], ['Filtros Aplicados:', data.resumenGeneral.filtroAplicado], [''], ['RESUMEN GENERAL'], ['Indicador', 'Valor'], ['Total Vendido', data.resumenGeneral.totalVendido], ['Total Pagado', data.resumenGeneral.totalPagado], ['Ganancia Neta', data.resumenGeneral.gananciaNeta], ['Ventas Totales', data.resumenGeneral.ventasTotales]];
        const wsResumen = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.aoa_to_sheet(resumenData);
        // Aplicar formato
        wsResumen['!cols'] = [{
          width: 20
        }, {
          width: 15
        }];
        xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_append_sheet(workbook, wsResumen, 'Resumen General');
        // ===== HOJA 2: RESUMEN POR SORTEO =====
        const sorteoHeaders = ['Sorteo', 'Total Vendido', 'Total Pagado', 'Ganancia Neta', 'Ventas', 'Estado', 'No. Ganador', 'Factor'];
        const sorteoRows = data.resumenPorSorteo.length > 0 ? data.resumenPorSorteo.map(s => [s.sorteo, s.totalVendido, s.totalPagado, s.gananciaNeta, s.ventasTotales, s.estado, s.numeroGanador, s.factor]) : [['Sin datos', 0, 0, 0, 0, '', '', 0]];
        const sorteoData = [['RESUMEN POR SORTEO'], [''], sorteoHeaders, ...sorteoRows];
        const wsSorteo = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.aoa_to_sheet(sorteoData);
        wsSorteo['!cols'] = [{
          width: 15
        }, {
          width: 12
        }, {
          width: 12
        }, {
          width: 12
        }, {
          width: 8
        }, {
          width: 10
        }, {
          width: 12
        }, {
          width: 8
        }];
        xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_append_sheet(workbook, wsSorteo, 'Resumen por Sorteo');
        // ===== HOJA 3: RESUMEN POR SUCURSAL =====
        const sucursalHeaders = ['Sucursal', 'Factor', 'Total Vendido', 'Total Pagado', 'Ganancia Neta', 'Ventas'];
        const sucursalRows = data.resumenPorSucursal.length > 0 ? data.resumenPorSucursal.map(s => [s.sucursal, s.factor, s.totalVendido, s.totalPagado, s.gananciaNeta, s.ventasTotales]) : [['Sin datos', 0, 0, 0, 0, 0]];
        const sucursalData = [['RESUMEN POR SUCURSAL'], [''], sucursalHeaders, ...sucursalRows];
        const wsSucursal = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.aoa_to_sheet(sucursalData);
        wsSucursal['!cols'] = [{
          width: 15
        }, {
          width: 8
        }, {
          width: 12
        }, {
          width: 12
        }, {
          width: 12
        }, {
          width: 8
        }];
        xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_append_sheet(workbook, wsSucursal, 'Resumen por Sucursal');
        // ===== HOJA 4: NÚMEROS VENDIDOS POR SORTEO =====
        const numerosData = [['NÚMEROS VENDIDOS POR SORTEO'], ['']];
        if (data.numerosPorSorteo.length > 0) {
          data.numerosPorSorteo.forEach(grupo => {
            // Título del grupo
            numerosData.push([`${grupo.sorteo} - ${grupo.sucursal} (Total: L ${grupo.totalSorteoSucursal.toFixed(2)})`]);
            numerosData.push(['Número', 'Total Vendido', 'Cantidad Ventas', 'Porcentaje']);
            // Números del grupo
            grupo.numeros.forEach(num => {
              numerosData.push([num.numero.toString().padStart(2, '0'), num.totalVendido, num.cantidadVentas, num.porcentaje]);
            });
            numerosData.push(['']); // Línea en blanco entre grupos
          });
        } else {
          numerosData.push(['Sin datos de números vendidos']);
        }
        const wsNumeros = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.aoa_to_sheet(numerosData);
        wsNumeros['!cols'] = [{
          width: 10
        }, {
          width: 12
        }, {
          width: 12
        }, {
          width: 10
        }];
        xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_append_sheet(workbook, wsNumeros, 'Números por Sorteo');
        // ===== HOJA 5: DETALLE DE VENTAS =====
        const ventasHeaders = ['No. Recibo', 'Fecha', 'Hora', 'Sorteo', 'Sucursal', 'Números', 'Total', 'Estado'];
        const ventasRows = data.detalleVentas.length > 0 ? data.detalleVentas.map(v => [v.numeroRecibo, v.fecha, v.hora, v.sorteo, v.sucursal, v.numeros, v.total, v.estado]) : [['Sin datos', '', '', '', '', '', 0, '']];
        const ventasData = [['DETALLE COMPLETO DE VENTAS'], [''], ventasHeaders, ...ventasRows, [''], ['TOTALES:'], ['Total de Ventas:', data.detalleVentas.length], ['Monto Total:', data.resumenGeneral.totalVendido]];
        const wsVentas = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.aoa_to_sheet(ventasData);
        wsVentas['!cols'] = [{
          width: 12
        }, {
          width: 12
        }, {
          width: 10
        }, {
          width: 12
        }, {
          width: 15
        }, {
          width: 30
        }, {
          width: 10
        }, {
          width: 10
        }];
        xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_append_sheet(workbook, wsVentas, 'Detalle de Ventas');
        // Generar el archivo Excel con fecha de Honduras
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_5__.write(workbook, {
          bookType: 'xlsx',
          type: 'array'
        });
        const blob = new Blob([excelBuffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const hondurasDate = _this.supabaseService.formatDateTimeLocalHonduras(_this.supabaseService.getHondurasDateTime()).split('T')[0];
        (0,file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs)(blob, `${filename}-${hondurasDate}.xlsx`);
      } catch (error) {
        console.error('Error exportando a Excel:', error);
        throw error;
      }
    }).apply(this, arguments);
  }
  // Nuevo método para exportar Excel tal como se ve en el admin
  exportVisualToExcel(_x2) {
    var _this2 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data, filename = 'reporte-admin-visual') {
      try {
        // Crear un nuevo workbook
        const workbook = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_new();
        // ===== HOJA 1: DASHBOARD PRINCIPAL =====
        const dashboardData = [['REPORTE ADMINISTRADOR - SISTEMA DE LOTERÍA'], ['Fecha:', data.fechaReporte], ['Hora:', data.horaReporte], ['Filtros Aplicados:', data.filtroAplicado], [''], ['DASHBOARD PRINCIPAL'], ['Indicador', 'Valor'], ['Total Vendido', `L ${data.dashboard.totalVendido.toFixed(2)}`], ['Total Pagado', `L ${data.dashboard.totalPagado.toFixed(2)}`], ['Ganancia Neta', `L ${data.dashboard.gananciaNeta.toFixed(2)}`], ['Ventas Totales', data.dashboard.ventasTotales]];
        const wsDashboard = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.aoa_to_sheet(dashboardData);
        // Aplicar formato
        wsDashboard['!cols'] = [{
          width: 20
        }, {
          width: 15
        }];
        xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_append_sheet(workbook, wsDashboard, 'Dashboard');
        // ===== HOJA 2: DETALLE POR SUCURSALES (LA MÁS IMPORTANTE) =====
        const sucursalData = [['DETALLE POR SUCURSALES'], [''], data.detallePorSucursales.headers, ...data.detallePorSucursales.filas.map(fila => {
          // Si ya es un array, usar directamente
          if (Array.isArray(fila)) {
            return fila;
          }
          // Si es un objeto, convertir a array
          return [fila.sucursal, fila.factor, fila.totalVendido, fila.totalPagado, fila.gananciaNeta];
        }), [''], ['TOTAL GENERAL'],
        // Manejar totales como array u objeto
        Array.isArray(data.detallePorSucursales.totales) ? data.detallePorSucursales.totales : [data.detallePorSucursales.totales.sucursal, data.detallePorSucursales.totales.factor, data.detallePorSucursales.totales.totalVendido, data.detallePorSucursales.totales.totalPagado, data.detallePorSucursales.totales.gananciaNeta]];
        const wsSucursales = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.aoa_to_sheet(sucursalData);
        wsSucursales['!cols'] = [{
          width: 20
        }, {
          width: 10
        }, {
          width: 15
        }, {
          width: 15
        }, {
          width: 15
        }];
        xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_append_sheet(workbook, wsSucursales, 'Detalle Sucursales');
        // ===== HOJA 3: NÚMEROS POR SORTEO =====
        const numerosData = [['NÚMEROS VENDIDOS POR SORTEO'], ['']];
        if (data.numerosPorSorteo.length > 0) {
          data.numerosPorSorteo.forEach(sorteoGroup => {
            sorteoGroup.sucursales.forEach(sucursalGroup => {
              // Título del grupo
              numerosData.push([`${sorteoGroup.sorteo} - ${sucursalGroup.sucursal}`]);
              // Top 5 si existe
              if (sucursalGroup.topNumeros && sucursalGroup.topNumeros.length > 0) {
                numerosData.push(['Top 5 Números Más Vendidos:']);
                numerosData.push(['Posición', 'Número', 'Total Vendido']);
                for (let i = 0; i < Math.min(5, sucursalGroup.topNumeros.length); i++) {
                  const num = sucursalGroup.topNumeros[i];
                  numerosData.push([`#${i + 1}`, num.numero.toString().padStart(2, '0'), num.totalVendido]);
                }
              }
              // Tablero completo
              if (sucursalGroup.numeros && sucursalGroup.numeros.length > 0) {
                numerosData.push(['']);
                numerosData.push(['Tablero Completo (00-99):']);
                numerosData.push(['Número', 'Total Vendido', 'Cantidad Ventas']);
                sucursalGroup.numeros.forEach(num => {
                  numerosData.push([num.numero.toString().padStart(2, '0'), num.totalVendido, num.cantidadVentas]);
                });
              }
              numerosData.push(['']); // Línea en blanco entre grupos
            });
          });
        } else {
          numerosData.push(['Sin datos de números vendidos']);
        }
        const wsNumeros = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.aoa_to_sheet(numerosData);
        wsNumeros['!cols'] = [{
          width: 15
        }, {
          width: 12
        }, {
          width: 12
        }];
        xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_append_sheet(workbook, wsNumeros, 'Números por Sorteo');
        // Generar el archivo Excel con fecha de Honduras
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_5__.write(workbook, {
          bookType: 'xlsx',
          type: 'array'
        });
        const blob = new Blob([excelBuffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const hondurasDate = _this2.supabaseService.formatDateTimeLocalHonduras(_this2.supabaseService.getHondurasDateTime()).split('T')[0];
        (0,file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs)(blob, `${filename}-${hondurasDate}.xlsx`);
      } catch (error) {
        console.error('Error exportando Excel visual:', error);
        throw error;
      }
    }).apply(this, arguments);
  }
  exportToPDF(_x3) {
    var _this3 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data, filename = 'reporte-diario') {
      try {
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]();
        const pageHeight = doc.internal.pageSize.height;
        let yPosition = 20;
        // Función auxiliar para agregar nueva página si es necesario
        const checkNewPage = (requiredSpace = 30) => {
          if (yPosition + requiredSpace > pageHeight - 20) {
            doc.addPage();
            yPosition = 20;
          }
        };
        // ===== ENCABEZADO PRINCIPAL =====
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('REPORTE DIARIO - SISTEMA DE LOTERÍA', 20, yPosition);
        yPosition += 15;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`Fecha: ${data.resumenGeneral.fechaReporte}`, 20, yPosition);
        doc.text(`Hora: ${data.resumenGeneral.horaReporte}`, 120, yPosition);
        yPosition += 8;
        doc.setFontSize(10);
        doc.text(`Filtros: ${data.resumenGeneral.filtroAplicado}`, 20, yPosition);
        yPosition += 20;
        // ===== 1. RESUMEN GENERAL =====
        checkNewPage(80);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('1. RESUMEN GENERAL', 20, yPosition);
        yPosition += 15;
        const resumenTable = [['Indicador', 'Valor'], ['Total Vendido', `L ${data.resumenGeneral.totalVendido.toFixed(2)}`], ['Total Pagado', `L ${data.resumenGeneral.totalPagado.toFixed(2)}`], ['Ganancia Neta', `L ${data.resumenGeneral.gananciaNeta.toFixed(2)}`], ['Ventas Totales', data.resumenGeneral.ventasTotales.toString()]];
        (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__["default"])(doc, {
          head: [resumenTable[0]],
          body: resumenTable.slice(1),
          startY: yPosition,
          theme: 'striped',
          headStyles: {
            fillColor: [41, 128, 185],
            textColor: 255
          },
          styles: {
            fontSize: 11,
            cellPadding: 5
          },
          columnStyles: {
            0: {
              cellWidth: 60
            },
            1: {
              cellWidth: 60,
              halign: 'right'
            }
          }
        });
        yPosition = doc.lastAutoTable.finalY + 25;
        // ===== 2. RESUMEN POR SORTEO =====
        checkNewPage(100);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('2. RESUMEN POR SORTEO', 20, yPosition);
        yPosition += 15;
        if (data.resumenPorSorteo.length > 0) {
          const sorteoTableData = [['Sorteo', 'Vendido', 'Pagado', 'Ganancia', 'Ventas', 'Estado', 'Ganador', 'Factor'], ...data.resumenPorSorteo.map(s => [s.sorteo, `L ${s.totalVendido.toFixed(0)}`, `L ${s.totalPagado.toFixed(0)}`, `L ${s.gananciaNeta.toFixed(0)}`, s.ventasTotales.toString(), s.estado, s.numeroGanador, s.factor.toString()])];
          (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__["default"])(doc, {
            head: [sorteoTableData[0]],
            body: sorteoTableData.slice(1),
            startY: yPosition,
            theme: 'striped',
            headStyles: {
              fillColor: [46, 204, 113],
              textColor: 255
            },
            styles: {
              fontSize: 9,
              cellPadding: 3
            },
            columnStyles: {
              0: {
                cellWidth: 25
              },
              1: {
                cellWidth: 20,
                halign: 'right'
              },
              2: {
                cellWidth: 20,
                halign: 'right'
              },
              3: {
                cellWidth: 20,
                halign: 'right'
              },
              4: {
                cellWidth: 15,
                halign: 'center'
              },
              5: {
                cellWidth: 20,
                halign: 'center'
              },
              6: {
                cellWidth: 20,
                halign: 'center'
              },
              7: {
                cellWidth: 15,
                halign: 'center'
              }
            }
          });
          yPosition = doc.lastAutoTable.finalY + 25;
        }
        // ===== 3. RESUMEN POR SUCURSAL =====
        checkNewPage(100);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('3. RESUMEN POR SUCURSAL', 20, yPosition);
        yPosition += 15;
        if (data.resumenPorSucursal.length > 0) {
          const sucursalTableData = [['Sucursal', 'Factor', 'Total Vendido', 'Total Pagado', 'Ganancia', 'Ventas'], ...data.resumenPorSucursal.map(s => [s.sucursal, `${s.factor}x`, `L ${s.totalVendido.toFixed(2)}`, `L ${s.totalPagado.toFixed(2)}`, `L ${s.gananciaNeta.toFixed(2)}`, s.ventasTotales.toString()])];
          (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__["default"])(doc, {
            head: [sucursalTableData[0]],
            body: sucursalTableData.slice(1),
            startY: yPosition,
            theme: 'striped',
            headStyles: {
              fillColor: [230, 126, 34],
              textColor: 255
            },
            styles: {
              fontSize: 10,
              cellPadding: 4
            },
            columnStyles: {
              0: {
                cellWidth: 40
              },
              1: {
                cellWidth: 20,
                halign: 'center'
              },
              2: {
                cellWidth: 30,
                halign: 'right'
              },
              3: {
                cellWidth: 30,
                halign: 'right'
              },
              4: {
                cellWidth: 30,
                halign: 'right'
              },
              5: {
                cellWidth: 20,
                halign: 'center'
              }
            }
          });
          yPosition = doc.lastAutoTable.finalY + 25;
        }
        // ===== 4. NÚMEROS VENDIDOS POR SORTEO (FORMATO CUADRO) =====
        doc.addPage();
        yPosition = 20;
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('4. NÚMEROS VENDIDOS POR SORTEO', 20, yPosition);
        yPosition += 15;
        if (data.numerosPorSorteo.length > 0) {
          data.numerosPorSorteo.forEach(grupo => {
            checkNewPage(80);
            // Título del grupo
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text(`${grupo.sorteo} - ${grupo.sucursal} (Total: L ${grupo.totalSorteoSucursal.toFixed(2)})`, 20, yPosition);
            yPosition += 12;
            // Crear cuadro de números (formato 10x10)
            if (grupo.numeros.length > 0) {
              // Organizar números en filas de 5
              const rows = [];
              for (let i = 0; i < grupo.numeros.length; i += 5) {
                const row = grupo.numeros.slice(i, i + 5).map(n => `${n.numero.toString().padStart(2, '0')}: L${n.totalVendido.toFixed(0)}`);
                // Rellenar con espacios vacíos si es necesario
                while (row.length < 5) row.push('');
                rows.push(row);
              }
              (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__["default"])(doc, {
                body: rows,
                startY: yPosition,
                theme: 'grid',
                styles: {
                  fontSize: 8,
                  cellPadding: 4,
                  halign: 'center',
                  valign: 'middle'
                },
                columnStyles: {
                  0: {
                    cellWidth: 34
                  },
                  1: {
                    cellWidth: 34
                  },
                  2: {
                    cellWidth: 34
                  },
                  3: {
                    cellWidth: 34
                  },
                  4: {
                    cellWidth: 34
                  }
                }
              });
              yPosition = doc.lastAutoTable.finalY + 20;
            }
          });
        } else {
          doc.setFontSize(10);
          doc.setFont('helvetica', 'normal');
          doc.text('No hay datos de números vendidos para mostrar', 20, yPosition);
          yPosition += 20;
        }
        // ===== 5. DETALLE DE VENTAS =====
        doc.addPage();
        yPosition = 20;
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('5. DETALLE COMPLETO DE VENTAS', 20, yPosition);
        yPosition += 15;
        if (data.detalleVentas.length > 0) {
          const ventasTableData = [['Recibo', 'Fecha', 'Hora', 'Sorteo', 'Sucursal', 'Números', 'Total'], ...data.detalleVentas.map(v => [v.numeroRecibo, v.fecha, v.hora, v.sorteo, v.sucursal, v.numeros.length > 25 ? v.numeros.substring(0, 25) + '...' : v.numeros, `L ${v.total.toFixed(2)}`])];
          (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__["default"])(doc, {
            head: [ventasTableData[0]],
            body: ventasTableData.slice(1),
            startY: yPosition,
            theme: 'striped',
            headStyles: {
              fillColor: [52, 152, 219],
              textColor: 255
            },
            styles: {
              fontSize: 7,
              cellPadding: 2
            },
            columnStyles: {
              0: {
                cellWidth: 20
              },
              1: {
                cellWidth: 22
              },
              2: {
                cellWidth: 18
              },
              3: {
                cellWidth: 22
              },
              4: {
                cellWidth: 25
              },
              5: {
                cellWidth: 45
              },
              6: {
                cellWidth: 18,
                halign: 'right'
              }
            }
          });
          // Totales finales
          yPosition = doc.lastAutoTable.finalY + 15;
          checkNewPage(30);
          doc.setFontSize(12);
          doc.setFont('helvetica', 'bold');
          doc.text('TOTALES FINALES:', 20, yPosition);
          yPosition += 8;
          doc.setFontSize(10);
          doc.setFont('helvetica', 'normal');
          doc.text(`Total de Ventas: ${data.detalleVentas.length}`, 20, yPosition);
          yPosition += 6;
          doc.text(`Monto Total Vendido: L ${data.resumenGeneral.totalVendido.toFixed(2)}`, 20, yPosition);
          yPosition += 6;
          doc.text(`Monto Total Pagado: L ${data.resumenGeneral.totalPagado.toFixed(2)}`, 20, yPosition);
          yPosition += 6;
          doc.text(`Ganancia Neta: L ${data.resumenGeneral.gananciaNeta.toFixed(2)}`, 20, yPosition);
        }
        // Guardar el PDF con fecha de Honduras
        const hondurasDate = _this3.supabaseService.formatDateTimeLocalHonduras(_this3.supabaseService.getHondurasDateTime()).split('T')[0];
        doc.save(`${filename}-${hondurasDate}.pdf`);
      } catch (error) {
        console.error('Error exportando a PDF:', error);
        throw error;
      }
    }).apply(this, arguments);
  }
  // Nuevo método para exportar PDF tal como se ve en el admin
  exportVisualToPDF(_x4) {
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data, filename = 'reporte-admin-visual') {
      try {
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4'
        });
        // ENCABEZADO PRINCIPAL (como en la imagen)
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(18);
        doc.text('REPORTE ADMINISTRADOR - SISTEMA DE LOTERÍA', 20, 25);
        // Información de fecha y hora (como en la imagen)
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.text(`Fecha: ${data.fecha}`, 20, 35);
        doc.text(`Hora: ${data.hora}`, 150, 35);
        doc.text(`Filtros: ${data.filtros}`, 20, 42);
        let yPosition = 55;
        // 1. DASHBOARD CARDS (como las cards azul, naranja y verde de la imagen)
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.text('1. RESUMEN GENERAL', 20, yPosition);
        yPosition += 10;
        // Crear cards como en la interfaz
        const dashboardData = [['Métrica', 'Valor'], ['Total Vendido', `L ${data.dashboard.totalVendido.toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`], ['Total Pagado', `L ${data.dashboard.totalPagado.toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`], ['Ganancia Total', `L ${data.dashboard.gananciaNeta.toLocaleString('es-HN', {
          minimumFractionDigits: 2
        })}`], ['Ventas Totales', data.dashboard.ventasTotales.toString()]];
        (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__["default"])(doc, {
          head: [dashboardData[0]],
          body: dashboardData.slice(1),
          startY: yPosition,
          theme: 'grid',
          headStyles: {
            fillColor: [52, 73, 94],
            textColor: 255,
            fontSize: 12,
            fontStyle: 'bold'
          },
          styles: {
            fontSize: 11,
            cellPadding: 8
          },
          columnStyles: {
            0: {
              fontStyle: 'bold',
              fillColor: [245, 245, 245]
            },
            1: {
              halign: 'right',
              fontStyle: 'bold'
            }
          },
          margin: {
            left: 20,
            right: 20
          }
        });
        yPosition = doc.lastAutoTable.finalY + 20;
        // 2. DETALLE POR SUCURSALES (LA PARTE MÁS IMPORTANTE - igual que en la imagen)
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(16);
        doc.text('🏢 Detalle por Sucursales', 20, yPosition);
        yPosition += 15;
        if (data.detallePorSucursales.filas.length > 0) {
          const sucursalTableData = [data.detallePorSucursales.headers, ...data.detallePorSucursales.filas.map(fila => {
            // Si ya es un array, usar directamente
            if (Array.isArray(fila)) {
              return fila;
            }
            // Si es un objeto, convertir a array
            return [fila.sucursal, fila.factor, `L ${fila.totalVendido.toFixed(2)}`, `L ${fila.totalPagado.toFixed(2)}`, `L ${fila.gananciaNeta.toFixed(2)}`];
          })];
          (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__["default"])(doc, {
            head: [sucursalTableData[0]],
            body: sucursalTableData.slice(1),
            startY: yPosition,
            theme: 'striped',
            headStyles: {
              fillColor: [52, 73, 94],
              textColor: 255,
              fontSize: 12,
              fontStyle: 'bold'
            },
            styles: {
              fontSize: 11,
              cellPadding: 8,
              lineColor: [200, 200, 200],
              lineWidth: 0.5
            },
            columnStyles: {
              0: {
                cellWidth: 50,
                fontStyle: 'bold'
              },
              1: {
                cellWidth: 25,
                halign: 'center'
              },
              2: {
                cellWidth: 40,
                halign: 'right'
              },
              3: {
                cellWidth: 40,
                halign: 'right'
              },
              4: {
                cellWidth: 40,
                halign: 'right'
              } // Ganancia Neta
            },
            alternateRowStyles: {
              fillColor: [249, 249, 249]
            },
            margin: {
              left: 20,
              right: 20
            }
          });
          yPosition = doc.lastAutoTable.finalY + 10;
          // TOTAL GENERAL (destacado igual que en la imagen con fondo verde)
          const totalesRow = Array.isArray(data.detallePorSucursales.totales) ? data.detallePorSucursales.totales : [data.detallePorSucursales.totales.sucursal, data.detallePorSucursales.totales.factor, `L ${data.detallePorSucursales.totales.totalVendido.toFixed(2)}`, `L ${data.detallePorSucursales.totales.totalPagado.toFixed(2)}`, `L ${data.detallePorSucursales.totales.gananciaNeta.toFixed(2)}`];
          const totalesData = [totalesRow];
          (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__["default"])(doc, {
            body: totalesData,
            startY: yPosition,
            theme: 'grid',
            styles: {
              fontSize: 12,
              fontStyle: 'bold',
              fillColor: [46, 125, 50],
              textColor: 255,
              cellPadding: 8
            },
            columnStyles: {
              0: {
                cellWidth: 50
              },
              1: {
                cellWidth: 25,
                halign: 'center'
              },
              2: {
                cellWidth: 40,
                halign: 'right'
              },
              3: {
                cellWidth: 40,
                halign: 'right'
              },
              4: {
                cellWidth: 40,
                halign: 'right'
              } // Ganancia Neta
            },
            margin: {
              left: 20,
              right: 20
            }
          });
          yPosition = doc.lastAutoTable.finalY + 20;
        }
        // 3. NÚMEROS POR SORTEO (si hay datos)
        if (data.numerosPorSorteo && data.numerosPorSorteo.length > 0) {
          // Verificar si necesitamos nueva página
          if (yPosition > 150) {
            doc.addPage();
            yPosition = 25;
          }
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(14);
          doc.text('2. NÚMEROS POR SORTEO Y SUCURSAL', 20, yPosition);
          yPosition += 15;
          data.numerosPorSorteo.forEach((sorteoGroup, index) => {
            if (yPosition > 180) {
              doc.addPage();
              yPosition = 25;
            }
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
            doc.text(`Sorteo: ${sorteoGroup.sorteo}`, 20, yPosition);
            yPosition += 10;
            sorteoGroup.sucursales.forEach(sucursalGroup => {
              if (yPosition > 170) {
                doc.addPage();
                yPosition = 25;
              }
              doc.setFont('helvetica', 'normal');
              doc.setFontSize(10);
              doc.text(`Sucursal: ${sucursalGroup.sucursal}`, 25, yPosition);
              yPosition += 8;
              // Mostrar top 10 números más vendidos
              const topNumeros = sucursalGroup.numeros.slice(0, 10);
              const numerosData = [['Número', 'Total Vendido', 'Cantidad', '%'], ...topNumeros.map(num => [num.numero.toString().padStart(2, '0'), `L ${num.totalVendido.toFixed(2)}`, num.cantidadVentas.toString(), `${num.porcentaje.toFixed(1)}%`])];
              (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__["default"])(doc, {
                head: [numerosData[0]],
                body: numerosData.slice(1),
                startY: yPosition,
                theme: 'grid',
                styles: {
                  fontSize: 9,
                  cellPadding: 4
                },
                headStyles: {
                  fillColor: [52, 73, 94],
                  textColor: 255
                },
                columnStyles: {
                  0: {
                    cellWidth: 20,
                    halign: 'center'
                  },
                  1: {
                    cellWidth: 30,
                    halign: 'right'
                  },
                  2: {
                    cellWidth: 20,
                    halign: 'center'
                  },
                  3: {
                    cellWidth: 20,
                    halign: 'right'
                  }
                },
                margin: {
                  left: 30,
                  right: 20
                }
              });
              yPosition = doc.lastAutoTable.finalY + 10;
            });
          });
        }
        // Pie de página
        const pageCount = doc.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
          doc.setPage(i);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.text(`Página ${i} de ${pageCount}`, 250, 200);
          doc.text(`Generado: ${new Date().toLocaleString('es-HN')}`, 20, 200);
        }
        // Descargar el PDF
        doc.save(`${filename}.pdf`);
      } catch (error) {
        console.error('Error exportando PDF visual:', error);
        throw error;
      }
    }).apply(this, arguments);
  }
  static {
    this.ɵfac = function ExportService_Factory(t) {
      return new (t || ExportService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_supabase_service__WEBPACK_IMPORTED_MODULE_4__.SupabaseService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: ExportService,
      factory: ExportService.ɵfac,
      providedIn: 'root'
    });
  }
}

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
      sorteo: 'manana',
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
    // Hora actual en Honduras formateada
    const hnFormatted = this.supabaseService.formatLocalDateForSupabase(this.supabaseService.getHondurasDateTime());
    const [, timePart] = hnFormatted.split(' ');
    const [hourStr, minuteStr] = timePart.split(':');
    const currentTotalMinutes = parseInt(hourStr, 10) * 60 + parseInt(minuteStr, 10);
    // Hora de cierre del sorteo
    const [closeHourStr, closeMinuteStr] = sorteo.closeTime.split(':');
    const closeTotalMinutes = parseInt(closeHourStr, 10) * 60 + parseInt(closeMinuteStr, 10);
    return currentTotalMinutes < closeTotalMinutes;
  }
  getTimeUntilClose(sorteo) {
    // Hora actual en Honduras formateada
    const hnFormatted = this.supabaseService.formatLocalDateForSupabase(this.supabaseService.getHondurasDateTime());
    const [, timePart] = hnFormatted.split(' ');
    const [hourStr, minuteStr] = timePart.split(':');
    const currentTotalMinutes = parseInt(hourStr, 10) * 60 + parseInt(minuteStr, 10);
    // Hora de cierre del sorteo
    const [closeHourStr, closeMinuteStr] = sorteo.closeTime.split(':');
    const closeTotalMinutes = parseInt(closeHourStr, 10) * 60 + parseInt(closeMinuteStr, 10);
    let diff = closeTotalMinutes - currentTotalMinutes;
    if (diff <= 0) {
      return '00:00';
    }
    const hoursLeft = Math.floor(diff / 60);
    const minutesLeft = diff % 60;
    return `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}`;
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
  // Getter para acceso directo al cliente Supabase
  get client() {
    return this.supabase;
  }
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
        const endOfDay = new Date(today);
        startOfDay.setHours(0, 0, 0, 0);
        endOfDay.setHours(23, 59, 59, 999);
        const startStr = _this8.formatLocalDateForSupabase(startOfDay);
        const endStr = _this8.formatLocalDateForSupabase(endOfDay);
        console;
        // Obtener solo las del día actual
        const {
          data,
          error
        } = yield _this8.supabase.from('sales').select('correlativo, fecha, created_at').eq('sucursal', sucursal).gte('fecha', startStr).lte('fecha', endStr).order('correlativo', {
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
        const formatted = _this9.formatLocalDateForSupabase(new Date());
        const saleData = {
          user_id: sale.userId,
          sucursal: sale.sucursal,
          sorteo: sale.sorteo,
          fecha: formatted,
          total: sale.total,
          numero_recibo: sale.numeroRecibo,
          correlativo: sale.correlativo,
          created_at: formatted
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
        // Usar los nuevos métodos para obtener inicio y final del día en Honduras
        const startOfDayStr = _this1.formatLocalDateForSupabase(_this1.getStartOfDayHonduras(fecha));
        const endOfDayStr = _this1.formatLocalDateForSupabase(_this1.getEndOfDayHonduras(fecha));
        let query = _this1.supabase.from('sales').select('*').gte('fecha', startOfDayStr).lte('fecha', endOfDayStr).order('created_at', {
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
        const sorteoId = `${_this11.formatDateOnlyForSupabase(sorteo.fecha)}-${sorteo.sorteo}`;
        // Asegurar formato de string para numero_ganador
        const numeroGanadorString = (sorteo.numeroGanador ?? '').toString().padStart(2, '0');
        const sorteoData = {
          id: sorteoId,
          fecha: _this11.formatLocalDateForSupabase(sorteo.fecha),
          sorteo: sorteo.sorteo,
          hora_cierre: _this11.formatLocalDateForSupabase(sorteo.horaCierre),
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
        const sorteoId = `${_this12.formatDateOnlyForSupabase(fecha)}-${sorteo}`;
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
        // Enriquecer datos con cantidad del número ganador
        const enrichedData = yield Promise.all((data || []).map(/*#__PURE__*/function () {
          var _ref2 = (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (sorteo) {
            const cantidadNumeroGanador = yield _this14.getCantidadNumeroGanadorPorSucursal(sorteoId, sorteo.sucursal, sorteo.numero_ganador);
            return {
              ...sorteo,
              cantidad_numero_ganador: cantidadNumeroGanador
            };
          });
          return function (_x3) {
            return _ref2.apply(this, arguments);
          };
        }()));
        return enrichedData;
      } catch (error) {
        console.error('Error al obtener resumen por sucursal:', error);
        return [];
      }
    })();
  }
  // Método auxiliar para obtener la cantidad comprada del número ganador por sucursal
  getCantidadNumeroGanadorPorSucursal(sorteoId, sucursal, numeroGanador) {
    var _this15 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Usar la función SQL optimizada
        const {
          data,
          error
        } = yield _this15.supabase.rpc('get_cantidad_numero_ganador_por_sucursal', {
          p_sorteo_id: sorteoId,
          p_sucursal: sucursal,
          p_numero_ganador: numeroGanador
        });
        if (error) {
          console.error('Error en función SQL get_cantidad_numero_ganador_por_sucursal:', error);
          return 0;
        }
        return data || 0;
      } catch (error) {
        console.error('Error al obtener cantidad del número ganador:', error);
        return 0;
      }
    })();
  }
  // Método alternativo que usa una consulta sin RLS estricto
  getSorteoByIdSimple(sorteoId) {
    var _this16 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this16.supabase.rpc('get_sorteo_simple', {
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
    var _this17 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const numeroString = numeroGanador.toString().padStart(2, '0');
        const hondurasDateTime = _this17.getHondurasDateTime();
        const {
          error
        } = yield _this17.supabase.from('sorteos').insert({
          id: sorteoId,
          fecha: _this17.formatLocalDateForSupabase(hondurasDateTime),
          sorteo: sorteoId.split('-').slice(1).join('-'),
          hora_cierre: _this17.formatLocalDateForSupabase(hondurasDateTime),
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
    var _this18 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Asegurar formato de 2 dígitos si es número
        const numeroString = numeroGanador.toString().padStart(2, '0');
        // Primero intentar hacer un update simple
        const {
          data: existingData,
          error: selectError
        } = yield _this18.supabase.from('sorteos').select('id').eq('id', sorteoId).single();
        if (selectError && selectError.code !== 'PGRST116') {
          throw selectError;
        }
        let result;
        if (existingData) {
          // El sorteo existe, hacer update
          result = yield _this18.supabase.from('sorteos').update({
            numero_ganador: numeroString,
            factor_multiplicador: factorMultiplicador,
            cerrado: true
          }).eq('id', sorteoId);
        } else {
          // El sorteo no existe, hacer insert con las columnas correctas
          const hondurasDateTime = _this18.getHondurasDateTime();
          result = yield _this18.supabase.from('sorteos').insert({
            id: sorteoId,
            fecha: _this18.formatLocalDateForSupabase(hondurasDateTime),
            sorteo: sorteoId.split('-').slice(1).join('-'),
            hora_cierre: _this18.formatLocalDateForSupabase(hondurasDateTime),
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
    var _this19 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const hondurasDateTime = _this19.getHondurasDateTime();
        const {
          error
        } = yield _this19.supabase.from('sorteos').insert({
          id: sorteoId,
          fecha: _this19.formatLocalDateForSupabase(hondurasDateTime),
          sorteo: sorteoName,
          hora_cierre: _this19.formatLocalDateForSupabase(hondurasDateTime),
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
  // Método super optimizado para obtener datos agregados de sorteos con una sola consulta
  getVentasPorSorteoOptimizado(fecha, sucursal) {
    var _this20 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Obteniendo ventas súper optimizadas para fecha:', fecha, 'sucursal:', sucursal);
        const fechaStr = _this20.formatDateOnlyForSupabase(fecha);
        // Intentar primera función RPC optimizada
        const {
          data,
          error
        } = yield _this20.supabase.rpc('get_resumen_sorteos_optimizado', {
          p_fecha: fechaStr,
          p_sucursal: sucursal
        });
        if (error) {
          console.log('Función RPC completa no disponible, intentando función simple...', error.message);
          // Fallback a función RPC simple
          return yield _this20.getVentasPorSorteoRPCSimple(fecha, sucursal);
        }
        // Procesar resultado de la función RPC completa
        const sorteoResumen = {
          manana: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          },
          tarde: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          },
          noche: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          }
        };
        if (data && data.length > 0) {
          data.forEach(row => {
            const sorteoKey = row.sorteo?.toLowerCase();
            if (sorteoResumen[sorteoKey]) {
              sorteoResumen[sorteoKey].totalVendido = parseFloat(row.total_vendido) || 0;
              sorteoResumen[sorteoKey].numeroGanador = row.numero_ganador ? parseInt(row.numero_ganador) : null;
              sorteoResumen[sorteoKey].factor = row.factor_multiplicador || 70;
              sorteoResumen[sorteoKey].totalPagar = parseFloat(row.total_pagar) || 0;
              // Agregar números vendidos si están disponibles
              if (row.numeros_vendidos && typeof row.numeros_vendidos === 'object') {
                sorteoResumen[sorteoKey].numerosVendidos = row.numeros_vendidos;
              }
            }
          });
        }
        console.log('Datos de sorteos súper optimizados cargados:', sorteoResumen);
        return sorteoResumen;
      } catch (error) {
        console.error('Error en getVentasPorSorteoOptimizado:', error);
        // Fallback en caso de error
        return yield _this20.getVentasPorSorteoRPCSimple(fecha, sucursal);
      }
    })();
  }
  // Método fallback con función RPC simple
  getVentasPorSorteoRPCSimple(fecha, sucursal) {
    var _this21 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const fechaStr = _this21.formatDateOnlyForSupabase(fecha);
        // Usar función RPC simple sin agregación compleja
        const {
          data,
          error
        } = yield _this21.supabase.rpc('get_resumen_sorteos_simple', {
          p_fecha: fechaStr,
          p_sucursal: sucursal
        });
        if (error) {
          console.log('Función RPC simple no disponible, usando consultas básicas...', error.message);
          return yield _this21.getVentasPorSorteoBasico(fecha, sucursal);
        }
        const sorteoResumen = {
          manana: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          },
          tarde: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          },
          noche: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          }
        };
        if (data && data.length > 0) {
          data.forEach(row => {
            const sorteoKey = row.sorteo?.toLowerCase();
            if (sorteoResumen[sorteoKey]) {
              sorteoResumen[sorteoKey].totalVendido = parseFloat(row.total_vendido) || 0;
              sorteoResumen[sorteoKey].numeroGanador = row.numero_ganador ? parseInt(row.numero_ganador) : null;
              sorteoResumen[sorteoKey].factor = row.factor_multiplicador || 70;
              sorteoResumen[sorteoKey].totalPagar = parseFloat(row.total_pagar) || 0;
              // Los números vendidos se cargarán lazy cuando se necesiten
            }
          });
        }
        console.log('Datos básicos de sorteos cargados:', sorteoResumen);
        return sorteoResumen;
      } catch (error) {
        console.error('Error en función RPC simple:', error);
        return yield _this21.getVentasPorSorteoBasico(fecha, sucursal);
      }
    })();
  }
  // Método fallback con vista materializada o consultas directas
  getVentasPorSorteoFallback(fecha, sucursal) {
    var _this22 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const fechaStr = _this22.formatDateOnlyForSupabase(fecha);
        // Intentar usar vista materializada si existe
        const {
          data: resumenData,
          error: resumenError
        } = yield _this22.supabase.from('vista_resumen_sorteos').select('sorteo, total_vendido, numero_ganador, factor_multiplicador, total_pagar, numeros_vendidos').eq('fecha', fechaStr).eq('sucursal', sucursal);
        if (resumenError) {
          console.log('Vista materializada no disponible, usando consultas básicas...', resumenError.message);
          return yield _this22.getVentasPorSorteoBasico(fecha, sucursal);
        }
        // Procesar datos de la vista
        const sorteoResumen = {
          manana: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          },
          tarde: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          },
          noche: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          }
        };
        resumenData?.forEach(row => {
          const sorteoKey = row.sorteo?.toLowerCase();
          if (sorteoResumen[sorteoKey]) {
            sorteoResumen[sorteoKey] = {
              totalVendido: parseFloat(row.total_vendido) || 0,
              numerosVendidos: row.numeros_vendidos && typeof row.numeros_vendidos === 'object' ? row.numeros_vendidos : {},
              numeroGanador: row.numero_ganador ? parseInt(row.numero_ganador) : null,
              totalPagar: parseFloat(row.total_pagar) || 0,
              factor: row.factor_multiplicador || 70
            };
          }
        });
        console.log('Datos de vista materializada cargados:', sorteoResumen);
        return sorteoResumen;
      } catch (error) {
        console.error('Error en vista materializada:', error);
        return yield _this22.getVentasPorSorteoBasico(fecha, sucursal);
      }
    })();
  }
  // Método básico súper optimizado - solo totales, sin números individuales
  getVentasPorSorteoBasico(fecha, sucursal) {
    var _this23 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const fechaStr = _this23.formatDateOnlyForSupabase(fecha);
        // Una sola consulta para obtener todos los totales de una vez
        const {
          data: totalesData,
          error: totalesError
        } = yield _this23.supabase.from('sales').select('sorteo, total.sum()').eq('fecha', fechaStr).eq('sucursal', sucursal);
        // Una sola consulta para obtener info de sorteos cerrados
        const {
          data: sorteosData,
          error: sorteosError
        } = yield _this23.supabase.from('sorteos').select('sorteo, numero_ganador, factor_multiplicador, cerrado').like('id', `${fechaStr}-%`);
        const sorteoResumen = {
          manana: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          },
          tarde: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          },
          noche: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          }
        };
        // Procesar totales
        if (totalesData && !totalesError) {
          totalesData.forEach(item => {
            const sorteoKey = item.sorteo?.toLowerCase();
            if (sorteoResumen[sorteoKey]) {
              sorteoResumen[sorteoKey].totalVendido = item.sum || 0;
            }
          });
        }
        // Procesar info de sorteos
        if (sorteosData && !sorteosError) {
          sorteosData.forEach(sorteo => {
            const sorteoKey = sorteo.sorteo?.toLowerCase();
            if (sorteoResumen[sorteoKey]) {
              sorteoResumen[sorteoKey].numeroGanador = sorteo.numero_ganador ? parseInt(sorteo.numero_ganador) : null;
              sorteoResumen[sorteoKey].factor = sorteo.factor_multiplicador || 70;
              // No calculamos total a pagar sin los números individuales
            }
          });
        }
        console.log('Datos básicos optimizados cargados:', sorteoResumen);
        return sorteoResumen;
      } catch (error) {
        console.error('Error en método básico:', error);
        return {
          manana: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          },
          tarde: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          },
          noche: {
            totalVendido: 0,
            numerosVendidos: {},
            numeroGanador: null,
            totalPagar: 0,
            factor: 70
          }
        };
      }
    })();
  }
  // Método para obtener sorteo por tipo y fecha (para tabs de ventas)
  getSorteoByTypeAndDate(sorteoType, fecha) {
    var _this24 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const fechaStr = _this24.formatDateOnlyForSupabase(fecha);
        const sorteoId = `${fechaStr}-${sorteoType}`;
        const {
          data,
          error
        } = yield _this24.supabase.from('sorteos').select('*').eq('id', sorteoId).single();
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
          numero_ganador: data.numero_ganador ? parseInt(data.numero_ganador) : null,
          factor_multiplicador: data.factor_multiplicador,
          totalVendido: data.total_vendido,
          totalPagado: data.total_pagado,
          gananciaNeta: data.ganancia_neta,
          cerrado: data.cerrado
        };
      } catch (error) {
        console.error(`Error obteniendo sorteo ${sorteoType} para fecha ${fecha}:`, error);
        return null;
      }
    })();
  }
  // Método alternativo para actualizar sorteo sin políticas RLS complejas
  updateSorteoWinnerDirect(sorteoId, numeroGanador, factorMultiplicador) {
    var _this25 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const numeroString = numeroGanador.toString().padStart(2, '0');
        const {
          error
        } = yield _this25.supabase.from('sorteos').update({
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
    var _this26 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const numeroString = numeroGanador.toString().padStart(2, '0');
        // Solo hacer UPDATE, sin verificaciones
        const {
          error
        } = yield _this26.supabase.from('sorteos').update({
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
    var _this27 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Obtener el sorteo
        const {
          data: sorteo,
          error: sorteoError
        } = yield _this27.supabase.from('sorteos').select('*').eq('id', sorteoId).single();
        if (sorteoError) throw sorteoError;
        if (!sorteo.numero_ganador) return;
        // Obtener todas las ventas del sorteo
        const startOfDay = _this27.getStartOfDayHonduras(new Date(sorteo.fecha));
        const endOfDay = _this27.getEndOfDayHonduras(new Date(sorteo.fecha));
        const {
          data: sales,
          error: salesError
        } = yield _this27.supabase.from('sales').select('*, sale_details(*)').eq('sorteo', sorteo.sorteo).gte('fecha', _this27.formatLocalDateForSupabase(startOfDay)).lte('fecha', _this27.formatLocalDateForSupabase(endOfDay));
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
        } = yield _this27.supabase.from('sorteos').update({
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
    var _this28 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Verificar conexión básica
        const {
          data: tablesData,
          error: tablesError
        } = yield _this28.supabase.from('sales').select('count(*)', {
          count: 'exact',
          head: true
        });
        if (tablesError) {
          return;
        }
        // Verificar ventas de hoy sin filtros
        const today = new Date();
        const startOfDay = _this28.getStartOfDayHonduras(today);
        const endOfDay = _this28.getEndOfDayHonduras(today);
        const {
          data: todayData,
          error: todayError
        } = yield _this28.supabase.from('sales').select('*').gte('fecha', _this28.formatLocalDateForSupabase(startOfDay)).lte('fecha', _this28.formatLocalDateForSupabase(endOfDay));
        if (todayError) {
          return;
        }
        if (todayData && todayData.length > 0) {}
        // Verificar ventas de los últimos 3 días
        const threeDaysAgo = new Date(today);
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        const startThreeDaysAgo = _this28.getStartOfDayHonduras(threeDaysAgo);
        const {
          data: recentData,
          error: recentError
        } = yield _this28.supabase.from('sales').select('*').gte('fecha', _this28.formatLocalDateForSupabase(startThreeDaysAgo)).order('created_at', {
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
    var _this29 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Verificar sesión actual
        const {
          data: session,
          error: sessionError
        } = yield _this29.supabase.auth.getSession();
        if (sessionError) {
          return;
        }
        // Probar consulta simple a la tabla sales
        const {
          data: simpleQuery,
          error: simpleError
        } = yield _this29.supabase.from('sales').select('id, sucursal, created_at').limit(1);
        if (simpleError) {} else {}
        // Probar inserción de test (para verificar permisos de escritura)
        const testSale = {
          user_id: session?.session?.user?.id || 'test-user',
          sucursal: 'TEST',
          sorteo: 'test',
          fecha: _this29.formatLocalDateForSupabase(new Date()),
          total: 0,
          numero_recibo: 'TEST-001',
          correlativo: 999
        };
        const {
          data: insertTest,
          error: insertError
        } = yield _this29.supabase.from('sales').insert(testSale).select();
        if (insertError) {} else {
          // Eliminar el registro de prueba
          if (insertTest && insertTest.length > 0) {
            yield _this29.supabase.from('sales').delete().eq('id', insertTest[0].id);
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
    var _this30 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const profilesData = authUsers.map(authUser => ({
          id: authUser.id,
          email: authUser.email,
          role: authUser.email?.includes('admin') || authUser.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal',
          sucursal: _this30.getSucursalFromEmail(authUser.email || ''),
          active: true,
          created_at: new Date(authUser.created_at).toISOString()
        }));
        const {
          error
        } = yield _this30.supabase.from('profiles').upsert(profilesData, {
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
    var _this31 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this31.supabase.from('sorteo_schedules').select('*').order('close_time', {
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
    var _this32 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this32.supabase.from('sorteo_schedules').insert([sorteoData]).select().single();
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
    var _this33 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this33.supabase.from('sorteo_schedules').update(updates).eq('id', sorteoId).select().single();
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
    var _this34 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          error
        } = yield _this34.supabase.from('sorteo_schedules').delete().eq('id', sorteoId);
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
    var _this35 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Crear los sorteos por defecto si no existen
        const defaultSorteos = [..._models_interfaces__WEBPACK_IMPORTED_MODULE_2__.SORTEO_SCHEDULES];
        for (const sorteo of defaultSorteos) {
          const {
            error
          } = yield _this35.supabase.from('sorteo_schedules').upsert(sorteo, {
            onConflict: 'name'
          });
          if (error) {} else {}
        }
      } catch (error) {}
    })();
  }
  // Método para inicializar la tabla de perfiles si no existe
  initializeProfilesTable() {
    var _this36 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Simplemente intentar hacer una consulta para ver si la tabla existe
        const {
          error
        } = yield _this36.supabase.from('profiles').select('count', {
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
    return now;
  }
  // Función para formatear fecha/hora en formato de Honduras
  formatHondurasDateTime(date) {
    const targetDate = date || new Date();
    return this.formatLocalDateForSupabase(targetDate);
  }
  formatLocalDateForSupabase(date) {
    const pad = n => n.toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // Mes empieza en 0
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  // Función para formatear solo la fecha (YYYY-MM-DD) para consultas RPC
  formatDateOnlyForSupabase(date) {
    const pad = n => n.toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // Mes empieza en 0
    const day = pad(date.getDate());
    return `${year}-${month}-${day}`;
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
  // Método para crear fecha específica en zona horaria de Honduras
  createHondurasDate(year, month, day, hour = 0, minute = 0, second = 0) {
    // Crear fecha en zona horaria de Honduras
    const dateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_3__.fromZonedTime)(new Date(dateString), this.HONDURAS_TIMEZONE);
  }
  // Método para obtener inicio del día en Honduras
  getStartOfDayHonduras(date) {
    // Primero convertir la fecha a zona horaria de Honduras
    const hondurasDate = (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_3__.toZonedTime)(date, this.HONDURAS_TIMEZONE);
    const year = hondurasDate.getFullYear();
    const month = hondurasDate.getMonth() + 1;
    const day = hondurasDate.getDate();
    // Crear inicio del día (00:00:00) en zona horaria de Honduras
    return this.createHondurasDate(year, month, day, 0, 0, 0);
  }
  // Método para obtener final del día en Honduras  
  getEndOfDayHonduras(date) {
    // Primero convertir la fecha a zona horaria de Honduras
    const hondurasDate = (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_3__.toZonedTime)(date, this.HONDURAS_TIMEZONE);
    const year = hondurasDate.getFullYear();
    const month = hondurasDate.getMonth() + 1;
    const day = hondurasDate.getDate();
    // Crear final del día (23:59:59.999) en zona horaria de Honduras
    return this.createHondurasDate(year, month, day, 23, 59, 59);
  }
  // Método para formatear fecha para inputs datetime-local en zona horaria de Honduras
  formatDateTimeLocalHonduras(date) {
    const hondurasDate = (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_3__.toZonedTime)(date, this.HONDURAS_TIMEZONE);
    const year = hondurasDate.getFullYear();
    const month = String(hondurasDate.getMonth() + 1).padStart(2, '0');
    const day = String(hondurasDate.getDate()).padStart(2, '0');
    const hours = String(hondurasDate.getHours()).padStart(2, '0');
    const minutes = String(hondurasDate.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
  // Método para convertir string de datetime-local a fecha UTC para base de datos
  parseLocalDateTimeToUtc(dateTimeLocalString) {
    // El string viene en formato YYYY-MM-DDTHH:mm
    // Lo interpretamos como si fuera hora de Honduras y lo convertimos a UTC
    const localDate = new Date(dateTimeLocalString);
    return (0,date_fns_tz__WEBPACK_IMPORTED_MODULE_3__.fromZonedTime)(localDate, this.HONDURAS_TIMEZONE);
  }
  // ============= MÉTODOS DE GESTIÓN DE USUARIOS =============
  // Obtener todos los usuarios del sistema desde auth.users
  getAllUsers() {
    var _this37 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Usar la API de administración para obtener usuarios de auth.users
        const {
          data,
          error
        } = yield _this37.supabase.auth.admin.listUsers();
        console.log('Usuarios obtenidos:', data);
        if (error) {
          console.error('Error obteniendo usuarios:', error);
          // Si falla, usar datos por defecto
          return _this37.getDefaultUsersForManagement();
        }
        // Mapear los usuarios de auth a nuestro formato
        return data.users.map(user => ({
          id: user.id,
          email: user.email || '',
          role: user.user_metadata?.['role'] || (user.email === 'gerencia@loteria.com' ? 'admin' : 'sucursal'),
          sucursal: user.user_metadata?.['sucursal'] || _this37.getSucursalFromEmail(user.email || ''),
          active: user.user_metadata?.['active'] ?? !user['banned_until'],
          createdAt: new Date(user.created_at)
        }));
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        // Retornar usuarios por defecto si falla
        return _this37.getDefaultUsersForManagement();
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
    var _this38 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Creando usuario:', userData);
        // Crear usuario directamente en auth.users
        const {
          data: authData,
          error: authError
        } = yield _this38.supabase.auth.admin.createUser({
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
    var _this39 = this;
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
        } = yield _this39.supabase.auth.admin.updateUserById(userId, updateData);
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
    var _this40 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Eliminando usuario:', userId);
        const {
          error
        } = yield _this40.supabase.auth.admin.deleteUser(userId);
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
    var _this41 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Alternando estado del usuario:', userId);
        // Primero obtener el usuario actual de auth.users
        const {
          data: authUser,
          error: fetchError
        } = yield _this41.supabase.auth.admin.getUserById(userId);
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
        } = yield _this41.supabase.auth.admin.updateUserById(userId, updateData);
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
    var _this42 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Actualizando contraseña del usuario:', userId);
        const {
          error
        } = yield _this42.supabase.auth.admin.updateUserById(userId, {
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
    var _this43 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          error
        } = yield _this43.supabase.auth.resetPasswordForEmail(email, {
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
    var _this44 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Intentar usar la función SQL primero
        const {
          data,
          error
        } = yield _this44.supabase.rpc('get_active_users_by_sucursal');
        if (error) {
          console.warn('Función get_active_users_by_sucursal falló, intentando consulta directa:', error);
          // Fallback: consulta directa a auth.users
          const {
            data: usersData,
            error: usersError
          } = yield _this44.supabase.auth.admin.listUsers();
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
    var _this45 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const numeroString = numeroGanador.toString().padStart(2, '0');
        const {
          data,
          error
        } = yield _this45.supabase.rpc('crear_sorteos_por_sucursal', {
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
    var _this46 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this46.supabase.rpc('calcular_totales_sorteo_por_sucursal', {
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
    var _this47 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const fechaStr = _this47.formatDateOnlyForSupabase(fecha);
        const sorteoId = `${fechaStr}-${sorteo}`;
        const {
          data,
          error
        } = yield _this47.supabase.from('sorteos').select('*').eq('id', sorteoId).order('sucursal');
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
    var _this48 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const sorteosPorSucursal = yield _this48.getSorteosPorSucursal(fecha, sorteo);
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
    var _this49 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data: ventas,
          error
        } = yield _this49.supabase.from('sales').select(`
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
  // ========================
  // MÉTODOS OPTIMIZADOS PARA ADMIN
  // ========================
  /**
   * Obtener resumen completo optimizado para el admin en una sola consulta
   */
  getAdminDashboardData(fechaDesde, fechaHasta, sorteoFilter, sucursalFilter) {
    var _this50 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let startDateStr, endDateStr;
        if (fechaDesde && fechaHasta) {
          startDateStr = _this50.formatLocalDateForSupabase(_this50.getStartOfDayHonduras(fechaDesde));
          endDateStr = _this50.formatLocalDateForSupabase(_this50.getEndOfDayHonduras(fechaHasta));
        } else if (fechaDesde) {
          startDateStr = _this50.formatLocalDateForSupabase(_this50.getStartOfDayHonduras(fechaDesde));
          endDateStr = _this50.formatLocalDateForSupabase(_this50.getEndOfDayHonduras(fechaDesde));
        } else {
          const today = _this50.getHondurasDateTime();
          startDateStr = _this50.formatLocalDateForSupabase(_this50.getStartOfDayHonduras(today));
          endDateStr = _this50.formatLocalDateForSupabase(_this50.getEndOfDayHonduras(today));
        }
        // Construir query base
        let salesQuery = _this50.supabase.from('sales').select(`
          id,
          sucursal,
          sorteo,
          total,
          fecha,
          created_at,
          sale_details (
            numero,
            monto
          )
        `).gte('fecha', startDateStr).lte('fecha', endDateStr);
        // Aplicar filtros opcionales
        if (sorteoFilter) {
          salesQuery = salesQuery.eq('sorteo', sorteoFilter);
        }
        if (sucursalFilter) {
          salesQuery = salesQuery.eq('sucursal', sucursalFilter);
        }
        const {
          data: salesData,
          error
        } = yield salesQuery;
        if (error) {
          console.error('Error en consulta optimizada:', error);
          throw error;
        }
        // Obtener sorteos cerrados para calcular totales pagados
        const {
          data: sorteosData,
          error: sorteosError
        } = yield _this50.supabase.from('sorteos').select('id, sorteo, numero_ganador, factor_multiplicador, cerrado').eq('cerrado', true);
        if (sorteosError) {
          console.warn('Error obteniendo sorteos cerrados:', sorteosError);
        }
        // Procesar datos en memoria
        const sorteosCerrados = new Map();
        (sorteosData || []).forEach(sorteo => {
          if (sorteo.numero_ganador) {
            sorteosCerrados.set(sorteo.sorteo, {
              numeroGanador: parseInt(sorteo.numero_ganador),
              factor: sorteo.factor_multiplicador || 70
            });
          }
        });
        let totalVendido = 0;
        let totalPagado = 0;
        let totalVentas = 0;
        const ventasPorSucursal = new Map();
        const numerosPorSorteo = new Map();
        // Procesar todas las ventas en una sola iteración
        (salesData || []).forEach(sale => {
          totalVentas++;
          totalVendido += sale.total;
          // Procesar por sucursal
          if (!ventasPorSucursal.has(sale.sucursal)) {
            ventasPorSucursal.set(sale.sucursal, {
              sucursal: sale.sucursal,
              totalVendido: 0,
              totalPagado: 0,
              gananciaNeta: 0,
              ventasCount: 0
            });
          }
          const sucursalData = ventasPorSucursal.get(sale.sucursal);
          sucursalData.totalVendido += sale.total;
          sucursalData.ventasCount++;
          // Procesar números por sorteo
          if (!numerosPorSorteo.has(sale.sorteo)) {
            numerosPorSorteo.set(sale.sorteo, new Map());
          }
          const sorteoMap = numerosPorSorteo.get(sale.sorteo);
          if (!sorteoMap.has(sale.sucursal)) {
            sorteoMap.set(sale.sucursal, new Map());
          }
          const sucursalMap = sorteoMap.get(sale.sucursal);
          // Procesar detalles de la venta
          (sale.sale_details || []).forEach(detail => {
            const numero = parseInt(detail.numero.toString());
            // Agregar a números por sorteo/sucursal
            if (!sucursalMap.has(numero)) {
              sucursalMap.set(numero, {
                totalVendido: 0,
                cantidadVentas: 0
              });
            }
            const numeroData = sucursalMap.get(numero);
            numeroData.totalVendido += detail.monto;
            numeroData.cantidadVentas++;
            // Calcular total pagado si el sorteo está cerrado
            const sorteoInfo = sorteosCerrados.get(sale.sorteo);
            if (sorteoInfo && numero === sorteoInfo.numeroGanador) {
              const montoPagado = detail.monto * sorteoInfo.factor;
              totalPagado += montoPagado;
              sucursalData.totalPagado += montoPagado;
            }
          });
          sucursalData.gananciaNeta = sucursalData.totalVendido - sucursalData.totalPagado;
        });
        // Convertir Maps a arrays con porcentajes
        const numerosPorSorteoArray = [];
        numerosPorSorteo.forEach((sucursalesMap, sorteo) => {
          const sucursales = [];
          sucursalesMap.forEach((numerosMap, sucursal) => {
            let totalSucursal = 0;
            numerosMap.forEach(data => {
              totalSucursal += data.totalVendido;
            });
            const numeros = [];
            numerosMap.forEach((data, numero) => {
              numeros.push({
                numero,
                totalVendido: data.totalVendido,
                cantidadVentas: data.cantidadVentas,
                porcentaje: totalSucursal > 0 ? data.totalVendido / totalSucursal * 100 : 0
              });
            });
            numeros.sort((a, b) => b.totalVendido - a.totalVendido);
            sucursales.push({
              sucursal,
              numeros
            });
          });
          numerosPorSorteoArray.push({
            sorteo,
            sucursales
          });
        });
        return {
          totalVendido,
          totalPagado,
          gananciaNeta: totalVendido - totalPagado,
          totalVentas,
          ventasPorSucursal: Array.from(ventasPorSucursal.values()),
          numerosPorSorteo: numerosPorSorteoArray
        };
      } catch (error) {
        console.error('Error en getAdminDashboardData:', error);
        return {
          totalVendido: 0,
          totalPagado: 0,
          gananciaNeta: 0,
          totalVentas: 0,
          ventasPorSucursal: [],
          numerosPorSorteo: []
        };
      }
    })();
  }
  /**
   * Obtener ventas optimizadas con detalles en una sola consulta
   */
  getSalesWithDetailsOptimized(fechaDesde, fechaHasta, sorteoFilter) {
    var _this51 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let startDateStr, endDateStr;
        if (fechaDesde && fechaHasta) {
          startDateStr = _this51.formatLocalDateForSupabase(_this51.getStartOfDayHonduras(fechaDesde));
          endDateStr = _this51.formatLocalDateForSupabase(_this51.getEndOfDayHonduras(fechaHasta));
        } else if (fechaDesde) {
          startDateStr = _this51.formatLocalDateForSupabase(_this51.getStartOfDayHonduras(fechaDesde));
          endDateStr = _this51.formatLocalDateForSupabase(_this51.getEndOfDayHonduras(fechaDesde));
        } else {
          const today = _this51.getHondurasDateTime();
          startDateStr = _this51.formatLocalDateForSupabase(_this51.getStartOfDayHonduras(today));
          endDateStr = _this51.formatLocalDateForSupabase(_this51.getEndOfDayHonduras(today));
        }
        let query = _this51.supabase.from('sales').select(`
          id,
          user_id,
          sucursal,
          sorteo,
          fecha,
          total,
          numero_recibo,
          correlativo,
          created_at,
          sale_details (
            id,
            numero,
            monto
          )
        `).gte('fecha', startDateStr).lte('fecha', endDateStr).order('created_at', {
          ascending: false
        });
        if (sorteoFilter && sorteoFilter.trim() !== '') {
          query = query.eq('sorteo', sorteoFilter);
        }
        const {
          data,
          error
        } = yield query;
        if (error) {
          throw error;
        }
        const sales = [];
        const saleDetails = {};
        (data || []).forEach(saleData => {
          // Mapear venta
          const sale = {
            id: saleData.id,
            userId: saleData.user_id,
            sucursal: saleData.sucursal,
            sorteo: saleData.sorteo,
            fecha: _this51.parseDateFromDatabase(saleData.fecha),
            total: saleData.total,
            numeroRecibo: saleData.numero_recibo || saleData.id.slice(-6),
            correlativo: saleData.correlativo || 0,
            createdAt: _this51.parseDateFromDatabase(saleData.created_at)
          };
          sales.push(sale);
          // Mapear detalles
          saleDetails[sale.id] = (saleData.sale_details || []).map(detailData => ({
            id: detailData.id,
            saleId: sale.id,
            numero: parseInt(detailData.numero),
            monto: detailData.monto
          }));
        });
        return {
          sales,
          saleDetails
        };
      } catch (error) {
        console.error('Error en getSalesWithDetailsOptimized:', error);
        return {
          sales: [],
          saleDetails: {}
        };
      }
    })();
  }
  /**
   * Obtener datos optimizados para una sola fecha (método más rápido para uso diario)
   */
  getDailyOptimizedData(fecha, sorteoFilter) {
    var _this52 = this;
    return (0,C_Users_edavd_Proyectos_PERSONALES_Loteria_v1_loteria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const startDateStr = _this52.formatLocalDateForSupabase(_this52.getStartOfDayHonduras(fecha));
        const endDateStr = _this52.formatLocalDateForSupabase(_this52.getEndOfDayHonduras(fecha));
        // Una sola consulta para obtener todo
        let query = _this52.supabase.from('sales').select(`
          id,
          user_id,
          sucursal,
          sorteo,
          fecha,
          total,
          numero_recibo,
          correlativo,
          created_at,
          sale_details (
            id,
            numero,
            monto
          )
        `).gte('fecha', startDateStr).lte('fecha', endDateStr).order('created_at', {
          ascending: false
        });
        if (sorteoFilter && sorteoFilter.trim() !== '') {
          query = query.eq('sorteo', sorteoFilter);
        }
        const {
          data: salesData,
          error
        } = yield query;
        if (error) {
          throw error;
        }
        // Obtener sorteos cerrados del día
        const fechaStr = _this52.formatDateOnlyForSupabase(fecha);
        const {
          data: sorteosData,
          error: sorteosError
        } = yield _this52.supabase.from('sorteos').select('sorteo, numero_ganador, factor_multiplicador, cerrado').like('id', `${fechaStr}-%`).eq('cerrado', true);
        if (sorteosError) {
          console.warn('Error obteniendo sorteos del día:', sorteosError);
        }
        // Crear mapa de sorteos cerrados
        const sorteosCerrados = new Map();
        (sorteosData || []).forEach(sorteo => {
          if (sorteo.numero_ganador) {
            sorteosCerrados.set(sorteo.sorteo, {
              numeroGanador: parseInt(sorteo.numero_ganador),
              factor: sorteo.factor_multiplicador || 70
            });
          }
        });
        // Procesar datos
        const sales = [];
        const saleDetails = {};
        let totalVendido = 0;
        let totalPagado = 0;
        const ventasPorSucursal = new Map();
        (salesData || []).forEach(saleData => {
          // Mapear venta
          const sale = {
            id: saleData.id,
            userId: saleData.user_id,
            sucursal: saleData.sucursal,
            sorteo: saleData.sorteo,
            fecha: _this52.parseDateFromDatabase(saleData.fecha),
            total: saleData.total,
            numeroRecibo: saleData.numero_recibo || saleData.id.slice(-6),
            correlativo: saleData.correlativo || 0,
            createdAt: _this52.parseDateFromDatabase(saleData.created_at)
          };
          sales.push(sale);
          totalVendido += sale.total;
          // Mapear detalles y calcular datos por sucursal
          if (!ventasPorSucursal.has(sale.sucursal)) {
            ventasPorSucursal.set(sale.sucursal, {
              sucursal: sale.sucursal,
              totalVendido: 0,
              totalPagado: 0,
              gananciaNeta: 0,
              ventasCount: 0
            });
          }
          const sucursalData = ventasPorSucursal.get(sale.sucursal);
          sucursalData.totalVendido += sale.total;
          sucursalData.ventasCount++;
          const details = [];
          (saleData.sale_details || []).forEach(detailData => {
            const detail = {
              id: detailData.id,
              saleId: sale.id,
              numero: parseInt(detailData.numero),
              monto: detailData.monto
            };
            details.push(detail);
            // Calcular total pagado si el sorteo está cerrado
            const sorteoInfo = sorteosCerrados.get(sale.sorteo);
            if (sorteoInfo && detail.numero === sorteoInfo.numeroGanador) {
              const montoPagado = detail.monto * sorteoInfo.factor;
              totalPagado += montoPagado;
              sucursalData.totalPagado += montoPagado;
            }
          });
          saleDetails[sale.id] = details;
          sucursalData.gananciaNeta = sucursalData.totalVendido - sucursalData.totalPagado;
        });
        return {
          sales,
          saleDetails,
          dashboardData: {
            totalVendido,
            totalPagado,
            gananciaNeta: totalVendido - totalPagado,
            totalVentas: sales.length,
            ventasPorSucursal: Array.from(ventasPorSucursal.values())
          }
        };
      } catch (error) {
        console.error('Error en getDailyOptimizedData:', error);
        return {
          sales: [],
          saleDetails: {},
          dashboardData: {
            totalVendido: 0,
            totalPagado: 0,
            gananciaNeta: 0,
            totalVentas: 0,
            ventasPorSucursal: []
          }
        };
      }
    })();
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