import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

function configure() {
  Reactotron
    // .configure({host: '192.168.2.31'})
    .configure({host: 'localhost'})
    .configure({ name: 'IGB Software', secure: false })
    .use(sagaPlugin())
    .use(reactotronRedux())


  connectConsoleToReactotron();
  return Reactotron.connect();
}


function connectConsoleToReactotron() {
  console.log = Reactotron.log;
}

export default {
  configure,
}
