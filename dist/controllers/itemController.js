"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.getItemById = exports.getItems = exports.createItem = void 0;
const item_js_1 = require("../models/item.js");
const createItem = (req, res, next) => {
    try {
        const { name } = req.body;
        const newItem = { id: Date.now(), name };
        item_js_1.items.push(newItem);
        res.status(201).json(newItem);
    }
    catch (error) {
        next(error);
    }
};
exports.createItem = createItem;
const getItems = (req, res, next) => {
    try {
        res.json(item_js_1.items);
    }
    catch (error) {
        next(error);
    }
};
exports.getItems = getItems;
const getItemById = (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const item = item_js_1.items.find((i) => i.id === id);
        if (!item) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        res.json(item);
    }
    catch (error) {
        next(error);
    }
};
exports.getItemById = getItemById;
const updateItem = (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { name } = req.body;
        const itemIndex = item_js_1.items.findIndex((i) => i.id === id);
        if (itemIndex === -1) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        if (!name) {
            res.status(400).json({ message: 'Name is required' });
            return;
        }
        const item = item_js_1.items[itemIndex];
        if (item) {
            item.name = name;
            res.json(item);
        }
        else {
            res.status(400).json({ message: 'Item cannot be updated' });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.updateItem = updateItem;
const deleteItem = (req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const itemIndex = item_js_1.items.findIndex((i) => i.id === id);
        if (itemIndex === -1) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }
        const deletedItem = item_js_1.items.splice(itemIndex, 1)[0];
        res.json(deletedItem);
    }
    catch (error) {
        next(error);
    }
};
exports.deleteItem = deleteItem;
//# sourceMappingURL=itemController.js.map