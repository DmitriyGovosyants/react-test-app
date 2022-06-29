import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import eventsData from "../eventsData.json";

export function App() {
  return (
    <>
      <PageTitle text="Hey there! This is my first react app!" />
      <EventBoard events={eventsData} />
    </>
  );
}
