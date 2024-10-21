import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:1337/graphql",
  documents: "src/**/*.gql",
  config: {
    withHooks: true,
    skipTypename: true,
    immutableTypes: true,
    preResolveTypes: true,
  },
  generates: {
    "src/shared/api/models.gen.ts": {
      plugins: ["typescript"],
      config: {
        skipTypename: true,
      },
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".gen.ts",
        baseTypesPath: "shared/api/models.gen.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
    },
  },
};

export default config;
