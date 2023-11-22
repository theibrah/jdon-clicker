let valueText = document.getElementById("value");
let dpsText = document.getElementById("dps");

let items = [
  {
    name: "viewer",
    price: 10,
    dpc: 0,
    dps: 0.2,
  },
  {
    name: "donation",
    price: 150,
    dpc: 0,
    dps: 1,
  },
  {
    name: "sub",
    price: 499,
    dpc: 0,
    dps: 2.5,
  },
  {
    name: "mod",
    price: 1500,
    dpc: 1,
    dps: 6,
  },
  {
    name: "discMod",
    price: 2800,
    dpc: 3,
    dps: 15,
  },
];

let saveFile = {
  dons: 0,
  viewer: 0,
  donation: 0,
  sub: 0,
  mod: 0,
  discMod: 0,
  achievements: [],
  totalGen: {
    click: 0,
    viewer: 0,
    donation: 0,
    sub: 0,
    mod: 0,
    discMod: 0,
  },
};

let theme = 0;
let themeName = "Dons";
let primary = "purple";
let secondary = "blue";

let previousSaveUsed = false;
if (localStorage.getItem("save")) {
  const importedFile = JSON.parse(atob(localStorage.getItem("save")));
  Object.keys(saveFile).forEach((key) => {
    if (Object.keys(importedFile).includes(key)) {
      // console.log(`CHANGED ${key} ${saveFile[key]} -> ${importedFile[key]}`);
      saveFile[key] = importedFile[key];
    }
  });
  console.log("loaded previous");
  previousSaveUsed = true;
  console.log(saveFile);
}

const shopContainer = document.getElementById("shop-container");
const shopItems = shopContainer.querySelectorAll("div");
shopItems.forEach((ele, i) => {
  console.log(ele);
  let showingAlready = false;
  ele.addEventListener("mouseover", () => {
    const genPerSec = document.createElement("p");
    const genTotal = document.createElement("p");
    let reload = setInterval(() => {
      let dps = Math.round(items.find((item) => item.name === ele.id).dps * saveFile[`${ele.id}`] * 100) / 100;
      let total = Math.round(saveFile.totalGen[`${ele.id}`] * 10) / 10;
      genPerSec.textContent = `Generating ${dps} ${themeName}/second`;
      genTotal.textContent = `Generated ${total} ${themeName} total`;
    }, 10);
    genPerSec.classList.add("gen-sec");
    genTotal.classList.add("gen-overall");
    // if (!showingAlready) shopContainer.appendChild(genPerSec), (showingAlready = true);
    if (!showingAlready) {
      shopContainer.insertBefore(genPerSec, shopItems[i + 1]);
      shopContainer.insertBefore(genTotal, shopItems[i + 1]);
      showingAlready = true;
    }
    ele.addEventListener("mouseleave", () => {
      showingAlready = false;
      clearInterval(reload);
      genPerSec.remove();
      genTotal.remove();
    });
  });
});

let achievements = [
  { name: "Welcome to Hell", desc: "Begin clicking JDon", img: "achievements/jdon.png", tier: 1 },
  { name: "Donnie", desc: "Generate 1,000 Dons by clicking", img: "achievements/jdon.png", tier: 2 },
  { name: "Addicted", desc: "Generate 50,000 Dons by clicking", img: "achievements/jdon.png", tier: 3 },
  { name: "King Don", desc: "Generate 250,000 Dons by clicking", img: "achievements/jdon.png", tier: 4 },
  { name: "Avid Watcher", desc: "Buy a viewer", img: "achievements/viewer.png", tier: 1 },
  { name: "Withered", desc: "Generate 1,000 Dons with viewers", img: "achievements/viewer.png", tier: 2 },
  { name: "Delusion", desc: "Generate 50,000 Dons with viewers", img: "achievements/viewer.png", tier: 3 },
  { name: "Psychopath", desc: "Generate 250,000 Dons with viewers", img: "achievements/viewer.png", tier: 4 },
  { name: "Making Dosh", desc: "Buy a donation", img: "achievements/donation.png", tier: 1 },
  { name: "Donload", desc: "Generate 2,500 Dons with donations", img: "achievements/donation.png", tier: 2 },
  { name: "Baking Bread", desc: "Generate 100,000 Dons with donations", img: "achievements/donation.png", tier: 3 },
  { name: "Don Charity", desc: "Generate 500,000 Dons with donations", img: "achievements/donation.png", tier: 4 },
  { name: "Tier 1", desc: "Buy a subscription", img: "achievements/sub.png", tier: 1 },
  { name: "Tier 2", desc: "Generate 5,000 Dons with subscriptions", img: "achievements/sub.png", tier: 2 },
  { name: "Tier 3", desc: "Generate 200,000 Dons with subscriptions", img: "achievements/sub.png", tier: 3 },
  { name: "Subathon", desc: "Generate 750,000 Dons with subscriptions", img: "achievements/sub.png", tier: 4 },
  { name: "Uhm... Aktually", desc: "Buy a twitch mod", img: "achievements/twitchmod.png", tier: 1 },
  { name: "Certified Incel", desc: "Generate 15,000 Dons with twitch mods", img: "achievements/twitchmod.png", tier: 2 },
  { name: "Homeless", desc: "Generate 250,000 Dons with twitch mods", img: "achievements/twitchmod.png", tier: 3 },
  { name: "Cabin Fever", desc: "Generate 1,000,000 Dons with twitch mods", img: "achievements/twitchmod.png", tier: 4 },
  { name: "Thug Shaker Central", desc: "Buy a discord mod", img: "achievements/discordmod.png", tier: 1 },
  { name: "Certified Predator", desc: "Generate 30,000 Dons with discord mods", img: "achievements/discordmod.png", tier: 2 },
  { name: "Jamishio", desc: "Generate 500,000 Dons with discord mods", img: "achievements/discordmod.png", tier: 3 },
  { name: "Neckbeard", desc: "Generate 2,500,000 Dons with discord mods", img: "achievements/discordmod.png", tier: 4 },
  { name: "Don Arena", desc: "Obtain 1,000 Dons at once", img: "achievements/doncity.png" },
  { name: "Don Village", desc: "Obtain 10,000 Dons at once", img: "achievements/megalopolis.png" },
  { name: "Don City", desc: "Obtain 250,000 Dons at once", img: "achievements/megalopolis.png" },
  { name: "Don Megalopolis", desc: "Obtain 1,000,000 Dons at once", img: "achievements/megalopolis.png" },
  { name: "A Dozen Dons", desc: "Generate 12 Dons per second", img: "achievements/dozendons.png" },
  { name: "A Dozen Dozen Dons", desc: "Generate 144 Dons per second", img: "achievements/dozendons.png" },
  { name: "A Dozen Dozen Dozen Dons", desc: "Generate 1,728 Dons per second", img: "achievements/dozendons.png" },
  { name: "Don Don Don...", desc: "Welcome back.", img: "achievements/Floppy_Disk.png" },
  { name: "Losing It", desc: "Unlock all Tier 1 achievements", img: "achievements/1.png" },
  { name: "Schizophrenic", desc: "Unlock all Tier 2 achievements", img: "achievements/2.png" },
  { name: "Psychosis", desc: "Unlock all Tier 3 achievements", img: "achievements/3.png" },
  { name: "JDon Overlord", desc: "Unlock all Tier 4 achievements", img: "achievements/4.png" },
];
const achievementsDiv = document.getElementById("flexRowAchievements");
const achievementBackground = document.getElementById("achievementsContainer");
const achievementTitle = document.getElementById("achievementTitle");
const achievementDesc = document.getElementById("achievementDesc");
achievementTitle.style.marginTop = `-50px`;
for (let i = 0; i < achievements.length; i++) {
  const newAchievementElement = document.createElement("div");
  const newAchievementImg = document.createElement("img");
  newAchievementImg.src = achievements[i].img;
  newAchievementImg.classList.add("achievement-img");
  newAchievementImg.setAttribute("id", `achImg${i}`);
  newAchievementImg.setAttribute("draggable", `false`);
  achievementsDiv.appendChild(newAchievementElement);
  if (achievements[i].img) newAchievementElement.appendChild(newAchievementImg);
  newAchievementElement.classList.add("achievement");
  newAchievementElement.setAttribute("id", `ach${i}`);
  newAchievementElement.setAttribute("data-achievement-id", i);
  let newHeight;
  newAchievementElement.addEventListener("mouseover", () => {
    achievementTitle.style.opacity = 1;
    achievementDesc.style.opacity = 1;
    achievementTitle.style.marginTop = `-8px`;
    if (!saveFile.achievements.includes(achievements[i].name)) {
      achievementTitle.textContent = `???`;
      // achievementDesc.textContent = `Not Unlocked`;
      achievementDesc.textContent = achievements[i].desc;
      if (achievements[i].tier) achievementDesc.textContent = `${achievements[i].desc} (Tier ${achievements[i].tier})`;
    } else {
      achievementTitle.textContent = achievements[i].name;
      achievementDesc.textContent = achievements[i].desc;
      if (achievements[i].tier) achievementDesc.textContent = `${achievements[i].desc} (Tier ${achievements[i].tier})`;
    }

    let elementsInsideDiv = achievementsDiv.querySelectorAll("div").length;
    if (elementsInsideDiv % 9 === 0) {
      newHeight = 140 + Math.floor(elementsInsideDiv / 9) * 45 - 45;
    } else {
      newHeight = 140 + Math.floor(elementsInsideDiv / 9) * 45;
    }
    achievementBackground.style.height = `${newHeight}px`;
  });
  newAchievementElement.addEventListener("mouseleave", () => {
    achievementTitle.style.marginTop = `-50px`;
    achievementTitle.style.opacity = 0;
    achievementDesc.style.opacity = 0;

    // achievementTitle.textContent = ``;
    // achievementDesc.textContent = ``;
    let elementsInsideDiv = achievementsDiv.querySelectorAll("div").length;
    if (elementsInsideDiv % 9 === 0) {
      newHeight = 90 + Math.floor(elementsInsideDiv / 9) * 45 - 45;
    } else {
      newHeight = 90 + Math.floor(elementsInsideDiv / 9) * 45;
    }
    achievementBackground.style.height = `${newHeight}px`;
  });
}

function refreshAchievements() {
  document.getElementById("achievementsProgress").textContent = `${saveFile.achievements.length}/${achievements.length}`;
  for (let i = 0; i < achievements.length; i++) {
    let selDOM = document.getElementById(`ach${i}`);
    let selDOMImg = document.getElementById(`achImg${i}`);
    const selectedAch = saveFile.achievements.find((ach) => ach.toLowerCase() === achievements[i].name.toLowerCase());
    if (selectedAch) {
      selDOM.style.backgroundColor = "green";
      if (selDOMImg) selDOMImg.style.filter = "none";
    } else {
      selDOM.style.backgroundColor = "rgb(72, 72, 255)";
      if (selDOMImg) selDOMImg.style.filter = "grayscale()";
    }
  }

  for (let i = 0; i < 4; i++) {
    let selectTier = i + 1;
    let tieredAchievements = achievements.filter((ele) => ele.tier == selectTier);
    let saveFileTierXLength = 0;
    tieredAchievements.forEach((ele) => {
      if (saveFile.achievements.includes(ele.name)) saveFileTierXLength++;
    });
    if (saveFileTierXLength == tieredAchievements.length && selectTier == 1) awardAchievement("Losing It");
    if (saveFileTierXLength == tieredAchievements.length && selectTier == 2) awardAchievement("Schizophrenic");
    if (saveFileTierXLength == tieredAchievements.length && selectTier == 3) awardAchievement("Psychosis");
    if (saveFileTierXLength == tieredAchievements.length && selectTier == 4) awardAchievement("JDon Overlord");
  }
}
refreshAchievements();

function awardAchievement(id) {
  const selectedAch = achievements.find((e) => e.name.toLowerCase() === id.toLowerCase());
  if (!selectedAch) return console.error("Invalid Achievement");
  if (saveFile.achievements.includes(selectedAch.name)) return;
  const cheer = new Audio("hurray.mp3");
  cheer.play();
  saveFile.achievements.push(selectedAch.name);
  const newAchievementDiv = document.createElement("div");
  newAchievementDiv.classList.add("achievement-unlocked");
  const newAchievementHeader = document.createElement("p");
  newAchievementHeader.classList.add("achievement-unlocked-header");
  newAchievementHeader.innerHTML = `<b>Achievement Unlocked</b>`;
  const newAchievementTitle = document.createElement("p");
  newAchievementTitle.classList.add("achievement-unlocked-title");
  newAchievementTitle.innerHTML = `${selectedAch.name}`;
  const newAchievementImg = document.createElement("img");
  newAchievementImg.src = selectedAch.img;
  newAchievementImg.classList.add("achievement-unlocked-img");
  newAchievementDiv.appendChild(newAchievementHeader);
  newAchievementDiv.appendChild(newAchievementTitle);
  newAchievementDiv.appendChild(newAchievementImg);
  document.body.appendChild(newAchievementDiv);
  newAchievementDiv.style.bottom = "-8%";
  setTimeout(() => {
    newAchievementDiv.style.bottom = "0";
  }, 1);
  setTimeout(() => {
    newAchievementDiv.style.bottom = "-8%";
  }, 5000);
  setTimeout(() => {
    newAchievementDiv.remove();
  }, 6000);
  refreshAchievements();
}

let elementsInsideDiv = achievementsDiv.querySelectorAll("div").length;
let newHeight;
if (elementsInsideDiv % 9 === 0) {
  newHeight = 90 + Math.floor(elementsInsideDiv / 9) * 45 - 45;
} else {
  newHeight = 90 + Math.floor(elementsInsideDiv / 9) * 45;
}
achievementBackground.style.height = `${newHeight}px`;

let resetConfirmation = false;
let hasResetProgress = false;
function resetProgress() {
  if (resetConfirmation == false) {
    document.getElementById("resetButton").textContent = `Are you sure??`;
    resetConfirmation = true;
    setTimeout(() => {
      resetConfirmation = false;
      document.getElementById("resetButton").textContent = `Reset Progress`;
    }, 2000);
  } else {
    localStorage.removeItem("save");
    hasResetProgress = true;
    saveFile = {};
    location.reload();
  }
}

let dps = 0;
let dpc = 1;

for (i in items) {
  let amountOwned = saveFile[`${items[i].name}`];
  document.getElementById(`${items[i].name}Price`).textContent = `Costs ${items[i].price} Dons`;
  document.getElementById(`${items[i].name}Owned`).textContent = `${amountOwned} owned`;
  for (x = 0; x < amountOwned; x++) {
    items[i].price = Math.round((items[i].price *= 1.25));
    dps += items[i].dps;
    dpc += items[i].dpc;
    dpsText.textContent = `${dps.toFixed(1)} ${themeName}/second`;
    document.getElementById(`${items[i].name}Price`).textContent = `Costs ${items[i].price} ${themeName}`;
  }
}

function dropJdon() {
  const newImage = document.createElement("img");
  if (theme == 0) newImage.src = "pog.png";
  if (theme == 1) newImage.src = "aki.png";
  newImage.setAttribute(
    "style",
    `width: 100px; position: absolute; top: -15%; left: ${Math.floor(Math.random() * 100)}%; transform: translateX(-50%); transition: top 2s ease-in-out; z-index: -10; opacity: 60%; transform: rotate(${Math.floor(Math.random() * 360)}deg);`
  );
  document.body.appendChild(newImage);
  newImage.style.top = "calc(200vh - " + newImage.clientHeight + "px)";
  setTimeout(() => {
    newImage.remove();
  }, 1300);
}

function updateDons(amt, change) {
  if (!change) change = "add";
  if (change == "del") {
    saveFile.dons -= amt;
  } else if (change == "add") {
    saveFile.dons += amt;
  }
  if (change == "add" && amt >= 1) dropJdon();
  document.getElementById("value").textContent = `${Math.floor(saveFile.dons)} ${themeName}`;
  for (i in items) {
    if (saveFile.dons >= Math.round(items[i].price)) {
      document.getElementById(`${items[i].name}`).style.backgroundColor = "rgb(57,57,255)";
      // document.getElementById(`${items[i].name}`).style.backgroundColor = "green";
    } else {
      document.getElementById(`${items[i].name}`).style.backgroundColor = "rgb(72, 72, 255)";
    } // alter colour if purchaseable
  }
  if (saveFile.dons >= 1_000) awardAchievement("Don Arena");
  if (saveFile.dons >= 10_000) awardAchievement("Don Village");
  if (saveFile.dons >= 250_000) awardAchievement("Don City");
  if (saveFile.dons >= 1_000_000) awardAchievement("Don Megalopolis");
  if (saveFile.totalGen.click >= 1_000) awardAchievement("Donnie");
  if (saveFile.totalGen.click >= 50_000) awardAchievement("Addicted");
  if (saveFile.totalGen.click >= 250_000) awardAchievement("King Don");
  if (saveFile.totalGen.viewer >= 1_000) awardAchievement("Withered");
  if (saveFile.totalGen.viewer >= 50_000) awardAchievement("Delusion");
  if (saveFile.totalGen.viewer >= 250_000) awardAchievement("Psychopath");
  if (saveFile.totalGen.donation >= 2_500) awardAchievement("Donload");
  if (saveFile.totalGen.donation >= 100_000) awardAchievement("Baking Bread");
  if (saveFile.totalGen.donation >= 500_000) awardAchievement("Don Charity");
  if (saveFile.totalGen.sub >= 5_000) awardAchievement("Tier 2");
  if (saveFile.totalGen.sub >= 200_000) awardAchievement("Tier 3");
  if (saveFile.totalGen.sub >= 750_000) awardAchievement("Subathon");
  if (saveFile.totalGen.mod >= 15_000) awardAchievement("Certified Incel");
  if (saveFile.totalGen.mod >= 250_000) awardAchievement("Homeless");
  if (saveFile.totalGen.mod >= 1_000_000) awardAchievement("Cabin Fever");
  if (saveFile.totalGen.discMod >= 30_000) awardAchievement("Certified Predator");
  if (saveFile.totalGen.discMod >= 500_000) awardAchievement("Jamishio");
  if (saveFile.totalGen.discMod >= 2_500_000) awardAchievement("Neckbeard");
}

function clickImg() {
  const clickSound = new Audio("pop.mp3");
  clickSound.play();
  updateDons(dpc);
  saveFile.totalGen.click += dpc;
  awardAchievement("welcome to hell");
  console.log(saveFile.totalGen.click);
}

function purchase(item) {
  if (!items.find((ele) => ele.name === item)) return console.error("Invalid Item");
  let selection = items.find((ele) => ele.name === item);
  if (saveFile.dons >= selection.price) {
    const buyAudio = new Audio("buy.mp3");
    buyAudio.play();
    updateDons(selection.price, "del");
    dps += selection?.dps;
    dpc += selection?.dpc;
    saveFile[selection.name] += 1;
    selection.price = Math.round((selection.price *= 1.25));
    document.getElementById(`${selection.name}Owned`).textContent = `${saveFile[selection.name]} owned`;
    document.getElementById(`${selection.name}Price`).textContent = `Costs ${Math.round(selection.price)} ${themeName}`;
    dpsText.textContent = `${dps.toFixed(1)} ${themeName}/second`;
    //achievements
    if (item === "viewer") awardAchievement("Avid Watcher");
    if (item === "donation") awardAchievement("Making Dosh");
    if (item === "sub") awardAchievement("Tier 1");
    if (item === "mod") awardAchievement("Uhm... Aktually");
    if (item === "discMod") awardAchievement("Thug Shaker Central");
  }
}

document.getElementById("exportBox").style.display = "none";
document.getElementById("importBox").style.display = "none";
document.getElementById("settings").style.display = "flex";
document.getElementById("stats").style.display = "none";
function display(div) {
  if (div == "import") {
    if (document.getElementById("importBox").style.display == "none") {
      document.getElementById("importBox").style.display = "block";
      document.getElementById("importLoadButton").style.display = "block";
      document.getElementById("exportBox").style.display = "none";
      document.getElementById("importBox").value = ``;
    } else {
      document.getElementById("importBox").style.display = "none";
      document.getElementById("importLoadButton").style.display = "none";
    }
  }
  if (div == "export") {
    if (document.getElementById("exportBox").style.display == "none") {
      document.getElementById("exportBox").style.display = "block";
      document.getElementById("importLoadButton").style.display = "none";
      document.getElementById("importBox").style.display = "none";
      document.getElementById("exportBox").value = btoa(JSON.stringify(saveFile));
    } else {
      document.getElementById("exportBox").style.display = "none";
    }
  }
  if (div == "settings") {
    if (document.getElementById("settings").style.display == "none") {
      document.getElementById("settings").style.display = "flex";
    } else {
      document.getElementById("settings").style.display = "none";
    }
  }
  if (div == "stats") {
    if (document.getElementById("stats").style.display == "none") {
      document.getElementById("stats").style.display = "block";
    } else {
      document.getElementById("stats").style.display = "none";
    }
  }
}

let importCooldown = false;
function importPressed() {
  if (!importCooldown) {
    importCooldown = true;
    setTimeout(() => {
      document.getElementById("importLoadButton").innerText = "Load";
      importCooldown = false;
    }, 1000);
    let value = document.getElementById("importBox").value;
    try {
      value = atob(value);
      value = JSON.parse(value);
    } catch {
      document.getElementById("importLoadButton").innerText = "Invalid Save File";
      return;
    }
    // if import valid
    Object.keys(saveFile).forEach((ele) => {
      if (value[ele] !== undefined) {
        console.log("CHANGED", ele, saveFile[ele], "->", value[ele]);
        saveFile[ele] = value[ele];
      } else {
        console.warn("COULDN'T FIND", ele);
      }
    });
    document.getElementById("importLoadButton").innerText = "Loaded!";
    location.reload();
    // updateScreen();
  }
}

const themes = ["aki.png"];

function changeTheme(Sel) {
  const akiTune = new Audio("aki.mp3");
  if (Sel === 0) {
    theme = 0;
    document.getElementById("image").src = `pog.png`;
    document.body.background = ``;
    themeName = "Dons";
    primary = "purple";
    secondary = "blue";
  }
  if (Sel === 1) {
    akiTune.play();
    theme = 1;
    document.getElementById("image").src = `aki.png`;
    document.body.background = `akibackground.jpg`;
    themeName = "Akis";
    document.getElementById("value").style.color = "#D6C6FF";
  }
}

setInterval(() => {
  let delay = 100;
  updateDons(dps / delay);
  saveFile.totalGen.viewer += (saveFile.viewer * items.find((ele) => ele.name === "viewer").dps) / delay;
  saveFile.totalGen.donation += (saveFile.donation * items.find((ele) => ele.name === "donation").dps) / delay;
  saveFile.totalGen.sub += (saveFile.sub * items.find((ele) => ele.name === "sub").dps) / delay;
  saveFile.totalGen.mod += (saveFile.mod * items.find((ele) => ele.name === "mod").dps) / delay;
  saveFile.totalGen.discMod += (saveFile.discMod * items.find((ele) => ele.name === "discMod").dps) / delay;
  if (dps >= 12) awardAchievement("A Dozen Dons");
  if (dps >= 144) awardAchievement("A Dozen Dozen Dons");
  if (dps >= 1728) awardAchievement("A Dozen Dozen Dozen Dons");
  document.title = `${Math.floor(saveFile.dons)} ${themeName}`;
}, 10);

if (previousSaveUsed) awardAchievement("Don Don Don...");

window.addEventListener("beforeunload", () => {
  if (!hasResetProgress) localStorage.setItem("save", btoa(JSON.stringify(saveFile)));
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loading").remove();
});

setInterval(() => {
  var hasF = document.hasFocus();
  console.log(hasF);
}, 1000);
