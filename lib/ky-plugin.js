"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ky_1 = require("ky");
function KyPlugin(vue, options) {
    if (options === undefined) {
        vue.prototype.$ky = ky_1.default;
    }
    else {
        vue.prototype.$ky = options;
    }
}
exports.default = KyPlugin;
