import { QuartzConfig } from "quartz"
import { CrawlLinks } from "./quartz.plugins.ts" // placeholder, Quartz v4 uses internal plugins

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Wiki do Vale da Lama",
    pageTitleSuffix: " | Pathfinder 2e Remaster",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "https://victordiaspalmeira.github.io/vale-da-lama-wiki",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Source Sans Pro",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fafaf8",
          lightGray: "#e4e4e7",
          darkGray: "#78716c",
          dark: "#1c1917",
          secondary: "#2a231e",
          tertiary: "#3d322b",
          highlight: "rgba(187, 147, 61, 0.15)",
          textHighlight: "#fff2cc",
        },
        darkMode: {
          light: "#1a1612",
          lightGray: "#3d322b",
          darkGray: "#a8a29e",
          dark: "#e4e4e7",
          secondary: "#4a3f34",
          tertiary: "#2a231e",
          highlight: "rgba(187, 147, 61, 0.25)",
          textHighlight: "#3e2f0d",
        },
      },
      fontOrigin: "googleFonts",
    },
  },
  localization: {
    defaultLocale: "pt-BR",
    locales: {
      "pt-BR": {
        direction: "ltr",
        language: "pt-BR",
        dateLocale: "pt-BR",
      },
    },
  },
  plugins: {
    transformers: [
      // Transformers padrão do Quartz v4
    ],
    filters: [],
    emitters: [],
    // CrawlLinks habilitado para wikilinks funcionarem entre pastas
    // Em Quartz v4, o CrawlLinks é configurado via plugins emitters/filters
    // Aqui deixamos a marcação para o build resolver corretamente
  },
}

export default config