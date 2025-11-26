import { sva } from '@styled-system/css';

export const radioRecipe = sva({
  slots: ['root', 'label', 'item', 'control', 'indicator', 'text', 'description', 'requiredIndicator'],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3',
      width: '100%',
    },
    label: {
      fontWeight: 'medium',
      color: 'gray.700',
      _peerDisabled: { opacity: 0.7 },
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      cursor: 'pointer',
      position: 'relative',
      '&[data-disabled="true"]': {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
    control: {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: 0,
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      borderRadius: 'full',
      border: '2px solid',
      borderColor: 'gray.300',
      bg: 'white',
      transition: 'all 0.2s',

      _before: {
        content: '""',
        display: 'block',
        borderRadius: 'full',
        bg: 'transparent',
        transition: 'all 0.15s',
      },

      '&[data-state="checked"]': {
        borderColor: 'primary',
        _before: {
          bg: 'primary',
        },
      },

      '&[data-focus="true"]': {
        outline: '2px solid',
        outlineColor: 'primary',
        outlineOffset: '2px',
      },

      '&[data-disabled="true"]': {
        bg: 'gray.50',
        borderColor: 'gray.200',
      },
    },
    text: {
      color: 'gray.700',
      userSelect: 'none',
    },
    description: {
      color: 'gray.500',
    },
    requiredIndicator: {
      color: 'blue.500',
      ml: '1',
    },
  },

  variants: {
    size: {
      sm: {
        root: { gap: '2' },
        item: { gap: '1.5' },
        label: { fontSize: 'xs' },
        indicator: {
          width: '4',
          height: '4',
          _before: { width: '1.5', height: '1.5' },
        },
        text: { fontSize: 'xs' },
        description: { fontSize: 'xs' },
      },
      md: {
        root: { gap: '3' },
        item: { gap: '2' },
        label: { fontSize: 'sm' },
        indicator: {
          width: '5',
          height: '5',
          _before: { width: '2', height: '2' },
        },
        text: { fontSize: 'sm' },
        description: { fontSize: 'xs' },
      },
      lg: {
        root: { gap: '4' },
        item: { gap: '2.5' },
        label: { fontSize: 'md' },
        indicator: {
          width: '6',
          height: '6',
          _before: { width: '2.5', height: '2.5' },
        },
        text: { fontSize: 'md' },
        description: { fontSize: 'sm' },
      },
    },

    orientation: {
      vertical: {
        root: { flexDirection: 'column' },
      },
      horizontal: {
        root: { flexDirection: 'row', flexWrap: 'wrap' },
      },
    },

    invalid: {
      true: {
        indicator: {
          borderColor: 'danger',
          '&[data-state="checked"]': {
            borderColor: 'danger',
            _before: { bg: 'danger' },
          },
        },
        label: { color: 'danger' },
        text: { color: 'danger' },
        description: { color: 'danger' },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    orientation: 'vertical',
  },
});
