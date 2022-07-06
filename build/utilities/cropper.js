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
Object.defineProperty(exports, "__esModule", { value: true });
const sharp = require('sharp');
// using Sharp to crop the image
const imgCropper = (src, dist, reqWidth = 300, // default values
reqHeight = 300 // default values
) => __awaiter(void 0, void 0, void 0, function* () {
    yield sharp(src).resize(reqWidth, reqHeight).toFormat('jpeg').toFile(dist);
});
exports.default = imgCropper;