import { HttpException, Injectable, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category-dto";
import { UpdateCategoryDto } from "./dto/update-category-dto";
import { Category } from "./models/category";

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async getOne(id: number): Promise<Category> {
    try {
      return await this.categoryRepository.findOneOrFail(id);
    } catch (error) {
      throw new HttpException("Não encontrado", HttpStatus.NOT_FOUND);
    }
  }

  async create(newCategory: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.save(newCategory);
  }

  async update(
    id: number,
    updatedCategory: UpdateCategoryDto
  ): Promise<Category> {
    const actualCategory: CreateCategoryDto =
      await this.categoryRepository.findOneOrFail(id);
    const categoryResult: UpdateCategoryDto = {
      ...actualCategory,
      ...updatedCategory,
    };

    return await this.categoryRepository.save(categoryResult);
  }

  async delete(id: number) {
    try {
      await this.categoryRepository.delete(id);
      return { message: "Deleted", success: true };
    } catch (error) {
      throw new HttpException("Erro ao deletar", HttpStatus.NOT_FOUND);
    }
  }
}
