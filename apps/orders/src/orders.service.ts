import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order as OrderEntity } from './entities/order.entity';
import {
  CreateOrderRequest,
  CreateOrderResponse,
  GetOrderRequest,
  GetOrderResponse,
  ListOrdersRequest,
  ListOrdersResponse,
  UpdateOrderRequest,
  UpdateOrderResponse,
  DeleteOrderRequest,
  DeleteOrderResponse,
  Order as OrderProto,
} from '@app/common/types/order';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  private convertToProtoOrder(entity: OrderEntity): OrderProto {
    return {
      ...entity,
      createdAt: entity.createdAt.toISOString(),
      updatedAt: entity.updatedAt.toISOString(),
    };
  }

  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    const order = this.orderRepository.create(request);
    const savedOrder = await this.orderRepository.save(order);
    return { order: this.convertToProtoOrder(savedOrder) };
  }
  async GetOrder(request: GetOrderRequest): Promise<GetOrderResponse> {
    const order = await this.orderRepository.findOne({
      where: {
        id: request.id,
      },
    });
    if (!order) {
      throw new NotFoundException(`Order with ID ${request.id} is not found`);
    }
    return { order: this.convertToProtoOrder(order) };
  }
  async ListOrders(request: ListOrdersRequest): Promise<ListOrdersResponse> {
    const orders = await this.orderRepository.find({
      where: { memberId: request.memberId },
    });
    return { orders: orders.map((order) => this.convertToProtoOrder(order)) };
  }

  async UpdateOrder(request: UpdateOrderRequest): Promise<UpdateOrderResponse> {
    await this.orderRepository.update(request.id, request);
    const order = await this.orderRepository.findOne({
      where: { id: request.id },
    });
    return { order: order ? this.convertToProtoOrder(order) : undefined };
  }

  async DeleteOrder(request: DeleteOrderRequest): Promise<DeleteOrderResponse> {
    const result = await this.orderRepository.delete(request.id);
    return { success: true };
  }

  // async listOrders(request: ListOrdersRequest): Promise<ListOrdersResponse> {
  //   const orders = await this.orderRepository.find({
  //     where: { member_id: request.memberId },
  //     skip: request.pagination?.skip || 0,
  //     take: request.pagination?.page || 10,
  //   });
  //   return { orders: orders.map((order) => this.convertToProtoOrder(order)) };
  // }

  // async updateOrder(request: UpdateOrderRequest): Promise<UpdateOrderResponse> {
  //   await this.orderRepository.update(request.id, { status: request.status });
  //   const order = await this.orderRepository.findOne({
  //     where: { id: request.id },
  //   });
  //   return { order: order ? this.convertToProtoOrder(order) : undefined };
  // }

  // async deleteOrder(request: DeleteOrderRequest): Promise<DeleteOrderResponse> {
  //   const result = await this.orderRepository.delete(request.id);
  //   return { success: result.affected > 0 };
  // }
}
