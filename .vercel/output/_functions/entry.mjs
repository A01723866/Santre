import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DO0ZxY9R.mjs';
import { manifest } from './manifest_COuXAqKl.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog-tecnico.astro.mjs');
const _page2 = () => import('./pages/campanas-extraccion.astro.mjs');
const _page3 = () => import('./pages/centro-descargas/catalogo-completo.astro.mjs');
const _page4 = () => import('./pages/cubiertas-laboratorio.astro.mjs');
const _page5 = () => import('./pages/diseno-de-laboratorio.astro.mjs');
const _page6 = () => import('./pages/gabinetes-laboratorio.astro.mjs');
const _page7 = () => import('./pages/garantia-adn-santre.astro.mjs');
const _page8 = () => import('./pages/laboratorio-para-farmaceutica.astro.mjs');
const _page9 = () => import('./pages/laboratorio-para-industria-alimentaria.astro.mjs');
const _page10 = () => import('./pages/laboratorio-por-sector.astro.mjs');
const _page11 = () => import('./pages/laboratorios-biotecnologia-biomedicina.astro.mjs');
const _page12 = () => import('./pages/laboratorios-centros-investigacion.astro.mjs');
const _page13 = () => import('./pages/laboratorios-control-de-calidad.astro.mjs');
const _page14 = () => import('./pages/laboratorios-educacion-e-investigacion.astro.mjs');
const _page15 = () => import('./pages/laboratorios-hospitalarios-y-clinicos.astro.mjs');
const _page16 = () => import('./pages/laboratorios-industria-minera.astro.mjs');
const _page17 = () => import('./pages/laboratorios-profesionales.astro.mjs');
const _page18 = () => import('./pages/laboratorios-santre.astro.mjs');
const _page19 = () => import('./pages/laboratorios-sector-gobierno.astro.mjs');
const _page20 = () => import('./pages/mesas-para-laboratorio.astro.mjs');
const _page21 = () => import('./pages/mobiliario-para-laboratorio-por-sector.astro.mjs');
const _page22 = () => import('./pages/nuestros-clientes.astro.mjs');
const _page23 = () => import('./pages/sistema-7-zonas.astro.mjs');
const _page24 = () => import('./pages/sistema-de-diseno-laboratorio-7-zonas.astro.mjs');
const _page25 = () => import('./pages/sistemas-almacenamiento.astro.mjs');
const _page26 = () => import('./pages/tarjas-accesorios-laboratorio.astro.mjs');
const _page27 = () => import('./pages/tecnologia-laboratorios.astro.mjs');
const _page28 = () => import('./pages/zona-1-trabajo-general.astro.mjs');
const _page29 = () => import('./pages/zona-2-almacenaje-elevado.astro.mjs');
const _page30 = () => import('./pages/zona-3-reactivos.astro.mjs');
const _page31 = () => import('./pages/zona-4-pesaje.astro.mjs');
const _page32 = () => import('./pages/zona-5-manipulacion-segura.astro.mjs');
const _page33 = () => import('./pages/zona-6-seguridad-y-emergencias.astro.mjs');
const _page34 = () => import('./pages/zona-7-lavado.astro.mjs');
const _page35 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog-tecnico.astro", _page1],
    ["src/pages/campanas-extraccion.astro", _page2],
    ["src/pages/centro-descargas/catalogo-completo.astro", _page3],
    ["src/pages/cubiertas-laboratorio.astro", _page4],
    ["src/pages/diseno-de-laboratorio.astro", _page5],
    ["src/pages/gabinetes-laboratorio.astro", _page6],
    ["src/pages/garantia-adn-santre.astro", _page7],
    ["src/pages/laboratorio-para-farmaceutica.astro", _page8],
    ["src/pages/laboratorio-para-industria-alimentaria.astro", _page9],
    ["src/pages/laboratorio-por-sector.astro", _page10],
    ["src/pages/laboratorios-biotecnologia-biomedicina.astro", _page11],
    ["src/pages/laboratorios-centros-investigacion.astro", _page12],
    ["src/pages/laboratorios-control-de-calidad.astro", _page13],
    ["src/pages/laboratorios-educacion-e-investigacion.astro", _page14],
    ["src/pages/laboratorios-hospitalarios-y-clinicos.astro", _page15],
    ["src/pages/laboratorios-industria-minera.astro", _page16],
    ["src/pages/laboratorios-profesionales.astro", _page17],
    ["src/pages/laboratorios-santre.astro", _page18],
    ["src/pages/laboratorios-sector-gobierno.astro", _page19],
    ["src/pages/mesas-para-laboratorio.astro", _page20],
    ["src/pages/mobiliario-para-laboratorio-por-sector.astro", _page21],
    ["src/pages/nuestros-clientes.astro", _page22],
    ["src/pages/sistema-7-zonas.astro", _page23],
    ["src/pages/sistema-de-diseno-laboratorio-7-zonas.astro", _page24],
    ["src/pages/sistemas-almacenamiento.astro", _page25],
    ["src/pages/tarjas-accesorios-laboratorio.astro", _page26],
    ["src/pages/tecnologia-laboratorios.astro", _page27],
    ["src/pages/zona-1-trabajo-general.astro", _page28],
    ["src/pages/zona-2-almacenaje-elevado.astro", _page29],
    ["src/pages/zona-3-reactivos.astro", _page30],
    ["src/pages/zona-4-pesaje.astro", _page31],
    ["src/pages/zona-5-manipulacion-segura.astro", _page32],
    ["src/pages/zona-6-seguridad-y-emergencias.astro", _page33],
    ["src/pages/zona-7-lavado.astro", _page34],
    ["src/pages/index.astro", _page35]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "80289767-4308-43a3-a68d-6eca72659884",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
