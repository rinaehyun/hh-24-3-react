import Blog from "./Blog.tsx";
import { ArticleData } from "../data/ArticleHeaders.tsx";


export default function BlogPage() {

    function handleEvent() {
        window.alert("This is an example of callback() as props in React.");
    }

    return (
        <div>
            {ArticleData.map((data) => (
                <Blog
                    key={data.city}
                    country={data.country}
                    city={data.city}
                    date={data.date}
                    text={data.text}
                    link={data.link}
                    onClick={handleEvent}
                    img={data.img}
                />
            ))}
        </div>
    )
}