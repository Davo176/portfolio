import { PageHeader, SectionHeader } from "../../components";

function Nightingale() {
    return (
        <div>
            <PageHeader>
                <span>Nightingale</span>
            </PageHeader>
            <SectionHeader>
                <span>Background</span>
            </SectionHeader>
            <p className="pt-2">
                In my final year of University, I had a subject where you had to pitch a business in the Technology field. My group pitched
                &apos;Nightingale&apos;, a LLM powered, customisable customer support agent for small businesses. I produced a demo that answered questions
                about our course, and a seperate demo for FYI.
            </p>
            <p className="pt-2">
                Our pitch made the top 5 in the subject, and received really positive feedback from the judges, which was incredibly satisfying
            </p>
            <p className="pt-2">
                Nowdays, the project lives on in my portfolio. Feel free to ask it any questions about me or my projects. I try to keep the information up to
                date.
            </p>
            <SectionHeader>
                <span>Technical Details</span>
            </SectionHeader>
            <p className="pt-2">
                Nightingale works by embedding a set of sentences, and when a question gets asked, embedding that, finding the most similar content in the
                database using cosine similarity, and feeding all that information to a Large Language Model to format an answer to the question.
            </p>
        </div>
    );
}
export { Nightingale };
