"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const mongoose_1 = require("mongoose");
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
// Database Config 
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connect)(process.env.MONGO_URI);
        console.log('Database is now connected');
    }
    catch (err) {
        console.error(err);
    }
});
connectDb();
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// Router Middleware
app.use('/verses', verses_1.default);
app.get('/', (req, res) => {
    res.send("<h1 style='text-align:center; margin-top:50px'>Welcome To Proverbs Daily Backend</h1>");
});
app.listen(port, function () {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    ;
});
//# sourceMappingURL=index.js.map