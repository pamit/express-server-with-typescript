"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemController_js_1 = require("../controllers/itemController.js");
const router = (0, express_1.Router)();
router.get('/', itemController_js_1.getItems);
router.get('/:id', itemController_js_1.getItemById);
router.post('/', itemController_js_1.createItem);
router.put('/:id', itemController_js_1.updateItem);
router.delete('/:id', itemController_js_1.deleteItem);
exports.default = router;
//# sourceMappingURL=itemRoutes.js.map