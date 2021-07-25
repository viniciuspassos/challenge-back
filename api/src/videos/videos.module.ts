import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Videos } from "./models/video";
import { VideoService } from "./video.service";
import { VideosController } from "./videos.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Videos])],
  controllers: [VideosController],
  providers: [VideoService],
})
export class VideosModule {}
