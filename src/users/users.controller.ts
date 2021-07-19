import {Body, Controller, Post, Get} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiBasicAuth, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}
    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: 'Прлучить всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll(){
        return this.userService.getAllUsers();
    }

}