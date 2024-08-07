import "../styles/Blog.css";
import Article from "./Article.tsx";
import ArticlePhoto from "./ArticlePhoto.tsx";

export default function Blog() {

    return (
        <article>
            <header className="header-margin">
                <h2>Turkey</h2>
            </header>
            <div className="outer-container">
                <Article />
                <ArticlePhoto />
            </div>
        </article>
    );
}