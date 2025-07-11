import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from '../entities/order.entity';

export class OrderResponseDto {
  @ApiProperty({
    description: 'Order ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  id: string;

  @ApiProperty({
    description: 'Product ID',
    example: '550e8400-e29b-41d4-a716-446655440001',
  })
  productId: string;

  @ApiProperty({
    description: 'Product name',
    example: 'Handmade Soap',
  })
  productName?: string;

  @ApiProperty({
    description: 'Product price',
    example: 25.5,
  })
  productPrice?: number;

  @ApiProperty({
    description: 'Member ID',
    example: '550e8400-e29b-41d4-a716-446655440002',
  })
  memberId: string;

  @ApiProperty({
    description: 'Member name',
    example: 'John Doe',
  })
  memberName?: string;

  @ApiProperty({
    description: 'SHG group ID',
    example: '550e8400-e29b-41d4-a716-446655440003',
  })
  shgId: string;

  @ApiProperty({
    description: 'SHG group name',
    example: 'Women Empowerment Group',
  })
  shgName?: string;

  @ApiProperty({
    description: 'Quantity ordered',
    example: 5,
  })
  quantity: number;

  @ApiProperty({
    description: 'Order status',
    enum: OrderStatus,
    example: OrderStatus.PENDING,
  })
  status: OrderStatus;

  @ApiProperty({
    description: 'Total amount',
    example: 127.5,
  })
  totalAmount?: number;

  @ApiProperty({
    description: 'Shipping address',
    example: '123 Main St, City, State 12345',
  })
  shippingAddress?: string;

  @ApiProperty({
    description: 'Order notes',
    example: 'Please deliver in the morning',
  })
  notes?: string;

  @ApiProperty({
    description: 'Order creation date',
    example: '2024-01-15T10:30:00Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Order last update date',
    example: '2024-01-15T10:30:00Z',
  })
  updatedAt: Date;
}
