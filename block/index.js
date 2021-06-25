
import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";



const Render = ({ attributes }) => {
    const blockProps = useBlockProps({
        className: attributes.className ? attributes.attributes : '',
    });
    return (<p {...blockProps}> {attributes.content}</p>);
}

const Edit = ({ attributes, setAttributes }) => {
    return (
        <div>
            <InspectorControls>
                Settings
            </InspectorControls>
            <div>
                <Render
                    attributes={attributes}
                />
            </div>
        </div>
    )
}
const { title, attributes } = require('./block.json');
registerBlockType('testing-react-wordpress/block', {
    title,
    description: 'Hi Roy',
    category: 'widgets',
    icon: 'smiley',
    supports: {
        html: false,
    },
    attributes,
    edit: Edit,
    save: ({ attributes }) => <Render attributes={attributes} />,
});