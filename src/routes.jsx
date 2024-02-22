import Home from './pages/Home';
import Faq from './pages/Faq';
import BookNow from './pages/BookNow';
import CosmeticTattoos from './pages/CosmeticTattoos';
import EyelashExtensions from './pages/EyelashExtensions';
import IntensePulsedLight from './pages/Ipl';
import OtherServices from './pages/OtherServices';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/cosmeticTattoos', component: <CosmeticTattoos /> },
  { path: '/eyelashExtensions', component: <EyelashExtensions /> },
  { path: '/intensePulsedLight', component: <IntensePulsedLight /> },
  { path: '/otherServices', component: <OtherServices /> },
  { path: '/faq', component: <Faq /> },
  { path: '/bookNow', component: <BookNow /> },
];

export default routes;