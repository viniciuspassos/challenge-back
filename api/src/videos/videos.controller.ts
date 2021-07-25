import { Controller, Get, Param } from "@nestjs/common";
import { VideoService } from "./video.service";

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
}
