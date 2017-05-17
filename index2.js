function slice(array, from, to) {
    let res = [], n = array.length;
    if (from === undefined)
        from = 0;
    if (to === undefined)
        to = n;
    if (from < 0)
        from = 0;
    if (to < 0)
        to += n;
    if (to > n)
        to = n;
    for (let i = from; i < to; i++)
        res.push(array[i]);
    return res;
}
export {
    slice
};
