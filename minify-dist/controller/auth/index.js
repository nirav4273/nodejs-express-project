"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.signup=exports.login=void 0;var _index=require("../../utils/index"),_models=require("../../models"),_bcryptjs=_interopRequireDefault(require("bcryptjs")),_randomstring=_interopRequireDefault(require("randomstring"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}var comparePassword=function(a,b){return _bcryptjs["default"].compareSync(a,b)},generateToken=function(){return _randomstring["default"].generate(101)},login=function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){var d,e,f,g,h,i,j,k,l;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=b.query,e=b.body,f=b.params,g=e.email,h=e.password,a.prev=2,a.next=5,_models.user.findOne({where:{email:g},raw:!0});case 5:if(i=a.sent,!i){a.next=22;break}if(j=comparePassword(h,i.password),!j){a.next=19;break}return k=generateToken(),l={userId:i.id,token:k},console.log(l),a.next=14,_models.user_token.create(l);case 14:i.password=void 0,i.hash=k,(0,_index.response)(c,!0,200,"Login Succes",i),a.next=20;break;case 19:(0,_index.response)(c,!1,404,"Invalid username / password");case 20:a.next=23;break;case 22:(0,_index.response)(c,!1,404,"Invalid username / password");case 23:a.next=29;break;case 25:a.prev=25,a.t0=a["catch"](2),console.log(a.t0),(0,_index.response)(c,!1,404,a.t0.message);case 29:case"end":return a.stop();}},a,null,[[2,25]])}));return function(){return a.apply(this,arguments)}}();exports.login=login;var checkUser=function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",new Promise(function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(c,d){var e;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_models.user.findOne({where:{email:b}});case 3:e=a.sent,c(e),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),d(a.t0);case 10:case"end":return a.stop();}},a,null,[[0,7]])}));return function(){return a.apply(this,arguments)}}()));case 1:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),signup=function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){var d,e,f;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=b.body,a.prev=1,a.next=4,checkUser(d.email);case 4:if(e=a.sent,!e){a.next=9;break}(0,_index.response)(c,!1,409,"User Already exist"),a.next=13;break;case 9:return a.next=11,_models.user.create(d);case 11:f=a.sent,(0,_index.response)(c,!0,200,"Singup Success",f);case 13:a.next=18;break;case 15:a.prev=15,a.t0=a["catch"](1),(0,_index.response)(c,!1,404,a.t0);case 18:case"end":return a.stop();}},a,null,[[1,15]])}));return function(){return a.apply(this,arguments)}}();exports.signup=signup;