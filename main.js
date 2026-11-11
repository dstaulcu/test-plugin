const { Plugin, Notice } = require("obsidian");
module.exports = class TestPlugin extends Plugin {
  onload() {
    new Notice("Test Plugin 1.0.0 loaded");
    this.addCommand({ id: "hello", name: "Test Plugin: say hello", callback: () => new Notice("Hello from Test Plugin 1.0.0") });
  }
};
