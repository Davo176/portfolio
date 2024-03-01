const URL = "https://whimsical-trousers-production.up.railway.app";
async function getAflFantasyContent() {
    return await fetch(URL + "/dashboard", {
        headers: {},
        mode: "cors",
        redirect: "follow",
        referrerPolicy: "no-referrer",
    }).then((res) => res.json());
}

export { getAflFantasyContent };
