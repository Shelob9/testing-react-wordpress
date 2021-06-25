
import { registerBlockType } from "@wordpress/blocks";
import Edit from './Edit';
import Save from './Save';

const blockConfig = require('./block.json');
registerBlockType(blockConfig.name, {
    ...blockConfig,
    edit: Edit,
    save: Save
});