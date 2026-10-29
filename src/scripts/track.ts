type Props = Record<string, string>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends a conversion event to whichever analytics provider is loaded; does nothing otherwise. */
export function track(event: string, props: Props = {}) {
  try {
    window.plausible?.(event, { props });
    window.gtag?.('event', event, props);
  } catch {
    // Analytics must never break the page.
  }
}
