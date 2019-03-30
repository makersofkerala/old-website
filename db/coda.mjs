import Coda from 'coda-js';

const TOKEN = "43a23526-0cb1-4c75-88f3-f9de34260113";
 
const coda = new Coda.default(TOKEN);

const getTable = async (docId, tableId) => {

    const table = await (await coda.getDoc(docId)).getTable(tableId);

    const rows = await table.listRows({useColumnNames: true});

    const values = rows.map(row => row.listValues());

    return values;
    
};


const products = async () => {

    const products = await getTable("jFO1OMp-Lg", "grid-qpxPv9odSr");

    const selectors = ["Title", "Description", "Logo"];

    let selections = products.map(product => product.filter(selection => selectors.find(sel => sel == selection.column)));

    let result = selections.map(product => product.reduce((i, {column, value}) => Object.assign(i, {[column.toLowerCase()]: value}), {}));

    return result;
    
};

const events = async () => {

    const events = await getTable("jFO1OMp-Lg", "grid-qpxPv9odSr");

    const selectors = ["Title", "Venue", "From Date"];

    let selections = products.map(product => product.filter(selection => selectors.find(sel => sel == selection.column)));

    let result = selections.map(product => product.reduce((i, {column, value}) => Object.assign(i, {[column.toLowerCase()]: value}), {}));

    return result;
    
}

export { products, events };
