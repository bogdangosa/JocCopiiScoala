
export const createTable = (db,tableName) =>{
db.transaction(tx => {
    console.log(tx);
    tx.executeSql(
    `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,type TEXT)`, [],
    (txObj, Results) => console.log('Table Created ',Results),
    (txObj, error) => console.log('Error ', error))
})
}

export const addItem = (db,tableName,item) =>{
//console.log(item);
db.transaction(tx => {
    tx.executeSql(`INSERT INTO ${tableName} ( name , type ) values ( ? , ? )`, [ item.name , item.type ],      
    (txObj, ResultsSet) => console.log('Results ', ResultsSet),
    (txObj, error) => console.log('Error ', error))
}) // end transaction
}



export const dropTable = (db,tableName) =>{
    db.transaction(tx => {
        tx.executeSql(`DROP TABLE ${tableName}`,[],
        (txObj, Results) => console.log('Table Dropped ',Results),
        (txObj, error) => console.log('Error ', error))
    }) // end transaction
}