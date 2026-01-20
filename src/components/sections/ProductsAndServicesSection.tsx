import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProductsAndServicesSection = () => {
  const products = [
    {
      id: 1,
      title: 'Ортопедические стельки',
      description: 'Индивидуальные ортопедические стельки для коррекции стопы',
      price: 'от 2 500 ₽',
      features: ['Натуральные материалы', 'Индивидуальный подбор', 'Коррекция плоскостопия']
    },
    {
      id: 2,
      title: 'Корректоры осанки',
      description: 'Профессиональные корректоры для поддержки правильной осанки',
      price: 'от 3 200 ₽',
      features: ['Регулируемый размер', 'Дышащие материалы', 'Незаметен под одеждой']
    },
    {
      id: 3,
      title: 'Ортопедические подушки',
      description: 'Подушки с эффектом памяти для здорового сна',
      price: 'от 1 800 ₽',
      features: ['Memory Foam', 'Гипоаллергенные', 'Разные размеры']
    },
    {
      id: 4,
      title: 'Коленные бандажи',
      description: 'Бандажи для поддержки и защиты коленного сустава',
      price: 'от 1 500 ₽',
      features: ['Компрессионная поддержка', 'Эластичная ткань', 'Разные степени фиксации']
    },
    {
      id: 5,
      title: 'Ортопедические матрасы',
      description: 'Матрасы для правильного положения позвоночника во время сна',
      price: 'от 15 000 ₽',
      features: ['Независимые пружины', 'Анатомическая форма', 'Гарантия 5 лет']
    },
    {
      id: 6,
      title: 'Пояснично-крестцовые корсеты',
      description: 'Корсеты для поддержки поясничного отдела позвоночника',
      price: 'от 2 800 ₽',
      features: ['Жёсткие рёбра', 'Регулируемая фиксация', 'Медицинский класс']
    }
  ];

  const services = [
    {
      icon: 'UserCheck',
      title: 'Консультация специалиста',
      description: 'Бесплатная консультация врача-ортопеда при покупке'
    },
    {
      icon: 'Ruler',
      title: 'Индивидуальный подбор',
      description: 'Подбор ортопедических изделий с учётом ваших особенностей'
    },
    {
      icon: 'Package',
      title: 'Доставка',
      description: 'Доставка по городу в день заказа'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Все товары сертифицированы, гарантия от производителя'
    }
  ];

  return (
    <>
      {/* About Section */}
      <section id="о-магазине" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">О магазине</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Ортокомфорт" — специализированный магазин ортопедической продукции, работающий с 2014 года. 
              Мы помогаем людям заботиться о здоровье опорно-двигательного аппарата, предлагая качественные 
              ортопедические изделия от ведущих российских и зарубежных производителей.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center hover:shadow-xl transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <Icon name="Target" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Обеспечить каждого качественной ортопедической продукцией для активной жизни без боли
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Наши ценности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Профессионализм, забота о клиентах и ответственность за качество каждого товара
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <Icon name="Zap" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Наш подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Индивидуальный подбор с учётом особенностей здоровья и консультация специалистов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="товары" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Наши товары</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент ортопедической продукции для всей семьи
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Package" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-primary">{product.price}</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    <Icon name="Info" size={18} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Полный спектр услуг для вашего комфорта
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-shadow border-l-4 border-l-primary"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} size={28} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsAndServicesSection;
