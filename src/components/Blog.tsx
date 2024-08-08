import "../styles/Blog.css";
import Article from "./Article.tsx";
import ArticlePhoto from "./ArticlePhoto.tsx";
import { BlogProps } from "../models/ComponentProps.tsx";


export default function Blog(props: BlogProps) {

    return (
        <article className={"blog-card"}>
            <header className="header-margin">
            </header>
            <div className="outer-container">
                <Article
                    city={props.city}
                    date={props.date}
                    text={props.text}
                    link={props.link}
                    onClick={props.onClick} />
                <ArticlePhoto img={props.img}/>
            </div>
        </article>
    );
}