"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const authenticate = (req, res, next) => {
    // Aquí podrías validar token o sesión más adelante
    console.log('Authentication middleware passed');
    next();
};
exports.authenticate = authenticate;
