import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { LevelsService } from './levels.service';
import { CreateLevelDto } from './dtos/create-level-dto';
import { UpdateLevelDto } from './dtos/update-level.dto';

@ApiTags('levels')
@Controller('levels')
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new level' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The level has been successfully created.' })
  @ApiBody({ type: CreateLevelDto })
  create(@Body() createLevelDto: CreateLevelDto) {
    return this.levelsService.create(createLevelDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all levels' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully retrieved levels.' })
  findAll() {
    return this.levelsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get a level by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully retrieved level.' })
  @ApiParam({ name: 'id', required: true, description: 'Level ID' })
  findOne(@Param('id') id: string) {
    return this.levelsService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update a level by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully updated level.' })
  @ApiParam({ name: 'id', required: true, description: 'Level ID' })
  @ApiBody({ type: UpdateLevelDto })
  update(@Param('id') id: string, @Body() updateLevelDto: UpdateLevelDto) {
    return this.levelsService.update(+id, updateLevelDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a level by ID' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Successfully deleted level.' })
  @ApiParam({ name: 'id', required: true, description: 'Level ID' })
  remove(@Param('id') id: string) {
    return this.levelsService.remove(+id);
  }
}

/*
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { CreateLevelDto } from './dtos/create-level-dto';
import { UpdateLevelDto } from './dtos/update-level.dto';

@Controller('levels')
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createLevelDto: CreateLevelDto) {
    return this.levelsService.create(createLevelDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.levelsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.levelsService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateLevelDto: UpdateLevelDto) {
    return this.levelsService.update(+id, updateLevelDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.levelsService.remove(+id);
  }
}
 */