export interface ResOpinions {
  success: boolean;
  data: DatumOpinion[];
  message: string;
}

export interface DatumOpinion {
  id: number;
  headline: string;
  description: string;
  plague_id: number;
  plague_name: string;
  num_likes: number;
  created_at: string;
  updated_at: string;
}
export interface ResPlagues {
  success: boolean;
  data: DatumPlagues[];
  message: string;
}

export interface DatumPlagues {
  id: number;
  name: string;
  img?: any;
}
export interface ResProducts {
  success: boolean;
  data: DatumProducts[];
  message: string;
}

export interface DatumProducts {
  id: number;
  name: string;
  img: string;
  how_to_use: string;
  created_at: string;
}
