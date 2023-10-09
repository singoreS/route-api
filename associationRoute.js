import express from "express";
import dbConnection from "../service/dbConnection.js"

const associationRouter = express.Router();

associationRouter.get("/", async (req, res) => {
    // requete SQL a éxécuter
    const query = `
        SELECT association.*
        FROM Intergen.association;
    `;
    // executer la requete
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

export default associationRouter;