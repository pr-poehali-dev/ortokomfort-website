import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Главная', 'О магазине', 'Товары', 'Услуги', 'Контакты'];

  const handleNavigate = (item: string) => {
    onNavigate(item.toLowerCase().replace(' ', '-'));
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <img 
              src="https://cdn.poehali.dev/files/64d27b75-ba68-42ea-b4e4-5c8d4ff34da7.jpg" 
              alt="Ортокомфорт"
              className="h-10 w-10 md:h-14 md:w-14 rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-primary">Ортокомфорт</h1>
              <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">
                Ваш комфорт - наш приоритет
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 flex-1 justify-center">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigate(item)}
                className="text-foreground hover:text-primary transition-colors font-medium whitespace-nowrap"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Desktop Call Button */}
          <a href="tel:+79961210555" className="hidden lg:flex">
            <Button>
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </a>

          {/* Mobile Call Button */}
          <a href="tel:+79961210555" className="lg:hidden">
            <Button size="sm" className="px-3">
              <Icon name="Phone" size={18} />
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Меню"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigate(item)}
                  className="text-left py-2 px-3 text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
