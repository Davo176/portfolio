import { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getAflFantasyContent } from "./data-functions";

function LastUsedGraph(props) {
    const queryClient = useQueryClient();
    const dashboard = useQuery({ queryKey: ["dashboard_data"], queryFn: getAflFantasyContent });

    const [chartOptions, setChartOptions] = useState();

    useEffect(() => {
        if (dashboard.isSuccess) {
            let data = dashboard.data;
            let grouped = [];
            try {
                let recently_used_users = data.filter((user) => {
                    let date = user.last_used;
                    if (!date) {
                        return false;
                    }
                    date = new Date(date);
                    let today = new Date();
                    let cutoffDate = new Date(today).setDate(today.getDate() - 60);

                    return date > cutoffDate;
                });
                grouped = [
                    { name: "Yes", amount: recently_used_users.length },
                    { name: "No", amount: data.length - recently_used_users.length },
                ];
            } catch (err) {
                console.log(err);
            }

            setChartOptions({
                title: {
                    text: "Used Last 60 days",
                },
                series: [
                    {
                        fills: ["#70C247", "#FB8500"],
                        type: "pie",
                        angleKey: "amount",
                        legendItemKey: "name",
                    },
                ],
                data: grouped,
            });
        }
    }, [dashboard.isSuccess]);

    if (!dashboard.isSuccess || !chartOptions) {
        return <div>Loading...</div>;
    }

    return <AgChartsReact options={chartOptions} />;
}

export { LastUsedGraph };
