import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ORDER_PACKAGE_NAME } from '@app/common/types/order';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrdersModule,
    {
      transport: Transport.GRPC,
      options: {
        package: ORDER_PACKAGE_NAME,
        protoPath: join(__dirname, '../../../proto/order.proto'),
        url: `localhost:${process.env.ORDERS_PORT ?? 3002}`,
      },
    },
  );

  await app.listen();
  console.log('Orders microservice is listening...');
}
bootstrap();
