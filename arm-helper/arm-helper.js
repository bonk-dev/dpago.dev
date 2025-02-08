let value = null;
const fields = {
    encoded: null,
    topLevel: {
        op0: null,
        op1: null
    },
    sme: {
        op0: null,
        op1: null,
        op2: null
    },
    sve: {
        op0: null,
        op1: null,
        op2: null,
        op3: null
    },
    dataProcImm: {
        op0: null,
        op1: null
    },
    begsi: {
        op0: null,
        op1: null,
        op2: null
    },
    dataProcReg: {
        op0: null,
        op1: null,
        op2: null,
        op3: null
    },
    dataProcFp: {
        op0: null,
        op1: null,
        op2: null,
        op3: null
    },
    loadsStores: {
        op0: null,
        op1: null,
        op2: null
    }
};

function topLevel() {
    if (value == null) {
        fields.topLevel.op0.innerText = '';
        fields.topLevel.op1.innerText = '';
    }
    else {
        fields.topLevel.op0.innerText = bit32_bin(value, 31, 0b1);
        fields.topLevel.op1.innerText = bit32_bin(value, 25, 0b1111);
    }
}

function sme() {
    if (value == null) {
        fields.sme.op0.innerText = '';
        fields.sme.op1.innerText = '';
        fields.sme.op2.innerText = '';
    }
    else {
        fields.sme.op0.innerText = bit32_bin(value, 29, 0b11);
        fields.sme.op1.innerText = bit32_bin(value, 10, 0b111111111111111);
        fields.sme.op2.innerText = bit32_bin(value, 0, 0b111111);
    }
}

function sve() {
    if (value == null) {
        fields.sve.op0.innerText = '';
        fields.sve.op1.innerText = '';
        fields.sve.op2.innerText = '';
        fields.sve.op3.innerText = '';
    }
    else {
        fields.sve.op0.innerText = bit32_bin(value, 29, 0b111);
        fields.sve.op1.innerText = bit32_bin(value, 17, 0b11111111);
        fields.sve.op2.innerText = bit32_bin(value, 10, 0b111111);
        fields.sve.op3.innerText = bit32_bin(value, 4, 0b1);
    }
}

function dataProcImm() {
    if (value == null) {
        fields.dataProcImm.op0.innerText = '';
        fields.dataProcImm.op1.innerText = '';
    }
    else {
        fields.dataProcImm.op0.innerText = bit32_bin(value, 29, 0b11);
        fields.dataProcImm.op1.innerText = bit32_bin(value, 22, 0b1111);
    }
}

function begsi() {
    if (value == null) {
        fields.begsi.op0.innerText = '';
        fields.begsi.op1.innerText = '';
        fields.begsi.op2.innerText = '';
    }
    else {
        fields.begsi.op0.innerText = bit32_bin(value, 29, 0b111);
        fields.begsi.op1.innerText = bit32_bin(value, 12, 0b11111111111111);
        fields.begsi.op2.innerText = bit32_bin(value, 0, 0b11111);
    }
}

function dataProcReg() {
    if (value == null) {
        fields.dataProcReg.op0.innerText = '';
        fields.dataProcReg.op1.innerText = '';
        fields.dataProcReg.op2.innerText = '';
        fields.dataProcReg.op3.innerText = '';
    }
    else {
        fields.dataProcReg.op0.innerText = bit32_bin(value, 30, 0b1);
        fields.dataProcReg.op1.innerText = bit32_bin(value, 28, 0b1);
        fields.dataProcReg.op2.innerText = bit32_bin(value, 21, 0b1111);
        fields.dataProcReg.op3.innerText = bit32_bin(value, 10, 0b111111);
    }
}

function dataProcFp() {
    if (value == null) {
        fields.dataProcFp.op0.innerText = '';
        fields.dataProcFp.op1.innerText = '';
        fields.dataProcFp.op2.innerText = '';
        fields.dataProcFp.op3.innerText = '';
    }
    else {
        fields.dataProcFp.op0.innerText = bit32_bin(value, 28, 0b1111);
        fields.dataProcFp.op1.innerText = bit32_bin(value, 23, 0b11);
        fields.dataProcFp.op2.innerText = bit32_bin(value, 19, 0b1111);
        fields.dataProcFp.op3.innerText = bit32_bin(value, 10, 0b111111111);
    }
}

function loadsStores() {
    if (value == null) {
        fields.loadsStores.op0.innerText = '';
        fields.loadsStores.op1.innerText = '';
        fields.loadsStores.op2.innerText = '';
    }
    else {
        fields.loadsStores.op0.innerText = bit32_bin(value, 28, 0b1111);
        fields.loadsStores.op1.innerText = bit32_bin(value, 26, 0b1);
        fields.loadsStores.op2.innerText = bit32_bin(value, 10, 0b111111111111111);
    }
}

function onEncodedChange() {
    const parsedVal = parseInt(fields.encoded.value, 16);
    if (isNaN(parsedVal)) {
        // clear all
        value = null;
    }
    else {
        value = parsedVal;
        console.debug(`New value: ${value}`);
    }

    topLevel();

    sme();
    sve();
    dataProcImm();
    begsi();
    dataProcReg();
    dataProcFp();
    loadsStores();
}

function createTableHeaders() {
    for (const th of document.querySelectorAll('.help-table > table > thead')) {
        const row= document.createElement('tr');
        for (let i = 31; i >= 0; --i) {
            const cell = document.createElement('th');
            cell.innerText = i.toString();
            row.appendChild(cell);
        }
        th.appendChild(row);
    }
}

function init() {
    fields.encoded = document.getElementById('encoded');
    fields.encoded.addEventListener('input', onEncodedChange);

    fields.topLevel.op0 = document.getElementById('top-level-op0');
    fields.topLevel.op1 = document.getElementById('top-level-op1');

    fields.sme.op0 = document.getElementById('sme-op0');
    fields.sme.op1 = document.getElementById('sme-op1');
    fields.sme.op2 = document.getElementById('sme-op2');

    fields.sve.op0 = document.getElementById('sve-op0');
    fields.sve.op1 = document.getElementById('sve-op1');
    fields.sve.op2 = document.getElementById('sve-op2');
    fields.sve.op3 = document.getElementById('sve-op3');

    fields.dataProcImm.op0 = document.getElementById('data-proc-imm-op0');
    fields.dataProcImm.op1 = document.getElementById('data-proc-imm-op1');

    fields.begsi.op0 = document.getElementById('begsi-op0');
    fields.begsi.op1 = document.getElementById('begsi-op1');
    fields.begsi.op2 = document.getElementById('begsi-op2');

    fields.dataProcReg.op0 = document.getElementById('data-proc-reg-op0');
    fields.dataProcReg.op1 = document.getElementById('data-proc-reg-op1');
    fields.dataProcReg.op2 = document.getElementById('data-proc-reg-op2');
    fields.dataProcReg.op3 = document.getElementById('data-proc-reg-op3');

    fields.dataProcFp.op0 = document.getElementById('data-proc-fp-op0');
    fields.dataProcFp.op1 = document.getElementById('data-proc-fp-op1');
    fields.dataProcFp.op2 = document.getElementById('data-proc-fp-op2');
    fields.dataProcFp.op3 = document.getElementById('data-proc-fp-op3');

    fields.loadsStores.op0 = document.getElementById('loads-stores-op0');
    fields.loadsStores.op1 = document.getElementById('loads-stores-op1');
    fields.loadsStores.op2 = document.getElementById('loads-stores-op2');

    createTableHeaders();

    value = fields.encoded.value;
    onEncodedChange();
}

if (document.readyState !== 'loading') {
    init();
}
else {
    document.addEventListener('DOMContentLoaded', init);
}
