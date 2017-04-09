"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var user_1 = require("./data/user/index");
exports.default = redux_1.combineReducers({
    UserReducer: user_1.reducer
});
