import { c as createComponent, r as renderTemplate } from '../chunks/astro/server_CLv8Qikh.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const prerender = false;
async function GET({ redirect }) {
  return redirect("/diseno-de-laboratorio");
}
const $$Sistema7Zonas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/josemiguelsantisteban/Creative Cloud Files Personal Account josemsantisteban05@gmail.com 62242F086057B54A0A495FCC@AdobeID/ITC/Santre/Santre/src/pages/sistema-7-zonas.astro", void 0);

const $$file = "/Users/josemiguelsantisteban/Creative Cloud Files Personal Account josemsantisteban05@gmail.com 62242F086057B54A0A495FCC@AdobeID/ITC/Santre/Santre/src/pages/sistema-7-zonas.astro";
const $$url = "/sistema-7-zonas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  default: $$Sistema7Zonas,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
