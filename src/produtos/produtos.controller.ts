import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { ProdutosService } from './produtos.service';
  import { CreateProdutosDto } from './dto/createProdutos.dto';
  import { UpdateProdutosDto } from './dto/updateProdutos.dto';
  import { ApiTags } from '@nestjs/swagger';
  
  @ApiTags('produtos')
  @Controller('produtos')
  export class ProdutosController {
    constructor(
      private readonly produtosService: ProdutosService,
    ) {}
  
    @Post()
    create(
      @Body() createProdutosDto: CreateProdutosDto,
    ) {
      return this.produtosService.create(
        createProdutosDto,
      );
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
    update(
      @Param('id') id: string,
      @Body() updateProdutosDto: UpdateProdutosDto,
    ) {
      return this.produtosService.update(
        id,
        updateProdutosDto,
      );
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.produtosService.remove(id);
    }
  }
  