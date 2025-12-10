import ArticleCard from "./ArticleCard";

const articles = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=600&h=400&fit=crop",
        title: "Os Melhores Jogos de 2024 que Você Precisa Conhecer",
        excerpt: "Descubra os lançamentos mais aguardados e os títulos que estão dominando o cenário gamer neste ano. De RPGs épicos a aventuras indie.",
        href: "#",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=600&h=400&fit=crop",
        title: "Star Wars: Tudo Sobre a Nova Série",
        excerpt: "A galáxia muito, muito distante está de volta com mais uma produção épica. Confira todos os detalhes e teorias sobre o que está por vir.",
        href: "#",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&h=400&fit=crop",
        title: "Marvel vs DC: O Embate Definitivo",
        excerpt: "Análise completa comparando os universos cinematográficos das duas maiores editoras de quadrinhos do mundo.",
        href: "#",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
        title: "Setup Gamer: Guia Completo para Montar o Seu",
        excerpt: "Tudo que você precisa saber para criar o setup dos sonhos. Dicas de hardware, periféricos e decoração.",
        href: "#",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=600&h=400&fit=crop",
        title: "Animes da Temporada: O Que Assistir",
        excerpt: "Os melhores animes que estão bombando nesta temporada. Ação, romance, comédia e muito mais para sua watchlist.",
        href: "#",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=600&h=400&fit=crop",
        title: "Colecionáveis: Funko Pops Mais Valiosos",
        excerpt: "Descubra quais figuras Funko Pop estão valorizando no mercado e podem ser um ótimo investimento para colecionadores.",
        href: "#",
    },
];

const ArticleGrid = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            <h2 className="section-title mb-12">BANNER PRINCIPAL</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <ArticleCard
                        key={article.id}
                        image={article.image}
                        title={article.title}
                        excerpt={article.excerpt}
                        href={article.href}
                        delay={index * 100}
                    />
                ))}
            </div>
        </section>
    );
};

export default ArticleGrid;
