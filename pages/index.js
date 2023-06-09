import EventItem from "@/components/EventItem";
import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Events To Show</h3>}
      {events?.map((evt) => (
        <EventItem evt={evt} key={evt.id} />
      ))}
      {
        events.length>0 && (<Link href='/events' className="btn-secondary"
        >View All Events</Link>)
      }
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();
  return {
    props: { events },
    revalidate: 1,
  };
}
