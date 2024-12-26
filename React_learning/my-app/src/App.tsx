// import { lazy, Suspense } from "react";
import './App.css';
// import { CompoundComponentsDemo } from './components/DesignPatters/compoundComponents/demo';
// import Demo from './Hooks/useDeferredValueDemo/home'
import {CatFriends} from './preDefinedHooks/useRef'
// // @ts-ignore
// const MyLazyComponent = lazy(() => import('./lazyloadingEample/MyLazyComponent'));

// const App = () => {
//   return (
//     <div>
//      <h2>Flexbox Example</h2>
//     <h3>Without Height and width</h3>
  
//     <div className="parent">
//         <div className="child1">I am child special
//             and i am being
//         </div>
//         <div className="child2 ">I am child</div>
//         <div className="child3"> I am child</div>
//     </div>
//     <br></br>
//     </div>
//   );
// };

const App = () => {

  // const [explorerData, SetExplorerData] = useState(explorer)
  
  return (
    <>
    <CatFriends/>
    </>
  )
}

export default App;
