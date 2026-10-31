// Genera las capturas de las páginas de ejemplo que se muestran en la web
// (src/assets/ejemplos/*.webp). Repítelo cada vez que cambies un ejemplo.
//
// Uso, con el servidor corriendo (npm run dev):   npm run capturas
// Necesita Microsoft Edge o Google Chrome. Otra ruta: variable NAVEGADOR. Otro servidor: variable BASE.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

const BASE = process.env.BASE ?? 'http://localhost:4321';
const navegador = [
  process.env.NAVEGADOR,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find((ruta) => ruta && existsSync(ruta));
if (!navegador) throw new Error('No encontré Edge ni Chrome. Indica la ruta en la variable NAVEGADOR.');

const escritorio = ['barberia', 'cabanas', 'taller-mecanico', 'tienda-ropa', 'ferreteria'].map((slug) => ({
  ruta: `/demos/${slug}/`,
  archivo: slug,
  ancho: 1440,
  alto: 2000,
  escala: 1,
}));
const capturas = [...escritorio, { ruta: '/demos/cabanas/', archivo: 'cabanas-movil', ancho: 390, alto: 844, escala: 2 }];

const tmp = mkdtempSync(join(tmpdir(), 'capturas-'));

async function capturar(c) {
  const url = `${BASE}${c.ruta}?captura`;
  let destino = url;
  if (c.ancho < 800) {
    // El navegador sin ventana no baja de ~500 px de ancho: la versión de celular
    // se carga dentro de un iframe del ancho exacto.
    const marco = join(tmp, `${c.archivo}.html`);
    writeFileSync(
      marco,
      `<!doctype html><body style="margin:0"><iframe src="${url}" width="${c.ancho}" height="${c.alto}" style="border:0;display:block"></iframe></body>`,
    );
    destino = pathToFileURL(marco).href;
  }
  const png = join(tmp, `${c.archivo}.png`);
  execFileSync(
    navegador,
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      `--user-data-dir=${join(tmp, 'perfil')}`,
      `--window-size=${Math.max(c.ancho, 800)},${c.alto}`,
      `--force-device-scale-factor=${c.escala}`,
      '--virtual-time-budget=15000',
      `--screenshot=${png}`,
      destino,
    ],
    { stdio: 'ignore' },
  );
  const info = await sharp(png)
    .extract({ left: 0, top: 0, width: c.ancho * c.escala, height: c.alto * c.escala })
    .webp({ quality: 80 })
    .toFile(`src/assets/ejemplos/${c.archivo}.webp`);
  return info.size;
}

try {
  for (const c of capturas) {
    // Una captura de pocos KB es una página en blanco o sin fotos: se reintenta.
    let peso = await capturar(c);
    for (let intento = 1; peso < 60_000 && intento < 3; intento++) peso = await capturar(c);
    console.log(`${peso < 60_000 ? '⚠ revisar' : '✓'} ${c.archivo} (${Math.round(peso / 1000)} KB)`);
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
