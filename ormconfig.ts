import { Comment } from "src/entities/comment.entity";
import { Topic } from "src/entities/topic.entity";
import { User } from "src/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";



const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "testDB",
    host: "localHost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    entities: [ User, Topic, Comment],
    synchronize: true,
};

export default config;
