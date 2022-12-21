export type CreateProductParams = {
  productName: string;
  featured: boolean;
  startDate: string;
  endDate: string;
  imageUrl: string;
  price: number;
  description: string;
};

export type UpdateProductParams = {
  productName: string;
  featured: boolean;
  startDate: string;
  endDate: string;
  imageUrl: string;
  price: number;
  description: string;
};

export type CreateCategoryParams = {
  categoryName: string;
};

export type CreateUserParams = {
  email: string;
  userName: string;
  role: string;
  password: string;
};
