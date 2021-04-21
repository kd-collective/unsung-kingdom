import 'phaser'
import './util/extendNativeClassFunctions'
import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'
import BootScene from './class/BootScene'
import TitleScene from './class/TitleScene'
import GameScene from './class/GameScene'
import UIScene from './class/UIScene'
import ArchiveManager from './class/ArchiveManager'
import AppStorage from './class/AppStorage'
import config from './data/config'
import storage from './data/storage'

Sentry.init({
  dsn: 'https://0180594f74c948eabada6f1e8c2e3c1a@o569163.ingest.sentry.io/5729629',
  integrations: [new Integrations.BrowserTracing()],
  release: `unsung-kingdom@${APP_VERSION}`,
  tracesSampleRate: 1.0
})

location.query = location.search.substr(1).split('&').filter(Boolean).reduce((obj, v) => {
  const arr = v.split('=')
  obj[arr[0]] = arr[1]
  return obj
}, {})

window.appStorage = new AppStorage()
window.archiveManager = new ArchiveManager()
if (window.gtag) {
  window.archiveManager.initGtag(window.gtag)
  window.addEventListener('error', e => {
    window.gtag('event', 'error', {
      event_label: `${e.filename}:${e.lineno} ${e.message}`
    })
  })
}
if (typeof greenworks !== 'undefined') {
  try {
    greenworks.init()
    window.archiveManager.initSteam(greenworks)
    window.appStorage.initSteam(greenworks)
  } catch (e) {
    alert(e)
  }
}
storage.loadSetting()

const option = {
  type: Phaser.AUTO,
  width: config.WIDTH,
  height: config.HEIGHT,
  scene: [BootScene, TitleScene, GameScene, UIScene],
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  },
  audio: {
    disableWebAudio: true
  },
  input: {
    activePointers: 3
  }
  // fps: { target: 30, forceSetTimeOut: true }
}

const game = new Phaser.Game(option)
window.game = game
window.addEventListener('resize', () => game.scale.refresh())
