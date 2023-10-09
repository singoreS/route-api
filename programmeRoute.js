import express from "express";
import dbConnection from "../service/dbConnection.js";

const programmeRouter = express.Router();

programmeRouter.get("/", async (req, res) => {
  // requete SQL a éxécuter
  const query = `
    SELECT 
    programme.*, activiter.*
    FROM 
    Intergen.programme
    JOIN 
    Intergen.activiter
    JOIN 
    Intergen.programme_activiter
    ON 
    programme_activiter.programme_id = programme.id
    AND 
    programme_activiter.activiter_id = activiter.id
    ;`;

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



export default programmeRouter;
