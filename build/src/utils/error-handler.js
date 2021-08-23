"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(errorCode = 500) {
        super();
        this.code = errorCode;
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=error-handler.js.map