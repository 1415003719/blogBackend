require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' }, { name: 'mobile-web-app-capable', content: 'yes' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css', '~node_modules/vuetify/dist/vuetify.min.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  build: {
    vendor: ['axios']
  },
  plugins: ['~/plugins/vuetify'],
  modules: []
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mongoose = __webpack_require__(2);

var connect = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(url) {
    var connector;
    return __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return mongoose.connect('mongodb://127.0.0.1:27017/myBlog');

          case 3:
            connector = _context.sent;
            return _context.abrupt('return', connector);

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', _context.t0);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 7]]);
  }));

  return function connect(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ exports["a"] = connect;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin__ = __webpack_require__(12);



var router = __WEBPACK_IMPORTED_MODULE_0_koa_router___default()();
router.use('/admin', __WEBPACK_IMPORTED_MODULE_1__admin__["a" /* default */].routes());

/* harmony default export */ exports["a"] = router;

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa-body");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa-cors");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repositories_articleRepository__ = __webpack_require__(11);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var Article = function Article(options) {
  options = options || {};
  this.id = options._id || options.id || null;
  this.title = options.title || '';
  this.introduction = options.introduction || '';
  this.content = options.content || '';
  this.publicationDate = new Date();
  this.active = options.active || true;
};

Article.create = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(options) {
    var body, article, result;
    return __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = options || {};
            _context.next = 3;
            return validataBody(options);

          case 3:
            body = _context.sent;
            article = init(body);
            // console.log(article)

            _context.next = 7;
            return article.save();

          case 7:
            result = _context.sent;
            return _context.abrupt('return', result);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

// instance methods
Article.prototype.save = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
  var article;
  return __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return __WEBPACK_IMPORTED_MODULE_1__repositories_articleRepository__["a" /* default */].saveArticle(this);

        case 2:
          article = _context2.sent;
          return _context2.abrupt('return', article);

        case 4:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));

Article.prototype.getId = function () {
  return this.id || null;
};

Article.prototype.getTitle = function () {
  return this.title || '';
};

Article.prototype.getIntroduction = function () {
  return this.introduction || '';
};

Article.prototype.getContent = function () {
  return this.content || '';
};

Article.prototype.getPublicationDate = function () {
  return this.publicationDate || null;
};

Article.prototype.isActive = function () {
  return this.active;
};

// private methods
var validataBody = function validataBody(options) {
  return new Promise(function (resolve, reject) {
    options = options || {};
    if (!options.content) {
      reject(new Error(401, 'no content'));
    }
    if (!options.title) {
      reject(new Error(401, 'no title'));
    }
    if (!options.introduction) {
      reject(new Error(401, 'no introduction'));
    }
    resolve(options);
  });
};

var init = function init(article) {
  return new Article(article);
};

// let initArray = function (articles) {
//   return articles.map((article) => {
//     return Article.init(article)
//   })
// }

/* harmony default export */ exports["a"] = Article;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var mongoose = __webpack_require__(2);
var Schema = mongoose.Schema;

var schemaOptions = { autoIndex: false, collection: 'articles', discriminatorKey: '_type' };
var ArticleRepositorySchema = new Schema({
  content: { type: String, required: true },
  title: { type: String, required: true },
  introduction: { type: String, required: true },
  publicationDate: { type: Date, required: true },
  active: { type: String, default: true },
  _type: { type: String, default: 'Article' }
}, schemaOptions);

// ArticleRepositorySchema.statics.findByConditions = function (options, callback) {
//   var conditions = options || {}
//   // console.log(conditions)
//   var q = this.find()
//   q.where('_type').equals('Article')

//   if (conditions._id) {
//     q.where('_id').equals(conditions._id)
//   }
//   if (conditions.customerId) {
//     q.where('customerId').equals(conditions.customerId)
//   }
//   if (conditions.userId) {
//     q.where('userIds').equals(conditions.userId)
//   }
//   if (conditions.service) {
//     q.where('service').equals(conditions.service)
//   }
//   if (conditions.subCateogry) {
//     q.where('subCateogry').equals(conditions.subCateogry)
//   }
//   if (typeof conditions.finish !== 'undefined') {
//     q.where('finish').equals(conditions.finish)
//   }

//   if (typeof conditions.active !== 'undefined') {
//     q.where('active').equals(conditions.active)
//   }

//   if (conditions.populate) {
//     if (typeof conditions.populate === 'string') {
//       conditions.populate = conditions.populate.split('+')
//     }
//     for (var i = 0; i < conditions.populate.length; i++) {
//       q.populate(conditions.populate[i])
//     }
//   }

//   if (conditions.sort) {
//     q.sort(conditions.sort)
//   }
//   // console.log(q.getQuery())
//   var page = conditions.page
//   if (typeof page !== 'undefined') {
//     q.sort('_id')
//     var paginateOptions = {
//       perPage: conditions.perPage || 10,
//       delta: 9,
//       page: page
//     }
//     q.paginate(paginateOptions, function (err, res) {
//       if (err) {
//         callback(err)
//       } else {
//         callback(null, res.results, res.count)
//       }
//     })
//   } else {
//     q.exec(callback)
//   }
// }
ArticleRepositorySchema.statics.saveArticle = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(article) {
    var Self, id, articleRepo, prop, newArticle;
    return __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Self = this;

            console.log(self);
            id = article.getId() || new mongoose.Types.ObjectId();

            delete article.id;
            _context.next = 6;
            return Self.findById(id);

          case 6:
            articleRepo = _context.sent;

            if (!articleRepo) {
              _context.next = 14;
              break;
            }

            for (prop in article) {
              if (prop !== '_id' && prop !== '_type') {
                articleRepo[prop] = article[prop];
              }
            }
            _context.next = 11;
            return articleRepo.save();

          case 11:
            return _context.abrupt('return', _context.sent);

          case 14:
            newArticle = new Self(article);
            _context.next = 17;
            return newArticle.save();

          case 17:
            return _context.abrupt('return', _context.sent);

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

var articleRepository = mongoose.model('Article', ArticleRepositorySchema);
/* harmony default export */ exports["a"] = articleRepository;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_article__ = __webpack_require__(10);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var router = __WEBPACK_IMPORTED_MODULE_1_koa_router___default()();

router.get('/admin', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    return __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx.body = { 'result': 'ok', status: 200 };

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

router.post('/blogs', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
    var body, blog;
    return __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // console.log(ctx.request.body)
            body = ctx.request.body;
            _context2.prev = 1;
            _context2.next = 4;
            return __WEBPACK_IMPORTED_MODULE_2__models_article__["a" /* default */].create(body);

          case 4:
            blog = _context2.sent;

            ctx.body = blog;
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](1);

            console.log(_context2.t0.name, _context2.t0.message, _context2.t0.number, _context2.t0.description);
            ctx.body = { 'err': _context2.t0 };

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[1, 8]]);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ exports["a"] = router;

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_cors__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_connectDB__ = __webpack_require__(4);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var koaBody = __webpack_require__(7);

var app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

try {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__lib_connectDB__["a" /* default */])();
} catch (err) {
  console.log(err);
}

app.use(koaBody());
// Import and Set Nuxt.js options
var config = __webpack_require__(3);
config.dev = !(app.env === 'production');

// Instantiate nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

// Build in development
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
  builder.build().catch(function (e) {
    console.error(e); // eslint-disable-line no-console
    process.exit(1);
  });
}
app.use(__WEBPACK_IMPORTED_MODULE_4_koa_cors___default()());
app.use(__WEBPACK_IMPORTED_MODULE_3__router_index__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_3__router_index__["a" /* default */].allowedMethods());
app.use(function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var start, ms;
    return __WEBPACK_IMPORTED_MODULE_0_E_Develop_myblog_blogBackend_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = new Date();
            _context.next = 3;
            return next();

          case 3:
            ms = new Date() - start;

            console.log(ctx.method + ' ' + ctx.url + ' - ' + ms + 'ms');

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.use(function (ctx) {
  ctx.status = 200; // koa defaults to 404 when it sees that status is unset

  return new Promise(function (resolve, reject) {
    ctx.res.on('close', resolve);
    ctx.res.on('finish', resolve);
    nuxt.render(ctx.req, ctx.res, function (promise) {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject);
    });
  });
});
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }
/******/ ]);
//# sourceMappingURL=main.map