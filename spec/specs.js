//Configurar jasmine
const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');
const jasmine = new Jasmine();

let reporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 3, //Indica que tanta palabra necesitas
    verbosity: 4, //Que tanto texto queremos en la terminal
    listStyle: 'indent',
    activity: false
});

jasmine.addReporter(reporter);
jasmine.showColors(true);
jasmine.loadConfigFile('./spec/jasmine.json')
jasmine.execute();