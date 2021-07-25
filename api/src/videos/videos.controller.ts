import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { VideoService } from "./video.service";
import { CreateVideoDto } from "./dto/create-video-dto";
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
}
