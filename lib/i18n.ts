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
      menuOrganisations: "Medvirkende",
      menuKollekt: "Støtt Pinsefestivalen",
    },
    gudstjeneste: {
      title: "Gudstjeneste - Pinsefestivalen",
    },
    song: {
      prev: "← Forrige",
      next: "Neste →",
      backToService: "← Til gudstjeneste oversikten",
    },
    kollekt: {
      payWithVipps: "Betal med Vipps",
    },
    festivalen: {
      title: "Festivalen",
      placeholder: "Informasjon om Pinsefestivalen kommer her.",
    },
    topbar: {
      title: "Pinsefestivalen",
      languageLabel: "Språk",
      themeLabel: "Tema",
      dark: "Mørk",
      light: "Lys",
      wakeNotSupported: "Skjerm-våken støttes ikke i denne nettleseren.",
    },
    overlay: {
      title: "Pinsefestivalen er over for i år",
      message: "Vi er tilbake Pinsen 2027.",
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
      menuOrganisations: "Participants",
      menuKollekt: "Support Pinsefestivalen",
    },
    gudstjeneste: {
      title: "Service - Pinsefestival",
    },
    song: {
      prev: "← Previous",
      next: "Next →",
      backToService: "← Back to service overview",
    },
    kollekt: {
      payWithVipps: "Pay with Vipps",
    },
    festivalen: {
      title: "The Festival",
      placeholder: "Information about Pinsefestival will appear here.",
    },
    topbar: {
      title: "Pentecost Festival",
      languageLabel: "Language",
      themeLabel: "Theme",
      holdAwake: "Keep awake",
      turnOffAwake: "Turn off awake",
      dark: "Dark",
      light: "Light",
      wakeNotSupported: "Screen wake lock is not supported in this browser.",
    },
    overlay: {
      title: "Pinsefestivalen is over for this year",
      message: "We'll be back Pentecost 2027.",
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
      menuOrganisations: "பங்கேற்பாளர்கள்",
      menuKollekt: "Pinsefestival-க்கு ஆதரவு",
    },
    gudstjeneste: {
      title: "சபை வழிபாடு - பெந்தெகொஸ்த் திருவிழா",
    },
    song: {
      prev: "← முந்தைய",
      next: "அடுத்து →",
      backToService: "← திரும்பச் செல்",
    },
    kollekt: {
      payWithVipps: "Vipps மூலம் பணம் செலுத்தவும்",
    },
    festivalen: {
      title: "திருவிழா",
      placeholder: "பெந்தெகொஸ்த் திருவிழா பற்றிய தகவல் இங்கு வரும்.",
    },
    topbar: {
      title: "பெந்தெகொஸ்த் திருவிழா",
      languageLabel: "மொழி",
      themeLabel: "தீம்",
      holdAwake: "திரையை விழித்திரு",
      turnOffAwake: "விழிப்பு நிறுத்து",
      dark: "இருள்",
      light: "வெளிச்சம்",
      wakeNotSupported: "இந்த உலாவியில் திரை விழிப்பு ஆதரிக்கப்படவில்லை.",
    },
    overlay: {
      title: "இந்த ஆண்டிற்கான பெந்தெகொஸ்த் திருவிழா முடிந்துவிட்டது",
      message: "2027 பெந்தெகொஸ்தில் மீண்டும் சந்திப்போம்.",
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
      menuOrganisations: "المشاركون",
      menuKollekt: "ادعم مهرجان العنصرة",
    },
    gudstjeneste: {
      title: "الخدمة - مهرجان العنصرة",
    },
    song: {
      prev: "← السابق",
      next: "التالي →",
      backToService: "← العودة إلى نظرة الخدمة",
    },
    kollekt: {
      payWithVipps: "الدفع عبر Vipps",
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
    overlay: {
      title: "انتهى مهرجان العنصرة لهذا العام",
      message: "نعود في عيد العنصرة 2027.",
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
      menuOrganisations: "Ku qabsoowa",
      menuKollekt: "Taageer Xafladda Pentikost",
    },
    gudstjeneste: {
      title: "Isha - Xafladda Pentikost",
    },
    song: {
      prev: "← Ka hor",
      next: "Xiga →",
      backToService: "← Ku noqo isha",
    },
    kollekt: {
      payWithVipps: "Bixinta Vipps",
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
    overlay: {
      title: "Xafladda Pentikost way dhammaatay sanadkan",
      message: "Waxaan ku soo noqonaynaa Pentikost 2027.",
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
      menuOrganisations: "شرکاء",
      menuKollekt: "پنتکوست فیسٹیول کی حمایت کریں",
    },
    gudstjeneste: {
      title: "عبادت - پنتکوست فیسٹیول",
    },
    song: {
      prev: "← پچھلا",
      next: "اگلا →",
      backToService: "← عبادت کی فہرست پر واپس",
    },
    kollekt: {
      payWithVipps: "Vipps کے ساتھ ادائیگی",
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
    overlay: {
      title: "اس سال کا پنتکوست فیسٹیول ختم ہو گیا",
      message: "ہم 2027 کے پنتکوست میں واپس آئیں گے۔",
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
      menuOrganisations: "Uczestnicy",
      menuKollekt: "Wesprzyj Pinsefestivalen",
    },
    gudstjeneste: {
      title: "Nabożeństwo - Festival Pięćdziesiątnicy",
    },
    song: {
      prev: "← Poprzedni",
      next: "Następny →",
      backToService: "← Powrót do nabożeństwa",
    },
    kollekt: {
      payWithVipps: "Zapłać za pomocą Vipps",
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
    overlay: {
      title: "Festival Pięćdziesiątnicy zakończył się w tym roku",
      message: "Wracamy w Pięćdziesiątnicę 2027.",
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
