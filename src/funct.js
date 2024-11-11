export const kinetic = (m, d, v) => {
    const E = ((m / 1000) * v ** 2) / 2;
    const S = (Math.PI * d ** 2) / 4;
    return (E / S).toFixed(3);
};

export const masaPawder = d => {
    const S = (Math.PI * d ** 2) / 4;
    return (S / 100).toFixed(3);
};
