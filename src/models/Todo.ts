import { sequelize } from "../instances/dbConnection";
import { DataTypes, Model } from "sequelize";

export interface TodoInstance extends Model{
    id:number;
    task:string;
    done:boolean;

}

export const Todo = sequelize.define<TodoInstance>('todos', {
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    task:DataTypes.STRING,
    done:DataTypes.BOOLEAN
},
{
    tableName:'todos',
    timestamps:false
})
