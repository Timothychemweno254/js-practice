function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    
    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const excessSpeed = speed - speedLimit;

        const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

                if (demeritPoints > maxDemeritPoints) {
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}


const args = process.argv.slice(2); 
const speed = parseFloat(args[0]);

if (isNaN(speed) || speed < 0) {
    console.log("Invalid input.");
} else {
    
    const result = calculateDemeritPoints(speed);
    console.log(result);
}