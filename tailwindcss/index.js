const Color = require('color');
const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    const card = {
        // ':root': {
        //     '--card-border-width': theme('card.borderWidth'),
        //     '--card-border-radius': theme('card.borderRadius'),
        //     '--card-background-color': theme('card.backgroundColor'),
        //     '--card-border-color': theme('card.borderColor'),
        //     '--card-inner-border-radius': theme('card.inner.borderRadius'),
        //     '--card-spacer-padding-y': theme('card.spacer.paddingY'),
        //     '--card-spacer-padding-x': theme('card.spacer.paddingX'),
            
        //     '--card-title-padding-y': theme('card.title.paddingY'),
        //     '--card-title-padding-x': theme('card.title.paddingX'),
            
        //     '--card-cap-padding-y': theme('card.cap.borderWidth'),
        //     '--card-cap-padding-x': theme('card.cap.borderWidth'),

        //     '--card-overlay-padding': theme('card.overlay.borderWidth'),

        //     '--card-group-margin': theme('card.group.margin'),
        // },

        //
        // Base styles
        //
        '.card': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0, // See https://github.com/twbs/bootstrap/pull/22740#issuecomment-305868106
            wordWrap: 'break-word',
            backgroundColor: theme('card.backgroundColor'),
            backgroundClip: 'border-box',
            border: `${theme('card.borderWidth')} solid ${theme('card.borderColor')}`,
            borderRadius: theme('card.borderRadius'),
        },

        '.card > hr': {
            marginRight: 0,
            marginLeft: 0
        },
        
        '.card > .list-group': {
            borderTop: 'inherit',
            borderBottom: 'inherit',
        },
    
        '.card > .list-group:first-child': {
            borderTopWidth: 0,
            borderTopLeftRadius: theme('card.inner.borderRadius'),
            borderTopRightRadius: theme('card.inner.borderRadius'),
        },
    
        '.card > .list-group:last-child': {
            borderBottomWidth: 0,
            borderBottomLeftRadius: theme('card.inner.borderRadius'),
            borderBottomRightRadius: theme('card.inner.borderRadius'),
        },            
        
        // Due to specificity of the above selector (`.card > .list-group`), we must
        // use a child selector here to prevent double borders.
        '.card > .card-header + .list-group, .card > .list-group + .card-footer': {
            borderTop: 0
        },
        
        '.card-body': {
            // Enable `flex-grow: 1` for decks and groups so that card blocks take up
            // as much space as possible, ensuring footers are aligned to the bottom.
            flex: '1 1 auto',
            padding: `${theme('card.spacer.paddingY')} ${theme('card.spacer.paddingX')}`,
            color: theme('card.color'),
        },
        
        '.card-title': {
            marginBottom: theme('card.title.paddingY'),
        },
        
        '.card-subtitle': {
            marginTop: `calc(-1 * ${theme('card.title.paddingY')} / 2)`,
            marginBottom: 0
        },
        
        '.card-text:last-child': {
            marginBottom: 0
        },
        
        '.card-link:hover': {
            textDecoration: 'none'
        },
    
        '.card-link + .card-link': {
            marginLeft: theme('card.spacer.paddingX')
        },
        
        //
        // Optional textual caps
        //
        
        '.card-header': {
            padding: `${theme('card.cap.paddingY')} ${theme('card.cap.paddingX')}`,
            marginBottom: 0, // Removes the default margin-bottom of <hN>
            color: theme('card.cap.color'),
            backgroundColor: theme('card.cap.backgroundColor'),
            borderBottom: `${theme('card.borderWidth')} solid ${theme('card.borderColor')}`,
        },
    
        '.card-header:first-child': {
            borderRadius: `${theme('card.inner.borderRadius')} ${theme('card.inner.borderRadius')} 0 0`
        },
        
        '.card-footer': {
            padding: `${theme('card.cap.paddingY')} ${theme('card.cap.paddingX')}`,
            color: theme('card.cap.color'),
            backgroundColor: theme('card.cap.backgroundColor'),
            borderTop: `${theme('card.borderWidth')} solid ${theme('card.borderColor')}`,
        },

        '.card-header:last-child': {
            borderRadius: ` 0 0 ${theme('card.inner.borderRadius')} ${theme('card.inner.borderRadius')}`
        },
        
        
        //
        // Header navs
        //
        '.card-header-tabs': {
            marginRight: `calc(-1 * ${theme('card.cap.paddingX')} / 2)`,
            marginBottom: `calc(-1 * ${theme('card.cap.paddingY')})`,
            marginLeft: `calc(-1 * ${theme('card.cap.paddingX')} / 2)`,
            borderBottom: 0
        },
    
        '.card-header-tabs .nav-link.active': {
            backgroundColor: theme('card.backgroundColor'),
            borderBottomColor: theme('card.backgroundColor'),
        },
        
        '.card-header-pills': {
            marginRight: `calc(-1 * ${theme('card.cap.paddingX')} / 2)`,
            marginLeft: `calc(-1 * ${theme('card.cap.paddingX')} / 2)`,
        },
        
        // Card image
        '.card-img-overlay': {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            padding: theme('card.overlay.padding'),
            borderRadius: theme('card.inner.borderRadius'),
            // @include border-radius(theme('card.inner.borderRadius'));
        },
        
        '.card-img, .card-img-top, .card-img-bottom': {
            width: '100%' // Required because we use flexbox and this inherently applies align-self: stretch
        },
        
        '.card-img, .card-img-top': {
            borderTopLeftRadius: theme('card.inner.borderRadius'),
            borderTopRightRadius: theme('card.inner.borderRadius'),
        },
        
        '.card-img, .card-img-bottom': {
            borderBottomLeftRadius: theme('card.inner.borderRadius'),
            borderBottomRightRadius: theme('card.inner.borderRadius'),
        },
        
        
        //
        // Card groups
        //
    
        // The child selector allows nested `.card` within `.card-group`
        // to display properly.
        '.card-group > .card': {
            marginBottom: theme('card.group.margin')
        },
        
        '@media (min-width: 576px)': Object.assign({
            '.card-group': {
                display: 'flex',
                flexFlow: 'row wrap',
            },

            // The child selector allows nested `.card` within `.card-group`
            // to display properly.
            '.card-group > .card': {
                // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4
                flex: '1 0 0%',
                marginBottom: 0,
            },
        
            '.card-group + .card': {
                marginLeft: 0,
                borderLeft: 0,
            },

        }, theme('card.enableRounded') && {
            '&:not(:last-child)': {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
            },
            '&:not(:last-child) .card-img-top, &:not(:last-child) .card-header': {
                borderTopRightRadius: 0
            },
            '&:not(:last-child) .card-img-bottom, &:not(:last-child) .card-footer': {
                borderBottomRightRadius: 0
            },
            '&:not(:first-child)': {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
            },
            '&:not(:first-child) .card-img-top, &:not(:first-child) .card-header': {
                borderTopLeftRadius: 0
            },
            '&:not(:first-child) .card-img-bottom, &:not(:first-child) .card-footer': {
                borderBottomLeftRadius: 0
            }
        }),
                
        //
        // Accordion
        //        
        '.accordion > .card': {
            overflow: 'hidden'
        },

        '.accordion > .card:not(:last-of-type)': {
            borderNottom: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        },
        
        '.accordion > .card:not(:first-of-type)': {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        },
    
        '.accordion > .card > .card-header': {
            borderRadius: 0,
            marginBottom: `calc(-1 * ${theme('card.borderWidth')})`
        }
    };

    addComponents(card);
}, {
    theme: {
        card: theme => ({
            enableRounded: true,
            borderWidth: '1px',
            borderRadius: '.25rem',
            backgroundColor: theme('colors.white', colors.white),
            borderColor: Color(theme('colors.black', colors.black)).fade(.875).toString(),
            inner: {
                borderRadius: `calc(.25rem - 1px)`,
            },
            spacer: {
                paddingY: '1rem',
                paddingX: '1rem',
            },
            title: {
                paddingY: '.5rem',
            },
            cap: {
                paddingY: '.5rem',
                paddingX: '1rem',
                backgroundColor: Color(theme('colors.black', colors.black)).fade(.97).toString()
            },
            overlay: {
                padding: '1rem',
            },
            group: {
                margin: '.75rem'
            }
        })
    }
});