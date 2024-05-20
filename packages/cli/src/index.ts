#!/usr/bin/env node

import { input } from "@inquirer/prompts";
import { createPackageJsonTemplate } from "./package.json";
import path from "path";
import fs from "fs/promises";

const install = async () => {
  console.log("Ready to ship your next app? Let's get started! 📦");
  const appName = await input({ message: "App name?" });
  const currentDir = process.cwd();
  const destination = path.join(currentDir, appName);
  await fs.mkdir(destination);
  createPackageJsonTemplate({ appName, destination });
};

install()
  .then()
  .catch(async (reason) => {
    console.log();
    console.log("Aborting installation.");
    // if (reason.command) {
    //   console.log(`  ${cyan(reason.command)} has failed.`)
    // } else {
    //   console.log(
    //     red('Unexpected error. Please report it as a bug:') + '\n',
    //     reason
    //   )
    // }
    // console.log()

    // await notifyUpdate()

    process.exit(1);
  });
