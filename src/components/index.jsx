import { Children } from "react";
import { TotalUsersGraph, TotalUsersFigure, PayingUsersFigure } from "./dashboard/total-users";
import { LastUsedGraph } from "./dashboard/last-used";

function PageHeader({ children }) {
    const element = Children.only(children);
    return <h1 className="text-xl font-bold">{element}</h1>;
}
function SectionHeader({ children }) {
    const element = Children.only(children);
    return <h2 className="pt-1 text-lg font-semibold">{element}</h2>;
}

export { PageHeader, SectionHeader, TotalUsersGraph, LastUsedGraph, TotalUsersFigure, PayingUsersFigure };
