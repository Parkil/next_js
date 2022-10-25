import NavBar from "../component/NavBar";

export default function Layout({children}) {
    return <>
        <NavBar/>
        <div>{children}</div>
    </>;
}