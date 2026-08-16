# design-sync notes — Salamtak

- Monorepo: npm workspaces; install at repo root (`npm install`, lockfile = package-lock.json); build with `npm run build` (root) — builds `@salamtak/ui` via tsup AND generates `packages/ui/dist/styles.css` (a `cat` of `src/styles/tokens.css` + `components.css` in the build script). `cssEntry` must stay pointed at `dist/styles.css` — the package-root `styles.css` is an @import-only stub that fails `[CSS_IMPORT_MISSING]` if used.
- Converter invocation: `--entry ./packages/ui/dist/index.js --node-modules ./node_modules` (deps hoist to the repo root).
- Fonts: IBM Plex Sans Arabic woff2 subsets are committed in `packages/ui/fonts/`; wired via `extraFonts: ["src/styles/fonts.css"]`. No network fetch at build time.
- Playwright for the render check: this container's browser cache is `/opt/pw-browsers` with **chromium-1194**, which pins **playwright@1.56.0** — installed in `.ds-sync/`, not in the repo's lockfile. If the container's chromium build changes, re-match the playwright version (skill §4.1 step 3).
- `provider: SalamtakApp` is required — previews (and all real usage) need it for the Plex Arabic font stack, RTL direction, and paper ground. Without it, cards render browser-default LTR.
- `DataTable` uses `cardMode: column` (wide table).
- Preview prices/names are illustrative product data (consistent with the blueprint artifact) — safe to keep.
- Known render warns: none outstanding (19/19 clean as of the first full sync).

## Re-sync risks

- **Upload is pending authorization**: DesignSync cannot authenticate in this claude.ai/code session (`/design-login` needs an interactive terminal). The user must either use Claude Design's "Send to Claude Code Web" to seed the project, or run the sync from an interactive terminal after `/design-login`. Until then there is NO `projectId` pin and NO uploaded anchor — the next authorized run does the first upload (incremental path into the empty project) and pins `projectId` in config.json.
- The `report_validate` gate call was NOT made (requires the same authorization) — make it alongside the first upload; `.render-check.json` has the counts (total 19, bad 0, thin 0, variantsIdentical 0).
- Chromium/playwright version pin can drift with container image updates.
- The container node is v22 (`.nvmrc` = 22).
