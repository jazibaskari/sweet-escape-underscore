stack(
  note("c3 c3 f3 f3 g3 g3 a3 a3").s("triangle").sustain(0.1).gain(0.4),

  note("<[c5 e5] ~ [c5 f5] ~ [g5 b5] ~ [a5 c6] ~>")
    .cat("~ <[c5 e5] ~ [d5 f5] ~ [e5 g5] ~ [f5 a5] ~>")
    .s("kalimba")
    .gain(0.4),

  note("<[c6 e6 g6 e6] [b5 d6 g6 d6] [a5 c6 e6 c6] [f5 a5 c6 a5]>")
    .s("kalimba")
    .room(0.5)
    .gain(0.3)
    .mask("0 0 0 0 1 1 1 1"),

  note("~ c7 ~ e7 ~ g7 ~ b7").s("bell").room(0.7).gain(0.2).mask("0 0 1 1"),

  s("hat")
    .hpf(8000)
    .gain(0.5)
    .mask("0 0 0 1")
    .every(2, (x) => x.ply(4))
).cpm(60);
