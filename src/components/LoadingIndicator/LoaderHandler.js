import emitter from "emitter";

export const LoaderHandler = {
    show(value) {
        emitter.emit('changeLoadingEffect', value);
    }
};
