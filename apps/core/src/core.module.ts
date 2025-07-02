import { Module } from '@nestjs/common';
import { ShgModule } from './shg/shg.module';

@Module({
  imports: [ShgModule],
})
export class CoreModule {}
