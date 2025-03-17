import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComentService } from './coment.service';
import { CreateComentDto } from './dto/create-coment.dto';
import { UpdateComentDto } from './dto/update-coment.dto';

@Controller('coment')
export class ComentController {
  constructor(private readonly comentService: ComentService) {}

  @Post()
  create(@Body() createComentDto: CreateComentDto) {
    return this.comentService.create(createComentDto);
  }

  
}
