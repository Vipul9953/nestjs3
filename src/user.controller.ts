import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common'
import { BookPipe } from './custom.pipe'
interface BookDto {
  id: number
  name: string
}
@Controller('/user')
export class UserController {
  @Get('/getuser/:id')
  getUser(@Param('id', ParseIntPipe) id: number): string {
    console.log(id, typeof id)
    return 'user id'
  }

  @Post('/custom/pipe')
  get(@Body(new BookPipe()) book: BookDto): string {
    return 'book add'
  }
}
