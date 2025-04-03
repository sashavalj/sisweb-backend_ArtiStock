"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes"));
const connection_1 = __importDefault(require("./src/connection/connection"));
<<<<<<< HEAD
=======
const morgan = require("morgan");
>>>>>>> a9bca52fd14f199076c0976eaa1302b506490727
const app = (0, express_1.default)();
const port = 3000;
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use(routes_1.default);
(0, connection_1.default)();
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
