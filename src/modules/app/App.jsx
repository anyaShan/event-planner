import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { CommonLayout } from 'modules/common';

const EventsPage = lazy(() => import('modules/events/EventsPage'));
const EventPage = lazy(() => import('modules/event/EventPage'));
const NewEventPage = lazy(() => import('modules/newEvent/NewEventPage'));

export function App() {
  //   const dispatch = useDispatch();
  //   const { isRefreshing } = useAuth();

  //   useEffect(() => {
  //     dispatch(refreshUser());
  //   }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<EventsPage />} />
          <Route path="events/:id" element={<EventPage />} />
          {/* <Route path="events/:id/edit" element={<EditEventPage />} /> */}
          <Route path="events/new" element={<NewEventPage />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}
