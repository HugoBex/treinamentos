export class FactoryProxy {
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, receiver) {

                if (props.includes(prop) && FactoryProxy._isFuncao(target[prop])) {
                    return function() {
                        console.log(`Interceptando ${prop}`);
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                if (props.includes(prop)) {
                    target[prop] = value;
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

    static _isFuncao(fn) {
        return typeof(fn) == typeof(Function);
    }
}