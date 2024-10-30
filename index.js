#!/usr/bin/env node

import fs from "fs";
import csv from "csv-parser";
import { createObjectCsvWriter as createCsvWriter } from "csv-writer";
import { MESSAGES, LINE_SETTINGS } from "./config.js";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error(MESSAGES.FILE_PATH_ERROR);
  process.exit(1);
}

const outputPath = inputPath;

let headers = [];
const records = [];
let lineNumber = 1;

fs.createReadStream(inputPath)
  .pipe(csv())
  .on("headers", (originalHeaderList) => {
    headers = [
      { id: LINE_SETTINGS.ID, title: LINE_SETTINGS.TITLE },
      ...originalHeaderList.map((header) => ({ id: header, title: header })),
    ];
  })
  .on("data", (row) => {
    records.push({ lineNumber: lineNumber++, ...row });
  })
  .on("end", () => {
    const csvWriter = createCsvWriter({
      path: outputPath,
      header: headers,
    });

    csvWriter
      .writeRecords(records)
      .then(() => {
        console.log(MESSAGES.SUCCESS_MESSAGE, outputPath);
      })
      .catch((error) => console.error(MESSAGES.ERROR_MESSAGE, error));
  });
