import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Video } from "./models/video";
import { VideoService } from "./video.service";
import { VideosController } from "./videos.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Video])],
  controllers: [VideosController],
  providers: [VideoService],
})
export class VideosModule {}
