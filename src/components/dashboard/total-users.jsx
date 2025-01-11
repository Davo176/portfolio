import { useEffect, useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getAflFantasyContent } from "./data-functions";

function TotalUsersGraph(props) {
    const queryClient = useQueryClient();
    const dashboard = useQuery({ queryKey: ["dashboard_data"], queryFn: getAflFantasyContent });

    const [chartOptions, setChartOptions] = useState();

    useEffect(() => {
        if (dashboard.isSuccess) {
            let data = dashboard.data;
            let grouped = [];
            try {
                data.sort((a, b) => new Date(b.date) - new Date(a.date));
                let total_users = 1;
                let previous_date = undefined;
                for (let user of data) {
                    if (new Date(user.created_on).toDateString() === previous_date) {
                        grouped.at(-1).users += 1;
                        total_users += 1;
                    } else {
                        grouped.push({
                            users: total_users,
                            date: new Date(user.created_on).toDateString(),
                        });
                        total_users += 1;
                        previous_date = new Date(user.created_on).toDateString();
                    }
                }
            } catch (err) {
                console.log(err);
            }

            setChartOptions({
                title: {
                    text: "Total Users",
                },
                series: [
                    {
                        type: "line",
                        xKey: "date",
                        yKey: "users",
                        yName: "Users",
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

function TotalUsersFigure() {
    const queryClient = useQueryClient();
    const dashboard = useQuery({ queryKey: ["dashboard_data"], queryFn: getAflFantasyContent });

    const [totalUserCount, setTotalUserCount] = useState(0);

    useEffect(() => {
        if (dashboard.isSuccess) {
            let data = dashboard.data;

            setTotalUserCount(data.length);
        }
    }, [dashboard.isSuccess]);

    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4">
            <div className="">Total Users</div>
            <div className="text-7xl">{totalUserCount}</div>
        </div>
    );
}

function PayingUsersFigure() {
    const queryClient = useQueryClient();
    const dashboard = useQuery({ queryKey: ["dashboard_data"], queryFn: getAflFantasyContent });

    const [payingUserCount, setPayingUserCount] = useState(0);

    useEffect(() => {
        if (dashboard.isSuccess) {
            let data = dashboard.data;

            setPayingUserCount(data.filter((u) => u.has_paid).length);
        }
    }, [dashboard.isSuccess]);

    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4">
            <div className="">Paying Users</div>
            <div className="text-7xl">{payingUserCount}</div>
        </div>
    );
}

export { TotalUsersGraph, TotalUsersFigure, PayingUsersFigure };
