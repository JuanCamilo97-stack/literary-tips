import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dtos/create-genre.dto';
import { UpdateGenreDto } from './dtos/update-genre.dto';

@ApiTags('genres')
@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new genre' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The genre has been successfully created.' })
  @ApiBody({ type: CreateGenreDto })
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.create(createGenreDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all genres' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully retrieved genres.' })
  findAll() {
    return this.genresService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get a genre by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully retrieved genre.' })
  @ApiParam({ name: 'id', required: true, description: 'Genre ID' })
  findOne(@Param('id') id: string) {
    return this.genresService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update a genre by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully updated genre.' })
  @ApiParam({ name: 'id', required: true, description: 'Genre ID' })
  @ApiBody({ type: UpdateGenreDto })
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
    return this.genresService.update(+id, updateGenreDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a genre by ID' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Successfully deleted genre.' })
  @ApiParam({ name: 'id', required: true, description: 'Genre ID' })
  remove(@Param('id') id: string) {
    return this.genresService.remove(+id);
  }
}
