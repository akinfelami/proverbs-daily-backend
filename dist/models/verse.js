"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const verseSchema = new mongoose_1.Schema({
    content: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    }
}, { timestamps: true });
const Verse = (0, mongoose_1.model)('Verse', verseSchema);
exports.default = Verse;
//# sourceMappingURL=verse.js.map