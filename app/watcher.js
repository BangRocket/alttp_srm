/* HEY. REMEMBER YOU DID THIS AS A SERVERMIDDLEWARE AND NOT AS A PLUGIN. FIX THAT */
import { watch } from 'chokidar'

// Initialize watcher.
const watcher = watch('incoming', {
  persistent: true,
  awaitWriteFinish: true,
  depth: 0
})

// Something to use when events are received.
const log = console.log.bind(console);

// Add event listeners.
watcher
  .on('add', (path) => { 
    log(`File ${path} has been added`)
      var count = watcher.getWatched()
      // console.log(count)
  })

