describe("Test Templating Service", () => {
  const data = {
    date: new Date().toISOString(),
    text: "****",
  };
  const testTemplate = "Test text {{date}}: {{text}}";
  const {
    HandlebarsTemplateService,
  } = require("../src/services/HandlebarsTemplateService");
  const handlebarService = new HandlebarsTemplateService();
  test("Test 1: Handlebars Template", (done) => {
    const content = handlebarService.getTemplateData(testTemplate, data);
    expect(content).toBeDefined();
    expect(content).toContain(data.date);
    expect(content).toContain(data.text);
    done();
  });
});
