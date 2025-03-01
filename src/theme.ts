/* eslint-disable @typescript-eslint/naming-convention */

import { tagAnatomy, formAnatomy } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
  defineStyleConfig,
  extendTheme,
} from '@chakra-ui/react';

/* eslint-disable @typescript-eslint/unbound-method */
const {
  definePartsStyle: defineTagPartsStyle,
  defineMultiStyleConfig: defineTagMultiStyleConfig,
} = createMultiStyleConfigHelpers(tagAnatomy.keys);

const {
  definePartsStyle: defineFormPartsStyle,
  defineMultiStyleConfig: defineFormMultiStyleConfig,
} = createMultiStyleConfigHelpers(formAnatomy.keys);
/* eslint-enable @typescript-eslint/unbound-method */

export const theme = extendTheme({
  borders: {
    muted: '1px solid #D6D9DC',
  },

  colors: {
    text: {
      default: '#24272A',
    },
    info: {
      default: '#0376C9',
      muted: 'rgba(3, 118, 201, 0.1)',
    },
    background: {
      alternative: '#F2F4F6',
      hover: '#FAFBFC',
    },
    gray: {
      muted: '#D6D9DC',
      40: '#F2F4F6',
    },
    border: {
      default: '#D6D9DC',
      active: '#24272A',
    },
  },

  components: {
    Container: defineStyleConfig({
      baseStyle: {
        paddingX: 4,
        paddingY: 4,
      },
      sizes: {
        fullWidth: {
          maxWidth: '100%',
        },
      },
    }),

    Divider: defineStyleConfig({
      baseStyle: {
        opacity: 1,
      },
    }),

    Form: defineFormMultiStyleConfig({
      baseStyle: defineFormPartsStyle({
        container: {
          label: {
            fontSize: 'xs',
            marginBottom: 1,
          },
          input: {
            marginBottom: 4,
            borderColor: 'border.default',
            outline: 'none',
            fontSize: 'sm',
            _active: {
              borderColor: 'border.active',
              outline: 'none',
              boxShadow: 'none',
            },
            _focusVisible: {
              borderColor: 'border.active',
              outline: 'none',
              boxShadow: 'none',
            },
          },
        },
      }),
    }),

    Heading: {
      variants: {
        main: {
          fontFamily: 'custom',
        },
      },
    },

    Link: defineStyleConfig({
      variants: {
        'navigation-active': {
          opacity: '1',
          background: 'background.alternative',
          borderRadius: 'lg',
        },

        'navigation-default': {
          opacity: '0.6',
          borderRadius: 'lg',
        },
      },
    }),

    Text: defineStyleConfig({
      baseStyle: {
        color: 'text.default',
      },
    }),

    Tag: defineTagMultiStyleConfig({
      variants: {
        code: defineTagPartsStyle({
          container: {
            color: 'info.default',
            background: 'info.muted',
            borderRadius: '0px',
            fontWeight: 'normal',
            fontFamily: 'code',
          },
        }),
      },
    }),

    Button: defineStyleConfig({
      variants: {
        solid: defineStyle({
          bg: '#24272A',
          textColor: 'white',
          _hover: {
            bg: '#0376C9',
          },
          _active: {
            bg: '#0376C9',
          },
        }),
      },
    }),
  },

  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    code: `SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace`,
    custom: `"Euclid Circular B", sans-serif`,
  },

  styles: {
    global: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '#root': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '$100vh',
      },
    },
  },
});
