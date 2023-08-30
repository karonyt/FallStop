export const configs = {
    stopTimeByDamageValue: 10, //1ダメージ当たり何tick止まるか
    playSoundOnStart: true, //麻痺開始時に音を鳴らすか
    showParticleOnStart: true, //麻痺開始時にパーティクルを表示するか
    showParticleOnStop: true, //麻痺終了時にパーティクルを表示するか
    playSoundOnStop: true, //麻痺終了時に音を鳴らすか
    
    IdOfParticleOnStart: `minecraft:death_explosion_emitter`, //麻痺開始時のパーティクル名
    IdOfParticleOnStop: `minecraft:totem_particle`, //麻痺開始時のパーティクル名
    IdOfSoundOnStart: `random.glass`, //麻痺開始時に流れる音のID
    IdOfSoundOnStop: `step.amethyst_block` //麻痺終了時に流れる音のID
}
