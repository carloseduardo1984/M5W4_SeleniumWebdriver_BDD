const report = require("multiple-cucumber-html-reporter");

const dayjs = require("dayjs")
//datas do arquivo
const startsDate = dayjs().format("MMM DD, YYYY - hh:mm:ss a")

report.generate({
  jsonDir: "./json/",
  reportPath: "./report/",
  metadata: {
    browser: {
      name: "chrome",
      version: "+112",
    },
    device: "Local test machine",
    platform: {
      name: "Win10",
      version: "Win10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "11.2" },
      { label: "Cycle", value: "Q2-2023" },
      { label: 'Execution: ', value: startsDate},
      { label: 'Tester :',   value: 'CEO'},
    ],
  },

  scenarioTimestamp: true,
  displayDuration: true,
  pageTitle: 'Relatório de Teste',
  reportName: 'Relatório de Testes Automatizados',
  openReportInBrowser: true

});
