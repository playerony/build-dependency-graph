import fs from "fs";

const isString = (value) => typeof value === "string";

const getStat = (path) => fs.statSync(path);

const doesFileExist = (path) => fs.accessSync(path);

const isDirectory = (path) => getStat(path).isDirectory();

function validateEntryFile(entryFile) {
  if (!isString(entryFile)) {
    throw new Error("entryFile must be a string");
  }

  doesFileExist(entryFile);

  if (isDirectory(entryFile)) {
    throw new Error("entryFile is a directory path");
  }
}

function buildDependencyGraph(entryFile) {
  validateEntryFile(entryFile);
}

buildDependencyGraph('./to-bundle/index.js');
