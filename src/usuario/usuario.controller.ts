import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { Usuario } from './entities/usuario.entity';

@ApiTags('usuario') 
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('register')
  @ApiOperation({ summary: 'Cadastrar um novo usuário' })
  @ApiResponse({
    status: 201,
    description: 'Usuário cadastrado com sucesso.',
    type: Usuario, 
  })
  @ApiResponse({
    status: 400,
    description: 'Erro na criação do usuário, dados inválidos.',
  })
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return await this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  getAccount(@Req() req: any) {
    return this.usuarioService.findOne(req.user.id);
  }
}
