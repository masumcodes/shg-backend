import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateShgDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  groupId: string;

  @IsNotEmpty()
  @IsString()
  shgType: string;

  @IsOptional()
  @IsString()
  promotedBy?: string;

  @IsNotEmpty()
  @IsDateString()
  formationDate: string;

  @IsNotEmpty()
  @IsString()
  bankName: string;

  @IsNotEmpty()
  @IsString()
  bankAccountNumber: string;

  @IsNotEmpty()
  @IsString()
  bankBranch: string;

  @IsNotEmpty()
  @IsDateString()
  bankOpeningDate: string;
}
