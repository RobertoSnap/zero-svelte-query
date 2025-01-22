import { startPostgresAndZero } from "$utils/testcontainer";

async function main() {
    const { postgresContainer, zeroContainer } = await startPostgresAndZero();

    // Handle graceful shutdown
    async function shutdown() {
        console.log("Stopping containers");
        try {
            await Promise.all([
                zeroContainer.stop(),
                postgresContainer.stop()
            ]);
            console.log("Containers stopped");
            process.exit(0);
        } catch (error) {
            console.error("Error stopping containers:", error);
            process.exit(1);
        }
    }

    // Handle different termination signals
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);

    console.log("Backend started");
    console.log("Zero URL", `http://${zeroContainer.getHost()}:${zeroContainer.getMappedPort(4848)}`)
    console.log("Postgres URL", `postgresql://${postgresContainer.getUsername()}:${postgresContainer.getPassword()}@postgres-db:5432`)
    console.log("Press Ctrl+C to stop the servers",);

    // Keep the process alive without busy waiting
    process.stdin.resume();
    await new Promise(() => {}); // Never resolves, keeps process alive
}

main().catch(e => {
    console.error(`Unexpected unhandled error.`);
    console.error(e);
    console.error('Exiting.');
    process.exit(1);
});
