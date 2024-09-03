"use strict";
// import express, { Request, Response } from 'express';
// import puppeteer, {Browser} from 'puppeteer';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware para servir arquivos estáticos
app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
// Rota para gerar o PDF
app.get('/generate-pdf', async (req, res) => {
    let browser = null;
    try {
        const url = req.query.url;
        if (!url) {
            return res.status(400).send('URL é necessária');
        }
        browser = await puppeteer_1.default.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
        });
        await browser.close();
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="download.pdf"',
        });
        res.send(pdfBuffer);
    }
    catch (error) {
        console.error('Erro ao gerar PDF:', error);
        if (browser) {
            await browser.close();
        }
        res.status(500).send('Erro ao gerar PDF');
    }
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
//# sourceMappingURL=server.js.map