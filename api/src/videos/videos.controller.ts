import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  UsePipes,
  ValidationPipe,
  Delete,
} from "@nestjs/common";
import { VideoService } from "./video.service";
import { CreateVideoDto } from "./dto/create-video-dto";
import { UpdateVideoDto } from "./dto/update-video-dto";
@Controller("videos")
export class VideosController {
  constructor(private videosService: VideoService) {}
  @Get()
  async findAll() {
    return this.videosService.getAll();
  }
  @Get(":id")
  async findOne(@Param("id") id: number) {
    return this.videosService.getOne(id);
  }

  @Post()
  async create(@Body() createVideoDto: CreateVideoDto) {
    return this.videosService.create(createVideoDto);
  }

  @Patch(":id")
  @UsePipes(new ValidationPipe({ skipMissingProperties: true }))
  async updateMovie(
    @Param("id") id: number,
    @Body() movieToUpdate: UpdateVideoDto
  ) {
    return this.videosService.update(id, movieToUpdate);
  }

  @Delete(":id")
  async remove(@Param("id") id: number) {
    return this.videosService.delete(id);
  }
}
