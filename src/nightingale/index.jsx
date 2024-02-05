import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import NightingaleLogo from "./nightingale.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Question({ question }) {
    return (
        <div className="w-full">
            <div className="bg-white p-2 calsans w-2/3 rounded-lg rounded-br-none text-slate-600 float-right text-right">{question}</div>
        </div>
    );
}

function Answer({ answer }) {
    return (
        <div className="w-full">
            <div className="bg-slate-600 p-2 calsans w-2/3 rounded-lg rounded-bl-none text-white float-left">{answer || "answer"}</div>
        </div>
    );
}

function NightingaleChat() {
    const [textAreaContent, setTextAreaContent] = useState("");
    const [question, setQuestion] = useState(null);
    const [answer, setAnswer] = useState(null);
    function submitQuestion(e) {
        e.preventDefault();
        console.log(textAreaContent);

        setAnswer(null);
        setQuestion(textAreaContent);
        askQuestion(textAreaContent);
        setTextAreaContent("");
    }

    async function askQuestion(question) {
        let response = await fetch("https://portfolio-backend-production-1b52.up.railway.app/nightingale/answer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-wd-api-key": "sk-EcI1Nn2daolEuHWe5G0pE7shYEQTaoNr9kwWuESXTPC7b1wBzvfd0QH0alKGkSAV", //DO NOT COMMIT
            },
            mode: "cors",
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
                content: question,
            }),
        }).then((res) => res.json());
        setAnswer(response.answer);
    }

    return (
        <>
            <div className="bg-slate-700 w-full rounded-t-2xl p-3 text-white calsans">Nightingale</div>
            <div className="bg-gray-300 h-[36rem] h- w-full rounded-b-2xl flex flex-col justify-between p-2">
                <div className="flex flex-col gap-2 overflow-scroll no-scrollbar">
                    <Answer answer="Hi, I am Nightingale, Will's Virtual Assistant" />
                    {question && <Question question={question} />}
                    {answer && <Answer answer={answer} />}
                </div>
                <form className="bg-white w-full rounded-lg py-1 px-3 flex items-center text-slate-600" onSubmit={submitQuestion}>
                    <textarea
                        className=" calsans text-slate-600 w-full outline-none resize-none overflow-scroll no-scrollbar max-h-16 align-middle"
                        placeholder="Ask a Question"
                        value={textAreaContent}
                        onChange={(e) => setTextAreaContent(e.target.value)}
                    />
                    <button type="submit">
                        <FontAwesomeIcon icon={faPlay} className="pl-2" />
                    </button>
                </form>
            </div>
        </>
    );
}

function NightingaleBubble() {
    const [chatOpen, setChatOpen] = useState(false);
    return (
        <div className="absolute bottom-8 right-8">
            {chatOpen && (
                <AnimatePresence>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute right-24 bottom-20 w-[30rem] h-fit flex flex-col items-center">
                        <NightingaleChat />
                    </motion.div>
                </AnimatePresence>
            )}
            <motion.div onClick={() => setChatOpen((open) => !open)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-px w-20 h-20 bg-gray-50 rounded-xl flex justify-center items-center">
                <img src={NightingaleLogo} alt="Nightingale Logo" className="w-fit h-fit relative inset-y-1 colour" />
            </motion.div>
        </div>
    );
}

export { NightingaleBubble };
