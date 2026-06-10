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

stack(getBassLayer()).cpm(config.tempo);
