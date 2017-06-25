/**
 * @overview Stores interfaces for logger class
 */
import { ChalkChain, cyan, green, red, yellow } from "chalk";

/**
 * Logger Options
 * @interface Logger
 */
export interface Options {
  name: string;
  nameColour?: ChalkChain;
}

/**
 * Logger level
 * @interface Level
 */
export interface Level {
  text: string;
  colouriser: ChalkChain;
}

/**
 * Logger levels
 * @interface Levels
 */
export interface Levels {
  debug: Level;
  err: Level;
  info: Level;
  warn: Level;
}
