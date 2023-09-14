import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons';


function CollapsableResumeSection({header,children}){
  const [open,setOpen] = useState(true);
  
  return (
    <div className="flex flex-col pb-2">
      <div className="flex flex-row flex-grow gap-3 pb-2">
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
      {
        open && children
      }
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
          <CollapsableResumeSection header={<span className="text-4xl">Work</span>}>
            <CollapsableResumeSection header={<span className="text-2xl"><strong>FYI</strong> - <strong>Software Engineer</strong></span>}>
              <ul>
                <li className="text-slate-100 text-sm">
                    Built a reporting module for accountants to schedule beautiful exports of their Jobs, Clients, Invoices and Time Entries to excel.
                </li>
                <li className="text-slate-100 text-sm">
                    Ported existing custom grid's to AG-Grid, implementing Filtering, Sorting, Grouping, Aggregates and Infinite Scroll.
                </li>
                <li className="text-slate-100 text-sm">
                    Built a full stack CRUD feature allowing users to create and maintain "Task Templates" - Allowing users to quickly create tasks they often have to assign, either manually or via automations.
                </li>
                <li className="text-slate-100 text-sm">
                    Developed a self-sustaining internal reporting system for FYI Docs, in Power BI, collecting data from multitudes of API's using NodeJS, and collating it in  an mssql database.
                </li>
              </ul>
            </CollapsableResumeSection>
          </CollapsableResumeSection>
          <CollapsableResumeSection header={<span className="text-4xl">Education</span>}>
            <CollapsableResumeSection header={<span className="text-2xl">The University of Adelaide</span>}>
              <ul>
                <li className="text-slate-100 text-sm">
                  Graduated in 2020 with a 99.95 University Entrance Score including Merits in Specialist Mathematics, Mathematical Methods and Headstart Maths. 
                </li>
                <li className="text-slate-100 text-sm">
                  Won Awards for Best Mathematical Student at Pembroke while completing Mathematics the year above me.
                </li>
              </ul>
            </CollapsableResumeSection>
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