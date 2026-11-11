import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { articles } from '../../data/content';

/**
 * Sharing images (Open Graph, 1200×630) for every article, service, project and country page,
 * generated at build time from the page's own title, so new content gets one automatically.
 */
type Card = { eyebrow: string; title: string };

export const getStaticPaths: GetStaticPaths = async () => {
  const cards: { slug: string; card: Card }[] = [];
  for (const a of await articles()) cards.push({ slug: `insights/${a.id}`, card: { eyebrow: a.data.topic, title: a.data.title } });
  for (const s of await getCollection('services')) cards.push({ slug: `services/${s.id}`, card: { eyebrow: 'Service', title: s.data.title } });
  for (const p of await getCollection('projects'))
    cards.push({ slug: `projects/${p.id}`, card: { eyebrow: p.data.ownershipLabel, title: p.data.title } });
  for (const m of await getCollection('markets')) cards.push({ slug: m.id, card: { eyebrow: m.data.country, title: m.data.title } });
  return cards.map(({ slug, card }) => ({ params: { slug }, props: card }));
};

const font = (weight: number) => readFileSync(join(process.cwd(), `node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`));
const fonts = [
  { name: 'Inter', data: font(400), weight: 400 as const, style: 'normal' as const },
  { name: 'Inter', data: font(700), weight: 700 as const, style: 'normal' as const },
];

// Minimal element helper, so no JSX runtime is needed.
const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const { eyebrow, title } = props as Card;
  const size = title.length > 70 ? 54 : title.length > 45 ? 62 : 70;
  const tree = el(
    'div',
    {
      width: 1200,
      height: 630,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '72px 88px',
      backgroundColor: '#0b1b33',
      backgroundImage: 'radial-gradient(circle at 92% 8%, rgba(13,122,116,0.55), rgba(11,27,51,0) 45%)',
      fontFamily: 'Inter',
    },
    [
      el('div', { display: 'flex', flexDirection: 'column', width: 1024 }, [
        el('div', { display: 'flex', color: '#5eead4', fontSize: 26, fontWeight: 700, letterSpacing: 3 }, eyebrow.toUpperCase()),
        el(
          'div',
          { display: 'flex', width: 1024, color: '#ffffff', fontSize: size, fontWeight: 700, lineHeight: 1.12, marginTop: 28, letterSpacing: -1.5 },
          title,
        ),
      ]),
      el('div', { display: 'flex', alignItems: 'center', width: 1024 }, [
        el(
          'div',
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 64,
            height: 64,
            borderRadius: 14,
            backgroundColor: '#0d7a74',
            color: '#ffffff',
            fontSize: 26,
            fontWeight: 700,
          },
          'AP',
        ),
        el('div', { display: 'flex', flexDirection: 'column', marginLeft: 22 }, [
          el('div', { display: 'flex', color: '#ffffff', fontSize: 28, fontWeight: 700 }, 'Antony Pratap'),
          el('div', { display: 'flex', color: '#9fb0c6', fontSize: 22, marginTop: 4 }, 'Integration, automation and software  |  antonypratap.com'),
        ]),
      ]),
    ],
  );
  // satori accepts plain element objects; its types expect React nodes.
  const svg = await satori(tree as unknown as Parameters<typeof satori>[0], { width: 1200, height: 630, fonts });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
