import img from '../images/image1.jpeg';
import "../styles/Blog.css";

export default function Blog() {

    return (
        <article>
            <header className="header-margin">
                <h2>Turkey</h2>
            </header>
            <div className="outer-container">
                <section className="section-text">
                    <div className="text-title">
                        <h3 className="sub-header-margin">Cappadocia, Turkey</h3>
                        <time>17.06.2023</time>
                    </div>
                    <div className="text-description">
                        <p className="description">
                            Lying in south central Turkey, the moonscaped region of Cappadocia, southeast of Ankara, is
                            most famous for unique geological features called fairy chimneys.
                            The large, cone-like formations were created over time by erosion of the relatively soft
                            volcanic ash around them.
                            Past cultures have dug into them to create dwellings, castles (like Uchisar) and even entire
                            underground cities like Kaymakli and Derinkuyu, used as hiding places by early Christians.
                            Nearby Kayseri is the gateway to the area.
                        </p>
                        <p>
                            If you need more information, please click <a
                            href="https://en.wikipedia.org/wiki/Cappadocia">here</a>.
                        </p>
                    </div>
                </section>
                <section className="section-img">
                    <img
                        className="image-trip"
                        src={img}
                        alt="trip"
                    />
                </section>
            </div>
        </article>
    );
}