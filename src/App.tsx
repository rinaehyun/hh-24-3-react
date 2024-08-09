import "./styles/App.css";
import Header from "./components/Header.tsx";
import BlogPage from "./components/BlogPage.tsx";
import SideMenu from "./components/SideMenu.tsx";

export default function App() {

    return (
        <>
            <Header />
            <div className={"page-body"}>
                <SideMenu />
                <BlogPage />
            </div>

        </>
    )
}