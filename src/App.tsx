import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router';
import Home from './components/blogArticles/homePage/NL/Home-NL';
import PageOne from './components/blogArticles/AIMeetupFeb2025/NL/PageOne-NL';
import PageTwo from './components/blogArticles/DEVWORLD2025/NL/PageTwo-NL';
import HomeEn from './components/blogArticles/homePage/EN/Home-EN';
import PageOneEn from './components/blogArticles/AIMeetupFeb2025/EN/PageOne-EN';
import PageTwoEn from './components/blogArticles/DEVWORLD2025/EN/PageTwo-EN';
import {
  Header,
  Grid,
  LinkList,
  Heading,
} from '@amsterdam/design-system-react';
import { useCallback } from 'react';
import ProgressBar from './components/progressBar/ProgressBar';
import './App.css';
import ErrorPage from './components/animatedComponents/404/errorPage';

function ConferenceLinks() {
  const navigate = useNavigate();
  const location = useLocation();

  const isEnglish = location.pathname.startsWith('/en');

  const goToPageOne = useCallback(
    () => navigate(isEnglish ? '/en/ai-meetup' : '/ai-meetup'),
    [navigate, isEnglish]
  );

  const goToPageTwo = useCallback(
    () => navigate(isEnglish ? '/en/devworld2025' : '/devworld2025'),
    [navigate, isEnglish]
  );

  return (
    <Grid.Cell span={4}>
      <Heading className="ams-mb--sm" level={2} size="level-3">
        Conferences & Meetups
      </Heading>
      <LinkList>
        <LinkList.Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            goToPageOne();
          }}
        >
          AI On The Amstel Meetup, Amsterdam
        </LinkList.Link>
        <LinkList.Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            goToPageTwo();
          }}
        >
          DEVWORLD 2025
        </LinkList.Link>
      </LinkList>
    </Grid.Cell>
  );
}

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isEnglish = location.pathname.startsWith('/en');

  const handleTranslate = () => {
    if (isEnglish) {
      navigate(location.pathname.replace('/en', ''));
    } else {
      navigate('/en' + location.pathname);
    }
  };

  return (
    <div>
      <Header
        className="navbar"
        brandName="Blog - Tech Conferences"
        menuItems={[
          <Header.MenuLink
            key="1"
            href="#"
            lang="en"
            onClick={(e) => {
              e.preventDefault();
              handleTranslate();
            }}
          >
            {isEnglish ? 'Terug naar Nederlands' : 'Translate to English'}
          </Header.MenuLink>,
        ]}
      >
        <Grid paddingBottom="large">
          <Header.GridCellNarrowWindowOnly span="all">
            <LinkList>
              <LinkList.Link
                href="#"
                lang="en"
                onClick={(e) => {
                  e.preventDefault();
                  handleTranslate();
                }}
              >
                {isEnglish ? 'Terug naar Nederlands' : 'Translate to English'}
              </LinkList.Link>
            </LinkList>
          </Header.GridCellNarrowWindowOnly>

          <ConferenceLinks />
        </Grid>
      </Header>

      <div style={{ padding: '20px', minHeight: '100vh' }}>
        <Outlet />
      </div>
      <ProgressBar />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/ai-meetup', element: <PageOne /> },
      { path: '/devworld2025', element: <PageTwo /> },

      { path: '/en', element: <HomeEn /> },
      { path: '/en/ai-meetup', element: <PageOneEn /> },
      { path: '/en/devworld2025', element: <PageTwoEn /> },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
