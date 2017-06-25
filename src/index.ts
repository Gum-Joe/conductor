/**
 * @overview Entry point for conductor
 * @module core
 */
import Logger from "./logger";

const logger: Logger = new Logger({
  name: "conductor",
});

function app() {
  logger.debug("Conductor started");
}

export default app;
