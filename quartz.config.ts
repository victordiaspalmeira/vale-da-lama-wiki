import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Wiki do Vale da Lama",
    pageTitleSuffix: " | Pathfinder 2e Remaster",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "pt-BR",
    baseUrl: "victordiaspalmeira.github.io/vale-da-lama-wiki",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Georgia",
        body: "Verdana",
        code: "Courier New",
      },
      colors: {
        lightMode: {
          light: "#f4f1e6",
          lightgray: "#e3decb",
          gray: "#6e6a5e",
          darkgray: "#22201b",
          dark: "#0f0e0b",
          secondary: "#1d4e89",
          tertiary: "#2d5a27",
          highlight: "rgba(29, 78, 137, 0.12)",
          textHighlight: "#fff2a8",
        },
        darkMode: {
          light: "#121613",
          lightgray: "#1d241f",
          gray: "#8fa394",
          darkgray: "#e2e6df",
          dark: "#ffffff",
          secondary: "#7cc4ff",
          tertiary: "#d9ad3b",
          highlight: "rgba(124, 196, 255, 0.15)",
          textHighlight: "#3b3315",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
