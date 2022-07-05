"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verseRouter = (0, express_1.Router)();
verseRouter.get('/', (req, res) => {
    res.send({ msg: 'Welcome to the Backend API' });
});
exports.default = verseRouter;
//# sourceMappingURL=verses.js.map