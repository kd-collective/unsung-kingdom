import config from '../data/config'
import chapters from '../data/chapters'
import missions from '../data/missions'
import areas from '../data/areas'
import Box from './Box'
import Pager from './Pager'
import FieldMap from './FieldMap'
import { slideIn } from '../util/animations'
import storage from '../data/storage'
import missionDescriptions from '../data/missionDescriptions'
const MAG = 0.25
const TILE_SIZE = config.TILE_SIZE * MAG
export default class MenuMap extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const bg = scene.add.rectangle(0, 0, config.WIDTH - 120, config.HEIGHT).setOrigin(0, 0).setInteractive().on('pointerup', v => {
      if (v.downX === v.upX && v.downY === v.upY && this.detail) this.setMissionDetail(null)
      this.lastX = null
      this.lastY = null
    }).on('pointerout', v => {
      this.lastX = null
      this.lastY = null
    }).on('pointermove', v => {
      if (v.isDown && this.map) {
        if (typeof this.lastX === 'number' && typeof this.lastY === 'number') {
          this.map.x += v.x - this.lastX
          this.map.y += v.y - this.lastY
        }
        this.lastX = v.x
        this.lastY = v.y
      }
    })
    this.add(bg)
    const title = scene.add.text(20, 15, 'MAP & QUESTS', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 21, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    const sub = scene.add.text(20, 41, t('ui.sub.quests'), { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    this.add([title, sub])
    this.setMap(this.scene.storage.state.map)
    this.setChapter(this.scene.storage.state.chapter)
  }
  setChapter (i) {
    this.chapter = i
    if (this.chapterLabel) this.chapterLabel.destroy()
    this.chapterLabel = this.getChapter(this.chapter, 30, 100)
    this.add(this.chapterLabel)
    if (this.missionLabels) this.missionLabels.forEach(v => v.destroy())
    this.missionLabels = missions.filter(v => v.chapter === this.chapter).map((mission, i) => this.getMission(mission, 165, 160 + i * 40))
    slideIn(this.scene, this.missionLabels)
    this.add(this.missionLabels)
    if (!this.pager) {
      this.pager = new Pager(this.scene, 30, 500, 270).on('prev', this.moveChapter.bind(this, -1)).on('next', this.moveChapter.bind(this, 1))
      this.add(this.pager)
    }
    this.pager.set(this.hasPrevious, this.hasNext)
    this.setMissionDetail(null)
  }
  moveChapter (diff) {
    if (![-1, 1].includes(diff) || (diff === -1 && !this.hasPrevious) || (diff === 1 && !this.hasNext)) return
    this.setChapter(this.chapter + diff)
  }
  get hasPrevious () {
    return this.chapter > 0
  }
  get hasNext () {
    return this.chapter < this.scene.storage.state.chapter
  }
  getChapter (i, x, y) {
    const chapter = chapters[i]
    const container = this.scene.add.container(x, y)
    const hasSub = chapter.sub
    const prefix = this.scene.add.text(0, 0, chapter.name, { fontSize: hasSub ? 17 : 14, fontStyle: 'bold', fontFamily: config.FONTS.TEXT }).setOrigin(0, 0)
    const title = this.scene.add.text(Math.max(prefix.width + 7, 50), hasSub ? -3 : 0, chapter.title, { fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.TEXT }).setOrigin(0, 0)
    container.add([prefix, title])
    if (hasSub) {
      const sub = this.scene.add.text(50, 15, chapter.sub, { fill: config.COLORS.gray.toColorString, fontSize: 10, fontFamily: config.FONTS.UI }).setOrigin(0, 0)
      container.add(sub)
    }
    return container
  }
  getMission (mission, x, y) {
    const state = storage.state.event[mission.key]
    const container = this.scene.add.container(x, y).setSize(295, 32)
    const box = new Box(this.scene, 0, 0, 295, 32)
    container.setInteractive().on('pointerdown', () => {
      if (!state.started) return
      this.scene.audio.se('click')
      this.setMissionDetail(mission)
    })
    const fill = state.started ? config.COLORS.white.toColorString : config.COLORS.ghost.toColorString
    const title = this.scene.add.text(-127, 0, state.started ? mission.title : '？？？', { fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.TEXT }).setOrigin(0, 0.5)
    const check = this.scene.add.sprite(120, 0, 'check').setTint(config.COLORS[state.completed ? 'theme' : 'ghost']).setFrame(Number(state.completed))
    container.add([box, title, check])
    container.key = mission.key
    container.setActive = bool => title.setFill(bool ? config.COLORS.theme.toColorString : fill)
    return container
  }
  setMissionDetail (mission) {
    if (this.detail) this.detail.destroy()
    if (!mission) {
      this.setMap(this.scene.storage.state.map, this.scene.storage.state.x, this.scene.storage.state.y)
      this.missionLabels.forEach(v => v.setActive(false))
      return
    }
    this.detail = this.getMissionDetail(mission, 330, 400)
    this.add(this.detail)
    this.setMap(mission.map.key, mission.map.x.toPixel, mission.map.y.toPixel)
    this.missionLabels.forEach(v => v.setActive(v.key === mission.key))
  }
  getMissionDetail (mission, x, y) {
    const container = this.scene.add.container(x, y)
    const title = this.scene.add.text(0, 0, mission.title, { fontSize: 15, fontStyle: 'bold', fontFamily: config.FONTS.TEXT }).setOrigin(0, 0)
    const text = missionDescriptions[mission.key] ? missionDescriptions[mission.key](storage.state) : '-'
    const desc = this.scene.add.text(0, 30, text, { fill: config.COLORS.gray.toColorString, fontSize: 13, fontStyle: 'bold', fontFamily: config.FONTS.TEXT, wordWrap: { width: 480, useAdvancedWrap: true } }).setOrigin(0, 0)
    desc.setLineSpacing(10)
    container.add([title, desc])
    return container
  }
  setMap (key, x = 0, y = 0) {
    const fieldFinder = v => v.key === key
    const area = areas.find(area => area.list.some(fieldFinder))
    if (!area) return
    const field = area.list.find(fieldFinder)
    const firstTime = !this.map
    if (firstTime || this.map.key !== area.key) {
      if (this.map) this.map.destroy()
      this.map = this.getMapImage(area.key)
      this.addAt(this.map, 0)
    }
    const positionX = config.WIDTH.half - (field.x * this.map.scale * TILE_SIZE) - (x * MAG)
    const positionY = config.HEIGHT.half - (field.y * this.map.scale * TILE_SIZE) - (y * MAG)
    if (firstTime) this.map.setPosition(positionX, positionY)
    this.scene.add.tween({ targets: this.map, duration: 200, ease: 'Power2', x: positionX, y: positionY })
  }
  getMapImage (key) {
    if (!this.mask) this.mask = this.scene.make.graphics().fillRect(0, -180, 895, 720).setRotation(0.18).createGeometryMask()
    return new FieldMap(this.scene, key).setMask(this.mask)
  }
}
