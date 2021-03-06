exports.up = function (knex) {
  console.log("creating staffexp");
  console.log("creating staff experience table");
  return knex.schema.createTable("staffExperience", (staffExperienceTable) => {
    staffExperienceTable.increments("experienceID");
    staffExperienceTable
      .integer("ProjectCode")
      .references("projects.ProjectCode");
    staffExperienceTable.integer("StaffID").references("staffMeta.StaffID");
    staffExperienceTable.decimal("TotalHrs");
    staffExperienceTable.text("experience");
  });
};

exports.down = function (knex) {
  console.log("dropping staff experience table");
  return knex.schema.dropTable("staffExperience");
};
