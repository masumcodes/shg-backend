import { Module } from '@nestjs/common';
import { ShgService } from './shg.service';
import { ShgController } from './shg.controller';

@Module({
  controllers: [ShgController],
  providers: [ShgService],
})
export class ShgModule {}
