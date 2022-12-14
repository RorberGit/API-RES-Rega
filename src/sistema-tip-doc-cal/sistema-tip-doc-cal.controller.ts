import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SistemaTipDocCalService } from './sistema-tip-doc-cal.service';
import { CreateSistemaTipDocCalDto } from './dto/create-sistema-tip-doc-cal.dto';
import { UpdateSistemaTipDocCalDto } from './dto/update-sistema-tip-doc-cal.dto';

@Controller('sistema-tip-doc-cal')
export class SistemaTipDocCalController {
  constructor(private readonly sistemaTipDocCalService: SistemaTipDocCalService) {}

  @Post()
  create(@Body() createSistemaTipDocCalDto: CreateSistemaTipDocCalDto) {
    return this.sistemaTipDocCalService.create(createSistemaTipDocCalDto);
  }

  @Get()
  findAll() {
    return this.sistemaTipDocCalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sistemaTipDocCalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSistemaTipDocCalDto: UpdateSistemaTipDocCalDto) {
    return this.sistemaTipDocCalService.update(+id, updateSistemaTipDocCalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sistemaTipDocCalService.remove(+id);
  }
}
