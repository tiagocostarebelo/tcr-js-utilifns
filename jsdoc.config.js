export const source = {
    include: ["src"],
    exclude: ["node_modules"],
};
export const opts = {
    destination: "docs",
    recurse: true,
    verbose: true
};
export const plugins = ["plugins/markdown"];
export const templates = {
    cleverLinks: false,
    monospaceLinks: false,
    default: {
        outputSourceFiles: true,
    },
    path: 'ink-docstrap',
    theme: 'cerulean',
    systemName: 'JS Utilifns',
    footer: 'The Footer Of The Project',
    copyright: 'Copyright of The Project',
    navType: 'vertical',
    linenums: true,
    collapseSymbols: true,
    inverseNav: false,
    protocol: 'html://',
    dateFormat: 'MMMM Do YYYY, h:mm:ss a',
    includeDate: false,
};
