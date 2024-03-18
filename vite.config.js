// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: true,
  },
});

// import viteTsconfigPaths from "vite-tsconfig-paths";

// export default defineConfig({
//   // depending on your application, base can also be "/"
//   base: "",
//   plugins: [react(), viteTsconfigPaths()],
//   server: {
//     // this ensures that the browser opens upon server start
//     open: true,
//     // this sets a default port to 3000
//     port: 3000,
//   },
// });
// import { defineConfig } from "vite";
// import reactRefresh from "@vitejs/plugin-react";
// import svgrPlugin from "vite-plugin-svgr";

// // https://vitejs.dev/config/
// export default defineConfig({
//   // This changes the out put dir from dist to build
//   // comment this out if that isn't relevant for your project
//   build: {
//     outDir: "build",
//   },
//   plugins: [
//     reactRefresh(),
//     svgrPlugin({
//       svgrOptions: {
//         icon: true,
//         // ...svgr options (https://react-svgr.com/docs/options/)
//       },
//     }),
//   ],
// });
