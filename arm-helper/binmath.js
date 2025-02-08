function getLength(mask) {
    return Math.log2(mask + 1);
}

function bit32(val, shift, mask) {
    if (shift == null) {
        shift = 0;
    }
    if (mask == null) {
        mask = 0xFFFFFFFF;
    }

    return (val >>> shift) & mask;
}

function bit32_bin(val, shift, mask) {
    const subval = bit32(val, shift, mask);
    const length = getLength(mask);
    return '0b' + subval.toString(2).padStart(length, '0');
}