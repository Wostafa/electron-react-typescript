import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import type { ReactRefreshPlugin } from '@pmmmwh/react-refresh-webpack-plugin';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ReactRefreshWebpackPlugin: typeof ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
  new ReactRefreshWebpackPlugin(),
];
