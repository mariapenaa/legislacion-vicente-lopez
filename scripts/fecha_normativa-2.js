const XLSX = require('xlsx');
const sequelize = require('../config/database'); // Adjust path as needed
const initModels = require('../models/init-models'); // Adjust path as needed
const { Op, fn, col, literal } = require('sequelize');

// Initialize models
const models = initModels(sequelize);

// Destructure the Legislacion model from the initialized models
const { legislacion } = models;

const workbook = XLSX.readFile('../data/legislacion_dev.xlsx');
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


// Iterate over the data and update the database
const updateDatabase = async () => {
    for (const row of legislacionesData) {
      const { eidlegislacion, fecha_normativa } = row;
  
  
      // Check if fecha_creacion is a valid Date object
      let fecha_normativa_formatted = null;
      if (fecha_normativa instanceof Date && !isNaN(fecha_normativa.getTime())) {
        fecha_normativa_formatted = fecha_normativa;
      } else if (typeof fecha_normativa === 'number') {
        fecha_normativa_formatted = excelDateToJSDate(fecha_normativa);
      }
  
      // Log the values for debugging
      console.log(`Processing: ${eidlegislacion}`);
      console.log(`Fecha normativa: ${fecha_normativa_formatted}`);
  
      // Update the database
      const leg = await legislacion.findOne({
        where: sequelize.where(sequelize.fn('TRIM', sequelize.col('eidlegislacion')), eidlegislacion)
      });
      if (leg) {
        leg.fecha_normativa = fecha_normativa_formatted
        await leg.save();
      } else {
        console.log(`No record found for ${eidlegislacion}`);
      }
    }
  };
  
  updateDatabase().catch(err => {
    console.error('Error updating database:', err);
  });