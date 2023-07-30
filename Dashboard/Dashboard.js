const express = require("express")
const path = require('path')
const fs = require('fs')
const bodyParser = require("body-parser")

// Utils
const update = require("../Util/UpdateUtil");


class Dashboard{
    constructor(params) {
        this.params = params;

        update.checkVersion();

        console.log("[SD] Initializing")
        if(!params.customIndex){
            params.customIndex = "";
        }

        if (!params.port) {
            console.log("[SD] Port isnt setup using port 750")
            params.port = 750
        }

        if (!params.client_id) {
            console.log("[SD] Client id inst setup")
            process.exit(0)
        }

        if (!params.client_secret) {
            console.log("[SD] Client Secret inst setup")
            process.exit(0)
        }

        if (!params.url) {
            console.log("[SD] Redirect Url isnt setup")
            process.exit(0)
        }

    }

    loadDashboard() {

        const params = this.params;

        const app = express()

        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        app.set('views', __dirname + "../Pages");
        
        app.listen(params.port)

        console.log("[SD] Runing on port" + params.port)
        console.log("[SD] By Jozo_85")

    }
}

module.exports = {
    Dashboard
}