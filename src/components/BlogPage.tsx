import Blog from "./Blog.tsx";

export default function BlogPage() {

    return (
        <div>
            <Blog country={"Turkey"} city={"Cappadocia"} date={"17.06.2023"}/>
            <Blog country={"Germany"} city={"Stuttgart"} date={"20.12.2024"}/>
        </div>
    )
}