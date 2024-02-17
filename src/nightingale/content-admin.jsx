import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Edit, Trash2, PlusCircle, Check } from "lucide-react";

const URL = "https://api.w-davis.com";
async function getContent(token) {
    return await fetch(URL + "/nightingale/content", {
        headers: {
            "x-wd-api-key": "pk-EcI1Nn2daolEuHWe5G0pE7shYEQTaoNr9kwWuESXTPC7b1wBzvfd0QH0alKGkSAV",
            authorization: "Bearer " + token,
        },
        mode: "cors",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    }).then((res) => res.json());
}

async function upsertContent(new_content, token) {
    return await fetch(URL + "/nightingale/content", {
        method: "POST",
        headers: {
            "x-wd-api-key": "pk-EcI1Nn2daolEuHWe5G0pE7shYEQTaoNr9kwWuESXTPC7b1wBzvfd0QH0alKGkSAV",
            "Content-Type": "application/json",
            authorization: "Bearer " + token,
        },
        body: JSON.stringify(new_content),
        mode: "cors",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    });
}

async function deleteContentById(content, token) {
    return await fetch(URL + "/nightingale/content", {
        method: "DELETE",
        headers: {
            "x-wd-api-key": "pk-EcI1Nn2daolEuHWe5G0pE7shYEQTaoNr9kwWuESXTPC7b1wBzvfd0QH0alKGkSAV",
            "Content-Type": "application/json",
            authorization: "Bearer " + token,
        },
        body: JSON.stringify(content),
        mode: "cors",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    });
}

async function loginPassword({ password }) {
    // You can make an API call to authenticate the user here.
    // For simplicity, let's just pretend we're making an API call and returning a user object.
    return await fetch(URL + "/login", {
        method: "post",
        headers: {
            "x-wd-api-key": "pk-EcI1Nn2daolEuHWe5G0pE7shYEQTaoNr9kwWuESXTPC7b1wBzvfd0QH0alKGkSAV",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
        mode: "cors",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    }).then((res) => res.json());
}

function LoginFirst(props) {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [password, setPassword] = useState("");

    const loginMutation = useMutation({
        mutationFn: loginPassword,
        onSuccess: (res) => {
            console.log(res);
            setToken(res.token);
            localStorage.setItem("token", res.token);
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        loginMutation.mutate({ password });
    };

    if (token === null) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="password" className="mb-2 block text-sm font-bold text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                    />
                </form>
            </div>
        );
    }
    return <NightingaleContentAdmin token={token} />;
}

function NightingaleContentAdmin(props) {
    const queryClient = useQueryClient();
    const content = useQuery({ queryKey: ["content"], queryFn: () => getContent(props.token) });
    const [isCreatingNewContent, setIsCreatingNewContent] = useState(false);
    const [newContent, setNewContent] = useState("");
    const mutation = useMutation({
        mutationFn: (content) => upsertContent(content, props.token),
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
                    {content.data && (
                        <>
                            {!isCreatingNewContent ?
                                <PlusCircle onClick={() => setIsCreatingNewContent(true)} />
                            :   <div className="flex w-full flex-row items-center justify-between">
                                    <textarea className="w-5/6" onBlur={(evt) => setNewContent(evt.target.value)}>
                                        {newContent}
                                    </textarea>
                                    <div className="flex flex-row items-center gap-3">
                                        <Check
                                            onClick={() =>
                                                mutation.mutate(
                                                    {
                                                        content: newContent,
                                                    },
                                                    props.token,
                                                )
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
                        </>
                    )}
                </div>
                {content.data?.map((c) => {
                    return <ContentObject content={c} token={props.token} />;
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
        mutationFn: (content) => upsertContent(content, props.token),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["content"] });
            setIsEditing(false);
        },
    });
    const deleteContent = useMutation({
        mutationFn: (id) => deleteContentById(id, props.token),
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
                            updateContent.mutate(
                                {
                                    id: props.content.id,
                                    content: content,
                                },
                                props.token,
                            )
                        }
                    />
                }
                <Trash2
                    onClick={() =>
                        deleteContent.mutate(
                            {
                                id: props.content.id,
                            },
                            props.token,
                        )
                    }
                />
            </div>
        </div>
    );
}

export { NightingaleContentAdmin, LoginFirst };
