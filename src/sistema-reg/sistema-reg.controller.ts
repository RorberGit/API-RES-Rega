import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { SistemaRegService } from './sistema-reg.service';
import { CreateSistemaRegDto } from './dto/create-sistema-reg.dto';
import { UpdateSistemaRegDto } from './dto/update-sistema-reg.dto';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/auth.decorator';

@ApiTags("Modulo del Rega")
//@Auth()
@Controller('sistemareg')
export class SistemaRegController {
  constructor(private readonly sistemaRegService: SistemaRegService) {}

  @Get('rows')
  _get(){
    return this.sistemaRegService._get();
  }

  @Post('rows')
  _post(@Body() rows: any) {
    return this.sistemaRegService._post(rows);
  }

  @Auth()
  @Post()
  create(@Body() createSistemaRegDto: CreateSistemaRegDto) {
    return this.sistemaRegService.create(createSistemaRegDto);
  }

  @Auth()
  @Get()
  findAll() {
    return this.sistemaRegService.findAll();
  }

  @Auth() 
  @Get('unit/:num')
  findAllNumUnidad(@Param('num') num: string) {    
    return this.sistemaRegService.findAllNumUnidad(num);
  }

  @Auth()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sistemaRegService.findOne(id);
  }

  @Auth()
  @Put(':id')
  editRecord(
    @Param('id', ParseIntPipe) id: number,
    @Body() update: UpdateSistemaRegDto,
  ) {
    return this.sistemaRegService.editRecord(id, update);
  }

  @Auth()
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.sistemaRegService.remove(id);
  }
}
