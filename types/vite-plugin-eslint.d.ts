/* vite-env.d.ts */
/// <reference types="vite/client" />
declare module "vite-plugin-eslint" {
  import { Plugin } from "vite";
  interface Options {
    include?: string[];
    exclude?: string[];
    lintOnStart?: boolean;
  }
  export default function eslintPlugin(options?: Options): Plugin;
}
