import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import NightingaleLogo from "./nightingale.svg";

function Question(){
    return (
        <div className="w-full">
            <div className="bg-white p-2 calsans w-2/3 rounded-lg rounded-br-none text-slate-600 float-right">
                This is a question!
            </div>
        </div>
    )
}

function Answer(){
    return (
        <div className="w-full">
            <div className="bg-slate-600 p-2 calsans w-2/3 rounded-lg rounded-bl-none text-white float-left">
                Hi, I am Nightingale, Will's Virtual Assistant
            </div>
        </div>
    )
}

function NightingaleChat(){
    return (
        <>
            <div className="bg-slate-700 w-full rounded-t-2xl p-3 text-white calsans">Nightingale</div>
            <div className="bg-gray-300 h-[36rem] h- w-full rounded-b-2xl flex flex-col justify-between p-2">
                <div className="flex flex-col gap-2 overflow-scroll no-scrollbar">
                    {[1,2,3,4,5,6,7].map(e=>{
                        return (
                            <>
                                <Answer/>
                                <Question/>
                            </>
                        )
                    })}
                </div>
                <div className="bg-white w-full rounded-lg p-2">
                    This is where you type the question
                </div>
            </div>
        </>
    )
}

function NightingaleBubble() {
    const [chatOpen, setChatOpen] = useState(false);
    return (
        <div className="absolute bottom-8 right-8">
        {chatOpen && 
            <AnimatePresence>
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit   ={{opacity:0}}
                    className="absolute right-24 bottom-20 w-[30rem] h-fit flex flex-col items-center"
                >
                    <NightingaleChat/>
                </motion.div>
            </AnimatePresence>
        }
            <motion.div
                onClick={()=>setChatOpen(open=>!open)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-px w-20 h-20 bg-gray-50 rounded-xl flex justify-center items-center"
                >
                <img src={NightingaleLogo} alt="Nightingale Logo" className="w-fit h-fit relative inset-y-1 colour"/>
            </motion.div>
        </div>
    )
}
  
export {NightingaleBubble};