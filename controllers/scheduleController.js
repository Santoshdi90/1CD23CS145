const depotService = require("../services/depotService");
const vehicleService = require("../services/vehicleservice");
const schedulerService = require("../services/schedulerService");
const depots = await depotService.getDepots();
console.log("Depots:", depots);

const vehicles = await vehicleService.getVehicles();
console.log("Vehicles:", vehicles);

async function getSchedule(req, res) {
    try {
        // Fetch depot data
        const depots = await depotService.getDepots();
        console.log("Depots:", depots);

        // Fetch vehicle data
        const vehicles = await vehicleService.getVehicles();
        console.log("Vehicles:", vehicles);

        // Create schedule
        const result = schedulerService.createSchedule(
            depots,
            vehicles
        );

        return res.status(200).json(result);

    } catch (error) {
        console.error("Schedule Error:", error);

        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    getSchedule
};