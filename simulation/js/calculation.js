function checkYourResult() {
    let flag = true;
    const tables1 = document.querySelectorAll("table");

    const tables = ["tab1", "tab2", "tab3", "tab4"];
    let isValid = true;

    tables.forEach(tableId => {
        const inputs = document.querySelectorAll(`#${tableId} input`);
        inputs.forEach(input => {
            if (input.value === "") {
                isValid = false;
                return;
            }
        });
    });

    if (isValid) {
        tables1.forEach(table => {
            const inputs = table.querySelectorAll("input");
            inputs.forEach(input => {
                const value = parseFloat(input.value);
                const expectedValue = parseFloat(input.dataset.expected);
    
                if (value !== expectedValue) {
                    input.style.color = "red";
                    flag = false;
                }else{
                    input.style.color = "black";
                }
            });
        });
    
        if (flag) {
            for (let i = 0; i < 5; i++) {
                confetti();
            }
            document.querySelector(".result-table2").style.display = "none";
            document.querySelector(".result-table1").style.display = "none";
            alert("Congratulations! You have successfully completed the experiment.");
        } else {
            document.querySelector(".result-table1").style.display = "flex";
            document.querySelector(".result-table2").style.display = "flex";
        }
    } else {
        alert("Please fill in all input fields or enter valid values.");
    }

    
}



function exportToExcel() {
    var wb = XLSX.utils.book_new();

    /* Observation Table */
    var observationTable = document.querySelector('.observation-table-head');
    var observationSheetData = [];
    var observationRows = observationTable.querySelectorAll('tr');
    observationRows.forEach(function (row) {
        var rowData = [];
        row.querySelectorAll('th, td').forEach(function (cell) {
            if (cell.querySelector('input')) {
                rowData.push(cell.querySelector('input').value);
            } else {
                rowData.push(cell.textContent);
            }
        });
        observationSheetData.push(rowData);
    });
    var observationSheet = XLSX.utils.aoa_to_sheet(observationSheetData);
    XLSX.utils.book_append_sheet(wb, observationSheet, "Observation Table");

    /* Calculation Table */
    var calculationTable = document.querySelector('.calculation-table-head');
    var calculationSheetData = [];
    var calculationRows = calculationTable.querySelectorAll('tr');
    calculationRows.forEach(function (row) {
        var rowData = [];
        row.querySelectorAll('th, td').forEach(function (cell) {
            if (cell.querySelector('input')) {
                rowData.push(cell.querySelector('input').value);
            } else {
                rowData.push(cell.textContent);
            }
        });
        calculationSheetData.push(rowData);
    });
    var calculationSheet = XLSX.utils.aoa_to_sheet(calculationSheetData);
    XLSX.utils.book_append_sheet(wb, calculationSheet, "Calculation Table");

    /* Additional Table 1 */
    var additionalTable1 = document.querySelector('.observation-table-rpm');
    var additionalTable1Data = [];
    var additionalTable1Rows = additionalTable1.querySelectorAll('tr');
    additionalTable1Rows.forEach(function (row) {
        var rowData = [];
        row.querySelectorAll('th, td').forEach(function (cell) {
            if (cell.querySelector('input')) {
                rowData.push(cell.querySelector('input').value);
            } else {
                rowData.push(cell.textContent);
            }
        });
        additionalTable1Data.push(rowData);
    });
    var additionalTable1Sheet = XLSX.utils.aoa_to_sheet(additionalTable1Data);
    XLSX.utils.book_append_sheet(wb, additionalTable1Sheet, "Additional Table 1");

    /* Additional Table 2 */
    var additionalTable2 = document.querySelector('.calculation-table-rpm');
    var additionalTable2Data = [];
    var additionalTable2Rows = additionalTable2.querySelectorAll('tr');
    additionalTable2Rows.forEach(function (row) {
        var rowData = [];
        row.querySelectorAll('th, td').forEach(function (cell) {
            if (cell.querySelector('input')) {
                rowData.push(cell.querySelector('input').value);
            } else {
                rowData.push(cell.textContent);
            }
        });
        additionalTable2Data.push(rowData);
    });
    var additionalTable2Sheet = XLSX.utils.aoa_to_sheet(additionalTable2Data);
    XLSX.utils.book_append_sheet(wb, additionalTable2Sheet, "Additional Table 2");

    /* Save workbook to file */
    XLSX.writeFile(wb, "table_data.xlsx");
}


