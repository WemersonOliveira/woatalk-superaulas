
import type { NextConfig } from "next";

// Caminho oficial das Super Aulas.
export const SUPER_AULAS_BASE_PATH = "/blacknovember/superaulas";

// Utiliza o caminho oficial quando não houver variável definida.
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? SUPER_AULAS_BASE_PATH;

// Valida o caminho para evitar divergências entre URLs.
if (
  basePath !== "" &&
  !/^\/[a-z0-9_-]+(?:\/[a-z0-9_-]+)*$/.test(basePath)
) {
  throw new Error(
    "NEXT_PUBLIC_BASE_PATH deve utilizar letras minúsculas, " +
      "começar com / e não terminar com /."
  );
}

const config: NextConfig = {
  basePath,

  // Mantém o mesmo prefixo disponível para o código cliente.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  poweredByHeader: false,
};

export default config;
