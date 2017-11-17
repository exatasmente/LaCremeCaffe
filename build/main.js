webpackJsonp([5],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoPage; });
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


/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProdutoPage = (function () {
    function ProdutoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagem = this.navParams.get('imagem');
        this.nome = this.navParams.get('nome');
        this.preco = this.navParams.get('preco');
        this.ingredientes = this.navParams.get('ingredientes');
        this.recomendacoes = this.navParams.get('recomendacoes');
        this.avaliacoes = this.navParams.get('avaliacoes');
        console.log(this.ingredientes);
    }
    ProdutoPage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    return ProdutoPage;
}());
ProdutoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-produto',template:/*ion-inline-start:"E:\ionic-la-creme-cafe\la-creme-cafe\src\pages\produto\produto.html"*/'<ion-header>\n  <ion-navbar color="coffe">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><div class="brand">{{nome}}</div></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-card>\n        <img src="{{imagem}}"/>\n        <ion-card-content>\n          <ion-card-title>\n            {{nome}}\n            </ion-card-title>\n            <h1>Preço: R${{preco}}0</h1>\n          <h2>\n           {{ingredientes}}\n          </h2>\n          \n          \n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"E:\ionic-la-creme-cafe\la-creme-cafe\src\pages\produto\produto.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ProdutoPage);

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/avaliar/avaliar.module": [
		401,
		0
	],
	"../pages/cardapio/cardapio.module": [
		399,
		4
	],
	"../pages/contato/contato.module": [
		402,
		3
	],
	"../pages/produto/produto.module": [
		403,
		2
	],
	"../pages/sobre/sobre.module": [
		400,
		1
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
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cardapio_cardapio__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contato_contato__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sobre_sobre__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.abrirContato = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__contato_contato__["a" /* ContatoPage */]);
    };
    HomePage.prototype.abrirCardapio = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cardapio_cardapio__["a" /* CardapioPage */]);
    };
    HomePage.prototype.abrirSobre = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__sobre_sobre__["a" /* SobrePage */]);
    };
    HomePage.prototype.abrirFacebook = function () {
        window.open('https://www.facebook.com/lacremecaffe.cafeteria.3', '_blank');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\ionic-la-creme-cafe\la-creme-cafe\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="coffe">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><div class="brand">La Cremè Caffè</div></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n        \n    <div class="starter_container bg">\n        <div class="follow_container">\n            <div class="col-md-6 col-md-offset-3">\n                    <img src ="assets/img/logo.png">\n                <h2 class="top-title ">La Cremè Caffè</h2>\n                <h2 class="white second-title">Cafeteria</h2>\n                <h3 class="white second-title">Av Ministro José Américo, 587</h3> \n                <hr>\n            </div>\n        </div>\n        <ion-buttons>\n            <button ion-button color="light" (click)="abrirCardapio()" outline>Cardápio</button>\n            <button ion-button color="light" outline menuToggle>Horários</button>\n            <button ion-button color="light" (click) = "abrirContato()" outline>Contato</button>\n            <button ion-button color="light" (click)="abrirSobre()" outline>Sobre</button>\n            <button ion-button color="light" (click)="abrirFacebook()" outline>Facebook</button>\n        </ion-buttons>\n\n    </div>\n    \n  \n</ion-content>\n'/*ion-inline-end:"E:\ionic-la-creme-cafe\la-creme-cafe\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(290);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export environment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contato_contato__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cardapio_cardapio__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_produto_produto__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBOI3O6OXOZpH_ohg5Yi87KD0GBqwR2ITs",
        authDomain: "lacremecafee.firebaseapp.com",
        databaseURL: "https://lacremecafee.firebaseio.com",
        projectId: "lacremecafee",
        storageBucket: "lacremecafee.appspot.com",
        messagingSenderId: "831799073619"
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_contato_contato__["a" /* ContatoPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__["a" /* SobrePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_cardapio_cardapio__["a" /* CardapioPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_produto_produto__["a" /* ProdutoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cardapio/cardapio.module#CardapioPageModule', name: 'CardapioPage', segment: 'cardapio', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/avaliar/avaliar.module#AvaliarPageModule', name: 'AvaliarPage', segment: 'avaliar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contato/contato.module#ContatoPageModule', name: 'ContatoPage', segment: 'contato', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/produto/produto.module#ProdutoPageModule', name: 'ProdutoPage', segment: 'produto', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(environment.firebase),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_contato_contato__["a" /* ContatoPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__["a" /* SobrePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_cardapio_cardapio__["a" /* CardapioPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_produto_produto__["a" /* ProdutoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cardapio_cardapio__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contato_contato__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { icon: 'home', title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { icon: 'restaurant', title: 'Cardápio', component: __WEBPACK_IMPORTED_MODULE_5__pages_cardapio_cardapio__["a" /* CardapioPage */] },
            { icon: 'send', title: 'Contato', component: __WEBPACK_IMPORTED_MODULE_6__pages_contato_contato__["a" /* ContatoPage */] },
            { icon: 'information-circle', title: 'Sobre', component: __WEBPACK_IMPORTED_MODULE_7__pages_sobre_sobre__["a" /* SobrePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\ionic-la-creme-cafe\la-creme-cafe\src\app\app.html"*/'\n<ion-menu [content]="content" >\n  <ion-header >\n    <ion-toolbar color="coffe">\n          <div class="brand">  La Cremè Caffè      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content >\n    <ion-list color = "coffe">\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" color ="coffe">\n          <ion-icon name="{{p.icon}}" large></ion-icon>\n          {{p.title}}\n      </button>\n      \n    </ion-list>\n    <div class="horario">\n    <h1> Horários </h1>\n    <ion-grid>\n      <ion-row>\n          <ion-col>\n            <div>Segunda: FECHADO</div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <div>Terça: 15:00 - 23:00</div>\n          </ion-col>\n      </ion-row>                \n      <ion-row>\n          <ion-col>\n            <div>Quarta: 15:00 - 23:00</div>\n      </ion-col>\n      </ion-row>            \n      <ion-row>\n          <ion-col>\n            <div>Quinta: 15:00 - 23:00</div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <div>Sexta: 15:00 - 23:00</div>\n          </ion-col>\n      </ion-row>                \n      <ion-row>\n          <ion-col>\n            <div>Sábado: 15:00 - 23:00</div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <div>Domingo: 15:00 - 23:00</div>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n  </div>\n  <div class="copyright">\n      <a href="#" onclick="window.open(\'http://www.includejr.com.br\') ">\n       exatasmente\n      </a>\n  </div>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\ionic-la-creme-cafe\la-creme-cafe\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardapioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__produto_produto__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardapioPage = (function () {
    function CardapioPage(navCtrl, navParams, db) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aba = "bebidas";
        this.bebidas = new Array();
        this.comidas = new Array();
        db.list("/Comidas").forEach(function (e) {
            e.forEach(function (b) {
                _this.comidas.push({
                    tipo: b.tipo,
                    conteudo: b.Conteudo
                });
            });
        });
        db.list("/Bebidas").forEach(function (e) {
            e.forEach(function (b) {
                _this.bebidas.push({
                    tipo: b.tipo,
                    conteudo: b.Conteudo
                });
            });
        });
    }
    CardapioPage.prototype.verBebida = function (bebida) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__produto_produto__["a" /* ProdutoPage */], { 'imagem': bebida.imagem,
            'nome': bebida.nome,
            'preco': bebida.preco,
            'recomendacoes': bebida.recomendacoes,
            'avaliacoes': bebida.avaliacoes,
            'ingredientes': bebida.ingredientes });
    };
    CardapioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardapioPage');
    };
    return CardapioPage;
}());
CardapioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cardapio',template:/*ion-inline-start:"E:\ionic-la-creme-cafe\la-creme-cafe\src\pages\cardapio\cardapio.html"*/'<ion-header>\n    <ion-title></ion-title>\n    <ion-toolbar color="coffe" >\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-segment [(ngModel)] = "aba"  color ="light">\n        <ion-segment-button value="bebidas" color ="light">\n          Bibidas\n        </ion-segment-button>\n        <ion-segment-button value="comidas" color = "light">\n            Comidas\n        </ion-segment-button>\n      </ion-segment>\n      \n    </ion-toolbar>\n</ion-header>\n\n<ion-content [ngSwitch]="aba" color = "coffe">\n    <div *ngSwitchCase="\'comidas\'">\n        <ion-list  *ngFor="let b of comidas">\n            <ion-list-header >\n                <h1>{{b.tipo}}</h1>\n              </ion-list-header>\n            <ion-item *ngFor ="let comida of b.conteudo" >\n              <ion-thumbnail item-start>\n                <img src="{{comida.imagem}}">\n              </ion-thumbnail>\n              <h3>{{comida.nome}}</h3>\n              <p>{{comida.ingredientes}}</p>\n              <p>Preco: R${{comida.preco}}0</p>\n              <ion-buttons end >\n                  <button ion-button clear item-end color="coffe" (click)="verBebida(comida)" >Ver</button>\n              </ion-buttons>\n            </ion-item>\n          </ion-list>\n        </div>\n    <div *ngSwitchCase="\'bebidas\'">\n    <ion-list  *ngFor="let b of bebidas">\n        <ion-list-header >\n            <h1>{{b.tipo}}</h1>\n          </ion-list-header>\n        <ion-item *ngFor ="let bebida of b.conteudo" >\n          <ion-thumbnail item-start>\n            <img src="{{bebida.imagem}}">\n          </ion-thumbnail>\n          <h3>{{bebida.nome}}</h3>\n          <p>{{bebida.ingredientes}}</p>\n          <p>Preco: R${{bebida.preco}}0</p>\n          <ion-buttons end >\n            <button ion-button clear item-end color="coffe" (click)="verBebida(bebida)">Ver</button>\n          </ion-buttons>\n        </ion-item>\n      </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\ionic-la-creme-cafe\la-creme-cafe\src\pages\cardapio\cardapio.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], CardapioPage);

//# sourceMappingURL=cardapio.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
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


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return SobrePage;
}());
SobrePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sobre',template:/*ion-inline-start:"E:\ionic-la-creme-cafe\la-creme-cafe\src\pages\sobre\sobre.html"*/'<ion-header>\n    <ion-navbar color="coffe">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title><div class="brand">La Cremè Caffè</div></ion-title>\n    </ion-navbar>\n  </ion-header>  \n  <ion-content >\n      <ion-slides>\n          <ion-slide>\n              <img src="assets/img/logo.png" class="slide-image"/>\n              <h2 class="slide-title">La Cremè Caffè</h2>\n              <p >O melhor do café e seus derivados, acompanhamentos espetaculares e muita arte.Venha se deliciar com as maravilhas do Barista Samuel Almeida.</p>\n          </ion-slide>\n        <ion-slide>\n          <img src="assets/img/logo.png" class="slide-image"/>\n          <h2 class="slide-title">Barista Samuel Almeida</h2>\n          <p >Barista e Sócio Proprietpario da mais nova Cafeteria da cidade, La Cremè Caffè, onde você poderá desfrutar de toda arte e habilidade na Latte Art, feita por um dos melhores profissionais do Brasil</p>\n        </ion-slide>\n        \n      </ion-slides>\n  </ion-content>\n  '/*ion-inline-end:"E:\ionic-la-creme-cafe\la-creme-cafe\src\pages\sobre\sobre.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SobrePage);

//# sourceMappingURL=sobre.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContatoPage = (function () {
    function ContatoPage(alertCtrl, http, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContatoPage.prototype.enviar = function () {
        var _this = this;
        console.log("foi");
        this.http.post('/post.php', { 'mail': this.mail, 'assunto': this.assunto, 'mensagem': this.mensagem }).subscribe(function (data) {
            var alert = _this.alertCtrl.create({
                title: 'Sucesso',
                subTitle: 'Sua Mensagem Foi Enviada',
                buttons: ['OK']
            });
            alert.present();
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Erro',
                subTitle: 'Algo Inesperado Aconteceu',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    return ContatoPage;
}());
ContatoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contato',template:/*ion-inline-start:"E:\ionic-la-creme-cafe\la-creme-cafe\src\pages\contato\contato.html"*/'<ion-header>\n    <ion-navbar color="coffe">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title><div class="brand">La Cremè Caffè</div></ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <form action="post.php" method="post">\n        <div class="contato">\n        <h3> Entre em Contato Conosco</h3>\n        <h4> Tel : (85) 9 9924 8370 </h4>\n        </div>\n          <ion-item>\n            <ion-label>Nome</ion-label>\n            <ion-input type="text"  [(ngModel)]="nome" name="nome"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Assunto</ion-label>\n            <ion-input type="text"  [(ngModel)]="assunto" name="assunto"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>email</ion-label>\n            <ion-input type="email"  [(ngModel)]="mail" name="mail"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Mensagem</ion-label>\n            <ion-textarea  [(ngModel)]="mensagem" name="mensagem"></ion-textarea>\n          </ion-item>\n          <button ion-button color ="coffe" type="submit" (click)="enviar()" block>Enviar</button>\n        </form>\n      \n  </ion-content>\n  '/*ion-inline-end:"E:\ionic-la-creme-cafe\la-creme-cafe\src\pages\contato\contato.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object])
], ContatoPage);

var _a, _b, _c, _d;
//# sourceMappingURL=contato.js.map

/***/ })

},[273]);
//# sourceMappingURL=main.js.map