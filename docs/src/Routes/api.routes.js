import express from "express";
import path from "path";

import {
  selectAssisted,
  selectAssisteds,
  insertAssisted,
  deleteAssisted,
  updateAssisted,
  deleteEverything,
} from "../Controller/Assisted.js";
import { 
  deleteService, 
  getServices, 
  insertService, 
  updateService 
} from "../Controller/Service.js";

export const apiRouter = express.Router();

/*
 *  Assisted endpoints ( Return all, return individual, insert, update, delete )
 */
apiRouter.get("/api/assisted", async (req, res) => {
  let assisted = await selectAssisteds();
  res.send(assisted);
});

apiRouter.get("/api/assisted/:id", async (req, res) => {
  let assisted = await selectAssisted(req.params.id);
  res.json(assisted);
});

apiRouter.post("/api/assisted", (req, res) => {
  insertAssisted(req.body);
  res.json({
    statusCode: 200,
  });
});

apiRouter.put("/api/assisted/:id", (req, res) => {
  if (req.body && !req.params.id) {
    res.json({
      statusCode: 400,
      msg: "Voce precisa informar um id.",
    });
  } else {
    updateAssisted(req.body);
    res.json({
      statusCode: 200,
    });
  }
});

apiRouter.delete("/api/assisted/:id", async (req, res) => {
  let assisted = await deleteAssisted(req.params.id);
  res.json(assisted);
});

/*
 *  Services endpoints ( Return all, insert, update, delete )
 */
apiRouter.get("/api/service", async (req, res) => {
  let service = await getServices();
  res.send(service);
});

apiRouter.post("/api/service", async (req, res) => {
  insertService(req.body);
  res.json({
    statusCode: 200,
  });
});

apiRouter.delete("/api/service/:id", async (req, res) => {
  let service = await deleteService();
  res.json(service);
});

apiRouter.put("/api.service/:id", async (req, res) => {
  if (req.body && !req.params.id) {
    res.json({
      statusCode: 400,
      msg: "Voce precisa informar um assistedId.",
    });
  } else {
    updateService(req.body);
    res.json({
      statusCode: 200,
    });
  }
})
/*
 * Collaborator endpoints ( Return all, insert, update, delete )
 */
apiRouter.get("/api/collaborators", async (req, res) => {});
