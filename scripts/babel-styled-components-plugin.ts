import type { PluginObject, types } from "@babel/core";
import upstreamPlugin from "babel-plugin-styled-components";

// styled-components 2.3 still calls three deprecated Babel 7 JSX builder aliases.
// Keep compatibility local to this plugin; parsing/traversal/codegen use Babel 8.
export default function styledComponentsPlugin(api: { types: typeof types }): PluginObject {
  return upstreamPlugin.default({
    ...api,
    types: {
      ...api.types,
      identifier(name: string) {
        // The upstream CSS-prop visitor builds this temporary identifier before
        // recognizing an intrinsic custom tag and replacing it with a string.
        // Babel 8 rejects the hyphen earlier than Babel 7 did.
        if (/^[a-z][a-z\d]*-[a-z][a-z\d]*$/.test(name)) {
          return { type: "Identifier" as const, name };
        }
        return api.types.identifier(name);
      },
      jSXIdentifier: api.types.jsxIdentifier,
      jSXAttribute: api.types.jsxAttribute,
      jSXExpressionContainer: api.types.jsxExpressionContainer,
    },
  });
}
