import { useRouter } from "next/router";
import Joke from "../components/Joke";

export default function JokeDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return <Joke id={id} />;
}
