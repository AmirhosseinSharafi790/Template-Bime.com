import Home from "./pages/Home/Home";
import Mag from './pages/Mag/Mag';
import Marketers from './pages/Marketers/Marketers';
import TrackingRequest from './pages/TrackingRequest/TrackingRequest';
const router = [
  { path: "/", element: <Home/> },
  { path: "/mag", element: <Mag/> },
  { path: "/marketers", element: <Marketers/> },
  { path: "/TrackingRequest", element: <TrackingRequest/> }
];
export default router