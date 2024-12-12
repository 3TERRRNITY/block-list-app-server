import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { GetSessionInfoDto, SignInBodyDto, SignUpBodyDto } from './dto';
import { ApiCreatedResponse, ApiResponseProperty } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  @ApiCreatedResponse()
  signUp(@Body() body: SignUpBodyDto) {
    return this.authService.signUp(body.email, body.password);
  }
  @Post('sign-in')
  @ApiCreatedResponse()
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: SignInBodyDto) {
    return null;
  }
  @Post('sign-out')
  @ApiResponseProperty()
  @HttpCode(HttpStatus.OK)
  signOut() {}

  @Get('get-session')
  @ApiResponseProperty({
    type: GetSessionInfoDto,
  })
  getSessionInfo() {
    return null;
  }
}
