import { create } from '@storybook/theming/create';

export default create({
    base: 'light',
    brandTitle: 'Storybook',
    brandUrl: 'https://leuchtfeuer.com/',
    brandImage: 'https://cdn.leuchtfeuer.com/typo3conf/ext/lf_site/Resources/Public/Images/Icons/logo_leuchtfeuer.svg',
    brandTarget: '_self',

    //
    colorPrimary: '#f24130',
    colorSecondary: '#f24130',

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#585C6D',
    appBorderRadius: 4,

    // Text colors
    textColor: '#10162F',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#585C6D',
    barBg: '#ffffff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2,
});