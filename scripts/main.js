import * as MC from "@minecraft/server"
import { configs } from "./config.js";

MC.world.afterEvents.entityHurt.subscribe((ev) => {
    const { damage, damageSource, hurtEntity } = ev;
    if (!(hurtEntity instanceof MC.Player) || damageSource.cause !== `fall`) return;
    hurtEntity.runCommandAsync(`inputpermission set @s movement disabled`)
    if(configs.showParticleOnStart) hurtEntity.dimension.spawnParticle(configs.IdOfParticleOnStart, hurtEntity.getHeadLocation(), new MC.MolangVariableMap())
    if(configs.playSoundOnStart) hurtEntity.playSound(configs.IdOfSoundOnStart)
    MC.system.runTimeout(() => {
        if(configs.playSoundOnStop) hurtEntity.playSound(configs.IdOfSoundOnStop)
        hurtEntity.runCommandAsync(`inputpermission set @s movement enabled`)
    }, damage * configs.stopTimeByDamageValue)
})
