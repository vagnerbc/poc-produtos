import { Box } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Produto from "../components/produto";
import { IProduto } from "../model/produto";


type Props = {
  produtos: IProduto[]
}

export default function Home({ produtos }: Props) {
  return (
    <Box>
      {produtos.map((produto, index) => (
        <Produto produto={produto} key={index} />
      ))}
    </Box>
  );
}

/**
 * STATIC GENERATION
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/produtos");
  const json = await res.json();

  return {
    props: {
      produtos: json.produtos,
    },
  };
};

/**
 * SERVER SIDE RENDERING
 */
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch("http://localhost:3000/api/produtos");
//   const json = await res.json();

//   return {
//     props: {
//       produtos: json.produtos,
//     },
//   };
// };