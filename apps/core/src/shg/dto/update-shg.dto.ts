import { PartialType } from '@nestjs/mapped-types';
import { CreateShgDto } from './create-shg.dto';

export class UpdateShgDto extends PartialType(CreateShgDto) {
  id: number;
}
