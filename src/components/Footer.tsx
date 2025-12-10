import { Instagram, Youtube, Music2, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-card/50 mt-16">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                            <span className="text-xl">👾</span>
                        </div>
                        <div className="font-display">
                            <div className="text-card-foreground font-bold tracking-wider">DESCABA</div>
                            <div className="text-accent font-bold tracking-[0.3em] text-sm -mt-1">GEEK</div>
                        </div>
                    </a>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
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

                    {/* Copyright */}
                    <p className="text-muted-foreground text-sm flex items-center gap-2">
                        Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> para nerds
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
