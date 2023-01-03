## CSS Modules not working in components

[`Header.module.css`](https://github.com/ChaosCantrip/nextjs-css-bug/blob/main/app/Header.module.css) is imported into [`Header.js`](https://github.com/ChaosCantrip/nextjs-css-bug/blob/main/app/Header.js), which is then imported and displayed in [`layout.js`](https://github.com/ChaosCantrip/nextjs-css-bug/blob/main/app/layout.js). The header component displays but does not apply the styles.
<br>
I added a second directory and page, [`working/page.js`](https://github.com/ChaosCantrip/nextjs-css-bug/blob/main/app/working/page.js), where I include `import styles from "./Header.module.css"` and the styles apply correctly, but only on that page.
<br>

Clone and run `next dev --turbo`, and you can see the styles apply in `/working`, but not on the home page, and they apply correctly if you run `next dev` without `turbopack`