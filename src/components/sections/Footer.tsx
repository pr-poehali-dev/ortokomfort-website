const Footer = () => {
  return (
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
                <p className="text-sm text-gray-300">Ваш комфорт - наш приоритет</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Ваш надёжный партнёр в мире ортопедической продукции
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>+7 996 121 05 55</p>
              <p>г. Альметьевск, ул. Чехова, 20</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Режим работы</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Пн — Пт: 09:00–18:00</p>
              <p>Сб — Вс: 10:00–16:00</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 Ортокомфорт. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;