async function getVehicles() {
    const response = await fetch(
        "http://4.224.186.213/evaluation-service/vehicles",
        {
            headers: {
                Authorization: `Bearer ${process.env.TOKEN}`
            }
        }
    );

    const data = await response.json();

    return data;
}

module.exports = {
    getVehicles
};