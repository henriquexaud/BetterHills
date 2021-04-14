function saveHill(db, hill) {
    return db.run(`
        INSERT INTO hills (
            lat,
            lng,
            name,
            images,
            description,
            advises
        ) VALUES (
            "${hill.lat}",
            "${hill.lng}",
            "${hill.name}",
            "${hill.images}",
            "${hill.description}",
            "${hill.advises}"
        );
    `)
}

module.exports = saveHill;