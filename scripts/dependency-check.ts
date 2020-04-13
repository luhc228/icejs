import * as execa from 'execa'
import { join } from 'path';
import getPackages from './fn/getPackages';

const chalk = require('chalk');

(async () => {
  const { packageDirs } = await getPackages();
  packageDirs.forEach((pkgDir) => {
    const pkgContent = require(join(pkgDir, 'package.json'))
    const { name } = pkgContent;
    execa.commandSync(`dependency-check ${pkgDir} --missing`, {
      cwd: pkgDir,
      stdio: 'inherit'
    });
  });
})().catch((e) => {
  console.log(chalk.red(`\n ⚠️  ⚠️  ⚠️  依赖检查失败\n\n`), e)
  process.exit(128)
});
