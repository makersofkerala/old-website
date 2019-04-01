import Coda from 'coda-js';

const TOKEN = process.env.CODA_TOKEN;

const coda = new Coda.default(TOKEN);

const formatKey = (column = "") => column.toLowerCase().replace(/ /g, "_");

const getTable = async (docId, tableId) => {

    const table = await (await coda.getDoc(docId)).getTable(tableId);

    const rows = await table.listRows({useColumnNames: true});

    const values = rows.map(row => row.listValues());

    return values;
    
};

const getProducts = async () => {

    const products = await getTable("jFO1OMp-Lg", "grid-qpxPv9odSr");

    const selectors = ["Title", "Description", "Logo", "Makers", "Launch Date", "Website", "PH Link", "Location", "Mail", "Twitter"];

    let selections = products.map(product => product.filter(selection => selectors.find(sel => sel == selection.column)));

    let result = selections.map(product => product.reduce((i, {column, value}) => {

    if(column == "Makers") {

    value = value.split(",");

    }
    
    return Object.assign(i, {[formatKey(column)]: value})

}
, {}));

    result = result.map(product => Object.assign(product, {id: formatKey(product.title)}));

    return result;
    
};

const getEvents = async () => {

    const events = await getTable("jFO1OMp-Lg", "grid-6unYzcrKtZ");

    const selectors = ["Title", "Venue", "From Date"];

    let selections = events.map(event => event.filter(selection => selectors.find(sel => sel == selection.column)));

    let result = selections.map(event => event.reduce((i, {column, value}) => Object.assign(i, {[formatKey(column)]: value}), {}));

    return result;
    
}

export { getProducts, getEvents };
