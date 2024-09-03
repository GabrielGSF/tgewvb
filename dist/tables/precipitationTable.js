"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.precipitationTable = precipitationTable;
const getPrecipitation_1 = require("../data/getPrecipitation");
async function precipitationTable() {
    let data = [];
    const monthPrecipitation = await (0, getPrecipitation_1.getPrecipitation)();
    for (const [date, obj] of Object.entries(monthPrecipitation)) {
        data.push(obj);
    }
    //Pagination of sigle days table
    const rowsPerPage = 7;
    let currentPage = 1;
    function displayTable(page) {
        const table = document.getElementById("PrecipitationTable");
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const slicedData = data.slice(startIndex, endIndex);
        //Clear existing table rows
        table.innerHTML = `
            <thead>
                <tr>
                <th scope="col">Month</th>
                <th scope="col">Average Precipitation</th>
                </tr>
            </thead>`;
        //Add new rows to the table
        slicedData.forEach(item => {
            //@ts-expect-error
            const row = table.insertRow();
            const monthCell = row.insertCell(0);
            const precipitationCell = row.insertCell(1);
            monthCell.innerHTML = item.month;
            precipitationCell.innerHTML = item.sumPrecipitation.toFixed(2);
        });
        //Update pagination
        updatePagination(page);
    }
    function updatePagination(currentPage) {
        const pageCount = Math.ceil(data.length / rowsPerPage);
        const paginationContainer = document.getElementById("paginationPrecip");
        paginationContainer.innerHTML = "";
        for (let i = 1; i <= pageCount; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#PrecipitationTable';
            pageLink.innerText = `${i}`;
            pageLink.onclick = function () {
                displayTable(i);
            };
            if (i === currentPage) {
                pageLink.style.fontWeight = "bold";
            }
            paginationContainer.appendChild(pageLink);
            paginationContainer.appendChild(document.createTextNode(" "));
        }
    }
    displayTable(currentPage);
}
window.precipitationTable = precipitationTable;
//# sourceMappingURL=precipitationTable.js.map