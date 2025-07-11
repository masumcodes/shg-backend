import {
  IsEnum,
  IsOptional,
  IsString,
  IsNumber,
  IsPositive,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from '../entities/order.entity';

export class UpdateOrderDto {
  @ApiProperty({
    description: 'Order status',
    enum: OrderStatus,
    example: OrderStatus.CONFIRMED,
    required: false,
  })
  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;

  @ApiProperty({
    description: 'Shipping address',
    example: '123 Main St, City, State 12345',
    required: false,
  })
  @IsOptional()
  @IsString()
  shippingAddress?: string;

  @ApiProperty({
    description: 'Additional notes for the order',
    example: 'Please deliver in the morning',
    required: false,
  })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({
    description: 'Total amount for the order',
    example: 150.5,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  totalAmount?: number;
}
