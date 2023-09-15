import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { LinkedList } from "./alg";

function LinkedListPage() {
    useEffect(()=>{
        let ll = new LinkedList(1);
        ll.addNode(3);

        ll.print();
    },[])

    return (
        <div className="p-3 flex justify-center bg-slate-600">
            <div className="w-1/2">
                <Outlet/>
            </div>
        </div>
    )
}
  
export default LinkedListPage;
