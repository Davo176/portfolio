import { Link, Outlet } from "react-router-dom";
import ProfilePicture from "/profile-picture.jpg";
import { NightingaleBubble } from "./nightingale";
import { Menu, Code, CircleDot, GitPullRequestArrow, PlayCircle, PanelsTopLeft, ShieldAlert, LineChart, Settings, LayoutDashboard } from "lucide-react";

function Tab(props) {
    return (
        <div className={`flex items-center gap-2 pb-3  ${props.selected ? "border-b-2 border-b-orange-400 font-semibold " : "text-gray-600"}`}>
            <props.icon className="h-4 text-gray-600" />
            {props.name}
        </div>
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
                    <div className="flex flex-row gap-4">
                        <Tab icon={Code} name={"Code"} selected={true} />
                        <Tab icon={LayoutDashboard} name={"Dashboard"} />
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
