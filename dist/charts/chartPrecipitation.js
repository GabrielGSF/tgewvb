"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chartPrecipitation = chartPrecipitation;
const auto_1 = __importDefault(require("chart.js/auto"));
const getPrecipitation_1 = require("../data/getPrecipitation");
async function chartPrecipitation() {
    const averagePrecipitation = await (0, getPrecipitation_1.getPrecipitation)();
    let data = [];
    for (const [date, obj] of Object.entries(averagePrecipitation)) {
        data.push(obj);
    }
    let chartStatus = auto_1.default.getChart("chartPrecipitation"); // <canvas> id
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    let grapharea = document.getElementById('chartPrecipitation');
    let myChart = new auto_1.default(grapharea, {
        type: 'line',
        data: {
            labels: data.map(row => row.month),
            datasets: [
                {
                    label: 'Precipitation',
                    data: data.map(row => row.sumPrecipitation)
                }
            ]
        }
    });
}
//# sourceMappingURL=chartPrecipitation.js.map