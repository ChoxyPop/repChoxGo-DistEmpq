import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';
import redirects from './redirects.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Función para limpiar texto y evitar que las comillas rompan el HTML
function cleanText(text) {
    if (!text) return "";
    return text.replace(/"/g, '&quot;').replace(/\n/g, ' ').trim();
}

async function getMetadata(url) {
    try {
        const { data } = await axios.get(url, { 
            timeout: 5000, 
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' } 
        });
        const $ = cheerio.load(data);
        return {
            title: $('title').text(),
            description: $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content')
        };
    } catch (e) {
        return null;
    }
}

async function generate() {
    const distPath = path.join(__dirname, 'dist');

    for (const [slug, url] of Object.entries(redirects)) {
        console.log(`🚀 Procesando: /${slug}`);
        
        // 1. Intentar obtener metadatos de la URL específica
        let meta = await getMetadata(url);

        // 2. ESTRATEGIA: Si falla, intentar obtener metadatos del dominio raíz
        if (!meta) {
            console.log(`⚠️ Falló scraping en link directo, intentando raíz de ${slug}...`);
            try {
                const rootUrl = new URL(url).origin;
                meta = await getMetadata(rootUrl);
            } catch (e) {
                meta = null;
            }
        }

        // 3. Valores finales (Si todo falla, usar genéricos de ChoxyPop)
        const finalTitle = cleanText(meta?.title || "ChoxyPop - Redireccionando");
        const finalDescription = cleanText(meta?.description || "Haz clic para continuar al contenido de ChoxyPop.");

        const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>${finalTitle}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <meta property="og:title" content="${finalTitle}">
    <meta property="og:description" content="${finalDescription}">
    <meta property="og:image" content="https://go.choxypop.com/og-image.png">
    <meta property="og:type" content="website">
    <meta http-equiv="refresh" content="0; url=${url}">
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; text-align: center; color: #444; background: #fafafa; }
        .loader { border: 4px solid #f3f3f3; border-top: 4px solid #ff69b4; border-radius: 50%; width: 30px; height: 30px; animation: spin 1s linear infinite; margin-bottom: 20px; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        a { color: #ff69b4; text-decoration: none; font-weight: bold; }
    </style>
    <script>window.location.replace("${url}");</script>
</head>
<body>
    <div class="loader"></div>
    <h2>Redireccionando...</h2>
    <p>Si no eres redirigido automáticamente, <a href="${url}">haz clic aquí</a>.</p>
</body>
</html>`;

        const targetDir = path.join(distPath, slug);
        if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.join(targetDir, 'index.html'), htmlContent);
    }
    console.log("✅ ¡Redirecciones generadas con éxito!");
}

generate();