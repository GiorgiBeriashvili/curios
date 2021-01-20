import HalfMoon from 'halfmoon';

export const toastAlert = (
    message?: string | undefined,
    title?: string | undefined,
    alertType?: string | undefined,
    fillType?: string | undefined,
): void =>
    HalfMoon.initStickyAlert({
        content: message,
        title: title ?? 'Default Alert',
        alertType: alertType ?? 'alert-default',
        fillType: fillType ?? 'filled',
    });
