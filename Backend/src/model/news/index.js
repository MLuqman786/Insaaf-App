import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import newsCommentsModel from "./comment.js";

const newsModel = sequelize.define("news",{
    newsTitle:{
        type:DataTypes.STRING,
        allowNull:true
    },
    newsContent:{
        type:DataTypes.STRING,
        allowNull:true
    },
    newsPicture:{
        type:DataTypes.STRING,
        allowNull:true
    },
    totalLikes:{
        type:DataTypes.INTEGER,
        allowNull:true ,
        defaultValue:0

    }
   
})


newsModel.hasMany(newsCommentsModel)
newsCommentsModel.belongsTo(newsModel)

export default newsModel

