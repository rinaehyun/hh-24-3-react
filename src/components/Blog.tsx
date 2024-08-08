import "../styles/Blog.css";
import Article from "./Article.tsx";
import ArticlePhoto from "./ArticlePhoto.tsx";

type BlogProps = {
    country: string,
    city: string,
    date: string
}

export default function Blog(props: BlogProps) {

    return (
        <article>
            <header className="header-margin">
                <h2>{props.country}</h2>
            </header>
            <div className="outer-container">
                <Article city={props.city} date={props.date}/>
                <ArticlePhoto />
            </div>
        </article>
    );
}