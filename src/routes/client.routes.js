"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = require("../controllers/client.controller");
const router = (0, express_1.Router)(); // 👈 AQUI el tipado correcto del Router
router.post('/', client_controller_1.createClient);
router.get('/', client_controller_1.getClients);
router.get('/:id', client_controller_1.getClientById);
router.put('/:id', client_controller_1.updateClient);
router.delete('/:id', client_controller_1.deleteClient);
exports.default = router;
