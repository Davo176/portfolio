import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Edit, Trash2, PlusCircle, Check } from "lucide-react";

const URL = "https://portfolio-backend-production-1b52.up.railway.app";
async function getContent() {
    //https://portfolio-backend-production-1b52.up.railway.app
    return await fetch(URL + "/nightingale/content", {
        headers: {
            "x-wd-api-key": "sk-EcI1Nn2daolEuHWe5G0pE7shYEQTaoNr9kwWuESXTPC7b1wBzvfd0QH0alKGkSAV", //DO NOT COMMIT
        },
        mode: "cors",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    }).then((res) => res.json());
}

async function upsertContent(new_content) {
    return await fetch(URL + "/nightingale/content", {
        method: "POST",
        headers: {
            "x-wd-api-key": "sk-EcI1Nn2daolEuHWe5G0pE7shYEQTaoNr9kwWuESXTPC7b1wBzvfd0QH0alKGkSAV", //DO NOT COMMIT
            "Content-Type": "application/json",
        },
        body: JSON.stringify(new_content),
        mode: "cors",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    });
}

async function deleteContentById(content) {
    return await fetch(URL + "/nightingale/content", {
        method: "DELETE",
        headers: {
            "x-wd-api-key": "sk-EcI1Nn2daolEuHWe5G0pE7shYEQTaoNr9kwWuESXTPC7b1wBzvfd0QH0alKGkSAV", //DO NOT COMMIT
            "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
        mode: "cors",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    });
}

function NightingaleContentAdmin(props) {
    const queryClient = useQueryClient();
    const content = useQuery({ queryKey: ["content"], queryFn: getContent });
    const [isCreatingNewContent, setIsCreatingNewContent] = useState(false);
    const [newContent, setNewContent] = useState("");
    const mutation = useMutation({
        mutationFn: upsertContent,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["content"] });
            setIsCreatingNewContent(false);
            setNewContent("");
        },
    });

    return (
        <div className="flex w-full flex-row justify-center pt-2">
            <div className="flex w-4/5 flex-col gap-3 ">
                <div className="flex flex-row justify-center rounded-lg border-2 border-gray-100 bg-gray-100 p-2">
                    {!isCreatingNewContent ?
                        <PlusCircle onClick={() => setIsCreatingNewContent(true)} />
                    :   <div className="flex w-full flex-row items-center justify-between">
                            <textarea className="w-5/6" onBlur={(evt) => setNewContent(evt.target.value)}>
                                {newContent}
                            </textarea>
                            <div className="flex flex-row items-center gap-3">
                                <Check
                                    onClick={() =>
                                        mutation.mutate({
                                            content: newContent,
                                        })
                                    }
                                />
                                <Trash2
                                    onClick={() => {
                                        setNewContent("");
                                        setIsCreatingNewContent(false);
                                    }}
                                />
                            </div>
                        </div>
                    }
                </div>
                {content.data?.map((c) => {
                    return <ContentObject content={c} />;
                })}
            </div>
        </div>
    );
}

function ContentObject(props) {
    const queryClient = useQueryClient();
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(props.content.content);
    const updateContent = useMutation({
        mutationFn: upsertContent,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["content"] });
            setIsEditing(false);
        },
    });
    const deleteContent = useMutation({
        mutationFn: deleteContentById,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["content"] });
        },
    });

    return (
        <div className="flex flex-row justify-between rounded-lg border-2 border-gray-100 bg-gray-100 p-2">
            <div className="w-5/6 ">
                {!isEditing ?
                    content
                :   <textarea className="w-full" onBlur={(evt) => setContent(evt.target.value)}>
                        {content}
                    </textarea>
                }
            </div>
            <div className="flex flex-row items-center gap-3">
                {!isEditing ?
                    <Edit onClick={() => setIsEditing(!isEditing)} />
                :   <Check
                        onClick={() =>
                            update.mutate({
                                id: props.content.id,
                                content: content,
                            })
                        }
                    />
                }
                <Trash2
                    onClick={() =>
                        deleteContent.mutate({
                            id: props.content.id,
                        })
                    }
                />
            </div>
        </div>
    );
}

export { NightingaleContentAdmin };
