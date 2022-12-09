module.exports = grammar({
  name: "pkgconfig",
  rules: {
    source_file: ($) => seq(
      repeat(seq(
        $._unit,
        "\n",
      )),
      optional($._unit)
    ),
    _unit: ($) => seq(
      field("left", $.atom),
      choice(
        ":",
        "="
      ),
      optional(field(
        "right",
        seq(
          repeat1(//choice(
            $.atom,
          ),
        )
      ))
    ),
    atom: (_) => /[\d${}A-Za-z\-\.\/]+/,
  },
});
