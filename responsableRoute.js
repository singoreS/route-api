import express from "express";
import dbConnection from "../service/dbConnection.js"

const responsableRouter = express.Router();

responsableRouter.get("/", async (req, res) => {
    // requete SQL a éxécuter
    const query = `
    SELECT 
    responsable.*, etablissement.*
    FROM 
    Intergen.responsable
    JOIN 
    Intergen.etablissement
    ON 
    etablissement.id = responsable.etablissement_id;
    `;

    try {
        const [results] = await dbConnection.execute(query, req.body);

        return res.status(200).json({
            status: 200,
            message: "OK",
            data: results,
        });
        
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Error",
        });
    }
});

export default responsableRouter;