"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chartTHI = chartTHI;
const auto_1 = __importDefault(require("chart.js/auto"));
const getWeatherInfo_1 = require("../data/getWeatherInfo");
async function chartTHI() {
    const daysTHI = await (0, getWeatherInfo_1.getWeatherInfo)();
    let data = [];
    for (const [date, obj] of Object.entries(daysTHI)) {
        data.push(obj);
    }
    let chartStatus = auto_1.default.getChart("chartTHI"); // <canvas> id
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    let grapharea = document.getElementById('chartTHI');
    let myChart = new auto_1.default(grapharea, {
        type: 'line',
        data: {
            labels: data.map(row => row.date.split("T")[0]),
            datasets: [
                {
                    label: 'THI',
                    data: data.map(row => row.THI)
                }
            ]
        }
    });
}
//# sourceMappingURL=chartTHI.js.map