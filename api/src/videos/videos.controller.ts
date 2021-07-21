import { Controller, Get } from "@nestjs/common";
import { VideoService } from "./video.service";

@Controller("videos")
export class VideosController {
  constructor(private videosService: VideoService) {}
  @Get()
  async findAll() {
    return this.videosService.getAll();
  }
}
