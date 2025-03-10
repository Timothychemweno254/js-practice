function calculateNetSalary(basicSalary, benefits) {
    
    const grossSalary = basicSalary + benefits;

    let tax = 0;

    if (grossSalary <= 10000) {
        tax = 0;
    } else if (grossSalary <= 20000) {
        tax = 0.1 * (grossSalary - 10000);
    } else if (grossSalary <= 35000) {
        tax = 0.15 * (grossSalary - 20000) + 1000; 
    } else {
        tax = 0.2 * (grossSalary - 35000) + 4250; 
        }

    
    
        let nhif = 0;
    if (grossSalary > 20000) {
        nhif = 1000;
    } else {
        nhif = 500; 
    }

    
    const nssf = 0.06 * basicSalary;

    
    const netSalary = grossSalary - (tax + nhif + nssf);
    return {
        grossSalary: grossSalary.toFixed(2),
        tax: tax.toFixed(2),
        nhif: nhif.toFixed(2),
        nssf: nssf.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}


const args = process.argv.slice(2); 
const basicSalary = parseFloat(args[0]);
const benefits = parseFloat(args[1]);

if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
    console.log("Invalid input.");
} else {
    
    const salaryDetails = calculateNetSalary(basicSalary, benefits);

    
    console.log(`Gross Salary: Ksh ${salaryDetails.grossSalary}`);
    console.log(`Tax Deducted: Ksh ${salaryDetails.tax}`);
    console.log(`NHIF Deduction: Ksh ${salaryDetails.nhif}`);
    console.log(`NSSF Deduction: Ksh ${salaryDetails.nssf}`);
    console.log(`Net Salary: Ksh ${salaryDetails.netSalary}`);
}
