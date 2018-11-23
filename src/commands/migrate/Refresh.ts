import Common from '../../Common'

export default class MigrateRefresh extends Common {

  public static async run() {

    let database = await this.getInput('What database should I use?')
    let seed = await this.getYesNo('Should I seed the database for you?')
    let command = `migrate:refresh ${database.length > 0 ? '--database=' + database : ''} ${seed ? '--seed' : ''}`

    this.execCmd(command, async (info) => {
      if (info.err) {
        this.showError('The database could not be refreshed', info.err)
      } else {
        this.showMessage('The database has been refreshed')
      }
    })
  }
}
