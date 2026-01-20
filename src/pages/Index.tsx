import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      {/* Header */}
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
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
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

      {/* Hero Section */}
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
                <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('товары')}>
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Каталог товаров
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('контакты')}>
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
                    <CardDescription>сертифицированная продукция</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Contacts Section */}
      <section id="контакты" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Контакты</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">Адрес</CardTitle>
                      <CardDescription className="text-base">
                        г. Москва, ул. Примерная, д. 123
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">Телефон</CardTitle>
                      <CardDescription className="text-base">
                        +7 (495) 123-45-67
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">График работы</CardTitle>
                      <CardDescription className="text-base">
                        Пн-Пт: 09:00 - 20:00<br />
                        Сб-Вс: 10:00 - 18:00
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">Email</CardTitle>
                      <CardDescription className="text-base">
                        info@ortokomfort.ru
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A64c5b1f8c7b8e8e8c7b8e8e8c7b8e8e8&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="border-0"
                  title="Карта расположения магазина"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
                <CardDescription className="text-base">
                  Оставьте свои контакты, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base">Ваше имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите, чем мы можем вам помочь..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="mt-2"
                    />
                  </div>
                  <Button type="submit" className="w-full text-base py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/64d27b75-ba68-42ea-b4e4-5c8d4ff34da7.jpg" 
                  alt="Ортокомфорт"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold">Ортокомфорт</h3>
                  <p className="text-sm text-gray-300">Здоровье. Движение. Забота</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Ваш надёжный партнёр в мире ортопедической продукции
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>+7 (495) 123-45-67</p>
                <p>info@ortokomfort.ru</p>
                <p>г. Москва, ул. Примерная, 123</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Режим работы</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>Понедельник - Пятница: 09:00 - 20:00</p>
                <p>Суббота - Воскресенье: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Ортокомфорт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;