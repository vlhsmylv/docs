import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Valeh Ismayilov</span>,
  project: {
    link: "https://github.com/vlhsmylv/docs",
  },
  docsRepositoryBase: "https://github.com/vlhsmylv/docs",
  footer: {
    text: "Personal Documentation",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Valeh Ismayilov Docs",
    };
  },
};

export default config;
