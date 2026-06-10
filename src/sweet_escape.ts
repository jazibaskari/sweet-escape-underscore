interface CompositionConfig {
  tempo: number;
  globalGain: number;
}

const config: CompositionConfig = {
  tempo: 60,
  globalGain: 0.4,
};

const getBassLayer = () =>
  note("c3 c3 f3 f3 g3 g3 a3 a3")
    .s("triangle")
    .sustain(0.1)
    .gain(config.globalGain);

const getThemeLayer = () =>
  note("<[c5 e5] ~ [c5 f5] ~ [g5 b5] ~ [a5 c6] ~>")
    .cat("~ <[c5 e5] ~ [d5 f5] ~ [e5 g5] ~ [f5 a5] ~>")
    .s("kalimba")
    .gain(config.globalGain);

stack(getBassLayer(), getThemeLayer()).cpm(config.tempo);
