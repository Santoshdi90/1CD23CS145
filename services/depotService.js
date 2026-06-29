async function getDepots() {
    const response = await fetch(
        "http://4.224.186.213/evaluation-service/depots",
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
    getDepots
};