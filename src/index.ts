import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connect } from "./config/database";
import routes from "./routes";
import seedDatabase from "./config/seedDatabase";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(cors());

async function startServer() {
    try {
        await connect();

        await seedDatabase();

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}...`);
        });

        app.use(routes);

    } catch (error) {
        console.error("Erro ao iniciar a aplicação:", error);
    }
}

startServer();
