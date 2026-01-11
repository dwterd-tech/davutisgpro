
export type HazardClass = 'AZ_TEHLIKELI' | 'TEHLIKELI' | 'COK_TEHLIKELI';

// Rol Tanımları - Sistemin Anayasasına Uygun
export type Role = 'ADMIN' | 'SPECIALIST' | 'DOCTOR' | 'OPERATOR' | 'VIEWER' | 'PERSONNEL'; 

export type UserStatus = 'ACTIVE' | 'PENDING';

// Genişletilebilir Kayıt Türleri
export type RecordTypeKey = 'ISG_TRAINING' | 'HEALTH_CHECK';

export type RecordStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export type DocumentType = 'SERTIFIKA' | 'SAGLIK_RAPORU' | 'KIMLIK' | 'SOZLESME' | 'UYGUNSUZLUK' | 'DIGER';

export interface User {
  id: string;
  username: string;
  password?: string; 
  name: string;
  role: Role;
  status: UserStatus;
  tcNumber?: string;
  jobTitle?: string;
  workplaceName?: string;
  hazardClass?: HazardClass;
  phone?: string;
  isAccessEnabled?: boolean; // Uzman ve Hekimler için veri görme ana yetkisi
}

export interface UnitAssignment {
  userId: string;
  workplaceName: string;
}

export interface Employee {
  id: string;
  tcNumber: string; 
  registrationNumber: string; // Sicil No eklendi
  fullName: string;
  birthDate: string;
  jobTitle: string;
  workplaceName: string;
  phone: string;
  hazardClass: HazardClass;
  isActive: boolean; 
}

export interface EmployeeDocument {
  id: string;
  employeeId: string;
  name: string;
  type: DocumentType;
  fileData: string; // Base64 encoded PDF or Image
  uploadDate: string;
  uploadedBy: string;
  description?: string; // Özellikle uygunsuzluklar için
}

export interface SharedForm {
  id: string;
  name: string;
  category: string;
  fileData: string; // Base64 PDF
  uploadDate: string;
  uploadedBy: string;
}

export interface UnitSetting {
  workplaceName: string;
  isRestricted: boolean;
}

export interface ISGRecord {
  id: string;
  employeeId: string;
  type: RecordTypeKey;
  date: string; 
  nextDueDate: string; 
  performer: string; 
  fileName?: string;
  status: RecordStatus;
  createdBy: string; 
  createdAt: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  details: string;
  timestamp: string;
}

export interface DashboardStats {
  totalPersonnel: number;
  pendingApprovals: number;
  pendingUserApprovals: number;
  riskRed: number; 
  riskYellow: number; 
  riskGreen: number; 
}

export interface RecordConfig {
  key: RecordTypeKey;
  label: string;
  authorizedRole: Role; 
  periodYears: {
    AZ_TEHLIKELI: number;
    TEHLIKELI: number;
    COK_TEHLIKELI: number;
  };
}
