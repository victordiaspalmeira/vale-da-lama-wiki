import { createElement } from "preact"

export default function LinkFix() {
  return createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
        /* Links sem background marrom, apenas cor de texto dourada */
        a,
        .internal-link,
        .external-link,
        .wikilink,
        .wiki-link,
        [class*="link"] {
          background: transparent !important;
          color: #e6c86d !important;
          text-decoration: underline !important;
        }

        a:hover,
        .internal-link:hover,
        .external-link:hover,
        .wikilink:hover,
        .wiki-link:hover {
          color: #f0d48a !important;
        }

        /* Texto principal com contraste máximo */
        body {
          color: #ffffff !important;
          background-color: #0a0907 !important;
        }

        h1, h2, h3, h4, h5, h6 {
          color: #ffffff !important;
        }

        p, span, div, li, td, th {
          color: #e8e0d0 !important;
        }

        /* Títulos e cabeçalhos */
        .page-title,
        .content-title,
        h1 {
          color: #e6c86d !important;
        }

        /* Navegação e sidebar */
        nav, .sidebar, .nav-link {
          background: #0a0907 !important;
          color: #e8e0d0 !important;
        }

        /* Cards e conteúdos */
        .content-container, .page-container, .folder-content {
          background: #0a0907 !important;
          color: #e8e0d0 !important;
        }
      `,
    },
  })
}