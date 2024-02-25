import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'
import {BuildOptions} from "./types/config";

export function devServer(port: number): DevServerConfiguration {
  return {
    port,
    open: true,
  }
}