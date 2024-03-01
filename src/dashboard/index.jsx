import { TotalUsersGraph, TotalUsersFigure, LastUsedGraph } from "../components";

function Dashboard() {
    return (
        <div className="p-2">
            <div className="grid grid-cols-4 grid-rows-2 rounded-md border-2 border-teal-400 p-2">
                <div className="col-span-3 row-span-2">
                    <TotalUsersGraph />
                </div>
                <TotalUsersFigure />
                <LastUsedGraph />
            </div>
        </div>
    );
}

export { Dashboard };
