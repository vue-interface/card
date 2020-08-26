<script>
import { prefix } from '@vue-interface/utils';

function filter(data) {
    return Object.fromEntries(
        Object.entries(data || {}).filter(([key, value]) => {
            return value !== false;
        })
    );
}

function matches(subject, matches) {
    if(!(matches instanceof RegExp)) {
        matches = new RegExp(matches);
    }

    return !!subject.toString().match(matches);
}

export default {
    functional: true,
    props: {
        attrs: Object,
        match: RegExp,
        prefix: {
            type: String,
            default: 'card'
        },
        tag: {
            type: String,
            default: 'div'
        }
    },
    render(h, context) {
        const data = context.data || {};
        const attrs = filter(data.attrs);
        const children = context.children.filter(child => !!child.tag);
        
        if(children.length === 1) {
            if(children[0].componentOptions && matches(children[0].componentOptions.tag, prefix(context.props.tag, context.props.prefix))) {
                return children[0];
            }

            // Ensure the node has a data object and static class to make it easier.
            children[0].data = Object.assign({}, children[0].data);
            children[0].data.staticClass = children[0].data.staticClass || '';

            // Get the attributes keys past to the object and prefix them
            const staticClass = Object.keys(prefix(attrs, context.props.prefix))
                .filter(value => !children[0].data.staticClass.match(value))
                .concat(children[0].data.staticClass)
                .join(' ')
                .trim();

            if(matches(children[0].tag, context.props.match || context.props.tag)) {
                children[0].data.staticClass = staticClass;

                return children[0];
            }
            
        }
        
        // Wrap the children and append the desired class.
        return h(context.props.tag, {
            attrs: context.props.attrs,
            class: Object.keys(prefix(attrs || {}, context.props.prefix))
        }, context.children);
    }
};
</script>