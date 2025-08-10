import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    common: {
      "loading": "Loading...",
      "error": "Error",
      "success": "Success",
      "cancel": "Cancel",
      "save": "Save",
      "edit": "Edit",
      "delete": "Delete",
      "confirm": "Confirm",
      "welcome": "Welcome",
      "home": "Home",
      "about": "About",
      "services": "Services",
      "portfolio": "Portfolio",
      "blog": "Blog",
      "contact": "Contact",
      "language": "Language",
      "theme": "Theme",
      "footerDescription": "Passionate developer from Munich who creates modern web applications using the latest technologies and proven practices.",
      "location": "Thuringia, Germany",
      "remoteAvailable": "Available for remote work",
      "quickLinks": "Quick Links",
      "builtWith": "Built with",
      "and": "and",
      "inMunich": "in Munich"
    },
    navigation: {
      "skills": "Skills",
      "experience": "Experience", 
      "projects": "Projects",
      "contact": "Contact",
      "contact_me": "Contact Me",
      "open_menu": "Open Menu",
      "toggle_theme": "Toggle Theme",
      "theme": {
        "light": "Light",
        "dark": "Dark", 
        "black": "Black",
        "mode": "Mode"
      }
    },
    hero: {
      "greeting": "Hello, I'm",
      "roles": {
        "web_developer": "Web Developer in Training",
        "frontend_specialist": "Frontend Specialist",
        "backend_developer": "Backend Developer", 
        "fullstack_enthusiast": "Full-Stack Enthusiast",
        "ui_ux_lover": "UI/UX Lover"
      },
      "description": "Passionate apprentice with 2 years of experience in modern web technologies. Specialized in React, PHP and beautiful design.",
      "location": "Germany",
      "availability": "Available for projects",
      "passion": "Code with passion",
      "cta": {
        "contact": "Contact Me",
        "download_cv": "Download Resume"
      },
      "scroll_down": "Learn more"
    },
    skills: {
      "title": "My Skills",
      "description": "Overview of my technical skills and experience. From Frontend to DevOps - here are the tools I work with.",
      "categories": "Categories",
      "all": "All",
      "frontend": "Frontend",
      "backend": "Backend", 
      "databases": "Databases",
      "devops": "DevOps",
      "mobile": "Mobile",
      "design": "Design",
      "sort_by": "Sort by:",
      "skill_level": "Skill Level",
      "experience": "Experience",
      "projects": "Projects",
      "years": "Years",
      "last_used": "Last Used",
      "show_more": "Show More",
      "show_less": "Show Less",
      "favorite_technologies": "Favorite Technologies",
      "technologies": "Technologies",
      "years_experience": "Years Experience",
      "average_level": "Average Level"
    },
    experience: {
      "title": "Work Experience",
      "description": "My professional journey and key achievements in development.",
      "present": "Present",
      "skills_learned": "Skills Learned",
      "achievements": "Achievements",
      "technologies": "Technologies",
      "location": "Location",
      "duration": "Duration",
      "company": "Company",
      "position": "Position",
      "years": "Years",
      "filters": {
        "all": "All",
        "experience": "Experience",
        "education": "Education"
      }
    },
    projects: {
      "title": "My Projects",
      "description": "A collection of projects I've created, showcasing my skills in web development and design.",
      "view_live": "View Live",
      "view_code": "View Code",
      "technologies_used": "Technologies Used",
      "project_type": "Project Type",
      "status": "Status",
      "completed": "Completed",
      "in_progress": "In Progress",
      "maintenance": "Maintenance",
      "featured": "Featured",
      "all_projects": "All Projects",
      "filter_by": "Filter by",
      "sort_by": "Sort by",
      "newest": "Newest",
      "oldest": "Oldest",
      "filters": {
        "all": "All",
        "other": "Other"
      },
      "most_popular": "Most Popular",
      "project_details": "Project Details",
      "overview": "Overview",
      "features": "Features",
      "challenges": "Challenges",
      "learnings": "Learnings"
    },
    contact: {
      "title": "Contact Me",
      "description": "Ready to collaborate? Get in touch and let's discuss how I can help bring your ideas to life.",
      "get_in_touch": "Get in Touch",
      "send_message": "Send Message",
      "form": {
        "name": "Name",
        "email": "Email",
        "subject": "Subject",
        "message": "Message",
        "send": "Send",
        "sending": "Sending...",
        "success": "Message sent successfully!",
        "error": "Error sending message. Please try again.",
        "name_required": "Name is required",
        "email_required": "Email is required",
        "email_invalid": "Invalid email format",
        "message_required": "Message is required"
      },
      "contact_info": {
        "email": "Email",
        "phone": "Phone",
        "location": "Location",
        "availability": "Availability"
      },
      "social": {
        "follow_me": "Follow Me",
        "github": "GitHub",
        "linkedin": "LinkedIn",
        "twitter": "Twitter",
        "instagram": "Instagram"
      },
      "availability": {
        "status": "Available for projects",
        "response_time": "Usually responds within 24 hours",
        "open_to": "Open to freelance and full-time opportunities"
      }
    }
  },
  de: {
    common: {
      "loading": "Laden...",
      "error": "Fehler",
      "success": "Erfolgreich",
      "cancel": "Abbrechen",
      "save": "Speichern",
      "edit": "Bearbeiten",
      "delete": "Löschen",
      "confirm": "Bestätigen",
      "welcome": "Willkommen",
      "home": "Startseite",
      "about": "Über",
      "services": "Dienste",
      "portfolio": "Portfolio",
      "blog": "Blog",
      "contact": "Kontakt",
      "language": "Sprache",
      "theme": "Design",
      "footerDescription": "Leidenschaftlicher Entwickler aus München, der moderne Webanwendungen erstellt und dabei neueste Technologien und bewährte Praktiken einsetzt.",
      "location": "Thüringen, Deutschland",
      "remoteAvailable": "Verfügbar für Remote-Arbeit",
      "quickLinks": "Quick Links",
      "builtWith": "Erstellt mit",
      "and": "und",
      "inMunich": "in München"
    },
    navigation: {
      "skills": "Fähigkeiten",
      "experience": "Erfahrung",
      "projects": "Projekte", 
      "contact": "Kontakt",
      "contact_me": "Kontakt aufnehmen",
      "open_menu": "Menü öffnen",
      "toggle_theme": "Design wechseln",
      "theme": {
        "light": "Hell",
        "dark": "Dunkel",
        "black": "Schwarz", 
        "mode": "Modus"
      }
    },
    hero: {
      "greeting": "Hallo, ich bin",
      "roles": {
        "web_developer": "Webentwickler in Ausbildung",
        "frontend_specialist": "Frontend Spezialist",
        "backend_developer": "Backend Entwickler",
        "fullstack_enthusiast": "Full-Stack Enthusiast", 
        "ui_ux_lover": "UI/UX Liebhaber"
      },
      "description": "Leidenschaftlicher Azubi mit 2 Jahren Erfahrung in modernen Webtechnologien. Spezialisiert auf React, PHP und schönes Design.",
      "location": "Deutschland",
      "availability": "Verfügbar für Projekte",
      "passion": "Code mit Leidenschaft",
      "cta": {
        "contact": "Kontakt aufnehmen",
        "download_cv": "Lebenslauf herunterladen"
      },
      "scroll_down": "Mehr erfahren"
    },
    skills: {
      "title": "Meine Fähigkeiten",
      "description": "Überblick über meine technischen Fähigkeiten und Erfahrungen. Von Frontend bis DevOps - hier sind die Tools, mit denen ich arbeite.",
      "categories": "Kategorien",
      "all": "Alle", 
      "frontend": "Frontend",
      "backend": "Backend",
      "databases": "Datenbanken",
      "devops": "DevOps",
      "mobile": "Mobile",
      "design": "Design",
      "sort_by": "Sortieren nach:",
      "skill_level": "Fähigkeitslevel",
      "experience": "Erfahrung",
      "projects": "Projekte",
      "years": "Jahre",
      "last_used": "Zuletzt verwendet",
      "show_more": "Mehr anzeigen",
      "show_less": "Weniger anzeigen",
      "favorite_technologies": "Lieblings-Technologien",
      "technologies": "Technologien",
      "years_experience": "Jahre Erfahrung",
      "average_level": "Durchschnittslevel"
    },
    experience: {
      "title": "Berufserfahrung",
      "description": "Mein beruflicher Werdegang und wichtige Erfolge in der Entwicklung.",
      "present": "Heute",
      "skills_learned": "Erlernte Fähigkeiten",
      "achievements": "Erfolge",
      "technologies": "Technologien",
      "location": "Standort",
      "duration": "Dauer",
      "company": "Unternehmen",
      "position": "Position",
      "years": "Jahre",
      "filters": {
        "all": "Alle",
        "experience": "Erfahrung",
        "education": "Bildung"
      }
    },
    projects: {
      "title": "Meine Projekte",
      "description": "Eine Sammlung von Projekten, die ich erstellt habe und die meine Fähigkeiten in der Webentwicklung und im Design zeigen.",
      "view_live": "Live ansehen",
      "view_code": "Code ansehen",
      "technologies_used": "Verwendete Technologien",
      "project_type": "Projekttyp",
      "status": "Status",
      "completed": "Abgeschlossen",
      "in_progress": "In Bearbeitung",
      "maintenance": "Wartung",
      "featured": "Hervorgehoben",
      "all_projects": "Alle Projekte",
      "filter_by": "Filtern nach",
      "sort_by": "Sortieren nach",
      "newest": "Neueste",
      "oldest": "Älteste",
      "most_popular": "Beliebteste",
      "project_details": "Projektdetails",
      "overview": "Übersicht",
      "features": "Features",
      "challenges": "Herausforderungen",
      "learnings": "Erkenntnisse",
      "filters": {
        "all": "Alle",
        "other": "Sonstige"
      }
    },
    contact: {
      "title": "Kontakt",
      "description": "Bereit für eine Zusammenarbeit? Nehmen Sie Kontakt auf und lassen Sie uns besprechen, wie ich Ihnen helfen kann, Ihre Ideen zum Leben zu erwecken.",
      "get_in_touch": "Kontakt aufnehmen",
      "send_message": "Nachricht senden",
      "form": {
        "name": "Name",
        "email": "E-Mail",
        "subject": "Betreff",
        "message": "Nachricht",
        "send": "Senden",
        "sending": "Wird gesendet...",
        "success": "Nachricht erfolgreich gesendet!",
        "error": "Fehler beim Senden. Bitte versuchen Sie es erneut.",
        "name_required": "Name ist erforderlich",
        "email_required": "E-Mail ist erforderlich",
        "email_invalid": "Ungültiges E-Mail-Format",
        "message_required": "Nachricht ist erforderlich"
      },
      "contact_info": {
        "email": "E-Mail",
        "phone": "Telefon",
        "location": "Standort",
        "availability": "Verfügbarkeit"
      },
      "social": {
        "follow_me": "Folgen Sie mir",
        "github": "GitHub",
        "linkedin": "LinkedIn",
        "twitter": "Twitter",
        "instagram": "Instagram"
      },
      "availability": {
        "status": "Verfügbar für Projekte",
        "response_time": "Antwortet normalerweise innerhalb von 24 Stunden",
        "open_to": "Offen für Freelance und Vollzeitstellen"
      }
    }
  },
  ua: {
    common: {
      "loading": "Завантаження...",
      "error": "Помилка",
      "success": "Успішно",
      "cancel": "Скасувати",
      "save": "Зберегти",
      "edit": "Редагувати",
      "delete": "Видалити",
      "confirm": "Підтвердити",
      "welcome": "Ласкаво просимо",
      "home": "Головна",
      "about": "Про мене",
      "services": "Послуги",
      "portfolio": "Портфоліо",
      "blog": "Блог",
      "contact": "Контакт",
      "language": "Мова",
      "theme": "Тема",
      "footerDescription": "Пристрасний розробник з Мюнхена, який створює сучасні веб-додатки, використовуючи найновіші технології та перевірені практики.",
      "location": "Тюрингія, Німеччина",
      "remoteAvailable": "Доступний для віддаленої роботи",
      "quickLinks": "Швидкі посилання",
      "builtWith": "Створено з",
      "and": "та",
      "inMunich": "в Мюнхені"
    },
    navigation: {
      "about": "Про мене",
      "skills": "Навички",
      "experience": "Досвід",
      "projects": "Проекти",
      "contact": "Контакти",
      "contact_me": "Зв'яжіться зі мною",
      "open_menu": "Відкрити меню",
      "toggle_theme": "Змінити тему",
      "theme": {
        "light": "Світла",
        "dark": "Темна",
        "black": "Чорна",
        "mode": "Режим"
      }
    },
    hero: {
      "greeting": "Привіт, я",
      "roles": {
        "web_developer": "Веб-розробник в навчанні",
        "frontend_specialist": "Frontend спеціаліст",
        "backend_developer": "Backend розробник",
        "fullstack_enthusiast": "Full-Stack ентузіаст",
        "ui_ux_lover": "UI/UX любитель"
      },
      "description": "Пристрасний учень з 2-річним досвідом у сучасних веб-технологіях. Спеціалізуюся на React, PHP та красивому дизайні.",
      "location": "Німеччина",
      "availability": "Доступний для проектів",
      "passion": "Код з пристрастю",
      "cta": {
        "contact": "Зв'яжіться зі мною",
        "download_cv": "Завантажити резюме"
      },
      "scroll_down": "Дізнатися більше"
    },
    skills: {
      "title": "Мої навички",
      "description": "Огляд моїх технічних навичок та досвіду. Від Frontend до DevOps – ось інструменти, з якими я працюю.",
      "categories": "Категорії",
      "all": "Всі",
      "frontend": "Frontend",
      "backend": "Backend",
      "databases": "Бази даних",
      "devops": "DevOps",
      "mobile": "Мобільні",
      "design": "Дизайн",
      "sort_by": "Сортувати за:",
      "skill_level": "Рівень навичок",
      "experience": "Досвід",
      "projects": "Проекти",
      "years": "Роки",
      "last_used": "Останнє використання",
      "show_more": "Показати більше",
      "show_less": "Показати менше",
      "favorite_technologies": "Улюблені технології",
      "technologies": "Технології",
      "years_experience": "Роки досвіду",
      "average_level": "Середній рівень"
    },
    experience: {
      "title": "Досвід роботи",
      "description": "Мій професійний шлях та ключові досягнення у сфері розробки.",
      "present": "зараз",
      "skills_learned": "Вивчені навички",
      "achievements": "Досягнення",
      "technologies": "Технології",
      "location": "Місцезнаходження",
      "duration": "Тривалість",
      "company": "Компанія",
      "position": "Посада",
      "years": "Роки",
      "filters": {
        "all": "Усі",
        "experience": "Досвід",
        "education": "Освіта"
      }
    },
    projects: {
      "title": "Мої проекти",
      "description": "Колекція проектів, які я створив, демонструючи мої навички у веб-розробці та дизайні.",
      "view_live": "Переглянути вживу",
      "view_code": "Переглянути код",
      "technologies_used": "Використані технології",
      "project_type": "Тип проекту",
      "status": "Статус",
      "completed": "Завершено",
      "in_progress": "В процесі",
      "maintenance": "Підтримка",
      "featured": "Рекомендовані",
      "all_projects": "Всі проекти",
      "filter_by": "Фільтрувати за",
      "sort_by": "Сортувати за",
      "newest": "Найновіші",
      "oldest": "Найстаріші",
      "most_popular": "Найпопулярніші",
      "project_details": "Деталі проекту",
      "overview": "Огляд",
      "features": "Функції",
      "challenges": "Виклики",
      "learnings": "Навчання",
      "filters": {
        "all": "Усі",
        "other": "Інші"
      }
    },
    contact: {
      "title": "Зв'яжіться зі мною",
      "description": "Готовий співпрацювати? Зв'яжіться зі мною, і давайте обговоримо, як я можу допомогти втілити ваші ідеї в життя.",
      "get_in_touch": "Зв'яжіться зі мною",
      "send_message": "Надіслати повідомлення",
      "form": {
        "name": "Ім'я",
        "email": "Електронна пошта",
        "subject": "Тема",
        "message": "Повідомлення",
        "send": "Надіслати",
        "sending": "Надсилання...",
        "success": "Повідомлення надіслано успішно!",
        "error": "Помилка при надсиланні. Спробуйте ще раз.",
        "name_required": "Ім'я обов'язкове",
        "email_required": "Електронна пошта обов'язкова",
        "email_invalid": "Неправильний формат електронної пошти",
        "message_required": "Повідомлення обов'язкове"
      },
      "contact_info": {
        "email": "Електронна пошта",
        "phone": "Телефон",
        "location": "Місцезнаходження",
        "availability": "Доступність"
      },
      "social": {
        "follow_me": "Слідкуйте за мною",
        "github": "GitHub",
        "linkedin": "LinkedIn",
        "twitter": "Twitter",
        "instagram": "Instagram"
      },
      "availability": {
        "status": "Доступний для проектів",
        "response_time": "Зазвичай відповідаю протягом 24 годин",
        "open_to": "Відкритий для фрілансу та повного робочого дня"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    // namespace configuration
    defaultNS: 'common',
    ns: ['common', 'navigation', 'hero', 'skills', 'experience', 'projects', 'contact'],
  });

export default i18n;
