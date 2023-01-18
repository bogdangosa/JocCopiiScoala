
export const createTable = (db,tableName,table_parameters) =>{
db.transaction(tx => {
    console.log(tx);
    tx.executeSql(
    `CREATE TABLE IF NOT EXISTS ${tableName} ${table_parameters}`, [],
    (txObj, Results) => console.log('Table Created ',Results),
    (txObj, error) => console.log('Error ', error))
})
}

export const addItem = (db,tableName,item) =>{
//console.log(item);
    db.transaction(tx => {
        tx.executeSql(`INSERT INTO ${tableName} ( name , type , image) values ( ? , ? , ? )`, [ item.name , item.type , item.image ],      
        (txObj, ResultsSet) => console.log('Results ', ResultsSet),
        (txObj, error) => console.log('Error ', error))
    }) // end transaction
}

export const addUser = (db,tableName,user_data) =>{
    //console.log(item);
    db.transaction(tx => {
        tx.executeSql(`INSERT INTO ${tableName} ( name , avatar , level , xp ) values ( ? , ? , ? , ? )`, [ user_data.name , user_data.avatar , user_data.level , user_data.xp ],      
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