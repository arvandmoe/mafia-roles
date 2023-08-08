interface RoleType {
  id: number;
  name: string;
  side: string;
  side_type: string;
  number: string;
  status: string;
  gallery: Gallery;
  category: Category[];
}

interface Category {
  id: number;
  name: string;
  created_at?: string;
  updated_at?: string;
  pivot: Pivot;
}

interface Pivot {
  role_id: number;
  category_id: number;
}

interface Gallery {
  image: string;
  path: string;
  type: string;
}
