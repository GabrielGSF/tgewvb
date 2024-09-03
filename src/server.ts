// import express, { Request, Response } from 'express';
// import puppeteer, {Browser} from 'puppeteer';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

import express, { Request, Response } from 'express';
import path from 'path';
import puppeteer, {Browser} from 'puppeteer';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

// Rota para gerar o PDF
app.get('/generate-pdf', async (req: Request, res: Response) => {
    let browser: Browser | null = null;
    try {
        const url = req.query.url as string;

        if (!url) {
            return res.status(400).send('URL é necessária');
        }

        browser = await puppeteer.launch({
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

    } catch (error) {
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
