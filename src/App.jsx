import { Link, Outlet, useLocation } from "react-router-dom";
import { NightingaleBubble } from "./nightingale";
import { Menu, Code, CircleDot, GitPullRequestArrow, PlayCircle, PanelsTopLeft, ShieldAlert, LineChart, Settings, LayoutDashboard } from "lucide-react";
import { useEffect, useState } from "react";

function Tab(props) {
    const [isSelected, setIsSelected] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsSelected(window.location.pathname === props.url);
    }, [location.pathname]);

    return (
        <Link to={props.url}>
            <div className={`flex items-center gap-2 pb-3  ${isSelected ? "border-b-2 border-b-orange-400 font-semibold " : "text-gray-600"}`}>
                <props.icon className="h-4 text-gray-600" />
                {props.name}
            </div>
        </Link>
    );
}

function App() {
    return (
        <>
            <div className="flex h-screen flex-col bg-white">
                <div className="flex w-full flex-col justify-between gap-2 bg-gray-100 px-4 pt-4">
                    <div className="flex flex-row items-center justify-between pb-2 text-center">
                        <div className="flex flex-row items-center justify-center gap-4 text-center">
                            <div className="rounded-md border border-gray-400 p-1">
                                <Menu className="text-gray-500" />
                            </div>
                            <img src="/github-logo.png" className="h-8 rounded-full" />
                            <div className="text-lg font-semibold">Will Davis / Portfolio</div>
                        </div>
                        {/* <div>broken?</div> */}
                        <img src="/profile-picture.jpg" className="h-8 rounded-full" />
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-4">
                            <Tab icon={Code} name={"Code"} selected={true} url={"/"} />
                            <Tab icon={LayoutDashboard} name={"Dashboard"} url={"/dashboard"} />
                        </div>
                        <div className="flex flex-row gap-4">
                            <Tab icon={Settings} name={"Portfolio Admin"} url={"/nightingale/content-admin"} />
                        </div>
                        {/* <Tab icon={GitPullRequestArrow} name={"Pull Requests"} />
                        <Tab icon={PlayCircle} name={"Actions"} />
                        <Tab icon={PanelsTopLeft} name={"Projects"} />
                        <Tab icon={ShieldAlert} name={"Security"} />
                        <Tab icon={LineChart} name={"Insights"} />
                        <Tab icon={Settings} name={"Settings"} /> */}
                    </div>
                </div>
                <Outlet />
            </div>
            <NightingaleBubble />
        </>
    );
}

export default App;
