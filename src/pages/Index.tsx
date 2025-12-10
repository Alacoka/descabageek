import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ArticleGrid from "../components/ArticleGrid";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <SearchBar />
                <ArticleGrid />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
