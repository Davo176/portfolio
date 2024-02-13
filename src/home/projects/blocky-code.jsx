import { PageHeader, SectionHeader } from "../../components";

function BlockyCode(props) {
    return (
        <div>
            <PageHeader>
                <span>Blocky-Code</span>
            </PageHeader>
            <SectionHeader>
                <span>Background</span>
            </SectionHeader>
            <p className="pt-2">My High-School 'Game Design' project was a game that was supposed to help children learn how to code.</p>
            <p>
                This was developed in <b>Game Maker 2</b> where I implemented a drag-and-drop system, where you could order code blocks to move a robot around a
                level to reach a goal. Note that I did not draw all the graphics.
            </p>
            <SectionHeader>
                <span>Gameplay / Walkthrough</span>
            </SectionHeader>
            <div className="flex justify-center">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/9HJHqExkxUU?si=sR0IDu39tOxi1kse"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}
export { BlockyCode };
