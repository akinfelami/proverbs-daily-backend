"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send({ msg: 'Welcome to the Backend API' });
});
exports.default = router;
//# sourceMappingURL=verses.js.map