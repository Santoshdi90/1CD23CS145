const maximizeImpact =
    require("../utils/knapsack");

function createSchedule(
    depots,
    vehicles
) {

    const mechanicHours =
        depots.depots[0]
            .MechanicHours;

    const maxImpact =
        maximizeImpact(
            vehicles.vehicles,
            mechanicHours
        );

    return {
        mechanicHours,
        maximumImpact:
            maxImpact
    };
}

module.exports = {
    createSchedule
};