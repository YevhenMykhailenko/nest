import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@email.com', description: 'Имейл пользователя'})
    @IsEmail({}, {message: 'Некорректный имейл'})
    readonly email: string;
    @ApiProperty({example: '12345678', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Не менее 4, и не более 16 символов'})
    readonly password: string;
}
