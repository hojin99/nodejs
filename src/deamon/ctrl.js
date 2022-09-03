var daemon = require("daemonize2").setup({
    main: "app.js",
    name: "sampleapp",
    pidfile: "sampleapp.pid"
});

switch (process.argv[2]) {
 
    case "start":
        daemon.start();
        break;
 
    case "stop":
        daemon.stop();
        break;
 
    case "kill":
        daemon.kill();
        break;

    case "status":
        let ret = daemon.status();
        if(ret != 0) 
            console.log(`${daemon.name} is running - pid ${ret}`);
        else
        console.log(`${daemon.name} is not running`);
        
        break;

    default:
        console.log("Usage: [start|stop|kill|status]");
}
