import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="главная" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-primary/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              Забота о вашем <span className="text-primary">здоровье</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Профессиональная ортопедическая продукция для активной и здоровой жизни. 
              Более 10 лет заботимся о вашем комфорте.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8" onClick={() => onNavigate('товары')}>
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Каталог товаров
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => onNavigate('контакты')}>
                <Icon name="MapPin" size={20} className="mr-2" />
                Где нас найти
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Icon name="Award" size={32} className="text-primary mb-2" />
                  <CardTitle className="text-2xl">10+</CardTitle>
                  <CardDescription>лет на рынке</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Icon name="Users" size={32} className="text-primary mb-2" />
                  <CardTitle className="text-2xl">5000+</CardTitle>
                  <CardDescription>довольных клиентов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Icon name="Package" size={32} className="text-primary mb-2" />
                  <CardTitle className="text-2xl">500+</CardTitle>
                  <CardDescription>товаров в наличии</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Icon name="ThumbsUp" size={32} className="text-primary mb-2" />
                  <CardTitle className="text-2xl">100%</CardTitle>
                  <CardDescription className="text-sm">сертифицированная продукция</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;