import Data from "../models/dataModel.js";
import { jsonData } from "../jsondata.js";

export const postAll = async (req, res) => {
  const postedData = await Data.insertMany(jsonData);

  res.status(200).json({
    status: "success",
    data: postedData,
  });
};

export const getAll = async (req, res) => {
  const { filters } = req.body;

  const data = await Data.aggregate([
    {
      $match: filters,
    },
    {
      $group: {
        _id: null,
        avgIntensity: {
          $avg: "$intensity",
        },
        avgRelevance: {
          $avg: "$relevance",
        },
        avgLikelihood: {
          $avg: "$likelihood",
        },
      },
    },
  ]);
  res.status(200).json({ status: "success", results: data.length, data: data });
};
