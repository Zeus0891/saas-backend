"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_routes_1 = __importDefault(require("./routes/client.routes"));
const errorHandler_1 = require("./middlewares/errorHandler"); // 👈 Agrega esto
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/clients', client_routes_1.default);
// Error handling middleware (después de las rutas)
app.use(errorHandler_1.errorHandler);
// Root route
app.get('/', (_req, res) => {
    res.send('API is running...');
});
// Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
