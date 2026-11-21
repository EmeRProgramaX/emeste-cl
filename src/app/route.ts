import { promises as fs } from "node:fs";
import path from "node:path";

// Portada de emeste.cl: la web 3D (public/web3d/index.html).
// Se sirve en "/" y se le inyecta el seguimiento (Google Analytics y Meta Pixel) con las mismas
// variables de entorno que usa el resto del sitio, para no perder las mediciones.
export const dynamic = "force-static";

function trackingSnippet(): string {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  let out = "";

  if (gaId) {
    out += `<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');</script>
`;
  }

  if (metaPixelId) {
    out += `<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1" alt=""></noscript>
`;
  }

  return out;
}

export async function GET() {
  const file = path.join(process.cwd(), "public", "web3d", "index.html");
  const html = (await fs.readFile(file, "utf8")).replace("</head>", `${trackingSnippet()}</head>`);

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
