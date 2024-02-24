import { PageHeader, SectionHeader } from "../../components";

function FyiSoftware() {
    return (
        <div>
            <PageHeader>
                <span>FYI Software</span>
            </PageHeader>
            <SectionHeader>
                <span>About the Company</span>
            </SectionHeader>
            <p className="pt-2">
                FYI Software makes cloud automation and document/practice management software for accountants. They integrate closely with Xero, MYOB and other
                existing market players.
            </p>
            <p className="pt-2">I joined FYI in 2020 as a Junior Engineer, which was my role while I finished my degree at University.</p>
            <SectionHeader>
                <span>Junior Engineer</span>
            </SectionHeader>
            <p className="pt-2">
                My first job was to build all of our internal reporting systems. As part of this I configured a mssql database, made API calls, and designed
                beautiful powerbi dashboards used by our sales, onboarding and support teams.
            </p>
            <p className="pt-2">
                After that, I moved on to a full-stack role, where I worked as part of a team to fix bugs and built many full stack features. I assisted in the
                migration of our site from our custom built tables to AG-Grid, I built an excel reporting system for our customers to report on data, I
                delivered a highly commended feature entitled &apos;Task Templates&apos;, making our customers lives easier. I implemented a support bot for our
                customers to quickly get answers to questions about our product. After a few outages, I was also tasked with designing our platform outages
                alerts and dashboards, which helped me learn the ins and outs of AWS. Overall, as a junior engineer, I learnt a lot about the software
                development process.
            </p>
            <SectionHeader>
                <span>Software Engineer</span>
            </SectionHeader>
            <p className="pt-2">
                Immediately after I graduated from University, I was given a promotion to Software Engineer, now a full-time role. This came with added
                responsibilities, including cutting release-candidates, managing our weekly releases, and larger projects to go along with my full-time role.
            </p>
            <p className="pt-2">
                In this role, I have refactored our &apos;External Applications&apos; page, improving its maintainability and extendability, helped deliver our
                practice-management solution, built a system for distributing and managing &apos;Master Report Templates&apos;, and worked with SharePoint
                API&apos;s on a feature enabling our customers to share documents with their clients.
            </p>
        </div>
    );
}
export { FyiSoftware };
