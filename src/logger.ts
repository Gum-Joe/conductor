/**
 * @overview Logger for conductor
 */
import { ChalkChain, cyan, green, magenta, red, yellow } from "chalk";
import * as LoggerOpts from "./interfaces/logger";

/**
 * Logger class
 * @class Logger
 * @param {Logger} options Options
 */
export default class Logger {
  // Props
  public name: string;

  // Private stuff
  private levels: LoggerOpts.Levels;
  private nameColour: ChalkChain;
  private options: LoggerOpts.Options;

  constructor(options: LoggerOpts.Options) {
    this.options = options;
    this.name = this.options.name;
    this.nameColour = this.options.nameColour || magenta;
    this.levels = {
      debug: {
        colouriser: cyan,
        text: "DEBUG",
      },
      err: {
        colouriser: red,
        text: "ERROR",
      },
      info: {
        colouriser: green,
        text: "INFO",
      },
      warn: {
        colouriser: yellow,
        text: "WARN",
      },
    };
  }

  /**
   * Debug logger (cyan)
   * @param {String} txt Text to log
   * @color Green
   */
  public debug(text) {
    if (process.argv.includes("--debug") || process.argv.includes("--verbose") || process.env.DEBUG === "conductor") {
      this._log(this.levels.debug.text, this.levels.debug.colouriser, text);
    }
  }

  /**
   * Error logger (red)
   * @param {String} txt Text to log
   */
  public err(text) {
    this._log(this.levels.err.text, this.levels.err.colouriser, text);
  }

  /**
   * Info logger (green)
   * @param {String} txt Text to log
   */
  public info(text) {
    this._log(this.levels.info.text, this.levels.info.colouriser, text);
  }

  /**
   * Warning logger (yellow)
   * @param {String} txt Text to log
   */
  public warn(text) {
    this._log(this.levels.warn.text, this.levels.warn.colouriser, text);
  }

  /**
   * Default base logger
   * @private
   * @param options {LoggerOpts.LogOptions}
   */
  private _log(level: string, levelColour: ChalkChain, text: string) {
    console.log(`[ ${this.nameColour(this.name)} ${levelColour(level)} ] ${text}`);
  }
}
