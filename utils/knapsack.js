function maximizeImpact(
    vehicles,
    mechanicHours
) {

    const n = vehicles.length;

    const dp = Array(n + 1)
        .fill()
        .map(() =>
            Array(mechanicHours + 1)
                .fill(0)
        );

    for (let i = 1; i <= n; i++) {

        const duration =
            vehicles[i - 1].Duration;

        const impact =
            vehicles[i - 1].Impact;

        for (
            let j = 1;
            j <= mechanicHours;
            j++
        ) {

            if (duration <= j) {

                dp[i][j] = Math.max(
                    impact +
                        dp[i - 1][
                            j - duration
                        ],
                    dp[i - 1][j]
                );

            } else {

                dp[i][j] =
                    dp[i - 1][j];
            }
        }
    }

    return dp[n][mechanicHours];
}

module.exports =
    maximizeImpact;