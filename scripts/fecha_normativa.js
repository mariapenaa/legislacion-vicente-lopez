const XLSX = require('xlsx');
const sequelize = require('../config/database'); // Adjust path as needed
const initModels = require('../models/init-models'); // Adjust path as needed
const { Op, fn, col, literal } = require('sequelize');

// Initialize models
const models = initModels(sequelize);

// Destructure the Legislacion model from the initialized models
const { legislacion } = models;

const workbook = XLSX.readFile('../data/fechas_normativa.xlsx');
const sheet_name_list = workbook.SheetNames;
const legislacionesData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

function excelDateToJSDate(serial) {
    const utc_days = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400; // Seconds per day
    const date_info = new Date(utc_value * 1000);
    const fractional_day = serial - Math.floor(serial) + 0.0000001;
    const milliseconds = Math.round(fractional_day * 86400000);
    return new Date(date_info.getTime() + milliseconds);
}


function hasTrailingZeroes(num) {
    const strWithDecimals = num.toFixed(2)
    const originalStr = num.toString()
    const [integerPart, decimalPart] = originalStr.split('.');
    if(strWithDecimals === originalStr) return originalStr
    if(!decimalPart) return originalStr
    if(strWithDecimals !== originalStr) return strWithDecimals
}


// Iterate over the data and update the database
const updateDatabase = async () => {
    for (const row of legislacionesData) {
      const { tipo_documento, nroDocumento, fecha_creacion } = row;
  
      // Ensure nroDocumento is a string
      let nroDocumentoStr = hasTrailingZeroes(nroDocumento)
  
  
      // Change commas to dots in nroDocumento
      const formattedNroDocumento = nroDocumentoStr.replace(',', '.');
  
      // Create cnom_archivo
      const cnom_archivo = `${tipo_documento} ${formattedNroDocumento}`.trim(); // Ensure trailing spaces are removed
  
      // Check if fecha_creacion is a valid Date object
      let fecha_normativa = null;
      if (fecha_creacion instanceof Date && !isNaN(fecha_creacion.getTime())) {
        fecha_normativa = fecha_creacion;
      } else if (typeof fecha_creacion === 'number') {
        fecha_normativa = excelDateToJSDate(fecha_creacion);
      }
  
      // Log the values for debugging
      console.log(`Processing: ${cnom_archivo}`);
      console.log(`Fecha normativa: ${fecha_normativa}`);
  
      // Update the database
      const leg = await legislacion.findOne({
        where: sequelize.where(sequelize.fn('TRIM', sequelize.col('cnom_archivo')), cnom_archivo)
      });
      if (leg) {
        leg.fecha_normativa = fecha_normativa
        await leg.save();
      } else {
        console.log(`No record found for ${cnom_archivo}`);
      }
    }
  };
  
  updateDatabase().catch(err => {
    console.error('Error updating database:', err);
  });