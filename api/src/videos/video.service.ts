import { HttpException, Injectable, HttpStatus } from "@nestjs/common";
import { CreateVideoDto } from "./dto/create-video-dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Videos } from "./models/video";
import { Repository } from "typeorm";
import { UpdateVideoDto } from "./dto/update-video-dto";

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(Videos)
    private videosRepository: Repository<Videos>
  ) {}
  async getAll(): Promise<Videos[]> {
    return await this.videosRepository.find();
  }

  async getOne(id: number): Promise<Videos> {
    try {
      return await this.videosRepository.findOneOrFail(id);
    } catch (error) {
      throw new HttpException("Não encontrado", HttpStatus.NOT_FOUND);
    }
  }

  async create(newVideo: CreateVideoDto): Promise<Videos> {
    return await this.videosRepository.save(newVideo);
  }

  async update(id: number, updatedVideo: UpdateVideoDto): Promise<Videos> {
    const actualVideo: CreateVideoDto =
      await this.videosRepository.findOneOrFail(id);
    const videoResult: UpdateVideoDto = { ...actualVideo, ...updatedVideo };

    return await this.videosRepository.save(videoResult);
  }

  async delete(id: number) {
    try {
      await this.videosRepository.delete(id);
      return { message: "Deleted", success: true };
    } catch (error) {
      throw new HttpException("Erro ao deletar", HttpStatus.NOT_FOUND);
    }
  }
}
