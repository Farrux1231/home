import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorProfileService } from './author-profile.service';
import { CreateAuthorProfileDto } from './dto/create-author-profile.dto';
import { UpdateAuthorProfileDto } from './dto/update-author-profile.dto';

@Controller('author-profile')
export class AuthorProfileController {
  constructor(private readonly authorProfileService: AuthorProfileService) {}

  @Post()
  create(@Body() createAuthorProfileDto: CreateAuthorProfileDto) {
    return this.authorProfileService.create(createAuthorProfileDto);
  }

  @Get()
  findAll() {
    return this.authorProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorProfileDto: UpdateAuthorProfileDto) {
    return this.authorProfileService.update(+id, updateAuthorProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorProfileService.remove(+id);
  }
}
