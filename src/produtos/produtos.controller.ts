import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutosDto } from './dto/createProdutos.dto';
import { UpdateProdutosDto } from './dto/updateProdutos.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  async create(@Body() createProdutosDto: CreateProdutosDto) {
    if (!createProdutosDto.nome || createProdutosDto.nome.trim() === '') {
      throw new BadRequestException('O nome do produto não pode estar vazio');
    }
    if (createProdutosDto.preco < 0) {
      throw new BadRequestException('O preço do produto não pode ser negativo');
    }

    return await this.produtosService.create(createProdutosDto);
  }

  @Get()
  findAll() {
    return this.produtosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProdutosDto: UpdateProdutosDto,
  ) {
    if (updateProdutosDto.nome && updateProdutosDto.nome.trim() === '') {
      throw new BadRequestException('O nome do produto não pode estar vazio');
    }
    if (updateProdutosDto.preco && updateProdutosDto.preco < 0) {
      throw new BadRequestException('O preço do produto não pode ser negativo');
    }

    return await this.produtosService.update(id, updateProdutosDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtosService.remove(id);
  }
}
