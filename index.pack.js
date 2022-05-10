/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
    function Character(data) {
        _classCallCheck(this, Character);

        Object.assign(this, data);
        this.diceHtml = (0, _utils.getDicePlaceholderHtml)(this.diceCount);
        this.maxHealth = this.health;
    }

    _createClass(Character, [{
        key: 'setDiceHtml',
        value: function setDiceHtml() {
            this.currentDiceScore = (0, _utils.getDiceRollArray)(this.diceCount);
            this.diceHtml = this.currentDiceScore.map(function (num) {
                return '<div class="dice">' + num + '</div>';
            }).join('');
        }
    }, {
        key: 'takeDamage',
        value: function takeDamage(attackScoreArray) {
            var totalAttackScore = attackScoreArray.reduce(function (total, current) {
                return total + current;
            });
            this.health -= totalAttackScore;
            if (this.health <= 0) {
                this.dead = true;
                this.health = 0;
            }
        }
    }, {
        key: 'getHealthBarHtml',
        value: function getHealthBarHtml() {
            var percent = (0, _utils.getPercentage)(this.health, this.maxHealth);
            return '<div class="health-bar-outer">\n                    <div class="health-bar-inner ' + (percent <= 25 ? 'danger' : '') + '" \n                        style="width: ' + percent + '%;"></div>\n                </div>';
        }
    }, {
        key: 'getCharacterHtml',
        value: function getCharacterHtml() {
            var elementId = this.elementId,
                name = this.name,
                avatar = this.avatar,
                health = this.health,
                diceCount = this.diceCount,
                diceHtml = this.diceHtml;

            var healthBar = this.getHealthBarHtml();
            return '\n        <div class="character-card">\n            <h4 class="name">' + name + '</h4>\n            <img class="avatar" src="' + avatar + '"/>\n            <p class="health">health: <b>' + health + '</b></p>\n            ' + healthBar + '\n            <div class="dice-container">' + diceHtml + '</div>\n        </div>';
        }
    }]);

    return Character;
}();

exports.default = Character;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var characterData = {
    hero: {
        name: "Wizard",
        avatar: "images/wizard.png",
        health: 60,
        diceCount: 3,
        currentDiceScore: []
    },
    orc: {
        name: "Orc",
        avatar: "images/orc.png",
        health: 30,
        diceCount: 1,
        currentDiceScore: []
    },
    demon: {
        name: "Demon",
        avatar: "images/demon.png",
        health: 25,
        diceCount: 2,
        currentDiceScore: []
    },
    goblin: {
        name: "Goblin",
        avatar: "images/goblin.png",
        health: 20,
        diceCount: 3,
        currentDiceScore: []
    }
};

exports.default = characterData;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _data = __webpack_require__(1);

var _data2 = _interopRequireDefault(_data);

var _Character = __webpack_require__(0);

var _Character2 = _interopRequireDefault(_Character);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var monstersArray = ['orc', 'demon', 'goblin'];
var isWaiting = false;

function getNewMonster() {
    var nextMonsterData = _data2.default[monstersArray.shift()];
    return nextMonsterData ? new _Character2.default(nextMonsterData) : {};
}

function attack() {
    if (!isWaiting) {
        wizard.setDiceHtml();
        monster.setDiceHtml();
        wizard.takeDamage(monster.currentDiceScore);
        monster.takeDamage(wizard.currentDiceScore);
        render();
        if (wizard.dead) {
            endGame();
        } else if (monster.dead) {
            isWaiting = true;
            if (monstersArray.length > 0) {
                setTimeout(function () {
                    monster = getNewMonster();
                    render();
                    isWaiting = false;
                }, 1500);
            } else {
                endGame();
            }
        }
    }
}

function endGame() {
    isWaiting = true;
    var endMessage = wizard.health === 0 && monster.health === 0 ? 'No victors, all creatures are dead' : wizard.health > 0 ? 'The Wizard is victorious!' : monster.name + ' is Victorious!';
    var endEmoji = wizard.health > 0 ? '🔮' : '🏴‍☠️';
    setTimeout(function () {
        document.body.innerHTML = '\n            <div class="end-game">\n                <h2>Game Over</h2>\n                <h3>' + endMessage + '</h3>\n                <p class="end-emoji">' + endEmoji + '</p>\n            </div>';
    }, 1500);
}

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = monster.getCharacterHtml();
}

document.getElementById('attack-button').addEventListener('click', attack);

var wizard = new _Character2.default(_data2.default.hero);
var monster = getNewMonster();

render();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function () {
        return Math.floor(Math.random() * 6) + 1;
    });
}

var getPercentage = function getPercentage(remainingHealth, maximumHealth) {
    return 100 * remainingHealth / maximumHealth;
};

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(function () {
        return '<div class="placeholder-dice"></div>';
    }).join('');
}

exports.getDiceRollArray = getDiceRollArray;
exports.getDicePlaceholderHtml = getDicePlaceholderHtml;
exports.getPercentage = getPercentage;

/***/ })
/******/ ]);