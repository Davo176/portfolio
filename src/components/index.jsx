import { Children } from "react";
function PageHeader({ children }) {
    const element = Children.only(children);
    return <h1 className="text-xl font-bold">{element}</h1>;
}
function SectionHeader({ children }) {
    const element = Children.only(children);
    return <h2 className="pt-1 text-lg font-semibold">{element}</h2>;
}

export { PageHeader, SectionHeader };
