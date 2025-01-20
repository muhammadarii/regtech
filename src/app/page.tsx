import Content from "../components/content";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <div className="mx-auto container flex flex-row">
      <Sidebar />
      <Content />
    </div>
  );
}
