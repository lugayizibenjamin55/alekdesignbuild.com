
export interface Course {
  id: string;
  title: string;
  category: 'ArchiCAD' | 'Tekla' | 'Twinmotion';
  modules: number;
  description: string;
  price: number;
  image: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface UserProgress {
  courseId: string;
  completedModules: number;
  totalModules: number;
  lastAccessed: string;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}
