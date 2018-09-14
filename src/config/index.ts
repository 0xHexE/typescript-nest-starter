import * as convict from 'convict';
import * as path from 'path';
import * as fs from 'fs';

const config = convict({
    env: {
        doc: 'The current node.js environment',
        default: 'prod',
        format: [ 'dev', 'test', 'stage', 'prod' ],
        env: 'NODE_ENV'
    },
    port: {
        doc: 'Port for running the application',
        format: Number,
        default: null,
        env: 'NODE_PORT'
    },
});

const files = (path.join(__dirname, '..', '..', 'config', config.get('env') + '.json') + ',' + (process.env.CONFIG_FILES || ''))
    .split(',')
    .filter(fs.existsSync);

config.loadFile(files);
config.validate({ allowed: 'strict' });

export default config;
