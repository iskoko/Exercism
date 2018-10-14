const dnaToRna = {
    G : 'C',
    C : 'G',
    T : 'A',
    A : 'U'
}

const toRna = (dnaStrand) => {
    if (/[^GCTA]/gi.test(dnaStrand)) {
        throw new Error('Invalid input DNA.');
    }
    const dnaStrandUC = dnaStrand.toUpperCase();
    return dnaStrandUC.replace(/[GCTA]/g, rna => {
        return dnaToRna[rna];
    });
}

export { toRna };