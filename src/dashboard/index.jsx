import { TotalUsersGraph, TotalUsersFigure, LastUsedGraph } from "../components";

function Dashboard() {
    return (
        <div className="p-2">
            <div className="grid grid-cols-2 grid-rows-2 rounded-md border-2 border-teal-400 p-2 lg:grid-cols-4">
                <div className="col-span-2 lg:col-span-3 lg:row-span-2">
                    <TotalUsersGraph />
                </div>
                <TotalUsersFigure />
                <LastUsedGraph />
            </div>
        </div>
    );
}

export { Dashboard };
