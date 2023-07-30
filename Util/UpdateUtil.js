const fetch = require("node-fetch")

async function checkVersion() {


    const data = await fetch('link to npm').then(r => r.json());
    let c_version = require('../package.json').version
    if (c_version.includes("dev")===true) return console.log("[SD] You are using dev version!");
    let l_version = data["dist-tags"].latest;
    if (c_version !== l_version) {
      console.log("You are not using the latest version of Simple Dashboard!");
    }
  
  }

  
module.exports = {
    checkVersion
}