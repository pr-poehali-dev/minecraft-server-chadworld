import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'news', 'team', 'rules', 'wiki'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const news = [
    {
      id: 1,
      title: 'Обновление 2.0 уже здесь!',
      date: '25 октября 2024',
      description: 'Добавлены новые биомы, мобы и система кланов. Исследуйте расширенный мир!',
      badge: 'Важное'
    },
    {
      id: 2,
      title: 'Хэллоуин ивент стартовал',
      date: '20 октября 2024',
      description: 'Участвуйте в жутком ивенте и получайте эксклюзивные награды до 1 ноября.',
      badge: 'Ивент'
    },
    {
      id: 3,
      title: 'Новая экономическая система',
      date: '15 октября 2024',
      description: 'Появились новые способы заработка и магазин игроков для торговли.',
      badge: 'Новое'
    }
  ];

  const team = [
    { name: 'ChadAdmin', role: 'Владелец', icon: '👑' },
    { name: 'MegaModer', role: 'Главный модератор', icon: '⚔️' },
    { name: 'BuilderPro', role: 'Строитель', icon: '🏗️' },
    { name: 'EventMaster', role: 'Ивент-менеджер', icon: '🎪' }
  ];

  const rules = [
    { title: 'Уважение к игрокам', description: 'Запрещены оскорбления, травля и неуважительное поведение' },
    { title: 'Честная игра', description: 'Читы, баги и эксплоиты строго запрещены' },
    { title: 'Без гриферства', description: 'Ломать чужие постройки и красть предметы нельзя' },
    { title: 'Адекватный чат', description: 'Спам, реклама и мат в чате запрещены' },
    { title: 'Один аккаунт', description: 'Мультиаккаунты и обход банов недопустимы' }
  ];

  const wikiSections = [
    {
      title: 'Начало игры',
      content: 'Зайдя на сервер, вы появитесь в спавне. Используйте /spawn для возврата. Получите стартовый набор командой /kit starter.'
    },
    {
      title: 'Экономика',
      content: 'Зарабатывайте монеты за добычу ресурсов, выполнение квестов и продажу предметов. Используйте /balance для проверки баланса.'
    },
    {
      title: 'Кланы',
      content: 'Создавайте кланы с друзьями командой /clan create. Защищайте территорию и участвуйте в клановых войнах за призы.'
    },
    {
      title: 'Приватная территория',
      content: 'Защитите свой дом командой /region claim. Добавляйте друзей через /region add <ник> для совместной игры.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-2xl">
              ⛏️
            </div>
            <span className="text-2xl font-bold">ChadWorld</span>
          </div>
          
          <div className="hidden md:flex gap-6">
            {['Главная', 'Новости', 'Команда', 'Правила', 'Вики'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(['home', 'news', 'team', 'rules', 'wiki'][index])}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === ['home', 'news', 'team', 'rules', 'wiki'][index] ? 'text-primary' : 'text-zinc-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-black font-semibold">
            Купить проходку
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1">
              🎮 Онлайн: 247 игроков
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              ChadWorld
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Лучший Minecraft сервер с уникальными механиками, дружным комьюнити и эпичными ивентами
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-8 hover-scale">
                <Icon name="Gamepad2" className="mr-2" size={20} />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-lg px-8 hover-scale">
                <Icon name="Users" className="mr-2" size={20} />
                Discord сообщество
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: 'Zap', title: 'Без лагов', desc: 'Мощные сервера' },
              { icon: 'Shield', title: 'Защита', desc: 'Античит и модерация' },
              { icon: 'Trophy', title: 'Ивенты', desc: 'Еженедельные турниры' }
            ].map((feature, i) => (
              <Card key={i} className="bg-zinc-900/50 border-zinc-800 hover:border-primary/50 transition-all hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <Icon name={feature.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-center">{feature.title}</CardTitle>
                  <CardDescription className="text-center">{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-zinc-950/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Icon name="Newspaper" className="inline mr-3 text-primary" size={36} />
            Последние новости
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item) => (
              <Card key={item.id} className="bg-zinc-900/70 border-zinc-800 hover:border-primary/50 transition-all hover-scale">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30">{item.badge}</Badge>
                    <span className="text-xs text-zinc-500">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Icon name="Crown" className="inline mr-3 text-primary" size={36} />
            Наша команда
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <Card key={i} className="bg-zinc-900/70 border-zinc-800 hover:border-primary/50 transition-all hover-scale text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.icon}</div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-zinc-950/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Icon name="ScrollText" className="inline mr-3 text-primary" size={36} />
            Правила сервера
          </h2>
          <div className="space-y-4">
            {rules.map((rule, i) => (
              <Card key={i} className="bg-zinc-900/70 border-zinc-800 hover:border-primary/30 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold">
                      {i + 1}
                    </span>
                    {rule.title}
                  </CardTitle>
                  <CardDescription className="ml-11">{rule.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="wiki" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Icon name="Book" className="inline mr-3 text-primary" size={36} />
            База знаний
          </h2>
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-zinc-900/70 mb-8">
              {wikiSections.map((section, i) => (
                <TabsTrigger key={i} value={String(i)} className="data-[state=active]:bg-primary data-[state=active]:text-black">
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {wikiSections.map((section, i) => (
              <TabsContent key={i} value={String(i)}>
                <Card className="bg-zinc-900/70 border-zinc-800">
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400 leading-relaxed">{section.content}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-t from-black to-zinc-950">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Готов начать приключение?</h2>
          <p className="text-xl text-zinc-400 mb-8">
            Присоединяйся к ChadWorld и стань частью лучшего игрового сообщества
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold text-lg px-12 hover-scale">
            <Icon name="ShoppingCart" className="mr-2" size={20} />
            Купить проходку сейчас
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-zinc-800">
        <div className="container mx-auto text-center text-zinc-500">
          <p>© 2024 ChadWorld. Все права защищены.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-primary transition-colors">Discord</a>
            <a href="#" className="hover:text-primary transition-colors">VK</a>
            <a href="#" className="hover:text-primary transition-colors">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
