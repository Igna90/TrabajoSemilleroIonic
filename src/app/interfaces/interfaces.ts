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