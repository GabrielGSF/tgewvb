"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countTHIDays_1 = require("./utils/countTHIDays");
const chartTHI_1 = require("./charts/chartTHI");
const chartPrecipitation_1 = require("./charts/chartPrecipitation");
const thiTable_1 = require("./tables/thiTable");
const precipitationTable_1 = require("./tables/precipitationTable");
const auto_1 = __importDefault(require("chart.js/auto"));
require("./style.css");
const dataPrecipitation = [
    { month: 0, averagePrecipitation: 0 },
    { month: 0, averagePrecipitation: 0 },
    { month: 0, averagePrecipitation: 0 },
    { month: 0, averagePrecipitation: 0 },
    { month: 0, averagePrecipitation: 0 },
    { month: 0, averagePrecipitation: 0 },
    { month: 0, averagePrecipitation: 0 },
];
let graphareaPrecipitation = document.getElementById('chartPrecipitation');
let chartPrecipitationBase = new auto_1.default(graphareaPrecipitation, {
    type: 'line',
    data: {
        labels: dataPrecipitation.map(row => row.month),
        datasets: [
            {
                label: 'Precipitation',
                data: dataPrecipitation.map(row => row.averagePrecipitation)
            }
        ]
    }
});
const dataTHI = [
    { month: 0, averagePrecipitation: 0 },
    { month: 0, averagePrecipitation: 0 },
    { month: 0, averagePrecipitation: 0 },
    { month: 0, averagePrecipitation: 0 },
    { month: 0, averagePrecipitation: 0 },
    { month: 0, averagePrecipitation: 0 },
    { month: 0, averagePrecipitation: 0 },
];
let graphareaTHI = document.getElementById('chartTHI');
let chartTHIBase = new auto_1.default(graphareaTHI, {
    type: 'line',
    data: {
        labels: dataTHI.map(row => row.month),
        datasets: [
            {
                label: 'THI',
                data: dataTHI.map(row => row.averagePrecipitation)
            }
        ]
    }
});
async function showCalcTHI() {
    const values = await (0, countTHIDays_1.countTHIDays)();
    const values2 = await (0, countTHIDays_1.countTHIDays2)();
    //Table Stress data Non-Thermotolerant Taurine Breeds
    document.querySelector('#noStress').innerHTML = `${values.noStress}`;
    document.querySelector('#lightHeat').innerHTML = `${values.lightHeat}`;
    document.querySelector('#moderateHeat').innerHTML = `${values.moderateHeat}`;
    document.querySelector('#heavyHeat').innerHTML = `${values.heavyHeat}`;
    document.querySelector('#severeHeat').innerHTML = `${values.severeHeat}`;
    document.querySelector('#deadlyHeat').innerHTML = `${values.deadlyHeat}`;
    (0, thiTable_1.thiTable)();
    (0, chartTHI_1.chartTHI)();
    //Table Stress data Thermotolerant Taurine Breeds
    document.querySelector('#noStress2').innerHTML = `${values2.noStress}`;
    document.querySelector('#lightHeat2').innerHTML = `${values2.lightHeat}`;
    document.querySelector('#moderateHeat2').innerHTML = `${values2.moderateHeat}`;
    document.querySelector('#heavyHeat2').innerHTML = `${values2.heavyHeat}`;
    document.querySelector('#severeHeat2').innerHTML = `${values2.severeHeat}`;
    // Precipitation Chart / Table
    (0, precipitationTable_1.precipitationTable)();
    (0, chartPrecipitation_1.chartPrecipitation)();
}
window.showCalcTHI = showCalcTHI;
//# sourceMappingURL=app.js.map