import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { motion, AnimatePresence } from "framer-motion";


function CollapsableResumeSection({defaultOpen=false,header,children,paragraphs}){
  const [open,setOpen] = useState(defaultOpen);
  
  return (
    <div className="flex flex-col pb-2">
      <div className="flex flex-row flex-grow justify-between gap-3 pb-2">
        <h2 className="text-slate-100 text-2xl calsans">
          {header}
        </h2>
        <div>
          <FontAwesomeIcon 
            icon={open?faChevronDown:faChevronUp} 
            onClick={()=>setOpen(b=>!b)}
            className="align-middle text-slate-100"
          />
        </div>
      </div>
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{height:0}}
            animate={{height:'auto'}}
            exit   ={{height:0}}
            transition={{type:'just',stiffness:100,dampinig:0}}
            className="overflow-hidden"
          >
            {paragraphs ? 
              <ul>
                {paragraphs.map(paragraph=><li className="text-slate-100 text-sm">{paragraph}</li>)}
              </ul> 
            :
              children
            }
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


function Home() {

    return (
      <div className="p-3 flex justify-center bg-slate-600">
        <div className="w-1/2">
          <h1 className="text-slate-100 text-6xl calsans pb-2">
            <span>Resume</span>
          </h1>
          <CollapsableResumeSection defaultOpen={true} header={<span className="text-4xl">Work</span>}>
            <CollapsableResumeSection defaultOpen={false} header={<span className="text-2xl"><strong>FYI</strong> - <strong>Software Engineer</strong></span>}
              paragraphs={[
                "Built a reporting module for accountants to schedule beautiful exports of their Jobs, Clients, Invoices and Time Entries to excel.",
                "Ported existing custom grid's to AG-Grid, implementing Filtering, Sorting, Grouping, Aggregates and Infinite Scroll.",
                "Built a full stack CRUD feature allowing users to create and maintain 'Task Templates' - Allowing users to quickly create tasks they often have to assign, either manually or via automations.",
                "Developed a self-sustaining internal reporting system for FYI Docs, in Power BI, collecting data from multitudes of API's using NodeJS, and collating it in  an mssql database."
              ]}
            />
          </CollapsableResumeSection>
          <CollapsableResumeSection defaultOpen={true} header={<span className="text-4xl">Education</span>}>
            <CollapsableResumeSection defaultOpen={false} header={<span className="text-2xl">The University of Adelaide</span>}
              paragraphs={[
                "Graduated in 2020 with a 99.95 University Entrance Score including Merits in Specialist Mathematics, Mathematical Methods and Headstart Maths.",
                "Won Awards for Best Mathematical Student at Pembroke while completing Mathematics the year above me.",
              ]}
            />
            {/* <CollapsableResumeSection header={<span className="text-2xl">National Computer Sciecne School</span>}>
            </CollapsableResumeSection> */}
            {/* <CollapsableResumeSection header={<span className="text-2xl">High School</span>}>
            </CollapsableResumeSection> */}
          </CollapsableResumeSection>
        </div>
      </div>
    )
}
  
export default Home