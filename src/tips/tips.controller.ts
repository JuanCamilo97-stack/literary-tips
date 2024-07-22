import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { TipsService } from './tips.service';
import { CreateTipDto } from './dtos/create-tip-dto';
import { UpdateTipDto } from './dtos/update-tip.dto';

@ApiTags('tips')
@Controller('tips')
export class TipsController {
  constructor(private readonly tipsService: TipsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new tip' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The tip has been successfully created.' })
  @ApiBody({ type: CreateTipDto })
  create(@Body() createTipDto: CreateTipDto) {
    return this.tipsService.create(createTipDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all tips' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully retrieved tips.' })
  findAll() {
    return this.tipsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get a tip by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully retrieved tip.' })
  @ApiParam({ name: 'id', required: true, description: 'Tip ID' })
  findOne(@Param('id') id: string) {
    return this.tipsService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update a tip by ID' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successfully updated tip.' })
  @ApiParam({ name: 'id', required: true, description: 'Tip ID' })
  @ApiBody({ type: UpdateTipDto })
  update(@Param('id') id: string, @Body() updateTipDto: UpdateTipDto) {
    return this.tipsService.update(+id, updateTipDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a tip by ID' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Successfully deleted tip.' })
  @ApiParam({ name: 'id', required: true, description: 'Tip ID' })
  remove(@Param('id') id: string) {
    return this.tipsService.remove(+id);
  }
}