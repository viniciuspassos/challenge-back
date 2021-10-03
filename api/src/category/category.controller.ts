import {
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Body,
  Patch,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category-dto";
import { UpdateCategoryDto } from "./dto/update-category-dto";
import { Category } from "./models/category";

@Controller("category")
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.getAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<Category> {
    return this.categoryService.getOne(id);
  }

  @Post()
  async create(@Body() crateCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(crateCategoryDto);
  }

  @Patch(":id")
  @UsePipes(new ValidationPipe({ skipMissingProperties: true }))
  async update(
    @Param("id") id: number,
    @Body() categoryToUpdate: UpdateCategoryDto
  ) {
    return this.categoryService.update(id, categoryToUpdate);
  }

  @Delete(":id")
  async remove(@Param("id") id: number) {
    return this.categoryService.delete(id);
  }
}
