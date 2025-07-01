import { Injectable, NotFoundException } from '@nestjs/common';
import { Product as ProductEntity } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateProductRequest,
  GetAllProductsRequest,
  GetAllProductsResponse,
  GetProductByIdRequest,
  UpdateProductRequest,
  DeleteProductRequest,
  DeleteProductResponse,
  Product as ProductProto,
} from '@app/common';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  private convertToProtoProduct(entity: ProductEntity): ProductProto {
    return {
      ...entity,
      createdAt: entity.createdAt.toISOString(),
      updatedAt: entity.updatedAt.toISOString(),
    };
  }

  async createProduct(request: CreateProductRequest): Promise<ProductProto> {
    const product = this.productRepository.create(request);
    const savedProduct = await this.productRepository.save(product);
    return this.convertToProtoProduct(savedProduct); // Convert before returning
  }

  async getAllProducts(
    request: GetAllProductsRequest,
  ): Promise<GetAllProductsResponse> {
    const { page, limit } = request;
    const [dbProducts, total] = await this.productRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    const products = dbProducts.map((product) =>
      this.convertToProtoProduct(product),
    ); // Convert each product
    return { products, total };
  }

  async getProductById(request: GetProductByIdRequest): Promise<ProductProto> {
    const product = await this.productRepository.findOne({
      where: {
        id: request.id,
      },
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${request.id} is not found`);
    }
    return this.convertToProtoProduct(product);
  }

  async updateProduct(request: UpdateProductRequest): Promise<ProductProto> {
    const product = await this.productRepository.findOne({
      where: {
        id: request.id,
      },
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${request.id} is not found`);
    }
    const updateProduct = this.productRepository.merge(product, request);
    const savedProduct = await this.productRepository.save(updateProduct);
    return this.convertToProtoProduct(savedProduct);
  }

  async deleteProduct(
    request: DeleteProductRequest,
  ): Promise<DeleteProductResponse> {
    const result = await this.productRepository.delete(request.id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${request.id} is not found`);
    }
    return {
      success: true,
    };
  }
}
