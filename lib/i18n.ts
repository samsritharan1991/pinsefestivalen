// For å legge til et nytt språk: legg til koden her (f.eks. "de"),
// og oppdater translations under med en ny nøkkel og full oversettelsesblokk.
// Legg også til språkets visningsnavn i lang-objektet for alle språk.
export const locales = ["no", "en", "ta", "ar", "so", "ur", "pl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "no";

export const translations = {
  no: {
    home: {
      title: "Pinsefestivalen 2026",
      menuService: "Gudstjenesten",
      menuFestival: "Festivalen",
    },
    gudstjeneste: {
      title: "Gudstjeneste - Pinsefestivalen",
    },
    song: {
      prev: "← Forrige",
      next: "Neste →",
      backToService: "← Til gudstjeneste oversikten",
    },
    festivalen: {
      title: "Festivalen",
      placeholder: "Informasjon om Pinsefestivalen kommer her.",
    },
    topbar: {
      title: "Pinsefestivalen 2026",
      languageLabel: "Språk",
      themeLabel: "Tema",
      dark: "Mørk",
      light: "Lys",
      wakeNotSupported: "Skjerm-våken støttes ikke i denne nettleseren.",
    },
    lang: {
      no: "Norsk",
      en: "English",
      ta: "தமிழ்",
      ar: "العربية",
      so: "Soomaali",
      ur: "اردو",
      pl: "Polski",
    },
  },
  en: {
    home: {
      title: "Pinsefestivalen 2026 (Pentecost Festival)",
      menuService: "The Service",
      menuFestival: "The Festival",
    },
    gudstjeneste: {
      title: "Service - Pinsefestival",
    },
    song: {
      prev: "← Previous",
      next: "Next →",
      backToService: "← Back to service overview",
    },
    festivalen: {
      title: "The Festival",
      placeholder: "Information about Pinsefestival will appear here.",
    },
    topbar: {
      title: "Pinsefestival 2026",
      languageLabel: "Language",
      themeLabel: "Theme",
      holdAwake: "Keep awake",
      turnOffAwake: "Turn off awake",
      dark: "Dark",
      light: "Light",
      wakeNotSupported: "Screen wake lock is not supported in this browser.",
    },
    lang: {
      no: "Norsk",
      en: "English",
      ta: "தமிழ்",
      ar: "العربية",
      so: "Soomaali",
      ur: "اردو",
      pl: "Polski",
    },
  },
  ta: {
    home: {
      title: "பெந்தெகொஸ்த் திருவிழா 2026 (Pinsefestival)",
      menuService: "சபை வழிபாடு",
      menuFestival: "திருவிழா",
    },
    gudstjeneste: {
      title: "சபை வழிபாடு - பெந்தெகொஸ்த் திருவிழா",
    },
    song: {
      prev: "← முந்தைய",
      next: "அடுத்து →",
      backToService: "← சேவை மீண்டும்",
    },
    festivalen: {
      title: "திருவிழா",
      placeholder: "பெந்தெகொஸ்த் திருவிழா பற்றிய தகவல் இங்கு வரும்.",
    },
    topbar: {
      title: "பெந்தெகொஸ்த் திருவிழா 2026",
      languageLabel: "மொழி",
      themeLabel: "தீம்",
      holdAwake: "திரையை விழித்திரு",
      turnOffAwake: "விழிப்பு நிறுத்து",
      dark: "இருள்",
      light: "வெளிச்சம்",
      wakeNotSupported: "இந்த உலாவியில் திரை விழிப்பு ஆதரிக்கப்படவில்லை.",
    },
    lang: {
      no: "நார்வீஜியன்",
      en: "ஆங்கிலம்",
      ta: "தமிழ்",
      ar: "அரபு",
      so: "சோமாலி",
      ur: "உருது",
      pl: "போலிஷ்",
    },
  },
  ar: {
    home: {
      title: "مهرجان العنصرة 2026",
      menuService: "الخدمة",
      menuFestival: "المهرجان",
    },
    gudstjeneste: {
      title: "الخدمة - مهرجان العنصرة",
    },
    song: {
      prev: "← السابق",
      next: "التالي →",
      backToService: "← العودة إلى نظرة الخدمة",
    },
    festivalen: {
      title: "المهرجان",
      placeholder: "معلومات عن مهرجان العنصرة ستظهر هنا.",
    },
    topbar: {
      title: "مهرجان العنصرة 2026",
      languageLabel: "اللغة",
      themeLabel: "المظهر",
      holdAwake: "إبقاء الشاشة مفتوحة",
      turnOffAwake: "إيقاف إبقاء الشاشة",
      dark: "داكن",
      light: "فاتح",
      wakeNotSupported: "قفل إبقاء الشاشة غير مدعوم في هذا المتصفح.",
    },
    lang: {
      no: "النرويجية",
      en: "الإنجليزية",
      ta: "التاميلية",
      ar: "العربية",
      so: "الصومالية",
      ur: "الأردية",
      pl: "البولندية",
    },
  },
  so: {
    home: {
      title: "Xafladda Pentikost 2026",
      menuService: "Isha",
      menuFestival: "Xafladda",
    },
    gudstjeneste: {
      title: "Isha - Xafladda Pentikost",
    },
    song: {
      prev: "← Ka hor",
      next: "Xiga →",
      backToService: "← Ku noqo isha",
    },
    festivalen: {
      title: "Xafladda",
      placeholder: "Macluumaadka Xafladda Pentikost waxaa halkan ku soo baxaya.",
    },
    topbar: {
      title: "Xafladda Pentikost 2026",
      languageLabel: "Luqadda",
      themeLabel: "Muuqaalka",
      holdAwake: "Si screenka u socdo",
      turnOffAwake: "Ka bood socodka screenka",
      dark: "Madoow",
      light: "Iftiinka",
      wakeNotSupported: "Screen wake lock ma taageero browserkan.",
    },
    lang: {
      no: "Noorweji",
      en: "Ingiriisi",
      ta: "Tamil",
      ar: "Carabi",
      so: "Soomaali",
      ur: "Urdu",
      pl: "Boolish",
    },
  },
  ur: {
    home: {
      title: "پنتکوست فیسٹیول 2026",
      menuService: "عبادت",
      menuFestival: "فیسٹیول",
    },
    gudstjeneste: {
      title: "عبادت - پنتکوست فیسٹیول",
    },
    song: {
      prev: "← پچھلا",
      next: "اگلا →",
      backToService: "← عبادت کی فہرست پر واپس",
    },
    festivalen: {
      title: "فیسٹیول",
      placeholder: "پنتکوست فیسٹیول کے بارے میں معلومات یہاں آئیں گی۔",
    },
    topbar: {
      title: "پنتکوست فیسٹیول 2026",
      languageLabel: "زبان",
      themeLabel: "تھیم",
      holdAwake: "اسکرین روشن رکھیں",
      turnOffAwake: "روشن بند کریں",
      dark: "تاریک",
      light: "روشن",
      wakeNotSupported: "اس براؤزر میں اسکرین ویک لاک سپورٹ نہیں ہے۔",
    },
    lang: {
      no: "نارویجن",
      en: "انگریزی",
      ta: "تامل",
      ar: "عربی",
      so: "صومالی",
      ur: "اردو",
      pl: "پولش",
    },
  },
  pl: {
    home: {
      title: "Festival Pięćdziesiątnicy 2026 (Pinsefestivalen)",
      menuService: "Nabożeństwo",
      menuFestival: "Festival",
    },
    gudstjeneste: {
      title: "Nabożeństwo - Festival Pięćdziesiątnicy",
    },
    song: {
      prev: "← Poprzedni",
      next: "Następny →",
      backToService: "← Powrót do nabożeństwa",
    },
    festivalen: {
      title: "Festival",
      placeholder: "Informacje o Festiwalu Pięćdziesiątnicy pojawią się tutaj.",
    },
    topbar: {
      title: "Festival Pięćdziesiątnicy 2026",
      languageLabel: "Język",
      themeLabel: "Motyw",
      holdAwake: "Trzymaj ekran włączony",
      turnOffAwake: "Wyłącz podświetlenie",
      dark: "Ciemny",
      light: "Jasny",
      wakeNotSupported: "Blokada czuwania ekranu nie jest obsługiwana w tej przeglądarce.",
    },
    lang: {
      no: "Norweski",
      en: "Angielski",
      ta: "Tamilski",
      ar: "Arabski",
      so: "Somalijski",
      ur: "Urdu",
      pl: "Polski",
    },
  },
} as const;

export type TranslationKey = keyof (typeof translations)[Locale];

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.no;
}
