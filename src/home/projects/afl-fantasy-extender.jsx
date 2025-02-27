import { PageHeader, SectionHeader, TotalUsersGraph } from "../../components";
function AflFantasyExtender() {
    return (
        <div>
            <PageHeader>
                <span>Game Changer</span>
            </PageHeader>
            <SectionHeader>
                <span>Link to Site</span>
            </SectionHeader>
            <p className="pt-2 text-blue-400 underline">
                <a href="https://www.gamechangerfantasyfooty.com">Game Changer</a>
            </p>
            <SectionHeader>
                <span>Background</span>
            </SectionHeader>
            <p className="pt-2">
                I really enjoy playing AFL Fantasy, specifically the &apos;Salary Cap&apos; game-mode. In this you select a team of 30 players to fit inside a
                salary cap. Players score points based off how well they perform in their real game, and the team which scores the most points throughout the
                year wins! The game opens around christmas time, and until the first game, you can make as many changes to your team as you like.
            </p>
            <p>
                I created this chrome extension to solve a problem that dedicated players had, you couldn&apos;t save different versions of your fantasy team.
                Users would take screenshots, and painstakingly swap between different versions of your team, which takes a long time. This is the problem I
                fixed with my first feature, the <b>Version Manager</b>.
            </p>
            <SectionHeader>
                <span>Description</span>
            </SectionHeader>
            <p>
                My chrome extension seemlessly inserts itself into the application, allowing users to create different &apos;versions&apos; of there teams, and
                revisit them later.
            </p>
            <p>
                The next year, I added some more features that can be used throughout the year. I added a <b>Bye-Round Manager</b> and <b>Fixture Analyser</b>{" "}
                to another section of the app, which users can easily refer to in order to make better decisions in-season.
            </p>
            <p>
                I have continued to improve this over the next couple of years, adding features that estimate how a players price will change depending on
                scores. As well as features that return the optimal trades under salary and score constraints.
            </p>
            <SectionHeader>
                <span>Video</span>
            </SectionHeader>
            <div className="flex justify-center">
                <iframe
                    // width="full"
                    style={{ width: "100%", height: "auto", aspectRatio: "16/9" }}
                    src="https://www.youtube.com/embed/cxRZbMwU0KA?si=x24LkKnxMsiET_y5"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>

            <SectionHeader>
                <span>Dashboard</span>
            </SectionHeader>
            <p className="w-5/6 lg:w-full">
                <TotalUsersGraph />
            </p>
            <SectionHeader>
                <span>Tech Stack</span>
            </SectionHeader>
            <p>
                I used this project as an opportunity to learn some new skills. This was my first venture into writing typescript, which I used on both the
                front-end and back-end. I built the front-end in React, using AG-Charts to build the charts. The back-end used Express, with prisma to connect
                to a postgres database, also handling migrations and the schema. The database and backend were deployed to Railway.
            </p>
        </div>
    );
}
export { AflFantasyExtender };
