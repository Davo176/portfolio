import {
    BookOpen,
    Briefcase,
    ChevronDown,
    Clock,
    Eye,
    Folder,
    GitBranch,
    GitFork,
    Github,
    Linkedin,
    Mail,
    Pencil,
    Phone,
    Pin,
    Plus,
    Settings,
    Tag,
    User,
} from "lucide-react";
import { AflFantasyExtender, Nightingale, BlockModel, BlockyCode, URLShortner, FyiSoftware, WillDavis } from "./projects";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
    let projects = [
        { id: 8, name: "About Me", message: "A brief message about me", time: "Now", type: "personal", component: WillDavis },
        { id: 7, name: "FYI Software", message: "Junior Engineer", time: "March 2021 - December 2023", type: "work", component: FyiSoftware },
        { id: 6, name: "FYI Software", message: "Software Engineer", time: "December 2023 - Now", type: "work", component: FyiSoftware },
        { id: 1, name: "url-shortner", message: "An endpoint that shortens urls", time: "1 week ago", type: "project", component: URLShortner },
        { id: 2, name: "nightingale", message: "AI customer support agent", time: "2 months ago", type: "project", component: Nightingale },
        { id: 3, name: "blocky-code", message: "Learn-to-code game for children", time: "3 years ago", type: "project", component: BlockyCode },
        {
            id: 4,
            name: "afl-fantasy-extender",
            message: "Chrome extension for improving aflfantasy website",
            time: "1 week ago",
            type: "project",
            component: AflFantasyExtender,
        },
        {
            id: 5,
            name: "block-model-compression",
            message: "Efficient stream processor for compressing to large cuboids",
            time: "1 week ago",
            type: "project",
            component: BlockModel,
        },
    ];
    const [selected, setSelected] = useState(projects[0]);
    const [hasClicked, setHasClicked] = useState(false);
    return (
        <>
            <div className="flex w-full flex-col items-center justify-center">
                <div className="w-3/5 pt-3">
                    <div className="flex flex-row items-center justify-between py-4 ">
                        <div className="flex flex-row items-center gap-3">
                            <img src="/profile-picture.jpg" className="h-8 rounded-full" />
                            <h2 className="text-lg  font-semibold">Portfolio</h2>
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <button className="flex flex-row items-center gap-1 rounded-md bg-gray-100 p-2 text-sm font-semibold">
                                <Pin className="h-4" />
                                Pin
                            </button>
                            <button className="flex flex-row items-center gap-1 rounded-md bg-gray-100 p-2 text-sm font-semibold">
                                <Eye className="h-4" />
                                Watch
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row gap-8 border-t-2 pt-2">
                        <div className="flex w-5/6 flex-col gap-6">
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center gap-2 pt-4">
                                    <button className="flex flex-row items-center gap-1 rounded-md bg-gray-100 p-2 text-sm font-semibold">
                                        <GitBranch className="h-4" />
                                        main
                                        <ChevronDown className="h-4" />
                                    </button>
                                    <div className="flex items-center">
                                        <GitBranch className="h-4" /> 0 Branches
                                    </div>
                                    <div className="flex items-center">
                                        <Tag className="h-4" /> 0 Tags
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <button className="rounded-md bg-gray-100 p-2">
                                        <Plus className="h-4" />
                                    </button>
                                    <button className="flex flex-row items-center gap-1 rounded-md bg-green-700 p-2 text-sm font-semibold text-white">
                                        <Mail className="h-4" />
                                        Contact
                                        <ChevronDown className="h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col rounded-md border border-gray-100">
                                <div className="flex flex-row items-center justify-between bg-gray-100 p-2">
                                    <div className="flex flex-row items-center gap-3">
                                        <img src="/profile-picture.jpg" className="h-8 rounded-full" />
                                        <div className="font-semibold">Davo176</div>
                                        <div className="text-sm  font-light">Start Portfolio</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-3">
                                        <div className="text-sm font-light">a731acb</div>
                                        <div className="text-sm font-light">2 weeks ago</div>
                                        <div className="flex flex-row items-center gap-1">
                                            <Clock className="h-4 text-sm font-light" />
                                            <div className="font-semibold">13 Commits</div>
                                        </div>
                                    </div>
                                </div>
                                {projects.map((project) => {
                                    return (
                                        <Project
                                            project={project}
                                            key={project.id}
                                            selected={selected?.id === project.id}
                                            setSelected={setSelected}
                                            hasClicked={hasClicked}
                                            setHasClicked={setHasClicked}
                                        />
                                    );
                                })}
                            </div>
                            <div className="mb-16 flex flex-col rounded-md border border-gray-100">
                                <div className="flex flex-row items-center justify-between border border-gray-100 px-2">
                                    <div className="flex flex-row items-center gap-2 border-b-2 border-b-orange-400 py-3">
                                        <BookOpen className="h-4" />
                                        <div className="font-semibold">README</div>
                                    </div>
                                    <Pencil className="h-4" />
                                </div>
                                <div className=" p-4">
                                    {selected ?
                                        <selected.component />
                                    :   <div>my readme</div>}
                                </div>
                            </div>
                        </div>
                        <div className="w-1/5">
                            <div className="flex flex-row items-center justify-between py-2">
                                <div className="font-medium">About</div>
                                <Settings className="h-4" />
                            </div>
                            <div>I am Will Davis</div>
                            <div className="flex flex-col gap-2 py-4 text-sm font-light text-gray-400">
                                <div className="flex flex-row items-center  ">
                                    <Phone className="h-4" />
                                    (+61 450 006 978)
                                </div>
                                <div className="flex flex-row items-center  ">
                                    <Mail className="h-4" />
                                    will_davis@outlook.com.au
                                </div>
                                <div className="flex flex-row items-center  ">
                                    <Github className="h-4" />
                                    github.com/Davo176
                                </div>
                                <div className="flex flex-row items-center  ">
                                    <Linkedin className="h-4" />
                                    linkedin.com/in/will-e-davis/
                                </div>
                                <div className="flex flex-row items-center  ">
                                    <GitFork className="h-4" />
                                    Forks
                                </div>
                            </div>
                            <hr />
                            <div className="pt-2 font-medium">Languages</div>
                            <div className="flex flex-col gap-1 py-2 text-sm font-light text-gray-400">
                                <div className="flex flex-row items-center  ">Javascript</div>
                                <div className="flex flex-row items-center  ">Typescript</div>
                                <div className="flex flex-row items-center  ">Python</div>
                                <div className="flex flex-row items-center  ">C++</div>
                                <div className="flex flex-row items-center  ">SQL</div>
                            </div>
                            <hr />
                            <div className="pt-2 font-medium">Frameworks</div>
                            <div className="flex flex-col gap-1 py-2 text-sm font-light text-gray-400">
                                <div className="flex flex-row items-center  ">Express.js</div>
                                <div className="flex flex-row items-center  ">React.js</div>
                                <div className="flex flex-row items-center  ">Prisma</div>
                                <div className="flex flex-row items-center  ">Drizzle</div>
                                <div className="flex flex-row items-center  ">Postgres</div>
                            </div>
                            <hr />
                            <div className="pt-2 font-medium">Tools</div>
                            <div className="flex flex-col gap-1 py-2 text-sm font-light text-gray-400">
                                <div className="flex flex-row items-center  ">AWS</div>
                                <div className="flex flex-row items-center  ">Git</div>
                                <div className="flex flex-row items-center  ">Jira / Confluence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Project({ project, selected, setSelected, hasClicked, setHasClicked }) {
    const [isAnimating, setIsAnimating] = useState(false);

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    useEffect(() => {
        const intervalId = setInterval(
            () => {
                setIsAnimating((prev) => !prev);
            },
            getRandomInt(3000, 7000),
        );
        return () => clearInterval(intervalId);
    });

    let Component = <Folder className="text-blue-400" />;
    if (project.type === "work") {
        Component = <Briefcase className="text-teal-400" />;
    }
    if (project.type === "personal") {
        Component = <User className="text-red-400" />;
    }

    return (
        <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isAnimating && !hasClicked ? [1, 1.01, 0.99, 1] : 1 }} // Only animate if isAnimating is true
            transition={{ duration: 2 }}
        >
            <div
                className={`flex cursor-pointer flex-row items-center border-y border-gray-100 p-2 ${selected ? " bg-zinc-100" : ""}`}
                onClick={() => {
                    setSelected(project);
                    setHasClicked(true);
                }}
            >
                <div className="flex w-1/3 flex-row items-center gap-2">
                    {Component}
                    <div>{project.name}</div>
                </div>
                <div className="flex self-start text-sm font-light">{project.message}</div>
                <div className="flex-grow text-right text-sm font-light">{project.time}</div>
            </div>
        </motion.div>
    );
}

export default Home;
