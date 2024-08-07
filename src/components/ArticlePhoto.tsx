import img from '../images/image1.jpeg';

export default function ArticlePhoto() {

    return (
        <section className="section-img">
            <img
                className="image-trip"
                src={img}
                alt="trip"
            />
        </section>
    )
}