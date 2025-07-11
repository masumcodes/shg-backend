import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsEnum,
  IsOptional,
} from 'class-validator';

export enum OrderStatus {
  ORDER_STATUS_UNSPECIFIED = 0,
  ORDER_STATUS_PENDING = 1,
  ORDER_STATUS_CONFIRMED = 2,
  ORDER_STATUS_SHIPPED = 3,
  ORDER_STATUS_DELIVERED = 4,
  ORDER_STATUS_CANCELLED = 5,
  UNRECOGNIZED = -1,
}

@Entity('orders')
@Index(['memberId'])
@Index(['productId'])
@Index(['status'])
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  productId: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  memberId: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  memberName: string;

  @Column()
  @IsNumber()
  @IsPositive()
  quantity: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.ORDER_STATUS_PENDING,
  })
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  /** Address fields */
  @Column()
  @IsNotEmpty()
  @IsString()
  state: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  city: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  district: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  village: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  pin_code: string;
}
