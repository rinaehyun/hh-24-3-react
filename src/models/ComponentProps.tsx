
export type BlogProps = ArticleProps & {
    country: string,
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