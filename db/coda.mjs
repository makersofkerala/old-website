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

    const makers = await getMakers();

    const selectors = ["Title", "Description", "Logo", "Makers", "Launch Date", "Website", "PH Link", "Location", "Mail", "Twitter"];

    let selections = products.map(product => product.filter(selection => selectors.find(sel => sel == selection.column)));

    let result = selections.map(product => product.reduce((i, {column, value}) => {

    if(column == "Makers") {

    	     let makerNames = value.split(",").map(x => x.trim());

    	     value = makers.filter(maker => makerNames.indexOf(maker.name) !== -1);

    }
    
    return Object.assign(i, {[formatKey(column)]: value})

}
, {}));

    result = result.map(product => Object.assign(product, {id: formatKey(product.title)}));

    return result;
    
};

const selectColumns = (entity, selectors) =>  {

let selections = entity.map(e => e.filter(table => selectors.find(selection =>  selection === table.column)));

return selections.map(cols => cols.reduce((i, {column, value}) => Object.assign(i, {[formatKey(column)]: value}), {}));

}

const getEvents = async () => {

const events = await getTable("jFO1OMp-Lg", "grid-6unYzcrKtZ");

const selectors = ["Title", "Venue", "From Date"];

return selectColumns(events, selectors);

};

const getMakers = async () => {

const makers = await getTable("jFO1OMp-Lg", "grid-LwgQyOmtdm");

const selectors = ["Photo", "Name", "Role"];

return selectColumns(makers, selectors);

}

export { getProducts, getEvents, getMakers };
