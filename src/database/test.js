const Database = require('./db');
const saveHill = require('./saveHill')

Database.then(async db => {

    // insert data on table
    /* await saveHill(db, {

        id: 5,
        lat: "2.821869",
        lng: "-60.665413",
        name: "Ladeira do Bandeira",
        description: "Avenida bem lisa ao longo de boa parte de sua extensão",
        images: ["https://www.naladeira.com.br/wp-content/uploads/2018/11/4o-bellong-na-ladeira-downhill-skate-longboard2.jpeg", "https://img.ibxk.com.br/2015/09/09/09100005927498.jpg", "https://i.ytimg.com/vi/5u90v6XuR6g/maxresdefault.jpg", "https://independente.com.br/wp-content/uploads/2019/05/Ladeira-da-Linha-Harmonia-receber%C3%A1-as-feras-do-skate-downhill-neste-final-de-semana.jpg.jpg", "https://e.imguol.com/esporte/radicais/2011/09/24/sergio-yuppie-pentacampeao-mundial-desce-a-ladeira-da-morte-em-sao-paulo-24092011-1316918290400_615x300.jpg"
        ].toString(),
        advises: "A avenida tem uma iluminação muito ruim então evite horários noturnos"

    })
 */
    // consult data on table
    /* const selectedHills = await db.all("SELECT * FROM hills")
    console.log(selectedHills) */

    // consult hill by id
    /* const hill = await db.all('SELECT * FROM hills WHERE id = "1"')
    console.log(hill) */

    // delete
    console.log(await db.run("DELETE FROM hills WHERE id = '6'"))
    /* console.log(await db.run("DELETE * FROM hills")) */

})