import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import apisaucePlugin from 'reactotron-apisauce';

function configure() {
  Reactotron
    .configure({host: 'localhost'})
    .configure({ name: 'IGB Software', secure: false })
    .use(sagaPlugin())
    .use(reactotronRedux())
    .use(apisaucePlugin({
      // ignoreContentTypes: /^(image)\/.*$/i   // <--- a way to skip printing the body of some requests (default is any image)
    }))


  connectConsoleToReactotron();
  return Reactotron.connect();
}


function connectConsoleToReactotron() {
  console.log = Reactotron.log;
}

export default {
  configure,
}
