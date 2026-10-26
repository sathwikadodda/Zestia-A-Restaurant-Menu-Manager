
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URI);

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");

    const db = client.db("zestia");

    app.get("/", (req, res) => {
      res.send("Zestia backend is running!");
    });

    app.get("/api/health", async (req, res) => {
      try {
        await db.command({ ping: 1 });
        res.json({ status: "OK", database: "Connected" });
      } catch {
        res.status(500).json({ error: "Database connection failed" });
      }
    });

    app.get("/api/menu", async (req, res) => {
      try {
        res.json(await db.collection("menu_items").find({}).toArray());
      } catch {
        res.status(500).json({ error: "Could not fetch menu" });
      }
    });

    
    // Save a placed order to MongoDB
    app.post("/api/orders", async (req, res) => {
      try {
        const {
          orderId,
          tableNumber,
          sessionId,
          items,
          subtotal,
          tax,
          grandTotal
        } = req.body;

        if (
          !orderId ||
          !tableNumber ||
          !sessionId ||
          !Array.isArray(items) ||
          items.length === 0
        ) {
          return res.status(400).json({
            success: false,
            message: "Valid order details are required."
          });
        }

        const session = await db.collection("dining_sessions").findOne({
          sessionId,
          tableNumber: Number(
            String(tableNumber).replace(/\D/g, "")
          ),
          status: "active"
        });

        if (!session) {
          return res.status(400).json({
            success: false,
            message: "No active dining session found."
          });
        }

        const order = {
          orderId,
          tableNumber,
          sessionId,
          items,
          subtotal,
          tax,
          grandTotal,
          status: "placed",
          createdAt: new Date()
        };

        await db.collection("orders").insertOne(order);

        res.status(201).json({
          success: true,
          message: "Order saved successfully.",
          orderId
        });
      } catch (error) {
        console.error("Save order failed:", error.message);
        res.status(500).json({
          success: false,
          message: "Unable to save order."
        });
      }
    });


    app.post("/api/tables/claim", async (req, res) => {
      try {
        const { tableNumber, deviceToken } = req.body;
        const tableInt = parseInt(String(tableNumber ?? "").replace(/\D/g, ""), 10);

        if (!Number.isInteger(tableInt) || tableInt < 1 || !deviceToken) {
          return res.status(400).json({
            success: false,
            message: "Valid table number and device token are required."
          });
        }

        const tables = db.collection("restaurant_tables");
        const sessions = db.collection("dining_sessions");

        const existing = await tables.findOne({ tableNumber: tableInt });

        if (existing?.status === "occupied" &&
            existing.deviceToken !== deviceToken) {
          return res.json({
            success: false,
            message: `Table ${tableInt} is currently in use.`
          });
        }

        const sessionId = existing?.sessionId || require("crypto").randomUUID();

        await tables.updateOne(
          { tableNumber: tableInt },
          {
            $set: {
              status: "occupied",
              deviceToken,
              sessionId,
              updatedAt: new Date()
            },
            $setOnInsert: { tableNumber: tableInt }
          },
          { upsert: true }
        );

        await sessions.updateOne(
          { sessionId },
          {
            $set: {
              tableNumber: tableInt,
              deviceToken,
              status: "active",
              updatedAt: new Date()
            },
            $setOnInsert: { createdAt: new Date() }
          },
          { upsert: true }
        );

        res.json({ success: true, sessionId, message: `Table ${tableInt} claimed successfully.` });
      } catch (error) {
        console.error("Claim table failed:", error.message);
        res.status(500).json({ success: false, message: "Unable to claim table." });
      }
    });

    app.post("/api/sessions/request-bill", async (req, res) => {
      try {
        const { sessionId, deviceToken } = req.body;

        if (!sessionId || !deviceToken) {
          return res.status(400).json({
            success: false,
            message: "Session ID and device token are required."
          });
        }

        const sessions = db.collection("dining_sessions");
        const session = await sessions.findOne({
          sessionId,
          deviceToken,
          status: "active"
        });

        if (!session) {
          return res.status(404).json({
            success: false,
            message: "Active session not found."
          });
        }

        await sessions.updateOne(
          { _id: session._id },
          { $set: { status: "closed", billRequestedAt: new Date() } }
        );

        await db.collection("restaurant_tables").updateOne(
          { tableNumber: session.tableNumber, sessionId, deviceToken },
          {
            $set: { status: "available", updatedAt: new Date() },
            $unset: { sessionId: "", deviceToken: "" }
          }
        );

        res.json({ success: true, message: "Bill requested successfully." });
      } catch (error) {
        console.error("Request bill failed:", error.message);
        res.status(500).json({ success: false, message: "Unable to request bill." });
      }
    });

    const PORT = process.env.PORT || 5000;
    
    // Import existing Zestia menu data into MongoDB
    app.post("/api/menu/bulk", async (req, res) => {
      try {
        const items = req.body;

        if (!Array.isArray(items)) {
          return res.status(400).json({ error: "Expected a menu array" });
        }

        const result = await db.collection("menu_items").bulkWrite(
          items.map(item => ({
            updateOne: {
              filter: { id: item.id },
              update: { $set: item },
              upsert: true
            }
          }))
        );

        res.json({
          message: "Menu import successful",
          imported: result.upsertedCount,
          updated: result.modifiedCount
        });
      } catch (error) {
        console.error("Menu import failed:", error.message);
        res.status(500).json({ error: "Menu import failed" });
      }
    });

    app.listen(PORT, () => {
      console.log(`Zestia backend running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

startServer();
