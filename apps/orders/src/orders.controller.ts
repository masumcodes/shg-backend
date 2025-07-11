import { Controller } from '@nestjs/common';

import {
  CreateOrderRequest,
  CreateOrderResponse,
  GetOrderRequest,
  GetOrderResponse,
  ListOrdersRequest,
  ListOrdersResponse,
  OrderServiceController,
  OrderServiceControllerMethods,
} from '@app/common/types/order';
import { OrdersService } from './orders.service';
import { Observable } from 'rxjs';

@Controller()
@OrderServiceControllerMethods()
export class OrdersController implements OrderServiceController {
  constructor(private readonly ordersService: OrdersService) {}

  createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    return this.ordersService.createOrder(request);
  }

  GetOrder(request: GetOrderRequest): Promise<GetOrderResponse> {
    return this.ordersService.GetOrder(request);
  }

  ListOrders(
    request: ListOrdersRequest,
  ):
    | Promise<ListOrdersResponse>
    | Observable<ListOrdersResponse>
    | ListOrdersResponse {
    return this.ordersService.ListOrders(request);
  }
}
