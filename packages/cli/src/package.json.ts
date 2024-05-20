import fs from "fs/promises";
import path from "path";
import os from "os";

interface CreatePackageJsonTemplate {
  appName: string;
  destination: string;
}

export const createPackageJsonTemplate = async ({
  appName,
  destination,
}: CreatePackageJsonTemplate) => {
  const packageJson: any = {
    name: appName,
    version: "0.1.0",
    private: true,
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
    },
    dependencies: {
      react: "19",
      "react-dom": "19",
      next: "14.2.3",
    },
    devDependencies: {
      typescript: "^5",
      "@types/node": "^20",
      "@types/react": "^18",
      "@types/react-dom": "^18",
      postcss: "^8",
      tailwindcss: "^3.4.1",
    },
  };

  await fs.writeFile(
    path.join(destination, "package.json"),
    JSON.stringify(packageJson, null, 2) + os.EOL
  );
};
