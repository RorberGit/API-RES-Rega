"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.SistemaTipDocCalService = void 0;
var common_1 = require("@nestjs/common");
var data_source_1 = require("../../../../../../../src/data-source");
var sistema_tip_doc_cal_entity_1 = require("./entities/sistema-tip-doc-cal.entity");
var SistemaTipDocCalService = /** @class */ (function () {
    function SistemaTipDocCalService() {
        this.TipDocCalRepo = data_source_1.AppDataSource.getRepository(sistema_tip_doc_cal_entity_1.SistemaTipDocCal);
    }
    SistemaTipDocCalService.prototype.create = function (newrecord) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.TipDocCalRepo.save(newrecord)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SistemaTipDocCalService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var found;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.TipDocCalRepo.find()];
                    case 1:
                        found = _a.sent();
                        if (!found.length) {
                            throw new common_1.HttpException('NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
                        }
                        return [2 /*return*/, {
                                statuscode: common_1.HttpStatus.OK,
                                message: 'OK',
                                data: found
                            }];
                }
            });
        });
    };
    //Buscar un único registro en la tabla
    SistemaTipDocCalService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var found;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.TipDocCalRepo.findOne({
                            where: { Co_docu: id }
                        })];
                    case 1:
                        found = _a.sent();
                        if (found == null)
                            throw new common_1.HttpException('NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
                        return [2 /*return*/, {
                                statuscode: common_1.HttpStatus.OK,
                                message: 'OK',
                                data: found
                            }];
                }
            });
        });
    };
    SistemaTipDocCalService.prototype.editRecord = function (id, update) {
        return __awaiter(this, void 0, void 0, function () {
            var found, modified;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.TipDocCalRepo.findOneBy({ Co_docu: id })];
                    case 1:
                        found = _a.sent();
                        if (found == null)
                            throw new common_1.HttpException('NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
                        return [4 /*yield*/, this.TipDocCalRepo.update(id, update)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.TipDocCalRepo.findOne({
                                where: { Co_docu: id },
                                relations: {
                                    sistemareg: true
                                }
                            })];
                    case 3:
                        modified = _a.sent();
                        return [2 /*return*/, {
                                statuscode: common_1.HttpStatus.OK,
                                message: 'OK',
                                data: modified
                            }];
                }
            });
        });
    };
    SistemaTipDocCalService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var found;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.TipDocCalRepo.findOneBy({ Co_docu: id })];
                    case 1:
                        found = _b.sent();
                        if (found == null)
                            throw new common_1.HttpException('NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
                        _a = {
                            statuscode: common_1.HttpStatus.OK,
                            message: 'OK'
                        };
                        return [4 /*yield*/, this.TipDocCalRepo.remove(found)];
                    case 2: return [2 /*return*/, (_a.data = _b.sent(),
                            _a)];
                }
            });
        });
    };
    SistemaTipDocCalService = __decorate([
        (0, common_1.Injectable)()
    ], SistemaTipDocCalService);
    return SistemaTipDocCalService;
}());
exports.SistemaTipDocCalService = SistemaTipDocCalService;
