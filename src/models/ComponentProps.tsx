
export type BlogProps = {
    country: string,
    city: string,
    date: string,
    text: string,
    link: string,
    onClick: () => void,
    img: string
}

export type ArticleProps = {
    city: string,
    date: string,
    text: string,
    link: string,
    onClick: () => void
}

export type PhotoProps = {
    img: string
}