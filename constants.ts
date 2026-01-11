
import { HazardClass, RecordConfig, RecordTypeKey, Role } from "./types";

// GENİŞLETİLEBİLİR KAYIT YAPISI (Madde 5 ve 14)
export const RECORD_CONFIGS: Record<RecordTypeKey, RecordConfig> = {
  'ISG_TRAINING': {
    key: 'ISG_TRAINING',
    label: 'İSG Eğitimi',
    authorizedRole: 'SPECIALIST',
    periodYears: {
      AZ_TEHLIKELI: 3,   // GÜNCEL MEVZUAT: 3 Yıl (36 Ay)
      TEHLIKELI: 2,      // GÜNCEL MEVZUAT: 2 Yıl (24 Ay)
      COK_TEHLIKELI: 1   // GÜNCEL MEVZUAT: 1 Yıl (12 Ay)
    }
  },
  'HEALTH_CHECK': {
    key: 'HEALTH_CHECK',
    label: 'Ek-2 (Sağlık)',
    authorizedRole: 'DOCTOR',
    periodYears: {
      AZ_TEHLIKELI: 5,   // 5 Yıl (60 Ay)
      TEHLIKELI: 3,      // 3 Yıl (36 Ay)
      COK_TEHLIKELI: 1   // 1 Yıl (12 Ay)
    }
  }
};

export const HAZARD_LABELS: Record<HazardClass, string> = {
  'AZ_TEHLIKELI': 'Az Tehlikeli',
  'TEHLIKELI': 'Tehlikeli',
  'COK_TEHLIKELI': 'Çok Tehlikeli'
};

export const HAZARD_COLORS: Record<HazardClass, string> = {
  'AZ_TEHLIKELI': 'text-green-700 bg-green-50 border-green-200',
  'TEHLIKELI': 'text-yellow-700 bg-yellow-50 border-yellow-200',
  'COK_TEHLIKELI': 'text-red-700 bg-red-50 border-red-200'
};

export const ROLE_LABELS: Record<Role, string> = {
  'ADMIN': 'Sistem Yöneticisi (Admin)',
  'SPECIALIST': 'İSG Uzmanı',
  'DOCTOR': 'İşyeri Hekimi',
  'OPERATOR': 'Operatör',
  'VIEWER': 'Görüntüleyici',
  'PERSONNEL': 'Personel'
};

// Excel Şablon Başlıkları (Kullanıcının İstediği Özel Sıralama)
export const EXCEL_HEADERS = [
  "ADI SOYADI",
  "TC KİMLİK NO",
  "DOĞUM TARİHİ",
  "GÖREVİ",
  "İŞ YERİ ADI",
  "CEP TELEFONU",
  "TEHLİKE SINIFI",
  "EĞİTİM BİTİŞ TARİHİ",
  "EK-2 BİTİŞ TARİHİ",
  "SİCİL NO" // 10. Sütun olarak eklendi
];
