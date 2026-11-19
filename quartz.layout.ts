import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import LinkFix from "./quartz/components/LinkFix"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: [
    Component.Head(),
    LinkFix(),
    // Script para SPA routing no GitHub Pages (404 redirect)
    {
      tag: "script",
      attributes: {},
      children: `
        (function() {
          // Ler caminho original salvo pelo 404.html
          var originalPath = localStorage.getItem('spa-original-path');
          if (originalPath) {
            localStorage.removeItem('spa-original-path');
            // Navegar para o caminho correto
            history.replaceState(null, '', originalPath);
            // Disparar evento de navegação para o router do Quartz
            window.dispatchEvent(new PopStateEvent('popstate'));
          }
        })();
      `,
    },
  ],
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
