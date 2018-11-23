import { window, workspace } from 'vscode'
import cp = require('child_process')
import Common from '../../Common'
import Output from '../../utils/Output'

export default class ConfigCacheClear extends Common {

  public static async run() {
    let command = `config:clear`
    this.execCmd(command, async (info) => {
      if (info.err) {
        return this.showError('The config cache could not be cleared', info.err)
      } else {
        return this.showMessage('The config cache was cleared')
      }
    })
  }
}
