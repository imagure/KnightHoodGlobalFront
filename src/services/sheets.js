const { GoogleSpreadsheet } = require("google-spreadsheet");
const {storage} = require("./firebase");

async function connectToApi() {
    const file = new GoogleSpreadsheet(process.env.REACT_APP_SHEET_ID);
    await file.useServiceAccountAuth({
      client_email: process.env.REACT_APP_CLIENT_EMAIL,
      private_key: process.env.REACT_APP_PRIVATE_KEY,
    });
    await file.loadInfo();
    return file;
}

async function addArenaRow(data) {
  let image_url;
  if (data.pictures.length > 0) {
    await storage.ref(`/arena_images/${data.pictures[0].name}`).put(data.pictures[0]);
    image_url = await storage.ref().child(`/arena_images/${data.pictures[0].name}`).getDownloadURL();
  }
  const file = await connectToApi();
  const sheet = file.sheetsByIndex[1];
  await sheet.addRow([
    "'" + data.name,
    "'" + data.points,
    "'" + data.guild,
    image_url
  ]);
}

async function addBossRow(data) {
  let image_url;
  if (data.pictures.length > 0) {
    await storage.ref(`/boss_images/${data.pictures[0].name}`).put(data.pictures[0]);
    image_url = await storage.ref().child(`/boss_images/${data.pictures[0].name}`).getDownloadURL();
  }
  const file = await connectToApi();
  const sheet = file.sheetsByIndex[2];
  await sheet.addRow([
    "'" + data.name,
    "'" + data.points,
    "'" + data.boss,
    image_url
  ]);
}

async function addRiftRow(data) {
  let image_url;
  if (data.pictures.length > 0) {
    await storage.ref(`/rift_images/${data.pictures[0].name}`).put(data.pictures[0]);
    image_url = await storage.ref().child(`/boss_images/${data.pictures[0].name}`).getDownloadURL();
  }
  const file = await connectToApi();
  const sheet = file.sheetsByIndex[2];
  await sheet.addRow([
    "'" + data.name,
    "'" + data.points,
    image_url
  ]);
}

async function readArenaEntries() {
  const file = await connectToApi();
  const data = {};
  for (let sheet of file.sheetsByIndex) {
    if (sheet.title[1]=="A") {
      await sheet.loadCells();
      data[sheet.title] = await sheet.getCellsInRange("A1:H100");
    }
  }

  return data;
}

async function readBossEntries() {
  const file = await connectToApi();
  const data = {};
  for (let sheet of file.sheetsByIndex) {
    if (sheet.title[1]=="B") {
      await sheet.loadCells();
      data[sheet.title] = await sheet.getCellsInRange("A1:H15");
    }
  }

  return data;
}

async function readGuildRow() {
  const file = await connectToApi();
  const data = {};
  const sheet = file.sheetsByIndex[0];
  await sheet.loadCells();
  return await sheet.getCellsInRange("A2:C100");
}

async function readHallOfFame() {
  const file = await connectToApi();
  const data = {};
  for (let sheet of file.sheetsByIndex) {
    if (sheet.title[1]=="H") {
      await sheet.loadCells();
      data[sheet.title] = await sheet.getCellsInRange("A2:E20");
    }
  }

  return data;
}

async function readRiftEntries() {
  const file = await connectToApi();
  const data = {};
  for (let sheet of file.sheetsByIndex) {
    if (sheet.title[1]=="R") {
      await sheet.loadCells();
      data[sheet.title] = await sheet.getCellsInRange("A1:H15");
    }
  }

  return data;
}

export {
  addArenaRow,
  addBossRow,
  addRiftRow,
  readArenaEntries,
  readGuildRow,
  readBossEntries,
  readHallOfFame,
  readRiftEntries
}
