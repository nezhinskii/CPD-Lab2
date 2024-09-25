class MiniMaple{
    /**
     * Symbolic diff method
     * @param {string} polynom - polynom to diff
     * @param {string} variable - variable by which to diff
     * @returns {string} - result of operation
     */
    static diff(polynom, variable) {
        if (/[^_A-Za-z]/.test(variable) || variable === undefined || variable.length < 1){
            throw Error('Unsupproted variable name');
        }
        if (/[^\d*^+\-\s_A-Za-z]/.test(polynom)){
            throw Error('Unsupproted symbol in polynom');
        }
        const termSignRegex = /(\+|-)?\s*([\s\w_\d*^]+)/g;
        let match;
        let result = '';
        while ((match = termSignRegex.exec(polynom)) !== null) {
            const sign = match[1];
            const term = match[2].trim().replaceAll(' ', '');
            const resultTerm = this.#diffTerm(term, variable);
            if (resultTerm.length == 0){
                continue;
            }
            const resultSign = result.length > 0 ? (sign === '-' ? ' - ':' + ') : (sign === '-' ? '- ':'');
            result = result + resultSign + resultTerm;
        }
        return result.length > 0 ? result:'0';
    }

    static #diffTerm(term, diffVariable) {
        const match = /^(\d+\*?)?([A-Za-z_]*)(\^\d+)?$/.exec(term);
        if (!match){
            throw Error(`Invalid term: ${term}`);
        }
        const coefficient = match[1] === undefined ? 1 : Number.parseInt(match[1].replace('*', ''));
        const termVariable = match[2];
        const degree = match[3] === undefined ? 1 : Number.parseInt(match[3].replace('^', ''));
        if (termVariable !== diffVariable || degree == 0 || coefficient == 0) {
            return '';
        }
        if (degree == 1) {
            return coefficient.toString();
        }
        return `${coefficient * degree}*${termVariable}${degree >= 3 ? `^${degree - 1}`:''}`;
    }
}

export {MiniMaple}