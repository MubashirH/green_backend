import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Products {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'productId',
  })
  id: number;

  @Column({
    nullable: false,
  })
  productName: string;

  @Column()
  category: string;

  @Column({
    nullable: false,
  })
  featured: boolean;

  @Column({
    nullable: false,
  })
  startDate: string;

  @Column({
    nullable: false,
  })
  endDate: string;

  @Column({
    nullable: false,
  })
  imageUrl: string;

  @Column({
    nullable: false,
  })
  price: number;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    nullable: true,
  })
  createdAt: Date;
}
