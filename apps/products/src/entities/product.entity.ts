import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl, IsBoolean, IsOptional } from 'class-validator';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    name: string;

    @Column()
    @IsString()
    description: string;

    @Column('decimal', { precision: 10, scale: 2 })
    @IsNumber()
    @IsPositive()
    price: number;

    @Column()
    @IsNumber()
    @IsPositive()
    stock: number;

    @Column()
    @IsUrl()
    imgUrl: string;

    @Column()
    @IsString()
    userId: string;

    @Column()
    @IsString()
    shgId: string;

    @Column({ nullable: true })
    @IsString()
    @IsOptional()
    voId: string;

    @Column({ nullable: true })
    @IsString()
    @IsOptional()
    clfId: string;

    @Column({ default: false })
    @IsBoolean()
    isVerified: boolean;

    @Column({ nullable: true })
    @IsString()
    verifiedBy: string;

    @Column({ nullable: true })
    verificationDate: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}