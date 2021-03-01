import storage from '../data/storage'
import { MANDRAKE_COUNT } from '../event/drystan'
import { MAGIC_STONES } from '../event/princess'
import { WATER_COUNT } from '../event/marianne'
import { KELUNNE_COUNT } from '../event/allsRight'
const collection = (group, target, chance = 100) => {
  return group.filter(v => v.key === target && Math.chance(chance)).length
}
const list = [
  // m1_3
  (group, event) => {
    if (event.m1_3.completed || !event.m1_3.started) return
    const result = collection(group, 'mandrake', 75)
    if (!result) return
    event.m1_3.count += result
    return `${t('itemDrop.mandrake', result)}（${event.m1_3.count}/${MANDRAKE_COUNT}）`
  },
  // m2_2
  (group, event) => {
    if (event.m2_2.completed || !event.m2_2.started) return
    const result = collection(group, 'carbuncle', 75)
    if (!result) return
    event.m2_2.count += result
    return `${t('itemDrop.magicStone', result)}（${event.m2_2.count}/${MAGIC_STONES}）`
  },
  // m3_2
  (group, event) => {
    if (event.m3_2.completed || !event.m3_2.started) return
    const result = collection(group, 'phantom', 85)
    if (!result) return
    event.m3_2.count += result
    return `${t('itemDrop.water', result)}（${event.m3_2.count}/${WATER_COUNT}）`
  },
  // m3_3
  (group, event) => {
    if (event.m3_3.completed || !event.m3_3.started) return
    const result = collection(group, 'jack', 100)
    if (!result) return
    return t('itemDrop.dagger')
  },
  // m4_2
  (group, event) => {
    if (event.m4_2.completed || !event.m4_2.started) return
    const result = collection(group, 'bird', 75)
    if (!result) return
    event.m4_2.count += result
    return `${t('itemDrop.kelunne', result)}（${event.m4_2.count}/${KELUNNE_COUNT}）`
  }
]
export default class BattleQuestService {
  constructor (group) {
    this.group = group
  }
  getResult () {
    return list.map(v => v(this.group, storage.state.event)).filter(Boolean)
  }
}
