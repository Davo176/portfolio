import { PageHeader, SectionHeader } from "../../components";

function BlockModel(props) {
    return (
        <div>
            <PageHeader>
                <span>Block Model Compression</span>
            </PageHeader>
            <SectionHeader>
                <span>Background</span>
            </SectionHeader>
            <p className="pt-2">
                In my final year of University, Our final project was to build an efficient stream processor for compressing a set of cubes into larger
                rectangular prisms. We were provided with an input and output format, and were evaluated on how quick our algorithms were, and how efficiently
                they compressed the input.
            </p>
            <p className="pt-2">
                I worked in a group of 7 people, and we split into two groups, one group handling speed, and another working on compression. I mainly focused on
                compression, but assisted with <b>Run Length Encoding</b> implementations for the speed team, written in C++.
            </p>
            <SectionHeader>
                <span>Details</span>
            </SectionHeader>
            <p className="pt-2">
                I designed 2 novel algorithms, which both performed extremerly well, allowing our team to finish in 2nd place overall for compression.
            </p>
            <p className="pt-2">
                Completely forgoing speed, I built a framework that could efficiently combine different algorithms. This allowed us to run my two novel
                algorithms with over 250 different hyperparameters, and return for each section the most efficient compressed variation.
            </p>
            <p className="pt-2">
                Ontop of this, I built 2 dev-tools for our team to use, one to quickly confirm if an output is valid, given the input, and one to compare two
                different outputs, returning the sections that were compressed differently. These greatly sped up our development time.
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
export { BlockModel };
