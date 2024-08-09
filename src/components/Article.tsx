import { ArticleProps } from "../models/ComponentProps.tsx";

export default function Article(props: ArticleProps) {

    return (
        <section className="section-text">
            <div className="text-title">
                <h3 className="sub-header-margin">{props.city}</h3>
                <time>{props.date}</time>
            </div>
            <div className="text-description">
                <p className="description">
                    {props.text}
                </p>
                <p>
                    If you need more information, please click <a
                    href={props.link}>here</a>.
                </p>
                <button onClick={props.onClick}>Click me</button>
            </div>
        </section>
    )
}

