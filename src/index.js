import { registerBlockType } from "@wordpress/blocks";
import {Editor} from './components/Editor';
import {Save} from './components/Save';
const blockConfig = require("../block.json");
const { name, title, attributes,category,keywords } = blockConfig;

registerBlockType(name, {
  title,
  attributes,
  category,
  keywords,
  edit: props => <Editor {...props} />,
  save: props => <Save {...props} />
});
