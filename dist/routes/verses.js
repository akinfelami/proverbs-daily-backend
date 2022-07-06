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
const express_1 = require("express");
const verse_1 = __importDefault(require("../models/verse"));
const axios_1 = __importDefault(require("axios"));
const chaptersandverses_1 = __importDefault(require("../chaptersandverses"));
const verseRouter = (0, express_1.Router)();
verseRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    const chapter = Math.floor(Math.random() * (Math.floor(31) - Math.ceil(1)) + 1);
    const verse = Math.floor(Math.random() * (Math.floor(chaptersandverses_1.default[chapter]) - Math.ceil(1)) + 1);
    yield axios_1.default.get(`https://bible-api.com/proverbs ${chapter}:${verse}`)
        .then((res) => {
        const reference = res.data.reference;
        const text = res.data.text;
        const translationName = res.data.translation_name;
        result = {
            content: text.replace(/(\r\n|\n|\r)/gm, " "),
            reference: reference,
            translation: translationName
        };
    })
        .catch(err => console.error(err));
    const newVerse = new verse_1.default({
        content: result.content,
        reference: result.reference,
        translation: result.translation
    });
    yield newVerse.save();
    res.send(JSON.stringify(result));
}));
verseRouter.get('/feed', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const verses = yield verse_1.default.find({}).sort({ createdAt: -1 });
    res.send(JSON.stringify(verses));
}));
exports.default = verseRouter;
//# sourceMappingURL=verses.js.map