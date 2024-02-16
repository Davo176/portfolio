import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import NightingaleLogo from "./nightingale.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Question({ question }) {
    return (
        <div className="w-full">
            <div className="calsans float-right w-2/3 rounded-lg rounded-br-none bg-white p-2 text-right text-slate-600">{question}</div>
        </div>
    );
}

function Answer({ answer }) {
    return (
        <div className="w-full">
            <div className="calsans float-left w-2/3 rounded-lg rounded-bl-none bg-slate-600 p-2 text-white">{answer || "answer"}</div>
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
                "x-wd-api-key": import.meta.env.API_KEY, //DO NOT COMMIT
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
            <div className="calsans w-full rounded-t-2xl bg-slate-700 p-3 text-white">Nightingale</div>
            <div className="h- flex h-[36rem] w-full flex-col justify-between rounded-b-2xl bg-gray-300 p-2">
                <div className="no-scrollbar flex flex-col gap-2 overflow-scroll">
                    <Answer answer="Hi, I am Nightingale, Will's Virtual Assistant" />
                    {question && <Question question={question} />}
                    {answer && <Answer answer={answer} />}
                </div>
                <form className="flex w-full items-center rounded-lg bg-white px-3 py-1 text-slate-600" onSubmit={submitQuestion}>
                    <textarea
                        className=" calsans no-scrollbar max-h-16 w-full resize-none overflow-scroll align-middle text-slate-600 outline-none"
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
        <div className="fixed bottom-8 right-8">
            {chatOpen && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-20 right-24 flex h-fit w-[30rem] flex-col items-center"
                    >
                        <NightingaleChat />
                    </motion.div>
                </AnimatePresence>
            )}
            <motion.div
                onClick={() => setChatOpen((open) => !open)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-20 w-20 items-center justify-center rounded-xl bg-gray-50 p-px"
            >
                <img src={NightingaleLogo} alt="Nightingale Logo" className="colour relative inset-y-1 h-fit w-fit" />
            </motion.div>
        </div>
    );
}

export { NightingaleBubble };
