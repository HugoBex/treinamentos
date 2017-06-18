"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _typeof, _createClass, FactoryProxy;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("FactoryProxy", FactoryProxy = function () {
                function FactoryProxy() {
                    _classCallCheck(this, FactoryProxy);
                }

                _createClass(FactoryProxy, null, [{
                    key: "create",
                    value: function create(objeto, props, acao) {
                        return new Proxy(objeto, {
                            get: function get(target, prop, receiver) {

                                if (props.includes(prop) && FactoryProxy._isFuncao(target[prop])) {
                                    return function () {
                                        console.log("Interceptando " + prop);
                                        Reflect.apply(target[prop], target, arguments);
                                        return acao(target);
                                    };
                                }

                                return Reflect.get(target, prop, receiver);
                            },
                            set: function set(target, prop, value, receiver) {
                                if (props.includes(prop)) {
                                    target[prop] = value;
                                    acao(target);
                                }
                                return Reflect.set(target, prop, value, receiver);
                            }
                        });
                    }
                }, {
                    key: "_isFuncao",
                    value: function _isFuncao(fn) {
                        return (typeof fn === "undefined" ? "undefined" : _typeof(fn)) == (typeof Function === "undefined" ? "undefined" : _typeof(Function));
                    }
                }]);

                return FactoryProxy;
            }());

            _export("FactoryProxy", FactoryProxy);
        }
    };
});
//# sourceMappingURL=FactoryProxy.js.map