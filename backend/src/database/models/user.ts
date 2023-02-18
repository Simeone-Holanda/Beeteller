import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    Default,
    Unique,
    AllowNull,
} from "sequelize-typescript";


@Table
class User extends Model<User> {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @AllowNull(false)
    @Column(DataType.UUID)
    id: string;

    @Unique
    @Column
    username: string;

    @Unique
    @Column
    email: string;

    @Column
    password: string;

}

export default User;