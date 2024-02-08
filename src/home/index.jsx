import {
    Activity,
    ArrowDown,
    ArrowDown01,
    ArrowDownIcon,
    Book,
    BookA,
    BookOpen,
    ChevronDown,
    Clock,
    Code,
    Eye,
    Folder,
    GitBranch,
    GitBranchIcon,
    GitBranchPlus,
    GitCommit,
    GitFork,
    GitMerge,
    Mail,
    Pencil,
    Phone,
    Plus,
    Settings,
    Star,
    Tag,
} from "lucide-react";

function Home() {
    let projects = [{ id: 1, name: "url shortner", message: "An endpoint that shortens urls", time: "1 week ago" }];
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <div className="w-3/5 pt-3">
                <div className="flex flex-row items-center justify-between py-4 ">
                    <div className="flex flex-row items-center gap-3">
                        <img src="/profile-picture.jpg" className="h-8 rounded-full" />
                        <h2 className="text-lg  font-semibold">Will-Davis</h2>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <button>Pin</button>
                        <button>Unwatch</button>
                        <button>Fork</button>
                        <button>Star</button>
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
                                return <Project project={project} />;
                            })}
                        </div>
                        <div className="flex flex-col rounded-md border border-gray-100">
                            <div className="flex flex-row items-center justify-between border border-gray-100 px-2">
                                <div className="flex flex-row items-center gap-2 border-b-2 border-b-orange-400 py-3">
                                    <BookOpen className="h-4" />
                                    <div className="font-semibold">README</div>
                                </div>
                                <Pencil className="h-4" />
                            </div>
                            <div className="p-4">This is my readme</div>
                        </div>
                    </div>
                    <div className="w-1/6">
                        <div className="flex flex-row items-center justify-between py-2">
                            <div className="font-medium">About</div>
                            <Settings className="h-4" />
                        </div>
                        <div>I am Will Davis</div>
                        <div className="flex flex-col gap-2 py-4 text-sm font-light text-gray-400">
                            <div className="flex flex-row items-center  ">
                                <BookOpen className="h-4" />
                                Readme
                            </div>
                            <div className="flex flex-row items-center  ">
                                <Activity className="h-4" />
                                Activity
                            </div>
                            <div className="flex flex-row items-center  ">
                                <Star className="h-4" />
                                Stars
                            </div>
                            <div className="flex flex-row items-center  ">
                                <Eye className="h-4" />
                                Watching
                            </div>
                            <div className="flex flex-row items-center  ">
                                <GitFork className="h-4" />
                                Forks
                            </div>
                        </div>
                        <hr />
                        <div className="font-medium">Releases</div>
                        <hr />
                        <div className="font-medium">Packages</div>
                        <hr />
                        <div className="font-medium">Languages</div>
                        <hr />
                        <div className="font-medium">Suggested Workflows</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Project({ project }) {
    return (
        <div className="flex flex-row items-center justify-between border-y border-gray-100 p-2">
            <div className="flex flex-row items-center gap-2">
                <Folder className="text-blue-400" />
                <div>{project.name}</div>
            </div>
            <div className="text-sm font-light">{project.message}</div>
            <div className="text-sm font-light">{project.time}</div>
        </div>
    );
}

export default Home;
