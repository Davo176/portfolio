import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

async function getContent() {
    return await fetch("https://portfolio-backend-production-1b52.up.railway.app/nightingale/content", {
        headers: {
            "x-wd-api-key": "sk-EcI1Nn2daolEuHWe5G0pE7shYEQTaoNr9kwWuESXTPC7b1wBzvfd0QH0alKGkSAV", //DO NOT COMMIT
        },
        mode: "cors",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    }).then((res) => res.json());
}

function NightingaleContentAdmin(props) {
    // const queryClient = useQueryClient()
    const content = useQuery({ queryKey: ["todos"], queryFn: getContent });
    return (
        <div>
            {content.data &&
                content.data.map((c) => {
                    return <div>{c.content}</div>;
                })}
        </div>
    );
}

export { NightingaleContentAdmin };
