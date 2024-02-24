import { PageHeader, SectionHeader } from "../../components";

function URLShortner() {
    return (
        <div>
            <PageHeader>
                <span>URL Shortner</span>
            </PageHeader>
            <SectionHeader>
                <span>Background</span>
            </SectionHeader>
            <p className="pt-2">
                When writing my resume, I wanted a url shortner I could rely on for my links, as some were way to long to fit into the space I had allocated.
            </p>
            <p>
                What I could find online, would expire after a certain amount of time without clicks, or a bunch of other downsides. I realised I could easily
                just write one, so I did.
            </p>
            <SectionHeader>
                <span>Gameplay / Walkthrough</span>
            </SectionHeader>
        </div>
    );
}
export { URLShortner };
