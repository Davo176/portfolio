import {
  Link,
  Outlet,
} from "react-router-dom";

function App() {

  return (
    <div className="flex flex-col">
      <div className=" w-full justify-between p-4 flex flex-row bg-slate-700">
          <div className="flex flex-row gap-4">
            <Link className="text-slate-100 text-3xl calsans" to={'/'}>Home</Link>
            <Link className="text-slate-100 text-3xl calsans" to={'/projects'}>Projects</Link>
            <Link className="text-slate-100 text-3xl calsans" to={'/algorithms'}>Algorithms</Link>
          </div>
          <div className="flex flex-row gap-4">
            <Link className="text-slate-100 text-3xl calsans" to={'/resume'}>Resume</Link>
          </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default App
