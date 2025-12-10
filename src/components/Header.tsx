import { Instagram, Youtube, Music2 } from "lucide-react";

const navLinks = [
    { label: "Agenda", href: "#agenda" },
    { label: "Listas", href: "#listas" },
    { label: "Guias", href: "#guias" },
    { label: "Reviews", href: "#reviews" },
    // { label: "Compras", href: "#compras" },
];

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center animate-float">
                            <span className="text-2xl">👾</span>
                        </div>
                        <div className="font-display">
                            <div className="text-card-foreground font-bold text-lg tracking-wider">DESCABA</div>
                            <div className="text-accent font-bold text-lg tracking-[0.3em] -mt-1">GEEK</div>
                        </div>
                    </a>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} className="nav-link">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <a href="#" className="social-icon" aria-label="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="social-icon" aria-label="YouTube">
                            <Youtube className="w-5 h-5" />
                        </a>
                        <a href="#" className="social-icon" aria-label="TikTok">
                            <Music2 className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
