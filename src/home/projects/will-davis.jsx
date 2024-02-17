import { PageHeader, SectionHeader } from "../../components";

function WillDavis() {
    return (
        <div>
            <PageHeader>
                <span>About Me</span>
            </PageHeader>
            <SectionHeader>
                <span>Education</span>
            </SectionHeader>
            <p className="pt-2">
                I graduated from the University of Adelaide with a Bachelor of Computer Science (Advanced) with a major in Artificial Intelligence. My GPA was
                6.78, and I completed classes in Data Structures and Algorithms, Web and Database Computing, Systems Programming, Operating Systems, Artificial
                Intelligence and Evolutionary Computation.
            </p>
            <p className="pt-2">
                I graduate from Pembroke College with a 99.80 raw ATAR, which gets scaled to the perfect 99.95 university entrance score. I achieved 19.9/20 in
                both Year 12 Specialist Maths and Math Methods (the top two maths streams), while I was in Year 11, allowing me to start university maths while
                I was in year 12. I was awarded the best mathematical student out of the Year 12 students while I was in Year 11, and in Year 12 I was awarded
                the Margret Meadows award for exceptional engineering. I also won the Australian Defence Force 'Future Innovators' award.
            </p>
            <SectionHeader>
                <span>Hobbies</span>
            </SectionHeader>
            <p className="pt-2">I enjoy playing sport, I play AFL for the University of Adelaide, and play indoor soccer socially with some of my mates.</p>
            <p className="pt-2">I love AFL Fantasy, which is why I have built some projects around it.</p>
        </div>
    );
}
export { WillDavis };
