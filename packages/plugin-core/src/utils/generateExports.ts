import { IExportData } from '../types';

function generateExports(exportList: IExportData[]) {
  const importStatements = [];
  const exportStatements = [];
  const extraExportStatements = [];
  exportList.forEach(data => {
    const { specifier, source, exportName, extraExport = false } = data;
    if (exportName && source) {
      const symbol = source.includes('types') ? ';' : ',';
      importStatements.push(`import ${specifier || exportName} from '${source}';`);
      const exportStr = `${exportName}${symbol}`;
      if (extraExport) {
        extraExportStatements.push(exportStr);
      } else {
        exportStatements.push(exportStr);
      }
    } else if (source) {
      importStatements.push(`export ${specifier || '*'} from '${source}';`);
    }
  });
  return {
    importStr: importStatements.join('\n'),
    exportStr: exportStatements.join('\n'),
    extraExportStr: extraExportStatements.join('\n')
  };
}

export default generateExports;
