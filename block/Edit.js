import { Placeholder, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes, isSelected }) {
    return (
        <div {...useBlockProps()}>
            {isSelected ?
                <TextControl
                    value={attributes.content}
                    onChange={(newValue) => setAttributes({ content: newValue })}
                /> : <p>{attributes.content}</p>
            }
        </div>
    );
}