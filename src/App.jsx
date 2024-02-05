import { Link, Outlet } from "react-router-dom";
import ProfilePicture from "/profile-picture.jpg";
import { NightingaleBubble } from "./nightingale";
import { Menu, Code, CircleDot, GitPullRequestArrow, PlayCircle, PanelsTopLeft, ShieldAlert, LineChart, Settings } from "lucide-react";

function Tab(props) {
    return (
        <div className="flex gap-2">
            <props.icon />
            {props.name}
        </div>
    );
}

function App() {
    return (
        <>
            <div className="flex flex-col h-screen bg-white">
                <div className="w-full justify-between p-4 flex flex-col bg-gray-100 gap-2">
                    <div className="flex flex-row justify-between items-center text-center">
                        <div className="flex flex-row items-center justify-center text-center gap-2">
                            <div className="p-1 rounded-md border border-gray-400">
                                <Menu />
                            </div>
                            <img src="/github-logo.png" className="h-8 rounded-full" />
                            <div>Will / Portfolio</div>
                        </div>
                        {/* <div>broken?</div> */}
                        <img src="/profile-picture.jpg" className="h-8 rounded-full" />
                    </div>
                    <div className="flex flex-row gap-4">
                        <Tab icon={Code} name={"Code"} />
                        <Tab icon={CircleDot} name={"Issues"} />
                        <Tab icon={GitPullRequestArrow} name={"Pull Requests"} />
                        <Tab icon={PlayCircle} name={"Actions"} />
                        <Tab icon={PanelsTopLeft} name={"Projects"} />
                        <Tab icon={ShieldAlert} name={"Security"} />
                        <Tab icon={LineChart} name={"Insights"} />
                        <Tab icon={Settings} name={"Settings"} />
                    </div>
                </div>
                <Outlet />
            </div>
            <NightingaleBubble />
        </>
    );
}

export default App;
