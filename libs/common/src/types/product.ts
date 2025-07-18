// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.5
//   protoc               v3.20.3
// source: product.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'product';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imgUrl: string;
  userId: string;
  shgId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  price: number;
  stock: number;
  imgUrl: string;
  imageData: Uint8Array;
}

export interface GetAllProductsRequest {
  page: number;
  limit: number;
}

export interface GetAllProductsResponse {
  products: Product[];
  total: number;
}

export interface GetProductByIdRequest {
  id: string;
}

export interface UpdateProductRequest {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imgUrl: string;
  imageData: Uint8Array;
}

export interface DeleteProductRequest {
  id: string;
}

export interface DeleteProductResponse {
  success: boolean;
}

export const PRODUCT_PACKAGE_NAME = 'product';

export interface ProductServiceClient {
  createProduct(request: CreateProductRequest): Observable<Product>;

  getAllProducts(
    request: GetAllProductsRequest,
  ): Observable<GetAllProductsResponse>;

  getProductById(request: GetProductByIdRequest): Observable<Product>;

  updateProduct(request: UpdateProductRequest): Observable<Product>;

  deleteProduct(
    request: DeleteProductRequest,
  ): Observable<DeleteProductResponse>;
}

export interface ProductServiceController {
  createProduct(
    request: CreateProductRequest,
  ): Promise<Product> | Observable<Product> | Product;

  getAllProducts(
    request: GetAllProductsRequest,
  ):
    | Promise<GetAllProductsResponse>
    | Observable<GetAllProductsResponse>
    | GetAllProductsResponse;

  getProductById(
    request: GetProductByIdRequest,
  ): Promise<Product> | Observable<Product> | Product;

  updateProduct(
    request: UpdateProductRequest,
  ): Promise<Product> | Observable<Product> | Product;

  deleteProduct(
    request: DeleteProductRequest,
  ):
    | Promise<DeleteProductResponse>
    | Observable<DeleteProductResponse>
    | DeleteProductResponse;
}

export function ProductServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createProduct',
      'getAllProducts',
      'getProductById',
      'updateProduct',
      'deleteProduct',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('ProductService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('ProductService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const PRODUCT_SERVICE_NAME = 'ProductService';
