import Home from "./home";

export default Home;

export async function getStaticProps() {
  const url = `${process.env.API_URL}/api/conspirators`;
  console.log(url);
  const res = await fetch(`${process.env.API_URL}/api/conspirators`);
  const conspirators = await res.json();

  return {
    props: {
      conspirators,
    },
  };
}