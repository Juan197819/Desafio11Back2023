import { Command } from "commander"
const command = new Command()
command.option("-p --port <port> ", "port Server", 8080)
    .option("-m --mode <environment>", "environment")
    .option("-s --storage <persistence>", "persistence selected (MongoDb, Fyles, etc")

command.parse()

const PORT = config.NODE_ENV || command.opts().p
const PERSISTENCE = config.PERSISTENCE || command.opts()