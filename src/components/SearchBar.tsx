import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Searching for:", query);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto flex">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Pesquise Aqui..."
                    className="search-input flex-1"
                />
                <button type="submit" className="search-button" title="Search">
                    <Search className="w-5 h-5" />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
