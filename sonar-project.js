const sonarqubeScanner = require("sonarqube-scanner");

sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    options: {
      "sonar.projectDescription": "This is a Node JS application",
      "sonar.projectName": "NodeJS_Demo",
      "sonar.projectKey": "NodeJS_Demo",
      "sonar.login": "admin",
      "sonar.password": "Thanh@123",
      "sonar.projectVersion": "^3.0.1",
      "sonar.language": "js",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.sources": ".",
      //'sonar.tests': 'specs',
      //'sonar.inclusions' : 'src/**'
    },
  },
  () => {}
);
