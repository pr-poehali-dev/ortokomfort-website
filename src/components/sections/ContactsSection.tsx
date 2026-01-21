import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const validateName = (name: string): string => {
    if (!name.trim()) {
      return 'Пожалуйста, введите ваше имя';
    }
    if (name.trim().length < 2) {
      return 'Имя должно содержать минимум 2 символа';
    }
    if (!/^[а-яёА-ЯЁa-zA-Z\s-]+$/.test(name)) {
      return 'Имя может содержать только буквы, пробелы и дефис';
    }
    return '';
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) {
      return 'Пожалуйста, введите номер телефона';
    }
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (!/^\+?[78]?\d{10}$/.test(cleanPhone)) {
      return 'Введите корректный номер телефона (10 цифр)';
    }
    return '';
  };

  const validateMessage = (message: string): string => {
    if (!message.trim()) {
      return 'Пожалуйста, введите сообщение';
    }
    if (message.trim().length < 10) {
      return 'Сообщение должно содержать минимум 10 символов';
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    const messageError = validateMessage(formData.message);

    setErrors({
      name: nameError,
      phone: phoneError,
      message: messageError
    });

    if (!nameError && !phoneError && !messageError) {
      console.log('Form submitted:', formData);
      alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
      setFormData({ name: '', phone: '', message: '' });
    }
  };

  return (
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
                      <a href="https://yandex.ru/profile/140440878977?lang=ru" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        г. Альметьевск, ул. Чехова, 20
                      </a>
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
                      <a href="tel:+79961210555" className="hover:text-primary transition-colors">
                        +7 996 121 05 55
                      </a>
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
                      Пн — Пт: 09:00–18:00<br />
                      Сб — Вс: 10:00–16:00
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Messengers */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2">Напишите нам</CardTitle>
                    <CardDescription className="text-base flex gap-4">
                      <a href="https://t.me/+79961210555" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Icon name="Send" size={16} />
                        Telegram
                      </a>
                      <a href="https://wa.me/79961210555" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Icon name="MessageCircle" size={16} />
                        WhatsApp
                      </a>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Map */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Map" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2">Найти нас на карте</CardTitle>
                    <CardDescription className="text-base flex gap-4">
                      <a href="https://yandex.ru/profile/140440878977?lang=ru" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Icon name="Map" size={16} />
                        Яндекс Карты
                      </a>
                      <a href="https://go.2gis.com/XJyNv" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Icon name="MapPin" size={16} />
                        2GIS
                      </a>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
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
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    required
                    className={`mt-2 ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    required
                    className={`mt-2 ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message" className="text-base">Сообщение *</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите, чем мы можем вам помочь..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    required
                    rows={5}
                    className={`mt-2 ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
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
  );
};

export default ContactsSection;