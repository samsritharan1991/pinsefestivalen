// For å legge til et nytt språk: legg til koden her (f.eks. "de"),
// og oppdater translations under med en ny nøkkel og full oversettelsesblokk.
// Legg også til språkets visningsnavn i lang-objektet for alle språk.
export const locales = ["no", "en", "ta"] as const;
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
    },
  },
} as const;

export type TranslationKey = keyof (typeof translations)[Locale];

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.no;
}
