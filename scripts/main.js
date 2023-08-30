import * as MC from "@minecraft/server"
import { configs } from "./config.js";

MC.world.afterEvents.entityHurt.subscribe((ev) => {
    const { damage, damageSource, hurtEntity } = ev;
    if (!(hurtEntity instanceof MC.Player) || damageSource.cause !== `fall`) return;
    hurtEntity.runCommandAsync(`inputpermission set @s movement disabled`)
    hurtEntity.dimension.spawnParticle(`minecraft:death_explosion_emitter`, hurtEntity.getHeadLocation(), new MC.MolangVariableMap())
    MC.system.runTimeout(() => {
        hurtEntity.runCommandAsync(`inputpermission set @s movement enabled`)
    }, damage * configs.stopTimeByDamageValue)
})
