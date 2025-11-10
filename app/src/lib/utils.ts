import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Normalizar URLs dentro de un string de HTML para eliminar puertos duplicados.
 * @param html La cadena de HTML a normalizar.
 * @returns La cadena de HTML normalizada sin barra diagonal final.
 */
export const normalizeLocalURLs = (html: string): string => {
  const decoded = html
    .replaceAll(/&quot;/g, '"')
    .replaceAll(/&#x3A;/g, ":")
    .replaceAll(/&#039;/g, "'")
    .replaceAll(/&amp;/g, "&");

  const fixed = decoded.replace(
    /(https?:\/\/(?:localhost|127\.0\.0\.1):\d+):\d+(\/[\w\-./?=#%&]*)/g,
    "$1$2",
  );

  // 3️⃣ Devolver HTML corregido
  return fixed;
}