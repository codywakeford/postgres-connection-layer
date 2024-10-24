import { Sequelize } from "sequelize"

async function connectToDatabase() {
	const config = useRuntimeConfig()
	let sequelize

	if (config.PG_URI) {
		sequelize = new Sequelize(config.PG_URI, {
			dialect: "postgres",
		})
	} else {
		sequelize = new Sequelize({
			dialect: "postgres",
			host: config.PG_HOST,
			port: config.PG_PORT || 5432,
			username: config.PG_USERNAME,
			password: config.PG_PASSWORD,
			database: config.PG_DATABASE,
		})
	}

	try {
		await sequelize.authenticate()
		console.log("\x1b[32m", "[database-connection] PostgreSQL Connected", "\x1b[0m")
	} catch (error) {
		console.error("Unable to connect to the database:", error)
	}

	return sequelize
}

export default defineNitroPlugin(async (nitroApp) => {
	const db = await connectToDatabase()

	nitroApp.hooks.hook("request", async () => {
		nitroApp.context.db = db
	})
})
