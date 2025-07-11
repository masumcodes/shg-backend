import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    description: 'Product ID to order',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsNotEmpty()
  @IsString()
  productId: string;

  @ApiProperty({
    description: 'Member ID who is placing the order',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  @IsNotEmpty()
  @IsString()
  memberId: string;

  @ApiProperty({
    description: 'SHG group ID',
    example: '550e8400-e29b-41d4-a716-446655440002',
  })
  @IsNotEmpty()
  @IsString()
  shgId: string;

  @ApiProperty({
    description: 'Quantity to order',
    example: 5,
    minimum: 1,
  })
  @IsNumber()
  @IsPositive()
  quantity: number;

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
}
