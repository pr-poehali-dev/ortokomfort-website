import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/64d27b75-ba68-42ea-b4e4-5c8d4ff34da7.jpg" 
              alt="Ортокомфорт"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">Ортокомфорт</h1>
              <p className="text-sm text-muted-foreground">Здоровье. Движение. Забота</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            {['Главная', 'О магазине', 'Товары', 'Услуги', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase().replace(' ', '-'))}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </nav>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
