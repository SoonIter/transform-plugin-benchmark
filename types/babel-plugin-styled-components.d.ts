declare module "babel-plugin-styled-components" {
  import type { PluginObject, types } from "@babel/core";

  const plugin: { default: (api: { types: typeof types & Record<string, unknown> }) => PluginObject };
  export default plugin;
}
