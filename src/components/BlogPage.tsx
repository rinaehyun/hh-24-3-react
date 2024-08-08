import Blog from "./Blog.tsx";

const Travel = [
    {
        country: "Turkey",
        city: "Cappadocia",
        date: "17.06.2023"
    },
    {
        country: "Germany",
        city: "Stuttgart",
        date: "20.12.2024"
    },
    {
        country: "Germany",
        city: "Stuttgart",
        date: "20.12.2024"
    },
    {
        country: "Germany",
        city: "Stuttgart",
        date: "20.12.2024"
    },
    {
        country: "Germany",
        city: "Stuttgart",
        date: "20.12.2024"
    }

]

export default function BlogPage() {

    return (
        <div>
            {Travel.map((travel) => (
                <Blog
                    key={travel.city}
                    country={travel.country}
                    city={travel.city}
                    date={travel.date}
                />
            ))};

            {/*<Blog country={"Turkey"} city={"Cappadocia"} date={"17.06.2023"}/>
            <Blog country={"Germany"} city={"Stuttgart"} date={"20.12.2024"}/>*/}
        </div>
    )
}