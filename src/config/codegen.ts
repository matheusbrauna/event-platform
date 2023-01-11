export default {
  overwrite: true,
  schema:
    "https://api-sa-east-1.graphcms.com/v2/cl4o66mz30ql901z79q0m24pi/master",
  emitLegacyCommonJSImports: false,
  documents: ["./src/graphql/**/*.graphql"],
  generates: {
    "./src/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
  config: {
    reactApolloVersion: 3,
    withHooks: true,
    withHOC: false,
    withComponent: false,
  },
};
