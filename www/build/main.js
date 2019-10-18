webpackJsonp([2],{

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\projeto-ionic\matheusapp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\projeto-ionic\matheusapp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		285,
		1
	],
	"../pages/login/login.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_list_list__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_cadastro__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_usuario_usuario__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(83);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__dbsenac',
                    driverOrder: ['indexeddb', 'websql', 'sqlite',]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_cadastro__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_vibration__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, events, geolocation, vibration, camera) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.events = events;
        this.geolocation = geolocation;
        this.vibration = vibration;
        this.camera = camera;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.urlImage = 'assets/imgs/no_user.png';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */] },
            { title: 'Cadastro', component: __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_cadastro__["a" /* CadastroPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('#0072ff');
        });
        this.events.subscribe('attUser', function (data) {
            _this.dadosUser = data;
            _this.urlImage = data.avatar_url;
        });
        // verifica se tem dados do usuario para carregar para memoria
        this.storage.get('user').then(function (data) {
            if (data) {
                _this.events.publish('attUser', data);
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.sair = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
        this.storage.clear();
    };
    MyApp.prototype.pegarGps = function () {
        this.geolocation
            .getCurrentPosition()
            .then(function (resp) {
            var lat = resp.coords.latitude;
            var log = resp.coords.longitude;
            alert('Sua posição é ' + lat + ' ' + log);
        })
            .catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    MyApp.prototype.vibrar = function () {
        this.vibration.vibrate([2000, 1000, 2000]);
    };
    MyApp.prototype.abrirCamera = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\projeto-ionic\matheusapp\src\app\app.html"*/'<ion-menu id="menuMain" [content]="content" type="overlay">\n\n    <ion-nav #content></ion-nav>\n\n    <ion-header>\n\n        <ion-toolbar color="azulBebe">\n\n            <ion-list>\n\n                <ion-item color="azulBebe">\n\n                    <ion-avatar item-start>\n\n                        <img src="{{ urlImage }}"/>\n\n                    </ion-avatar>\n\n                    <h2>\n\n                        <b>@jogador</b>\n\n                    </h2>\n\n                    <p>Login</p>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n               {{ p.title }}\n\n            </button>\n\n            \n\n            <button menuClose ion-item (click)="pegarGps()">Pegar posição</button>\n\n            \n\n            <button menuClose ion-item (click)="abrirCamera()">\n\n                <ion-icon name="camera"></ion-icon>\n\n                Camera\n\n            </button>\n\n\n\n            <button menuClose ion-item (click)="vibrar()">\n\n                <ion-icon name="alarm"></ion-icon>\n\n                Vibrar\n\n            </button>\n\n\n\n            <button menuClose ion-item (click)="sair()">\n\n                <ion-icon name="power"></ion-icon>\n\n                Sair\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\projeto-ionic\matheusapp\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\projeto-ionic\matheusapp\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar color="light">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>Home</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content padding>\n\n\n\n      <ion-card>\n\n          <img src="../../assets/imgs/zelda2.jpg"/>\n\n          <ion-card-content>\n\n            <h2>The Legend of Zelda: Link’s Awakening </h2>\n\n            \n\n            <p>\n\n                The Legend of Zelda: Link’s Awakening é o remake do clássico \n\n                jogo homônimo de GameBoy, agora lançado com exclusividade para \n\n                Nintendo Switch. Com gráficos retrabalhados em alta definição, \n\n                o jogo também apresenta novos desafios e recursos, com itens \n\n                exclusivos e novos códigos secretos.\n\n            </p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-card>\n\n            <img src="../../assets/imgs/zelda1.jpg"/>\n\n            <ion-card-content>\n\n              <p>\n\n                  Ajude o Link a escapar de uma terra estranha em The Legend of \n\n                  Zelda: Link’s Awakening para a Nintendo Switch. Crie amizade \n\n                  com um colorido elenco de personagens, combata monstros e \n\n                  explore masmorras perigosas nesta aventura clássica com um \n\n                  novo estilo artístico.\n\n              </p>\n\n            </ion-card-content>\n\n          </ion-card>\n\n\n\n  </ion-content>'/*ion-inline-end:"C:\projeto-ionic\matheusapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_usuario_usuario__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_cadastro__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, usuarioProvider, storage, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.storage = storage;
        this.menu = menu;
        this.urlImage = 'assets/imgs/user.svg';
        this.isUsuarioValido = false;
        this.nomeUsuario = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('O ionViewDidLoad é executado quando carregar');
        // verifico ao carregar, se o usuário está logado
        this.storage.get('logado').then(function (data) {
            if (data) {
                console.log(data);
                // Ativar o menu lateral
                _this.menu.swipeEnable(true, 'menuMain');
                // se estiver logado, mova ele para pagina home
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            }
            else {
                // Desativar o menu lateral
                _this.menu.swipeEnable(false, 'menuMain');
            }
        });
    };
    LoginPage.prototype.abrirCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    LoginPage.prototype.buscarUserGithub = function () {
        var _this = this;
        this.usuarioProvider.buscarUserGithub(this.email).then(function (data) {
            if (data.avatar_url) {
                //se o usuário existir faça isso
                _this.urlImage = data.avatar_url;
                _this.nomeUsuario = data.name;
                _this.isUsuarioValido = true;
                console.log(data);
            }
            else {
                _this.isUsuarioValido = false;
                _this.urlImage = 'assets/imgs/user.svg';
            }
        });
    };
    LoginPage.prototype.fazerLogin = function () {
        var _this = this;
        var elementoBotao = document.querySelector('#btnLogin');
        elementoBotao.innerText = 'ENTRANDO...';
        var corAntiga = elementoBotao.style.background;
        elementoBotao.style.background = '#7f8c8d';
        setTimeout(function () {
            if (_this.senha == 'admin') {
                console.log('Logado!');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
            }
            else {
                console.log('E-mail ou senha inválidos');
            }
            elementoBotao.innerText = 'ENTRAR';
            elementoBotao.style.background = corAntiga;
        }, 3000);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\projeto-ionic\matheusapp\src\pages\login\login.html"*/'<ion-content padding class="card-background-page">\n        <ion-card>\n            <img src="../../assets/imgs/triforce.png"/>\n        </ion-card>\n  <div class="boxLogin">\n      <!-- <img src="../../assets/imgs/gamepad.svg" width="150px" height="150px" alt=""> -->\n      <p *ngIf="isUsuarioValido">Bem vindo {{ nomeUsuario }}</p>\n  </div>\n  \n      <ion-list>\n          <ion-item>\n              <ion-label stacked>Usuário do Github</ion-label>\n            <ion-input type="email" [(ngModel)]="email" (blur)="buscarUserGithub()"></ion-input>\n        </ion-item>\n  \n          <ion-item *ngIf="isUsuarioValido">\n              <ion-label stacked>Senha</ion-label>\n              <ion-input type="password" [(ngModel)]="senha"></ion-input>\n          </ion-item>\n  \n          <ion-item *ngIf="isUsuarioValido">\n              <button id="btnLogin" ion-button block round (click)="fazerLogin()">ENTRAR</button>\n              <br/>\n              <p (click)="abrirCadastro()">Crie sua conta</p>\n          </ion-item>\n  \n      </ion-list>\n  </ion-content>\n'/*ion-inline-end:"C:\projeto-ionic\matheusapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_usuario_usuario__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, usuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.cadastrar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    CadastroPage.prototype.buscarCep = function () {
        var _this = this;
        this.usuarioProvider.buscarEnderecoViaCep(this.cep).then(function (data) {
            _this.bairro = data.bairro;
            _this.rua = data.logradouro;
            _this.estado = data.localidade;
            _this.cep = data.Cep;
            console.log(data);
        });
    };
    CadastroPage.prototype.jaPossuoConta = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\projeto-ionic\matheusapp\src\pages\cadastro\cadastro.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Cadastre-se</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<!-- SVG GERADO NO SITE: https://getwaves.io/ -->\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">\n  <path fill="#327eff" fill-opacity="1" d="M0,256L60,218.7C120,181,240,107,360,117.3C480,128,600,224,720,245.3C840,267,960,213,1080,165.3C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>\n</svg>\n  <ion-list>\n      <ion-item>\n        <ion-label stacked>Nome</ion-label>\n        <ion-input type="nome" [(ngModel)]="nome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Data de nascimento</ion-label>\n        <ion-datetime\n          doneText="OK"\n          cancelText="Cancelar"\n          min="1930"\n          displayFormat="DD/MM/YYYY"\n          [(ngModel)]="dtNascimento"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="email" [(ngModel)]="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked>Cep</ion-label>\n          <ion-input type="text" (blur)="buscarCep()" [(ngModel)]="cep"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked>Rua</ion-label>\n          <ion-input type="text" [(ngModel)]="rua"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked>Bairro</ion-label>\n          <ion-input type="text" [(ngModel)]="bairro"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label stacked>Estado</ion-label>\n          <ion-input type="text" [(ngModel)]="estado"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n          <ion-label stacked>Senha</ion-label>\n          <ion-input type="password" [(ngModel)]="senha"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <button (click)="cadastrar()" id="btnLogin" ion-button block round>\n          CADASTRAR\n        </button>\n        <br />\n        <p (click)="jaPossuoConta()">Já tem uma conta? <b>Entrar</b></p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\projeto-ionic\matheusapp\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuarioProvider = /** @class */ (function () {
    function UsuarioProvider(http) {
        this.http = http;
        console.log('Hello UsuarioProvider Provider');
    }
    UsuarioProvider.prototype.buscarEnderecoViaCep = function (cep) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://viacep.com.br/ws/" + cep + "/json/").subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.error(err);
            });
        });
    };
    UsuarioProvider.prototype.buscarUserGithub = function (user) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://api.github.com/users/" + user).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve('error');
                console.error(err);
            });
        });
    };
    UsuarioProvider.prototype.localizarIp = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https:freegeoip.app/json/").subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve('error');
                console.error(err);
            });
        });
    };
    UsuarioProvider.prototype.buscarMusica = function (musica) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("https://itunes.apple.com/search?term=" + musica + "&limit=25").subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve('error');
                console.error(err);
            });
        });
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map