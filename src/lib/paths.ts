/** GitHub Pages project path — keep in sync with next.config.mjs basePath. */
export const BASE_PATH = "/jimmys-barber-demo";

export function withBase(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}
