describe("#snakeToCamel", () => {
  it("passes_standard_cases", function() {
    
    expect(snakeToCamel("a_man_a_plan")).toBe("aManAPlan");
    
    expect(snakeToCamel("awesome_plan")).toBe("awesomePlan");
    
    expect(snakeToCamel("HOW_ABOUT_NOW?")).toBe("HOWABOUTNOW?");
  });
});
