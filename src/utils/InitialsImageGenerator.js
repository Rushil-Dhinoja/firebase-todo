import { colors } from './colors';

export const random = () => {
    const randomNumber = Math.floor(Math.random() * Math.floor(colors.length));
    return colors[randomNumber];
};

export const initials = (name) => {
    let initials;
    const nameSplit = name.split(' ');
    const nameLength = nameSplit.length;

    if (nameLength > 1) {
        initials = nameSplit[0].substring(0, 1) + nameSplit[nameLength - 1].substring(0, 1);
    } else if (nameLength === 1) {
        initials = nameSplit[0].substring(0, 1);
    } else return;

    return initials.toUpperCase();
};

export const picturesFromInitials = (name, color, size = 500) => {
    if (name === null) return;

    name = initials(name);

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = canvas.height = size;

    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, size, size);

    context.fillStyle = `${color}50`;
    context.fillRect(0, 0, size, size);

    context.fillStyle = color;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.font = `${size / 2}px montserrat`;
    context.fillText(name, size / 2, size / 2);

    return canvas.toDataURL('image/jpg');
};
