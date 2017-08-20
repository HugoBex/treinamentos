import { FactoryProxy } from '../services/FactoryProxy';

export class Bind {
    constructor(model, view, ...props) {
        let proxy = FactoryProxy.create(model, props, model => view.update(model));
        view.update(model)
        return proxy;
    }
}