import {Controller} from '@nestjs/common'
import {ProductsService} from './products.service'
import {
  CreateProductRequest,
  GetAllProductsRequest,
  GetAllProductsResponse,
  GetProductByIdRequest,
  Product,
  UpdateProductRequest,
  DeleteProductRequest,
  DeleteProductResponse,
  ProductServiceController,
  ProductServiceControllerMethods,
} from '../../../libs/common/src/types/product';

@Controller()
@ProductServiceControllerMethods()
export class ProductsController implements ProductServiceController {
  constructor( private readonly productsService: ProductsService) {}

  createProduct(request: CreateProductRequest): Promise<Product> {
     return this.productsService.createProduct(request)
  }

  getAllProducts(request: GetAllProductsRequest): Promise<GetAllProductsResponse> {
    return this.productsService.getAllProducts(request)
  }

  getProductById(request: GetProductByIdRequest): Promise<Product> {
    return this.productsService.getProductById(request)
}

  updateProduct(request: UpdateProductRequest): Promise<Product> {
    return this.productsService.updateProduct(request)
  }

  deleteProduct(request: DeleteProductRequest): Promise<DeleteProductResponse> {
    return this.productsService.deleteProduct(request)
  }
}