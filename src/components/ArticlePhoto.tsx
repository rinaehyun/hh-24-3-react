import {PhotoProps} from "../models/ComponentProps.tsx";

export default function ArticlePhoto(props: PhotoProps) {

    return (
        <section className="section-img">
            <img
                className="image-trip"
                src={props.img}
                alt="trip"
            />
        </section>
    )
}