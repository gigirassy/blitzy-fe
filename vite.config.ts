import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	plugins: [solid()],
	base: "/",
	build: {
    	  outDir: "dist",  // Ensure this is the correct output directory
  	}
});
