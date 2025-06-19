import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CareService } from './care.service';
import { CreateCareDto } from './dto/create-care.dto';
import { UpdateCareDto } from './dto/update-care.dto';

@Controller('care')
export class CareController {
  constructor(private readonly careService: CareService) {}

  @Post()
  create(@Body() createCareDto: CreateCareDto) {
    return this.careService.createcare(createCareDto);
  }

  @Get()
  findAll() {
    return this.careService.findAllcare();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careService.findOnecare(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareDto: UpdateCareDto) {
    return this.careService.updatecare(+id, updateCareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careService.removecare(+id);
  }
}
