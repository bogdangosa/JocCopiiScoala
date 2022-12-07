
/*
export const getDBConnection = async () => {
    return openDatabase(    {
        name:'MainDB',
        location:'default',
    }),
    () => { },
    error => {
      console.log("ERROR: " + error);
    }
};

export const createTable = async(db,tableName)=>{

    const query = `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,type TEXT);`;

    console.log(    db.executeSql(query) );

}

export const addItem = async(db,tableName,item)=>{
    const query = `INSERT INTO TABLE ${tableName} (name, type) VALUES ( ${item.name}, ${item.type} )`;

    return db.executeSql(query);
}*/