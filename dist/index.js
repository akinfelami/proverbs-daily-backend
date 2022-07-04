"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const verses_1 = __importDefault(require("./routes/verses"));
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use('/verses', verses_1.default);
app.get('/*', (req, res) => {
    res.send({ info: 'Backend is Live' });
});
app.listen(port, function () {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    ;
});
//# sourceMappingURL=index.js.map