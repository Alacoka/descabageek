interface ArticleCardProps {
    image: string;
    title: string;
    excerpt: string;
    href: string;
    delay?: number;
}

const ArticleCard = ({ image, title, excerpt, href, delay = 0 }: ArticleCardProps) => {
    return (
        <article
            className="article-card opacity-0 animate-fade-in"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="article-card-image"
                />
            </div>
            <div className="p-5">
                <h3 className="font-display text-card-foreground font-bold text-lg mb-3 line-clamp-2 hover:text-accent transition-colors">
                    <a href={href}>{title}</a>
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {excerpt}
                </p>
                <a href={href} className="read-more">
                    Leia Mais »
                </a>
            </div>
        </article>
    );
};

export default ArticleCard;
